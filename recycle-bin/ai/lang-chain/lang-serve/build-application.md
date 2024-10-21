# 构建 LangServe 应用

## 设置项目目录

首先创建并移动到项目目录。

```bash
mkdir example-langserve
cd example-langserve
```

将 Open AI 密钥设置到环境变量中。

```bash
# .env
OPENAI_API_KEY="<YOUR_OPENAI_API_KEY>"
```

创建并激活虚拟环境。

::: code-group

```bash [linux]
python -m venv venv
source venv/bin/activate
```

```bash [windows]
python -m venv venv
venv\Scripts\activate
```

:::

## 安装依赖

```bash
pip install -U pip langchain-cli poetry
```

## 创建应用

在当前目录下初始化 LangChain 项目。

```bash
langchain app new .
```

按下 ENTER 后创建的目录结构如下：

```plaintext
.
├── app/
│   ├── __init__.py
│   ├── __pycache__/
│   │   └── . . .
│   └── server.py
├── Dockerfile
├── packages/
│   └── README.md
├── pyproject.toml
├── README.md
└── venv/
    └── . . .
```

继续安装剩余的依赖项：

```bash
poetry add "langserve[all]" langchain-openai python-decouple
```

- `langserve[all]`：LangServe 库的服务器和客户端组件。
- `langchain-openai`：包含 LangChain 的 OpenAI 集成的软件包。
- `python-decouple`：可用于读取环境变量和文件的包。

## 创建 LangServe 应用

若要创建基本的 LangServe 应用，需要将 `app/server.py` 中内容替换为以下代码：

```python
# app/server.py
from decouple import config
from fastapi import FastAPI
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langserve import add_routes


app = FastAPI()

model = ChatOpenAI(openai_api_key=config("OPENAI_API_KEY"))
prompt = ChatPromptTemplate.from_template("Give me a summary about {topic} in a paragraph or less.")
chain = prompt | model

add_routes(app, chain, path="/openai")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
```

## 测试应用程序

启动应用程序，并在 Web 浏览器访问：`127.0.0.1:8000/openai/playground`测试应用是否正常工作。

```bash
langchain serve
```

## 参考

- [Using LangServe to build REST APIs for LangChain Applications](https://www.koyeb.com/tutorials/using-langserve-to-build-rest-apis-for-langchain-applications)
