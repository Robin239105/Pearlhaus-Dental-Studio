import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Sparkles, Check, Clock, ShieldAlert, Layers, HelpCircle, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Accordion from '../components/ui/Accordion';
import BeforeAfterCard from '../components/gallery/BeforeAfterCard';
import { treatments } from '../data/treatments';
import { gallery } from '../data/gallery';

export const TreatmentDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find treatment
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    // Redirect to not found if no match
    return (
      <PageWrapper>
        <div className="py-20 text-center font-body text-slate max-w-md mx-auto space-y-4">
          <ShieldAlert className="w-12 h-12 text-error mx-auto animate-bounce" />
          <h2 className="font-display font-semibold text-navy text-2xl">Treatment Not Found</h2>
          <p className="text-xs text-slate">The treatment you are looking for does not exist or has been moved.</p>
          <Link to="/treatments" className="text-mint font-bold hover:underline block pt-2">
            View All Treatments
          </Link>
        </div>
      </PageWrapper>
    );
  }

  // Find related treatments (filter slugs)
  const relatedList = treatments.filter((t) => treatment.relatedTreatments.includes(t.slug)).slice(0, 3);

  // Find before/after cases for this treatment
  const treatmentCases = gallery.filter((caseItem) => caseItem.treatmentSlug === treatment.slug).slice(0, 3);

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 w-1/3 h-full z-0 opacity-15">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover grayscale pointer-events-none select-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent z-5" />

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <Breadcrumb
            items={[
              { label: 'Treatments', path: '/treatments' },
              { label: treatment.title }
            ]}
          />
          <div className="space-y-2 max-w-xl">
            <Badge variant="pale" className="text-[9px]">
              {treatment.category}
            </Badge>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              {treatment.title}
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              {treatment.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* 2. MAIN 65/35 GRID */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Clinical details (65%) */}
        <div className="lg:col-span-8 space-y-12 text-left">
          
          {/* Paragraphs */}
          <div className="space-y-5 text-sm md:text-base leading-relaxed text-slate font-body font-light">
            {treatment.fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Benefits Checklist */}
          <div className="space-y-5 border-t border-border/60 pt-8">
            <h3 className="font-display font-semibold text-navy text-xl md:text-2xl">
              Key Benefits of This Treatment
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {treatment.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3 text-xs md:text-sm font-body text-slate">
                  <div className="w-5 h-5 rounded-full bg-mint-pale text-mint flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step-by-Step Process */}
          <div className="space-y-6 border-t border-border/60 pt-8">
            <h3 className="font-display font-semibold text-navy text-xl md:text-2xl">
              What to Expect: The Process
            </h3>
            <div className="relative border-l border-border pl-6 space-y-8 ml-3">
              {treatment.process.map((p, index) => (
                <div key={index} className="relative">
                  {/* Circle number marker */}
                  <div className="absolute left-[-35px] top-0 w-[18px] h-[18px] rounded-full bg-mint text-white font-body text-[10px] font-bold flex items-center justify-center border border-white">
                    {p.step}
                  </div>
                  <div className="space-y-1 font-body">
                    <h4 className="font-semibold text-navy text-sm">{p.title}</h4>
                    <p className="text-xs text-slate leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="space-y-5 border-t border-border/60 pt-8">
            <h3 className="font-display font-semibold text-navy text-xl md:text-2xl">
              Frequently Asked Questions
            </h3>
            <div className="space-y-2">
              {treatment.faqs.map((faq, index) => (
                <Accordion key={index} title={faq.q}>
                  {faq.a}
                </Accordion>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sidebar: Sticky Booking Card (35%) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-white p-6 rounded-2xl border border-border shadow-sm space-y-6 text-left font-body">
            <div>
              <span className="text-[10px] font-bold text-mint tracking-wider uppercase block">
                Estimated Price
              </span>
              <strong className="text-navy font-bold text-2xl mt-1 block">
                {treatment.price}
              </strong>
              <span className="text-[10px] text-muted block mt-0.5">
                {treatment.priceNote}
              </span>
            </div>

            <div className="border-t border-border/60 pt-4 space-y-3.5 text-xs text-slate">
              <div className="flex justify-between items-center">
                <span className="flex items-center text-muted">
                  <Clock className="w-4 h-4 mr-2 text-mint" />
                  <span>Duration</span>
                </span>
                <span className="font-semibold text-navy">{treatment.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center text-muted">
                  <Layers className="w-4 h-4 mr-2 text-mint" />
                  <span>Recovery</span>
                </span>
                <span className="font-semibold text-navy">{treatment.recovery}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center text-muted">
                  <ShieldAlert className="w-4 h-4 mr-2 text-mint" />
                  <span>Pain Level</span>
                </span>
                <span className="font-semibold text-navy">{treatment.painLevel}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center text-muted">
                  <Calendar className="w-4 h-4 mr-2 text-mint" />
                  <span>Sessions</span>
                </span>
                <span className="font-semibold text-navy">{treatment.sessions}</span>
              </div>
            </div>

            <Button
              fullWidth
              onClick={() => navigate(`/booking?treatment=${treatment.slug}`)}
            >
              Book This Treatment
            </Button>

            <div className="bg-surface p-3.5 rounded-lg border border-border text-[11px] text-slate leading-relaxed">
              <strong>Finance Available:</strong> Spread the cost over 3-24 months with 0% interest-free plans through our partners. <Link to="/finance" className="text-mint font-bold hover:underline">Calculate Repayments</Link>.
            </div>

            <div className="text-center pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center text-xs font-bold text-slate hover:text-navy transition-colors uppercase tracking-wider"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                <span>Ask a Question</span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* 3. BEFORE / AFTER CASE STUDIES SECTION */}
      {treatmentCases.length > 0 && (
        <div className="bg-surface border-t border-border py-16 px-6 md:px-16 text-center">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-2 max-w-lg mx-auto">
              <SectionLabel>Real Results</SectionLabel>
              <h2 className="font-display font-light text-navy text-2xl md:text-4xl">
                Smile Transformations: {treatment.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {treatmentCases.map((c) => (
                <BeforeAfterCard
                  key={c.id}
                  beforeImage={c.beforeImage}
                  afterImage={c.afterImage}
                  treatmentName={c.treatment}
                  doctorName={c.doctor}
                  duration={c.duration}
                  className="bg-white shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. RELATED TREATMENTS GRID */}
      {relatedList.length > 0 && (
        <div className="bg-white border-t border-border py-16 px-6 md:px-16 text-center">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-2 max-w-lg mx-auto">
              <SectionLabel>Explore Options</SectionLabel>
              <h2 className="font-display font-light text-navy text-2xl md:text-4xl">
                Related Dental Treatments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedList.map((t) => (
                <div
                  key={t.id}
                  className="bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow hover:border-mint/20 transition-all text-left flex flex-col justify-between"
                >
                  <div className="space-y-3 font-body">
                    <span className="text-[9px] font-bold text-mint uppercase tracking-wider block">
                      {t.category}
                    </span>
                    <h4 className="font-display font-bold text-navy text-base leading-tight">
                      {t.title}
                    </h4>
                    <p className="text-xs text-slate line-clamp-2 leading-relaxed">
                      {t.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between">
                    <Link
                      to={`/treatments/${t.slug}`}
                      className="text-xs font-bold text-mint hover:underline inline-flex items-center"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                    <span className="text-xs font-bold text-navy font-body">{t.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default TreatmentDetail;
