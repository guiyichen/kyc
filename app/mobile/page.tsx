export default function MobilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">移动应用</h1>
          <p className="text-xl text-gray-600">随时随地管理您的交易</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">iOS 应用</h3>
              <p className="text-gray-600 mb-6">
                在App Store下载我们的iOS应用，享受流畅的交易体验。
              </p>
              <a
                href="#"
                className="inline-block"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=2012-09-21"
                  alt="下载App Store"
                  className="h-14"
                />
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Android 应用</h3>
              <p className="text-gray-600 mb-6">
                在Google Play下载我们的Android应用，随时随地进行交易。
              </p>
              <a
                href="#"
                className="inline-block"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="从Google Play获取"
                  className="h-14"
                />
              </a>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">应用特性</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-700">实时价格推送和行情分析</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-700">快速买卖和便捷交易</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-700">安全的指纹和面部识别</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-700">账户资产实时查看</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-700">24/7客服支持</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-700">多语言界面支持</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">安全特性</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">🔐</span>
                  <span className="text-gray-700">银行级加密保护</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">🔐</span>
                  <span className="text-gray-700">两步验证支持</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">🔐</span>
                  <span className="text-gray-700">设备绑定和PIN码</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 截图展示 */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">应用截图</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg aspect-[9/16] flex items-center justify-center">
                <p className="text-gray-400">截图 {i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
