import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StarRatingProps {
  rating?: number;
  maxStars?: number;
  className?: string;
  starClassName?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating = 5,
  maxStars = 5,
  className,
  starClassName,
}) => {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: maxStars }).map((_, index) => {
        const starIndex = index + 1;
        const isFilled = starIndex <= Math.floor(rating);
        const isHalf = !isFilled && starIndex - 0.5 <= rating;

        return (
          <Star
            key={index}
            className={cn(
              'w-4 h-4 transition-transform duration-300 hover:scale-115',
              isFilled && 'text-amber-400 fill-amber-400',
              isHalf && 'text-amber-400 fill-amber-400 opacity-80',
              !isFilled && !isHalf && 'text-border fill-transparent',
              starClassName
            )}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
