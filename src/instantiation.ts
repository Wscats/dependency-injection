/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * Dependency Injection - Core instantiation utilities.
 * Provides decorator creation and dependency metadata storage.
 *
 * @author enoyao
 */

import { Ctor, ServiceIdentifier } from './typings/type';

// ── Internal Dependency Metadata ─────────────────────────────────────────────

/** Internal metadata keys and utilities for dependency injection. */
export namespace _util {
  export const serviceIds = new Map<string, ServiceIdentifier<unknown>>();
  export const DI_TARGET = '$di$target';
  export const DI_DEPENDENCIES = '$di$dependencies';

  /** Dependency descriptor stored on a constructor. */
  export interface ServiceDependency<T = unknown> {
    id: ServiceIdentifier<T>;
    index: number;
    optional: boolean;
  }

  /** Retrieve the dependency list stored on a constructor. */
  export function getServiceDependencies<T>(ctor: Ctor<T>): ServiceDependency[] {
    return (ctor as Record<string, unknown>)[DI_DEPENDENCIES] as ServiceDependency[] || [];
  }
}

// ── Dependency Storage ───────────────────────────────────────────────────────

/**
 * Store a service dependency on the target constructor's metadata.
 * This is called by the decorator created via `createDecorator`.
 */
export function storeServiceDependency(
  id: Function,
  target: Function,
  index: number,
  optional: boolean,
): void {
  const targetRecord = target as Record<string, unknown>;
  if (targetRecord[_util.DI_TARGET] === target) {
    (targetRecord[_util.DI_DEPENDENCIES] as _util.ServiceDependency[]).push({ id: id as ServiceIdentifier<unknown>, index, optional });
  } else {
    targetRecord[_util.DI_TARGET] = target;
    targetRecord[_util.DI_DEPENDENCIES] = [{ id: id as ServiceIdentifier<unknown>, index, optional }];
  }
}

// ── Decorator Factory ────────────────────────────────────────────────────────

/**
 * Create a parameter decorator that marks a constructor parameter
 * as a dependency to be injected.
 *
 * @param serviceId - A unique string identifier for the service.
 * @returns A `ServiceIdentifier` that can be used as a decorator and as a key.
 */
export function createDecorator<T>(serviceId: string): ServiceIdentifier<T> {
  if (_util.serviceIds.has(serviceId)) {
    return _util.serviceIds.get(serviceId) as ServiceIdentifier<T>;
  }

  const id = function serviceIdentifier(
    target: Ctor<T>,
    _key: string,
    index: number,
  ): void {
    if (arguments.length !== 3) {
      throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
    }
    storeServiceDependency(id, target, index, false);
  };

  id.toString = () => serviceId;
  _util.serviceIds.set(serviceId, id);
  return id;
}

// ── Interfaces ───────────────────────────────────────────────────────────────

/** Accessor for retrieving services within `invokeFunction`. */
export interface ServiceAccessor {
  get<T>(id: ServiceIdentifier<T>): T;
}

/** The instantiation service interface for creating class instances with DI. */
export interface IInstantiationService {
  createInstance<T extends new (...args: unknown[]) => unknown>(
    t: T,
    ...args: unknown[]
  ): InstanceType<T>;
}
