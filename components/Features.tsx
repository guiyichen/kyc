export default function Features() {
  const features = [
    {
      icon: '🔐',
      title: '严格的身份验证',
      description: '符合国际KYC标准，支持护照、驾照等多种证件验证',
    },
    {
      icon: '🌍',
      title: '全球合规标准',
      description: '支持欧美日韩等发达国家和地区的监管要求',
    },
    {
      icon: '⚡',
      title: '快速交易执行',
      description: '低延迟、高可靠性，毫秒级交易执行速度',
    },
    {
      icon: '🛡️',
      title: '银行级安全',
      description: '256位SSL加密，冷钱包存储，多重签名保护',
    },
    {
      icon: '📊',
      title: '实时市场数据',
      description: '提供完整的市场深度和实时行情数据',
    },
    {
      icon: '💼',
      title: '专业客服支持',
      description: '7×24小时多语言客户服务支持',
    },
  ]

  return (
    <section className="container mx-auto px-4 py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">平台特色</h2>
        <p className="text-xl text-gray-600">安全、便捷、专业的交易体验</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-100"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
