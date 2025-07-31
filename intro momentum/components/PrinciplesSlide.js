function PrinciplesSlide() {
  try {
    const [activeTab, setActiveTab] = React.useState(0);

    const principles = [
      {
        id: 'sacred-seat',
        title: '神圣座位原理',
        subtitle: '价值捆绑与非线性压缩',
        description: '通过指定特定触发动作创建"神圣座位"，将整个任务链的价值压缩到当下决策瞬间',
        image: 'https://app.trickle.so/storage/public/images/usr_135f737ce8000001/dcce727c-8ba2-43f2-aa0a-97c054c2423f.webp',
        features: [
          '建立工作量证明链条',
          '一损俱损的价值捆绑',
          '在τ=0处形成价值屏障',
          '分布式去中心化设计'
        ],
        icon: 'armchair',
        color: 'blue'
      },
      {
        id: 'precedent',
        title: '下必为例原理',
        subtitle: '判例法约束机制',
        description: '面对违规行为时，只能选择失败清零或永久允许，防止破窗效应的渐进腐蚀',
        image: 'https://app.trickle.so/storage/public/images/usr_135f737ce8000001/3b99e3d8-8a8a-4028-9f32-7906811bd036.png',
        features: [
          '二选一的严格判定',
          '动态形成约束边界',
          '防止自我欺骗',
          '收敛到理性决策'
        ],
        icon: 'scale',
        color: 'green'
      },
      {
        id: 'time-delay',
        title: '线性时延原理',
        subtitle: '时间平移破解拖延',
        description: '通过预约机制将价值函数在时间轴上后移，利用权重函数的平缓区域降低启动阻力',
        image: 'https://app.trickle.so/storage/public/images/usr_135f737ce8000001/2304c006-946e-4db1-be0d-35a987629af0.png',
        features: [
          '15分钟预约缓冲',
          'V(τ-Δτ)时间平移',
          '降低切换成本',
          '辅助链条保护'
        ],
        icon: 'clock',
        color: 'orange'
      }
    ];

    const currentPrinciple = principles[activeTab];

    return (
      <div 
        className="min-h-screen flex items-center justify-center px-4 py-20"
        data-name="principles-slide" 
        data-file="components/PrinciplesSlide.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">三大核心原理</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              科学破解启动困难、中途放弃和三分钟热度
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center mb-12 space-y-2 md:space-y-0 md:space-x-4">
            {principles.map((principle, index) => (
              <button
                key={principle.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === index 
                    ? 'bg-[var(--primary-color)] text-white shadow-lg' 
                    : 'card hover:shadow-md text-[var(--text-primary)]'
                }`}
              >
                <div className={`icon-${principle.icon} text-lg`}></div>
                <span className="hidden sm:inline">{principle.title}</span>
                <span className="sm:hidden">{index + 1}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="card rounded-3xl p-8 md:p-12 fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src={currentPrinciple.image}
                  alt={`${currentPrinciple.title}示意图`}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${currentPrinciple.color}-500 to-${currentPrinciple.color}-600 rounded-2xl flex items-center justify-center`}>
                    <div className={`icon-${currentPrinciple.icon} text-white text-2xl`}></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--text-primary)]">{currentPrinciple.title}</h3>
                    <p className="text-[var(--text-secondary)]">{currentPrinciple.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  {currentPrinciple.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-[var(--text-primary)]">核心特性</h4>
                  <ul className="space-y-2">
                    {currentPrinciple.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full flex-shrink-0"></div>
                        <span className="text-[var(--text-secondary)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PrinciplesSlide component error:', error);
    return null;
  }
}
