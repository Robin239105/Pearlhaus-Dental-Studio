import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, Check, Clock, ChevronRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import BeforeAfterGrid from '../components/gallery/BeforeAfterGrid';
import { treatments } from '../data/treatments';
import { team } from '../data/team';
import Avatar from '../components/ui/Avatar';

export const CosmeticDentistry: React.FC = () => {
  const navigate = useNavigate();
  const categoryName = 'Cosmetic Dentistry';

  // Filter treatments
  const categoryTreatments = treatments.filter((t) => t.category === categoryName);

  // Filter cosmetic dentists ( Charlotte & Priya )
  const categoryDentists = team.filter((d) => d.specialties.includes('Cosmetic Dentistry') || d.specialties.includes('Smile Design'));

  const faqsList = [
    {
      q: 'Will my cosmetic treatments look fake or too white?',
      a: 'Absolutely not. At Pearlhaus, we practice natural-looking aesthetics. We use Digital Smile Design (DSD) to analyze your facial proportions, skin tone, and lips, choosing porcelain shades that have realistic translucency, contours, and texture.'
    },
    {
      q: 'What is the lifespan of porcelain veneers vs composite bonding?',
      a: 'Porcelain veneers are highly durable and stain-resistant, typically lasting 10 to 20 years with proper care. Composite bonding is more conservative but has a shorter lifespan of 5 to 8 years, and can absorb stains over time.'
    },
    {
      q: 'Does professional teeth whitening damage my natural enamel?',
      a: 'No, professional teeth whitening supervised by a dentist is completely safe. We use Philips Zoom, which contains built-in desensitizing agents that protect the enamel and maintain its structural integrity.'
    },
    {
      q: 'Are payment plans available for cosmetic treatments?',
      a: 'Yes, we offer flexible, interest-free payment options up to 24 months through DentiCare and Zip Money, allowing you to split the cost of your smile transformation into monthly installments.'
    }
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-gradient-to-br from-warm-white via-surface to-mint-pale border-b border-border py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full z-0 opacity-15">
          <img
            src="/images/site/smile_radiant.png"
            alt="Cosmetic dentistry at Pearlhaus"
            className="w-full h-full object-cover grayscale pointer-events-none select-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent z-5" />

        <div className="max-w-7xl mx-auto space-y-4 relative z-10 font-body">
          <Breadcrumb items={[{ label: 'Treatments', path: '/treatments' }, { label: 'Cosmetic Dentistry' }]} />
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-bold text-mint bg-mint-pale border border-mint/20 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
              Aesthetic Excellence
            </span>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Aesthetic Dental Artistry{' '}
              <span className="block font-semibold">To Transform Your Smile.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Combining world-class clinical precision with an artistic eye, our cosmetic dentistry hub delivers natural, radiant smiles that enhance your facial harmony.
            </p>
          </div>
        </div>
      </div>

      {/* 2. INTRODUCTION */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-left space-y-6 font-body font-light text-sm md:text-base text-slate leading-relaxed">
        <h2 className="font-display font-semibold text-navy text-xl md:text-2xl mb-4 text-center">
          Our Cosmetic Dentistry Philosophy
        </h2>
        <p>
          At Pearlhaus, we believe that a beautiful smile is more than just straight, white teeth; it is a vital expression of your confidence and personality. Our cosmetic treatments are designed to harmonize with your unique facial features, lips, and movements, achieving a radiant result that looks and feels natural.
        </p>
        <p>
          We utilize the state-of-the-art Digital Smile Design (DSD) workflow, which allows you to preview and co-create your proposed smile before any clinical treatment begins. By combining high-definition facial scans, photographs, and mockups, we ensure complete predictability and align the outcomes with your expectations.
        </p>
        <p>
          Whether you want to repair minor chips with conservative composite bonding, brighten your enamel with Zoom whitening, or undergo a complete smile makeover using custom porcelain veneers, our clinical specialists prioritize minimally invasive techniques to preserve your natural enamel structure.
        </p>
      </div>

      {/* 3. TREATMENTS LIST */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto bg-surface border-y border-border">
        <div className="space-y-10">
          <div className="text-center space-y-2 max-w-md mx-auto">
            <SectionLabel>Cosmetic Services</SectionLabel>
            <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
              Our Aesthetic Treatments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTreatments.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-[16/10] overflow-hidden bg-surface relative">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </div>
                  <div className="p-5 text-left space-y-3 font-body">
                    <h4 className="font-display font-bold text-navy text-lg leading-tight">{t.title}</h4>
                    <p className="text-xs font-light text-slate line-clamp-3 leading-relaxed">{t.shortDescription}</p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <div className="border-t border-border/40 pt-4 flex items-center justify-between text-xs font-body text-slate mb-4">
                    <div>
                      <span className="text-[10px] text-muted block">Price</span>
                      <strong className="text-navy font-bold text-sm">{t.price}</strong>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3.5 h-3.5 text-mint mr-1" />
                      <span>{t.duration}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link to={`/treatments/${t.slug}`} className="py-2 text-center text-xs font-bold border border-border rounded-md text-navy hover:bg-surface transition-colors font-body">
                      Details
                    </Link>
                    <Button size="sm" onClick={() => navigate(`/booking?treatment=${t.slug}`)}>
                      Book
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. COSMETIC SPECIALIST DENTISTS */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto space-y-10 text-center">
        <div className="space-y-2 max-w-md mx-auto">
          <SectionLabel>Cosmetic Experts</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
            Meet the Specialists
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          {categoryDentists.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-border rounded-2xl p-5 shadow-sm flex items-start space-x-4 hover:border-mint/20 transition-all duration-300"
            >
              <Avatar src={d.image} alt={d.name} size="lg" border className="w-16 h-16 shrink-0" />
              <div className="font-body space-y-2">
                <div>
                  <h4 className="font-display font-bold text-navy text-base leading-none">{d.name}</h4>
                  <span className="text-xs text-mint font-semibold mt-1.5 block">{d.title}</span>
                </div>
                <p className="text-[11px] font-light text-slate leading-relaxed line-clamp-3">{d.bio}</p>
                <Link to={`/team/${d.slug}`} className="text-[10px] font-bold text-mint hover:underline inline-flex items-center pt-1">
                  <span>View Full Profile</span>
                  <ChevronRight className="w-3 h-3 ml-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. BEFORE & AFTER GALLERY */}
      <div className="px-6 md:px-16 py-16 bg-white border-t border-border text-center max-w-7xl mx-auto space-y-10">
        <div className="space-y-2 max-w-md mx-auto">
          <SectionLabel>Smile Transformations</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
            Real Cosmetic Results
          </h3>
        </div>
        <BeforeAfterGrid limit={3} />
      </div>

      {/* 6. FAQ ACCORDION */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border text-left max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="space-y-3 lg:col-span-1">
          <SectionLabel>FAQ</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl leading-tight">
            Common Questions
          </h3>
          <p className="text-xs text-slate leading-relaxed font-body font-light pt-2">
            Have questions about our cosmetic dental treatments? Read our quick guides or ask our care coordinators.
          </p>
        </div>
        <div className="lg:col-span-2 space-y-2">
          {faqsList.map((faq, index) => (
            <Accordion key={index} title={faq.q}>
              {faq.a}
            </Accordion>
          ))}
        </div>
      </div>

      {/* 7. BOOKING CTA */}
      <div className="bg-white py-16 text-center max-w-xl mx-auto space-y-6">
        <Sparkles className="w-10 h-10 text-mint mx-auto" />
        <h3 className="font-display font-semibold text-navy text-2xl">
          Ready to Design Your Dream Smile?
        </h3>
        <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
          Book an aesthetic smile consultation today. We will perform 3D scans and help co-design your custom dental treatment plan.
        </p>
        <Button onClick={() => navigate('/booking')}>
          Book Consultation
        </Button>
      </div>
    </PageWrapper>
  );
};

export default CosmeticDentistry;
