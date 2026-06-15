import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionLabel from '../components/ui/SectionLabel';

export const Privacy: React.FC = () => {
  return (
    <PageWrapper>
      {/* Header Banner */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Legal Info', path: '#' }, { label: 'Privacy Policy' }]} />
          <div className="space-y-2 text-left">
            <SectionLabel>Patient Confidentiality</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Privacy <span className="font-semibold">Policy.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Last updated: June 15, 2026. Your privacy and medical records security are paramount to us at Pearlhaus.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 py-16 max-w-3xl mx-auto text-left font-body text-slate text-sm leading-relaxed space-y-8 font-light">
        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">1. Healthcare Record Privacy</h2>
          <p>
            At Pearlhaus Dental Studio, we manage your personal and health information in strict accordance with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth), the Health Records and Information Privacy Act 2002 (NSW), and the clinical guidelines of the Australian Dental Association (ADA) and AHPRA.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">2. Information Collection</h2>
          <p>
            We collect health information directly from you (via online registration forms, consultations, and intake questionnaires) necessary to provide safe dental treatments. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Contact details (name, email, phone number, address).</li>
            <li>Medical history (conditions, allergies, current medications, clinical scans, X-rays).</li>
            <li>Billing details, private health fund card identifiers, and transaction records.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">3. Disclosure & Use</h2>
          <p>
            Your health and personal records are kept strictly confidential. We only disclose this information for:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Direct clinical treatments and coordinating care with specialist dental professionals.</li>
            <li>Processing private health insurance claims via HICAPS on your behalf.</li>
            <li>Compliance with legal or dental board mandates.</li>
          </ul>
          <p>
            We will never sell or disclose your clinical details or contact information to third-party marketing entities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">4. Data Security & Storage</h2>
          <p>
            All electronic patient files, digital 3D scans, and treatment notes are stored securely on encrypted, local cloud databases with restricted personnel access controls. Paper documents are kept in secure physical lockers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">5. Accessing Your Records</h2>
          <p>
            You have the right to request access to your dental files, clinical notes, and X-rays. Please contact our Practice Manager at <a href="mailto:hello@pearlhaus.com.au" className="text-mint font-bold hover:underline">hello@pearlhaus.com.au</a> to arrange a formal request copy.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Privacy;
