# useCallback

## 什么是 useCallback

`useCallback` 可以用于缓存函数，避免在每次渲染时都创建新的函数。

## 基本语法

```tsx
const cachedFn = useCallback(() => {
    // do something
}, [dependencies]);
```