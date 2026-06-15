import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Activity, Clock, ChevronRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import BeforeAfterGrid from '../components/gallery/BeforeAfterGrid';
import { treatments } from '../data/treatments';
import { team } from '../data/team';
import Avatar from '../components/ui/Avatar';

export const Orthodontics: React.FC = () => {
  const navigate = useNavigate();
  const categoryName = 'Orthodontics';

  // Filter treatments
  const categoryTreatments = treatments.filter((t) => t.category === categoryName);

  // Filter ortho dentists ( Alex Reid & Charlotte )
  const categoryDentists = team.filter((d) => d.specialties.includes('Invisalign Therapy') || d.specialties.includes('Invisalign Clear Aligners') || d.name === 'Dr. Alexander Reid');

  const faqsList = [
    {
      q: 'How does Invisalign compare to traditional metal braces?',
      a: 'Invisalign uses a series of custom-made, clear, removable plastic aligners to shift teeth, making it virtually invisible and easy to clean. Traditional braces utilize metal or ceramic brackets bonded to the teeth and connected by archwires. Traditional braces are often better for complex bite adjustments.'
    },
    {
      q: 'How long does Invisalign treatment typically take?',
      a: 'On average, Invisalign treatments take between 6 to 18 months, depending on the complexity of the tooth movements required. Teens and adults must wear aligners for 20-22 hours a day, changing sets every 1-2 weeks.'
    },
    {
      q: 'Why do I need to wear a retainer after orthodontic alignment?',
      a: 'Teeth have a natural biological memory and tend to slowly drift back toward their original crooked positions—a process called orthodontic relapse. Wearing a custom retainer, usually only at night, is essential to lock in your straight smile.'
    },
    {
      q: 'Am I too old to get my teeth straightened?',
      a: 'Never! More than 40% of our orthodontic patients are adults. Invisalign is particularly popular because it is highly discreet, doesn\'t interfere with diet, and fits seamlessly into professional and social lifestyles.'
    }
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-gradient-to-br from-mint-pale via-surface to-warm-white border-b border-border py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full z-0 opacity-15">
          <img
            src="/images/site/aligners_invisalign.png"
            alt="Orthodontics checkup at Pearlhaus"
            className="w-full h-full object-cover grayscale pointer-events-none select-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent z-5" />

        <div className="max-w-7xl mx-auto space-y-4 relative z-10 font-body">
          <Breadcrumb items={[{ label: 'Treatments', path: '/treatments' }, { label: 'Orthodontics' }]} />
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-bold text-mint bg-mint-pale border border-mint/20 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
              Invisalign Diamond Provider
            </span>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Straighten Your Smile{' '}
              <span className="block font-semibold">With Digital Precision.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              From virtually invisible clear aligners to traditional braces and retainers, our orthodontics hub offers customized teeth straightening solutions for adults, teens, and children.
            </p>
          </div>
        </div>
      </div>

      {/* 2. INTRODUCTION */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-left space-y-6 font-body font-light text-sm md:text-base text-slate leading-relaxed">
        <h2 className="font-display font-semibold text-navy text-xl md:text-2xl mb-4 text-center">
          Our Orthodontic Philosophy
        </h2>
        <p>
          Orthodontics is about more than just aesthetics; it is about creating a healthy, functional bite that supports long-term oral stability, reduces uneven wear on enamel, and makes teeth easy to clean. At Pearlhaus, we combine advanced digital models with clinical expertise to design straight, beautiful smiles.
        </p>
        <p>
          Under the expert guidance of Dr. Alexander Reid, a specialist orthodontist, we utilize the state-of-the-art iTero intraoral scanner to capture 3D impressions without messy putty. Alex uses specialized planning software to map the precise path of each tooth, allowing you to preview your completed smile before starting.
        </p>
        <p>
          We offer a range of alignment options to fit your lifestyle and preferences. Invisalign clear aligners are highly popular due to their removable, discreet design, while traditional braces with metal or clear ceramic brackets remain the gold standard for complex structural adjustments.
        </p>
      </div>

      {/* 3. TREATMENTS LIST */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto bg-surface border-y border-border">
        <div className="space-y-10">
          <div className="text-center space-y-2 max-w-md mx-auto">
            <SectionLabel>Orthodontic Services</SectionLabel>
            <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
              Alignment Treatments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <div className="p-4 text-left space-y-2 font-body">
                    <h4 className="font-display font-bold text-navy text-base leading-tight">{t.title}</h4>
                    <p className="text-[11px] font-light text-slate line-clamp-3 leading-relaxed">{t.shortDescription}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <div className="border-t border-border/40 pt-3 flex items-center justify-between text-xs font-body text-slate mb-3">
                    <div>
                      <span className="text-[9px] text-muted block">Price</span>
                      <strong className="text-navy font-bold text-xs">{t.price}</strong>
                    </div>
                    <span className="text-[10px] text-slate-400 truncate">{t.duration}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link to={`/treatments/${t.slug}`} className="py-2 text-center text-[10px] font-bold border border-border rounded-md text-navy hover:bg-surface transition-colors font-body uppercase">
                      Details
                    </Link>
                    <Button size="sm" className="text-[10px] uppercase py-2 px-3" onClick={() => navigate(`/booking?treatment=${t.slug}`)}>
                      Book
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. ORTHODONTIC SPECIALIST DENTISTS */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto space-y-10 text-center">
        <div className="space-y-2 max-w-md mx-auto">
          <SectionLabel>Orthodontist</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
            Meet the Specialist
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
          <SectionLabel>Alignment cases</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
            Real Orthodontic transformations
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
            Have questions about Invisalign aligners or braces? Read our guide.
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
        <Activity className="w-10 h-10 text-mint mx-auto" />
        <h3 className="font-display font-semibold text-navy text-2xl">
          Start Your Smile Alignment Journey
        </h3>
        <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
          Book a 3D digital smile scan and orthodontic consultation. Dr. Alexander Reid will design a customized teeth straightening plan.
        </p>
        <Button onClick={() => navigate('/booking')}>
          Book Aligner Consultation
        </Button>
      </div>
    </PageWrapper>
  );
};

export default Orthodontics;
