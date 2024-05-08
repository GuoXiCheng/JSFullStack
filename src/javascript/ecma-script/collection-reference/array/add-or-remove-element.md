# 添加或删除元素

添加元素的方法有：`push()`、`unshift()`。

删除元素的方法有：`pop()`、`shift()`。

`splice()`方法既可以添加元素，也可以删除元素。

## 添加元素

### push()

`push()`方法用于将指定元素添加到数组末尾，并返回新数组的长度。

<<< @/../projects/javascript-sandbox/src/array-method/add-or-remove-element.ts#push

### unshift()

`unshift()` 方法用于将指定元素添加到数组的开头，并返回新数组的长度。

<<< @/../projects/javascript-sandbox/src/array-method/add-or-remove-element.ts#unshift

### splice()

`splice()` 可用于向数组中添加元素。

第一个参数是要添加的元素的索引，第二个参数是要删除的元素的数量，剩余参数是要添加的元素。

<<< @/../projects/javascript-sandbox/src/array-method/add-or-remove-element.ts#splice-1

## 删除元素

### pop()

`pop()` 方法用于删除数组的最后一个元素，并返回被删除的元素。

<<< @/../projects/javascript-sandbox/src/array-method/add-or-remove-element.ts#pop

### shift()

`shift()` 方法用于删除数组的第一个元素，并返回被删除的元素。

<<< @/../projects/javascript-sandbox/src/array-method/add-or-remove-element.ts#shift

### splice()

`splice()` 可用于从数组中删除元素。

第一个参数是要删除的元素的索引，第二个参数是要删除的元素的数量。

<<< @/../projects/javascript-sandbox/src/array-method/add-or-remove-element.ts#splice-2
