# useMemo

## 什么是 useMemo

`useMemo` 是一个用于性能优化的 Hook。它会在渲染过程中对一个函数进行记忆，当依赖的数据发生变化时，会重新计算这个函数的返回值。

## 基本用法

### 跳过昂贵的重新计算

```jsx
import React, { useState, useMemo } from 'react';

function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function App() {
    const [count, setCount] = useState(1);
    const result = useMemo(() => fibonacci(count), [count]);
    return (
        <>
            <p>
                Count{': '}
                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
            </p>
            <p>
                Fibonacci({count}){': '}
                {result}
            </p>
        </>
    );
}

export default App;
```
