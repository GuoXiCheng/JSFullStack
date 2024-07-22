# 反射

## 什么是反射

反射是一个内置的全局对象，它提供了一些与操作对象相关的静态方法，这些方法与代理捕获器的方法一一对应。

::: info
反射方法并不局限于代理捕获器中使用。

大多数的反射方法在 Object 上也有对应的方法，反射方法适用于细粒度的对象控制与操作。
:::

## 直接使用反射

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/reflect.ts#direct-use-reflect

## 代理捕获器中使用反射

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/reflect.ts#use-reflect-in-proxy-handler
