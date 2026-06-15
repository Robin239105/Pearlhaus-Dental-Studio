import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'mint' | 'navy' | 'outline' | 'error' | 'success' | 'pale';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'mint',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-body tracking-wider uppercase';
  
  const variants = {
    mint: 'bg-mint text-white',
    navy: 'bg-navy text-white',
    outline: 'border border-border text-navy bg-white',
    error: 'bg-error/10 text-error border border-error/20',
    success: 'bg-mint/10 text-mint-dark border border-mint/20',
    pale: 'bg-mint-pale text-mint-dark',
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
