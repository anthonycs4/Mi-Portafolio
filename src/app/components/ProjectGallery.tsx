import { useEffect, useRef, useState } from 'react';
import { Badge } from './Badge';
import { Button } from './Button';

import flappyRocksThumb from '../../assets/projects/FlappyRocks.jpg';
import inkaAventuraThumb from '../../assets/projects/InkaAventura.jpg';
import fallingRocksThumb from '../../assets/projects/FallingRocks.jpg';
import startFundThumb from '../../assets/projects/StartFund.jpg';
import sudokuThumb from '../../assets/projects/Sudoku.jpg';
import customThumb from '../../assets/projects/Custom.jpg';
import tradiThumb from '../../assets/projects/Tradi.jpg';
import ntdThumb from '../../assets/projects/NtdStudio.jpg';
import ntMetricsThumb from '../../assets/projects/NtMetrics.jpg';
import uptThumb from '../../assets/projects/UptIncuba.jpg';
import careguardThumb from '../../assets/projects/careguard.jpg';

type ProjectCategory =
  | 'Todo'
  | 'Featured'
  | 'Landing'
  | 'Web'
  | 'API'
  | 'FullStack'
  | 'Maintenance';

type ProjectStatus = 'FEATURED' | 'En_Producción' | 'Completado';

interface TechStack {
  name: string;
  icon: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailFit?: 'pan' | 'contain';
  status: ProjectStatus;
  category: ProjectCategory[];
  techStack: TechStack[];
  github?: string;
  live?: string;
  caseStudy: {
    problem: string;
    solution: string;
    impact: string;
    architecture?: string;
    keyDecisions: { title: string; description: string }[];
  };
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Flappy Rocks — Landing + Press Kit',
    description:
      'Landing page oficial y sección de press kit con recursos promocionales del videojuego Flappy Rocks.',
    thumbnail: flappyRocksThumb,
    status: 'Completado',
    category: ['Featured', 'Landing', 'Web'],
    techStack: [
      { name: 'HTML/CSS', icon: '🎨', color: '#00f0ff' },
      { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
      { name: 'SEO', icon: '🔎', color: '#8be9fd' },
    ],
    live: 'https://flappyrocks.ntdstudio.com/',
    caseStudy: {
      problem:
        'El videojuego necesitaba una web de presentación y un press kit para prensa/creadores, con información clara y recursos descargables.',
      solution:
        'Implementé la landing page y la sección de press kit, organizando contenido, descargas y estructura para difusión.',
      impact:
        'Web lista para marketing y prensa, mejorando la presentación del juego y facilitando la cobertura con material oficial.',
      keyDecisions: [
        {
          title: 'Press kit estructurado',
          description:
            'Ordené el contenido en bloques (manual, logos, imágenes, capturas, etc.) para que la prensa encuentre todo rápido.',
        },
        {
          title: 'Enfoque en rendimiento/SEO',
          description: 'Optimicé estructura y carga para una landing rápida y clara.',
        },
      ],
    },
  },

