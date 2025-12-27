import { useState } from 'react';
import { Badge } from './Badge';
import { Button } from './Button';

type CertificateCategory = 'All' | 'Cloud' | 'DevOps' | 'Backend' | 'Mobile' | 'Frontend' | 'Security';

interface CertificateStats {
  total: number;
  byCategory: Record<string, number>;
  recent: number;
  verified: number;
}

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issuerLogo: string;
  dateEarned: string;
  category: CertificateCategory[];
  credentialId: string;
  skills: string[];
  certificateImage: string;
  credentialUrl?: string;
  pdfUrl?: string;
}

// Mock data - replace with your actual certificates
const certificateStats: CertificateStats = {
  total: 59,
  byCategory: {
    'Cloud': 16,
    'DevOps': 2,
    'Backend': 23,
    'Frontend': 2,
  },
  recent: 12,
  verified: 57,
};

const featuredCertificates: Certificate[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issuerLogo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&q=80',
    dateEarned: 'Dec 2023',
    category: ['Cloud', 'Backend'],
    credentialId: 'AWS-SAA-2023-XY89Z',
    skills: ['Cloud Architecture', 'AWS Services', 'Scalability', 'Security'],
    certificateImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80',
    credentialUrl: 'https://aws.amazon.com/certification',
  },
  {
    id: '2',
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    issuerLogo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=200&q=80',
    dateEarned: 'Oct 2023',
    category: ['DevOps', 'Cloud'],
    credentialId: 'CKA-2023-AB123',
    skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Cluster Management'],
    certificateImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    credentialUrl: 'https://www.cncf.io/certification/cka',
  },
  {
    id: '3',
    name: 'Google Cloud Professional Architect',
    issuer: 'Google Cloud',
    issuerLogo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&q=80',
    dateEarned: 'Aug 2023',
    category: ['Cloud', 'Backend'],
    credentialId: 'GCP-PA-2023-CD456',
    skills: ['GCP', 'Cloud Design', 'Infrastructure', 'BigQuery'],
    certificateImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
    credentialUrl: 'https://cloud.google.com/certification',
  },
];

