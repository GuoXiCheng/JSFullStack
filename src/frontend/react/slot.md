# 插槽

## 什么是插槽
插槽是一种模式，用于在组件中预留位置，让父组件可以在子组件中插入自定义内容或组件。

### props.children
`props.children`是一个特殊的prop，它包含了父组件标签内的所有子节点。
::: code-group
```jsx [App.jsx]
import Demo from './Demo.jsx';

function App() {
    const doClick = (value) => console.log(value);
    return <Demo clickBtn={doClick} >Demo Button</Demo>;
}

export default App;
```
```jsx [Demo.jsx]
export default function Demo({ children, clickBtn }) {
    return (
        <>
            <button onClick={() => clickBtn('demo')}>{children}</button>
        </>
    );
}
```
:::
### 具名插槽
具名插槽可以让父组件在子组件中插入多个自定义内容或组件。
::: code-group
```jsx [App.jsx]
import Demo from './Demo.jsx';

function App() {
    return (
        <Demo
            header={<h1>Header</h1>}
            footer={<h2>Footer</h2>}
        />
    );
}
```
```jsx [Demo.jsx]
export default function Demo({ header, footer }) {
    return (
        <>
            <header>{header}</header>
            <main>main content</main>
            <footer>{footer}</footer>
        </>
    );
}
```
:::