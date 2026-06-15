import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import SectionLabel from '../ui/SectionLabel';
import ScriptAccent from '../ui/ScriptAccent';
import Button from '../ui/Button';
import BeforeAfterCard from '../gallery/BeforeAfterCard';
import { gallery } from '../../data/gallery';
import { cn } from '../../lib/utils';

export const BeforeAfterSlider: React.FC = () => {
  const navigate = useNavigate();
  const featuredCases = gallery.filter((item) => item.featured).slice(0, 6);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="py-20 px-6 md:px-16 bg-white overflow-hidden z-10">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        {/* Title Block */}
        <div className="space-y-2 max-w-lg mx-auto">
          <SectionLabel>Real Results</SectionLabel>
          <h2 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
            Smile Transformations
          </h2>
          <div>
            <ScriptAccent>that change lives</ScriptAccent>
          </div>
          <p className="font-body font-light text-xs text-slate pt-2">
            Every smile tells a story. Here are some of our favourite patient transformations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex select-none">
              {featuredCases.map((c) => (
                <div key={c.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <BeforeAfterCard
                    beforeImage={c.beforeImage}
                    afterImage={c.afterImage}
                    treatmentName={c.treatment}
                    doctorName={c.doctor}
                    duration={c.duration}
                    className="max-w-2xl mx-auto shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-300',
                  index === selectedIndex
                    ? 'bg-mint w-6'
                    : 'bg-border hover:bg-mint-light'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Full Gallery CTA */}
        <div className="pt-4">
          <Button variant="outline" onClick={() => navigate('/gallery')}>
            View Full smile Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
