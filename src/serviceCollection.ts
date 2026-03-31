/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * Dependency Injection - Service collection (registry).
 *
 * @author enoyao
 */

import { ServiceIdentifier } from './typings/type';
import { SyncDescriptor } from './descriptors';

/** A collection of service instances and descriptors, keyed by ServiceIdentifier. */
export class ServiceCollection {
  private entries = new Map<ServiceIdentifier<unknown>, unknown>();

  constructor(...entries: [ServiceIdentifier<unknown>, unknown][]) {
    for (const [id, service] of entries) {
      this.set(id, service);
    }
  }

  /** Register or replace a service instance or descriptor. Returns the previous value. */
  set<T>(
    id: ServiceIdentifier<T>,
    instanceOrDescriptor: T | SyncDescriptor<T>,
  ): T | SyncDescriptor<T> | undefined {
    const result = this.entries.get(id) as T | SyncDescriptor<T> | undefined;
    this.entries.set(id, instanceOrDescriptor);
    return result;
  }

  /** Check if a service is registered. */
  has(id: ServiceIdentifier<unknown>): boolean {
    return this.entries.has(id);
  }

  /** Get a service instance or descriptor by its identifier. */
  get<T>(id: ServiceIdentifier<T>): T | SyncDescriptor<T> | undefined {
    return this.entries.get(id) as T | SyncDescriptor<T> | undefined;
  }

  /** Iterate over all registered services. */
  forEach(callback: (
    id: ServiceIdentifier<unknown>,
    instanceOrDescriptor: unknown,
  ) => void): void {
    this.entries.forEach((value, key) => {
      callback(key, value);
    });
  }
}
