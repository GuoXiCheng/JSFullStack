# 原型链

## 什么是原型链

当尝试访问一个对象的属性或方法时，如果对象本身没有这个属性或方法，JavaScript 会沿着对象的原型链向上查找，直到找到对应的属性或方法或到达原型链的顶端（通常是`Object.prototype`）。

```ts
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const alice = new Person("Alice");
console.log(alice.greet()); // "Hello, my name is Alice"
console.log(alice.__proto__ === Person.prototype); // true
console.log(alice.__proto__.__proto__ === Object.prototype); // true
console.log(alice.__proto__.__proto__.__proto__); // null
```
