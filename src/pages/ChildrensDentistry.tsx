import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Baby, Clock, ChevronRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import BeforeAfterGrid from '../components/gallery/BeforeAfterGrid';
import { treatments } from '../data/treatments';
import { team } from '../data/team';
import Avatar from '../components/ui/Avatar';

export const ChildrensDentistry: React.FC = () => {
  const navigate = useNavigate();
  const categoryName = "Children's Dentistry";

  // Filter treatments
  const categoryTreatments = treatments.filter((t) => t.category === categoryName);

  // Filter children dentists ( Sofia Marchetti )
  const categoryDentists = team.filter((d) => d.specialties.includes('Children\'s Dentistry') || d.name === 'Dr. Sofia Marchetti');

  const faqsList = [
    {
      q: 'At what age should my child first visit the dentist?',
      a: 'We recommend scheduling your child\'s first check-up by their first birthday, or within 6 months of their first tooth erupting. Early visits help children become familiar with the clinic, preventing future dental anxiety.'
    },
    {
      q: 'What is the Child Dental Benefits Schedule (CDBS)?',
      a: 'The CDBS is an Australian Government program providing eligible children aged 2-17 with up to $1,095 in basic dental benefits over two calendar years. At Pearlhaus, we bulk-bill these services with no out-of-pocket costs.'
    },
    {
      q: 'What are dental fissure sealants and are they necessary?',
      a: 'Fissure sealants are thin protective plastic coatings applied to the deep chewing grooves of permanent back molars. They form a barrier against food and bacteria, reducing molar decay rates in children by up to 80%.'
    },
    {
      q: 'What is an early orthodontic assessment?',
      a: 'An assessment between ages 7 and 10 evaluates jaw growth and how permanent teeth are emerging. Early detection of jaw discrepancies allows for interceptive treatment, making future orthodontic work simpler and faster.'
    }
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-gradient-to-br from-mint-pale via-surface to-warm-white border-b border-border py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full z-0 opacity-15">
          <img
            src="/images/team/sofia-marchetti.png"
            alt="Children dentistry checkup"
            className="w-full h-full object-cover grayscale pointer-events-none select-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent z-5" />

        <div className="max-w-7xl mx-auto space-y-4 relative z-10 font-body">
          <Breadcrumb items={[{ label: 'Treatments', path: '/treatments' }, { label: "Children's Dentistry" }]} />
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-bold text-mint bg-mint-pale border border-mint/20 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
              Child-Friendly Clinic
            </span>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Create a Lifetime of Healthy Smiles{' '}
              <span className="block font-semibold">With Happy, Gentle Check-ups.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              From fun first visits and decay-preventive fissure sealants to early growth assessments, our children's dentistry hub specializes in gentle, stress-free pediatric care.
            </p>
          </div>
        </div>
      </div>

      {/* 2. INTRODUCTION */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-left space-y-6 font-body font-light text-sm md:text-base text-slate leading-relaxed">
        <h2 className="font-display font-semibold text-navy text-xl md:text-2xl mb-4 text-center">
          Our Pediatric Care Philosophy
        </h2>
        <p>
          We believe that dental visits during childhood set the tone for a person\'s relationship with oral health for life. That is why we are dedicated to creating positive, fun, and completely stress-free associations with dentistry. Our clinic is designed to be child-friendly, eliminating clinical anxiety.
        </p>
        <p>
          Under the patient guidance of Dr. Sofia Marchetti, we explain each instrument as a playful character and transform check-ups into interactive health games. Children can wear sunglasses, watch their favorite cartoons on overhead screens, and receive sticker prizes for bravery.
        </p>
        <p>
          We monitor jaw growth and teeth development early, checking for bite discrepancies or severe crowding. Early interceptive assessments allow us to correct issues when jawbones are soft and responsive, reducing the need for teeth extractions or complex braces in their teenage years.
        </p>
      </div>

      {/* 3. TREATMENTS LIST */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto bg-surface border-y border-border">
        <div className="space-y-10">
          <div className="text-center space-y-2 max-w-md mx-auto">
            <SectionLabel>Pediatric Services</SectionLabel>
            <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
              Children's Care & Prevention
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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

      {/* 4. PEDIATRIC SPECIALIST DENTISTS */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto space-y-10 text-center">
        <div className="space-y-2 max-w-md mx-auto">
          <SectionLabel>Children's Dentist</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
            Meet the Specialist
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto text-left">
          {categoryDentists.slice(0, 1).map((d) => (
            <div
              key={d.id}
              className="bg-white border border-border rounded-2xl p-6 shadow-sm flex items-start space-x-4 hover:border-mint/20 transition-all duration-300"
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

      {/* 5. FAQ ACCORDION */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border text-left max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="space-y-3 lg:col-span-1">
          <SectionLabel>FAQ</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl leading-tight">
            Common Questions
          </h3>
          <p className="text-xs text-slate leading-relaxed font-body font-light pt-2">
            Have questions about CDBS bulk-billing, first visits, or fissure sealants? Read our guide.
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

      {/* 6. BOOKING CTA */}
      <div className="bg-white py-16 text-center max-w-xl mx-auto space-y-6">
        <Baby className="w-10 h-10 text-mint mx-auto" />
        <h3 className="font-display font-semibold text-navy text-2xl">
          Schedule Your Child's Next Check-up
        </h3>
        <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
          Help your child grow with strong, healthy teeth. Book a dental evaluation. Eligible CDBS patients are fully bulk-billed with no out-of-pocket costs.
        </p>
        <Button onClick={() => navigate('/booking')}>
          Book Pediatric Appointment
        </Button>
      </div>
    </PageWrapper>
  );
};

export default ChildrensDentistry;
