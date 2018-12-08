# 本地开发

## 服务端

### 克隆代码

```bash
git clone git@github.com:codetrial/got-auth-service.git
```

### 安装数据库

以下假定你已经在本地安装了 Docker，若没有可以使用其它方式安装数据库。

```bash
# 拉取镜像
docker pull mysql:5.7.24

# 启动容器
docker run --name got-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=your-strong-secret-pw -d mysql:5.7
```

### 启动应用

```bash
# 安装依赖
yarn

# 开发模式
yarn dev
```
