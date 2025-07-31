function TheorySlide() {
  try {
    React.useEffect(() => {
      // Trigger MathJax re-render when component mounts
      if (window.MathJax) {
        window.MathJax.typesetPromise();
      }
    }, []);

    return (
      <div 
        className="min-h-screen flex items-center justify-center px-4 py-20"
        data-name="theory-slide" 
        data-file="components/TheorySlide.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">理论基础</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              用数学模型解释自制力问题的本质
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Formula and Explanation */}
            <div className="space-y-8">
              <div className="card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">核心数学模型</h3>
                
                {/* Main Formula */}
                <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-dark)] rounded-xl p-6 mb-6">
                  <div 
                    className="text-center text-white text-xl"
                    dangerouslySetInnerHTML={{
                      __html: '$$I = \\int_{0}^{\\infty} V(\\tau) \\cdot W(\\tau) d\\tau$$'
                    }}
                  />
                </div>

                <div className="space-y-4 text-[var(--text-secondary)]">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-[var(--text-primary)]">
                        <span dangerouslySetInnerHTML={{__html: '$V(\\tau)$'}} />
                      </strong> - 未来价值函数：
                      表示当前的你眼中，该行为在未来每个时刻τ带来的价值
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-[var(--text-primary)]">
                        <span dangerouslySetInnerHTML={{__html: '$W(\\tau)$'}} />
                      </strong> - 权重贴现函数：
                      表示你对未来每个时刻τ的价值重视程度
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-[var(--text-primary)]">$I$</strong> - 行为倾向：
                      决定你最终选择的加权积分值
                    </div>
                  </div>
                </div>
              </div>

              <div className="card rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4 text-[var(--text-primary)]">关键洞察</h4>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  人类大脑极度短视，权重函数 $W(\\tau)$ 在短期非常高，长期迅速趋于零。
                  这导致刷手机的短期优势被放大，而学习的长期价值被忽视。
                </p>
              </div>
            </div>

            {/* Right: Visual Diagram */}
            <div className="space-y-6">
              <div className="card rounded-2xl p-8">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_135f737ce8000001/d7faa63d-5ce5-4b39-9b97-af781b381b9f.webp"
                  alt="CTDP数学模型示意图"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">
                  使用数学公式模拟专注力的价值分布
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="icon-smartphone text-red-600 text-xl"></div>
                  </div>
                  <h5 className="font-semibold text-[var(--text-primary)] mb-2">刷手机</h5>
                  <p className="text-xs text-[var(--text-secondary)]">短期高价值<br/>长期负价值</p>
                </div>
                
                <div className="card rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="icon-book-open text-green-600 text-xl"></div>
                  </div>
                  <h5 className="font-semibold text-[var(--text-primary)] mb-2">学习</h5>
                  <p className="text-xs text-[var(--text-secondary)]">短期低价值<br/>长期高价值</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TheorySlide component error:', error);
    return null;
  }
}