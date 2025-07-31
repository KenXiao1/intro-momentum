function HeroSlide() {
  try {
    return (
      <div 
        className="min-h-screen flex items-center justify-center px-4 pt-16"
        data-name="hero-slide" 
        data-file="components/HeroSlide.js"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="fade-in">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">CTDP</span>
              <br />
              <span className="text-[var(--text-primary)]">链式时延协议</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed">
              基于数学模型的自制力解决方案
              <br />
              通过科学原理破解拖延症与专注力难题
            </p>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="icon-brain text-white text-xl"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">神圣座位原理</h3>
                <p className="text-[var(--text-secondary)] text-sm">通过价值捆绑建立强大约束力</p>
              </div>
              
              <div className="card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="icon-scale text-white text-xl"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">下必为例原理</h3>
                <p className="text-[var(--text-secondary)] text-sm">判例法机制防止破窗效应</p>
              </div>
              
              <div className="card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="icon-clock text-white text-xl"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">线性时延原理</h3>
                <p className="text-[var(--text-secondary)] text-sm">时间平移解决启动困难</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://momentumctdp.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-2"
              >
                <span>立即体验 Momentum</span>
                <div className="icon-external-link text-lg"></div>
              </a>
              
              <a 
                href="https://github.com/KenXiao1/momentum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-2 hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-300"
              >
                <div className="icon-github text-lg"></div>
                <span>GitHub 项目</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('HeroSlide component error:', error);
    return null;
  }
}