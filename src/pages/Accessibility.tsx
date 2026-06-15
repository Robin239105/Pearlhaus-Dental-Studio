import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionLabel from '../components/ui/SectionLabel';

export const Accessibility: React.FC = () => {
  return (
    <PageWrapper>
      {/* Header Banner */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Legal Info', path: '#' }, { label: 'Accessibility Statement' }]} />
          <div className="space-y-2 text-left">
            <SectionLabel>Inclusive Standards</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Accessibility <span className="font-semibold">Statement.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              We are committed to providing a digital experience that is accessible to all individuals, including those with disabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 py-16 max-w-3xl mx-auto text-left font-body text-slate text-sm leading-relaxed space-y-8 font-light">
        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">Our Commitment</h2>
          <p>
            At Pearlhaus Dental Studio, we believe that everyone has the right to browse our clinical information, book consultations, and read patient guides with complete ease. We are actively working to ensure our website is accessible to and usable by all people, regardless of ability or technology.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. 
          </p>
          <p>
            Our website is designed and optimized to target conformance with **WCAG 2.1 Level AA** standards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">Accessibility Features Included</h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>**Keyboard Navigation**: Full access to interactive elements, headers, and inputs using standard tab keys.</li>
            <li>**Accessible Color Contrast**: Text matches WCAG AAA ratios (4.5:1 minimum) to guarantee readability for visually impaired visitors.</li>
            <li>**Focus Rings**: Clear visible focus states around elements for individuals navigating without a mouse.</li>
            <li>**Screen Reader Optimizations**: Structured semantic HTML5 elements and descriptively labeled buttons.</li>
            <li>**Reduced Motion**: Avoids heavy, flashing, or motion-heavy animations that could trigger seizures or vestibular distress.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">Contact Us for Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of the Pearlhaus website. If you encounter any accessibility barriers or have suggestions for improvement, please reach out to us at:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li>Email: <a href="mailto:accessibility@pearlhaus.com.au" className="text-mint font-bold hover:underline">accessibility@pearlhaus.com.au</a></li>
            <li>Phone: <a href="tel:+61290001420" className="text-mint font-bold hover:underline">+61 2 9000 1420</a></li>
          </ul>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Accessibility;
