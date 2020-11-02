export type Ctor<T> = new (...args: any[]) => T;

export interface ServicesAccessor {
  get<T>(id: ServiceIdentifier<T>): T;
}

export interface ServiceIdentifier<T> {
  (target: Ctor<T>, key: string, index: number): void;
  toString(): string;
}


export interface ServicesAccessor {
  get<T>(id: ServiceIdentifier<T>): T;
}
