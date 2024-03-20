# props

## 什么是props
React中的props允许将数据从父组件传递到子组件。

props是**只读**的，子组件不能修改props，以保证数据的单向流动。

### 基本用法
```jsx
export function Demo(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </>
    );
}
```

```jsx
import { Demo } from './Demo.jsx';

function App() {
    const content = [
        {
            title: 'React',
            desc: 'This is React',
        },
        {
            title: 'Angular',
            desc: 'This is Angular',
        },
        {
            title: 'Vue',
            desc: 'This is Vue',
        },
    ];
    return (
        <>
            {content.map((item, index) => (
                <Demo key={index} title={item.title} desc={item.desc} />
            ))}
        </>
    );
}
```

### 简写形式
```jsx
export function Demo({ title, desc }) {
    return (
        <>
            <h3>{title}</h3>
            <p>{desc}</p>
        </>
    );
}
```
```jsx
import { Demo } from './Demo.jsx';

function App() {
    const content = [
        {
            title: 'React',
            desc: 'This is React',
        },
        {
            title: 'Angular',
            desc: 'This is Angular',
        },
        {
            title: 'Vue',
            desc: 'This is Vue',
        },
    ];
    return (
        <>
            {content.map((item, index) => (
                <Demo key={index} {...item} />
            ))}
        </>
    );
}
```
### 传递函数
```jsx
export function Demo({ clickBtn }) {
    return (
        <>
            <button onClick={() => clickBtn('demo')}>click</button>
        </>
    );
}
```
```jsx
import { Demo } from './Demo.jsx';

function App() {
    const doClick = (value) => console.log(value);
    return <Demo clickBtn={doClick} />;
}
```