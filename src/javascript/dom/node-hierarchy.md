---
aside: false
---

# 节点层级

## 什么是节点层级

任何 HTML 或 XML 文档都可以用 DOM 表示为一个由节点构成的层级结构。

节点分为很多类型，每种类型对应着文档中不同的信息和（或）标记，也都拥有自己的特性、数据和方法，而且与其他类型的节点之间存在着特定的关系，这些关系构成了节点层级结构。

## 节点层级结构

HTML 标记构成的层级结构可以表示为以特定节点为根的树形结构。

::: code-group

```html [HTML Document]
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

```plaintext [DOM Tree]
<html>
  ├─ <head>
  │    └─ <title>
  │         └─ "Sample Page"
  └─ <body>
       └─ <p>
            └─ "Hello World!"
```

:::
