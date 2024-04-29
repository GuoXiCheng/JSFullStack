# 比较算法

JavaScript 中提供了三种比较运算符：`==`、`===`和`Object.is()`。

与之对应的是四种比较算法：

1. 松散相等：`==`
2. 严格相等：`===`
3. SameValue：`Object.is()`
4. SameValueZero：与`SameValue`类似，但是`+0`等于`-0`。

## 松散相等（==）

松散相等在比较前会进行类型转换。

:::warning
大多数情况下**不推荐**使用松散相等运算符（`==`）。

松散相等运算符（`==`）会进行类型转换，因此可能会产生一些意想不到的结果。
:::

## 严格相等（===）

严格相等在比较前两个值都不会隐式转换为其他值。

如果被比较的值具有不同的类型，则会被认为是不相等的；如果被比较的值具有相同的类型，且不是数字，那么只要具有相同的值就会被认为是相等的。

## SameValue

`SameValue`使用`Object.is()`方法来比较两个值是否相等。

`Object.is()`方法与严格相等运算符（`===`）的行为类似，但是在处理`NaN`和`+0`、`-0`时有所不同。

```js
Object.is(null, null); // true
Object.is(0, -0); // false，与 0 === -0 的结果不同（0 === -0 为 true）
Object.is(NaN, NaN); // true，与 NaN === NaN 的结果不同（NaN === NaN 为 false）
```

## SameValueZero

`SameValueZero`算法与`SameValue`算法类似，但是`+0`和`-0`被视为相等。

`SameValueZero`未提供公开的 JavaScript API，但是可以通过以下算法实现：

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

## 同一性比较表

| x                   | y                   | ==       | ===      | Object.is | SameValueZero |
| ------------------- | ------------------- | -------- | -------- | --------- | ------------- |
| undefined           | undefined           | ✅ true  | ✅ true  | ✅ true   | ✅ true       |
| null                | null                | ✅ true  | ✅ true  | ✅ true   | ✅ true       |
| true                | true                | ✅ true  | ✅ true  | ✅ true   | ✅ true       |
| false               | false               | ✅ true  | ✅ true  | ✅ true   | ✅ true       |
| 'foo'               | 'foo'               | ✅ true  | ✅ true  | ✅ true   | ✅ true       |
| 0                   | 0                   | ✅ true  | ✅ true  | ✅ true   | ✅ true       |
| +0                  | -0                  | ✅ true  | ✅ true  | ❌ false  | ✅ true       |
| +0                  | 0                   | ✅ true  | ✅ true  | ✅ true   | ✅ true       |
| -0                  | 0                   | ✅ true  | ✅ true  | ❌ false  | ✅ true       |
| 0n                  | -0n                 | ✅ true  | ✅ true  | ✅ true   | ✅ true       |
| 0                   | false               | ✅ true  | ❌ false | ❌ false  | ❌ false      |
| ""                  | false               | ✅ true  | ❌ false | ❌ false  | ❌ false      |
| ""                  | 0                   | ✅ true  | ❌ false | ❌ false  | ❌ false      |
| '0'                 | 0                   | ✅ true  | ❌ false | ❌ false  | ❌ false      |
| '17'                | 17                  | ✅ true  | ❌ false | ❌ false  | ❌ false      |
| [1, 2]              | '1,2'               | ✅ true  | ❌ false | ❌ false  | ❌ false      |
| `new String('foo')` | `'foo'`             | ✅ true  | ❌ false | ❌ false  | ❌ false      |
| null                | undefined           | ✅ true  | ❌ false | ❌ false  | ❌ false      |
| null                | false               | ❌ false | ❌ false | ❌ false  | ❌ false      |
| undefined           | false               | ❌ false | ❌ false | ❌ false  | ❌ false      |
| `{ foo: 'bar' }`    | `{ foo: 'bar' }`    | ❌ false | ❌ false | ❌ false  | ❌ false      |
| `new String('foo')` | `new String('foo')` | ❌ false | ❌ false | ❌ false  | ❌ false      |
| 0                   | null                | ❌ false | ❌ false | ❌ false  | ❌ false      |
| 0                   | NaN                 | ❌ false | ❌ false | ❌ false  | ❌ false      |
| `'foo'`             | NaN                 | ❌ false | ❌ false | ❌ false  | ❌ false      |
| NaN                 | NaN                 | ❌ false | ❌ false | ✅ true   | ✅ true       |

## 参考

- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
