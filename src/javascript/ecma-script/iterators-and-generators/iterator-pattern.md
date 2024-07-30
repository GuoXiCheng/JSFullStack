# 迭代器模式

ES6 引入的迭代器模式，`Iterable` 接口定义了对象是否可迭代，`Iterator` 接口定义了对象如何迭代。

## 可迭代协议

任何实现了 `[Symbol.iterator]()` 方法的对象都被认为是可迭代的，这个方法必须返回一个 `Iterator` 对象。

ES 内置的可迭代对象有：数组、Map、Set、字符串、arguments 对象、NodeList 对象。

<<< @/../projects/javascript-sandbox/src/iterators-and-generators/iterator.ts#iterable-protocol

可迭代对象可以使用 `for...of` 循环，`...` 扩展运算符，解构赋值进行迭代。

<<< @/../projects/javascript-sandbox/src/iterators-and-generators/iterator.ts#iterator-method

## 迭代器协议

`Iterator` 接口定义了一个 `next()` 方法，该方法返回一个包含 `done` 和 `value` 属性的对象，`done` 是一个布尔值，指示是否还有更多值可以迭代，`value` 包含当前的值。

当 `done = true` 时，`value = undefined`时，表示迭代结束。

<<< @/../projects/javascript-sandbox/src/iterators-and-generators/iterator.ts#iterator-protocol
