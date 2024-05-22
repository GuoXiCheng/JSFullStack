# 条件访问表达式

## 什么是条件访问表达式

条件访问表达式是一种新的语法，用于简化访问对象的属性或方法。在访问对象的属性或方法时，如果对象为 null 或 undefined，则不会抛出异常，而是返回 undefined。

## 访问属性

```javascript
const obj = {
  name: "Alice",
  age: 18,
  address: {
    city: "Shanghai",
    street: "Nanjing Road",
  },
};

console.log(obj.address?.city); // Shanghai
console.log(obj.address?.country); // undefined
```

## 访问方法

```javascript
const obj = {
  sayHello() {
    console.log("Hello");
  },
};

obj.sayHello?.(); // Hello
obj.sayGoodbye?.(); // undefined
```
