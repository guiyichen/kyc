#!/bin/bash

echo "🚀 KYC交易平台 - 快速设置"
echo "================================"

# 检查Node.js
if ! command -v node &> /dev/null
then
    echo "❌ 未检测到Node.js，请先安装Node.js"
    exit 1
fi

echo "✓ Node.js 已安装: $(node --version)"

# 检查MongoDB
if ! command -v mongod &> /dev/null
then
    echo "⚠️  未检测到MongoDB"
    echo "请确保MongoDB正在运行或使用MongoDB Atlas云服务"
else
    echo "✓ MongoDB 已安装: $(mongod --version | head -n 1)"
fi

# 安装依赖
echo ""
echo "📦 正在安装依赖..."
npm install

# 创建环境变量文件
if [ ! -f .env ]; then
    echo ""
    echo "📝 创建环境变量文件..."
    cp env.example .env
    echo "✓ 已创建 .env 文件"
    echo "⚠️  请编辑 .env 文件配置必要的环境变量"
fi

# 创建上传目录
echo ""
echo "📁 创建必要的目录..."
mkdir -p server/uploads
mkdir -p public
echo "✓ 目录创建完成"

echo ""
echo "✅ 设置完成！"
echo ""
echo "下一步："
echo "1. 编辑 .env 文件配置环境变量"
echo "2. 确保MongoDB正在运行"
echo "3. 运行 'npm run server' 启动后端"
echo "4. 运行 'npm run dev' 启动前端"
echo ""
echo "祝您使用愉快！"
