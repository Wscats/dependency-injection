import { SyncDescriptor } from './descriptors';
import { Ctor, ServiceIdentifier } from './typings/type';
export declare function registerSingleton<T>(id: ServiceIdentifier<T>, ctor: Ctor<T>, supportsDelayedInstantiation?: boolean): void;
export declare function getSingletonServiceDescriptors(): [ServiceIdentifier<any>, SyncDescriptor<any>][];
