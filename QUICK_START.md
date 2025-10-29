# 🚀 快速启动指南

## 前提条件

只需要安装 **Node.js** (v18+)

### 安装Node.js

**macOS:**
```bash
brew install node
```

**或访问官网下载：**
https://nodejs.org/

## 启动步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 访问应用

打开浏览器访问：http://localhost:3000

## ✨ 就是这样！

现在您可以：
- 浏览11个发达国家的KYC要求
- 按地区筛选（北美、欧洲、亚洲、大洋洲）
- 搜索国家名称
- 点击国家卡片查看详细信息

## 🎯 主要功能

- **国家展示**: 查看所有支持的国家
- **地区筛选**: 按区域筛选国家
- **快速搜索**: 搜索国家名称
- **详细信息**: 点击查看每个国家的完整KYC要求

## 📦 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## 🔧 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 检查代码质量
npm run lint
```

## 📝 项目结构

```
kyc/
├── app/
│   ├── page.tsx              # 首页
│   ├── support/               # 帮助中心
│   └── layout.tsx            # 根布局
├── components/
│   ├── Header.tsx             # 导航栏
│   ├── Footer.tsx             # 页脚
│   └── CountriesShowcase.tsx # 国家展示组件
├── public/                    # 静态资源
└── README.md                  # 文档
```

## 🆘 需要帮助？

查看完整文档：README_SIMPLE.md

---

祝您使用愉快！🎉
