function Header({ darkMode, setDarkMode, currentSlide, scrollToSlide, totalSlides }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navItems = [
      { name: '首页', id: 'hero' },
      { name: '理论基础', id: 'theory' },
      { name: '核心原理', id: 'principles' },
      { name: 'Momentum', id: 'momentum' },
      { name: '演示', id: 'demo' }
    ];

    return (
      <header 
        className="fixed top-0 left-0 right-0 z-50 card border-0 border-b backdrop-blur-md bg-opacity-80"
        data-name="header" 
        data-file="components/Header.js"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-dark)] rounded-md flex items-center justify-center">
                <div className="icon-zap text-white text-lg"></div>
              </div>
              <span className="text-xl font-bold text-gradient">CTDP</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSlide(index)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[var(--primary-color)] ${
                    currentSlide === index ? 'text-[var(--primary-color)]' : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-[var(--border-color)] transition-colors duration-200"
                aria-label="切换深色模式"
              >
                <div className={`icon-${darkMode ? 'sun' : 'moon'} text-lg text-[var(--text-secondary)]`}></div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-[var(--border-color)] transition-colors duration-200"
                aria-label="菜单"
              >
                <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-lg text-[var(--text-secondary)]`}></div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[var(--border-color)] py-4 fade-in">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSlide(index);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-[var(--border-color)] ${
                    currentSlide === index ? 'text-[var(--primary-color)]' : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}