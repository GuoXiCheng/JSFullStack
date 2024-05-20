# docker 基本使用命令

## docker 基本命令

docker 的基本命令涵盖 docker 的登入登出、操作镜像和容器的方法，可以满足日常使用需求。

## 登入登出

```bash
# 登入 dockerhub
docker login -u username -p password

# 登入私有仓库
docker login -u username -p password registry.example.com

# 登出
docker logout
```

## 操作镜像

### 拉取镜像

```bash
# 从 dockerhub 拉取 nginx 镜像
docker pull nginx:latest
```

### 列出本地镜像

```bash
docker images
```

### 删除本地镜像

```bash
# 删除 nginx 镜像
docker rmi nginx:latest
```

## 操作容器

### 启动容器

```bash
# 启动 nginx 容器
# -d: 后台运行
# -p: 端口映射（宿主机端口:容器端口）
# --name: 容器名称
docker run -d -p 80:80 --name nginx nginx:latest
```

### 进入容器

```bash
# 进入 nginx 容器
docker exec -it nginx /bin/bash
```

### 列出容器

```bash
# 列出所有容器
docker ps -a

# 列出正在运行的容器
docker ps
```

### 启停容器

```bash
# 启动 nginx 容器
docker start nginx

# 停止 nginx 容器
docker stop nginx

# 重启 nginx 容器
docker restart nginx
```

### 删除容器

```bash
# 删除 nginx 容器
docker rm nginx
```

## 批量清理无 tag 镜像

```bash
docker images | grep none | awk '{print $3}' | xargs docker rmi
```
