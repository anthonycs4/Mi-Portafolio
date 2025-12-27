import { useState, useEffect, useRef } from 'react';
import { Badge } from './Badge';

type Status = 'completed' | 'active';

interface Milestone {
  id: string;
  date: string;
  title: string;
  achievement: string;
  techStack: string[];
  icon: string;
  status: Status;
  position: number;
}

const milestones: Milestone[] = [
  {
    id: '1',
    date: 'Abr 2024 – Abr 2025',
    title: 'Desarrollador — NetDreams',
    achievement:
      '✓ Mantenimiento y mejora de sistemas backend usando Python. Desarrollo de APIs en PHP para bases de datos de videojuegos y construcción de múltiples proyectos frontend.',
    techStack: ['Python', 'PHP', 'MySQL', 'Astro', 'Git'],
    icon: '🎮',
    status: 'completed',
    position: 10,
  },
  {
    id: '2',
    date: '2024',
    title: 'Proyectos Full Stack — NetDreams',
    achievement:
      '✓ Desarrollo completo de NTmetrics, abarcando base de datos, backend, frontend y testing. Creación de scripts de automatización para gestión de almacén.',
    techStack: ['Python', 'PHP', 'MySQL', 'React'],
    icon: '📊',
    status: 'completed',
    position: 28,
  },
  {
    id: '3',
    date: 'Ago 2025 – Dic 2025',
    title: 'Soporte TI y Desarrollador Laravel — UPT Incuba',
    achievement:
      '✓ Desarrollo y mantenimiento de sistemas basados en Laravel, automatización de procesos internos y soporte a la infraestructura digital de programas de incubación.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Python'],
    icon: '🏛️',
    status: 'completed',
    position: 46,
  },
  {
    id: '4',
    date: 'Oct 2025 – Presente',
    title: 'Tech Lead — CareGuard',
    achievement:
      '✓ Liderando el desarrollo full stack de una plataforma de caregiving, gestionando backend, aplicación móvil, base de datos y la arquitectura técnica general.',
    techStack: ['NestJS', 'Flutter', 'PostgreSQL', 'Supabase', 'Git'],
    icon: '🧠',
    status: 'active',
    position: 64,
  },
  {
    id: '5',
    date: '2025',
    title: 'Arquitectura y Diseño de Sistemas',
    achievement:
      '✓ Diseño de patrones de arquitectura limpia, estándares de API y estrategias de versionado en proyectos personales e institucionales.',
    techStack: ['TypeScript', 'Arquitectura Limpia', 'APIs REST', 'Figma'],
    icon: '🏗️',
    status: 'active',
    position: 82,
  },
];


