# IOC/DI

谈到依赖注入，必须先理解 IOC 与 DI。

- IOC，全称 Inversion Of Control，控制反转是面向对象编程的一种设计思想，主要用来降低代码之间的耦合度。

- DI，全称 Dependency Injection，依赖注入是 IOC 的具体实现。是指对象通过外部的注入，避免对象内部自身实现外部依赖的实例化过程。

IOC 控制反转的设计模式可以大幅度地降低了程序的耦合性。而 装饰器在 VSCode 的控制反转设计模式里，其主要作用是实现 DI 依赖注入的功能和精简部分重复的写法。由于该步骤实现较为复杂，我们先从简单的例子为切入点去了解装饰器的基本原理。

# Implementation

`@serviceA` 和 `@serviceB` 是参数装饰器，用于处理参数，是由 `createDecorator` 方法创建的。

- @参数装饰器使用方法：接收三个参数
  - target: 对于静态成员来说是类的构造器，对于实例成员来说是类的原型链
  - key: 方法的名称，注意是方法的名称，而不是参数的名称
  - index: 参数在方法中所处的位置的下标
- @返回：返回的值将会被忽略

```ts
class C {
  constructor(@serviceA private a: A, @serviceB private b: B) {}
}
```

所有参数装饰器均由 createDecorator 方法创建，`'A'` 和 `'B'`，均是该装饰器的唯一标识。

```ts
const serviceA = createDecorator("A");
const serviceB = createDecorator("B");
```

装饰器首先判断是否被缓存，如果有被缓存则取出已经缓存好的参数装饰器，如果没被缓存，则创建一个 `serviceIdentifier` 的参数装饰器。

```ts
function createDecorator<T>(serviceId: string): ServiceIdentifier<T> {
  if (_util.serviceIds.has(serviceId)) {
    return _util.serviceIds.get(serviceId) as ServiceIdentifier<T>;
  }
}
```

`serviceIdentifier` 参数装饰器只做了一件事就是触发 `storeServiceDependency` 把所有依赖项给存起来，存装饰器本身 `id`，参数的下标 `index` 以及是否可选 `optional`。

```ts
const id = function serviceIdentifier(target: Ctor<T>, key: string, index: number): void {
  storeServiceDependency(id, target, index, false);
};
id.toString = () => serviceId;
_util.serviceIds.set(serviceId, id);
```

`storeServiceDependency` 本质是往 `target` 即 `class C` 上设置两个静态属性 `$di$target` 和 `$di$dependencies` 上面分别存 `target`，自身还要再存一次自身 `target` 是为了判断是否已经存过依赖。

```ts
C.$di$target; // class C
C.$di$dependencies[0].id.toString(); // A 或者 B
C.$di$dependencies; // [{id: serviceIdentifier, index: 1, optional: false}, {id: serviceIdentifier, index: 0, optional: false}]
```

除了存在类上，还存在了 `_util.serviceIds` 上。

当类声明的时候，装饰器就会被应用，所以在有类被实例化之前依赖关系就已经确定好了。把 `ts` 编译就可以证明这点，可以看到 `__decorate` 在类声明的时候，装饰器就会被执行了，

```ts
var C = /** @class */ (function() {
  function C(a, b) {
    this.a = a;
    this.b = b;
  }
  C = __decorate([__param(0, serviceA), __param(1, serviceB)], C);
  return C;
})();
```

紧接着就到了 `ServiceCollection`，这里会将装饰器作为 key 唯一标识，实例化的类作为 value，全部存到 `svrsCollection` 中，`svrsCollection` 的实现也很简单，直接用 `Map` 方法存起来。

```ts
const aInstance = new A();
const bInstance = new B();
const svrsCollection = new ServiceCollection();
svrsCollection.set(serviceA, aInstance);
svrsCollection.set(serviceB, bInstance);
```

后续只需要使用 get 方法并传入对应的参数装饰器就可以获取对应的实例化好的类了。

```ts
svrsCollection.get(serviceA); // new A()
svrsCollection.get(serviceB); // new B()
```

`InstantiationService` 是实现依赖注入的核心，它是以参数装饰器，例如 `serviceA` 和 `serviceB` 等 `ServiceIdentifier` 为 `key` 在私有变量 `services` 中保存所有依赖注入的被实例化好的类。`services` 保存的是 `svrsCollection`。

```ts
const instantiationService = new InstantiationService(svrsCollection);
```

它暴露了三个公开方法：

- `createInstance` 该方法接受一个类以及构造该类的非依赖注入参数，然后创建该类的实例。
- `invokeFunction` 该方法接受一个回调函数，该回调函数通过 `acessor` 参数可以访问该 `InstantiationService` 中的所有依赖注入项。
- `createChild` 该方法接受一个依赖项集合，并创造一个新的 `InstantiationService` 说明 vscode 的依赖注入机制也是有层次的。

`createInstance` 方法是实例化的核心方法：

```ts
const cInstance = instantiationService.createInstance(C, "L", "R") as C;
```

