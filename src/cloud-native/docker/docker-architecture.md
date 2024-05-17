# docker 的架构

## docker 的基本架构

docker 采用了客户端-服务器的架构。

docker 的基本架构图如下：

![](/images/cloud-native/docker-architecture.webp)

## docker 客户端

docker 客户端是 docker 与用户交互的界面。

用户可以通过执行`docker build`、`docker pull`、`docker run`等 docker 命令来与 docker 服务器交互，来管理容器和镜像。

## docker 服务器

docker 服务器运行在物理机或虚拟机上，docker 服务器中的`docker daemon`是一个长时间运行的守护进程，负责构建、分发和运行 docker 容器，管理 docker 容器的生命周期。

docker 客户端与服务器可以运行在同一系统中，也可以运行在不同系统中，通过 Socket 或 RESTful API 进行通信。

## docker 注册中心（Registry）

docker 注册中心是 docker 用来存储 docker 镜像的地方。

用户可以通过`docker pull`命令从注册中心拉取镜像，也可以通过`docker push`命令将镜像推送到注册中心。
