# Redux Toolkit

## 什么是 Redux Toolkit
Redux Toolkit 是一个官方的 Redux 标准工具包，它可以帮助你编写 Redux 逻辑更少、更简单。它包含了一些有用的函数和工具，可以帮助你编写 Redux 代码更少，更简洁。

## 基本用法
### 安装
```bash
npm install @reduxjs/toolkit react-redux
```

### 创建 Redux Store
```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### 创建 Slice
```js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

### 在React组件中使用
```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button aria-label="Increment by 10" onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
      </div>
    </div>
  );
}
```
### 提供 Redux Store
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Counter } from './features/counter/Counter';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
```