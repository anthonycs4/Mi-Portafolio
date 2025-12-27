import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Badge } from './Badge';
import { useMediaQuery } from '../hooks/useMediaQuery';

// 🔧 Tech stack (enfocado a lo que realmente usas / has usado)
const techStack = [
  { name: 'React', color: 'cyan' as const },
  { name: 'Next.js', color: 'cyan' as const },
  { name: 'TypeScript', color: 'cyan' as const },
  { name: 'NestJS', color: 'purple' as const },
  { name: 'Supabase', color: 'green' as const },
  { name: 'PostgreSQL', color: 'green' as const },
  { name: 'PHP', color: 'green' as const },
  { name: '.NET', color: 'purple' as const },
];

// 🖥️ Console lines (más “tú”, menos plantilla) — EN ESPAÑOL
const consoleLines = [
  '> construyendo productos para UPT Incuba / Netdreams y startups',
  '> lanzando experiencias con React / Next.js',
  '> diseñando arquitectura limpia y escalable',
];

export function HeroSection() {
  const [typedLines, setTypedLines] = useState<string[]>(['', '', '']);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // ✅ Scroll suave a la galería
  const goToProjects = () => {
    const el = document.getElementById('proyectos');
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Typing effect
  useEffect(() => {
    if (currentLine >= consoleLines.length) return;

    const line = consoleLines[currentLine];
    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setTypedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] = line.slice(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Move to next line after a brief pause
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentChar, currentLine]);

  return (
    <section className="relative w-full min-h-[800px] max-w-[1440px] mx-auto overflow-visible py-12">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-deep-space to-neon-cyan/10" />

      {/* Spotlight effect */}
<div 
      className={`absolute top-0 left-1/2 -translate-x-1/2 h-[400px] bg-neon-cyan/5 rounded-full blur-[120px] ${
        isMobile ? 'w-[300px]' : 'w-[800px]'
      }`} 
    />
      {/* Main content container */}
      <div className="relative h-full flex items-center px-12 lg:px-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Content Zone - 60% */}
          <div className="space-y-8 z-10">
            {/* Name with scanline animation */}
            <div className="relative inline-block">
              <h1 className="text-[48px] leading-tight mb-0">
                Anthony Cano Sucso
              </h1>
              {/* Scanline effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="scanline" />
              </div>
            </div>

            {/* Role subtitle — EN ESPAÑOL */}
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-xl text-text-secondary font-mono">
                Ingeniero de Software • Frontend + Backend
              </p>
            </div>

            {/* Status badge — EN ESPAÑOL */}
            <div className="flex items-center gap-2">
              <Badge variant="default" className="pl-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                </span>
                Construyendo y abierto a colaboraciones
              </Badge>
            </div>

            {/* Typing console effect area */}
            <div className="bg-space-lighter/80 backdrop-blur-xl border border-glass-border rounded-lg p-6 font-mono text-sm max-w-xl">
              <div className="space-y-2">
                {typedLines.map((line, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-neon-green">{line}</span>
                    {index === currentLine &&
                      currentLine < consoleLines.length &&
                      currentChar < consoleLines[currentLine].length && (
                        <span className="inline-block w-2 h-4 bg-neon-cyan animate-pulse" />
                      )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons — EN ESPAÑOL + Scroll */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={goToProjects}>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                Ver Proyectos
              </Button>

              <a
                href="/CV_CanoSucso.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Button variant="secondary" size="lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                                Descargar CV
                </Button>
              </a>

            </div>

            {/* Tech badges row */}
            <div className="flex flex-wrap gap-2 pt-4">
              {techStack.map((tech, index) => (
                <Badge key={index} variant={tech.color}>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Visual Zone - 40% */}
          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0">
              <HolographicGrid />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-[350px] h-[350px]">
                <div
                  className="absolute inset-0 rounded-full border-2 border-neon-cyan/30 animate-spin-slow"
                  style={{ animationDuration: '20s' }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.6)]" />
                </div>

                <div
                  className="absolute inset-8 rounded-full border-2 border-neon-purple/30 animate-spin-slow"
                  style={{ animationDuration: '15s', animationDirection: 'reverse' }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_12px_rgba(178,75,243,0.6)]" />
                </div>

                <div className="absolute inset-16 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full animate-pulse-slow"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="letterGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#b24bf3" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#00ff88" stopOpacity="0.8" />
                      </linearGradient>

                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <path
                      d="M 100 30 L 140 170 L 120 170 L 112 140 L 88 140 L 80 170 L 60 170 L 100 30 Z M 94 120 L 106 120 L 100 85 Z"
                      fill="none"
                      stroke="url(#letterGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#glow)"
                      className="animate-draw-letter"
                    />

                    <path
                      d="M 100 30 L 140 170 L 120 170 L 112 140 L 88 140 L 80 170 L 60 170 L 100 30 Z M 94 120 L 106 120 L 100 85 Z"
                      fill="url(#letterGradient)"
                      fillOpacity="0.15"
                      className="animate-pulse-glow"
                    />

                    <circle cx="100" cy="30" r="3" fill="#00f0ff" className="animate-pulse-fast" />
                    <circle cx="60" cy="170" r="3" fill="#b24bf3" className="animate-pulse-fast" />
                    <circle cx="140" cy="170" r="3" fill="#00ff88" className="animate-pulse-fast" />
                  </svg>
                </div>

                <div
                  className="absolute inset-20 rounded-full border border-dashed border-neon-green/20 animate-spin-slow"
                  style={{ animationDuration: '25s' }}
                />
              </div>
            </div>

            <FloatingParticles count={25} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }

        .scanline {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(0, 240, 255, 0.3),
            transparent
          );
          animation: scanline 3s linear infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes draw-letter {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }

        .animate-draw-letter {
          stroke-dasharray: 0 1000;
          animation: draw-letter 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        @keyframes pulse-fast {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

// Holographic Grid Component
function HolographicGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(0, 240, 255, 0.15)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(0, 240, 255, 0)" />
          </linearGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          opacity="0.5"
          style={{
            transform: 'perspective(600px) rotateX(60deg)',
            transformOrigin: 'center center',
          }}
        />
        <g stroke="url(#fade)" strokeWidth="1" fill="none" opacity="0.6">
          <line x1="50%" y1="20%" x2="30%" y2="80%" />
          <line x1="50%" y1="20%" x2="70%" y2="80%" />
          <line x1="50%" y1="30%" x2="35%" y2="80%" />
          <line x1="50%" y1="30%" x2="65%" y2="80%" />
        </g>
      </svg>
    </div>
  );
}

// Floating Particles Component
function FloatingParticles({ count = 25 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-neon-cyan/40 animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            boxShadow: '0 0 8px rgba(0, 240, 255, 0.4)',
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(10px, -20px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate(-10px, -40px) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translate(15px, -20px) scale(1.1);
            opacity: 0.5;
          }
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
