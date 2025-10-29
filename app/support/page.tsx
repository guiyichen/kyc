export default function SupportPage() {
  const faqs = [
    {
      category: '常见问题',
      items: [
        {
          q: '如何完成KYC验证？',
          a: '登录您的账户后，访问KYC验证页面，按照步骤填写个人信息、上传身份证明文件，提交审核即可。',
        },
        {
          q: 'KYC审核需要多长时间？',
          a: '通常审核时间为1-3个工作日。如果审核通过，您将收到邮件通知。',
        },
        {
          q: '支持哪些国家？',
          a: '我们支持欧美日韩等150多个国家和地区的用户。',
        },
        {
          q: '如何充值？',
          a: '完成KYC验证后，您可以进行充值。我们支持多种支付方式。',
        },
        {
          q: '交易手续费是多少？',
          a: '我们提供极具竞争力的手续费率。具体费率请查看费率表。',
        },
        {
          q: '如何提现？',
          a: '在您的账户中，进入"我的钱包"页面，点击"提现"并按照提示操作。',
        },
      ],
    },
    {
      category: '账户相关',
      items: [
        {
          q: '忘记密码怎么办？',
          a: '在登录页面点击"忘记密码"，输入您的邮箱地址，我们会发送重置链接到您的邮箱。',
        },
        {
          q: '如何修改个人信息？',
          a: '登录后进入"账户设置"页面，您可以修改基本信息。如需修改KYC信息，请联系客服。',
        },
        {
          q: '账户被冻结了怎么办？',
          a: '如果您的账户被冻结，请立即联系客服寻求帮助。',
        },
      ],
    },
    {
      category: '安全相关',
      items: [
        {
          q: '平台安全性如何？',
          a: '我们采用银行级安全标准，包括256位SSL加密、冷钱包存储、多重签名等技术保障您的资产安全。',
        },
        {
          q: '如何启用双因素认证（2FA）？',
          a: '在账户设置页面，您可以启用Google Authenticator或其他2FA应用来增强账户安全。',
        },
        {
          q: '如何保护我的账户？',
          a: '建议使用强密码、启用2FA、不在公共网络登录、定期检查账户活动。',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">帮助中心</h1>
          <p className="text-xl text-gray-600">我们随时为您提供支持</p>
        </div>

        {/* 搜索框 */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索帮助内容..."
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 联系方式 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">邮件支持</h3>
            <p className="text-gray-600 mb-2">support@kyc-platform.com</p>
            <p className="text-sm text-gray-500">24小时内回复</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">在线客服</h3>
            <p className="text-gray-600 mb-2">7×24小时服务</p>
            <button className="text-primary-600 hover:text-primary-700 font-semibold">
              立即联系
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">电话支持</h3>
            <p className="text-gray-600 mb-2">+1-800-KYC-HELP</p>
            <p className="text-sm text-gray-500">工作日 9:00-18:00</p>
          </div>
        </div>

        {/* FAQ */}
        {faqs.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{section.category}</h2>
            <div className="space-y-4">
              {section.items.map((faq, fidx) => (
                <div key={fidx} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
