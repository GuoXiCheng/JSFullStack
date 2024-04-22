# 文档内容总结

## 用例概述

文档内容总结是将文档内容进行提炼，提取出文档的主要信息，以便于用户快速了解文档内容。

LLMs 可以很好的理解文本内容，因此可以用于对文档内容（PDFs、Notion Pages 等）的总结。

![](/images/ai/summarization_use_case_1-874f7b2c94f64216f1f967fb5aca7bc1.png)

## 输入文档的两种方式

将文档内容输入到 LLMs 的上下文窗口中有两种常用方式：Stuff 和 Map-reduce。

![](/images/ai/summarization_use_case_2-f2a4d5d60980a79140085fb7f8043217.png)

### Stuff

直接输入所有文档内容并配合一些提示，让 LLMs 生成文档总结。

### Map-reduce

将文档内容分成多个部分，然后分别输入到 LLMs 中，最后将所有部分的总结合并成一个文档总结。

## 参考

- [summarization](https://python.langchain.com/docs/use_cases/summarization/)
