# Map

## Map 集合
Map是ES6新增的集合类型，为这门语言带来了真正的键值存储机制。

## 基本用法
```js
// 创建空集合
const m = new Map();

// 使用嵌套数组初始化
const m1 = new Map([
    ["key1", "val1"],
    ["key2", "val2"]
]);

// 添加键值对
m.set("key1", "val1");

// 根据key判断指定元素是否存在
m.has("key1");

// 根据key获取指定元素
m.get("key1");

// 获取键值对数量
m.size;

// 根据key删除指定元素
m.delete("key1");

// 清空所有键值对
m.clear();
```
:::tip
- 与Object只能使用数值、字符串或符号作为键不同，Map可以使用任何JavaScript数据类型作为键。
- 与Object类似的是，Map映射的值是没有限制的。
- Map内部使用SameValueZero（基本相当于使用严格相等）来检查键的匹配性。
:::

## 迭代集合
与Object类型的一个主要差异是，Map实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作。
```js
const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
]);

// 通过entries()方法获取默认迭代器
for (const pair of m.entries()) {
    console.log(pair);
}

// 直接使用扩展操作符
const result = [...m];

m.forEach((key: string, val: string) => {
    console.log(`${key} -> ${val}`)
});

// 通过keys()方法获取以插入顺序生成键的迭代器
for (const key of m.keys()) {
    console.log(key);
}

// 通过values()方法获取以插入顺序生成值的迭代器
for (const val of m.values()) {
    console.log(val);
}
```

## Object vs Map
- 内存占用：Map大约比Object多存储50%的键值对。
- 插入性能：如果涉及大量插入操作，Map性能更佳。
- 查找速度：如果涉及大量查找操作，某些情况下（例如使用连续整数作为属性）Object更好。
- 删除性能：如果涉及大量删除操作，毫无疑问应该选择Map。