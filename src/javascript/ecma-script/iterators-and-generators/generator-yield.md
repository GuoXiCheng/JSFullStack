# yield 关键字

## 什么是 yield 关键字

`yield` 关键字可以让生成器函数停止执行，然后返回一个值给调用者，函数的作用域状态会被保留。停止的生成器对象可以通过调用 `next()` 方法恢复执行。

## `yield` 与 `yield*`

- `yield` 关键字用于返回一个值，并暂停生成器的执行状态，直到调用 `next()` 方法再次唤醒生成器。
- `yield*` 关键字用于委托另一个生成器或可迭代对象的迭代，它会在生成器内调用另一个生成器，并将所有的值依次返回，避免手动遍历子生成器。

## yield 关键字的用法

### 作为迭代器

<<< @/../projects/javascript-sandbox/src/iterators-and-generators/generator-yield.ts#generator-as-iterator

### 作为递归实现

<<< @/../projects/javascript-sandbox/src/iterators-and-generators/generator-yield.ts#generator-implement-recursion

### 作为默认迭代器

<<< @/../projects/javascript-sandbox/src/iterators-and-generators/generator-yield.ts#generator-as-default-iterator
