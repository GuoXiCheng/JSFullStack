# LangChain 介绍

## 什么是 LangChain

LangChain 是一个开发由大语言模型（LLM）驱动的应用的开发框架。

## LangChain 库的组成

| 库名称                | 描述                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------- |
| `langchain-core`      | 提供抽象层和 LangChain 表达式语言（LCEL）                                              |
| `langchain-community` | 提供第三方集成（例如：`langchain-openai`、`langchain-anthropic`）                      |
| `langchain`           | 提供构建应用的核心功能 Chains（链）、Agents（代理）和 Retrieval Strategies（检索策略） |
| `LangGraph`           | 提供构建有状态多参与者应用的功能                                                       |
| `LangServe`           | 提供将 LangChain 部署为 REST APIs 服务的功能                                           |
| `LangSmith`           | 提供调试、测试、评估和监控大语言模型应用以及无缝与 LangChain 集成的开发平台            |
