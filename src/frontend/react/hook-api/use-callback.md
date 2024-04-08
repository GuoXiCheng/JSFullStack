# useCallback

## 什么是 useCallback

`useCallback` 可以用于缓存函数，避免在每次渲染时都创建新的函数。

## 基本语法

```tsx
const memoizedCallback = useCallback(() => {
    // do something
}, [dependencies]);
```


<!-- ## 基本用法

### 跳过组件的重新渲染
如果父组件传递给子组件的函数是一个新的函数，那么子组件会重新渲染。使用useCallback可以缓存函数，避免不必要的渲染。
```jsx
import React, { useState, useCallback } from 'react';

const SearchComponent = React.memo(({ onSearch }) => {
    return <button onClick={onSearch}>Search</button>;
});

function App() {
    const [query, setQuery] = useState('');

    const handleSearch = useCallback(() => {
        console.log(`Searching for ${query}`);
    }, [query]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <SearchComponent onSearch={handleSearch} />
        </div>
    );
}

export default App;
```


### 防止频繁触发Effect
如果useEffect中使用函数作为依赖项，那么每次渲染都会生成一个新的函数，导致useEffect每次都会执行。使用useCallback可以缓存函数，避免不必要的渲染。
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
``` -->