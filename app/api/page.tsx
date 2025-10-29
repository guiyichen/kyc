export default function APIPage() {
  const endpoints = [
    {
      method: 'POST',
      path: '/api/auth/register',
      description: '用户注册',
      body: {
        email: 'string',
        password: 'string',
        firstName: 'string',
        lastName: 'string',
        country: 'string',
      },
    },
    {
      method: 'POST',
      path: '/api/auth/login',
      description: '用户登录',
      body: {
        email: 'string',
        password: 'string',
      },
    },
    {
      method: 'GET',
      path: '/api/kyc/status',
      description: '获取KYC状态',
      auth: '需要',
    },
    {
      method: 'POST',
      path: '/api/kyc/submit',
      description: '提交KYC申请',
      auth: '需要',
      body: {
        firstName: 'string',
        lastName: 'string',
        dateOfBirth: 'date',
        documentType: 'string',
        // ... 其他字段
        idDocument: 'file',
        proofOfAddress: 'file',
      },
    },
    {
      method: 'GET',
      path: '/api/user/me',
      description: '获取当前用户信息',
      auth: '需要',
    },
    {
      method: 'PUT',
      path: '/api/user/me',
      description: '更新用户信息',
      auth: '需要',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">API 文档</h1>
          <p className="text-xl text-gray-600">使用我们的API构建您的应用</p>
        </div>

        {/* 快速开始 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">快速开始</h2>
          <p className="text-gray-600 mb-4">所有API请求都需要包含必要的请求头：</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`Content-Type: application/json
Authorization: Bearer YOUR_TOKEN`}
          </pre>
        </div>

        {/* API端点列表 */}
        <div className="space-y-6">
          {endpoints.map((endpoint, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                      endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                      endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-gray-800">{endpoint.path}</code>
                  </div>
                  <p className="text-gray-600">{endpoint.description}</p>
                  {endpoint.auth && (
                    <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                      需要认证
                    </span>
                  )}
                </div>
              </div>

              {endpoint.body && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">请求体示例：</h4>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {JSON.stringify(endpoint.body, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 联系支持 */}
        <div className="mt-8 bg-primary-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">需要帮助？</h3>
          <p className="mb-6">我们的开发团队随时为您提供API支持</p>
          <div className="flex justify-center space-x-4">
            <a
              href="/support"
              className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              联系支持
            </a>
            <a
              href="https://github.com/your-repo"
              className="px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition"
            >
              GitHub仓库
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