首先是获取 `ctorOrDescriptor` 也就是类 `class C` 和需要传入非依赖注入的参数 `rest`。

```ts
const result = this.createCtorInstance(ctorOrDescriptor, rest);
```

然后使用 `getServiceDependencies` 把挂载 `class C` 静态属性的 `$di$dependencies` 给获取出来并排序，因为存的时候顺序是倒序的

```ts
const serviceDependencies = _util
  .getServiceDependencies(ctor)
  .sort((a, b) => a.index - b.index);
```

取出来的依赖项 `serviceDependencies` 主要是为了遍历并获取里面的参数装饰器 `serviceA` 和 `serviceB`。

```ts
const serviceArgs: any[] = [];
for (const dependency of serviceDependencies) {
  const serviceInstance = this.getOrCreateServiceInstance(dependency.id);
  serviceArgs.push(serviceInstance);
}
```

`getOrCreateServiceInstance` 本质就是从 `services` 即 `svrsCollection` 中获取实例化好的类。

```ts
const instanceOrDesc = this.services.get(id);
// 相当于 id 即参数装饰器
// svrsCollection.get(id);
```

当把所有的这些实例化好的类取出来放到 `serviceArgs` 中后，由于参数装饰器是类实例化的时候就执行完并收集好依赖项，所以 `serviceArgs` 就是对应 `ctor` 即 `class C` 需要注入的依赖参数，合并非依赖参数就能帮助我们成功实例化好我们的 `ctor` 类。

```ts
new ctor(...[...serviceArgs, ...args]);
```


# InversifyJS

# 通过 @injectable 装饰器标记类可注入

- `injectable` 是可注入的意思，也就是告知依赖注入框架这个类需要被注册到容器中
- `inject` 是注入的意思，它是一个装饰器工厂

用 `injectable` 装饰器来标志一个类是否是可依赖注入的，用 `inject` 装饰器来标志要注入的依赖类型，在解析阶段的时候会根据 `inject` 的参数在容器中查找依赖并注入。

```ts
import { Container, injectable, ContainerModule } from "inversify";
export interface IProvider<T> {
  getName(): T;
}

@injectable()
export class NameProvider implements IProvider<string> {
  getName() {
    return "World";
  }
}

// Container 可以看作是整个依赖注入链路的入口
const container = new Container();

// 一般依赖注入容器都是这种格式 ioc.bind(key, value)
// InversifyJS 只是把它换成同等的形式 ioc.bind(key).to(value)
container.bind<IProvider<string>>("nameProvider").to(NameProvider);
// 1. 通过 nameProvider 字符串绑定，则使用 nameProvider 字符串来获取
// const nameProvider: any = container.get("nameProvider");

container.bind<IProvider<string>>(NameProvider).toSelf().inSingletonScope();
// 2.通过 NameProvider 类绑定，则需要 NameProvider 类来获取
// const nameProvider: any = container.get(NameProvider);
```

# 通过 ContainerModule 分层管理

在像 `theia` 这样的大型项目中，如果我们全部的依赖都直接绑定在 `Container` 上，显然不那么美观。而 `ContainerModule` 则是用于管理众多绑定的方法。
通过 `ContainerModule`，我们就可以把绑定分散到不同的模块中，可以使架构条理更清晰。

```ts
export interface IconTheme<T> {
  canHandle(): number;
  getIcon(): string;
}

@injectable()
export class NoneIconTheme implements IconTheme<string> {
  readonly id = "none";
  readonly label = "None";
  readonly description = "Disable file icons";
  readonly hasFileIcons = true;
  readonly hasFolderIcons = true;

  canHandle(): number {
    return Number.MAX_SAFE_INTEGER;
  }

  getIcon(): string {
    return "";
  }
}

const frontendApplicationModule = new ContainerModule(
  (bind, unbind, isBound, rebind) => {
    // to：绑定一个类（获取类的实例）
    // toSelf：to 的简化版，当 serviceIdentifier（标识符）是构造函数时，直接绑定自身。
    // toConstantValue：绑定一个常量
    // toDynamicValue：绑定为动态数值，解析时执行传入的函数获取依赖。
    // 后面可继续链式处理in、when、on
    bind(NoneIconTheme).toSelf().inSingletonScope();
  }
);

container.load(frontendApplicationModule);
```

# 通过 get 获取注入

```ts
const nameProvider: any = container.get("nameProvider");
const nameProvider: any = container.get(NameProvider);

const iconTheme: any = container.get(NoneIconTheme);
console.log(nameProvider.getName());
```

# InversifyJS 工作流

InversifyJS 的工作流程主要分为五个阶段：

| 阶段       | 描述       | 执行代码                            |
| ---------- | ---------- | ----------------------------------- |
| Annotation | 打标签阶段 | `@injectable` 和 `@inject` 标记阶段 |
| Planning   | 规划阶段   | container.bind 阶段                 |
| Middleware | 中间件阶段 | container.get 阶段                  |
| Resolution | 解析阶段   |                                     |
| Activation | 激活阶段   | 进入缓存触发，已在缓存不触发        |
