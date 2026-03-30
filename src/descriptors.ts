/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * @author enoyao
 */

import { Ctor } from './typings/type';

/* 用于包裹构造函数，延迟初始化类 */
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
