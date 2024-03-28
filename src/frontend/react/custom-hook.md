# 自定义 Hook

## 什么是自定义 Hook
自定义 Hook 是可用于在组件间共享状态处理逻辑的函数。

:::warning
- 自定义 Hook 的函数名称必须以 `use` 开头，后跟大写字母开头。
- 自定义 Hook 共享的是状态处理**逻辑**，而不是状态本身。
:::

## 使用自定义 Hook
在自定义Hook中，可以使用React的原生Hook来实现逻辑，并根据需要返回状态、调度器或回调函数。
:::code-group
```jsx [useGeoLocation.jsx]
import { useState, useEffect } from 'react';

export default function useGeoLocation() {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
        });

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    return location;
}
```
```jsx [App.jsx]
import React from 'react';
import useGeoLocation from './useGeoLocation.jsx';

function App() {
    const { latitude, longitude } = useGeoLocation();
    return (
        <>
            <div>{latitude && `[${latitude}, ${longitude}]`}</div>
        </>
    );
}

export default App;
```
:::