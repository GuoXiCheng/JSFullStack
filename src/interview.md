# 面试

## 说说你对双向绑定的理解

```java
// [!code focus]

我可以先解释一下单向数据绑定。
单向数据绑定是把数据绑定到视图上，当数据更新时，视图就会自动更新。
在单向数据绑定的基础上，当视图更新时，数据也会自动更新，这就是双向数据绑定。
```

## 说说 Typescript 中的装饰器

```java
// [!code focus]

装饰器其实就是一个函数，它可以用在类、方法或者属性上，来扩展它们的功能。
比如我可以用它来做日志记录、权限控制，或者缓存一些中间结果。
它的最大优点是能把跟业务无关的代码从核心逻辑里抽离出来，这样代码更清晰简洁、也更好维护。
```

## 说说你对依赖注入的理解

```java
// [!code focus]

我理解的依赖注入，其实就是说，当一个服务需要用到其他组件的时候，
它自己不负责创建这些依赖，而是由外部把这些依赖传进来。

举个例子，比如我有一个服务要用数据库对象。
如果我在服务里直接 new 一个数据库对象，那这个服务就跟这个数据库实现耦合得很死。

但如果我通过构造函数把数据库对象传进来，我就可以自由替换这个依赖，
比如在写单元测试时用一个内存数据库或者 mock 对象来替代。

这样做的好处是，耦合度低、职责清晰，而且特别适合测试，能让代码更灵活、可维护性更强。
```

## 你是否自己实现过简化版的依赖注入容器

```java
// [!code focus]

我会先创建一个Map作为容器对象，用来保存服务的构造函数或实例。

然后提供一个register方法注册服务，一个resolve方法创建实例，
resolve方法会自动查找构造函数的参数，递归地实例化依赖。
```

简化版依赖注入容器

```typescript
class Container {
  private providers = new Map();

  register(token: any, provider: any) {
    this.providers.set(token, provider);
  }

  resolve(token: any): any {
    const Provider = this.providers.get(token);
    const deps = Reflect.getMetadata("design:paramtypes", Provider) || [];
    const instances = deps.map((dep: any) => this.resolve(dep));
    return new Provider(...instances);
  }
}
```

进阶版带装饰器的依赖注入容器

```typescript
import "reflect-metadata";

class Container {
  private providers = new Map();

  register(token: any) {
    this.providers.set(token, token);
  }

  resolve<T>(token: new (...args: any[]) => T): T {
    const target = this.providers.get(token);
    const deps = Reflect.getMetadata("design:paramtypes", target) || [];
    const instances = deps.map((dep: any) => this.resolve(dep));
    return new target(...instances);
  }
}

// 装饰器：用于自动注册类
function Injectable(target: any) {
  container.register(target);
}
```

```typescript
const container = new Container();

@Injectable
class DatabaseService {}

@Injectable
class UserService {
  constructor(private db: DatabaseService) {}
}

const userService = container.resolve(UserService);
```
