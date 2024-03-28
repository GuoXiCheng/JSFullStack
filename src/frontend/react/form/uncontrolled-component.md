# 非受控组件

## 什么是非受控组件
非受控组件是指表单元素的值不受 React 控制，而是由 DOM 元素本身来控制的组件。

## 基本用法
非受控组件的表单中的输入值不受 React 控制，通过 `ref` 属性来获取表单元素的值。
```jsx
import React, { useRef } from 'react';

function App() {
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('A name was submitted: ' + inputRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={inputRef} />
            </label>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    );
}

export default App;
```