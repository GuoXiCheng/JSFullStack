# OpenAI API

## 基本用法

可以使用POST请求向OpenAI API提交内容，其中**content**字段包含提问与回答的内容。

**temperature**用于控制生成文本的创造性，值越高，生成的文本越有创造性。

::: code-group

<<< @/../projects/javascript-sandbox/src/openai/basic-usage.ts [Request]

<<< @/../projects/javascript-sandbox/src/openai/basic-usage-output.json [Response]

:::

## 连续对话

连续对话需要把每一次的提问和回答都追加到`messages`数组中，以便OpenAI能够理解对话的上下文。

**role**可用于指定对话的角色:
- `user`：表示用户的提问
- `assistant`：表示助手的回答
- `system`：用于定义整个对话的行为，通常放在`messages`数组的第一个元素

::: code-group

<<< @/../projects/javascript-sandbox/src/openai/chat-usage.ts [Request]

<<< @/../projects/javascript-sandbox/src/openai/chat-usage-output.json [Response]

:::