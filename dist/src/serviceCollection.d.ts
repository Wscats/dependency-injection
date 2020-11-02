import { ServiceIdentifier } from './typings/type';
import { SyncDescriptor } from './descriptors';
export declare class ServiceCollection {
    private entries;
    constructor(...entries: [ServiceIdentifier<any>, SyncDescriptor<any> | any][]);
    set<T>(id: ServiceIdentifier<T>, instanceOrDescriptor: T | SyncDescriptor<T>): T | SyncDescriptor<T>;
    has(id: ServiceIdentifier<any>): boolean;
    get<T>(id: ServiceIdentifier<T>): T | SyncDescriptor<T>;
    forEach(callback: (id: ServiceIdentifier<any>, instanceOrDescriptor: SyncDescriptor<any> | any) => any): void;
}
