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
