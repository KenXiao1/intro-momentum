function DemoSlide() {
  try {
    const steps = [
      {
        number: '01',
        title: '创建链条',
        description: '设定神圣座位触发动作（如"戴上降噪耳机"）和任务时长',
        icon: 'plus-circle'
      },
      {
        number: '02',
        title: '配置预约',
        description: '设置预约信号（如"打响指"）和15分钟预约时长',
        icon: 'settings'
      },
      {
        number: '03',
        title: '开始专注',
        description: '触发预约或直接开始，进入全屏专注模式',
        icon: 'play-circle'
      },
      {
        number: '04',
        title: '处理中断',
        description: '遇到违规时选择失败清零或加入例外规则',
        icon: 'shield-alert'
      }
    ];

    const demoImages = [
      {
        src: 'https://app.trickle.so/storage/public/images/usr_135f737ce8000001/80044a80-1eb6-4036-a00d-aec8c74de20d.png',
        title: '编辑链条设置'
      },
      {
        src: 'https://app.trickle.so/storage/public/images/usr_135f737ce8000001/7619ce15-72f1-4b41-a7c1-deed8f393b0b.png',
        title: '预约功能界面'
      },
      {
        src: 'https://app.trickle.so/storage/public/images/usr_135f737ce8000001/2612c855-0e9c-4ab1-bbe1-7bdcdafae579.png',
        title: '规则判定系统'
      }
    ];

    return (
      <div 
        className="min-h-screen flex items-center justify-center px-4 py-20"
        data-name="demo-slide" 
        data-file="components/DemoSlide.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">使用演示</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              四个简单步骤，开启科学的专注训练
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-dark)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className={`icon-${step.icon} text-white text-2xl`}></div>
                  </div>
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">{step.number}</div>
                  <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">{step.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Images */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-center text-[var(--text-primary)]">功能演示</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {demoImages.map((image, index) => (
                <div key={index} className="card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-center font-semibold text-[var(--text-primary)]">{image.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16 card rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-[var(--text-primary)]">核心优势</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="icon-brain text-green-600 text-2xl"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">科学原理</h4>
                <p className="text-[var(--text-secondary)]">基于数学模型和心理学原理，而非经验主义</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="icon-zap text-blue-600 text-2xl"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">即时生效</h4>
                <p className="text-[var(--text-secondary)]">无需长期适应，从第一次使用就能感受到约束力</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="icon-shield text-purple-600 text-2xl"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">持久稳定</h4>
                <p className="text-[var(--text-secondary)]">分布式设计避免磨损，长期保持有效性</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DemoSlide component error:', error);
    return null;
  }
}