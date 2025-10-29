#!/bin/bash

echo "🚀 正在启动各国KYC要求展示平台..."

# 检查nvm是否安装
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    echo "✓ 找到nvm"
    source "$HOME/.nvm/nvm.sh"
    
    # 检查是否已安装Node.js
    if nvm current > /dev/null 2>&1; then
        echo "✓ Node.js版本: $(nvm current)"
    else
        echo "📦 安装Node.js..."
        nvm install --lts
    fi
    
    # 使用Node.js
    nvm use node
    
    # 检查npm
    if command -v npm &> /dev/null; then
        echo "✓ npm可用"
        
        # 安装依赖（如果需要）
        if [ ! -d "node_modules" ]; then
            echo "📦 安装依赖中..."
            npm install
        fi
        
        # 启动服务
        echo "🌟 启动服务..."
        npm run dev
    else
        echo "❌ npm不可用"
    fi
else
    echo "❌ 未找到nvm"
    echo "请先安装Node.js："
    echo "1. 访问 https://nodejs.org/ 下载安装"
    echo "2. 或使用: brew install node"
fi
