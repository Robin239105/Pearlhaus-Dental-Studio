import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Shield, Activity, Hammer, Baby, ArrowRight, Calendar } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import ScriptAccent from '../ui/ScriptAccent';
import Button from '../ui/Button';

export const ServicesGrid: React.FC = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);

  const services = [
    {
      index: '01',
      title: 'Cosmetic Dentistry',
      path: '/cosmetic-dentistry',
      description: 'Luminous smile enhancements tailored to your natural facial contours. We design veneers and whitening procedures to blend seamlessly with your teeth.',
      tags: ['Philips Zoom Whitening', 'Porcelain Veneers', 'Composite Bonding', 'Smile Makeovers'],
      image: '/images/site/smile_radiant.png', // Radiant healthy white smile
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      index: '02',
      title: 'Orthodontics & Invisalign',
      path: '/orthodontics',
      description: 'Discreet teeth alignment using advanced clear aligner therapy. Align your teeth comfortably without metal brackets or food restrictions.',
      tags: ['Invisalign Clear Aligners', 'Teen Aligners', 'Retainers', 'Bite Correction'],
      image: '/images/site/aligners_invisalign.png', // Clear aligner detail
      icon: <Activity className="w-5 h-5" />,
    },
    {
      index: '03',
      title: 'Dental Implants',
      path: '/implants',
      description: 'Permanent restorations designed to look, feel, and function like natural teeth, preserving jawbone density and structural integrity.',
      tags: ['Single Tooth Implants', 'All-on-4 Bridges', 'Bone Grafting', 'Bespoke Crowns'],
      image: '/images/site/dental_implant.png', // Dental crown detail
      icon: <Hammer className="w-5 h-5" />,
    },
    {
      index: '04',
      title: 'General Dentistry',
      path: '/general-dentistry',
      description: 'Comprehensive preventive care, scaling, and hygiene cleans to monitor your oral health and catch decay in its earliest, most conservative stages.',
      tags: ['Scale & Clean', 'Digital X-Rays', 'Composite Fillings', 'Periodontal Care'],
      image: '/images/site/clinical_checkup.png', // Clinical teeth checking
      icon: <Shield className="w-5 h-5" />,
    },
    {
      index: '05',
      title: "Children's Dentistry",
      path: '/childrens-dentistry',
      description: 'Anxiety-free checkups in a warm, friendly environment. We establish positive habits and monitor developmental patterns for growing smiles.',
      tags: ['First Visit Checks', 'Fluoride Protection', 'Fissure Sealants', 'Custom Mouthguards'],
      image: '/images/team/sofia-marchetti.png', // Smiling happy child
      icon: <Baby className="w-5 h-5" />,
    },
  ];

  const currentService = services[activeIdx];

  return (
    <section className="py-24 px-6 md:px-16 bg-white overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Group */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <SectionLabel>Boutique Care</SectionLabel>
          <h2 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
            What We Offer:{' '}
            <span className="block font-semibold">Teeth & Smile Services.</span>
          </h2>
          <div className="pt-2">
            <ScriptAccent>personalized dental excellence</ScriptAccent>
          </div>
        </div>

        {/* DESKTOP SPLIT COLUMN INTERACTIVE DISPLAY */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-stretch min-h-[480px]">
          
          {/* Left Column: Interactive Navigation List */}
          <div className="col-span-5 flex flex-col justify-center space-y-2 border-r border-border/60 pr-8">
            {services.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => navigate(item.path)}
                  className={`py-5 px-6 rounded-2xl flex items-center justify-between group cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-surface border-mint/20 shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-surface/40'
                  }`}
                >
                  <div className="flex items-center space-x-5 font-body">
                    <span className={`text-xs font-bold ${isActive ? 'text-mint' : 'text-slate-400'}`}>
                      {item.index}
                    </span>
                    <span className={`font-display text-xl md:text-2xl font-light transition-colors duration-200 ${
                      isActive ? 'text-navy font-semibold' : 'text-slate hover:text-navy'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isActive
                      ? 'bg-mint border-mint text-white rotate-0'
                      : 'bg-white border-border text-slate group-hover:text-mint group-hover:border-mint -rotate-45'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Panel */}
          <div className="col-span-7 flex flex-col justify-between text-left relative bg-surface border border-border rounded-[32px] p-8 md:p-10 overflow-hidden shadow-sm">
            
            {/* Image Box */}
            <div className="w-full h-[260px] rounded-[24px] overflow-hidden shadow-md relative z-10 bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentService.index}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  src={currentService.image}
                  alt={currentService.title}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                />
              </AnimatePresence>
            </div>

            {/* Content info */}
            <div className="space-y-4 pt-6 relative z-10 flex-1 flex flex-col justify-between font-body">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-mint font-bold">
                  {currentService.icon}
                  <span className="text-xs uppercase tracking-widest font-bold font-body">{currentService.title}</span>
                </div>
                <p className="text-xs font-light text-slate leading-relaxed">
                  {currentService.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentService.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-semibold text-navy bg-white border border-border px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border/60 flex items-center justify-between">
                <Button size="sm" onClick={() => navigate(currentService.path)}>
                  View Treatment Details
                </Button>
                <button
                  onClick={() => navigate('/booking')}
                  className="text-xs font-bold text-mint hover:text-mint-dark uppercase tracking-wider flex items-center space-x-1"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* MOBILE RESPONSIVE ACCORDION DISPLAY (degrades gracefully) */}
        <div className="lg:hidden flex flex-col space-y-4 font-body">
          {services.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-border rounded-[20px] overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setActiveIdx(isActive ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-bold text-mint">{item.index}</span>
                    <span className="font-display font-semibold text-navy text-lg">{item.title}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center text-slate transition-transform duration-300 ${
                    isActive ? 'rotate-90 text-mint border-mint' : 'rotate-0'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-0 text-left border-t border-border/40 space-y-4">
                        <div className="w-full h-[180px] rounded-xl overflow-hidden mt-4 relative bg-surface">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                          />
                        </div>
                        <p className="text-xs font-light text-slate leading-relaxed pt-2">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[9px] font-semibold text-slate bg-surface border border-border/60 px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 pt-3">
                          <Button size="sm" onClick={() => navigate(item.path)} className="w-full">
                            Explore Hub
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
