import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-glass-fill border border-glass-border rounded-lg text-text-primary placeholder:text-text-tertiary 
          focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_20px_rgba(0,240,255,0.3)] 
          transition-all duration-300
          focus:animate-border-glow
          ${error ? 'border-red-500 focus:border-red-500 animate-shake' : ''} 
          ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-400 flex items-center gap-1 animate-slide-in">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
      <style>{`
        @keyframes border-glow {
          0% {
            box-shadow: 0 0 0 rgba(0, 240, 255, 0);
          }
          100% {
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-border-glow {
          animation: border-glow 0.3s ease-out;
        }

        .animate-shake {
          animation: shake 0.5s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 bg-glass-fill border border-glass-border rounded-lg text-text-primary placeholder:text-text-tertiary 
          focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_20px_rgba(0,240,255,0.3)] 
          transition-all duration-300 resize-none
          focus:animate-border-glow
          ${error ? 'border-red-500 focus:border-red-500 animate-shake' : ''} 
          ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-400 flex items-center gap-1 animate-slide-in">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
      <style>{`
        @keyframes border-glow {
          0% {
            box-shadow: 0 0 0 rgba(0, 240, 255, 0);
          }
          100% {
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-border-glow {
          animation: border-glow 0.3s ease-out;
        }

        .animate-shake {
          animation: shake 0.5s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}