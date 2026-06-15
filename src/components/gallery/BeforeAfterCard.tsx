import React from 'react';
import { useBeforeAfter } from '../../hooks/useBeforeAfter';
import { cn } from '../../lib/utils';

interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  treatmentName: string;
  doctorName?: string;
  duration?: string;
  className?: string;
  onClick?: () => void;
}

export const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({
  beforeImage,
  afterImage,
  treatmentName,
  doctorName,
  duration,
  className,
  onClick,
}) => {
  const { position, containerRef, handleMouseMove, handleTouchMove } = useBeforeAfter(50);

  return (
    <div
      className={cn(
        'flex flex-col bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300',
        className
      )}
    >
      {/* Slider Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[260px] md:h-[300px] overflow-hidden select-none cursor-ew-resize"
      >
        {/* Before Image (underneath) */}
        <img
          src={beforeImage}
          alt="Before treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none filter saturate-[0.3] brightness-[0.85] contrast-[0.9]"
        />
        <div className="absolute left-3 top-3 bg-navy/80 backdrop-blur-sm px-2.5 py-1 rounded text-[9px] font-bold text-white uppercase tracking-wider font-body z-20">
          Before
        </div>

        {/* After Image (clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
        >
          <img
            src={afterImage}
            alt="After treatment"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>
        <div className="absolute right-3 top-3 bg-mint/90 backdrop-blur-sm px-2.5 py-1 rounded text-[9px] font-bold text-white uppercase tracking-wider font-body z-20">
          After
        </div>

        {/* Draggable Divider Line and Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-30 pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-mint flex items-center justify-center shadow-lg cursor-ew-resize pointer-events-auto">
            <span className="text-mint text-[10px] font-bold leading-none select-none font-body">↔</span>
          </div>
        </div>
      </div>

      {/* Detail info */}
      <div className="p-4 flex-1 flex flex-col justify-between font-body">
        <div>
          <h4 className="font-bold text-navy text-xs uppercase tracking-wide">
            {treatmentName}
          </h4>
          {doctorName && (
            <p className="text-[11px] text-slate mt-1 leading-normal">
              Completed by <strong className="text-mint-dark">{doctorName}</strong> {duration && `• ${duration}`}
            </p>
          )}
        </div>
        
        {onClick && (
          <button
            type="button"
            onClick={onClick}
            className="text-[10px] font-bold text-mint hover:text-mint-dark uppercase tracking-wider mt-3 inline-flex items-center self-start"
          >
            Open Fullscreen →
          </button>
        )}
      </div>
    </div>
  );
};

export default BeforeAfterCard;
