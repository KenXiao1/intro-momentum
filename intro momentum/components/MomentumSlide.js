function MomentumSlide() {
  try {
    const features = [
      {
        icon: 'target',
        title: '链条管理',
        description: '创建和管理多个专注任务链，每个链条独立运行'
      },
      {
        icon: 'clock-4',
        title: '预约系统',
        description: '15分钟预约机制，轻松克服启动困难'
      },
      {
        icon: 'shield-check',
        title: '规则判定',
        description: '下必为例原理，智能处理违规情况'
      },
      {
        icon: 'trending-up',
        title: '进度追踪',
        description: '可视化展示链条长度和成功记录'
      }
    ];

    const screenshots = [
      {
        src: 'https://app.trickle.so/storage/public/images/usr_135f737ce8000001/9f82d1cb-e391-483e-91fe-f711f414e8d0.png',
        title: '主界面',
        description: '清晰的任务链概览和操作界面'
      },
      {
        src: 'https://app.trickle.so/storage/public/images/usr_135f737ce8000001/b864d147-1027-4fad-923d-2229b51d5242.png',
        title: '创建新链条',
        description: '简单配置神圣座位和预约设置'
      },
      {
        src: 'https://app.trickle.so/storage/public/images/usr_135f737ce8000001/2304c006-946e-4db1-be0d-35a987629af0.png',
        title: '专注模式',
        description: '全屏计时器，专注完成任务'
      }
    ];

    return (
      <div 
        className="min-h-screen flex items-center justify-center px-4 py-20"
        data-name="momentum-slide" 
        data-file="components/MomentumSlide.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Momentum 项目</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              将CTDP理论转化为实用工具，让科学的自制力触手可及
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-dark)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className={`icon-${feature.icon} text-white text-xl`}></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Screenshots */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-center text-[var(--text-primary)]">应用截图</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img 
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">{screenshot.title}</h4>
                    <p className="text-[var(--text-secondary)] text-sm">{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="card rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">立即开始你的专注之旅</h3>
              <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                基于科学原理的自制力训练，帮助你建立持久的专注习惯
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://momentumctdp.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>在线使用</span>
                  <div className="icon-external-link text-lg"></div>
                </a>
                <a 
                  href="https://github.com/KenXiao1/momentum" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-2 hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-300"
                >
                  <div className="icon-github text-lg"></div>
                  <span>查看源码</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('MomentumSlide component error:', error);
    return null;
  }
}