'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [kycStatus, setKycStatus] = useState('pending')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    // 模拟获取用户数据
    setTimeout(() => {
      setUser({
        email: 'user@example.com',
        firstName: 'John',
        lastName: 'Doe',
        country: 'US',
      })
      setKycStatus('approved')
      setLoading(false)
    }, 1000)
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">加载中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* 欢迎标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            欢迎回来, {user?.firstName}!
          </h1>
          <p className="text-gray-600">管理您的账户和交易</p>
        </div>

        {/* KYC状态卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">KYC状态</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                kycStatus === 'approved' 
                  ? 'bg-green-100 text-green-700' 
                  : kycStatus === 'pending'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {kycStatus === 'approved' ? '已认证' : kycStatus === 'pending' ? '审核中' : '未通过'}
              </span>
            </div>
            {kycStatus !== 'approved' && (
              <Link
                href="/kyc"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                完成KYC验证 →
              </Link>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">账户余额</h3>
            <p className="text-3xl font-bold text-primary-600">$0.00</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">总交易量</h3>
            <p className="text-3xl font-bold text-gray-600">0 BTC</p>
          </div>
        </div>

        {/* 功能菜单 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link
            href="/kyc"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">KYC验证</h3>
            <p className="text-sm text-gray-600">完成身份认证</p>
          </Link>

          <Link
            href="/trading"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">💹</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">交易市场</h3>
            <p className="text-sm text-gray-600">开始交易</p>
          </Link>

          <Link
            href="/wallet"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">👛</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">我的钱包</h3>
            <p className="text-sm text-gray-600">管理资产</p>
          </Link>

          <Link
            href="/settings"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">账户设置</h3>
            <p className="text-sm text-gray-600">个人设置</p>
          </Link>
        </div>

        {/* 最近活动 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">最近活动</h3>
          <div className="text-center py-8 text-gray-500">
            <p>暂无交易记录</p>
            <Link
              href="/trading"
              className="text-primary-600 hover:text-primary-700 mt-2 inline-block"
            >
              开始交易 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
