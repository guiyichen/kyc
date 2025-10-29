import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          安全、合规、专业的KYC交易平台
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          专为欧美日韩等发达国家和地区设计，提供完整的身份验证和交易服务
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition shadow-lg"
          >
            立即注册
          </Link>
          <Link
            href="/kyc"
            className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 rounded-lg font-semibold transition"
          >
            了解KYC流程
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary-600">99.9%</div>
            <div className="text-gray-600 mt-2">系统可用性</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary-600">24/7</div>
            <div className="text-gray-600 mt-2">专业支持</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary-600">150+</div>
            <div className="text-gray-600 mt-2">支持的国家</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary-600">50万+</div>
            <div className="text-gray-600 mt-2">注册用户</div>
          </div>
        </div>
      </div>
    </section>
  )
}
