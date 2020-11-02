import { ServiceIdentifier } from './typings/type';
import { SyncDescriptor } from './descriptors';
export interface GraphItem {
    id: ServiceIdentifier<any>;
    desc: SyncDescriptor<any>;
}
export interface Node<GraphItem> {
    data: GraphItem;
    incoming: {
        [key: string]: Node<GraphItem>;
    };
    outcoming: {
        [key: string]: Node<GraphItem>;
    };
}
export declare class Graph<T> {
    private readonly keyFn;
    private readonly nodes;
    constructor(keyFn: (data: T) => string);
    root(): Node<T>[];
    lookupOrInsertNode(data: T): Node<T>;
    insertEdge(from: T, to: T): void;
    removeNode(data: T): void;
    lookup(data: T): Node<T> | undefined;
    isEmpty(): boolean;
}
