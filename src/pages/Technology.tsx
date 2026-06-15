import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Check, Clock, Laptop, Eye, HelpCircle } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import { technology } from '../data/technology';

export const Technology: React.FC = () => {
  const navigate = useNavigate();

  const advantages = [
    { title: 'Less Time in Chair', desc: 'Our CEREC same-day crowns and digital impressions eliminate temporary crowns and second appointments, cutting treatment times in half.', icon: <Clock className="w-5 h-5 text-mint" /> },
    { title: 'Better, Precise Results', desc: 'By utilizing 3D CT bone scanners and surgical microscopes, we identify nerve pathways and micro-cracks with sub-millimeter precision.', icon: <Sparkles className="w-5 h-5 text-mint" /> },
    { title: 'Minimal Radiation Exposure', desc: 'Our advanced digital X-ray systems capture diagnostic images instantly, reducing radiation exposure by up to 90% compared to traditional film.', icon: <Eye className="w-5 h-5 text-mint" /> },
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Our Technology' }]} />
          <div className="space-y-2 max-w-2xl">
            <SectionLabel>Advanced Dentistry</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              State-of-the-Art Technology{' '}
              <span className="block font-semibold">For Better Care.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Pearlhaus integrates leading diagnostic imaging, impressions, and laser software, delivering precise, safe, and highly comfortable treatments.
            </p>
          </div>
        </div>
      </div>

      {/* 2. THE 8 TECHNOLOGIES LIST */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto space-y-16">
        {technology.map((tech, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={tech.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-border/40 pb-16 last:border-b-0 last:pb-0"
            >
              {/* Image Column */}
              <div className={`lg:col-span-5 h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-md relative ${!isEven && 'lg:order-2'}`}>
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                />
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-7 text-left space-y-5 font-body ${!isEven && 'lg:order-1'}`}>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-mint bg-mint-pale border border-mint/20 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    {tech.category}
                  </span>
                  <h3 className="font-display font-bold text-navy text-xl md:text-2xl leading-tight">
                    {tech.name}
                  </h3>
                </div>

                <div className="space-y-4 text-xs md:text-sm font-light text-slate leading-relaxed">
                  {tech.description.split('\n\n').map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                <div className="space-y-2.5 border-t border-border/40 pt-4">
                  <h4 className="text-[10px] font-bold text-navy uppercase tracking-wider mb-2">Key Clinical Benefits:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {tech.benefits.map((ben, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2 text-xs text-slate">
                        <span className="text-mint font-bold shrink-0">✓</span>
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. ADVANTAGES SECTION */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          <div className="space-y-2 max-w-md mx-auto">
            <SectionLabel>What this means for you</SectionLabel>
            <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
              Why Technology Matters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left font-body">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-white border border-border rounded-xl p-5 shadow-sm space-y-3.5">
                <div className="w-10 h-10 rounded-lg bg-mint-pale flex items-center justify-center text-mint">
                  {adv.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-navy text-sm">{adv.title}</h4>
                  <p className="text-xs font-light text-slate leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. VIRTUAL TOUR SECTION */}
      <div className="px-6 md:px-16 py-16 bg-white max-w-4xl mx-auto text-center space-y-6">
        <HelpCircle className="w-10 h-10 text-mint mx-auto" />
        <div className="space-y-2">
          <h3 className="font-display font-semibold text-navy text-2xl">
            Virtual Clinic Tour
          </h3>
          <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
            Interested in previewing our spa-like dental studio? We are preparing a high-definition 3D virtual tour of our Sydney CBD space.
          </p>
        </div>
        <div className="bg-mint-pale text-mint-dark inline-block border border-mint/20 rounded px-4 py-2 font-body text-xs font-bold uppercase tracking-wider">
          Coming Soon (Winter 2026)
        </div>
      </div>

      {/* 5. BOOKING CTA */}
      <div className="bg-surface border-t border-border py-16 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h3 className="font-display font-semibold text-navy text-2xl">
            Experience Precise Dental Care
          </h3>
          <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
            Book an appointment online. Our clinical team utilizes these advanced tools to deliver comfortable, precise dental care.
          </p>
          <Button onClick={() => navigate('/booking')}>
            Book Appointment
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Technology;
