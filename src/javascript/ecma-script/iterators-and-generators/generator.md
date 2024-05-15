# 生成器

## 什么是生成器
生成器允许函数在执行过程中暂停和恢复。

通过在函数名称前加上星号（*），可以创建一个生成器函数，这类函数能通过`yield`关键字来暂停和恢复执行。

### 定义生成器

```js
//生成器函数声明
function* generatorFn() {}

//生成器函数表达式
let generatorFn = function* () {}

//作为对象字面量方法的生成器函数
let foo = {
  * generatorFn() {}
}

//作为类实例方法的生成器函数
class Foo {
  * generatorFn() {}
}

//作为类静态方法的生成器函数
class Bar {
  static * generatorFn() {}
}
```
:::warning
箭头函数不能用来定义生成器函数。
:::

调用生成器函数将返回一个生成器对象，生成器对象一开始处于暂停状态，可以通过调用`next()`方法来开始或恢复执行。

## yield关键字
生成器函数通过遇到yield关键字暂停执行并保留当前作用域状态，可通过next()恢复执行。

每个生成器对象维护独立的执行状态，互不影响。

yield仅限于生成器函数内使用，否则会引发错误；并且它不能嵌套在非生成器函数中。

### 生成器对象作为可迭代对象
在生成器对象上显式调用next()方法的用处并不大，但是如果把生成器对象当成可迭代对象时，使用起来会更方便。

```js
function* nTimes(n) {
  while (n--) {
    yield;
  }
}

for (let _ of nTimes(3)) {
  console.log('foo');
}
```
### 使用yield实现输入和输出
上一次让生成器函数暂停的yield关键字会接收到传给next()方法的第一个值。

```js
function* generatorFn() {
  return yield 'foo';
}

const g = generatorFn();
console.log(g.next());
console.log(g.next('bar'));
```
### 产生可迭代对象
可以使用星号增强yield的行为，让它能够迭代一个可迭代对象，从而一次产出一个值。

```js
function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}
// 等价写法
function* generatorFn() {
  yield* [1, 2, 3];
}
```
### 使用yield*实现递归
yield*最有用的地方是实现递归操作，此时生成器可以产生自身。

```js
function* nTimes(n) {
  if (n > 0) {
    yield* nTimes(n - 1);
    yield n - 1;
  }
}

for (const x of nTimes(3)) {
  console.log(x);
}
```


## 生成器作为默认迭代器
因为生成器对象实现了Iterable接口，而且生成器函数和默认迭代器被调用之后都产生迭代器，所以生成器格外适合作为默认迭代器。

这里的for-of循环调用了默认迭代器（它恰好又是一个生成器函数）并产生了一个生成器对象。这个生成器对象是可迭代的，所以完全可以在迭代中使用。

```js
class Foo {
  constructor() {
    this.values = [1, 2, 3];
  }
  * [Symbol.iterator]() {
    yield* this.values;
  }
}

const f = new Foo();
for (const x of f) {
  console.log(x);
}
```

## 提前终止生成器
生成器提供了return()和throw()方法，允许外部代码以编程方式控制生成器的执行流程。

### 使用return()提前终止
所有生成器对象**都有**return()方法，只要通过它进入关闭状态，就无法恢复了。

```js
function* generatorFn() {
  yield* [1, 2, 3];
}

const g = generatorFn();

for (const x of g) {
  if (x > 1) {
    g.return(4);
  }
}
```

### 使用throw()注入错误

throw() 方法会在暂停的时候将一个提供的错误注入到生成器对象中。如果错误未被处理，生成器会进入关闭状态：

```js
function* generatorFn() {
  yield* [1, 2, 3];
}

const g = generatorFn();

try {
  g.throw('foo');
} catch (e) {
  console.log(e);
}
```

如果生成器函数**内部**处理了这个错误，那么生成器就不会关闭，而且还可以恢复执行：

```js
function* generatorFn() {
  for (const x of [1,2,3]) {
    try {
      yield x;
    } catch (e) {
      console.log(e);
    }
  }
}

const g = generatorFn();

console.log(g.next().value); // { value: 1, done: false }
g.throw('foo'); // 错误处理会跳过对应的yield
console.log(g.next().value); // { value: 3, done: false }
```
