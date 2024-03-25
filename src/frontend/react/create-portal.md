# createPortal

## 什么是 createPortal

`createPortal`可以将组件渲染到父组件之外的 DOM 节点上。

## 基本用法
`createPortal`方法接收两个参数，第一个参数是要渲染的组件，第二个参数是要渲染到的 DOM 节点。

```jsx
import { createPortal } from 'react-dom';

export default function Demo() {
    return createPortal(<div>Portal</div>, document.body);
}
```