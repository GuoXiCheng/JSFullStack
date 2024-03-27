# context

## Prop Drilling

Prop Drilling（属性钻取）是指在多层数据传递中，顶层组件拥有的一些数据需要传递给深层的子组件，数据需要通过组件树的每一层传递，即使这些中间层不需要这些数据。

## 解决方案

### 直接传递props

最直接的方法就是通过多个组件直接传递props，这样也许会增加代码维护的工作量，但是这种方法是最直接的，并且数据流清晰。

### 组件组合
如果有多个中间层不直接使用数据而只是传递，这通常意味着没有对组件进行抽象。

对于不直接使用数据的中间层组件，可以将JSX作为children传递，这样也可以减少定义数据的组件和使用数据的组件之间的层级。

::: code-group
```jsx [方式一：直接传递 props]
function Layout({ posts }) {
    return (
        <div className="layout">
            <Posts posts={posts}></Posts>
        </div>
    );
}

function Posts({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

function App() {
    const posts = [
        { id: 1, title: 'React' },
        { id: 2, title: 'Vue' },
    ];

    return <Layout posts={posts}></Layout>;
}

export default App;
```
```jsx [方式二：使用组件组合]
function Layout({ children }) {
    return <div className="layout">{children}</div>;
}

function Posts({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

function App() {
    const posts = [
        { id: 1, title: 'React' },
        { id: 2, title: 'Vue' },
    ];

    return (
        <Layout>
            <Posts posts={posts} />
        </Layout>
    );
}

export default App;
```
:::
### Context
如果前两种方案都不适用，可以考虑使用React的Context API。

Context 可以在组件树中不需要层层传递 props 的情况下，将数据传递给所需组件。