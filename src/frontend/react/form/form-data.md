# FormData

## 什么是 FormData
FormData 是内置的表单对象，用于创建表单数据对象。

## 基本用法

```jsx
import React from 'react';

function App() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        console.log(Object.fromEntries(formData.entries()));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input name="name" type="text" />
            </label>
            <label>
                File:
                <input name="file" type="file" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
```