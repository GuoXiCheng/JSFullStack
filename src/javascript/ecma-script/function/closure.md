# 闭包

## 什么是闭包？

在 JavaScript 中，闭包形成的典型情况是函数里面嵌套一个函数，如下所示：

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 输出 1
console.log(counter()); // 输出 2
```

## 闭包的原理

通常情况下，当一个函数执行完毕后，其执行上下文会从执行栈中弹出，局部变量也会被销毁。

但是，如果有内部函数引用了这些局部变量，这部分内存就不会被释放，因为内部函数的执行上下文仍然保留着对外部函数的引用，这就是闭包的原理。

所以，尽管外部函数的执行上下文已经被销毁，内部函数依然可以通过作用域链访问到外部函数的局部变量。

## 闭包的应用

闭包可以用于封装私有变量、实现模块化或缓存昂贵计算结果等。

但需要注意的是，闭包也可能会导致内存泄漏，因为闭包会使得引用的变量无法被垃圾回收。
