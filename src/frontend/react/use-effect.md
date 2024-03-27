# useEffect

## 什么是 useEffect
useEffect是一个在React函数式组件中执行副作用的Hook。

副作用是指在函数中执行除了返回一个值以外的操作，比如修改DOM、数据请求、订阅等。

## useEffect(setup, dependencies?)
- setup: 副作用函数，用于执行副作用操作。setup 函数选择性返回一个清理（cleanup）函数。
- dependencies: 依赖项数组，用于控制副作用函数的执行时机。

:::warning
- 严格模式启动时，开发模式下有一个额外的`setup + cleanup`周期，用于发现潜在的问题。
- 如果依赖项是组件内部定义的**对象**或**函数**，每次渲染都会创建新的对象或函数，导致依赖项变化，可能会导致副作用函数频繁执行，可以使用`useMemo`或`useCallback`解决。
:::

## 基本用法

### 不传递依赖项
如果不传递依赖项，useEffect会在每次渲染后执行。例如state发生变化引发重新渲染时，useEffect每次都会执行。
```jsx
import React, { useEffect, useState } from 'react';

export default function Demo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('每次渲染后执行');
    });

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}
```

### 传递空依赖项
如果传递空依赖项，useEffect仅会在初始渲染后执行一次。例如state发生变化引发重新渲染时，useEffect不会执行。
```jsx
import React, { useEffect, useState } from 'react';

export default function Demo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('仅在初始渲染后执行');
    }, []);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}
```

### 传递依赖项
如果传递依赖项，useEffect会在初始渲染及依赖变更后引发的重新渲染后执行。初始化时useEffect会执行一次，之后每次依赖变更引发重新渲染时useEffect也会执行。
```jsx
import React, { useEffect, useState } from 'react';

export default function Demo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('在初始渲染及依赖变更后引发的重新渲染后执行');
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}
```

### 清除副作用（cleanup）
cleanup函数执行的时机：
1. 将组件挂载到页面时，将运行`setup 代码`。
2. 重新渲染依赖项变更的组件后：
   1. 首先，使用旧的 props 和 state 运行`cleanup 代码`。
   2. 然后，使用新的 props 和 state 运行`setup 代码`。
3. 当组件从页面卸载后，`cleanup 代码`将运行最后一次。

```jsx
import React, { useEffect, useState } from 'react';

export default function Demo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('在初始渲染及依赖变更后引发的重新渲染后执行');
        return () => {
            console.log('清除副作用');
        };
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}
```