import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionLabel from '../components/ui/SectionLabel';

export const Terms: React.FC = () => {
  return (
    <PageWrapper>
      {/* Header Banner */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Legal Info', path: '#' }, { label: 'Terms of Service' }]} />
          <div className="space-y-2 text-left">
            <SectionLabel>Clinic Agreements</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Terms of <span className="font-semibold">Service.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Last updated: June 15, 2026. Please read our clinical terms of service before booking a consultation.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 py-16 max-w-3xl mx-auto text-left font-body text-slate text-sm leading-relaxed space-y-8 font-light">
        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">1. Scheduling & Booking Policy</h2>
          <p>
            By booking a dental appointment online or by phone with Pearlhaus Dental Studio, you agree to secure your slot and arrive 10 minutes prior to your scheduled time. First-time patients are required to complete online patient intake forms prior to their visit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">2. 24-Hour Cancellation Policy</h2>
          <p>
            We reserve dedicated clinical staff and rooms for each scheduled patient. If you need to cancel or reschedule, we kindly request a minimum of **24 hours notice**. Cancellations or failures to attend without notice may incur a standard $50 clinical booking fee.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">3. Treatment Plans & Estimates</h2>
          <p>
            Clinical treatment plans, cost estimates, and payment breakdowns provided by our dentists are valid for **90 days** from the diagnostic examination date. Adjustments may be made if your underlying oral health changes significantly prior to commencing treatment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">4. Payment Terms</h2>
          <p>
            Payment in full is required on the day of treatment. We accept major credit/debit cards, cash, and instant private health claims via HICAPS. Flexible repayments through our partner networks (Zip Money, Afterpay) must be set up and approved prior to your clinical procedure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-semibold text-navy text-lg">5. Clinical Results Disclaimer</h2>
          <p>
            Medical and cosmetic dentistry outcomes vary based on individual biological factors, bone structure, and post-operative home care hygiene. While our practitioners use extreme clinical care and precision, no guarantee of absolute aesthetic perfection is implied.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Terms;
