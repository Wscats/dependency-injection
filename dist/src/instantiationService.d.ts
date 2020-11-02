import { ServicesAccessor } from './typings/type';
import { IInstantiationService } from './instantiation';
import { ServiceCollection } from './serviceCollection';
import { SyncDescriptor } from './descriptors';
export declare class IdleValue<T> {
    private readonly executor;
    private didRun;
    private value;
    private error;
    constructor(executor: () => T);
    getValue(): T;
}
export declare class InstantiationService implements IInstantiationService {
    private readonly services;
    constructor(serices?: ServiceCollection);
    createInstance<T>(ctorOrDescriptor: new (...args: any[]) => T | SyncDescriptor<T>, ...rest: any[]): any;
    invokeFunction<R, TS extends any[] = []>(fn: (accessor: ServicesAccessor, ...args: TS) => R, ...args: TS): R;
    private createCtorInstance;
    private getOrCreateServiceInstance;
    private getServiceInstanceOrDescriptor;
    private createAndCacheServiceInstance;
    private createServiceInstance;
}
