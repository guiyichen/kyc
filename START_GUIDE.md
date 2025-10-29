# 🚀 启动指南

## 当前系统状态

您的系统中检测到：
- ✅ Homebrew已安装
- ✅ nvm已安装
- ❌ Node.js未完整安装

## 快速启动方法

### 方法一：手动启动（推荐）

在终端执行以下命令：

```bash
# 1. 加载nvm环境
source ~/.nvm/nvm.sh

# 2. 安装或使用Node.js
nvm install --lts
nvm use node

# 3. 验证安装
node --version
npm --version

# 4. 安装依赖
npm install

# 5. 启动服务
npm run dev
```

### 方法二：使用启动脚本

```bash
./start.sh
```

### 方法三：重新安装Node.js

如果上述方法不行，请先完全安装Node.js：

```bash
# 方式1: 使用Homebrew
brew install node

# 方式2: 从官网下载
# 访问 https://nodejs.org/ 下载并安装
```

## 启动后的访问地址

服务启动后，打开浏览器访问：
- **本地地址**: http://localhost:3000

## 项目功能

✨ **当前功能**:
- 展示11个发达国家的KYC要求
- 支持按地区筛选
- 支持搜索功能
- 点击查看详细信息

## 停止服务

按 `Ctrl + C` 停止开发服务器

## 故障排除

### 问题1: npm命令找不到

**解决方案**:
```bash
source ~/.nvm/nvm.sh
npm install
```

### 问题2: 端口被占用

**解决方案**: 编辑 `package.json`，将端口改为其他端口（如3001）

### 问题3: 依赖安装失败

**解决方案**:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 下一步

1. 确保Node.js已安装
2. 运行 `npm install`
3. 运行 `npm run dev`
4. 打开浏览器访问 http://localhost:3000

祝您使用愉快！🎉
