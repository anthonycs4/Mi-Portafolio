import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';
  
  const variants = {
    primary: 'bg-neon-cyan text-deep-space hover:shadow-[0_0_24px_rgba(0,240,255,0.6)] hover:scale-105 active:scale-95',
    secondary: 'bg-glass-fill border border-glass-border text-text-primary hover:bg-glass-hover hover:border-neon-cyan/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]',
    ghost: 'text-text-primary hover:bg-glass-fill hover:shadow-[0_0_16px_rgba(0,240,255,0.1)]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} group relative overflow-hidden cursor-magnetic`}
      disabled={disabled}
      {...props}
    >
      {/* Glow pulse on hover */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-neon-cyan/20 blur-xl opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-opacity duration-300" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}