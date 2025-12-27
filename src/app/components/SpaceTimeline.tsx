import { useEffect, useMemo, useRef, useState } from 'react';
import { Badge } from './Badge';
import { useMediaQuery } from '../hooks/useMediaQuery';

type Status = 'completed' | 'active';

interface Milestone {
  id: string;
  date: string;
  title: string;
  achievement: string;
  techStack: string[];
  icon: string;
  status: Status;
  position: number; // 0-100 (solo desktop)
  thumbnail?: string;
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
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [scrollProgress, setScrollProgress] = useState(0);
  const [revealedIndex, setRevealedIndex] = useState(0); // 👈 REVELADO SECUENCIAL

  const timelineRef = useRef<HTMLElement>(null);
  const nodeRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // ✅ Más separación vertical:
  // - mobile: usamos gap fijo por item (legible)
  // - desktop: escalamos el largo total para que todo respire
  const MOBILE_GAP_PX = 260; // 👈 aumenta si quieres más aire
  const DESKTOP_HEIGHT = 1500; // 👈 era ~1200/1080, ahora más largo
  const DESKTOP_PATH_HEIGHT = 1400;

  // posiciones absolutas (más separadas)
  const topPositions = useMemo(() => {
    if (isMobile) {
      // Mobile: una columna, cada item con separación constante
      return milestones.map((_, i) => 120 + i * MOBILE_GAP_PX);
    }
    // Desktop: usa position pero sobre un "largo" mayor
    return milestones.map((m) => (m.position / 100) * DESKTOP_PATH_HEIGHT + 80);
  }, [isMobile]);

  // Path responsive
  const VIEWBOX_W = isMobile ? 100 : 1200;
  const VIEWBOX_H = isMobile ? topPositions[topPositions.length - 1] + 260 : DESKTOP_HEIGHT;
  const PATH_X = isMobile ? 50 : 600;

  const pathD = isMobile
    ? `M ${PATH_X} 60 Q ${PATH_X} 260, ${PATH_X} 340 Q ${PATH_X} 520, ${PATH_X} 620 Q ${PATH_X} 760, ${PATH_X} 900 Q ${PATH_X} 1040, ${PATH_X} 1140`
    : `M 600 60 Q 550 260, 600 420 Q 650 580, 600 740 Q 550 900, 600 1060 Q 650 1220, 600 1380`;

  // Esto es aproximado para el dash (se ve bien con transición)
  const dashTotal = isMobile ? 1000 : 1400;

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const viewportH = window.innerHeight;
      const rect = timelineRef.current.getBoundingClientRect();

      // progreso general (para línea)
      const start = rect.top;
      const height = rect.height;
      const progress = Math.max(0, Math.min(100, ((viewportH - start) / height) * 100));
      setScrollProgress(progress);

      // ✅ REVELADO SECUENCIAL:
      // “Solo aparece la siguiente cuando ya se está terminando de pasar la anterior”
      // Regla:
      // - milestone i aparece si:
      //   a) i === 0 y entra en viewport
      //   b) i > 0 y el milestone anterior ya está "casi salido" (su TOP ya está cerca arriba)
      //      y el actual está cerca de entrar.
      let maxReveal = 0;

      for (let i = 0; i < milestones.length; i++) {
        const id = milestones[i].id;
        const el = nodeRefs.current.get(id);
        if (!el) continue;

        const r = el.getBoundingClientRect();
        const entersSoon = r.top < viewportH * 0.82; // el nodo ya está acercándose

        if (i === 0) {
          if (entersSoon) maxReveal = 0;
          continue;
        }

        const prevId = milestones[i - 1].id;
        const prevEl = nodeRefs.current.get(prevId);
        if (!prevEl) continue;

        const prevR = prevEl.getBoundingClientRect();

        // "terminando de pasar la anterior":
        // prevR.top ya está en el 20% superior de la pantalla (casi se fue)
        const prevAlmostGone = prevR.top < viewportH * 0.20;

        if (prevAlmostGone && entersSoon) {
          maxReveal = i;
        }
      }

