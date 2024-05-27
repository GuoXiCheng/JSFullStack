# 原型

## 什么是原型

每个 JavaScript 对象都有一个特殊的内部属性，称为原型（`[[Prototype]]`）。这个属性的值是一个对象或`null`。

对象可以通过`__proto__`属性访问它的原型。原型对象也可能有自己的原型，这样就形成了一个原型链。

对象的原型可以被视为一个模版对象，对象自身未定义的属性和方法可以从其原型上继承。

例如，当创建一个数组对象时，这个数组继承自`Array.prototype`，从而拥有`push`、`pop`等数组操作方法。

```ts
const myArray = [1, 2, 3];
console.log(myArray.__proto__ === Array.prototype); // true
```
