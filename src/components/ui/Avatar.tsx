import React from 'react';
import { cn } from '../../lib/utils';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  border = true,
  className,
  src,
  alt = 'Avatar',
  ...props
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'rounded-full object-cover',
        sizes[size],
        border && 'border-2 border-border-active bg-white p-[2px]',
        className
      )}
      {...props}
    />
  );
};

export default Avatar;
