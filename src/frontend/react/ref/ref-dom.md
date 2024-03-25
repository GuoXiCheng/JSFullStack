# ref 操作 DOM

## 为什么使用 ref 操作 DOM
无论React组件何时更新或重新渲染，ref 都可以安全地保持对DOM元素的引用。

并且即使对 ref 的属性进行修改，也不会触发组件的重新渲染。

## 基本用法
当把 ref 属性添加到HTML原生组件上时，ref 的 current 属性将被设置为相应的DOM元素。因此，可以通过 ref.current 来访问DOM元素上的属性和方法。
```jsx
import { useRef } from 'react';

export default function Demo() {
    const inputRef = useRef(null);

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus the input</button>
        </div>
    );
}
```
## 转发 ref
默认情况下，React 不允许组件访问其他组件的 DOM 节点。但是一个组件可以通过`forwardRef`来向其子组件转发 ref。
```jsx
import React, { forwardRef, useRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
    return <input ref={ref} />;
});

export default function Demo() {
    const inputRef = useRef(null);

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <div>
            <FancyInput ref={inputRef} />
            <button onClick={focusInput}>Focus the input</button>
        </div>
    );
}
```
## 转发 ref 的部分属性
`useImperativeHandle`可以在使用 ref 转发时，只暴露给父组件部分属性或方法。
```jsx
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return <input ref={inputRef} />;
});

export default function Demo() {
    const inputRef = useRef(null);

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <div>
            <FancyInput ref={inputRef} />
            <button onClick={focusInput}>Focus the input</button>
        </div>
    );
}
```
