# 结合使用 Reducer 和 Context
Reducer 可以用来整合组件的状态更新逻辑。

Context 可以用来将数据深入传递给其他组件。

结合使用 Reducer 和 Context，可以共同管理一个复杂页面的状态。

## 基本用法

### 创建 Context
创建Context用于共享数据。
```jsx
import { createContext } from 'react';

export const CounterContext = createContext({
    count: 0,
});
```
### 定义 Reducer
定义Reducer用于更新状态。
```jsx
export function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}
```
### 创建 Provider 组件
创建Provider组件用于传递数据。
```jsx
import React, { useReducer } from 'react';
import { CounterContext } from './store/counter-context.js';
import { counterReducer } from './store/counter-reducer.js';

export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
    });

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};
```
### 使用 Context 和 Reducer
使用useContext获取状态和dispatch函数。
```jsx
import React, { useContext } from 'react';
import { CounterContext } from './store/counter-context.js';

export default function Counter() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}
```
### 使用 Provider
使用Provider包裹需要使用状态的组件。
```jsx
import { CounterProvider } from './CounterProvider';
import Counter from './Counter.jsx';

function App() {
    return (
        <CounterProvider>
            <Counter />
        </CounterProvider>
    );
}

export default App;
```