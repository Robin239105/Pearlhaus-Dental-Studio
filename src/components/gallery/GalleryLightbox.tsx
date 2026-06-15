import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { useBeforeAfter } from '../../hooks/useBeforeAfter';
import type { GalleryCase } from '../../types';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

interface GalleryLightboxProps {
  caseDetail: GalleryCase | null;
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  caseDetail,
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const { position, containerRef, handleMouseMove, handleTouchMove } = useBeforeAfter(50);

  if (!caseDetail) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Smile Transformation: ${caseDetail.treatment}`}
      size="xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch font-body">
        {/* Large comparison slider (2 cols on desktop) */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[320px] md:h-[450px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-border"
          >
            {/* Before Image */}
            <img
              src={caseDetail.beforeImage}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none filter saturate-[0.3] brightness-[0.85] contrast-[0.9]"
            />
            <div className="absolute left-4 top-4 bg-navy/80 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-bold text-white uppercase tracking-wider z-20">
              Before
            </div>

            {/* After Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
            >
              <img
                src={caseDetail.afterImage}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>
            <div className="absolute right-4 top-4 bg-mint/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-bold text-white uppercase tracking-wider z-20">
              After
            </div>

            {/* Drag Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white z-30 pointer-events-none"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-mint flex items-center justify-center shadow-xl cursor-ew-resize pointer-events-auto hover:scale-105 transition-transform">
                <span className="text-mint text-xs font-bold leading-none select-none">↔</span>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-muted text-center mt-2">
            Drag the handle in the center left or right to reveal the full transformation.
          </p>
        </div>

        {/* Case Details (1 col on desktop) */}
        <div className="flex flex-col justify-between p-2">
          <div className="space-y-5">
            <div>
              <span className="text-[9px] font-bold text-mint bg-mint-pale px-2 py-0.5 rounded uppercase tracking-wider">
                Case Study
              </span>
              <h4 className="text-xl font-display font-bold text-navy mt-2 leading-tight">
                {caseDetail.treatment}
              </h4>
            </div>

            <p className="text-xs text-slate leading-relaxed">
              {caseDetail.description}
            </p>

            <div className="border-t border-border/60 pt-4 space-y-2.5 text-xs text-slate">
              <div className="flex items-center">
                <User className="w-4 h-4 text-mint mr-2 shrink-0" />
                <span>Patient Age: <strong className="text-navy">{caseDetail.patientAge} Years</strong></span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-mint mr-2 shrink-0" />
                <span className="line-clamp-1">{caseDetail.duration}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 text-mint mr-2 shrink-0" />
                <span>Dentist: <strong className="text-navy">{caseDetail.doctor}</strong></span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {caseDetail.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface text-navy font-semibold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <Button
              fullWidth
              onClick={() => {
                onClose();
                navigate(`/booking?treatment=${caseDetail.treatmentSlug}`);
              }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book This Treatment
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryLightbox;
