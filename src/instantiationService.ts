
import { Ctor, ServiceIdentifier, ServicesAccessor } from './typings/type';
import { Graph, GraphItem } from './graph';
import {
  IInstantiationService,
  _util,
} from './instantiation';
import { ServiceCollection } from './serviceCollection';
import { SyncDescriptor } from './descriptors';

export class IdleValue<T> {
  private readonly executor: () => void;
  private didRun = false;
  private value: T | undefined;
  private error: any;
  constructor(executor: () => T) {
    this.executor = () => {
      try {
        this.value = executor();
      } catch (error) {
        this.error = error;
      } finally {
        this.didRun = true;
      }
    };
  }

  getValue(): T {
    if (!this.didRun) {
      this.executor();
    }

    if (this.error) {
      throw this.error;
    }

    return this.value as T;
  }
}


export class InstantiationService implements IInstantiationService {
  private readonly services: ServiceCollection;

  constructor(serices: ServiceCollection = new ServiceCollection()) {
    this.services = serices;
  }

  createInstance<T>(
    ctorOrDescriptor: new (...args: any[]) => T | SyncDescriptor<T>,
    ...rest: any[]
  ): any {
    const result = this.createCtorInstance(ctorOrDescriptor, rest);
    return result;
  }


  invokeFunction<R, TS extends any[] = []>(
    fn: (accessor: ServicesAccessor, ...args: TS) => R,
    ...args: TS
  ): R {
    let done = false;
    try {
      const accessor: ServicesAccessor = {
        get: <T>(id: ServiceIdentifier<T>) => {
          if (done) {
            throw new Error('service accessor is only valid during the invocation of its target method');
          }

          const result = this.getOrCreateServiceInstance(id);
          if (!result) {
            throw new Error(`[invokeFunction] unknown service '${id}'`);
          }

          return result;
        },
      };
      return fn(accessor, ...args);
    } finally {
      done = true;
    }
  }


  private createCtorInstance<T>(
    ctor: new (...args: any[]) => T,
    args: any[] = [],
  ): T {
    const serviceDependencies = _util
      .getServiceDependencies(ctor)
      .sort((a, b) => a.index - b.index);
    const serviceArgs: any[] = [];
    for (const dependency of serviceDependencies) {
      const serviceInstance = this.getOrCreateServiceInstance(dependency.id);
      serviceArgs.push(serviceInstance);
    }

    // eslint-disable-next-line new-cap
    return new ctor(...[...serviceArgs, ...args]);
  }

  private getOrCreateServiceInstance<T>(id: ServiceIdentifier<T>) {
    const thing = this.getServiceInstanceOrDescriptor(id);
    if (thing instanceof SyncDescriptor) {
      return this.createAndCacheServiceInstance(id, thing);
    }

    return thing;
  }

  private getServiceInstanceOrDescriptor<T>(id: ServiceIdentifier<T>): T | SyncDescriptor<T> {
    const instanceOrDesc = this.services.get(id);
    if (!instanceOrDesc) {
      throw new Error(`service ${id.toString()} is not in collection`);
    }

    return instanceOrDesc;
  }

  private createAndCacheServiceInstance<T>(id: ServiceIdentifier<T>, desc: SyncDescriptor<T>): T {
    const graph = new Graph<GraphItem>((data) => data.id.toString());
    const stack: GraphItem[] = [{ id, desc }];
    while (stack.length) {
      const item = stack.pop() as GraphItem;
      graph.lookupOrInsertNode(item as any);
      for (const dependency of _util.getServiceDependencies(item.desc.ctor)) {
        const instanceOrDesc = this.getServiceInstanceOrDescriptor(dependency.id);
        if (instanceOrDesc instanceof SyncDescriptor) {
          const dItem = { id: dependency.id, desc: instanceOrDesc };
          graph.insertEdge(item, dItem);
          stack.push(dItem);
        }
      }
    }

    /* eslint-disable-next-line no-constant-condition */
    while (true) {
      const roots = graph.root();
      if (roots.length === 0) {
        break;
      }

      for (const { data } of roots) {
        const service = this.createServiceInstance(
          data.id,
          data.desc.ctor,
          data.desc.staticArguments,
          data.desc.supportsDelayedInstantiation,
        );
        this.services.set(data.id, service);
        graph.removeNode(data);
      }
    }

    const service = this.getOrCreateServiceInstance(id);
    return service;
  }

  private createServiceInstance<T>(
    id: ServiceIdentifier<T>,
    ctor: Ctor<T>, args: any[],
    supportsDelayedInstantiation: boolean,
  ): T {
    if (!(this.services.get(id) instanceof SyncDescriptor)) {
      throw Error(`illegalState - create UNKNOW service instance ${id.toString()}`);
    }

    if (!supportsDelayedInstantiation) {
      return this.createCtorInstance(ctor, args);
    }

    const idleObj = new IdleValue<any>(() => this.createCtorInstance(ctor, args));
    return new Proxy(Object.create(null), {
      get(target: any, key: PropertyKey): any {
        if (key in target) {
          return target[key];
        }

        const obj = idleObj.getValue();
        const prop = obj[key];
        if (typeof prop === 'function') {
          const bindProp = prop.bind(obj);
          target[key] = bindProp;
          return bindProp;
        }

        target[key] = prop;
        return prop;
      },
      set(target: T, key: PropertyKey, value: any): boolean {
        const obj = idleObj.getValue();
        obj[key] = value;
        return true;
      },
    });
  }
}
