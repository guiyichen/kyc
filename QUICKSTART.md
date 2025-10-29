# 快速开始指南

## 1️⃣ 安装依赖

```bash
npm install
```

或者运行快速设置脚本：

```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
```

## 2️⃣ 配置环境变量

复制环境变量模板并配置：

```bash
cp env.example .env
```

编辑 `.env` 文件，配置以下变量：

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kyc-platform
JWT_SECRET=your-secret-key-change-this
```

## 3️⃣ 启动MongoDB

### 方式一：本地MongoDB

```bash
# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongodb

# Windows
net start MongoDB
```

### 方式二：MongoDB Atlas（云端）

1. 访问 https://www.mongodb.com/cloud/atlas
2. 创建免费集群
3. 获取连接字符串
4. 更新 `.env` 中的 `MONGODB_URI`

## 4️⃣ 启动应用

### 启动后端服务器

```bash
npm run server
```

后端将在 http://localhost:5000 运行

### 启动前端开发服务器

在新的终端窗口中：

```bash
npm run dev
```

前端将在 http://localhost:3000 运行

## 5️⃣ 访问应用

在浏览器中打开 http://localhost:3000

## 项目结构

```
kyc-platform/
├── app/                    # Next.js页面
│   ├── login/             # 登录页面
│   ├── register/          # 注册页面
│   ├── kyc/               # KYC验证流程
│   ├── dashboard/         # 用户仪表板
│   ├── trading/           # 交易页面
│   ├── support/           # 帮助中心
│   ├── mobile/            # 移动应用
│   └── api/               # API文档
├── components/             # React组件
│   ├── Header.tsx         # 导航头部
│   ├── Footer.tsx         # 页脚
│   ├── Hero.tsx           # 首页英雄区
│   ├── Features.tsx       # 功能展示
│   └── Statistics.tsx    # 统计数据
├── server/                 # 后端服务器
│   ├── index.js          # 服务器入口
│   ├── models/           # 数据模型
│   ├── routes/           # API路由
│   ├── middleware/       # 中间件
│   └── uploads/          # 文件上传目录
└── lib/                   # 工具库
```

## 功能特性

✅ **用户认证**
- 用户注册和登录
- JWT令牌认证
- 密码加密存储

✅ **KYC验证**
- 分步式表单
- 文件上传（身份证明、地址证明）
- 多国家支持

✅ **交易功能**
- 交易对选择
- 买卖订单
- 市价单和限价单

✅ **用户仪表板**
- 账户概览
- KYC状态显示
- 余额和持仓

✅ **响应式设计**
- 移动端适配
- Tailwind CSS样式

## API端点

### 认证
- `POST /api/auth/register` - 注册
- `POST /api/auth/login` - 登录

### KYC
- `POST /api/kyc/submit` - 提交KYC申请
- `GET /api/kyc/status` - 获取KYC状态

### 用户
- `GET /api/user/me` - 获取当前用户
- `PUT /api/user/me` - 更新用户信息

## 开发提示

### 添加新页面

```bash
# 创建新页面
touch app/your-page/page.tsx
```

### 添加新API端点

```bash
# 在 server/routes/ 中创建新的路由文件
touch server/routes/your-route.js
```

### 样式修改

编辑 `tailwind.config.js` 自定义主题

## 故障排除

### MongoDB连接失败

检查MongoDB是否运行：
```bash
# macOS
brew services list

# Linux
sudo systemctl status mongodb
```

### 端口被占用

更改 `.env` 中的端口：
```env
PORT=5001
```

### 依赖安装失败

清理并重新安装：
```bash
rm -rf node_modules package-lock.json
npm install
```

## 生产部署

### Vercel（前端）

```bash
npm install -g vercel
vercel
```

### 后端部署

推荐使用：
- Heroku
- Railway
- DigitalOcean App Platform

## 获取帮助

- 📧 邮件：support@kyc-platform.com
- 💬 客服：在线客服
- 📖 文档：查看API文档页面

祝您使用愉快！ 🚀
