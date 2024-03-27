# useContext
useContext 是一个可以用来读取和订阅 Context 的 React Hook。

## 基本用法
useContext 会查找离当前组件最近的 Context.Provider，并返回它的 value 值。
::: code-group
```jsx [store/demo-context.js]
import { createContext } from 'react';

export const DemoContext = createContext({
    item: [],
});
```
```jsx [DemoA.jsx]
import DemoB from './DemoB.jsx';

export default function DemoA() {
    return (
        <>
            <DemoB />
        </>
    );
}
```
```jsx [DemoB.jsx]
import DemoC from './DemoC.jsx';

export default function DemoB() {
    return (
        <>
            <DemeC />
        </>
    );
}
```
```jsx [DemoC.jsx]
import { DemoContext } from './store/demo-context.js';
import { useContext } from 'react';

export default function DemoC() {
    const demoContext = useContext(DemoContext);
    return (
        <>
            {demoContext.item.map((it, index) => (
                <p key={index}>{it}</p>
            ))}
        </>
    );
}
```
```jsx [App.jsx]
import { DemoContext } from './store/demo-context.js';
import DemoA from './DemoA.jsx';

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
## 更新 Context
要更新 Context，需要与 state 结合使用，在父组件中声明一个状态变量，并将当前状态作为 Context 的 value 值传递给 Provider。
::: code-group
```jsx [store/demo-context.js]
import { createContext } from 'react';

export const DemoContext = createContext({
    item: [],
});
```
```jsx [DemoA.jsx]
import DemoB from './DemoB.jsx';

export default function DemoA() {
    return (
        <>
            <DemoB />
        </>
    );
}
```
```jsx [DemoB.jsx]
import DemoC from './DemoC.jsx';

export default function DemoB() {
    return (
        <>
            <DemoC />
        </>
    );
}
```
```jsx [DemoC.jsx]
import { DemoContext } from './store/demo-context.js';
import { useContext } from 'react';

export default function DemoC() {
    const demoContext = useContext(DemoContext);
    return (
        <>
            {demoContext.item.map((it, index) => (
                <p key={index}>{it}</p>
            ))}
        </>
    );
}
```
```jsx [App.jsx]
import './App.css';
import { useState } from 'react';
import { DemoContext } from './store/demo-context.js';
import DemoA from './DemoA.jsx';

function App() {
    const [item, setItem] = useState([]);
    return (
        <DemoContext.Provider value={{ item }}>
            <DemoA />
            <button onClick={() => setItem((pre) => [...pre, pre.length + 1])}>
                Click
            </button>
        </DemoContext.Provider>
    );
}

export default App;
```
:::