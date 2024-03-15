# Array

## 归并方法

数组提供的归并方法：reduce()和reduceRight()都会迭代数组的所有项，并在此基础上构建一个最终返回值。

reduce()方法从数组第一项开始遍历到最后一项。而reduceRight()从最后一项开始遍历至第一项。

归并方法接收两个参数：
1. 对每一项执行的归并函数，它接收四个参数：前一个值、当前值、当前索引和数组本身。这个函数返回的任何值都会作为下一次调用同一个函数的第一个参数。
2. 归并起始值，如果没有提供起始值，迭代将从数组第二项开始，数组的第一项将作为起始值。

```js
const values = [1, 2, 3, 4, 5];
const sum = values.reduce((prev, cur, index, array) => prev + cur);
console.log(sum); // 15
```