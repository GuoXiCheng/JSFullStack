# useCallback

## 什么是 useCallback
useCallback 是一个允许在多次渲染中缓存函数的 Hook。

## useCallback(fn, dependencies)
- fn: 需要缓存的函数。
- dependencies: 依赖项数组，用于控制缓存函数的执行时机。

## 基本用法

### 防止频繁触发Effect

```jsx

import React, { useState, useEffect, useCallback } from 'react';

export default function Demo() {
    const [query, setQuery] = useState('香蕉');
    const [data, setData] = useState(null);

    const fetchData = useCallback(async () => {
        const response = await fetch(
            `https://api.oioweb.cn/api/search/FoodHeat?keyword=${query}`
        );
        const data = await response.json();
        setData(data);
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>热量</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.result &&
                        data.result.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.heat}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
```