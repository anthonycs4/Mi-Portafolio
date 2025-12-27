import { useState, ReactNode } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery'; // ajusta si tu ruta difiere

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
  FaPython,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiFlutter,
  SiLaravel,
  SiFigma,
} from 'react-icons/si';

type Category =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Cloud'
  | 'Mobile'
  | 'Tools';

interface TechStickerItem {
  id: string;
  name: string;
  category: Category;
  icon: ReactNode;
  color: string;
  proficiency: number; // 0-100
  useCase: string;
  position: { x: number; y: number };
  rotation: number;
}

const techStack: TechStickerItem[] = [
  // ===== FRONTEND =====
  {
    id: '1',
    name: 'React',
    category: 'Frontend',
    icon: <FaReact />,
    color: '#61dafb',
    proficiency: 95,
    useCase: 'Used in: Portfolio & QRTech (tech store frontend)',
    position: { x: 80, y: 120 },
    rotation: -3,
  },
  {
    id: '2',
    name: 'TypeScript',
    category: 'Frontend',
    icon: <SiTypescript />,
    color: '#3178c6',
    proficiency: 92,
    useCase: 'Used in: All frontend production projects',
    position: { x: 200, y: 140 },
    rotation: 5,
  },
  {
    id: '3',
    name: 'Next.js',
    category: 'Frontend',
    icon: <SiNextdotjs />,
    color: '#ffffff',
    proficiency: 75,
    useCase: 'Used in: Portfolio experiments and backend exploration',
    position: { x: 130, y: 240 },
    rotation: -5,
  },
  {
    id: '4',
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: <SiTailwindcss />,
    color: '#06b6d4',
    proficiency: 92,
    useCase: 'Used in: UI systems across web platforms',
    position: { x: 260, y: 260 },
    rotation: 8,
  },

  // ===== BACKEND =====
  {
    id: '5',
    name: 'Node.js',
    category: 'Backend',
    icon: <FaNodeJs />,
    color: '#339933',
    proficiency: 88,
    useCase: 'Used in: QRTech backend services',
    position: { x: 420, y: 100 },
    rotation: -4,
  },
  {
    id: '6',
    name: 'NestJS',
    category: 'Backend',
    icon: <SiNestjs />,
    color: '#e0234e',
    proficiency: 90,
    useCase: 'Used in: CareGuard backend with Clean Architecture',
    position: { x: 540, y: 130 },
    rotation: 6,
  },
  {
    id: '7',
    name: 'PHP',
    category: 'Backend',
    icon: <FaPhp />,
    color: '#777bb4',
    proficiency: 88,
    useCase: 'Used in: Nestlé audit system, Starfund startup & game APIs',
    position: { x: 460, y: 200 },
    rotation: -2,
  },
  {
    id: '8',
    name: 'Laravel',
    category: 'Backend',
    icon: <SiLaravel />,
    color: '#ff2d20',
    proficiency: 85,
    useCase: 'Used in: UPT platform maintenance & video game APIs',
    position: { x: 600, y: 230 },
    rotation: 4,
  },

  // ===== DATABASE =====
  {
    id: '9',
    name: 'PostgreSQL',
    category: 'Database',
    icon: <SiPostgresql />,
    color: '#4169e1',
    proficiency: 85,
    useCase: 'Used in: CareGuard via Supabase',
    position: { x: 500, y: 300 },
    rotation: -3,
  },
  {
    id: '10',
    name: 'MySQL',
    category: 'Database',
    icon: <SiMysql />,
    color: '#4479a1',
    proficiency: 80,
    useCase: 'Used in: PHP & Laravel enterprise systems',
    position: { x: 620, y: 320 },
    rotation: 6,
  },

  // ===== MOBILE =====
  {
    id: '11',
    name: 'Flutter',
    category: 'Mobile',
    icon: <SiFlutter />,
    color: '#02569B',
    proficiency: 87,
    useCase: 'Used in: CareGuard mobile application',
    position: { x: 760, y: 150 },
    rotation: -5,
  },

  // ===== CLOUD =====
  {
    id: '12',
    name: 'Python',
    category: 'Backend',
    icon: <FaPython />,
    color: '#3776ab',
    proficiency: 78,
    useCase: 'Used in: Vim digital wallet for bug fixing and scripting',
    position: { x: 120, y: 380 },
    rotation: 4,
  },
  {
    id: '13',
    name: 'AWS',
    category: 'Cloud',
    icon: <FaAws />,
    color: '#ff9900',
    proficiency: 70,
    useCase: 'Used in: Vim wallet cloud environment support',
    position: { x: 240, y: 420 },
    rotation: -3,
  },

  // ===== TOOLS =====
  {
    id: '14',
    name: 'Git',
    category: 'Tools',
    icon: <FaGitAlt />,
    color: '#f05032',
    proficiency: 92,
    useCase: 'Used in: Version control across all projects',
    position: { x: 480, y: 420 },
    rotation: -2,
  },
  {
    id: '15',
    name: 'Figma',
    category: 'Tools',
    icon: <SiFigma />,
    color: '#f24e1e',
    proficiency: 80,
    useCase: 'Used in: UI/UX design and prototyping',
    position: { x: 560, y: 500 },
    rotation: 5,
  },
];

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<Category | 'Todo'>('Todo');
  const [hoveredSticker, setHoveredSticker] = useState<string | null>(null);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const categories: (Category | 'Todo')[] = [
    'Todo',
    'Frontend',
    'Backend',
    'Database',
    'Mobile',
    'Cloud',
    'Tools',
  ];

  const filteredStack =
    activeCategory === 'Todo'
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section className="relative w-full max-w-[1200px] mx-auto overflow-visible rounded-2xl pb-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-light via-deep-space to-space-lighter rounded-2xl">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Ambient lighting */}
      <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-neon-cyan/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-neon-purple/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-4 md:p-8">
        {/* Tabs (scrollable en mobile) */}
        <div className="flex items-center gap-2 mb-6 md:mb-12 overflow-x-auto no-scrollbar pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-4 py-2 rounded-lg font-mono text-xs md:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-neon-cyan text-deep-space shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                  : 'bg-glass-fill text-text-secondary border border-glass-border hover:bg-glass-hover hover:text-text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content switch */}
        {isMobile ? (
          <div className="grid grid-cols-1 gap-3">

            {filteredStack.map((tech) => (
              <TechCardMobile key={tech.id} tech={tech} />
            ))}
          </div>
        ) : (
          <div className="relative flex-1 min-h-[550px] overflow-visible rounded-lg">
            {filteredStack.map((tech) => (
              <TechSticker
                key={tech.id}
                tech={tech}
                isHovered={hoveredSticker === tech.id}
                onHover={() => setHoveredSticker(tech.id)}
                onLeave={() => setHoveredSticker(null)}
              />
            ))}

            {/* Optional connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <line x1="130" y1="160" x2="250" y2="180" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="470" y1="140" x2="590" y2="170" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="790" y1="150" x2="850" y2="300" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />

              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 240, 255, 0.3)" />
                  <stop offset="100%" stopColor="rgba(178, 75, 243, 0.3)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

function TechCardMobile({ tech }: { tech: TechStickerItem }) {
  return (
    <details
      className="group rounded-xl border border-glass-border bg-glass-fill backdrop-blur-xl overflow-hidden"
      style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)' }}
    >
      <summary className="list-none cursor-pointer p-3 flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center border"
          style={{
            background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}08)`,
            borderColor: `${tech.color}35`,
          }}
        >
          <div className="text-2xl" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
            {tech.icon}
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-text-primary font-mono text-sm leading-tight">{tech.name}</p>
          <p className="text-text-tertiary text-xs">{tech.category}</p>
        </div>

        <div className="ml-auto text-text-tertiary text-xs font-mono">
          {tech.proficiency}%
        </div>
      </summary>

      <div className="px-3 pb-3">
        <div className="space-y-1 mb-3">
          <div className="flex items-center justify-between text-xs text-text-secondary font-mono">
            <span>Proficiency</span>
            <span>{tech.proficiency}%</span>
          </div>
          <div className="h-1.5 bg-glass-hover rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
              style={{
                width: `${tech.proficiency}%`,
                boxShadow: '0 0 8px rgba(0, 240, 255, 0.45)',
              }}
            />
          </div>
        </div>

        <p className="text-xs text-text-secondary italic leading-relaxed">
          {tech.useCase}
        </p>
      </div>
    </details>
  );
}

interface TechStickerProps {
  tech: TechStickerItem;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function TechSticker({ tech, isHovered, onHover, onLeave }: TechStickerProps) {
  return (
    <div
      className="absolute cursor-pointer transition-all duration-300"
      style={{
        left: `${tech.position.x}px`,
        top: `${tech.position.y}px`,
        transform: isHovered ? 'rotate(0deg) translateY(-12px)' : `rotate(${tech.rotation}deg)`,
        zIndex: isHovered ? 50 : 10,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Tooltip */}
      {isHovered && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-space-light backdrop-blur-xl border border-neon-cyan/50 rounded-lg p-4 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
            <div className="border-8 border-transparent border-t-neon-cyan/50" />
          </div>

          <div className="space-y-3">
            <h4 className="text-text-primary font-mono">{tech.name}</h4>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-text-secondary font-mono">
                <span>Proficiency</span>
                <span>{tech.proficiency}%</span>
              </div>
              <div className="h-1.5 bg-glass-fill rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-500"
                  style={{
                    width: `${tech.proficiency}%`,
                    boxShadow: '0 0 8px rgba(0, 240, 255, 0.5)',
                  }}
                />
              </div>
            </div>

            <p className="text-xs text-text-secondary italic">{tech.useCase}</p>
          </div>
        </div>
      )}

      {/* Sticker */}
      <div
        className="w-20 h-20 rounded-xl backdrop-blur-xl border border-glass-border flex items-center justify-center transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}08)`,
          boxShadow: isHovered
            ? `0 16px 32px rgba(0, 0, 0, 0.5), 0 0 24px ${tech.color}40`
            : '0 8px 16px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div
          className="text-4xl transition-transform duration-300"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
          }}
        >
          {tech.icon}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(4px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}
