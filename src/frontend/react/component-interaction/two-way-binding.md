# 双向数据绑定

## 什么是双向数据绑定
双向数据绑定是指视图层的变化会自动更新到模型层，模型层的变化也会自动更新到视图层。

## 单向数据流
React中采用的是单向数据流模式，即数据只能从顶层组件流向子组件。

React不提供内置的双向数据绑定，但可以通过state和props来实现双向数据绑定。

## 实现双向数据绑定
通过`onChange`事件监听输入并更新状态，可以将输入框的值变化同步到视图中。
```jsx
import { useState } from 'react';

export default function Demo() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <p>{value}</p>
            <input type="text" value={value} onChange={handleChange} />
        </>
    );
}
```