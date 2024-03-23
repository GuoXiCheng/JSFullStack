# 状态提升

## 什么是状态提升
状态提升是React中用于状态管理的技术，当多个子组件需要共享状态时，可以将状态提升到它们最近共同父组件中，然后通过props将状态和状态更新函数传递给子组件。

### 状态提升用例
例如，通过将RMB和USD的值及其更新逻辑提升到共同的父组件中，再通过props传递状态和状态更新函数，实现了两个相互关联的输入框间的同步更新。
```jsx
import { useState } from 'react';

const EXCHANGE_RATE = 7.2295;

function Currency({ type, value, onChange }) {
    return (
        <div>
            <label>{type}: </label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

function App() {
    const [rmbValue, setRmbValue] = useState(0);
    const [usdValue, setUsdValue] = useState(0);

    function handleRmbChange(rmb) {
        setRmbValue(rmb);
        setUsdValue((rmb / EXCHANGE_RATE).toFixed(4));
    }

    function handleUsdChange(usd) {
        setUsdValue(usd);
        setRmbValue((usd * EXCHANGE_RATE).toFixed(4));
    }

    return (
        <>
            <Currency type="RMB" value={rmbValue} onChange={handleRmbChange} />
            <Currency type="USD" value={usdValue} onChange={handleUsdChange} />
        </>
    );
}

export default App;
```
