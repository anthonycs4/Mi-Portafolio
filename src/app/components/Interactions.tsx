import { useState, useRef, useEffect } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('cursor-magnetic');

      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Only show custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      {isVisible && (
        <>
          {/* Main dot */}
          <div
            className="fixed pointer-events-none z-[9999] mix-blend-difference"
            style={{
              left: position.x,
              top: position.y,
              transform: 'translate(-50%, -50%)',
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div
              className={`rounded-full bg-white transition-all duration-200 ${
                isHovering ? 'w-2 h-2' : 'w-1.5 h-1.5'
              }`}
            />
          </div>

          {/* Ring */}
          <div
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: position.x,
              top: position.y,
              transform: 'translate(-50%, -50%)',
              transition: 'transform 0.15s ease-out, width 0.2s ease-out, height 0.2s ease-out',
            }}
          >
            <div
              className={`rounded-full border border-neon-cyan/50 transition-all duration-200 ${
                isHovering ? 'w-12 h-12' : 'w-8 h-8'
              }`}
              style={{
                boxShadow: isHovering ? '0 0 20px rgba(0, 240, 255, 0.4)' : '0 0 10px rgba(0, 240, 255, 0.2)',
              }}
            />
          </div>

          {/* Trail effect */}
          <div
            ref={trailRef}
            className="fixed pointer-events-none z-[9997]"
            style={{
              left: position.x,
              top: position.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 blur-xl" />
          </div>
        </>
      )}
    </>
  );
}

// Tooltip component with micro-interactions
interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ content, children, position = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute ${positionClasses[position]} z-50 animate-tooltip-in`}
        >
          <div className="px-3 py-2 rounded-lg bg-glass-fill backdrop-blur-xl border border-neon-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.2)] whitespace-nowrap">
            <span className="text-xs font-mono text-text-primary">{content}</span>
          </div>
        </div>
      )}
      <style>{`
        @keyframes tooltip-in {
          from {
            opacity: 0;
            transform: translateY(8px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }

        .animate-tooltip-in {
          animation: tooltip-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

// Success notification component
interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export function Notification({ message, type, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: {
      bg: 'bg-neon-green/20',
      border: 'border-neon-green/50',
      text: 'text-neon-green',
      shadow: 'shadow-[0_0_20px_rgba(0,255,136,0.3)]',
    },
    error: {
      bg: 'bg-red-500/20',
      border: 'border-red-500/50',
      text: 'text-red-400',
      shadow: 'shadow-[0_0_20px_rgba(239,68,68,0.3)]',
    },
  };

  const style = colors[type];

  return (
    <div className={`fixed top-24 right-8 z-[60] animate-slide-in-right`}>
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-xl ${style.bg} backdrop-blur-xl border ${style.border} ${style.shadow}`}
      >
        {type === 'success' ? (
          <div className="relative">
            <svg className={`w-6 h-6 ${style.text} animate-scale-in`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div className="absolute inset-0 animate-pulse">
              <div className="w-full h-full rounded-full bg-neon-green/20 blur-md" />
            </div>
          </div>
        ) : (
          <svg className={`w-6 h-6 ${style.text} animate-shake`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        <span className={`font-mono text-sm ${style.text}`}>{message}</span>
        <button
          onClick={onClose}
          className={`ml-2 ${style.text} hover:opacity-70 transition-opacity`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.4s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .animate-shake {
          animation: shake 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
