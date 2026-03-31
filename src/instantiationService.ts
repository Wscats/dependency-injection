/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * Dependency Injection - Instantiation service.
 * Resolves dependencies and creates service instances.
 *
 * @author enoyao
 */

import { Ctor, ServiceIdentifier, ServicesAccessor } from './typings/type';
import { Graph, GraphItem } from './graph';
import { IInstantiationService, _util } from './instantiation';
import { ServiceCollection } from './serviceCollection';
import { SyncDescriptor } from './descriptors';

// ── IdleValue ────────────────────────────────────────────────────────────────

/**
 * A lazily-evaluated value that caches its result.
 * The executor runs at most once, on first access.
 */
export class IdleValue<T> {
  private readonly executor: () => void;
  private didRun = false;
  private value: T | undefined;
  private error: unknown;

  constructor(executor: () => T) {
    this.executor = () => {
      try {
        this.value = executor();
      } catch (error: unknown) {
        this.error = error;
      } finally {
        this.didRun = true;
      }
    };
  }

  /** Get the value, executing the factory on first call. */
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

// ── InstantiationService ─────────────────────────────────────────────────────

/**
 * The core instantiation service that resolves dependencies
 * and creates class instances via constructor injection.
 */
export class InstantiationService implements IInstantiationService {
  private readonly services: ServiceCollection;

  constructor(services: ServiceCollection = new ServiceCollection()) {
    this.services = services;
  }

  /**
   * Create an instance of a class, automatically injecting its dependencies.
   *
   * @param ctorOrDescriptor - The constructor or sync descriptor to instantiate.
   * @param rest - Additional arguments to pass after injected dependencies.
   */
  createInstance<T>(
    ctorOrDescriptor: new (...args: unknown[]) => T | SyncDescriptor<T>,
    ...rest: unknown[]
  ): unknown {
    return this.createCtorInstance(ctorOrDescriptor, rest);
  }

  /**
   * Invoke a function with a temporary service accessor.
   * The accessor is only valid during the function's execution.
   */
  invokeFunction<R, TS extends unknown[] = []>(
    fn: (accessor: ServicesAccessor, ...args: TS) => R,
    ...args: TS
  ): R {
    let done = false;
    try {
      const accessor: ServicesAccessor = {
        get: <T>(id: ServiceIdentifier<T>): T => {
          if (done) {
            throw new Error(
              'service accessor is only valid during the invocation of its target method',
            );
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

  // ── Private Methods ──────────────────────────────────────────────────────

  private createCtorInstance<T>(
    ctor: new (...args: unknown[]) => T,
    args: unknown[] = [],
  ): T {
    const serviceDependencies = _util
      .getServiceDependencies(ctor)
      .sort((a, b) => a.index - b.index);

    const serviceArgs: unknown[] = [];
    for (const dependency of serviceDependencies) {
      const serviceInstance = this.getOrCreateServiceInstance(dependency.id);
      serviceArgs.push(serviceInstance);
    }

    // eslint-disable-next-line new-cap
    return new ctor(...[...serviceArgs, ...args]);
  }

  private getOrCreateServiceInstance<T>(id: ServiceIdentifier<T>): T {
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

  private createAndCacheServiceInstance<T>(
    id: ServiceIdentifier<T>,
    desc: SyncDescriptor<T>,
  ): T {
    const graph = new Graph<GraphItem>((data) => data.id.toString());
    const stack: GraphItem[] = [{ id, desc }];

    while (stack.length) {
      const item = stack.pop()!;
      graph.lookupOrInsertNode(item);

      for (const dependency of _util.getServiceDependencies(item.desc.ctor)) {
        const instanceOrDesc = this.getServiceInstanceOrDescriptor(dependency.id);
        if (instanceOrDesc instanceof SyncDescriptor) {
          const dItem: GraphItem = { id: dependency.id, desc: instanceOrDesc };
          graph.insertEdge(item, dItem);
          stack.push(dItem);
        }
      }
    }

    // Topological sort: process leaf nodes first
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

    return this.getOrCreateServiceInstance(id);
  }

  private createServiceInstance<T>(
    id: ServiceIdentifier<T>,
    ctor: Ctor<T>,
    args: unknown[],
    supportsDelayedInstantiation: boolean,
  ): T {
    if (!(this.services.get(id) instanceof SyncDescriptor)) {
      throw new Error(`illegalState - create UNKNOWN service instance ${id.toString()}`);
    }

    if (!supportsDelayedInstantiation) {
      return this.createCtorInstance(ctor, args);
    }

    // Create a lazy proxy that defers instantiation until first property access
    const idleObj = new IdleValue<Record<PropertyKey, unknown>>(
      () => this.createCtorInstance(ctor, args) as unknown as Record<PropertyKey, unknown>,
    );

    return new Proxy(Object.create(null) as Record<PropertyKey, unknown>, {
      get(target: Record<PropertyKey, unknown>, key: PropertyKey): unknown {
        if (key in target) {
          return target[key];
        }
        const obj = idleObj.getValue();
        const prop = obj[key];
        if (typeof prop === 'function') {
          const boundProp = (prop as Function).bind(obj);
          target[key] = boundProp;
          return boundProp;
        }
        target[key] = prop;
        return prop;
      },
      set(_target: Record<PropertyKey, unknown>, key: PropertyKey, value: unknown): boolean {
        const obj = idleObj.getValue();
        obj[key] = value;
        return true;
      },
    }) as unknown as T;
  }
}
