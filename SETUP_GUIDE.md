# 环境配置和启动指南

## 📋 前置要求

在启动KYC交易平台之前，您需要安装以下软件：

### 1. Node.js 和 npm

**安装方式：**

#### macOS
```bash
# 使用Homebrew（推荐）
brew install node

# 或下载安装包
# 访问 https://nodejs.org/
```

#### Linux
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
```

#### Windows
访问 https://nodejs.org/ 下载并安装LTS版本

**验证安装：**
```bash
node --version  # 应显示 v18.x.x 或更高
npm --version   # 应显示 9.x.x 或更高
```

### 2. MongoDB

#### 方式一：本地MongoDB

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
# 添加MongoDB仓库
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

**Windows:**
下载安装包：https://www.mongodb.com/try/download/community

#### 方式二：MongoDB Atlas（云端，推荐用于开发）

1. 访问 https://www.mongodb.com/cloud/atlas
2. 创建免费账户
3. 创建免费集群
4. 获取连接字符串
5. 更新 `.env` 文件中的 `MONGODB_URI`

## 🚀 启动服务

### 步骤1：安装依赖

```bash
npm install
```

### 步骤2：配置环境变量

```bash
# 如果还没有.env文件
cp env.example .env

# 编辑.env文件
nano .env  # 或使用您喜欢的编辑器
```

**必需的环境变量：**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kyc-platform
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

**如果使用MongoDB Atlas：**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kyc-platform
```

### 步骤3：创建必要的目录

```bash
mkdir -p server/uploads
mkdir -p server/public
```

### 步骤4：启动服务

#### 方式一：分步启动（推荐）

**终端1 - 启动后端服务器：**
```bash
npm run server
```

您应该看到：
```
Connected to MongoDB
Server is running on port 5000
```

**终端2 - 启动前端开发服务器：**
```bash
npm run dev
```

您应该看到：
```
- ready started server on 0.0.0.0:3000
- Local: http://localhost:3000
```

#### 方式二：使用进程管理器（可选）

安装PM2：
```bash
npm install -g pm2
```

启动：
```bash
pm2 start server/index.js --name kyc-backend
npm run dev
```

## 🌐 访问应用

- **前端地址**: http://localhost:3000
- **后端API**: http://localhost:5000
- **健康检查**: http://localhost:5000/health

## 📱 使用应用

1. 访问 http://localhost:3000
2. 点击"注册"创建新账户
3. 登录后访问"KYC验证"完成身份认证
4. 在"交易市场"进行交易

## 🔧 故障排除

### MongoDB连接失败

**检查MongoDB是否运行：**
```bash
# macOS
brew services list

# Linux
sudo systemctl status mongod
```

**手动启动MongoDB：**
```bash
# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### 端口被占用

**更改端口：**
编辑 `.env` 文件，更改 `PORT=5000` 为其他端口，例如 `PORT=5001`

**查找占用端口的进程：**
```bash
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows
```

### 依赖安装失败

**清理并重新安装：**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### 文件上传权限问题

```bash
chmod 777 server/uploads
```

## 📝 开发提示

### 查看日志

```bash
# 查看后端日志
npm run server

# 查看MongoDB日志
tail -f /usr/local/var/log/mongodb/mongo.log  # macOS
tail -f /var/log/mongodb/mongod.log  # Linux
```

### 重置数据库

**清空所有数据：**
```bash
# 连接MongoDB shell
mongosh
use kyc-platform
db.users.deleteMany({})
db.kycapplications.deleteMany({})
```

### 热重载

前端和后端都支持热重载：
- 修改代码后会自动重新加载
- 无需手动重启服务器

## 🎉 完成！

如果一切正常，您现在应该能够：

- ✅ 访问应用界面
- ✅ 注册新账户
- ✅ 登录系统
- ✅ 完成KYC验证
- ✅ 查看交易市场

享受您的新KYC交易平台！

## 📞 获取帮助

- 查看 `README.md` 了解详细信息
- 查看 `QUICKSTART.md` 快速开始
- 查看 `app/support/page.tsx` 帮助中心

祝您使用愉快！🚀
