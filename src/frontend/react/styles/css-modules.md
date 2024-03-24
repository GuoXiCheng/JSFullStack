# CSS Modules

## 什么是 CSS Modules
CSS Modules 是一种 CSS 文件的模块化解决方案，它可以让 CSS 文件的类名在全局范围内唯一，避免了类名冲突的问题。

### CSS Modules 的使用
只需将 CSS 文件的后缀名改为 `.module.css` 即可保证不会影响全局样式或被全局样式影响。

::: code-group
```jsx [App.jsx]
import './App.css';
import Demo from './Demo.jsx';

function App() {
    return (
        <>
            <Demo />
        </>
    );
}

export default App;
```
```css [App.css]
h1 {
    color: red;
}

.demoClass {
    color: red;
}
```
```jsx [Demo.jsx]
import styles from './Demo.module.css';

export default function Demo() {
    return (
        <>
            <h1>Hello, React</h1>
            <h1 className={styles.demoClass}>Hello, Angular</h1>
        </>
    );
}
```
```css [Demo.module.css]
h1 {
    color: pink;
}

.demoClass {
    color: blue;
}
```
:::