# 切片或连接数组

数组的切片方法有：`slice()`

数组的连接方法有：`concat()`、`join()`

## slice()

`slice()` 方法返回一个新的数组对象，这个对象是一个由 `start` 和 `end` 决定的原数组的浅拷贝。原数组不会被改变。

::: details start 和 end 参数

start

- 如果 start < 0，则使用 start + array.length
- 如果 start < -array.length 或省略 start，则使用 0
- 如果 start >= array.length，则不提取任何元素

end 提取的元素不包括 end

- 如果 end < 0，则使用 end + array.length
- 如果 end < -array.length，则使用 0
- 如果 end >= array.length 或省略 end，则使用 array.length，提取所有元素直到末尾
- 如果 end <= start，则不提取任何元素

:::

<<< @/../projects/javascript-sandbox/src/array-method/slice-or-concat-array.ts#slice

## concat()

`concat()` 方法用于将多个数组和值合并到一个新数组中，如果省略参数，则返回原数组的浅拷贝。

<<< @/../projects/javascript-sandbox/src/array-method/slice-or-concat-array.ts#concat

## join()

`join()` 方法将数组的所有元素连接成一个字符串，返回这个字符串。

<<< @/../projects/javascript-sandbox/src/array-method/slice-or-concat-array.ts#join
