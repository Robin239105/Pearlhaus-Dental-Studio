import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import BeforeAfterGrid from '../components/gallery/BeforeAfterGrid';

export const Gallery: React.FC = () => {
  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Smile Gallery' }]} />
          <div className="space-y-2 max-w-2xl text-left">
            <SectionLabel>Smile Transformations</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Our Smile Gallery:{' '}
              <span className="block font-semibold">Real Patients. Real Results.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Every smile is unique. Browse through our clinical cases to see how our cosmetic, implant, and aligner treatments have transformed teeth and restored confidence.
            </p>
          </div>
        </div>
      </div>

      {/* 2. FILTERABLE GRID */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto">
        <BeforeAfterGrid />
      </div>

    </PageWrapper>
  );
};

export default Gallery;
