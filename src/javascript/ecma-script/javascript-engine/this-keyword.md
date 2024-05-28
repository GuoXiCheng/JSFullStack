# this 关键字

## 什么是 this 关键字

JavaScript 中的`this`关键字代表当前函数的执行上下文。

`this`的值依赖于函数的调用方式，它不是静态绑定而是动态绑定的，因此`this`的值在函数调用时才能确定。

## this 的不同场景

### 全局上下文

在全局执行上下文中（不在任何函数内），`this`指向全局对象。

在浏览器中，全局对象是`window`对象；在 Node.js 中，全局对象是`global`对象。

::: warning
只有在非严格模式下，全局上下文中的`this`才指向全局对象；在严格模式下，全局上下文中的`this`是`undefined`。
:::

### 函数上下文

在函数上下文中，`this`的值取决于函数的调用方式。

#### 普通函数调用

在非严格模式下，普通函数调用时，`this`指向全局对象；在严格模式下，`this`是`undefined`。

```js
function show() {
  console.log(this);
}
show();
```

#### 方法调用

在对象方法中，`this`指向调用方法的对象。

```js
var obj = {
  name: "Tom",
  show: function () {
    console.log(this.name);
  },
};
obj.show(); // 输出 'Tom'
```

#### 构造函数调用

在构造函数中，`this`指向新创建的对象。

```js
function Person(name) {
  this.name = name;
}
var person = new Person("Alice");
console.log(person.name); // 输出 'Alice'
```

#### 箭头函数

箭头函数不绑定自己的`this`，无论它如何被调用，它都会捕获所在上下文的`this`值作为自己的`this`值。

```js
const obj = {
  name: "Tom",
  show: () => {
    console.log(this.name);
  },
};

obj.show(); // 在浏览器中输出 undefined，因为箭头函数内部的 this 指向全局对象
```

### 通过`call`、`apply`和`bind`显示设置`this`

通过 call、apply 和 bind 方法，可以改变函数的执行上下文。

定义 Person 类用于演示 call、apply 和 bind 方法：

<<< @/../projects/javascript-sandbox/src/function/call-apply-bind.ts#Person

#### call

`call` 第一个参数指定函数的执行上下文（`this`），剩余的参数是函数的参数。

`call` 方法会立即调用函数，且只临时改变函数的执行上下文。

<<< @/../projects/javascript-sandbox/src/function/call-apply-bind.ts#call

#### apply

`apply` 方法第一个参数指定函数的执行上下文（`this`），第二个参数是一个数组，数组中的元素是函数的参数。

`apply` 方法会立即调用函数，且只临时改变函数的执行上下文。

<<< @/../projects/javascript-sandbox/src/function/call-apply-bind.ts#apply

#### bind

`bind` 方法接收一个参数，即函数的执行上下文（`this`），返回一个新函数。

`bind` 方法不会立即调用函数，而是返回一个永久改变函数的执行上下文的新函数，可以在稍后调用。

<<< @/../projects/javascript-sandbox/src/function/call-apply-bind.ts#bind

#### call、apply 和 bind 的区别

- `call` 和 `apply` 方法会立即调用函数，而 `bind` 方法会返回一个新函数，可以在稍后调用。
- `call` 和 `apply` 方法的区别在于参数的传递方式，`call` 方法的参数是逐个传递的，`apply` 方法的参数是数组传递的。
