# JSX 语法

## 什么是 JSX

JSX 是 React 提供的可以在 JavaScript 中编写类似 HTML 的代码的语法糖，它可以让开发者更方便的描述 UI 的结构。

JSX 不能直接在浏览器中运行，需要通过 Babel 等工具将 JSX 转换为 JavaScript 代码。

## JSX 的基本语法

### 定义组件

- 自定义组件的名称必须以大写字母开头
- 在组件中只能有一个根元素（因为函数只能返回一个值），可以使用`<></>`包裹多个元素
- 标签必须闭合

<<< @/../projects/react-sandbox/src/pages/jsx-demo/BasicJSX.tsx

### 使用表达式

使用`{}`包裹表达式，表达式期待返回一个值。

<<< @/../projects/react-sandbox/src/pages/jsx-demo/UseExpression.tsx

### 使用图片

<<< @/../projects/react-sandbox/src/pages/jsx-demo/UsePic.tsx

### 渲染列表

<<< @/../projects/react-sandbox/src/pages/jsx-demo/RenderList.tsx

### 条件渲染

条件渲染是根据条件来渲染不同的内容，常用的方式有三元运算符、逻辑与运算符、if 语句。

#### 三元运算符

<<< @/../projects/react-sandbox/src/pages/jsx-demo/RenderWithTernaryExpression.tsx

#### 逻辑与运算符

<<< @/../projects/react-sandbox/src/pages/jsx-demo/RenderWithAnd.tsx

#### if 语句

<<< @/../projects/react-sandbox/src/pages/jsx-demo/RenderWithIf.tsx
