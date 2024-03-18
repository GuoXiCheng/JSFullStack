# Set

## Set 集合
Set是ES6新增的集合类型，它类似于数组，但是成员的值都是唯一的，没有重复的值。

## 基本用法

```js
// 创建空集合
const s = new Set();

// 使用嵌套数组初始化
const s1 = new Set(["val1", "val2", "val3"]);

// 添加值
s.add("val1");

// 根据key判断指定元素是否存在
s.has("val1");

// 获取值的数量
s.size;

// 删除指定元素，并返回一个布尔值表示是否存在要删除的值
s.delete("val1");

// 清空所有元素
s.clear();
```
:::tip
- Set可以使用任何JavaScript数据类型作为键。
- Set内部使用SameValueZero（基本相当于使用严格相等）来检查值的匹配性。
:::

## 迭代集合

```js
const s = new Set(["val1", "val2", "val3"]);

// 通过entries()方法获取默认迭代器，它会返回一个[value, value]形式的数组
for (const pair of s.entries()) {
    console.log(pair);
}

// 直接使用扩展操作符
const result = [...s];

// 使用forEach进行迭代
s.forEach((val: string) => {
    console.log(`${val}`)
});

// 通过values()方法获取以插入顺序生成值的迭代器
for (const val of s.values()) {
    console.log(val);
}
```

## 集合的标准化操作
通过扩展Set类来添加一些集合的标准化操作：并集、交集、差集、对称差集、笛卡尔积和幂集。
### 定义
```js
class XSet<T> extends Set<T> {
    union(...sets: Array<Set<T>>): XSet<T> {
        return XSet.union(this, ...sets);
    }

    intersection(...sets: Array<Set<T>>): XSet<T> {
        return XSet.intersection(this, ...sets);
    }

    difference(set: Set<T>): XSet<T> {
        return XSet.difference(this, set);
    }

    symmetricDifference(set: Set<T>): XSet<T> {
        return XSet.symmetricDifference(this, set);
    }

    cartesianProduct<U>(set: Set<U>): XSet<[T, U]> {
        return XSet.cartesianProduct(this, set);
    }

    powerSet(): XSet<XSet<T>> {
        return XSet.powerSet(this);
    }

    //返回两个或更多集合的并集
    static union<T>(a: Set<T>, ...bSets: Array<Set<T>>): XSet<T> {
        const unionSet = new XSet<T>(a);
        for (const b of bSets) {
            for (const bValue of b) {
                unionSet.add(bValue);
            }
        }
        return unionSet;
    }

    //返回两个或更多集合的交集
    static intersection<T>(a: Set<T>, ...bSets: Array<Set<T>>): XSet<T> {
        const intersectionSet = new XSet<T>(a);
        for (const aValue of intersectionSet) {
            if (bSets.every(b => !b.has(aValue))) {
                intersectionSet.delete(aValue);
            }
        }
        return intersectionSet;
    }

    //返回两个集合的差集
    static difference<T>(a: Set<T>, b: Set<T>): XSet<T> {
        const differenceSet = new XSet<T>(a);
        for (const bValue of b) {
            if (a.has(bValue)) {
                differenceSet.delete(bValue);
            }
        }
        return differenceSet;
    }

    //返回两个集合的对称差集
    static symmetricDifference<T>(a: Set<T>, b: Set<T>): XSet<T> {
        return XSet.union(a, b).difference(XSet.intersection(a, b));
    }

    //返回两个集合（数组对形式）的笛卡儿积
    static cartesianProduct<T, U>(a: Set<T>, b: Set<U>): XSet<[T, U]> {
        const cartesianProductSet = new XSet<[T, U]>();
        for (const aValue of a) {
            for (const bValue of b) {
                cartesianProductSet.add([aValue, bValue]);
            }
        }
        return cartesianProductSet;
    }

    //返回一个集合的幂集
    static powerSet<T>(a: Set<T>): XSet<XSet<T>> {
        const powerSet = new XSet<XSet<T>>().add(new XSet<T>());
        for (const aValue of a) {
            for (const set of new XSet<XSet<T>>(powerSet)) {
                powerSet.add(new XSet<T>(set).add(aValue));
            }
        }
        return powerSet;
    }
}
```

### 用法
```js
const setA = new XSet([1, 2, 3]);
const setB = new XSet([3, 4, 5]);


// 并集：返回一个包含两个集合所有元素的新集合，重复的元素只会出现一次
const unionSet = setA.union(setB);
console.log(unionSet); // 输出：Set (5) {1, 2, 3, 4, 5} 

// 交集：返回一个新集合，包含两个集合中共有的元素
const intersectionSet = setA.intersection(setB);
console.log(intersectionSet); // 输出：Set (1) {3}

// 差集：返回一个新集合，包含存在于第一个集合但不在第二个集合中的元素
const differenceSet = setA.difference(setB);
console.log(differenceSet); // 输出：Set (2) {1, 2}

// 对称差集：返回一个新集合，包含只存在于其中一个集合中的元素
const symmetricDifferenceSet = setA.symmetricDifference(setB);
console.log(symmetricDifferenceSet); // 输出：Set (4) {1, 2, 4, 5} 

// 笛卡尔积：返回一个新集合，包含所有可能的有序对组合
const cartesianProductSet = setA.cartesianProduct(setB);
console.log(cartesianProductSet); // 输出：Set (9) {[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 3], [3, 4], [3, 5]} 

// 幂集：返回一个新集合，包含原始集合的所有可能子集
const powerSet = setA.powerSet();
console.log(powerSet); // 输出：Set (8) {Set (0) {}, Set (1) {1}, Set (1) {2}, Set (2) {1, 2}, Set (1) {3}, Set (2) {1, 3}, Set (2) {2, 3}, Set (3) {1, 2, 3}} 
```