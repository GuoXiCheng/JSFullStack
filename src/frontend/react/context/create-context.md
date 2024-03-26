# createContext

## 什么是 Context
Context 是 React 中一种在组件树中共享值的方式，而无需显式地通过组件树的逐层传递 props 来传递数据。

## 基本用法
- 首先通过`createContext`方法创建一个Context对象
- 然后通过`Context.Provider`组件提供一个共享的值
- 最后通过`Context.Consumer`组件消费这个共享的值

:::code-group
```jsx [store/demo-context.js]
import { createContext } from 'react';

export const DemoContext = createContext({
    item: [],
});
```
```jsx [App.jsx]
import { DemoContext } from './store/demo-context.js';

function DemoA() {
    return (
        <>
            <DemoB />
        </>
    );
}

function DemoB() {
    return (
        <DemoContext.Consumer>
            {(value) => value.item.map((it) => <p key={it}>{it}</p>)}
        </DemoContext.Consumer>
    );
}

function App() {
    const defaultItems = [1, 2, 3, 4, 5];
    return (
        <DemoContext.Provider value={{ item: defaultItems }}>
            <DemoA />
        </DemoContext.Provider>
    );
}

export default App;
```
:::