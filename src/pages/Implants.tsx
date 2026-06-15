import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Hammer, Clock, ChevronRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import BeforeAfterGrid from '../components/gallery/BeforeAfterGrid';
import { treatments } from '../data/treatments';
import { team } from '../data/team';
import Avatar from '../components/ui/Avatar';

export const Implants: React.FC = () => {
  const navigate = useNavigate();
  const categoryName = 'Dental Implants';

  // Filter treatments (Implants + Crowns & Bridges)
  const categoryTreatments = treatments.filter((t) => t.category === categoryName || t.slug === 'crowns-bridges');

  // Filter implant dentists ( James Okafor & Charlotte Whitmore & Ethan Park )
  const categoryDentists = team.filter((d) => d.specialties.includes('Dental Implants') || d.specialties.includes('All-on-4 Full-Arch Surgery') || d.name === 'Dr. James Okafor');

  const faqsList = [
    {
      q: 'What is a dental implant and how does it replace a missing tooth?',
      a: 'A dental implant is a small titanium screw placed surgically into the jawbone, acting as a replacement root. Over 3-6 months, it fuses with the bone (osseointegration). A custom porcelain crown is then attached, creating a strong, permanent tooth replacement.'
    },
    {
      q: 'Am I a candidate for dental implants?',
      a: 'Most adults with missing teeth and good general health are candidates. The primary requirement is sufficient jawbone density to anchor the implant. If bone density is low, we can perform bone grafting. We evaluate this using 3D Cone Beam CT scans.'
    },
    {
      q: 'What is the All-on-4 implant technique?',
      a: 'All-on-4 is a revolutionary full-mouth reconstruction method. It uses four titanium implants placed strategically in the jawbone to support a complete, permanent bridge of replacement teeth. This can restore a full mouth in a single day.'
    },
    {
      q: 'Is the dental implant procedure painful?',
      a: 'The implant placement is performed under local anesthetic, so you will feel absolutely no pain. For anxious patients, we offer sedation options. Post-operative discomfort is usually mild and managed with standard pain relievers.'
    }
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-gradient-to-br from-mint-pale via-surface to-warm-white border-b border-border py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full z-0 opacity-15">
          <img
            src="/images/site/dental_implant.png"
            alt="Dental implants checkup"
            className="w-full h-full object-cover grayscale pointer-events-none select-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent z-5" />

        <div className="max-w-7xl mx-auto space-y-4 relative z-10 font-body">
          <Breadcrumb items={[{ label: 'Treatments', path: '/treatments' }, { label: 'Dental Implants' }]} />
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-bold text-mint bg-mint-pale border border-mint/20 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
              Restorative Masterclass
            </span>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Restore Your Smile Permanently{' '}
              <span className="block font-semibold">With Guided Dental Implants.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              From single titanium implants to full-mouth All-on-4 restorations and crowns, our implants hub rebuilds chewing comfort and natural appearance using advanced 3D guided surgery.
            </p>
          </div>
        </div>
      </div>

      {/* 2. INTRODUCTION */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-left space-y-6 font-body font-light text-sm md:text-base text-slate leading-relaxed">
        <h2 className="font-display font-semibold text-navy text-xl md:text-2xl mb-4 text-center">
          Our Dental Implant Philosophy
        </h2>
        <p>
          Losing a permanent tooth impacts more than just the appearance of your smile; it compromises your chewing function, alters your speech, and causes neighboring teeth to drift, leading to jaw joint misalignment. At Pearlhaus, we offer permanent, titanium-anchored solutions that look and function like natural teeth.
        </p>
        <p>
          Under the expert guidance of Dr. James Okafor, a specialist-trained implant surgeon, we utilize 3D Cone Beam CT scans to map the exact nerve pathways, bone density, and sinus structures. This allows us to plan implant surgery digitally, placing the titanium posts with guided templates to guarantee safety and sub-millimeter precision.
        </p>
        <p>
          Dental implants are highly superior to traditional dentures or bridges. They stand independently without altering adjacent healthy teeth and stimulate jawbone density, preventing the facial recession associated with tooth loss. With flexibile payment plans and diamond-grade materials, we make permanent smile restoration accessible.
        </p>
      </div>

      {/* 3. TREATMENTS LIST */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto bg-surface border-y border-border">
        <div className="space-y-10">
          <div className="text-center space-y-2 max-w-md mx-auto">
            <SectionLabel>Implant Services</SectionLabel>
            <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
              Restorations & Implants
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

      {/* 4. IMPLANT SPECIALIST DENTISTS */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto space-y-10 text-center">
        <div className="space-y-2 max-w-md mx-auto">
          <SectionLabel>Implant Surgeon</SectionLabel>
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
          <SectionLabel>Implant results</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
            Real Reconstructive studies
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
            Have questions about implants, Guided Surgery, or All-on-4? Read our guide.
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
        <Hammer className="w-10 h-10 text-mint mx-auto" />
        <h3 className="font-display font-semibold text-navy text-2xl">
          Restore Your Chew Comfort & Confidence
        </h3>
        <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
          Book a 3D Cone Beam scan and implant evaluation. Dr. James Okafor will plan a customized Guided Surgery treatment plan.
        </p>
        <Button onClick={() => navigate('/booking')}>
          Book Implant Consultation
        </Button>
      </div>
    </PageWrapper>
  );
};

export default Implants;
