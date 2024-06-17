# 原型链

## 什么是原型链

当尝试访问一个对象的属性或方法时，如果对象本身没有这个属性或方法，JavaScript 会沿着对象的原型链向上查找，直到找到对应的属性或方法或到达原型链的顶端（通常是`Object.prototype`）。

<<< @/../projects/javascript-sandbox/src/object/prototype-chain.js
