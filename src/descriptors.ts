/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * Dependency Injection - Sync descriptor for lazy service instantiation.
 *
 * @author enoyao
 */

import { Ctor } from './typings/type';

/**
 * Wraps a constructor to enable lazy (deferred) instantiation.
 * Used by the service collection to store service definitions
 * that should be created on first access.
 */
export class SyncDescriptor<T> {
  readonly ctor: Ctor<T>;
  readonly staticArguments: unknown[];
  readonly supportsDelayedInstantiation: boolean;

  constructor(
    ctor: Ctor<T>,
    staticArguments: unknown[] = [],
    supportsDelayedInstantiation = false,
  ) {
    this.ctor = ctor;
    this.staticArguments = staticArguments;
    this.supportsDelayedInstantiation = supportsDelayedInstantiation;
  }
}
