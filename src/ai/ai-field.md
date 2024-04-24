# AI 领域

## 人工智能领域

```mermaid
graph TD;
    AI[人工智能]

    subgraph AI [人工智能]
        ML[机器学习]
        NLP[自然语言处理]
        CV[计算机视觉]
        Robotics[机器人学]
        ES[专家系统]
        PS[感知系统]

        subgraph ML [机器学习]
            SL[监督学习]
            UL[非监督学习]
            SSL[半监督学习]
            RL[强化学习]
            DL[深度学习]
            subgraph DL [深度学习]
                CNN[卷积神经网络]
                RNN[循环神经网络]
            end
        end

        subgraph NLP [自然语言处理]
            SA[语义分析]
            SP[句法分析]
            SR[语音识别]
            TG[文本生成]
            MT[机器翻译]
        end

        subgraph CV [计算机视觉]
            IC[图像分类]
            OD[对象检测]
            IS[图像分割]
            FR[面部识别]
            AR[动作识别]
        end

        subgraph Robotics [机器人学]
            NAV[导航和定位]
            OC[操作和控制]
            PER[感知和处理]
            COB[协作机器人]
        end

        subgraph ES [专家系统]
            KB[知识库]
            RE[推理引擎]
            INT[解释器]
        end

        subgraph PS [感知系统]
            VP[视觉感知]
            AP[听觉感知]
            TP[触觉感知]
        end
    end
```

## 机器学习

### 监督学习（Supervised Learning）

在监督学习中，算法从标记的训练数据中学习，每个训练样本都有一个输入对象（特征向量）和一个期望的输出值（标签）。

算法的目标是学习一个模型，使其能够准确地预测新的、未见过的数据。

### 非监督学习（Unsupervised Learning）

非监督学习的算法试图从未标记的数据中找到隐藏的结构。由于输入数据没有标签，因此算法需要自行发现数据中的模式和关系。

### 半监督学习（Semi-Supervised Learning）

半监督学习介于监督学习和非监督学习之间。

它使用少量标记数据和大量未标记数据进行训练，这种方法在标记数据昂贵或难以获得，但未标记数据易于获取的情况下非常有用。

### 强化学习（Reinforcement Learning）

在强化学习中，算法（或称为代理）通过与环境交互来学习行为策略，目标是最大化累积奖励。

这种学习与上述三种形式不同，它侧重于在一定的策略下进行决策序列，而非单次预测。
