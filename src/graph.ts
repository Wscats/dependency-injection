/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * Dependency Injection - Graph data structure for dependency resolution.
 *
 * @author enoyao
 */

import { ServiceIdentifier } from './typings/type';
import { SyncDescriptor } from './descriptors';

// ── Interfaces ───────────────────────────────────────────────────────────────

/** An item in the dependency graph, linking a service ID to its descriptor. */
export interface GraphItem {
  id: ServiceIdentifier<unknown>;
  desc: SyncDescriptor<unknown>;
}

/** A node in the dependency graph with incoming and outgoing edges. */
export interface Node<T> {
  data: T;
  incoming: Record<string, Node<T>>;
  outcoming: Record<string, Node<T>>;
}

/** Create a new graph node with empty edge maps. */
function newNode<T>(data: T): Node<T> {
  return {
    data,
    incoming: Object.create(null) as Record<string, Node<T>>,
    outcoming: Object.create(null) as Record<string, Node<T>>,
  };
}

// ── Graph Class ──────────────────────────────────────────────────────────────

/**
 * A directed graph for resolving service dependencies.
 * Supports topological ordering via root-node extraction.
 */
export class Graph<T> {
  private readonly nodes: Record<string, Node<T>> = Object.create(null) as Record<string, Node<T>>;

  constructor(private readonly keyFn: (data: T) => string) {}

  /** Get all leaf nodes (nodes with no outgoing edges). */
  root(): Node<T>[] {
    const ret: Node<T>[] = [];
    for (const nodeKey of Object.keys(this.nodes)) {
      const nodeElement = this.nodes[nodeKey];
      if (nodeElement && Object.getOwnPropertyNames(nodeElement.outcoming).length === 0) {
        ret.push(nodeElement);
      }
    }
    return ret;
  }

  /** Look up a node by data, or insert a new one if it doesn't exist. */
  lookupOrInsertNode(data: T): Node<T> {
    const key = this.keyFn(data);
    let node = this.nodes[key];
    if (!node) {
      node = newNode(data);
      this.nodes[key] = node;
    }
    return node;
  }

  /** Insert a directed edge from `from` to `to`. */
  insertEdge(from: T, to: T): void {
    const fromNode = this.lookupOrInsertNode(from);
    const toNode = this.lookupOrInsertNode(to);
    const fromKey = this.keyFn(from);
    const toKey = this.keyFn(to);
    fromNode.outcoming[toKey] = toNode;
    toNode.incoming[fromKey] = fromNode;
  }

  /** Remove a node and all its edges from the graph. */
  removeNode(data: T): void {
    const delKey = this.keyFn(data);
    delete this.nodes[delKey];
    for (const nodeKey of Object.keys(this.nodes)) {
      const nodeElement = this.nodes[nodeKey];
      if (nodeElement) {
        delete nodeElement.outcoming[delKey];
        delete nodeElement.incoming[delKey];
      }
    }
  }

  /** Look up a node by data. Returns undefined if not found. */
  lookup(data: T): Node<T> | undefined {
    return this.nodes[this.keyFn(data)];
  }

  /** Check if the graph has no nodes. */
  isEmpty(): boolean {
    return Object.keys(this.nodes).length === 0;
  }
}
