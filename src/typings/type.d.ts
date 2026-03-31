/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * Dependency Injection - Type definitions.
 *
 * @author enoyao
 */

/** Constructor type for a class that can be instantiated with `new`. */
export type Ctor<T> = new (...args: unknown[]) => T;

/** Service accessor for retrieving service instances by their identifier. */
export interface ServicesAccessor {
  get<T>(id: ServiceIdentifier<T>): T;
}

/**
 * A service identifier that doubles as a parameter decorator.
 * Used to mark constructor parameters for dependency injection.
 */
export interface ServiceIdentifier<T> {
  (target: Ctor<T>, key: string, index: number): void;
  toString(): string;
}


export interface ServicesAccessor {
  get<T>(id: ServiceIdentifier<T>): T;
}
