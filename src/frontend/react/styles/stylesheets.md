# Stylesheets

## 内联样式
使用`style`属性设置样式，样式的属性名使用驼峰命名法。
```jsx
function Demo() {
    const style = {
        color: 'red',
        fontSize: '20px',
    };
    return <div style={style}>Hello, React</div>;
}
```
也可以直接在标签中定义样式，这里第一层`{}`表示JSX的表达式，第二层`{}`表示对象。
```jsx
function Demo() {
    return <div style={{ color: 'red', fontSize: '20px' }}>Hello, React</div>;
}
```
## 外部样式
使用`className`属性设置类名。
```jsx
function DemoA() {
    return <div className='active'>Hello, React</div>;
}

function DemoB({selected}) {
    return <div className={selected ? 'active' : 'inactive'}>Hello, React</div>;
}
```
也使用模板字符串。
```jsx
function Demo({ selected }) {
    return (
        <div className={`default ${selected ? 'active' : 'inactive'}`}>
            Hello, React
        </div>
    );
}
```