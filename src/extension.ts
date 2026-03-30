/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * @author enoyao
 */

import { SyncDescriptor } from './descriptors';
import { Ctor, ServiceIdentifier } from './typings/type';
/* eslint-disable no-underscore-dangle */

const _registry: [ServiceIdentifier<unknown>, SyncDescriptor<unknown>][] = [];

export function registerSingleton<T>(
  id: ServiceIdentifier<T>,
  ctor: Ctor<T>,
  supportsDelayedInstantiation?: boolean,
): void {
  _registry.push([id, new SyncDescriptor<T>(ctor, [], supportsDelayedInstantiation)]);
}

export function getSingletonServiceDescriptors(): [ServiceIdentifier<unknown>, SyncDescriptor<unknown>][] {
  return _registry;
}