      setRevealedIndex((prev) => Math.max(prev, maxReveal));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={timelineRef}
      className="relative w-full max-w-[1200px] mx-auto py-12 md:py-16 px-4 md:px-8 overflow-visible"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)',
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-neon-cyan/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-neon-purple/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative">
        {/* ✅ SVG DETRÁS */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
          style={{
            zIndex: 1, // 👈 detrás
            width: '100%',
            height: `${VIEWBOX_H}px`,
          }}
          viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#b24bf3" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path d={pathD} stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="none" />

          <path
            d={pathD}
            stroke="url(#timelineGradient)"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            strokeDasharray={dashTotal}
            strokeDashoffset={dashTotal - (dashTotal * (scrollProgress || 0)) / 100}
            style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
          />
        </svg>

        {/* Container */}
        <div
          className="relative"
          style={{
            minHeight: `${VIEWBOX_H}px`,
            zIndex: 2, // 👈 NODOS + CARTAS ENCIMA
          }}
        >
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            const top = topPositions[index];

            const shouldShowCard = index <= revealedIndex; // 👈 SOLO HASTA EL REVEALED

            return (
              <MilestoneNode
                key={milestone.id}
                milestone={milestone}
                isLeft={isLeft}
                topPosition={top}
                isMobile={isMobile}
                showCard={shouldShowCard}
                nodeRef={(el) => {
                  if (el) nodeRefs.current.set(milestone.id, el);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface MilestoneNodeProps {
  milestone: Milestone;
  isLeft: boolean;
  topPosition: number;
  isMobile: boolean;
  showCard: boolean;
  nodeRef: (el: HTMLDivElement | null) => void;
}

function MilestoneNode({
  milestone,
  isLeft,
  topPosition,
  isMobile,
  showCard,
  nodeRef,
}: MilestoneNodeProps) {
  const nodeStatus: 'inactive' | Status = showCard ? milestone.status : 'inactive';

  return (
    <div
      ref={nodeRef}
      className="absolute left-1/2 -translate-x-1/2"
      style={{ top: `${topPosition}px`, zIndex: 10 }}
    >
      {/* ✅ NODO: oculto en mobile */}
{!isMobile && (
  <div className="relative flex items-center justify-center">
    {nodeStatus !== 'inactive' && (
      <div
        className="absolute inset-0 -m-4 rounded-full opacity-40"
        style={{
          background: `radial-gradient(circle, ${
            nodeStatus === 'completed'
              ? 'rgba(0, 255, 136, 0.3)'
              : 'rgba(0, 240, 255, 0.3)'
          } 0%, transparent 70%)`,
          animation: nodeStatus === 'active' ? 'pulse 2s ease-in-out infinite' : 'none',
        }}
      />
    )}

    <div
      className="relative w-[56px] h-[56px] md:w-[60px] md:h-[60px] flex items-center justify-center"
      style={{
        clipPath:
          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        background:
          nodeStatus === 'inactive'
            ? 'rgba(120, 120, 120, 0.22)'
            : nodeStatus === 'completed'
            ? 'linear-gradient(135deg, rgba(0, 255, 136, 0.3), rgba(0, 255, 136, 0.1))'
            : 'linear-gradient(135deg, rgba(0, 240, 255, 0.3), rgba(178, 75, 243, 0.2))',
        boxShadow:
          nodeStatus === 'inactive'
            ? 'none'
            : `0 0 20px ${
                nodeStatus === 'completed'
                  ? 'rgba(0, 255, 136, 0.4)'
                  : 'rgba(0, 240, 255, 0.4)'
              }`,
      }}
    >
      <div
        className="absolute inset-0.5"
        style={{
          clipPath:
            'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'rgba(10, 10, 15, 0.92)',
        }}
      />
      <div className="relative z-10 text-2xl">
        {nodeStatus === 'completed' ? '✓' : milestone.icon}
      </div>
    </div>
  </div>
)}

      {/* ✅ CARTA: más separación + aparece secuencial */}
      {isMobile ? (
        <div className={`mt-4 w-[min(90vw,420px)] transition-all duration-700 ${
          showCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>

          <MilestoneCard milestone={milestone} />
        </div>
      ) : (
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-[420px] ${
            isLeft ? 'right-24' : 'left-24'
          } transition-all duration-700 ${
            showCard
              ? 'opacity-100 translate-x-0'
              : `opacity-0 ${isLeft ? 'translate-x-12' : '-translate-x-12'} pointer-events-none`
          }`}
        >
          <MilestoneCard milestone={milestone} />
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.12); }
        }
      `}</style>
    </div>
  );
}

function MilestoneCard({ milestone }: { milestone: Milestone }) {
  return (
    <div className="relative bg-glass-fill backdrop-blur-xl border border-glass-border rounded-2xl p-5 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.45)] hover:border-neon-cyan/50 transition-all duration-300">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-purple rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-purple rounded-br-lg" />

      <div className="space-y-4">
        <div className="inline-flex">
          <Badge variant="cyan" className="font-mono text-xs">
            {milestone.date}
          </Badge>
        </div>

        <h3 className="text-text-primary font-semibold">{milestone.title}</h3>

        <p className="text-sm text-text-secondary leading-relaxed">
          {milestone.achievement}
        </p>

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
