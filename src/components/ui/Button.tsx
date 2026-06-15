import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-body font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint/50';

  const variants = {
    primary: 'bg-mint text-white hover:bg-mint-dark shadow-sm hover:shadow-md border border-transparent shadow-mint/15',
    secondary: 'bg-navy text-white hover:bg-navy/95 shadow-sm hover:shadow-md border border-transparent',
    outline: 'border border-border text-navy bg-white hover:bg-surface hover:border-mint-light',
    text: 'text-mint hover:text-mint-dark bg-transparent border-transparent p-0 hover:underline',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 tracking-wide uppercase',
    md: 'text-sm px-6 py-3 tracking-wide',
    lg: 'text-base px-8 py-4 tracking-wide font-semibold',
  };

  return (
    <motion.button
      whileHover={{ y: variant !== 'text' ? -2 : 0 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        variant !== 'text' && sizes[size],
        variant === 'text' && 'inline-flex',
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
