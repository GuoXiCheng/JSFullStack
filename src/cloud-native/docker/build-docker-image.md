# 构建 docker 镜像

## 基本构建指令

```bash
docker build -t example:latest .
```

::: details 构建指令参数
`-t`指定镜像名称和标签，格式为`<仓库名/镜像名>:<标签>`，如果不指定标签，默认为`latest`。

`.`表示构建上下文的路径为当前目录。

如果构建上下文的路径不在当前目录，可以使用`-f`参数指定路径，例如`docker build -t example:latest -f /path/to/context .`。
:::

## Dockerfile

Dockerfile 是构建 docker 镜像的配置文件，包含了构建镜像的指令和参数。

:::details Dockerfile 范例

```dockerfile
# 使用官方Python运行时作为父镜像
FROM python:3.8-slim

# 设置环境变量，确保Python输出直接打印到终端，不会被缓存
ENV PYTHONUNBUFFERED=1

# 设置工作目录为/app
WORKDIR /app

# 将当前目录下的requirements.txt文件复制到容器中的/app
COPY requirements.txt /app/

# 使用pip安装requirements.txt中指定的所需包
RUN pip install --no-cache-dir -r requirements.txt

# 将当前目录下的所有文件添加到容器中的/app
ADD . /app

# 创建一个挂载点，可以从本地主机或其他容器挂载卷到这里
VOLUME ["/app/data"]

# 使容器监听8080端口，这是我们应用的运行端口
EXPOSE 8080

# 设置环境变量，用于示例应用程序
ENV APP_NAME=ExampleApp

# 容器启动时执行的命令，这里用来启动一个Python应用
CMD ["python", "app.py"]

# 容器启动时执行的入口点，设置基础命令，CMD 中的参数将附加到这里
ENTRYPOINT ["python"]

# 注意：CMD 和 ENTRYPOINT 的组合使用意味着 ENTRYPOINT 设置了执行的命令，
# 而 CMD 提供了该命令的默认参数。在这个例子中，如果没有提供任何运行时参数，
# 容器将执行 "python app.py"。如果运行时提供了参数，比如 "docker run example-image myscript.py"，
# 那么 CMD 的 "app.py" 将被忽略，容器将执行 "python myscript.py"。

```

:::

### WORKDIR

`WORKDIR`指令用于设置工作目录，后续的指令都会在这个目录下执行。

```dockerfile
WORKDIR /app
```

### COPY 和 ADD

`COPY`指令用于将文件或目录从构建上下文复制到镜像中。

```dockerfile
COPY . /app
```

`ADD`指令功能类似于`COPY`，但是支持更多的功能，例如自动解压缩、远程文件下载等。

```dockerfile
ADD . /app

# 解压缩文件
ADD example.tar.gz /app

# 下载文件
ADD http://example.com/file /app
```

### VOLUME

`VOLUME`指令用于创建一个挂载点，可以在容器中挂载主机的目录。

```dockerfile
VOLUME /app
```

::: details 挂载点的作用
在容器运行时，所有写入容器中的数据都会在容器删除时丢失，通过使用挂载点，数据可以持久化到宿主机上，即使容器删除也不会丢失。

通过将相同的卷挂载到多个容器，可以实现容器之间的数据共享。
:::

### CMD 和 ENTRYPOINT

`CMD`和`ENTRYPOINT`指令用于设置容器启动时执行的命令，`CMD`可以被`docker run`命令的参数覆盖，`ENTRYPOINT`不会被覆盖。
