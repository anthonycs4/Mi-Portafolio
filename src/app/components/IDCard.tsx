import { useState } from 'react';
import { Badge } from './Badge';
import profilePhoto from "../../assets/profile.jpg";

interface IDCardProps {
  name?: string;
  role?: string;
  location?: string;
  focus?: string;
  photoUrl?: string;
  status?: 'active' | 'away' | 'offline';
}

export function IDCard({
  name = 'Anthony Cano',
  role = 'Software Engineer',
  location = 'Perú',
  focus = 'Back ',
  photoUrl = profilePhoto,
  status = 'active',
}: IDCardProps) {

  const [isHovered, setIsHovered] = useState(false);
  const [showBio, setShowBio] = useState(false);

  const statusConfig = {
    active: { color: 'bg-neon-green', label: 'ACTIVE', glow: 'shadow-[0_0_12px_rgba(0,255,136,0.4)]' },
    away: { color: 'bg-yellow-500', label: 'AWAY', glow: 'shadow-[0_0_12px_rgba(234,179,8,0.4)]' },
    offline: { color: 'bg-gray-500', label: 'OFFLINE', glow: 'shadow-[0_0_12px_rgba(107,114,128,0.4)]' },
  };

  return (
    <>
      <div className="relative w-[400px] h-[550px] p-6 group">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
        
        {/* Scanline effect */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan" />
        </div>
        
        {/* Floating code snippets */}
        <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none font-mono text-xs text-neon-cyan">
          <div className="absolute top-10 left-5 animate-float-slow">const dev = true;</div>
          <div className="absolute top-32 right-8 animate-float-slow" style={{ animationDelay: '1s' }}>{'{ mobile: "Flutter" }'}</div>
          <div className="absolute bottom-24 left-12 animate-float-slow" style={{ animationDelay: '2s' }}>async function()</div>
          <div className="absolute bottom-48 right-5 animate-float-slow" style={{ animationDelay: '1.5s' }}>backend: NestJS</div>
        </div>

        {/* Main Card */}
        <div
          className="relative w-full h-full bg-glass-fill backdrop-blur-xl border-2 border-neon-cyan rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
          style={{
            transform: `perspective(1000px) rotateX(${isHovered ? '2deg' : '0deg'}) rotateY(${isHovered ? '2deg' : '0deg'}) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
            boxShadow: isHovered
              ? '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 240, 255, 0.4), inset 0 0 80px rgba(0, 240, 255, 0.08)'
              : '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 240, 255, 0.15)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated grid pattern background */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          {/* Corner brackets with glow */}
          <div className="absolute top-4 left-4 w-8 h-8 z-20">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
            <div className="absolute top-0 left-0 w-0.5 h-full bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
            <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-neon-cyan/50" />
          </div>

          <div className="absolute top-4 right-4 w-8 h-8 z-20">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
            <div className="absolute top-0 right-0 w-0.5 h-full bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
            <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-neon-cyan/50" />
          </div>

          <div className="absolute bottom-4 left-4 w-8 h-8 z-20">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
            <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-neon-cyan/50" />
          </div>

          <div className="absolute bottom-4 right-4 w-8 h-8 z-20">
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
            <div className="absolute bottom-0 right-0 w-0.5 h-full bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
            <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-neon-cyan/50" />
          </div>

          {/* Image - 90% of card */}
          <div className="relative w-full h-[90%] overflow-hidden">
            {/* Profile Photo with Enhanced Hexagonal Frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[300px] h-[300px]">
                {/* Outer glow ring */}
                <div className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Hexagon frame */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:scale-105"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))' }}
                >
                  <defs>
                    <clipPath id="hexagon">
                      <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
                    </clipPath>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="50%" stopColor="#b24bf3" />
                      <stop offset="100%" stopColor="#00ff88" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="50 1 95 25 95 75 50 99 5 75 5 25"
                    fill="none"
                    stroke="url(#hexGradient)"
                    strokeWidth="2"
                    className="animate-pulse-glow"
                  />
                  {/* Inner hexagon border */}
                  <polygon
                    points="50 5 91 27 91 73 50 95 9 73 9 27"
                    fill="none"
                    stroke="rgba(0, 240, 255, 0.3)"
                    strokeWidth="1"
                  />
                </svg>

                {/* Photo */}
                <div className="absolute inset-[12px] rounded-full overflow-hidden border-2 border-neon-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                 <img
                  src={photoUrl}
                  alt={name}
                  className="w-full h-full object-cover object-[50%_20%] transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                  {/* Overlay gradient on image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-space/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Multiple rotating rings */}
                <div className="absolute inset-[-10px] animate-spin-slow opacity-40 group-hover:opacity-70 transition-opacity duration-500" style={{ animationDuration: '20s' }}>
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    <circle
                      cx="60"
                      cy="60"
                      r="58"
                      fill="none"
                      stroke="url(#ringGradient1)"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                    />
                    <defs>
                      <linearGradient id="ringGradient1">
                        <stop offset="0%" stopColor="rgba(0, 240, 255, 0.8)" />
                        <stop offset="100%" stopColor="rgba(0, 240, 255, 0)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="absolute inset-[-15px] animate-spin-reverse opacity-30 group-hover:opacity-60 transition-opacity duration-500" style={{ animationDuration: '15s' }}>
                  <svg viewBox="0 0 130 130" className="w-full h-full">
                    <circle
                      cx="65"
                      cy="65"
                      r="63"
                      fill="none"
                      stroke="url(#ringGradient2)"
                      strokeWidth="0.5"
                      strokeDasharray="2 6"
                    />
                    <defs>
                      <linearGradient id="ringGradient2">
                        <stop offset="0%" stopColor="rgba(178, 75, 243, 0.8)" />
                        <stop offset="100%" stopColor="rgba(178, 75, 243, 0)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Status badge - enhanced */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 px-2 py-1 rounded-md bg-glass-fill/90 backdrop-blur-xl border border-glass-border shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-opacity duration-500 group-hover:opacity-0">
              <div className="relative">
                <div className={`w-2 h-2 rounded-full ${statusConfig[status].color} ${statusConfig[status].glow}`} />
                <div className={`absolute inset-0 w-2 h-2 rounded-full ${statusConfig[status].color} animate-ping`} />
              </div>
              <span className="text-[10px] font-mono tracking-wider text-text-primary uppercase font-medium">
                {statusConfig[status].label}
              </span>
            </div>

            {/* Enhanced info overlay - respecting corner brackets */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/98 to-deep-space/30 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
              {/* Animated grid overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }} />
              </div>

              {/* Content inside corner brackets - better vertical centering */}
              <div className="absolute top-16 left-14 right-14 bottom-20 flex flex-col justify-center items-center text-center">
                {/* Name with glitch effect */}
                <div className="mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-text-primary relative inline-block">
                    {name}
                    <div className="absolute inset-0 text-neon-cyan opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300">
                      {name}
                    </div>
                  </h3>
                </div>

                {/* Role with typing cursor */}
                <div className="mb-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <p className="text-neon-cyan font-mono flex items-center justify-center gap-2">
                    {role}
                    <span className="inline-block w-2 h-4 bg-neon-cyan animate-blink" />
                  </p>
                </div>

                {/* Info Grid with enhanced styling */}
                <div className="w-full max-w-xs space-y-2.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <InfoRow label="LOCATION:" value={location} icon="🌍" />
                  <InfoRow label="FOCUS:" value={focus} icon="⚡" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 10% - enhanced footer */}
          {/* <div className="relative h-[10%] px-6 flex items-center justify-between bg-glass-fill/80 backdrop-blur-xl border-t border-glass-border">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-sm font-medium text-text-primary truncate">{name}</span>
            </div>
            <svg className="w-4 h-4 text-text-tertiary group-hover:text-neon-cyan transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div> */}
        </div>
      </div>

      {/* Biography Modal */}
      {showBio && <BiographyModal name={name} role={role} onClose={() => setShowBio(false)} />}

      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.15;
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(600%); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
}

// Enhanced Info Row Component
function InfoRow({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 pb-2 border-b border-neon-cyan/20 group/row">
      <span className="text-lg">{icon}</span>
      <span className="text-[10px] font-mono tracking-wider text-text-secondary uppercase min-w-[70px]">
        {label}
      </span>
      <span className="text-sm text-text-primary flex-1 group-hover/row:text-neon-cyan transition-colors duration-300">
        {value}
      </span>
    </div>
  );
}

// Biography Modal Component
interface BiographyModalProps {
  name: string;
  role: string;
  onClose: () => void;
}

function BiographyModal({ name, role, onClose }: BiographyModalProps) {
  const [activeTab, setActiveTab] = useState<'bio' | 'experience' | 'skills'>('bio');

  const experience = [
    {
      year: '2023 - Present',
      role: 'Senior Full-Stack Engineer',
      company: 'TechCorp Inc.',
      description: 'Leading mobile and backend development for healthcare platforms.',
      achievements: ['Scaled system to 100K+ users', 'Reduced API latency by 60%', 'Mentored 5 junior developers'],
    },
    {
      year: '2021 - 2023',
      role: 'Software Engineer',
      company: 'StartupXYZ',
      description: 'Built cross-platform mobile apps and microservices architecture.',
      achievements: ['Launched 3 mobile apps', 'Implemented CI/CD pipeline', 'Improved test coverage to 85%'],
    },
    {
      year: '2019 - 2021',
      role: 'Junior Developer',
      company: 'DevStudio',
      description: 'Developed web applications using React and Node.js.',
      achievements: ['Delivered 15+ client projects', 'Optimized frontend performance', 'Learned Flutter & AWS'],
    },
  ];

  const skills = [
    { name: 'Flutter', level: 95, color: '#02569B' },
    { name: 'React / Next.js', level: 92, color: '#61dafb' },
    { name: 'Node.js / NestJS', level: 90, color: '#339933' },
    { name: 'TypeScript', level: 88, color: '#3178c6' },
    { name: 'Python', level: 85, color: '#3776ab' },
    { name: 'AWS / Cloud', level: 82, color: '#ff9900' },
    { name: 'PostgreSQL', level: 80, color: '#4169e1' },
    { name: 'Docker / K8s', level: 78, color: '#2496ed' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-space/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[900px] max-h-[90vh] bg-glass-fill backdrop-blur-xl border border-neon-cyan/30 rounded-2xl shadow-[0_0_80px_rgba(0,240,255,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-scan">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
          </div>
        </div>

        {/* Header */}
        <div className="relative p-8 border-b border-glass-border bg-glass-fill/50">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-lg bg-glass-hover border border-glass-border flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/50 hover:rotate-90 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="space-y-3 pr-12">
            <Badge variant="cyan" className="font-mono text-xs">
              <span className="animate-pulse mr-2">●</span>
              PERSONNEL FILE
            </Badge>
            <h2 className="text-text-primary">{name}</h2>
            <p className="text-neon-cyan font-mono">{role}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative flex gap-2 px-8 pt-6 border-b border-glass-border">
          {(['bio', 'experience', 'skills'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-3 font-mono text-sm uppercase transition-all duration-300 ${
                activeTab === tab
                  ? 'text-neon-cyan'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.6)]" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-280px)] p-8">
          {activeTab === 'bio' && (
            <div className="space-y-6 animate-slide-in">
              {/* Bio text */}
              <div className="p-6 rounded-xl bg-glass-hover border border-glass-border">
                <h4 className="text-text-primary mb-4 flex items-center gap-2">
                  <span className="text-2xl">👨‍💻</span>
                  About Me
                </h4>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I'm a passionate software engineer specializing in mobile and backend development. 
                    With over 5 years of experience, I've built scalable applications that serve hundreds 
                    of thousands of users worldwide.
                  </p>
                  <p>
                    My journey started with web development, but I quickly fell in love with mobile 
                    platforms and cross-platform technologies. Today, I work across the entire stack, 
                    from Flutter mobile apps to NestJS backends and AWS cloud infrastructure.
                  </p>
                  <p>
                    I believe in clean code, thoughtful architecture, and building products that make 
                    a real difference. When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open source, or sharing knowledge with the dev community.
                  </p>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                <StatCard value="50+" label="Projects" icon="🚀" />
                <StatCard value="100K+" label="Users Served" icon="👥" />
                <StatCard value="5+" label="Years Exp" icon="⏱️" />
              </div>

              {/* Social links */}
              <div className="p-6 rounded-xl bg-glass-hover border border-glass-border">
                <h4 className="text-text-primary mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  <SocialButton icon="github" href="#" />
                  <SocialButton icon="linkedin" href="#" />
                  <SocialButton icon="twitter" href="#" />
                  <SocialButton icon="email" href="#" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6 animate-slide-in">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-xl bg-glass-hover border border-glass-border hover:border-neon-cyan/30 transition-all duration-300 group"
                >
                  {/* Timeline dot */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-6 top-[calc(100%+0px)] w-0.5 h-6 bg-gradient-to-b from-neon-cyan/50 to-transparent" />
                  )}
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center text-xl font-mono text-neon-cyan group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-text-primary mb-1">{exp.role}</h4>
                          <p className="text-sm text-neon-cyan font-mono">{exp.company}</p>
                        </div>
                        <Badge variant="cyan" className="text-xs font-mono">
                          {exp.year}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-text-secondary mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <svg className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-text-secondary">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6 animate-slide-in">
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-xl bg-glass-hover border border-glass-border hover:border-neon-cyan/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-text-primary font-mono">{skill.name}</span>
                      <span className="text-sm text-neon-cyan font-mono">{skill.level}%</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="relative h-2 bg-glass-border rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          boxShadow: `0 0 20px ${skill.color}60`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional certifications */}
              <div className="p-6 rounded-xl bg-glass-hover border border-glass-border">
                <h4 className="text-text-primary mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  Certifications & Achievements
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <CertBadge name="AWS Certified" />
                  <CertBadge name="Google Cloud" />
                  <CertBadge name="Flutter Expert" />
                  <CertBadge name="Kubernetes Admin" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function StatCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="p-4 rounded-xl bg-glass-hover border border-glass-border text-center hover:border-neon-cyan/30 transition-all duration-300 hover:-translate-y-1 group">
      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div className="text-2xl font-mono text-neon-cyan mb-1">{value}</div>
      <div className="text-xs text-text-secondary uppercase tracking-wider">{label}</div>
    </div>
  );
}

function SocialButton({ icon, href }: { icon: string; href: string }) {
  const icons = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 p-4 rounded-lg bg-glass-fill border border-glass-border flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 hover:-translate-y-1"
    >
      {icons[icon as keyof typeof icons]}
    </a>
  );
}

function CertBadge({ name }: { name: string }) {
  return (
    <div className="px-4 py-2 rounded-lg bg-glass-fill border border-neon-cyan/30 text-center text-sm font-mono text-text-primary hover:bg-glass-hover hover:border-neon-cyan/50 hover:shadow-[0_0_16px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-pointer">
      {name}
    </div>
  );
}