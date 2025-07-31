function Footer() {
  try {
    const links = [
      {
        title: 'GitHub 项目',
        url: 'https://github.com/KenXiao1/momentum',
        icon: 'github',
        description: 'Momentum 项目源代码'
      },
      {
        title: '项目介绍',
        url: 'https://zhuanlan.zhihu.com/p/1932530006774505748',
        icon: 'book-open',
        description: 'GitHub 项目知乎介绍'
      },
      {
        title: '在线体验',
        url: 'https://momentumctdp.netlify.app/',
        icon: 'external-link',
        description: 'Momentum 在线应用'
      },
      {
        title: '原文链接',
        url: 'https://www.zhihu.com/question/19888447/answer/1930799480401293785',
        icon: 'file-text',
        description: 'CTDP 理论原文'
      }
    ];

    return (
      <footer 
        className="bg-[var(--card-bg)] border-t border-[var(--border-color)] py-16"
        data-name="footer" 
        data-file="components/Footer.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card rounded-xl p-6 hover:scale-105 transition-transform duration-300 block"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-dark)] rounded-lg flex items-center justify-center">
                    <div className={`icon-${link.icon} text-white text-lg`}></div>
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)]">{link.title}</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-sm">{link.description}</p>
              </a>
            ))}
          </div>

          <div className="border-t border-[var(--border-color)] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-dark)] rounded-md flex items-center justify-center">
                  <div className="icon-zap text-white text-lg"></div>
                </div>
                <span className="text-xl font-bold text-gradient">CTDP</span>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-[var(--text-secondary)] text-sm mb-1">
                  基于 Edmond 的 CTDP 理论
                </p>
                <p className="text-[var(--text-secondary)] text-sm">
                  © 2024 Momentum Project. 让科学的自制力触手可及.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}