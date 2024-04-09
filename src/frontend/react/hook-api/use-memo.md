# useMemo

## 什么是 useMemo

`useMemo` 可以缓存计算结果，避免在每次渲染时都进行重复计算。

## 基本语法

```javascript
const cachedValue = useMemo(() => {
    // do something
}, [dependencies]);
```