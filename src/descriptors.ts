
import { Ctor } from './typings/type';
/* 用于包裹构造函数，延迟初始化类 */
export class SyncDescriptor<T> {
  readonly ctor: Ctor<T>;
  readonly staticArguments: any[];
  readonly supportsDelayedInstantiation: boolean;

  constructor(
    ctor: Ctor<T>,
    staticArguments: any[] = [],
    supportsDelayedInstantiation = false,
  ) {
    this.ctor = ctor;
    this.staticArguments = staticArguments;
    this.supportsDelayedInstantiation = supportsDelayedInstantiation;
  }
}
