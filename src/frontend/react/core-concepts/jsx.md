# JSX 语法

## 什么是 JSX
JSX是React的重要组成，它可以让开发者在JavaScript中编写类似HTML的代码，这样可以更方便的描述UI的结构。

JSX不能直接在浏览器中运行，需要通过Babel等工具将JSX转换为JavaScript代码。

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