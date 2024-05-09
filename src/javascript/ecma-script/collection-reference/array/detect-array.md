# 检测数组

为了判断一个对象是不是数组，可以使用`Array.isArray()`方法，该方法返回一个布尔值，表示该对象是否为数组。

```js
if (Array.isArray(value)) {
  //操作数组
}
```

:::details 使用 instanceof 检测数组 vs Array.isArray() 检测数组
instanceof 方法在只有一个全局上下文时是可以用于检测数组的，即全局只有一个 Array 对象。

但是在多个执行上下文环境中（多框架或多窗口），instanceof 方法就会失效，因为每个执行上下文都有自己的 Array 构造函数。

因此更推荐使用 `Array.isArray()` 方法来检测数组。

`Array.isArray()`方法使用 JavaScript 引擎内部的原生代码实现，执行效率更高。
:::
