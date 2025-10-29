'use client'

import { useState } from 'react'

export default function TradingPage() {
  const [selectedPair, setSelectedPair] = useState('BTC/USD')
  const [orderType, setOrderType] = useState('market')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')

  const tradingPairs = [
    { symbol: 'BTC/USD', name: '比特币/美元', price: '45,234.56', change: '+2.34%' },
    { symbol: 'ETH/USD', name: '以太坊/美元', price: '2,845.23', change: '+1.89%' },
    { symbol: 'BNB/USD', name: '币安币/美元', price: '312.45', change: '-0.45%' },
    { symbol: 'SOL/USD', name: 'Solana/美元', price: '98.76', change: '+3.21%' },
    { symbol: 'ADA/USD', name: '卡尔达诺/美元', price: '0.52', change: '+0.87%' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">交易市场</h1>
          <p className="text-gray-600">安全快速的数字资产交易</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 市场列表 */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">交易对</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {tradingPairs.map((pair) => (
                <button
                  key={pair.symbol}
                  onClick={() => setSelectedPair(pair.symbol)}
                  className={`w-full px-4 py-4 hover:bg-gray-50 transition ${
                    selectedPair === pair.symbol ? 'bg-primary-50 border-l-4 border-primary-600' : ''
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">{pair.name}</div>
                      <div className="text-sm text-gray-500">{pair.symbol}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-800">${pair.price}</div>
                      <div className={`text-sm ${pair.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {pair.change}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 交易面板 */}
          <div className="lg:col-span-2 space-y-6">
            {/* K线图区域 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">{selectedPair} 价格图表</h2>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">图表区域（集成TradingView或类似服务）</p>
              </div>
            </div>

            {/* 订单表单 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 买入表单 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-6 border-2 border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                  <span className="mr-2">📈</span>
                  买入
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      订单类型
                    </label>
                    <select
                      value={orderType}
                      onChange={(e) => setOrderType(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    >
                      <option value="market">市价单</option>
                      <option value="limit">限价单</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      数量
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    />
                  </div>
                  {orderType === 'limit' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        价格
                      </label>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="0.00"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      />
                    </div>
                  )}
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>估计总价</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>手续费</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
                    买入 {selectedPair.split('/')[0]}
                  </button>
                </div>
              </div>

              {/* 卖出表单 */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-lg p-6 border-2 border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                  <span className="mr-2">📉</span>
                  卖出
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      订单类型
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none">
                      <option>市价单</option>
                      <option>限价单</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      数量
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>估计总价</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>手续费</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition">
                    卖出 {selectedPair.split('/')[0]}
                  </button>
                </div>
              </div>
            </div>

            {/* 当前持仓 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">当前持仓</h3>
              <div className="text-center py-8 text-gray-500">
                <p>暂无持仓记录</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
