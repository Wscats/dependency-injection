/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * @author enoyao
 */

import { ServiceIdentifier } from './typings/type';
import { SyncDescriptor } from './descriptors';

/* eslint-disable no-useless-constructor */
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

function newNode<T>(data: T): Node<T> {
  return {
    data,
    incoming: Object.create(null),
    outcoming: Object.create(null),
  };
}

export class Graph<T> {
  private readonly nodes: { [key: string]: Node<T> } = Object.create(null);

  constructor(private readonly keyFn: (data: T) => string) { }

  /* 获取图结构的叶子节点 */
  root(): Node<T>[] {
    const ret: Node<T>[] = [];
    for (const nodeKey in this.nodes) {
      if (Object.prototype.hasOwnProperty.call(this.nodes, nodeKey)) {
        const nodeElement: Node<T> = this.nodes[nodeKey];
        if (Object.getOwnPropertyNames(nodeElement.outcoming).length === 0) {
          ret.push(nodeElement);
        }
      }
    }

    return ret;
  }

  /* 从图结构中获取节点，如果节点不存在就创建一个并插入图中 */
  lookupOrInsertNode(data: T): Node<T> {
    const key = this.keyFn(data);
    let node = this.nodes[key];
    if (!node) {
      node = newNode(data);
      this.nodes[key] = node;
    }

    return node;
  }

  /* 在图结构中插入一条边 */
  insertEdge(from: T, to: T): void {
    const fromNode = this.lookupOrInsertNode(from);
    const toNode = this.lookupOrInsertNode(to);
    const fromKey = this.keyFn(from);
    const toKey = this.keyFn(to);
    fromNode.outcoming[toKey] = toNode;
    toNode.incoming[fromKey] = fromNode;
  }

  /* 在图结构中移除一个节点 */
  removeNode(data: T): void {
    const delKey = this.keyFn(data);
    delete this.nodes[delKey];
    for (const nodeKey in this.nodes) {
      if (Object.prototype.hasOwnProperty.call(this.nodes, nodeKey)) {
        const nodeElement: Node<T> = this.nodes[nodeKey];
        delete nodeElement.outcoming[delKey];
        delete nodeElement.incoming[delKey];
      }
    }
  }

  /* 在图结构中查询节点 */
  lookup(data: T): Node<T> | undefined {
    return this.nodes[this.keyFn(data)];
  }

  /* 判断图结构是否为空 */
  isEmpty(): boolean {
    return Object.keys(this.nodes).length === 0;
  }
}
