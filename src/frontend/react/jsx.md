# JSX

## 什么是JSX

JSX是React的重要组成，它可以让开发者在JavaScript中编写类似HTML的代码，这样可以更方便的描述UI的结构。

JSX不能直接在浏览器中运行，需要通过Babel等工具将JSX转换为JavaScript代码。

## JSX语法

### 定义组件
- 自定义组件的名称必须以大写字母开头
- 在组件中只能有一个根元素，可以使用`<></>`包裹多个元素
- 标签必须闭合
```jsx
function Demo() {
    return (
        <>
            <h1>Hello React</h1>
        </>
    );
}
```

### 使用表达式
使用`{}`包裹表达式，表达式期待返回一个值
```jsx
function Demo() {
    const name = 'React';
    return (
        <div>
            <h1>Hello, {name}</h1>
        </div>
    );
}
```
不可以在JSX中使用if语句，可以使用三元运算符或者逻辑与运算符代替
```jsx
function DemoA() {
    const isShow = true;
    return <div>{isShow ? <h1>Hello, React</h1> : null}</div>;
}

function DemoB() {
    const isShow = true;
    return <div>{isShow && <h1>Hello, React</h1>}</div>;
}
```

### 使用样式

使用`style`属性设置样式，样式的属性名使用驼峰命名法
```jsx
function Demo() {
    const style = {
        color: 'red',
        fontSize: '20px',
    };
    return <div style={style}>Hello, React</div>;
}
```
使用`className`属性设置类名
```jsx
function Demo() {
    return <div className="demo">Hello, React</div>;
}
```
也可以直接在标签中定义样式
```jsx
function Demo() {
    return <div style={{ color: 'red', fontSize: '20px' }}>Hello, React</div>;
}
```