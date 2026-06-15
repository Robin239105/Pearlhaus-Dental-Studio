import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import ScriptAccent from '../ui/ScriptAccent';
import StarRating from '../ui/StarRating';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import { testimonials } from '../../data/testimonials';
import { cn } from '../../lib/utils';

export const Testimonials: React.FC = () => {
  const featuredReviews = testimonials.filter((t) => t.featured);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Autoplay function
  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      startAutoplay(); // Restart autoplay timer on interaction
    }
  }, [emblaApi, startAutoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      startAutoplay();
    }
  }, [emblaApi, startAutoplay]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      startAutoplay();
    }
  }, [emblaApi, startAutoplay]);

  return (
    <section
      className="py-20 px-6 md:px-16 bg-surface border-y border-border overflow-hidden z-10"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header with side arrows */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div className="text-center md:text-left space-y-2 max-w-md">
            <SectionLabel>Patient Stories</SectionLabel>
            <h2 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              What Our Patients Say
            </h2>
            <div>
              <ScriptAccent>in their own words</ScriptAccent>
            </div>
          </div>

          {/* Nav Arrows */}
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-mint text-mint hover:bg-mint hover:text-white flex items-center justify-center transition-all duration-300 focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-mint text-mint hover:bg-mint hover:text-white flex items-center justify-center transition-all duration-300 focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex select-none -ml-6">
            {featuredReviews.map((r) => (
              <div key={r.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/80 h-full flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                  
                  {/* Huge Decorative Quote Icon */}
                  <span className="absolute right-4 top-2 font-display text-[120px] font-bold text-mint-pale leading-none select-none pointer-events-none z-0">
                    “
                  </span>

                  <div className="space-y-4 relative z-10 text-left">
                    {/* Stars and platform badge */}
                    <div className="flex justify-between items-center">
                      <StarRating rating={r.rating} />
                      <span className="text-[10px] font-bold text-muted font-body uppercase tracking-wider">
                        {r.platform} Review
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="font-body font-light text-sm text-slate leading-relaxed">
                      {r.text}
                    </p>
                  </div>

                  {/* Patient Info Footer */}
                  <div className="flex items-center space-x-3 pt-6 border-t border-border/40 mt-6 relative z-10 text-left">
                    <Avatar
                      src={r.avatar}
                      alt={r.patientName}
                      size="sm"
                      border
                      className="w-10 h-10 shrink-0"
                    />
                    <div className="font-body">
                      <span className="font-script text-base text-navy font-bold block leading-none">
                        {r.patientName}
                      </span>
                      <span className="text-[10px] text-slate font-semibold block mt-1">
                        Saw: {r.doctorSeen}
                      </span>
                      <Badge variant="pale" className="text-[8px] px-2 py-0 mt-1">
                        {r.treatment}
                      </Badge>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigator */}
        <div className="flex justify-center space-x-2 pt-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === selectedIndex ? 'bg-mint w-5' : 'bg-border hover:bg-mint-light'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
