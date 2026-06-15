import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Clock, ChevronRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import BeforeAfterGrid from '../components/gallery/BeforeAfterGrid';
import { treatments } from '../data/treatments';
import { team } from '../data/team';
import Avatar from '../components/ui/Avatar';

export const GeneralDentistry: React.FC = () => {
  const navigate = useNavigate();
  const categoryName = 'General Dentistry';

  // Filter treatments
  const categoryTreatments = treatments.filter((t) => t.category === categoryName);

  // Filter general dentists ( Ethan & Charlotte & Sofia )
  const categoryDentists = team.filter((d) => d.specialties.includes('General & Preventive Dentistry') || d.specialties.includes('General Dentistry') || d.name === 'Dr. Ethan Park');

  const faqsList = [
    {
      q: 'How often should I have a dental check-up and clean?',
      a: 'We generally recommend a routine professional check-up and scale-and-clean every 6 months. This allows us to keep your enamel clean, remove hard tartar buildup, and detect tooth decay early before it becomes painful.'
    },
    {
      q: 'Do you offer gap-free check-ups for private health insurance?',
      a: 'Yes! We provide gap-free dental check-ups, diagnostic X-rays, and professional cleans for all patients with eligible dental coverage under major private Australian health funds.'
    },
    {
      q: 'What is a root canal and is it painful?',
      a: 'A root canal is a pain-free treatment used to save an infected or dying tooth root. Under modern anesthetics, the procedure feels similar to getting a standard filling, successfully relieving pain and preventing extraction.'
    },
    {
      q: 'Are your composite fillings metal-free?',
      a: 'Yes, Pearlhaus is a mercury-free clinic. We use high-strength composite resin fillings that bond directly to your enamel and match the natural color of your surrounding teeth, providing a beautiful, invisible result.'
    }
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-gradient-to-br from-mint-pale via-surface to-warm-white border-b border-border py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full z-0 opacity-15">
          <img
            src="/images/site/clinical_checkup.png"
            alt="General dentistry checkup"
            className="w-full h-full object-cover grayscale pointer-events-none select-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent z-5" />

        <div className="max-w-7xl mx-auto space-y-4 relative z-10 font-body">
          <Breadcrumb items={[{ label: 'Treatments', path: '/treatments' }, { label: 'General Dentistry' }]} />
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-bold text-mint bg-mint-pale border border-mint/20 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
              Preventive & Restorative
            </span>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Maintain Excellent Oral Health{' '}
              <span className="block font-semibold">For a Lifetime of Smiles.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              From routine diagnostic cleanings to advanced root canal relief, our general dentistry hub is dedicated to keeping your teeth decay-free, healthy, and functional.
            </p>
          </div>
        </div>
      </div>

      {/* 2. INTRODUCTION */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-left space-y-6 font-body font-light text-sm md:text-base text-slate leading-relaxed">
        <h2 className="font-display font-semibold text-navy text-xl md:text-2xl mb-4 text-center">
          Our Preventive Dentistry Philosophy
        </h2>
        <p>
          Excellent oral health is the foundation of your overall well-being. At Pearlhaus Dental Studio, our general care philosophy centers on early detection and conservative, tooth-preserving treatments. By emphasizing professional cleans every six months, we prevent decay and gum disease before they require invasive procedures.
        </p>
        <p>
          Our clinical space features state-of-the-art diagnostic tools, including ultra-low radiation digital X-rays and high-resolution intraoral cameras. This allows us to display images directly on screens above your chair, explaining our findings and ensuring you are fully informed and in control of your dental health.
        </p>
        <p>
          For patients experiencing dental anxiety, we specialize in gentle care. We take a slow, pressure-free approach, providing amenities like noise-canceling headphones, ceiling screens, and optional happy gas sedation to ensure your check-ups, fillings, or root canals are completely comfortable.
        </p>
      </div>

      {/* 3. TREATMENTS LIST */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto bg-surface border-y border-border">
        <div className="space-y-10">
          <div className="text-center space-y-2 max-w-md mx-auto">
            <SectionLabel>General Services</SectionLabel>
            <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
              Family & General Care
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

      {/* 4. GENERAL SPECIALIST DENTISTS */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto space-y-10 text-center">
        <div className="space-y-2 max-w-md mx-auto">
          <SectionLabel>Care Team</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
            Our General Dentists
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          {categoryDentists.slice(0, 2).map((d) => (
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
          <SectionLabel>Clinic Results</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
            Transformation Studies
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
            Have questions about check-ups, cleans, or common restorations? Read our guide.
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
        <Shield className="w-10 h-10 text-mint mx-auto" />
        <h3 className="font-display font-semibold text-navy text-2xl">
          Book Your Routine Check-up & Clean
        </h3>
        <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
          Maintain your healthy smile. Schedule your comprehensive evaluation and professional scale-and-clean with our friendly hygienists.
        </p>
        <Button onClick={() => navigate('/booking')}>
          Book General Appointment
        </Button>
      </div>
    </PageWrapper>
  );
};

export default GeneralDentistry;
