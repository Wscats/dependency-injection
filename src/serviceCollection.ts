import { ServiceIdentifier } from './typings/type';
import { SyncDescriptor } from './descriptors';

export class ServiceCollection {
  private entries = new Map<ServiceIdentifier<any>, SyncDescriptor<any> | any>();
  constructor(...entries: [ServiceIdentifier<any>, SyncDescriptor<any> | any][]) {
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

  has(id: ServiceIdentifier<any>): boolean {
    return this.entries.has(id);
  }

  get<T>(id: ServiceIdentifier<T>): T | SyncDescriptor<T> {
    return this.entries.get(id);
  }

  forEach(callback: (
    id: ServiceIdentifier<any>,
    instanceOrDescriptor: SyncDescriptor<any> | any
  ) => any): void {
    this.entries.forEach((value, key) => {
      callback(key, value);
    });
  }
}
