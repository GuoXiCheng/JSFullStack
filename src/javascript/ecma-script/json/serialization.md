# JSON 序列化

## 什么是 JSON 序列化

JSON 序列化是将 JavaScript 对象转换为 JSON 字符串的过程。

## JSON.stringify()

`JSON.stringify()`方法可以用于实现 JSON 序列化。

`JSON.stringify()`方法接受三个参数：

- `value`：要序列化的值。
- `replacer`：可选参数，用于过滤和转换结果。
- `space`：可选参数，用于格式化输出。

::: details JSON.stringify() 方法的实际执行步骤

1. 尝试调用 `toJSON()` 方法获取返回值，否则使用默认序列化方法。
2. 如果 `replacer` 参数存在则调用，传入`replacer`函数的参数是第 1 步返回的值。
3. 对第 2 步返回的值进行序列化。
4. 如果 `space` 参数存在则格式化输出。

:::

### replacer 参数

`replacer` 参数可以是一个函数，也可以是一个数组。

如果 `replacer` 参数是一个函数，则该函数会被递归调用，传入两个参数：当前属性的键和值，并返回一个值，如果返回 `undefined` 则表示忽略该属性。

<<< @/../projects/javascript-sandbox/src/json/serialization.ts#filter-function

如果 `replacer` 参数是一个数组，则只有数组中包含的属性会被序列化。

<<< @/../projects/javascript-sandbox/src/json/serialization.ts#filter-array

### space 参数

`space` 参数用于格式化输出，可以是一个数字或字符串。

缩进的最大值是 10，缩进的最大字符数也是 10。

如果 `space` 参数是一个数字，则表示每个级别缩进的空格数。

<<< @/../projects/javascript-sandbox/src/json/serialization.ts#retract-number

如果 `space` 参数是一个字符串，则表示每个级别缩进的字符串。

<<< @/../projects/javascript-sandbox/src/json/serialization.ts#retract-string

## toJSON() 方法

`toJSON()` 方法是一个特殊的方法，用于自定义对象的 JSON 序列化。

可以在要序列化的对象上自定义 `toJSON()` 方法，该方法会在调用 `JSON.stringify()` 方法时被调用，以便自定义对象序列化的返回值。

<<< @/../projects/javascript-sandbox/src/json/serialization.ts#custom-toJSON
