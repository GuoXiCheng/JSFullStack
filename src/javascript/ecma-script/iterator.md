# 迭代器

## 什么是迭代器

迭代就是在一个有序集合上顺序访问元素的过程。

JavaScript中的for循环提供了一种基础的迭代方式，但这要求开发者明确知道如何与数据结构交互，例如通过索引访问数组元素。这种方法依赖于数据结构的内部实现细节，并且不适用于所有类型的数据结构。

ES5新增的`forEach`方法允许开发者无需直接管理索引即可遍历数组，这项功能向通用迭代需求迈进了一步，但是`forEach`方法不能在迭代过程中提前终止（除非抛出异常），因此仍然不够理想。

为了解决这些限制，ES6引入了迭代器模式，这是一种使开发者无需预先知道集合的内部结构即可遍历集合的方法。

## 可迭代协议

可迭代协议允许对象表明自己支持迭代。

要遵循此协议，对象必须暴露一个特殊属性`Symbol.iterator`，该属性是一个函数，调用该函数会返回一个迭代器对象，迭代器对象必须遵循**迭代器协议**。

许多ES6及以后版本中的内置类型，如数组、字符串、Map、Set、arguments对象，以及DOM集合类型如NodeList，都实现了可迭代协议。

在日常开发中，通常不需要手动创建迭代器对象，而是可以直接利用原生语言特性进行迭代：
- for...of循环
- 扩展运算符
- 解构赋值
- Array.from()
- 新的集合类型构造函数（Map、Set、WeakMap、WeakSet）
- `Promise.all`、`Promise.race`、`Promise.allSettled`
- 通过`yield*`操作符在生成器函数中进行迭代

## 迭代器协议

迭代器代表对其关联可迭代对象的一次性有序遍历。

迭代器的核心方法`next()`用于在遍历过程中逐一访问数据。每次调用`next()`成功时，都会返回一个包含`done`和`value`属性的对象。`done`是一个布尔值，指示是否还有更多值可以迭代；`value`包含当前的值，在`done=true`时`value=undefined`。

迭代器不保存对可迭代对象的快照；相反，它们使用一个内部指针来跟踪遍历的进度。如果可迭代对象在迭代期间被修改，迭代器的行为会反映这些变化。

:::warning
迭代器保持对其可迭代对象的引用，因此迭代器会阻止垃圾回收程序回收可迭代对象。
:::

## 自定义迭代器
任何实现Iterable接口的对象都可以作为迭代器使用。

为了让一个可迭代对象能够创建多个迭代器，必须每创建一个迭代器就对应一个新计数器。为此，可以把计数器变量放到闭包里，然后通过闭包返回迭代器。

```js
class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1, limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true, value: undefined };
        }
      }
    };
  }
}
```

## 提前终止迭代
迭代器可以**可选地**实现一个`return`方法，该方法定义了在迭代器被提前关闭时执行的操作，它应当返回一个有效的迭代器结果对象，通常是`{ done: true }`。如果迭代器没有关闭，它可以从上次停止的地方继续迭代。

例如，当使用`break`、`continue`或`return`在`for...of`循环中提前终止迭代时，迭代器的`return`方法会被调用。

并非所有的迭代器都是可关闭的，例如数组的迭代器就是不能关闭的。要知道某个迭代器是否可关闭，可以测试这个迭代器实例的`return`属性是不是函数对象。

```js
class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1, limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true };
        }
      },
      return() {
        console.log('Exiting early');
        return { done: true };
      }
    };
  }
}
```