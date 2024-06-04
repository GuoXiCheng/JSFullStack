# 事件循环

## 什么是事件循环

事件循环机制是 JavaScript 实现非阻塞异步编程的核心原理。

## 事件循环的执行过程

::: details 参考代码

```js
console.log("Test Start");
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve("Promise").then((res) => console.log(res));
console.log("Test End");

// Test Start
// Test End
// Promise
// setTimeout
```

:::

首先以同步方式执行代码，然后事件循环将检查微任务队列。

如果微任务队列不为空，则依次执行队列中的任务，直到队列被清空。

微任务队列中的任务清空后，事件循环会从宏任务队列中取出一个任务执行。

每执行完一个宏任务，事件循环会再次检查微任务队列，重复上述过程。
