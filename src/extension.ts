import { SyncDescriptor } from './descriptors';
import { Ctor, ServiceIdentifier } from './typings/type';
/* eslint-disable no-underscore-dangle */

const _registry: [ServiceIdentifier<any>, SyncDescriptor<any>][] = [];

export function registerSingleton<T>(
  id: ServiceIdentifier<T>,
  ctor: Ctor<T>,
  supportsDelayedInstantiation?: boolean,
): void {
  _registry.push([id, new SyncDescriptor<T>(ctor, [], supportsDelayedInstantiation)]);
}

export function getSingletonServiceDescriptors(): [ServiceIdentifier<any>, SyncDescriptor<any>][] {
  return _registry;
}
