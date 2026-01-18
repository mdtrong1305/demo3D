import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  // handle scroll tới section
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // handle click logo về home
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a 
            href="/" 
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900">AnalyticsPro</span>
          </a>
          {/* UI desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={(e) => handleScrollToSection(e, 'features')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleScrollToSection(e, 'pricing')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Pricing
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleScrollToSection(e, 'about')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              About
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleScrollToSection(e, 'features')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>
          {/* buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              Sign In
            </button>
            <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors cursor-pointer">
              Get Started
            </button>
          </div>
          {/* UI mobile */}
          <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
