'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function KYCPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // 个人信息
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    
    // 地址信息
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    
    // 身份信息
    documentType: '',
    documentNumber: '',
    documentIssuedDate: '',
    documentExpiryDate: '',
    
    // 财务信息
    employmentStatus: '',
    incomeSource: '',
    estimatedAnnualIncome: '',
    
    // 文件上传
    idDocument: null as File | null,
    proofOfAddress: null as File | null,
  })
  
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, [field]: file })
    }
  }

  const handleSubmit = async () => {
    setError('')
    setLoading(true)

    try {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/login')
        return
      }

      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value)
        } else if (value !== null && value !== '') {
          formDataToSend.append(key, value as string)
        }
      })

      await axios.post('http://localhost:5000/api/kyc/submit', formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })

      setStep(6) // 成功页面
    } catch (err: any) {
      setError(err.response?.data?.message || '提交失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">个人信息</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">名 *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">姓 *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">出生日期 *</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">性别 *</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                >
                  <option value="">请选择</option>
                  <option value="male">男</option>
                  <option value="female">女</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">国籍 *</label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 pt-6">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition"
              >
                下一步
              </button>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">地址信息</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">地址行1 *</label>
              <input
                type="text"
                value={formData.address1}
                onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">地址行2</label>
              <input
                type="text"
                value={formData.address2}
                onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">城市 *</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">邮编 *</label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">州/省</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">国家 *</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                >
                  <option value="">请选择</option>
                  <option value="US">美国</option>
                  <option value="UK">英国</option>
                  <option value="CA">加拿大</option>
                  <option value="AU">澳大利亚</option>
                  <option value="JP">日本</option>
                  <option value="KR">韩国</option>
                  <option value="DE">德国</option>
                  <option value="FR">法国</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between space-x-4 pt-6">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition"
              >
                上一步
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition"
              >
                下一步
              </button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">身份证明</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">证件类型 *</label>
              <select
                value={formData.documentType}
                onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              >
                <option value="">请选择</option>
                <option value="passport">护照</option>
                <option value="driving_license">驾驶证</option>
                <option value="national_id">国民身份证</option>
                <option value="other">其他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">证件号码 *</label>
              <input
                type="text"
                value={formData.documentNumber}
                onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">签发日期 *</label>
                <input
                  type="date"
                  value={formData.documentIssuedDate}
                  onChange={(e) => setFormData({ ...formData, documentIssuedDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">有效期 *</label>
                <input
                  type="date"
                  value={formData.documentExpiryDate}
                  onChange={(e) => setFormData({ ...formData, documentExpiryDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between space-x-4 pt-6">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition"
              >
                上一步
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition"
              >
                下一步
              </button>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">财务信息</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">就业状况 *</label>
              <select
                value={formData.employmentStatus}
                onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              >
                <option value="">请选择</option>
                <option value="employed">受雇</option>
                <option value="self_employed">自雇</option>
                <option value="unemployed">失业</option>
                <option value="student">学生</option>
                <option value="retired">退休</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">收入来源 *</label>
              <select
                value={formData.incomeSource}
                onChange={(e) => setFormData({ ...formData, incomeSource: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              >
                <option value="">请选择</option>
                <option value="salary">工资</option>
                <option value="business">业务收入</option>
                <option value="investment">投资收益</option>
                <option value="other">其他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">年收入估算 *</label>
              <select
                value={formData.estimatedAnnualIncome}
                onChange={(e) => setFormData({ ...formData, estimatedAnnualIncome: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              >
                <option value="">请选择</option>
                <option value="0-25000">$0 - $25,000</option>
                <option value="25000-50000">$25,000 - $50,000</option>
                <option value="50000-100000">$50,000 - $100,000</option>
                <option value="100000-250000">$100,000 - $250,000</option>
                <option value="250000+">$250,000+</option>
              </select>
            </div>
            <div className="flex justify-between space-x-4 pt-6">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition"
              >
                上一步
              </button>
              <button
                onClick={() => setStep(5)}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition"
              >
                下一步
              </button>
            </div>
          </div>
        )
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">上传文件</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                请确保文件清晰、完整且为有效的图像格式（JPG、PNG、PDF）。文件大小不应超过5MB。
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                身份证明文件 * (护照、驾照或国民身份证)
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, 'idDocument')}
                accept="image/*,.pdf"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                地址证明文件 * (银行对账单、水电账单等)
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, 'proofOfAddress')}
                accept="image/*,.pdf"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div className="flex justify-between space-x-4 pt-6">
              <button
                onClick={() => setStep(4)}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition"
              >
                上一步
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition disabled:opacity-50"
              >
                {loading ? '提交中...' : '提交申请'}
              </button>
            </div>
          </div>
        )
      case 6:
        return (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">提交成功！</h3>
            <p className="text-lg text-gray-600 mb-8">
              您的KYC申请已提交，我们将在1-3个工作日内完成审核。
            </p>
            <button
              onClick={() => router.push('/dashboard')}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition"
            >
              查看我的账户
            </button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* 进度指示器 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex-1 ${step >= 1 ? 'bg-primary-600' : 'bg-gray-200'} h-2`}></div>
              <div className={`flex-1 ml-2 ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200'} h-2`}></div>
              <div className={`flex-1 ml-2 ${step >= 3 ? 'bg-primary-600' : 'bg-gray-200'} h-2`}></div>
              <div className={`flex-1 ml-2 ${step >= 4 ? 'bg-primary-600' : 'bg-gray-200'} h-2`}></div>
              <div className={`flex-1 ml-2 ${step >= 5 ? 'bg-primary-600' : 'bg-gray-200'} h-2`}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>个人信息</span>
              <span>地址信息</span>
              <span>身份证明</span>
              <span>财务信息</span>
              <span>上传文件</span>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {renderStep()}
        </div>
      </div>
    </div>
  )
}
