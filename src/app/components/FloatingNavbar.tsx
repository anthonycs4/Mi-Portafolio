import { useState, useEffect } from 'react';

interface NavLink {
  id: string;
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'stack', label: 'Stack', href: '#stack' },
  { id: 'timeline', label: 'Timeline', href: '#timeline' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'certificates', label: 'Certificates', href: '#certificates' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function FloatingNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Handle scroll to show/hide navbar and update progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);

      // Detect active section
      const sections = navLinks.map(link => ({
        id: link.id,
        element: document.getElementById(link.id),
      }));

      const current = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ width: 'min(1200px, calc(100% - 32px))' }}
      >
        <div
          className="relative h-[72px] bg-glass-fill backdrop-blur-xl border border-glass-border rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 60px rgba(0, 240, 255, 0.05)',
          }}
        >
          {/* Scroll progress bar */}
          <div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green transition-all duration-300"
            style={{
              width: `${scrollProgress}%`,
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.6)',
            }}
          />

          <div className="h-full px-6 flex items-center justify-between">
            {/* Logo/Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-bold text-white shadow-lg">
                <img src="/favicon.svg" alt="" />
              </div>
              <span className="hidden sm:block font-bold text-text-primary">Anthony Cano</span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.href, link.id)}
                  className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-white'
                      : 'text-text-secondary hover:text-white'
                  }`}
                  style={{
                    textShadow: activeSection === link.id ? '0 0 10px rgba(0, 240, 255, 0.5)' : 'none',
                  }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-neon-cyan rounded-full"
                      style={{
                        boxShadow: '0 0 8px rgba(0, 240, 255, 0.8)',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Recruiter Mode Toggle */}
              {/* <button
                onClick={() => setRecruiterMode(!recruiterMode)}
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  recruiterMode
                    ? 'bg-neon-purple/20 border-neon-purple/50 text-neon-purple shadow-[0_0_20px_rgba(178,75,243,0.3)]'
                    : 'bg-glass-hover border-glass-border text-text-secondary hover:border-neon-purple/30'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-mono">Recruiter</span>
              </button> */}

              {/* Dark/Light Mode Toggle */}
              {/* <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-10 h-10 rounded-lg bg-glass-hover border border-glass-border flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button> */}

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-lg bg-glass-hover border border-glass-border flex items-center justify-center text-text-secondary hover:text-white transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-deep-space/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-8">
          {/* Mobile Nav Links */}
          <nav className="space-y-2 w-full max-w-md">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.href, link.id)}
                className={`group relative w-full p-6 rounded-xl bg-glass-fill border border-glass-border text-left transition-all duration-300 hover:border-neon-cyan/50 ${
                  activeSection === link.id ? 'border-neon-cyan/50' : ''
                }`}
                style={{
                  animation: isMobileMenuOpen
                    ? `slideIn 0.5s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xl font-medium transition-colors duration-300 ${
                      activeSection === link.id
                        ? 'text-neon-cyan'
                        : 'text-text-secondary group-hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                  <svg
                    className={`w-6 h-6 transition-all duration-300 ${
                      activeSection === link.id
                        ? 'text-neon-cyan translate-x-2'
                        : 'text-text-tertiary group-hover:text-neon-cyan group-hover:translate-x-2'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                {activeSection === link.id && (
                  <div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-cyan"
                    style={{
                      boxShadow: '0 0 10px rgba(0, 240, 255, 0.8)',
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Recruiter Toggle */}
          <button
            onClick={() => setRecruiterMode(!recruiterMode)}
            className={`mt-8 flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
              recruiterMode
                ? 'bg-neon-purple/20 border-neon-purple/50 text-neon-purple shadow-[0_0_20px_rgba(178,75,243,0.3)]'
                : 'bg-glass-fill border-glass-border text-text-secondary hover:border-neon-purple/30'
            }`}
            style={{
              animation: isMobileMenuOpen ? `slideIn 0.5s ease-out 0.6s both` : 'none',
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-mono">Recruiter Mode</span>
          </button>

          {/* Status indicator */}
          <div className="mt-8 flex items-center gap-2" style={{
            animation: isMobileMenuOpen ? `slideIn 0.5s ease-out 0.7s both` : 'none',
          }}>
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <p className="font-mono text-xs text-text-tertiary">AVAILABLE FOR OPPORTUNITIES</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
