# 安装 docker

## 下载安装

### 下载安装脚本

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
```

### 运行安装脚本

```bash
sh get-docker.sh --mirror Aliyun
```

### 启动 docker 服务

```bash
systemctl daemon-reload
systemctl restart docker
```

### 验证安装

```bash
sudo docker --version
```

## 添加用户到 docker 用户组

如果不想每次执行 docker 命令都需要加上 sudo，可以将用户添加到 docker 用户组。

### 创建 docker 用户组

```bash
sudo groupadd docker
```

### 将用户添加到 docker 用户组

```bash
sudo usermod -aG docker $USER
```

### 重启 docker 服务

```bash
systemctl restart docker
```

### 验证用户组

```bash
docker version
```
