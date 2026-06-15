import React from 'react';
import { cn } from '../../lib/utils';

interface SectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={cn(
        'text-xs font-semibold tracking-[0.2em] text-mint uppercase font-body mb-2',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default SectionLabel;
