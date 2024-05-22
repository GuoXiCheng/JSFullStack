# 空值合并操作符

## 什么是空值合并操作符

空值合并操作符（??）是一个逻辑操作符，当左侧操作数为 `null` 或 `undefined` 时，返回右侧操作数，否则返回左侧操作数。

::: details a ?? b 等价于

```js
a != null && a !== undefined ? a : b;
```

:::

## 使用空值合并操作符

```javascript
const a = null;
const b = undefined;
const c = 0;
const d = "";
const e = false;

console.log(a ?? "default"); // default
console.log(b ?? "default"); // default
console.log(c ?? "default"); // 0
console.log(d ?? "default"); // ""
console.log(e ?? "default"); // false
```