export function CertificateVault() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const driveUrl = 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID'; // Replace with actual URL

  return (
    <section className="relative w-full max-w-[1400px] mx-auto">
      {/* Section title with glitch effect */}
      <div
        className="text-center mb-12 cursor-pointer select-none"
        onMouseEnter={() => setIsGlitching(true)}
        onMouseLeave={() => setIsGlitching(false)}
      >
        <h2 className={`relative inline-block ${isGlitching ? 'glitch-text' : ''}`} data-text="CREDENTIALS VAULT">
          CERTIFICADOS
        </h2>
        <p className="text-text-tertiary text-sm font-mono mt-3">
          
        </p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Total Certificates */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
          <div className="relative h-full p-6 bg-glass-fill backdrop-blur-xl border border-neon-cyan/30 rounded-2xl group-hover:border-neon-cyan/60 transition-all duration-500">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center">
                <svg className="w-6 h-6 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="px-2 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30">
                <span className="text-xs font-mono text-neon-cyan">TOTAL</span>
              </div>
            </div>
            <h3 className="text-4xl font-bold text-text-primary mb-2">{certificateStats.total}</h3>
            <p className="text-sm text-text-secondary font-mono">Certificados verificados</p>
          </div>
        </div>

        {/* Frontend Certificates */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
          <div className="relative h-full p-6 bg-glass-fill backdrop-blur-xl border border-neon-purple/30 rounded-2xl group-hover:border-neon-purple/60 transition-all duration-500">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/20 border border-neon-purple/40 flex items-center justify-center">
                <svg className="w-6 h-6 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="px-2 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30">
                <span className="text-xs font-mono text-neon-purple">FRONT</span>
              </div>
            </div>
            <h3 className="text-4xl font-bold text-text-primary mb-2">{certificateStats.byCategory['Frontend']}</h3>
            <p className="text-sm text-text-secondary font-mono">Frontend Development</p>
          </div>
        </div>

        {/* Backend Certificates */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
          <div className="relative h-full p-6 bg-glass-fill backdrop-blur-xl border border-neon-green/30 rounded-2xl group-hover:border-neon-green/60 transition-all duration-500">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-neon-green/20 border border-neon-green/40 flex items-center justify-center">
                <svg className="w-6 h-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div className="px-2 py-1 rounded-full bg-neon-green/10 border border-neon-green/30">
                <span className="text-xs font-mono text-neon-green">BACK</span>
              </div>
            </div>
            <h3 className="text-4xl font-bold text-text-primary mb-2">{certificateStats.byCategory['Backend']}</h3>
            <p className="text-sm text-text-secondary font-mono">Backend Development</p>
          </div>
        </div>

        {/* Database Certificates */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
          <div className="relative h-full p-6 bg-glass-fill backdrop-blur-xl border border-neon-cyan/30 rounded-2xl group-hover:border-neon-cyan/60 transition-all duration-500">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center">
                <svg className="w-6 h-6 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <div className="px-2 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30">
                <span className="text-xs font-mono text-neon-cyan">BD</span>
              </div>
            </div>
            <h3 className="text-4xl font-bold text-text-primary mb-2">{certificateStats.byCategory['Cloud']}</h3>
            <p className="text-sm text-text-secondary font-mono">Databases & Cloud</p>
          </div>
        </div>
      </div>

      {/* Category Breakdown with Bars */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-text-primary font-mono">Especializaciones</h3>
          <button
            onClick={() => window.open(driveUrl, '_blank')}
            className="px-4 py-2 rounded-lg bg-glass-fill border border-glass-border hover:border-neon-cyan/50 flex items-center gap-2 text-text-secondary hover:text-neon-cyan transition-all duration-300 group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.945 1.379l-.652.763c-.033-.006-.073-.007-.11-.011V.335c0-.186-.162-.335-.359-.335l-3.655.001h-.002c-.197 0-.359.15-.359.335V2.14c-.036.004-.076.005-.109.011l-.652-.763C6.64.925 6.015.919 5.542 1.335L.284 5.679c-.471.416-.477 1.047-.021 1.493l4.259 4.163c.456.446 1.218.556 1.803.259l.652-.331c.017.027.033.055.053.08l8.856 8.665c.333.355.833.565 1.313.565h.003c.479 0 .98-.209 1.313-.564l3.844-3.756c.667-.652.667-1.74 0-2.391L12.945 1.379z"/>
            </svg>
            <span className="text-sm font-mono">Ver Certificados</span>
          </button>
        </div>

        <div className="space-y-4">
          {Object.entries(certificateStats.byCategory).map(([category, count], index) => {
            const colors = ['cyan', 'green', 'purple', 'cyan', 'purple', 'green'];
            const color = colors[index % colors.length];
            const percentage = (count / certificateStats.total) * 100;
            
            return (
              <div key={category} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-mono text-text-primary">{category}</span>
                  <span className="text-sm font-mono text-text-secondary">{count} certificates</span>
                </div>
                <div className="relative h-3 bg-glass-fill rounded-full overflow-hidden border border-glass-border group-hover:border-neon-${color}/50 transition-all duration-300">
                  <div
                    className={`h-full bg-gradient-to-r from-neon-${color}/80 to-neon-${color}/40 rounded-full transition-all duration-1000 ease-out relative`}
                    style={{
                      width: `${percentage}%`,
                      boxShadow: `0 0 20px rgba(${color === 'cyan' ? '0, 240, 255' : color === 'green' ? '0, 255, 136' : '178, 75, 243'}, 0.4)`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Holographic Scanner CTA */}
      <HolographicScannerCTA
        totalCount={certificateStats.total}
        driveUrl={driveUrl}
        isScanning={isScanning}
        setIsScanning={setIsScanning}
      />

      {/* Certificate modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}

      <style>{`
        .glitch-text {
          animation: glitch 0.5s infinite;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #00f0ff;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #b24bf3;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-anim {
          0% {
            clip: rect(42px, 9999px, 44px, 0);
          }
          5% {
            clip: rect(12px, 9999px, 59px, 0);
          }
          10% {
            clip: rect(48px, 9999px, 29px, 0);
          }
          15% {
            clip: rect(42px, 9999px, 73px, 0);
          }
          20% {
            clip: rect(63px, 9999px, 27px, 0);
          }
          25% {
            clip: rect(34px, 9999px, 55px, 0);
          }
          30% {
            clip: rect(86px, 9999px, 73px, 0);
          }
          35% {
            clip: rect(20px, 9999px, 20px, 0);
          }
          40% {
            clip: rect(26px, 9999px, 60px, 0);
          }
          45% {
            clip: rect(25px, 9999px, 66px, 0);
          }
          50% {
            clip: rect(57px, 9999px, 98px, 0);
          }
          55% {
            clip: rect(5px, 9999px, 46px, 0);
          }
          60% {
            clip: rect(82px, 9999px, 31px, 0);
          }
          65% {
            clip: rect(54px, 9999px, 27px, 0);
          }
          70% {
            clip: rect(28px, 9999px, 99px, 0);
          }
          75% {
            clip: rect(45px, 9999px, 69px, 0);
          }
          80% {
            clip: rect(23px, 9999px, 85px, 0);
          }
          85% {
            clip: rect(54px, 9999px, 84px, 0);
          }
          90% {
            clip: rect(45px, 9999px, 47px, 0);
          }
          95% {
            clip: rect(37px, 9999px, 20px, 0);
          }
          100% {
            clip: rect(4px, 9999px, 91px, 0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}

interface CertificateCardProps {
  certificate: Certificate;
  onClick: () => void;
}

function CertificateCard({ certificate, onClick }: CertificateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-full h-[400px] bg-glass-fill backdrop-blur-xl rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
      style={{
        border: '2px solid transparent',
        backgroundImage: 'linear-gradient(rgba(10, 10, 15, 0.9), rgba(10, 10, 15, 0.9)), linear-gradient(135deg, #00f0ff, #b24bf3, #00ff88, #00f0ff)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scan line animation */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 240, 255, 0.3) 50%, transparent 100%)',
            animation: 'scan 2s linear infinite',
          }}
        />
      )}

      {/* Holographic glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-neon-green/10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center p-6">
        {/* Shield badge icon */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-green/30 to-neon-cyan/30 blur-xl"
            style={{ animation: 'pulse 2s ease-in-out infinite' }}
          />
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M12 2L4 6V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V6L12 2Z"
                fill="url(#shieldGradient)"
                stroke="currentColor"
                strokeWidth="1"
                className="text-neon-green"
              />
              <defs>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0, 255, 136, 0.3)" />
                  <stop offset="100%" stopColor="rgba(0, 240, 255, 0.3)" />
                </linearGradient>
              </defs>
              {/* Checkmark */}
              <path
                d="M9 12L11 14L15 10"
                stroke="#00ff88"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Certificate name */}
        <h3 className="text-center text-text-primary mb-4 px-2 line-clamp-2">
          {certificate.name}
        </h3>

        {/* Issuer */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-glass-border bg-glass-hover">
            <img
              src={certificate.issuerLogo}
              alt={certificate.issuer}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm">
            <p className="text-text-primary font-medium">{certificate.issuer}</p>
          </div>
        </div>

        {/* Date earned */}
        <p className="text-xs text-text-tertiary mb-6 font-mono">
          Earned: {certificate.dateEarned}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Verified badge */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-neon-green/20 rounded-full blur-lg"
            style={{ animation: 'pulse 2s ease-in-out infinite' }}
          />
          <div className="relative px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center gap-2">
            <svg className="w-4 h-4 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs font-mono text-neon-green font-semibold">VERIFIED</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-space/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1000px] bg-glass-fill backdrop-blur-xl border-2 border-neon-green/30 rounded-2xl shadow-[0_0_80px_rgba(0,255,136,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 10, 15, 0.95), rgba(10, 10, 15, 0.95)), linear-gradient(135deg, #00ff88, #00f0ff)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-lg bg-glass-hover border border-glass-border flex items-center justify-center text-text-secondary hover:text-neon-green hover:border-neon-green/50 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Certificate preview */}
          <div className="flex-1 p-8">
            <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-glass-border bg-space-lighter shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <img
                src={certificate.certificateImage}
                alt={certificate.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-deep-space/20" />
            </div>
          </div>

          {/* Metadata sidebar */}
          <div className="w-full lg:w-80 p-8 space-y-6 border-t lg:border-t-0 lg:border-l border-glass-border">
            {/* Title */}
            <div>
              <Badge variant="green" className="mb-3 font-mono text-xs">
                CREDENTIAL
              </Badge>
              <h3 className="text-text-primary mb-2">
                {certificate.name}
              </h3>
              <p className="text-sm text-text-secondary">{certificate.issuer}</p>
            </div>

            {/* Issue date */}
            <div className="space-y-2">
              <p className="text-xs text-text-tertiary font-mono uppercase">Issue Date</p>
              <p className="text-sm text-text-primary font-mono">{certificate.dateEarned}</p>
            </div>

            {/* Credential ID */}
            <div className="space-y-2">
              <p className="text-xs text-text-tertiary font-mono uppercase">Credential ID</p>
              <p className="text-xs text-neon-green font-mono break-all">{certificate.credentialId}</p>
            </div>

            {/* Skills covered */}
            <div className="space-y-3">
              <p className="text-xs text-text-tertiary font-mono uppercase">Skills Covered</p>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-glass-hover border border-neon-green/30 text-xs font-mono text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-4">
              {certificate.credentialUrl && (
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => window.open(certificate.credentialUrl, '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Credential
                </Button>
              )}
              
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => alert('PDF download would be triggered here')}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

interface HolographicScannerCTAProps {
  totalCount: number;
  driveUrl: string;
  isScanning: boolean;
  setIsScanning: (value: boolean) => void;
}

function HolographicScannerCTA({ totalCount, driveUrl, isScanning, setIsScanning }: HolographicScannerCTAProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(driveUrl, '_blank');
  };

  return (
    <div
      className="relative w-full mt-12 cursor-pointer group"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blurred certificates preview section */}
      <div className="relative h-[200px] rounded-2xl overflow-hidden border-2 border-glass-border group-hover:border-neon-green/50 transition-all duration-500">
        {/* Background with mini certificate previews (blurred) */}
        <div className="absolute inset-0 flex items-center gap-4 px-6 blur-md opacity-30 group-hover:opacity-40 transition-opacity duration-500">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-36 rounded-xl bg-gradient-to-br from-glass-fill to-space-lighter border border-neon-green/20"
              style={{
                transform: `translateY(${Math.sin(i) * 20}px) rotate(${(i % 2 === 0 ? -3 : 3)}deg)`,
              }}
            >
              <div className="w-full h-full p-4 flex flex-col items-center justify-center">
                <div className="w-12 h-12 mb-2">
                  <svg viewBox="0 0 24 24\" fill="none">
                    <path
                      d="M12 2L4 6V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V6L12 2Z"
                      fill="rgba(0, 255, 136, 0.2)"
                      stroke="rgba(0, 255, 136, 0.5)"
                    />
                  </svg>
                </div>
                <div className="w-full h-2 bg-neon-green/20 rounded mb-1" />
                <div className="w-3/4 h-2 bg-neon-cyan/20 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fade overlay (top to bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/80 via-deep-space/60 to-deep-space/80 backdrop-blur-xl" />

        {/* Scanline effect */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 255, 136, 0.3) 50%, transparent 100%)',
              animation: 'scan-horizontal 3s linear infinite',
            }}
          />
        )}

        {/* Holographic grid pattern */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="more-certs-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path
                  d="M 30 0 L 0 0 0 30"
                  fill="none"
                  stroke="rgba(0, 255, 136, 0.4)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#more-certs-grid)" />
          </svg>
        </div>

        {/* Floating blur orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-cyan/20 rounded-full blur-[50px] animate-float-orb" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-neon-green/20 rounded-full blur-[50px] animate-float-orb" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-neon-purple/20 rounded-full blur-[50px] animate-float-orb" style={{ animationDelay: '3s' }} />
        </div>

        {/* Main content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center space-y-4 px-8">
            {/* Icon with glow */}
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-neon-green/40 to-neon-cyan/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"
                  style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                />
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
                    <path
                      d="M3 7C3 5.89543 3.89543 5 5 5H9L11 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V7Z"
                      fill="url(#folderGradientSection)"
                      strokeWidth="1.5"
                      className="text-neon-green"
                    />
                    <defs>
                      <linearGradient id="folderGradientSection" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0, 255, 136, 0.3)" />
                        <stop offset="100%" stopColor="rgba(0, 240, 255, 0.3)" />
                      </linearGradient>
                    </defs>
                    <path d="M8 11h8M8 14h6" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Text content */}
            {/* <div className="space-y-2">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-green to-neon-purple font-bold text-xl animate-gradient-text">
                {totalCount - 3} More Verified Certificates
              </h3>
              <p className="text-text-secondary text-sm font-mono">
                Click to explore complete credentials portfolio
              </p>
            </div> */}

            {/* Animated arrow indicator */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-glass-fill/30 backdrop-blur-xl border border-neon-green/30 group-hover:border-neon-green/60 group-hover:bg-glass-fill/50 transition-all duration-300">
                <svg className="w-4 h-4 text-neon-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.945 1.379l-.652.763c-.033-.006-.073-.007-.11-.011V.335c0-.186-.162-.335-.359-.335l-3.655.001h-.002c-.197 0-.359.15-.359.335V2.14c-.036.004-.076.005-.109.011l-.652-.763C6.64.925 6.015.919 5.542 1.335L.284 5.679c-.471.416-.477 1.047-.021 1.493l4.259 4.163c.456.446 1.218.556 1.803.259l.652-.331c.017.027.033.055.053.08l8.856 8.665c.333.355.833.565 1.313.565h.003c.479 0 .98-.209 1.313-.564l3.844-3.756c.667-.652.667-1.74 0-2.391L12.945 1.379z"/>
                </svg>
                <span className="text-xs font-mono text-neon-green font-semibold">GOOGLE DRIVE</span>
                <svg className="w-4 h-4 text-neon-green animate-bounce-horizontal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border glow effect */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
      </div>

      <style>{`
        @keyframes scan-horizontal {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translate(15px, -15px) scale(1.1);
            opacity: 0.5;
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
            opacity: 0.4;
          }
        }

        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }

        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-text 3s linear infinite;
        }

        .animate-float-orb {
          animation: float-orb 6s ease-in-out infinite;
        }

        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}