# 各国KYC要求展示平台

一个专注于展示欧美日韩等发达国家和地区KYC验证要求的信息平台。

## 功能特性

- 🌍 展示11个主要发达国家和地区的KYC要求
- 📋 详细的文件清单和验证要求
- 🔍 快速搜索和地区筛选
- 📊 KYC级别分类（Level 1/2/3）
- 💰 费用和处理时间信息
- 🎯 清晰直观的展示界面

## 技术栈

### 前端
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Hook Form
- Axios

### 后端
- Node.js
- Express
- MongoDB
- JWT认证
- Multer文件上传
- Bcrypt密码加密

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env` 并配置必要的环境变量：

```bash
cp .env.example .env
```

### 3. 启动MongoDB

确保MongoDB服务正在运行：

```bash
# macOS (使用Homebrew)
brew services start mongodb-community

# 或其他系统
mongod
```

### 4. 启动开发服务器

```bash
# 启动后端服务器
npm run server

# 启动前端开发服务器
npm run dev
```

现在访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

```
kyc-platform/
├── app/                    # Next.js App Router页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── login/             # 登录页面
│   ├── register/          # 注册页面
│   ├── kyc/               # KYC验证页面
│   ├── dashboard/         # 用户仪表板
│   └── globals.css        # 全局样式
├── components/             # React组件
│   ├── Header.tsx         # 头部导航
│   ├── Footer.tsx         # 页脚
│   ├── Hero.tsx           # 首页英雄区
│   ├── Features.tsx       # 功能展示
│   └── Statistics.tsx     # 统计数据
├── server/                 # 后端服务器
│   ├── index.js           # 服务器入口
│   ├── models/            # 数据库模型
│   ├── routes/            # API路由
│   ├── middleware/        # 中间件
│   └── uploads/           # 文件上传目录
└── public/                # 静态资源
```

## API端点

### 认证
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录

### KYC
- `POST /api/kyc/submit` - 提交KYC申请
- `GET /api/kyc/status` - 获取KYC状态

### 用户
- `GET /api/user/me` - 获取当前用户信息
- `PUT /api/user/me` - 更新用户信息

## 展示的国家和地区

- 🇺🇸 美国
- 🇬🇧 英国
- 🇨🇦 加拿大
- 🇦🇺 澳大利亚
- 🇯🇵 日本
- 🇰🇷 韩国
- 🇩🇪 德国
- 🇫🇷 法国
- 🇮🇹 意大利
- 🇪🇸 西班牙
- 🇳🇱 荷兰
- 🇨🇭 瑞士

每个国家的信息包括：
- 所需文件清单
- 验证要求
- 处理时间
- 费用信息
- KYC级别

## 开发说明

### 添加新功能

1. 前端页面放在 `app/` 目录
2. 组件放在 `components/` 目录
3. 后端路由放在 `server/routes/` 目录
4. 数据模型放在 `server/models/` 目录

### 部署

#### 使用 Vercel 部署前端

```bash
npm install -g vercel
vercel
```

#### 使用 MongoDB Atlas

1. 在 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 创建账户
2. 创建集群并获取连接字符串
3. 更新 `.env` 中的 `MONGODB_URI`

#### 部署后端

可以使用以下平台：
- Heroku
- DigitalOcean
- AWS
- Google Cloud

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

如有问题，请访问帮助中心或联系客服。
