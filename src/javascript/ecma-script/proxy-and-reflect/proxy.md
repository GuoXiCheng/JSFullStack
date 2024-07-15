# 代理

## 什么是代理

代理是一个对象，它包装另一个对象并拦截对该对象的访问。代理可以拦截并重定向对目标对象的许多操作，包括属性查找、赋值、函数调用等。

::: warning
代理与反射是 ES6 的新特性，在 ES6 之前没有类似代理的特性，因此转译器可能无法将代理转译为之前的 ES 代码。
:::

## 创建代理

需要使用 `Proxy` 构造函数来创建代理对象。

`Proxy` 构造函数接受两个参数：目标对象 `target`和处理程序对象 `handler`。

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/proxy.ts#create-proxy

## 创建可撤销代理

`Proxy.revocable` 方法可以创建一个可撤销的代理。

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/proxy.ts#revocable-proxy
