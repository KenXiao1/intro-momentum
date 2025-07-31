class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">出现了一些问题</h1>
            <p className="text-gray-600 mb-4">抱歉，发生了意外错误。</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary px-6 py-2 rounded-lg"
            >
              重新加载
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [darkMode, setDarkMode] = React.useState(() => {
      if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return false;
    });

    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
      document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const slides = [
      { id: 'hero', component: HeroSlide },
      { id: 'theory', component: TheorySlide },
      { id: 'principles', component: PrinciplesSlide },
      { id: 'momentum', component: MomentumSlide },
      { id: 'demo', component: DemoSlide }
    ];

    const scrollToSlide = (index) => {
      const element = document.getElementById(slides[index].id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setCurrentSlide(index);
      }
    };

    return (
      <div className="relative" data-name="app" data-file="app.js">
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          currentSlide={currentSlide}
          scrollToSlide={scrollToSlide}
          totalSlides={slides.length}
        />
        
        <main className="scroll-snap-y scroll-snap-mandatory">
          {slides.map(({ id, component: Component }, index) => (
            <section key={id} id={id} className="slide">
              <Component />
            </section>
          ))}
        </main>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);