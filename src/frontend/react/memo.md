# memo

## 什么是 memo
memo 允许在组件的 props 没有发生变化的情况下跳过重新渲染。

:::warning
memo 会带来额外的计算开销，因此只应用于**性能优化**。
:::

## 基本用法

### 当 props 没有变化时跳过重新渲染
memo 用于在函数组件的 props 没有变化的情况下避免不必要的渲染，以提高性能。
```jsx
import React, { useState, memo } from 'react';

const Greeting = memo(({ name }) => {
    console.log('Greeting was rendered at', new Date().toLocaleTimeString());
    return (
        <h3>
            Hello{name && ', '}
            {name}!
        </h3>
    );
});

function App() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    return (
        <>
            <p>
                Name{': '}
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
                Address{': '}
                <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </p>
            <Greeting name={name} />
        </>
    );
}

export default App;
```