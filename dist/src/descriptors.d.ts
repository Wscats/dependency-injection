import { Ctor } from './typings/type';
export declare class SyncDescriptor<T> {
    readonly ctor: Ctor<T>;
    readonly staticArguments: any[];
    readonly supportsDelayedInstantiation: boolean;
    constructor(ctor: Ctor<T>, staticArguments?: any[], supportsDelayedInstantiation?: boolean);
}
