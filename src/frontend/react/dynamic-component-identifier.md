# 动态组件标识符

## 什么是动态组件标识符
动态组件标识符允许父组件向子组件传递一个组件标识符，子组件可以根据这个标识符来渲染不同的组件。

例如：有一个`Demo`组件，它接受一个`MenuItem`组件标识符，`MenuItem`组件标识符可以是HTML原生标签，也可以是自定义组件标签。
```jsx
export default function Demo({ MenuItem }) {
    return (
        <>
            <menu>
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
            </menu>
        </>
    );
}
```

### HTML原生标签
HTML原生标签可以以字符串的形式传递给子组件。
```jsx
import Demo from './Demo.jsx';

function App() {
    return <Demo MenuItem="li" />;
}

export default App;
```

### 自定义组件标签
自定义组件标签可以以组件名称的形式传递给子组件。
```jsx
import Demo from './Demo.jsx';

function Item({ children }) {
    return (
        <>
            <h1>{children}</h1>
        </>
    );
}

function App() {
    return <Demo MenuItem={Item} />;
}

export default App;
```