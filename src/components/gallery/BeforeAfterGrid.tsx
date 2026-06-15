import React, { useState } from 'react';
import { gallery } from '../../data/gallery';
import type { GalleryCase } from '../../types';
import BeforeAfterCard from './BeforeAfterCard';
import GalleryLightbox from './GalleryLightbox';
import { cn } from '../../lib/utils';

interface BeforeAfterGridProps {
  limit?: number;
  featuredOnly?: boolean;
}

export const BeforeAfterGrid: React.FC<BeforeAfterGridProps> = ({
  limit,
  featuredOnly = false,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedCase, setSelectedCase] = useState<GalleryCase | null>(null);

  const filters = ['All', 'Cosmetic', 'Orthodontics', 'Implants', 'General'];

  // Filter cases
  const filteredCases = gallery.filter((item) => {
    // Check featured criteria
    if (featuredOnly && !item.featured) return false;
    
    // Check tag filter
    if (activeFilter === 'All') return true;
    return item.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());
  });

  // Apply limit if specified
  const displayedCases = limit ? filteredCases.slice(0, limit) : filteredCases;

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs (Hide if limit is used or only featured cases are showing) */}
      {!featuredOnly && !limit && (
        <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-6">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={cn(
                'px-5 py-2.5 text-xs font-semibold font-body tracking-wider uppercase rounded-full border transition-all duration-300',
                activeFilter === f
                  ? 'bg-mint text-white border-mint shadow-md shadow-mint/15'
                  : 'bg-white text-navy border-border hover:border-mint hover:text-mint'
              )}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {displayedCases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCases.map((c) => (
            <BeforeAfterCard
              key={c.id}
              beforeImage={c.beforeImage}
              afterImage={c.afterImage}
              treatmentName={c.treatment}
              doctorName={c.doctor}
              duration={c.duration}
              onClick={() => setSelectedCase(c)}
              className="h-full"
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-slate font-body border-2 border-dashed border-border rounded-2xl bg-surface/40">
          No before/after cases available for "{activeFilter}".
        </div>
      )}

      {/* Lightbox Modal */}
      <GalleryLightbox
        caseDetail={selectedCase}
        isOpen={selectedCase !== null}
        onClose={() => setSelectedCase(null)}
      />
    </div>
  );
};

export default BeforeAfterGrid;
