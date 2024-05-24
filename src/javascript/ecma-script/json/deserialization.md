# JSON 反序列化

## 什么是 JSON 反序列化

JSON 反序列化是将 JSON 字符串转换为 JavaScript 对象的过程。

## JSON.parse()

`JSON.parse()` 方法可以用于实现 JSON 反序列化。

`JSON.parse()` 方法接受两个参数：

- `text`：要反序列化的 JSON 字符串。
- `reviver`：可选参数，用于过滤和转换结果。

::: details reviver 函数

`reviver` 函数会对每个键值对调用一次，传入两个参数：键和值。

这个函数也称为“还原函数”。

如果还原函数返回 `undefined`，则结果中就会删除相应的键。

如果返回其他值，该值就会成为结果中相应键的值。

:::

reviver 函数经常用于将日期字符串转换为 Date 对象：

<<< @/../projects/javascript-sandbox/src/json/deserialization.ts#parse
