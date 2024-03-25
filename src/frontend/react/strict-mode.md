# React 严格模式

## 什么是 React 严格模式

React 严格模式是一个用于在开发环境下检测应用中潜在问题的工具，它不直接影响生产环境的构建，旨在开发过程中帮助排查应用内的不安全的生命周期、过时的API调用、重复的组件渲染等问题。

## 启用 React 严格模式

要在应用中启用 React 严格模式，只需将 `<React.StrictMode>` 组件包装在应用的根组件中即可。

```jsx
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```
