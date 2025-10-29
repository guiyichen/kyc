export default function Statistics() {
  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-primary-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">平台数据</h2>
          <p className="text-xl text-white/90">值得信赖的数字资产交易平台</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">$2.5B+</div>
            <div className="text-white/80">平台交易量</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">50万+</div>
            <div className="text-white/80">活跃用户</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">150+</div>
            <div className="text-white/80">支持国家</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">99.9%</div>
            <div className="text-white/80">正常运行时间</div>
          </div>
        </div>
      </div>
    </section>
  )
}
