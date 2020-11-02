import { Ctor, ServiceIdentifier } from './typings/type';
export declare namespace _util {
    const serviceIds: Map<string, ServiceIdentifier<any>>;
    const DI_TARGET = "$di$target";
    const DI_DEPENDENCIES = "$di$dependencies";
    function getServiceDependencies<T>(ctor: Ctor<T>): {
        id: ServiceIdentifier<T>;
        index: number;
        optional: boolean;
    }[];
}
export declare function storeServiceDependency(id: Function, target: Function, index: number, optional: boolean): void;
export declare function createDecorator<T>(serviceId: string): ServiceIdentifier<T>;
export interface ServiceAccessor {
    get<T>(id: ServiceIdentifier<T>): T;
}
export interface IInstantiationService {
    createInstance<T extends new (...args: any[]) => any>(t: T, ...args: any[]): InstanceType<T>;
}
