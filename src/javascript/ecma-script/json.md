# JSON

## 什么是JSON
JSON是一种数据格式，而不是编程语言。

JSON是为了解决第一代Web服务以XML为通信格式过于冗余的问题而出现的替代性解决方法。

## 语法
JSON语法支持3种类型的值：简单值、对象、数组。
### 简单值
最简单的有效JSON简单值可以是字符串、数值、布尔值、null。

其中字符串必须使用双引号，不能使用单引号。

### 对象
JSON对象是一种无序的键/值对集合。

键必须是字符串，值可以是简单值、对象、数组。

### 数组
JSON数组是一种有序的值的列表。

值可以是简单值、对象、数组。

## 解析：JSON.parse()
JSON.parse()方法用于将JSON解析为原生JavaScript值。

JSON.parse()方法可接收一个额外的函数参数，这个函数会针对每个键值对调用一次。

这个函数被称为“还原函数”，它接收两个参数，属性名（key）和属性值（value），并返回一个值。如果还原函数返回undefined，则结果中就会删除相应的键。如果返回了其他任何值，则该值就会成为相应键的值插入到结果中。

还原函数经常用于将JSON中的日期字符串转换为Date对象：
```js
const book = `{
  "title": "Professional JavaScript",
  "date": "2017-11-30T16:00:00.000Z"
}`;

const bookCopy = JSON.parse(book,
  (key, value) => key == "date" ? new Date(value) : value);

console.log(bookCopy.date.getFullYear()) // 2017
```

## 序列化：JSON.stringify()
JSON.stringify()方法用于将JavaScript值序列化为JSON字符串。

JSON.stringify()方法可接收两个额外的参数：过滤器和缩进。

JSON.stringify()在实际执行时会使用以下步骤：
1. 调用toJSON()方法获取实际值，否则使用默认序列化方法。
2. 如果提供了第二个参数，则应用过滤器。传入过滤函数的参数就是第一步的返回值。
3. 对第二步的返回值进行序列化。
4. 如果提供了第三个参数，则使用它进行缩进。

### 过滤器
过滤器可以是一个数组，也可以是一个函数。

如果过滤器是一个数组，那么只有包含在这个数组中的属性名才会出现在结果中。

```js
const book = {
  title: "Professional JavaScript",
  edition: 4,
  read: true
};

const bookCopy = JSON.stringify(book, ["title", "edition"]);

console.log(bookCopy) // "{"title":"Professional JavaScript","edition":4}" 
```

如果过滤器是一个函数，它接收两个参数：属性名（key）和属性值（value），并返回一个值。如果返回undefined会导致属性被忽略。
```js
const book = {
  title: "Professional JavaScript",
  edition: 4,
  read: true
};

const bookCopy = JSON.stringify(book, (key: string, value: any) => {
  switch(key) {
    case 'title':
      return `《${value}》`;
    case 'edition':
      return undefined;
    default:
      return value;
  }
});

console.log(bookCopy) // "{"title":"《Professional JavaScript》","read":true}"
```
:::warning
函数过滤器会应用到要序列化的对象所包含的所有对象。
:::

### 缩进
缩进参数可以是一个字符串，也可以是一个数值。

在这个参数是数值时，表示每一级缩进的空格数。如果是字符串，那么就会使用这个字符串而不是空格进行缩进。

缩进的最大值是10，缩进的最大字符数也是10，如果超过10个字符会自动进行截断。

### toJSON()方法
可以在要序列化的对象上添加toJSON()方法，以便在调用JSON.stringify()时提供自定义的序列化值。

如果对象被嵌入在另一个对象中，返回undefined会导致值变成null；或者如果是顶级对象，则本身就是undefined。

:::warning
箭头函数不能用来定义toJSON()方法。
:::

```js
const book = {
  title: "Professional JavaScript",
  edition: 4,
  read: true,
  toJSON: function() {
    return this.title;
  }
};

const bookCopy = JSON.stringify(book);

console.log(bookCopy) // "Professional JavaScript"
```