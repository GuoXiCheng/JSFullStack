# 迭代器

## 什么是迭代器

::: details 什么是迭代
迭代就是在一个有序集合上顺序访问元素的过程。
:::

迭代器提供了一种方法，使得任何支持可迭代协议的对象都能在不暴露内部结构的情况下访问其中的元素。

::: details 迭代方式的演变

JavaScript 中的 for 循环提供了一种基础的迭代方式，但这要求开发者明确知道如何与数据结构交互，例如通过索引访问数组元素。这种方法依赖于数据结构的内部实现细节，并且不适用于所有类型的数据结构。

ES5 新增的`forEach`方法允许开发者无需直接管理索引即可遍历数组，这项功能向通用迭代需求迈进了一步，但是`forEach`方法不能在迭代过程中提前终止（除非抛出异常），因此仍然不够理想。

为了解决这些限制，ES6 引入了迭代器模式，这是一种使开发者无需预先知道集合的内部结构即可遍历集合的方法。

:::

## 可迭代协议

可迭代协议允许对象表明自己支持迭代。

要遵循此协议，对象必须暴露一个特殊属性`Symbol.iterator`，该属性是一个函数，调用该函数会返回一个迭代器对象，迭代器对象必须遵循迭代器协议。

::: details 内置迭代

内置可迭代对象：数组、Map、Set、字符串、arguments 对象、NodeList 对象、TypedArray 对象、Generator 对象。

内置迭代方法：for...of 循环、...扩展运算符、解构赋值

:::

## 迭代器协议

迭代器代表对其关联可迭代对象的一次性有序遍历。

迭代器的核心方法`next()`用于在遍历过程中逐一访问数据。每次调用`next()`成功时，都会返回一个包含`done`和`value`属性的对象。`done`是一个布尔值，指示是否还有更多值可以迭代；`value`包含当前的值，在`done=true`时`value=undefined`。

## 提前终止迭代

迭代器可以可选地实现一个 return 方法，该方法定义了在迭代器被提前关闭时执行的操作，它应当返回一个有效的迭代器结果对象，通常是`{ done: true }`。如果迭代器没有关闭，它可以从上次停止的地方继续迭代。

```js
class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true };
        }
      },
      return() {
        console.log("Exiting early");
        return { done: true };
      },
    };
  }
}
```