  {
    id: '2',
    title: 'Inka Aventura — Landing + Press Kit',
    description:
      'Landing page del videojuego y press kit con material promocional descargable.',
    thumbnail: inkaAventuraThumb,
    status: 'Completado',
    category: ['Landing', 'Web', 'Featured'],
    techStack: [
      { name: 'HTML/CSS', icon: '🎨', color: '#00f0ff' },
      { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
      { name: 'Contenido UI', icon: '🧩', color: '#a78bfa' },
    ],
    live: 'https://inkaaventura.com/',
    caseStudy: {
      problem:
        'Se requería una web promocional sólida y un press kit para medios (logos, recursos, capturas, brand manual).',
      solution:
        'Desarrollé la landing y la página de press kit con secciones claras y descargas organizadas.',
      impact:
        'Contenido listo para prensa y campañas; navegación más simple y material centralizado para difusión.',
      keyDecisions: [
        {
          title: 'Arquitectura de contenido',
          description:
            'Priorización: tráiler/hero → features → llamada a la acción → press kit separado.',
        },
        {
          title: 'Diseño orientado a marketing',
          description:
            'Secciones cortas, visuales y escaneables para convertir visitas en interés.',
        },
      ],
    },
  },

  {
    id: '3',
    title: 'Falling Rocks — Landing + Press Kit',
    description:
      'Landing page y kit de prensa (manual, logos, capturas, premios) del videojuego Falling Rocks.',
    thumbnail: fallingRocksThumb,
    status: 'Completado',
    category: ['Landing', 'Web'],
    techStack: [
      { name: 'HTML/CSS', icon: '🎨', color: '#00f0ff' },
      { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
      { name: 'Kit de recursos', icon: '🗂️', color: '#22c55e' },
    ],
    live: 'https://fallingrocks.netdreams.pe/',
    caseStudy: {
      problem:
        'El juego requería una landing y un press kit completo para distribución de recursos promocionales.',
      solution:
        'Implementé la landing y la estructura del press kit con accesos a descargas y secciones ordenadas.',
      impact:
        'Material promocional centralizado y más fácil de compartir con prensa/partners.',
      keyDecisions: [
        {
          title: 'Secciones de press kit completas',
          description:
            'Manual de marca, imágenes promo, premios, logos, iconos, capturas y más, para uso inmediato.',
        },
      ],
    },
  },

  {
    id: '4',
    title: 'StartFund — Plataforma (PHP + MySQL)',
    description:
      'Frontend y backend en PHP/MySQL para plataforma de crowdfunding de recompensa (venta anticipada).',
    thumbnail: startFundThumb,
    status: 'Completado',
    category: ['Featured', 'FullStack', 'Web'],
    techStack: [
      { name: 'PHP', icon: '🐘', color: '#777bb4' },
      { name: 'MySQL', icon: '🐬', color: '#4479a1' },
      { name: 'HTML/CSS', icon: '🎨', color: '#00f0ff' },
    ],
    live: 'https://startfund.pe/',
    caseStudy: {
      problem:
        'Se necesitaba la web del proyecto StartFund para presentar la propuesta y operación del crowdfunding de recompensas.',
      solution:
        'Desarrollé frontend y backend con PHP/MySQL, implementando páginas y lógica base de la plataforma.',
      impact:
        'Sitio operativo y presentable; proyecto con presencia sólida para difusión y crecimiento.',
      keyDecisions: [
        {
          title: 'Stack simple y efectivo',
          description:
            'PHP + MySQL por velocidad de entrega y compatibilidad con infraestructura existente.',
        },
        {
          title: 'Separación de módulos',
          description: 'Estructuré vistas y lógica para facilitar mantenimiento y escalado.',
        },
      ],
    },
  },

  {
    id: '5',
    title: 'Netdreams Sudoku — Landing + Press Kit',
    description: 'Landing promocional y press kit del videojuego Netdreams Sudoku.',
    thumbnail: sudokuThumb,
    status: 'Completado',
    category: ['Landing', 'Web'],
    techStack: [
      { name: 'HTML/CSS', icon: '🎨', color: '#00f0ff' },
      { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
      { name: 'Press kit', icon: '🗞️', color: '#a78bfa' },
    ],
    live: 'https://sudoku.netdreams.pe/',
    caseStudy: {
      problem:
        'El juego necesitaba una web clara y un press kit para comunicación y difusión.',
      solution: 'Desarrollé landing + press kit con estructura de recursos descargables.',
      impact: 'Mejor soporte de marketing y prensa; recursos listos para medios.',
      keyDecisions: [
        {
          title: 'Jerarquía visual',
          description:
            'Priorizé “qué es”, beneficios y CTA, y dejé el press kit como ruta directa para prensa.',
        },
      ],
    },
  },

  {
    id: '6',
    title: 'Custom Made Insoles US — Landing',
    description:
      'Landing page para empresa de plantillas 100% personalizadas, basada en valoración corporal y análisis de pisada.',
    thumbnail: customThumb,
    status: 'Completado',
    category: ['Landing', 'Web'],
    techStack: [
      { name: 'HTML/CSS', icon: '🎨', color: '#00f0ff' },
      { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
      { name: 'Copy/Secciones', icon: '✍️', color: '#22c55e' },
    ],
    live: 'https://www.custommadeinsolesus.com/',
    caseStudy: {
      problem:
        'El cliente necesitaba una landing confiable para explicar el servicio (tecnología, equipo, proceso) y convertir visitas en citas.',
      solution:
        'Construí la landing estructurando secciones “Sobre nosotros”, proceso, beneficios y CTA, con enfoque comercial.',
      impact:
        'Mejor presentación del servicio y flujo de conversión más directo hacia agendamiento.',
      keyDecisions: [
        {
          title: 'Storytelling de confianza',
          description: 'Bloques centrados en credenciales, equipo médico y proceso digitalizado.',
        },
        {
          title: 'CTAs visibles',
          description: 'Llamadas a acción repetidas sin saturar, para mejorar conversión.',
        },
      ],
    },
  },

  {
    id: '7',
    title: 'La Tradición Arequipeña — “Reto del Rocoto” (Web + API)',
    description:
      'Integración del minijuego “Reto del Rocoto”: desarrollo de la página y API para guardar puntajes.',
    thumbnail: tradiThumb,
    status: 'Completado',
    category: ['Featured', 'Web', 'API'],
    techStack: [
      { name: 'Frontend', icon: '🖥️', color: '#00f0ff' },
      { name: 'API', icon: '🧠', color: '#a78bfa' },
      { name: 'Base de datos', icon: '🗃️', color: '#22c55e' },
    ],
    live: 'https://latradi.pe/reto-del-rocoto/',
    caseStudy: {
      problem:
        'Se necesitaba una landing/juego integrable al sitio y un backend para persistir y consultar puntajes.',
      solution:
        'Implementé la página del juego + una API de puntajes (guardado/lectura) para ranking y registro.',
      impact:
        'Base funcional para torneos, ranking y gamificación sin depender de servicios externos.',
      keyDecisions: [
        {
          title: 'API minimalista y estable',
          description:
            'Endpoints claros para registrar puntaje y consultar listados sin sobreingeniería.',
        },
        {
          title: 'Separación web vs lógica',
          description:
            'Frontend desacoplado del backend para permitir cambios sin romper el juego.',
        },
      ],
    },
  },

  {
    id: '8',
    title: 'Netdreams Studio — Mantenimiento (Astro)',
    description:
      'Mantenimiento y soporte de la web principal de Netdreams Studio (sitio hecho con Astro).',
    thumbnail: ntdThumb,
    status: 'Completado',
    category: ['Maintenance', 'Web'],
    techStack: [
      { name: 'Astro', icon: '🚀', color: '#ff5d01' },
      { name: 'Contenido', icon: '🧩', color: '#a78bfa' },
      { name: 'Rendimiento', icon: '⚡', color: '#22c55e' },
    ],
    live: 'https://ntdstudio.com/',
    caseStudy: {
      problem:
        'El sitio requería soporte continuo: ajustes, mejoras y mantenimiento para mantenerlo actualizado.',
      solution:
        'Realicé mantenimiento y cambios sobre el proyecto en Astro, cuidando rendimiento y consistencia visual.',
      impact:
        'Sitio estable y actualizado, listo para campañas y portafolio de la empresa.',
      keyDecisions: [
        {
          title: 'Cambios sin romper el build',
          description:
            'Mantenimiento cuidando estructura Astro y componentes para evitar regresiones.',
        },
      ],
    },
  },

  {
    id: '9',
    title: 'NTmetrics (NDA) — Full Stack (PHP + MySQL)',
    description:
      'Proyecto privado para Nestlé: desarrollé base de datos, backend, frontend y testing (bajo NDA).',
    thumbnail: ntMetricsThumb,
    status: 'Completado',
    category: ['Featured', 'FullStack', 'Web'],
    techStack: [
      { name: 'PHP', icon: '🐘', color: '#777bb4' },
      { name: 'MySQL', icon: '🐬', color: '#4479a1' },
      { name: 'Testing', icon: '🧪', color: '#22c55e' },
    ],
    caseStudy: {
      problem:
        'Se requería una solución interna end-to-end (sin link público) para métricas/operación del cliente.',
      solution:
        'Desarrollé la solución completa: BD, backend, frontend y pruebas, asegurando estabilidad y entregables.',
      impact:
        'Entrega de un sistema funcional para cliente enterprise manteniendo confidencialidad (NDA).',
      keyDecisions: [
        {
          title: 'Entrega end-to-end',
          description: 'Cobertura completa del ciclo: diseño → implementación → pruebas.',
        },
      ],
    },
  },

  {
    id: '10',
    title: 'UPT Incuba (Privado) — Soporte Laravel + MySQL',
    description:
      'Soporte y mantenimiento de proyecto interno UPT Incuba (Laravel + MySQL), acceso restringido.',
    thumbnail: uptThumb,
    status: 'Completado',
    category: ['Maintenance', 'Web'],
    techStack: [
      { name: 'Laravel', icon: '🟥', color: '#ff2d20' },
      { name: 'MySQL', icon: '🐬', color: '#4479a1' },
      { name: 'Soporte', icon: '🛠️', color: '#22c55e' },
    ],
    caseStudy: {
      problem:
        'Sistema interno con accesos restringidos que requería soporte, correcciones y mantenimiento.',
      solution:
        'Brindé soporte sobre Laravel/MySQL, corrigiendo issues y asegurando continuidad operativa.',
      impact: 'Mayor estabilidad del sistema interno y continuidad de procesos.',
      keyDecisions: [
        {
          title: 'Cambios controlados',
          description:
            'Mantenimiento con foco en estabilidad y compatibilidad del sistema existente.',
        },
      ],
    },
  },

  {
    id: '11',
    title: 'CareGuard — Plataforma (en desarrollo)',
    description:
      'Plataforma de caregiving multi-tenant: BD en Postgres, backend en NestJS, app móvil e integración completa (en progreso).',
    thumbnail: careguardThumb,
    thumbnailFit: 'contain',
    status: 'En_Producción',
    category: ['Featured', 'FullStack', 'API', 'Web'],
    techStack: [
      { name: 'NestJS', icon: '🐱', color: '#e0234e' },
      { name: 'PostgreSQL', icon: '🐘', color: '#4169e1' },
      { name: 'Figma', icon: '🎨', color: '#a78bfa' },
      { name: 'Móvil', icon: '📱', color: '#22c55e' },
    ],
    caseStudy: {
      problem:
        'Se necesitaba un sistema completo para solicitudes, matching, seguimiento (check-in/out) e integración app↔backend.',
      solution:
        'Estoy implementando el diseño, base de datos, backend en NestJS y la integración total con la app.',
      impact:
        'Producto en construcción con arquitectura lista para escalar; foco en experiencia y flujo completo.',
      keyDecisions: [
        {
          title: 'Arquitectura modular',
          description:
            'Backend organizado por módulos y capas para escalar features sin ensuciar el core.',
        },
        {
          title: 'BD bien modelada',
          description:
            'PostgreSQL con tablas/relaciones pensadas para matching, sesiones, evidencias y reseñas.',
        },
      ],
    },
  },
];

// ✅ Hook: calcula overflow horizontal y setea --pan-x (con opción de desactivar)
function useAutoPan(disabled = false) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (disabled) return;

    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const apply = () => {
      const wrapW = wrap.clientWidth;
      const imgW = img.scrollWidth;
      const overflowX = imgW - wrapW;

      if (overflowX <= 0) {
        img.style.setProperty('--pan-x', '0px');
        img.style.animation = 'none';
        return;
      }

      img.style.setProperty('--pan-x', `-${overflowX}px`);
      img.style.animation = '';
    };

    if (img.complete) apply();
    img.addEventListener('load', apply);

    const ro = new ResizeObserver(apply);
    ro.observe(wrap);

    return () => {
      img.removeEventListener('load', apply);
      ro.disconnect();
    };
  }, [disabled]);

  return { wrapRef, imgRef };
}

// ✅ Helper: detectar mobile sin hooks externos
function useIsMobile(breakpointPx = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpointPx}px)`);

    const update = () => setIsMobile(mq.matches);
    update();

    // compat
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, [breakpointPx]);

  return isMobile;
}

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todo');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const isMobile = useIsMobile(768);

  const categories: ProjectCategory[] = [
    'Todo',
    'Featured',
    'Landing',
    'Web',
    'API',
    'FullStack',
    'Maintenance',
  ];

  const filteredProjects =
    activeCategory === 'Todo'
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <section className="relative w-full max-w-[1400px] mx-auto" id="proyectos">
      {/* Filter tabs (oculto en mobile) */}
      <div className="hidden md:flex items-center gap-3 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
              activeCategory === category
                ? 'bg-neon-cyan text-deep-space shadow-[0_0_24px_rgba(0,240,255,0.4)]'
                : 'bg-glass-fill text-text-secondary border border-glass-border hover:bg-glass-hover hover:text-text-primary hover:border-neon-cyan/30'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isMobile={isMobile}
            onClick={() => {
              // ✅ MOBILE: no abre modal, abre link
              if (isMobile) {
                const url = project.live || project.github;
                if (url) window.open(url, '_blank');
                return;
              }
              // ✅ DESKTOP: abre modal
              setSelectedProject(project);
            }}
          />
        ))}
      </div>

      {/* ✅ Modal solo desktop */}
      {!isMobile && selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  isMobile: boolean;
}

function ProjectCard({ project, onClick, isMobile }: ProjectCardProps) {
  const shouldPan = project.thumbnailFit !== 'contain';
  const { wrapRef, imgRef } = useAutoPan(!shouldPan);

  return (
    <div
      className="group relative w-full h-[480px] bg-glass-fill backdrop-blur-xl rounded-2xl overflow-hidden border border-glass-border transition-all duration-500 cursor-pointer hover:border-neon-cyan/50 hover:-translate-y-2"
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
      onClick={onClick}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10" />
        <div className="absolute inset-0 shadow-[0_0_60px_rgba(0,240,255,0.2)]" />
      </div>

      {/* Full image - 90% of card */}
      <div className="relative w-full h-[90%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10" />

        <div
          ref={wrapRef}
          className={
            shouldPan
              ? 'relative z-10 w-full h-full overflow-hidden'
              : 'relative z-10 w-full h-full overflow-hidden flex items-center justify-center'
          }
        >
          <img
            ref={imgRef}
            src={project.thumbnail}
            alt={project.title}
            className={
              shouldPan
                ? 'project-pan-img absolute left-0 top-0 h-full w-auto max-w-none block'
                : 'h-full w-full object-contain block'
            }
          />
        </div>

        {/* Status badge - always visible */}
        <div className="absolute top-4 right-4 z-20">
          <Badge
            variant={
              project.status === 'FEATURED'
                ? 'cyan'
                : project.status === 'En_Producción'
                ? 'purple'
                : 'green'
            }
            className="backdrop-blur-xl font-mono text-xs shadow-lg"
          >
            {project.status}
          </Badge>
        </div>

        {/* Info overlay - solo desktop (en mobile no tiene sentido si no hay modal) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/95 to-deep-space/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-text-primary mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {project.title}
            </h3>

            <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              {project.techStack.slice(0, 4).map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-glass-hover border border-glass-border text-xs font-mono"
                  style={{
                    borderColor: `${tech.color}30`,
                  }}
                >
                  <span>{tech.icon}</span>
                  <span className="text-text-secondary">{tech.name}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
              <div className="flex-1 px-4 py-2 rounded-lg bg-neon-cyan text-deep-space text-center text-sm font-medium shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                Vista caso de estudio
              </div>

              {project.github && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                  className="w-9 h-9 rounded-lg bg-glass-hover border border-glass-border flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>
              )}

              {project.live && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.live, '_blank');
                  }}
                  className="w-9 h-9 rounded-lg bg-glass-hover border border-glass-border flex items-center justify-center text-text-secondary hover:text-neon-purple hover:border-neon-purple/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 10% */}
      <div className="relative h-[10%] p-4 flex items-center justify-between bg-glass-fill border-t border-glass-border">
        <span className="text-sm font-medium text-text-primary truncate">
          {project.title}
        </span>
        <svg
          className="w-4 h-4 text-text-tertiary group-hover:text-neon-cyan transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* CSS del pan */}
      <style>{`
        @keyframes panX {
          0%   { transform: translateX(0); }
          50%  { transform: translateX(var(--pan-x)); }
          100% { transform: translateX(0); }
        }

        .project-pan-img {
          --pan-x: 0px;
          animation: panX 8s ease-in-out infinite;
          will-change: transform;
        }

        .group:hover .project-pan-img {
          animation-duration: 5s;
        }
      `}</style>
    </div>
  );
}

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [expandedDecision, setExpandedDecision] = useState<number | null>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-space/95 backdrop-blur-2xl animate-modal-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div
        className="relative w-full max-w-[900px] max-h-[90vh] bg-gradient-to-br from-space-light/95 to-deep-space/95 backdrop-blur-2xl border border-neon-cyan/40 rounded-3xl shadow-[0_0_80px_rgba(0,240,255,0.3)] overflow-hidden animate-modal-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 pointer-events-none z-30 opacity-10">
          <div className="scanline-modal" />
        </div>

        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-cyan pointer-events-none z-20" />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-neon-cyan pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-neon-cyan pointer-events-none z-20" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-cyan pointer-events-none z-20" />

        <div className="relative p-4 border-b border-neon-cyan/30 bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-11 h-11 rounded-xl bg-glass-hover backdrop-blur-xl border border-glass-border flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/70 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 group z-20"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="space-y-4 pr-16">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 backdrop-blur-xl">
                <span className="text-xs font-mono text-neon-cyan font-medium">
                  CASO ESTUDIO
                </span>
              </div>
              <Badge
                variant={
                  project.status === 'FEATURED'
                    ? 'cyan'
                    : project.status === 'En_Producción'
                    ? 'purple'
                    : 'green'
                }
                className="font-mono text-xs"
              >
                {project.status}
              </Badge>
            </div>
            <h2 className="text-text-primary text-3xl">{project.title}</h2>
            <p className="text-text-secondary leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-glass-fill backdrop-blur-xl border transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: `${tech.color}50`,
                    boxShadow: `0 0 12px ${tech.color}20`,
                  }}
                >
                  <span className="text-base">{tech.icon}</span>
                  <span className="font-mono text-xs text-text-primary">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="custom-scrollbar overflow-y-auto max-h-[calc(90vh-280px)] p-8 space-y-8">
          <div className="grid grid-cols-1 gap-6">
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-neon-purple/10 to-transparent backdrop-blur-xl border border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/20 backdrop-blur-xl border border-neon-purple/40 flex items-center justify-center shadow-[0_0_20px_rgba(178,75,243,0.2)] group-hover:shadow-[0_0_30px_rgba(178,75,243,0.4)] transition-all duration-500">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium">Problema</h4>
                    <p className="text-xs text-text-tertiary font-mono">Analisis de retos</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pl-15">
                  {project.caseStudy.problem}
                </p>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-transparent backdrop-blur-xl border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 backdrop-blur-xl border border-neon-cyan/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-500">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium">Solución</h4>
                    <p className="text-xs text-text-tertiary font-mono">Enfoque técnico</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pl-15">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-neon-green/10 to-transparent backdrop-blur-xl border border-neon-green/30 hover:border-neon-green/60 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-green/20 backdrop-blur-xl border border-neon-green/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.2)] group-hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all duration-500">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium">Impacto</h4>
                    <p className="text-xs text-text-tertiary font-mono">Resultados</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pl-15">
                  {project.caseStudy.impact}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {project.github && (
              <button
                onClick={() => window.open(project.github, '_blank')}
                className="flex-1 px-6 py-4 rounded-xl bg-glass-fill backdrop-blur-xl border border-glass-border hover:border-neon-cyan/50 flex items-center justify-center gap-2 text-text-primary hover:text-neon-cyan transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
              >
                <span className="font-mono text-sm font-medium">View Source</span>
              </button>
            )}
            {project.live && (
              <button
                onClick={() => window.open(project.live, '_blank')}
                className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple border border-neon-cyan/50 flex items-center justify-center gap-2 text-deep-space font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] hover:scale-[1.02] group"
              >
                <span className="font-mono text-sm font-bold">Ver</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modal-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modal-scale-in {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes scanline-modal {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }

        .animate-modal-fade-in {
          animation: modal-fade-in 0.3s ease-out;
        }

        .animate-modal-scale-in {
          animation: modal-scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scanline-modal {
          position: absolute;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(0, 240, 255, 0.4),
            transparent
          );
          animation: scanline-modal 4s linear infinite;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(10, 10, 15, 0.5);
          border-radius: 10px;
          margin: 8px 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00f0ff 0%, #b24bf3 100%);
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00f0ff 30%, #b24bf3 100%);
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.7);
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #00f0ff rgba(10, 10, 15, 0.5);
        }
      `}</style>
    </div>
  );
}
