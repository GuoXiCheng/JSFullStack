# 基准代码

![](/images/12-factor-app/codebase-deploys.png)

## 核心思想

在 12-Factor APP 中，一份基准代码应与一个应用保持一一对应关系，但可以存在多份部署。

## 基准代码的定义

- 在集中式版本控制系统（如 SVN）中，基准代码是指单一的代码库。

- 在分布式版本控制系统（如 Git）中，基准代码是指最上游的代码库。

## 基准代码与应用的关系

一份基准代码对应一个应用，多份基准代码对应多个应用，多个应用组成一个分布式系统。

在分布式系统中，每一个组件都是一个应用，每个应用都可以使用 12-Factor 进行开发。

多个应用共享一份基准代码有悖于 12-Factor 的原则，可以将共享代码拆分为独立的类库，然后将类库发布到代码仓库或包管理器中。

## 部署的多样性

一份基准代码的多份部署中，每份部署都相当于一个应用的实例，例如：开发环境、测试环境、生产环境等。

所有部署的基准代码相同，但可以有不同的版本。
