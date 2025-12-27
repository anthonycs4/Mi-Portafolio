import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'INITIALIZING SYSTEM...';

  // Simulate loading progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-deep-space flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern
            id="loading-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(0, 240, 255, 0.2)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#loading-grid)" />
      </svg>

      {/* Animated radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Animated geometric shape */}
        <div className="relative w-32 h-32">
          {/* Rotating outer ring */}
          <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-full animate-spin-slow" />
          
          {/* Rotating inner ring (opposite direction) */}
          <div className="absolute inset-4 border-2 border-neon-purple/30 rounded-full animate-spin-reverse" />
          
          {/* Center hexagon */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full animate-pulse-slow"
          >
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="50%" stopColor="#b24bf3" />
                <stop offset="100%" stopColor="#00ff88" />
              </linearGradient>
              <filter id="logo-glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <polygon
              points="50,15 85,30 85,60 50,75 15,60 15,30"
              fill="none"
              stroke="url(#logo-gradient)"
              strokeWidth="2"
              filter="url(#logo-glow)"
            />
            <polygon
              points="50,25 75,35 75,55 50,65 25,55 25,35"
              fill="url(#logo-gradient)"
              opacity="0.3"
            />
          </svg>
          
          {/* Pulsing glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full blur-2xl animate-pulse" />
        </div>

        {/* Progress section */}
        <div className="w-80 space-y-6">
          {/* Progress bar */}
          <div className="relative h-1 bg-glass-border rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${Math.min(progress, 100)}%`,
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.6)',
              }}
            />
          </div>

          {/* Percentage counter */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-2xl text-neon-cyan">
              {Math.floor(Math.min(progress, 100))}%
            </span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-neon-cyan"
                  style={{
                    animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Typing text */}
          <div className="text-center">
            <p className="font-mono text-text-secondary">
              {displayText}
              <span className="inline-block w-2 h-4 ml-1 bg-neon-cyan animate-blink" />
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 4s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}

// Hook to manage loading state
export function useLoading(duration: number = 3000) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return isLoading;
}
