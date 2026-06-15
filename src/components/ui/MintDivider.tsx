import React from 'react';
import { cn } from '../../lib/utils';

interface MintDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

export const MintDivider: React.FC<MintDividerProps> = ({
  centered = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'h-[2px] bg-gradient-to-r from-mint/10 via-mint to-mint/10 w-24 my-6',
        centered && 'mx-auto',
        className
      )}
      {...props}
    />
  );
};

export default MintDivider;
