import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Compass, ShieldCheck, Sparkles, Trophy, Globe, MapPin, Calendar } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';

export const About: React.FC = () => {
  const navigate = useNavigate();

  const values = [
    { title: 'Clinical Precision', desc: 'We utilize state-of-the-art diagnostic imaging and microscopic surgical guides to deliver exceptionally precise treatments.', icon: <Compass className="w-5 h-5 text-mint" /> },
    { title: 'Spa-Inspired Calm', desc: 'Our studio is designed with soft lighting, pleasant aromatherapy, and calming colors to eliminate anxiety and soothe the senses.', icon: <Heart className="w-5 h-5 text-mint" /> },
    { title: 'Transparent Care', desc: 'No hidden fees, no surprises. We map out detailed cost breakdowns and treatment phases before any clinical work begins.', icon: <ShieldCheck className="w-5 h-5 text-mint" /> },
    { title: 'Natural Aesthetics', desc: 'We avoid the artificial, uniform white look. We design custom teeth contours that harmonize with your unique facial features.', icon: <Sparkles className="w-5 h-5 text-mint" /> },
  ];

  const milestones = [
    { year: '2009', title: 'Studio Founded', desc: 'Dr. Charlotte Whitmore opened Pearlhaus in the Sydney CBD with a single chair and a vision to redefine dental care.' },
    { year: '2013', title: 'Clinic Expansion', desc: 'Expanded to three clinical chairs, introducing digital X-ray diagnostics and in-office CEREC crown milling.' },
    { year: '2018', title: 'Nobel Biocare Partner', desc: 'Partnered with Nobel Biocare to launch our All-on-4 guided implant clinic, led by Senior Dentist Dr. James Okafor.' },
    { year: '2022', title: 'ADA Excellence Award', desc: 'Recognized by the Australian Dental Association for outstanding achievements in clinical safety and patient relations.' },
    { year: '2025', title: 'Invisalign Diamond Status', desc: 'Achieved Diamond status from Invisalign, celebrating over 1,500 successful teeth alignment transformations.' },
  ];

  const awards = [
    'ADA Practice Excellence Winner 2022',
    'Invisalign Diamond Provider Accreditation 2023-2025',
    'Sydney Business Awards: Best Medical Studio 2021',
    'Australasian Dental Practice Design Winner 2011',
    'Dental Specialist Association Clinical Merit 2020',
    'ASP Periodontology Research Award Winner 2018',
    'Nobel Biocare All-on-4 Gold Partner Certificate',
    'AHPRA Safety Standards Compliant Practice'
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full h-[320px] md:h-[420px] relative flex items-center justify-start text-left px-6 md:px-16 overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0 bg-navy/40 z-10" />
        <img
          src="/images/site/patient_consultation.png"
          alt="Pearlhaus Dental Studio reception lobby"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        <div className="max-w-7xl mx-auto w-full relative z-20 font-body text-white space-y-4">
          <Breadcrumb
            items={[{ label: 'About Us' }]}
            className="text-white/60 [&_a]:text-white/60 [&_span]:text-white [&_svg]:text-white/40"
          />
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-bold text-mint bg-white/10 border border-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
              Our Story
            </span>
            <h1 className="font-display font-light text-white text-3xl md:text-5xl leading-tight">
              A Dental Experience{' '}
              <span className="block font-semibold text-mint-light">Unlike Any Other.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* 2. THE STORY (5 paragraphs) */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-left space-y-6 font-body font-light text-sm md:text-base text-slate leading-relaxed">
        <h2 className="font-display font-semibold text-navy text-xl md:text-2xl mb-4 text-center">
          Founded in 2009 by Dr. Charlotte Whitmore
        </h2>
        <p>
          Pearlhaus Dental Studio was founded in 2009 by Dr. Charlotte Whitmore with a clear clinical vision: to create a dental practice that feels entirely unlike a traditional, sterile dentist office. Having observed that dental anxiety kept millions of Australians from receiving essential care, Charlotte set out to combine state-of-the-art precision with the warm, rejuvenating atmosphere of a luxury wellness spa.
        </p>
        <p>
          We began as a boutique clinic in Sydney's CBD with a single chair and a dedication to patient-centered care. Charlotte spent our early years refining pain-free dental techniques, incorporating aromatherapy, overhead relaxation screens, and a collaborative consultation style where patients are always in complete control of the pace of their treatments.
        </p>
        <p>
          Over the years, Pearlhaus has grown to house six expert dental practitioners and four support clinicians. We have integrated advanced diagnostic technologies, including 3D Cone Beam scanners, intraoral cameras, and our in-office CEREC ceramic milling furnace, allowing us to perform complex restorations like crowns in a single visit.
        </p>
        <p>
          In 2018, we expanded our specialized services, partnering with Nobel Biocare to launch our guided dental implant and All-on-4 surgery center under Senior Dentist Dr. James Okafor. This was followed by achieving Diamond Provider status from Invisalign under specialist orthodontist Dr. Alexander Reid, confirming our position as alignment experts.
        </p>
        <p>
          Today, we remain obsessed with achieving natural-looking smile aesthetics and delivering precise dental care. Whether you are visiting us for a routine check-up and clean, or undergoing a full-arch implant restoration, we welcome you to our peaceful CBD studio and look forward to delivering care that boosts your confidence.
        </p>
      </div>

      {/* 3. MISSION & VALUES */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          <div className="space-y-2 max-w-md mx-auto">
            <SectionLabel>Core Values</SectionLabel>
            <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
              What Guides Our Practice
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left font-body">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white border border-border rounded-xl p-5 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-lg bg-mint-pale flex items-center justify-center text-mint">
                  {val.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-navy text-sm">{val.title}</h4>
                  <p className="text-xs font-light text-slate leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. TIMELINE */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-left space-y-10 font-body">
        <h3 className="font-display font-semibold text-navy text-xl md:text-2xl text-center border-b pb-3">
          Our Journey: Key Milestones
        </h3>
        
        <div className="relative border-l-2 border-border pl-8 space-y-10 ml-4 md:ml-10">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Year label box left */}
              <div className="absolute left-[-56px] top-0.5 bg-mint text-white text-[10px] font-bold py-1 px-2 rounded font-body">
                {item.year}
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-navy text-sm">{item.title}</h4>
                <p className="text-xs font-light text-slate leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. THE SPACE */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Images grid left */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-[350px] md:h-[450px]">
          <div className="rounded-xl overflow-hidden shadow">
            <img src="/images/site/patient_consultation.png" alt="Clinic interior" className="w-full h-full object-cover pointer-events-none select-none" />
          </div>
          <div className="rounded-xl overflow-hidden shadow translate-y-4">
            <img src="/images/site/dental_implant.png" alt="Clinic chair" className="w-full h-full object-cover pointer-events-none select-none" />
          </div>
          <div className="rounded-xl overflow-hidden shadow -translate-y-4">
            <img src="/images/site/clinical_checkup.png" alt="CEREC furnace" className="w-full h-full object-cover pointer-events-none select-none" />
          </div>
          <div className="rounded-xl overflow-hidden shadow">
            <img src="/images/site/patient_consultation.png" alt="Lobby" className="w-full h-full object-cover pointer-events-none select-none" />
          </div>
        </div>
        
        {/* Description right */}
        <div className="lg:col-span-6 text-left space-y-5 font-body">
          <SectionLabel>Clinic Architecture</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl leading-tight">
            Designed for Restorative Calm
          </h3>
          <p className="text-xs md:text-sm font-light text-slate leading-relaxed">
            Every detail of the Pearlhaus clinical space is designed to lower cortisol and induce physical relaxation. We replaced the clinical white lights of dental clinics with warm, indirect LED fixtures, and incorporated natural oak, green foliage, and curved walls that feel organic.
          </p>
          <p className="text-xs md:text-sm font-light text-slate leading-relaxed">
            Our treatment suites feature pleasant therapeutic aromatherapy, orthopedic leather dental chairs, noise-canceling headphones, and ceiling screens so you can watch movies during cleanings or fillings. We believe that clinical excellence should never feel cold or intimidating.
          </p>
        </div>
      </div>

      {/* 6. AWARDS & RECOGNITION */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto space-y-10 text-center">
        <div className="space-y-2 max-w-md mx-auto">
          <SectionLabel>Accreditations</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
            Awards & Recognition
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-body">
          {awards.map((aw, idx) => (
            <div key={idx} className="bg-white border border-border p-4 rounded-xl flex items-start space-x-2.5 shadow-sm">
              <Trophy className="w-5 h-5 text-mint shrink-0 mt-0.5" />
              <span className="text-[11px] font-semibold text-navy leading-snug">{aw}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. CHARITY & COMMUNITY */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left font-body">
        <div className="bg-white border border-border p-6 rounded-2xl space-y-4">
          <div className="w-10 h-10 rounded-lg bg-mint-pale flex items-center justify-center text-mint">
            <Globe className="w-5 h-5" />
          </div>
          <h4 className="font-display font-bold text-navy text-lg leading-tight">Annual Free Dental Care Day</h4>
          <p className="text-xs font-light text-slate leading-relaxed">
            Once a year, Dr. Charlotte Whitmore and the entire Pearlhaus staff donate their time and clinical supplies to host a Free Dental Care Day in Sydney's West. We provide free cleanings, extractions, and fillings to disadvantaged youths who cannot access public health programs.
          </p>
        </div>
        <div className="bg-white border border-border p-6 rounded-2xl space-y-4">
          <div className="w-10 h-10 rounded-lg bg-mint-pale flex items-center justify-center text-mint">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="font-display font-bold text-navy text-lg leading-tight">School Dental Education Program</h4>
          <p className="text-xs font-light text-slate leading-relaxed">
            Lead pediatric dentist Dr. Sofia Marchetti visits local primary schools throughout Sydney, conducting interactive oral hygiene workshops. Sofia teaches children the correct brushing and flossing techniques using character puppets, distributing free toothbrushes and hygiene guides.
          </p>
        </div>
      </div>

      {/* 8. BOOKING CTA */}
      <div className="bg-white py-16 text-center max-w-xl mx-auto space-y-6">
        <Sparkles className="w-10 h-10 text-mint mx-auto animate-pulse" />
        <h3 className="font-display font-semibold text-navy text-2xl">
          Experience Premium Dental Care
        </h3>
        <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
          Book your first appointment at our Sydney CBD studio today. We welcome new patients and look forward to delivering comfortable care.
        </p>
        <Button onClick={() => navigate('/booking')}>
          Book Your Visit Now
        </Button>
      </div>
    </PageWrapper>
  );
};

export default About;
