import React from 'react';

export type BadgeVariant = 'default' | 'cyan' | 'purple' | 'green' | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export function Badge({ variant = 'default', children, className = '', ...props }: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all duration-200';
  
  const variantStyles = {
    default: 'bg-glass-fill text-text-primary border border-glass-border backdrop-blur-xl',
    cyan: 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 backdrop-blur-xl shadow-[0_0_12px_rgba(0,240,255,0.2)]',
    purple: 'bg-neon-purple/10 text-neon-purple border border-neon-purple/30 backdrop-blur-xl shadow-[0_0_12px_rgba(178,75,243,0.2)]',
    green: 'bg-neon-green/10 text-neon-green border border-neon-green/30 backdrop-blur-xl shadow-[0_0_12px_rgba(0,255,136,0.2)]',
    outline: 'bg-transparent text-text-primary border border-glass-border hover:bg-glass-fill hover:border-neon-cyan/30',
  };
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}
