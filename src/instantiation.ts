/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * @author enoyao
 */

import { Ctor, ServiceIdentifier } from './typings/type';

// 用于获取target的$di$dependencies属性存储的依赖关系
export namespace _util {
  export const serviceIds = new Map<string, ServiceIdentifier<any>>();
  export const DI_TARGET = '$di$target';
  export const DI_DEPENDENCIES = '$di$dependencies';

  // 获取 $di$dependencies 依赖
  export function getServiceDependencies<T>(ctor: Ctor<T>): {
    id: ServiceIdentifier<T>;
    index: number;
    optional: boolean;
  }[] {
    return (ctor as any)[DI_DEPENDENCIES] || [];
  }
}

// 用于在target的$di$dependencies属性存储依赖关系
export function storeServiceDependency(
  id: Function,
  target: Function,
  index: number,
  optional: boolean,
): void {
  if ((target as any)[_util.DI_TARGET] === target) {
    (target as any)[_util.DI_DEPENDENCIES].push({ id, index, optional });
  } else {
    (target as any)[_util.DI_TARGET] = target;
    (target as any)[_util.DI_DEPENDENCIES] = [{ id, index, optional }];
  }
}

// 创建decorator
export function createDecorator<T>(serviceId: string): ServiceIdentifier<T> {
  if (_util.serviceIds.has(serviceId)) {
    return _util.serviceIds.get(serviceId) as ServiceIdentifier<T>;
  }

  const id = function serviceIdentifier(
    target: Ctor<T>,
    key: string,
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

export interface ServiceAccessor {
  get<T>(id: ServiceIdentifier<T>): T;
}

export interface IInstantiationService {
  createInstance<T extends new (...args: any[]) => any>(
    t: T,
    ...args: any[]
  ): InstanceType<T>;
}
