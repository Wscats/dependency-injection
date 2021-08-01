# IOC/DI

When it comes to dependency injection, you must first understand IOC and DI.

- IOC, the full name of Inversion Of Control, inversion of control is a design idea of ​​object-oriented programming, mainly used to reduce the degree of coupling between codes.

- DI, full name Dependency Injection, dependency injection is the concrete realization of IOC. It refers to the instantiation process of the object through external injection to avoid the object's internal realization of external dependencies.

The IOC control inversion design pattern can greatly reduce the coupling of the program. In VSCode's inversion of control design pattern, the decorator's main function is to realize the DI dependency injection function and streamline part of the repetitive writing. Since the implementation of this step is more complicated, let's start with a simple example as a starting point to understand the basic principles of decorators.

# Implementation

`@serviceA` and `@serviceB` are parameter decorators, which are used to process parameters and are created by the `createDecorator` method.

- @Parameter decorator usage: receive three parameters
  - target: For static members, it is the constructor of the class, and for instance members, it is the prototype chain of the class
  - key: the name of the method, note that it is the name of the method, not the name of the parameter
  - index: the index of the position of the parameter in the method
- @Return: The returned value will be ignored

```ts
class C {
  constructor(@serviceA private a: A, @serviceB private b: B) {}
}
```

All parameter decorators are created by the createDecorator method, and `'A'` and `'B'` are the unique identifiers of the decorator.

```ts
const serviceA = createDecorator("A");
const serviceB = createDecorator("B");
```

The decorator first judges whether it is cached, if it is cached, the cached parameter decorator is taken out, if it is not cached, a parameter decorator of `serviceIdentifier` is created.

```ts
function createDecorator<T>(serviceId: string): ServiceIdentifier<T> {
  if (_util.serviceIds.has(serviceId)) {
    return _util.serviceIds.get(serviceId) as ServiceIdentifier<T>;
  }
}
```

The only thing that the `serviceIdentifier` parameter decorator does is to trigger the `storeServiceDependency` to save all dependencies, store the decorator itself `id`, the parameter index `index` and whether it is optional `optional`.

```ts
const id = function serviceIdentifier(target: Ctor<T>, key: string, index: number): void {
  storeServiceDependency(id, target, index, false);
};
id.toString = () => serviceId;
_util.serviceIds.set(serviceId, id);
```

The essence of `storeServiceDependency` is to set two static attributes `$di$target` and `$di$dependencies` on `target`, that is, `class C`. The `target` is stored on them respectively, and the `target` itself has to be stored again. It is to judge whether the dependency has been saved.

```ts
C.$di$target; // class C
C.$di$dependencies[0].id.toString(); // A or B
C.$di$dependencies; // [{id: serviceIdentifier, index: 1, optional: false}, {id: serviceIdentifier, index: 0, optional: false}]
```

In addition to existing classes, there are also `_util.serviceIds`.

When the class is declared, the decorator is applied, so the dependencies are determined before the class is instantiated. Compiling `ts` can prove this point. You can see that the decorator will be executed when `__decorate` is declared in the class.

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

Then comes `ServiceCollection`, where the decorator will be used as the key to uniquely identify, and the instantiated class will be stored as the value in `svrsCollection`. The implementation of `svrsCollection` is also very simple. Use the `Map` method to store it directly. .

```ts
const aInstance = new A();
const bInstance = new B();
const svrsCollection = new ServiceCollection();
svrsCollection.set(serviceA, aInstance);
svrsCollection.set(serviceB, bInstance);
```

Afterwards, you only need to use the get method and pass in the corresponding parameter decorator to get the corresponding instantiated class.

```ts
svrsCollection.get(serviceA); // new A()
svrsCollection.get(serviceB); // new B()
```

`InstantiationService` is the core of the implementation of dependency injection. It uses parameter decorators, such as `serviceA` and `serviceB`, etc.`ServiceIdentifier` as the `key`. All the dependency injections that are instantiated are stored in the private variable `services` kind. `services` saves `svrsCollection`.

```ts
const instantiationService = new InstantiationService(svrsCollection);
```

It exposes three public methods:

-`createInstance` This method accepts a class and the non-dependency injection parameters for constructing the class, and then creates an instance of the class. -`invokeFunction` This method accepts a callback function, which can access all dependency injection items in the `InstantiationService` through the `acessor` parameter. -`createChild` This method accepts a set of dependencies and creates a new `InstantiationService` to show that the dependency injection mechanism of vscode is also hierarchical.

The `createInstance` method is the core method of instantiation:

```ts
const cInstance = instantiationService.createInstance(C, "L", "R") as C;
```

The first is to get the `ctorOrDescriptor`, which is the class `class C`, and the parameter `rest` that needs to be passed in for non-dependency injection.

```ts
const result = this.createCtorInstance(ctorOrDescriptor, rest);
```

Then use `getServiceDependencies` to obtain and sort the `$di$dependencies` that mounts the static properties of `class C`, because the order is reversed when stored

```ts
const serviceDependencies = _util
  .getServiceDependencies(ctor)
  .sort((a, b) => a.index - b.index);
```

The retrieved dependency `serviceDependencies` is mainly to traverse and obtain the parameter decorators `serviceA` and `serviceB` inside.

```ts
const serviceArgs: any[] = [];
for (const dependency of serviceDependencies) {
  const serviceInstance = this.getOrCreateServiceInstance(dependency.id);
  serviceArgs.push(serviceInstance);
}
```

The essence of `getOrCreateServiceInstance` is to get the instantiated class from `services` that is `svrsCollection`.

```ts
const instanceOrDesc = this.services.get(id);
// Equivalent to id that is the parameter decorator
// svrsCollection.get(id);
```

When all these instantiated classes are taken out and put into `serviceArgs`, since the parameter decorator is executed when the class is instantiated and the dependencies are collected, `serviceArgs` corresponds to `ctor` ie`Class C` needs to be injected with dependent parameters. Combining non-dependent parameters can help us successfully instantiate our `ctor` class.

```ts
new ctor(...[...serviceArgs, ...args]);
```
