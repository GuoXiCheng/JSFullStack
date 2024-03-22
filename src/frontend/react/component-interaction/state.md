# state

## 什么是state
state是组件内部的状态管理机制。当state的值发生变化时，组件会重新渲染。

### 基本用法
使用useState来创建一个可变的状态和一个更新该状态的函数。
```jsx
import { useState } from 'react';

export default function Demo() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>click</button>
        </>
    );
}
```
### 依赖上个状态
通过传递一个函数来更新状态，可以获取上个状态的值。
```jsx
import { useState } from 'react';

export default function Demo() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount((pre) => pre + 1)}>click</button>
        </>
    );
}
```
### 更新部分属性
使用展开运算符：`...pre`，更新状态对象的部分属性，保持其他属性不变。
```jsx
import { useState } from 'react';

export default function Demo() {
    const [person, setPerson] = useState({
        name: 'Joe',
        age: 18,
    });

    return (
        <>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <button
                onClick={() =>
                    setPerson((pre) => ({ ...pre, age: pre.age + 1 }))
                }
            >
                click
            </button>
        </>
    );
}
```