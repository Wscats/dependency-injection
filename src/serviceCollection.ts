/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * @author enoyao
 */

import { ServiceIdentifier } from './typings/type';
import { SyncDescriptor } from './descriptors';

export class ServiceCollection {
  private entries = new Map<ServiceIdentifier<unknown>, SyncDescriptor<unknown> | any>();
  constructor(...entries: [ServiceIdentifier<unknown>, SyncDescriptor<unknown> | any][]) {
    for (const [id, service] of entries) {
      this.set(id, service);
    }
  }

  set<T>(
    id: ServiceIdentifier<T>,
    instanceOrDescriptor: T | SyncDescriptor<T>,
  ): T | SyncDescriptor<T> {
    const result = this.entries.get(id);
    this.entries.set(id, instanceOrDescriptor);
    return result;
  }

  has(id: ServiceIdentifier<unknown>): boolean {
    return this.entries.has(id);
  }

  get<T>(id: ServiceIdentifier<T>): T | SyncDescriptor<T> {
    return this.entries.get(id);
  }

  forEach(callback: (
    id: ServiceIdentifier<unknown>,
    instanceOrDescriptor: SyncDescriptor<unknown> | any
  ) => any): void {
    this.entries.forEach((value, key) => {
      callback(key, value);
    });
  }
}
