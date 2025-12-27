import { useState, useEffect } from 'react';
import { Button } from './Button';
import { Input, Textarea } from './Input';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Signal transmitted successfully! 📡');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: 'https://www.linkedin.com/in/anthony-cano-sucso-315717297/',
      color: '#0077b5',
      glowColor: 'rgba(0, 119, 181, 0.4)',
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      // ✅ importante: mailto para que funcione
      href: 'mailto:sucsoanthony@gmail.com',
      color: '#00f0ff',
      glowColor: 'rgba(0, 240, 255, 0.4)',
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.82 11.82 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.3-1.64a11.9 11.9 0 005.76 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44zM12.06 21.5c-1.84 0-3.65-.49-5.24-1.42l-.38-.23-3.74.97 1-3.64-.25-.38a9.42 9.42 0 01-1.45-5c0-5.22 4.25-9.47 9.48-9.47a9.4 9.4 0 016.7 2.78 9.4 9.4 0 012.78 6.69c0 5.23-4.25 9.48-9.47 9.48zm5.2-7.1c-.28-.14-1.64-.8-1.9-.9-.26-.1-.44-.14-.63.14-.19.28-.73.9-.9 1.09-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.49h-.54c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.37s1.01 2.75 1.15 2.94c.14.19 1.99 3.04 4.82 4.27.67.29 1.2.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.31.23-.63.23-1.17.16-1.28-.07-.11-.26-.18-.54-.32z"/>
        </svg>
      ),
      href: 'https://wa.me/51943974880?text=Hola%20Anthony%2C%20vi%20tu%20portafolio%20y%20quiero%20contactarte',
      color: '#25D366',
      glowColor: 'rgba(37, 211, 102, 0.4)',
    },
  ];

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[600px] flex items-center justify-center py-14 sm:py-20 overflow-hidden">
      <SignalBackground />

      <div className="relative z-10 w-full max-w-[600px] px-4 sm:px-8">
        <div
          className="relative bg-glass-fill backdrop-blur-xl rounded-2xl border border-glass-border overflow-hidden"
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}
        >
          {/* Header */}
          <div className="p-5 sm:p-8 pb-5 sm:pb-6 text-center border-b border-glass-border">
            <h2 className={`mb-3 ${isGlitching ? 'glitch-text' : ''}`} data-text="SEND TRANSMISSION">
              Enviar Mensaje
            </h2>

            {/* ✅ Mobile: stack / Desktop: row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                Abierto a oportunidades
              </span>
              <span className="hidden sm:inline text-text-tertiary">•</span>
              <span>Trabajo remoto</span>
            </div>
          </div>

          {/* Contact method buttons */}
          <div className="p-4 sm:p-8 space-y-3">
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full p-3 sm:p-4 rounded-xl bg-glass-hover border border-glass-border transition-all duration-300 hover:border-opacity-50 hover:-translate-y-1"
                style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = method.color;
                  e.currentTarget.style.boxShadow = `0 0 24px ${method.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  {/* ✅ icon responsive */}
                  <div
                    className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-text-secondary group-hover:text-white transition-colors duration-300"
                    style={{
                      backgroundColor: `${method.color}20`,
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: `${method.color}30`,
                    }}
                  >
                    {method.icon}
                  </div>

                  {/* ✅ text truncate (no overflow) */}
                  <span className="min-w-0 truncate text-text-primary font-medium group-hover:text-white transition-colors duration-300">
                    {method.name}
                  </span>

                  <svg
                    className="shrink-0 w-5 h-5 ml-auto text-text-tertiary group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* (Opcional) Si luego reactivas el form, aquí va el divider */}
          {/* <div className="border-t border-glass-border" /> */}
        </div>
      </div>

      <style>{`
        .glitch-text { animation: glitch 0.3s infinite; }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #00f0ff;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 0.3s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #b24bf3;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 0.25s infinite linear alternate-reverse;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-anim {
          0% { clip: rect(42px, 9999px, 44px, 0); }
          10% { clip: rect(12px, 9999px, 59px, 0); }
          20% { clip: rect(48px, 9999px, 29px, 0); }
          30% { clip: rect(42px, 9999px, 73px, 0); }
          40% { clip: rect(63px, 9999px, 27px, 0); }
          50% { clip: rect(34px, 9999px, 55px, 0); }
          60% { clip: rect(86px, 9999px, 73px, 0); }
          70% { clip: rect(20px, 9999px, 20px, 0); }
          80% { clip: rect(26px, 9999px, 60px, 0); }
          90% { clip: rect(25px, 9999px, 66px, 0); }
          100% { clip: rect(57px, 9999px, 98px, 0); }
        }
      `}</style>
    </section>
  );
}

function SignalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent" />

      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="grid-fade">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-grid)" mask="url(#grid-mask)" />
      </svg>

      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 240, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(0, 240, 255, 0)" />
          </linearGradient>
        </defs>

        <circle cx="50%" cy="50%" r="100" fill="none" stroke="url(#wave-gradient)" strokeWidth="2" opacity="0.4">
          <animate attributeName="r" from="100" to="600" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.4" to="0" dur="4s" repeatCount="indefinite" />
        </circle>

        <circle cx="50%" cy="50%" r="100" fill="none" stroke="url(#wave-gradient)" strokeWidth="2" opacity="0.4">
          <animate attributeName="r" from="100" to="600" dur="4s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.4" to="0" dur="4s" begin="1s" repeatCount="indefinite" />
        </circle>

        <circle cx="50%" cy="50%" r="100" fill="none" stroke="url(#wave-gradient)" strokeWidth="2" opacity="0.4">
          <animate attributeName="r" from="100" to="600" dur="4s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.4" to="0" dur="4s" begin="2s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* ✅ Mobile-safe particles: evita Math.random() en render (SSR issues) */}
      {/* Si no usas SSR, puedes dejar tu versión. */}
      <style>{`
        .bg-gradient-radial { background: radial-gradient(circle at center, var(--tw-gradient-stops)); }
      `}</style>
    </div>
  );
}
export function Footer() {
  // ✅ mismos social/links que tu contactMethods
  const footerLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: 'https://www.linkedin.com/in/anthony-cano-sucso-315717297/',
      color: '#0077b5',
      glowColor: 'rgba(0, 119, 181, 0.4)',
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      href: 'mailto:sucsoanthony@gmail.com',
      color: '#00f0ff',
      glowColor: 'rgba(0, 240, 255, 0.4)',
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.82 11.82 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.3-1.64a11.9 11.9 0 005.76 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44zM12.06 21.5c-1.84 0-3.65-.49-5.24-1.42l-.38-.23-3.74.97 1-3.64-.25-.38a9.42 9.42 0 01-1.45-5c0-5.22 4.25-9.47 9.48-9.47a9.4 9.4 0 016.7 2.78 9.4 9.4 0 012.78 6.69c0 5.23-4.25 9.48-9.47 9.48zm5.2-7.1c-.28-.14-1.64-.8-1.9-.9-.26-.1-.44-.14-.63.14-.19.28-.73.9-.9 1.09-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.49h-.54c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.37s1.01 2.75 1.15 2.94c.14.19 1.99 3.04 4.82 4.27.67.29 1.2.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.31.23-.63.23-1.17.16-1.28-.07-.11-.26-.18-.54-.32z" />
        </svg>
      ),
      href: 'https://wa.me/51943974880?text=Hola%20Anthony%2C%20vi%20tu%20portafolio%20y%20quiero%20contactarte',
      color: '#25D366',
      glowColor: 'rgba(37, 211, 102, 0.4)',
    },
  ];

  return (
    <footer className="relative border-t border-glass-border bg-deep-space/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-7 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-sm text-text-secondary font-mono">
              Built by <span className="text-neon-cyan">Anthony Cano Sucso</span>
            </p>
            <p className="text-xs text-text-tertiary mt-1">
              Deployed on <span className="text-text-secondary">Netlify</span> • © 2025
            </p>
          </div>

          {/* ✅ Socials from contactMethods */}
          <div className="flex items-center gap-3 sm:gap-4">
            {footerLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-glass-hover border border-glass-border flex items-center justify-center text-text-tertiary transition-all duration-300 hover:text-white hover:border-opacity-50"
                style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.boxShadow = `0 0 20px ${social.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="mt-6 pt-6 border-t border-glass-border flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <p className="font-mono text-xs text-text-tertiary">ALL SYSTEMS OPERATIONAL</p>
        </div>
      </div>
    </footer>
  );
}
