# 受控组件

## 什么是受控组件
受控组件是指表单元素的值由 React 组件的 state 控制的表单元素。

## 基本用法
受控组件的表单中的输入值由 React 组件的 state 控制，通过 `onChange` 事件来更新 state。
```jsx
import React, { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('A name was submitted: ' + inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
```