export function SpaceTimeline() {
  const [visibleNodes, setVisibleNodes] = useState<Set<string>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on how much of the timeline is visible
      const start = rect.top;
      const height = rect.height;
      const progress = Math.max(0, Math.min(100, ((viewportHeight - start) / height) * 100));
      
      setScrollProgress(progress);

      // Check which nodes are visible
      const newVisibleNodes = new Set<string>();
      nodeRefs.current.forEach((nodeElement, id) => {
        const nodeRect = nodeElement.getBoundingClientRect();
        // Node is visible if it's in the viewport
        if (nodeRect.top < viewportHeight * 0.8 && nodeRect.bottom > 0) {
          newVisibleNodes.add(id);
        }
      });
      setVisibleNodes(newVisibleNodes);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={timelineRef}
      className="relative w-full max-w-[1200px] min-h-[1200px] mx-auto py-16 px-8 overflow-visible"
    >
      {/* Background grid that fades toward distance */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)',
      }} />

      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Timeline container */}
      <div className="relative h-full">
        {/* Curved timeline path */}
        <svg 
          className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <defs>
            {/* Gradient for the line */}
            <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#b24bf3" />
            </linearGradient>
            
            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background line (full path) */}
          <path
            d="M 600 60 Q 550 200, 600 340 Q 650 480, 600 620 Q 550 760, 600 900 Q 650 1040, 600 1140"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
            fill="none"
          />
          
          {/* Animated progress line */}
          <path
            d="M 600 60 Q 550 200, 600 340 Q 650 480, 600 620 Q 550 760, 600 900 Q 650 1040, 600 1140"
            stroke="url(#timelineGradient)"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            strokeDasharray="1080"
            strokeDashoffset={1080 - (1080 * (scrollProgress || 0) / 100)}
            style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
          />
        </svg>

        {/* Milestone nodes */}
        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;
          const topPosition = (milestone.position / 100) * 1080 + 30;
          
          return (
            <MilestoneNode
              key={milestone.id}
              milestone={milestone}
              isLeft={isLeft}
              topPosition={topPosition}
              isVisible={visibleNodes.has(milestone.id)}
              nodeRef={(el) => {
                if (el) {
                  nodeRefs.current.set(milestone.id, el);
                }
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

interface MilestoneNodeProps {
  milestone: Milestone;
  isLeft: boolean;
  topPosition: number;
  isVisible: boolean;
  nodeRef: (el: HTMLDivElement | null) => void;
}

function MilestoneNode({ 
  milestone, 
  isLeft, 
  topPosition, 
  isVisible,
  nodeRef
}: MilestoneNodeProps) {
  const nodeStatus = isVisible ? milestone.status : 'inactive';
  
  return (
    <div
      ref={nodeRef}
      className="absolute left-1/2 -translate-x-1/2"
      style={{ 
        top: `${topPosition}px`,
        zIndex: 10,
      }}
    >
      {/* Glow ring */}
      {nodeStatus !== 'inactive' && (
        <div 
          className="absolute inset-0 -m-4 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, ${
              nodeStatus === 'completed' ? 'rgba(0, 255, 136, 0.3)' : 'rgba(0, 240, 255, 0.3)'
            } 0%, transparent 70%)`,
            animation: nodeStatus === 'active' ? 'pulse 2s ease-in-out infinite' : 'none',
          }}
        />
      )}

      {/* Hexagon node */}
      <div
        className="relative w-[60px] h-[60px] flex items-center justify-center transition-all duration-500"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: nodeStatus === 'inactive' 
            ? 'rgba(100, 100, 100, 0.3)'
            : nodeStatus === 'completed'
            ? 'linear-gradient(135deg, rgba(0, 255, 136, 0.3), rgba(0, 255, 136, 0.1))'
            : 'linear-gradient(135deg, rgba(0, 240, 255, 0.3), rgba(178, 75, 243, 0.2))',
          boxShadow: nodeStatus === 'inactive'
            ? 'none'
            : `0 0 20px ${nodeStatus === 'completed' ? 'rgba(0, 255, 136, 0.4)' : 'rgba(0, 240, 255, 0.4)'}`,
        }}
      >
        {/* Border */}
        <div 
          className="absolute inset-0.5"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'rgba(10, 10, 15, 0.9)',
          }}
        />
        
        {/* Icon or Check */}
        <div className="relative z-10 text-2xl transition-all duration-500">
          {nodeStatus === 'completed' ? '✓' : milestone.icon}
        </div>
      </div>

      {/* Card - Always visible, alternating sides */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[400px] ${
          isLeft ? 'right-20' : 'left-20'
        } transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : `opacity-0 ${isLeft ? 'translate-x-12' : '-translate-x-12'}`
        }`}
      >
        <MilestoneCard milestone={milestone} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}

interface MilestoneCardProps {
  milestone: Milestone;
}

function MilestoneCard({ milestone }: MilestoneCardProps) {
  return (
    <div className="relative bg-glass-fill backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-neon-cyan/50 transition-all duration-300">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-purple rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-purple rounded-br-lg" />

      <div className="space-y-4">
        {/* Date badge */}
        <div className="inline-flex">
          <Badge variant="cyan" className="font-mono text-xs">
            {milestone.date}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-text-primary font-semibold">
          {milestone.title}
        </h3>

        {/* Achievement */}
        <p className="text-sm text-text-secondary leading-relaxed">
          {milestone.achievement}
        </p>

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {milestone.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-glass-hover border border-glass-border text-xs font-mono text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Optional thumbnail */}
      {milestone.thumbnail && (
        <div className="absolute top-6 right-6 w-20 h-20 rounded-lg overflow-hidden border border-glass-border">
          <img 
            src={milestone.thumbnail} 
            alt={milestone.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}