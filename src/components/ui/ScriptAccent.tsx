import React from 'react';
import { cn } from '../../lib/utils';

interface ScriptAccentProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const ScriptAccent: React.FC<ScriptAccentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'font-script text-2xl text-mint-light italic font-normal tracking-wide',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default ScriptAccent;
