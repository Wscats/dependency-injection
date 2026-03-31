/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * Dependency Injection - Singleton registry.
 *
 * @author enoyao
 */

import { SyncDescriptor } from './descriptors';
import { Ctor, ServiceIdentifier } from './typings/type';

/** Global registry of singleton service descriptors. */
const _registry: [ServiceIdentifier<unknown>, SyncDescriptor<unknown>][] = [];

/**
 * Register a singleton service in the global registry.
 *
 * @param id - The service identifier.
 * @param ctor - The constructor for the service.
 * @param supportsDelayedInstantiation - Whether to defer creation until first access.
 */
export function registerSingleton<T>(
  id: ServiceIdentifier<T>,
  ctor: Ctor<T>,
  supportsDelayedInstantiation?: boolean,
): void {
  _registry.push([id, new SyncDescriptor<T>(ctor, [], supportsDelayedInstantiation)]);
}

/** Get all registered singleton service descriptors. */
export function getSingletonServiceDescriptors(): [ServiceIdentifier<unknown>, SyncDescriptor<unknown>][] {
  return _registry;
}
