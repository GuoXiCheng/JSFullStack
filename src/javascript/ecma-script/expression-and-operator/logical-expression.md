# 逻辑表达式

## 什么是逻辑表达式

逻辑表达式是由逻辑运算符连接的表达式。逻辑运算符有三种：`&&`（逻辑与）、`||`（逻辑或）和`!`（逻辑非）。

## 逻辑与

逻辑与运算符`&&`用于连接两个表达式，当且仅当两个表达式都为真时，逻辑与表达式的值才为真。

```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

逻辑与运算符的运算规则如下：

- 如果第一个表达式的值为真，则返回第二个表达式的值；
- 如果第一个表达式的值为假，则返回第一个表达式的值。

## 逻辑或

逻辑或运算符`||`用于连接两个表达式，当两个表达式中至少有一个为真时，逻辑或表达式的值就为真。

```javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

逻辑或运算符的运算规则如下：

- 如果第一个表达式的值为真，则返回第一个表达式的值；
- 如果第一个表达式的值为假，则返回第二个表达式的值。

## 逻辑非

逻辑非运算符`!`用于对表达式的值取反，即如果表达式的值为真，则返回假；如果表达式的值为假，则返回真。

```javascript
console.log(!true); // false
console.log(!false); // true
```

逻辑非运算符的运算规则如下：

- 如果表达式的值为真，则返回假；
- 如果表达式的值为假，则返回真。
