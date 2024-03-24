# Styled Components

## 什么是 Styled Components
Styled Components 是一个 CSS-in-JS 库，它可以使用 JavaScript 来编写 CSS 样式。

Styled Components 通过创建 React 组件的方式来定义样式，这样可以在组件内部定义样式，而不是在全局定义样式。

## Styled Components 的使用

### 安装
```bash
npm install styled-components
```

### 基本用法
`styled` 创建了一个普通的React组件，并使用模板字符串来定义样式。
```jsx
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

export default function Demo() {
    return (
        <>
            <Title>Hello, React</Title>
        </>
    );
}
```
### 条件渲染
通过控制样式组件的属性，可以实现条件渲染。
```jsx
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.$primary ? '#BF4F74' : '#333'};
`;

export default function Demo() {
    return (
        <>
            <Title $primary>Hello, React</Title>
        </>
    );
}
```
### 扩展样式
可以通过 `styled()` 函数来扩展已有的样式组件。
```jsx
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const SubTitle = styled(Title)`
  font-size: 1em;
`;

export default function Demo() {
    return (
        <>
            <Title>Hello, React</Title>
            <SubTitle>Styled Components</SubTitle>
        </>
    );
}
```
### 伪类和伪元素
通过 `&` 符号来定义伪类和伪元素。
```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: #BF4F74;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #FF6B98;
  }

  &::before {
    content: '🚀';
    margin-right: 5px;
  }
`;

export default function Demo() {
    return (
        <>
            <Button>Click Me</Button>
        </>
    );
}
```

## 参考

- [Styled Components 官方文档](https://styled-components.com/docs)