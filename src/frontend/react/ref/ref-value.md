# ref 引用值

## 什么是 ref

ref 类似 state，可以被用来让组件存储状态，但是这些状态不会触发重新渲染。

## 基本用法
ref 可以存储任意JavaScript数据类型，可以通过 `ref.current` 来获取或修改存储的值，但不会触发重新渲染。
```jsx
import { useRef } from 'react';

export default function Demo() {
    const ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert(`Clicked: ${ref.current}`);
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    );
}
```

## ref 和 state 的区别

| ref                                     | state                                              |
| --------------------------------------- | -------------------------------------------------- |
| `useRef(value)` 返回 `{current: value}` | `useState(value)` 返回 `[value, setValue]`         |
| 更改时不触发重新渲染                    | 更改时触发重新渲染                                 |
| 可变——可以在渲染过程之外更新值          | “不可变”——必须通过设置函数更新值，从而排队重新渲染 |
| 不应在渲染期间读取或写入值              | 可随时读取，但每次渲染都有一个不变的state快照      |
