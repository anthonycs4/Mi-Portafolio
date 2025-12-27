import { useState, useEffect } from 'react';

export function ScrollIndicators() {
  const [showHeroIndicator, setShowHeroIndicator] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Hide hero indicator after scrolling down
      setShowHeroIndicator(window.scrollY < 100);

      // Detect active section
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const current = sectionElements.findIndex((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (current !== -1) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
      {/* Hero scroll down indicator */}
      {showHeroIndicator && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 animate-bounce-slow">
          <button
            onClick={() => scrollToSection('stack')}
            className="flex flex-col items-center gap-2 text-text-tertiary hover:text-neon-cyan transition-colors duration-300 group"
            aria-label="Scroll down"
          >
            <span className="text-xs font-mono tracking-wider">SCROLL</span>
            <div className="w-6 h-10 rounded-full border-2 border-current p-1 relative">
              <div className="w-1 h-3 bg-current rounded-full mx-auto animate-scroll-indicator" />
            </div>
            <svg className="w-4 h-4 animate-bounce-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* Section progress dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <nav className="flex flex-col gap-4" aria-label="Section navigation">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative"
              aria-label={`Go to ${section.label}`}
            >
              {/* Dot */}
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-neon-cyan border-neon-cyan scale-125 shadow-[0_0_12px_rgba(0,240,255,0.6)]'
                    : 'bg-transparent border-glass-border group-hover:border-neon-cyan group-hover:bg-neon-cyan/20'
                }`}
              />

              {/* Tooltip label */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 group-hover:-translate-x-2">
                <div className="px-3 py-1.5 rounded-lg bg-glass-fill backdrop-blur-xl border border-glass-border shadow-lg whitespace-nowrap">
                  <span className="text-xs font-mono text-text-primary">{section.label}</span>
                </div>
                {/* Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-glass-border" />
                </div>
              </div>

              {/* Active indicator line */}
              {activeSection === index && (
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10">
                  <div className="w-8 h-8 rounded-full bg-neon-cyan/10 blur-md" />
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* Progress line connecting dots */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-glass-border -z-20">
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-cyan to-neon-purple transition-all duration-500"
            style={{
              height: `${(activeSection / (sections.length - 1)) * 100}%`,
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.4)',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, -10px);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }

        @keyframes scroll-indicator {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
