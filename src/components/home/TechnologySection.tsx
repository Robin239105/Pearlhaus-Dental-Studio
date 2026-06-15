import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ScanLine, Laptop, Zap, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import useScrollReveal from '../../hooks/useScrollReveal';

export const TechnologySection: React.FC = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const { ref, controls } = useScrollReveal();

  const techHighlights = [
    {
      name: 'CEREC Same-Day Crowns',
      category: 'CAD/CAM Technology',
      description: 'Why visit the dentist twice when you can get custom porcelain restorations done in 90 minutes? Our speed milling unit sculpts and glazes a durable, enamel-matching crown chairside. Zero messy temporary crowns, zero second injections.',
      icon: <Laptop className="w-5 h-5" />,
      slug: 'cerec-crowns',
      image: '/images/site/clinical_checkup.png',
      specs: [
        { label: 'System', value: 'CEREC CAD/CAM Prime' },
        { label: 'Milling Speed', value: '12-Minute Mill Time' },
        { label: 'Accuracy', value: '25-Micron Margin Fit' },
        { label: 'Restoration', value: '100% In-Office Same Day' }
      ]
    },
    {
      name: 'Intraoral Scanner (iTero)',
      category: 'Digital Impressions',
      description: 'We have replaced uncomfortable, gag-inducing alginate impression putty with high-precision digital wand scans. Watch your teeth compile in real-time as a high-definition 3D model, ensuring a perfect fit for crowns, veneers, and Invisalign.',
      icon: <ScanLine className="w-5 h-5" />,
      slug: 'intraoral-scanner',
      image: '/images/site/aligners_invisalign.png',
      specs: [
        { label: 'Scanner', value: 'iTero Element 5D Plus' },
        { label: 'Scan Rate', value: '6,000 scans per second' },
        { label: 'Precision', value: '10-Micron Real-time resolution' },
        { label: 'Features', value: 'Near-Infrared Imaging (NIRI)' }
      ]
    },
    {
      name: '3D Cone Beam CT Scanner',
      category: 'Digital Imaging',
      description: 'Construct high-definition 3D virtual maps of your jawbone, nerve pathways, and tooth roots. Essential for implant surgeries and orthodontics, this scanner allows our clinical team to plan complex procedures with sub-millimeter surgical safety.',
      icon: <Sparkles className="w-5 h-5" />,
      slug: 'ct-scanner',
      image: '/images/site/dental_implant.png',
      specs: [
        { label: 'Hardware', value: 'Dentsply Sirona Orthophos 3D' },
        { label: 'Scan Duration', value: '14-Second Low-Dose Scan' },
        { label: 'Radiation', value: '90% Lower than Medical CT' },
        { label: 'Reconstruction', value: 'Full HD 3D Volume Map' }
      ]
    },
    {
      name: 'Laser Dentistry (Waterlase)',
      category: 'Minimally Invasive',
      description: 'Perform precise tooth, gum, and bone procedures using laser energy and water atomization. By vaporizing tissues without heat or vibration, the Waterlase minimizes bleeding, reduces dental anxiety, and accelerates biological tissue healing.',
      icon: <Zap className="w-5 h-5" />,
      slug: 'laser-dentistry',
      image: '/images/site/clinical_checkup.png',
      specs: [
        { label: 'Laser Source', value: 'Waterlase iPlus Er,Cr:YSGG' },
        { label: 'Wavelength', value: '2780 nm Hydro-Surgical' },
        { label: 'Anesthetic', value: 'Rarely Required for Cavities' },
        { label: 'Healing', value: 'Cuts, sterilizes, & clots instantly' }
      ]
    }
  ];

  const currentTech = techHighlights[activeIdx];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 bg-navy text-white overflow-hidden relative z-10">
      
      {/* Editorial glowing background accents */}
      <div className="absolute right-[-200px] top-[20%] w-[500px] h-[500px] bg-mint/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute left-[-250px] bottom-[10%] w-[600px] h-[600px] bg-mint-dark/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <SectionLabel>Advanced Technology</SectionLabel>
          <h2 className="font-display font-light text-white text-3xl md:text-5xl leading-tight">
            Clinical Precision.{' '}
            <span className="block font-semibold">Empowered Outcomes.</span>
          </h2>
          <p className="font-body font-light text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
            We invest in state-of-the-art digital diagnostics and dental therapeutics to make your treatment safer, faster, and completely pain-free.
          </p>
        </div>

        {/* 2-Column Split Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: Tab Selectors (5 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-5 flex flex-col gap-4 justify-center"
          >
            {techHighlights.map((tech, idx) => {
              const isActive = idx === activeIdx;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left flex items-start gap-4 select-none ${
                    isActive
                      ? 'bg-white/5 border-mint/40 shadow-lg shadow-mint/5 backdrop-blur-md'
                      : 'bg-slate-900/20 border-slate-800/40 hover:bg-slate-900/40 hover:border-slate-800'
                  }`}
                >
                  {/* Left edge accent light */}
                  {isActive && (
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-mint rounded-r-md" />
                  )}

                  {/* Icon Box */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isActive
                      ? 'bg-mint-pale/10 border-mint/30 text-mint'
                      : 'bg-slate-800/40 border-slate-700/30 text-slate-400 group-hover:text-mint group-hover:border-mint/20'
                  }`}>
                    {tech.icon}
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1 font-body flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${
                        isActive ? 'text-mint' : 'text-slate-500 group-hover:text-mint-light'
                      }`}>
                        {tech.category}
                      </span>
                      {isActive && (
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
                        </span>
                      )}
                    </div>
                    <h4 className={`font-display font-semibold text-base transition-colors ${
                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {tech.name}
                    </h4>
                    <p className={`text-[11px] leading-relaxed transition-all duration-300 line-clamp-2 font-light ${
                      isActive ? 'text-slate-200' : 'text-slate-400 group-hover:text-slate-300'
                    }`}>
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT COLUMN: The Interactive Clinical Telemetry Viewport (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="bg-slate-950/80 border border-slate-800/60 rounded-3xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[440px] md:min-h-[500px]">
              
              {/* Subtle tech grid backing */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              {/* Viewport Top Header */}
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-3 z-10 font-mono text-[10px] text-slate-400">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-mint animate-pulse" />
                  <span className="uppercase tracking-widest text-white/70">PEARLHAUS_CONSOLE v4.2</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint animate-ping" />
                  <span className="text-[9px] uppercase tracking-wider text-mint font-bold">SCAN_FEED_ACTIVE</span>
                </div>
              </div>

              {/* Inner screen containing image and scanner overlays */}
              <div className="relative flex-1 rounded-xl overflow-hidden border border-slate-900 bg-slate-900/10 my-4 flex items-center justify-center">
                
                {/* Laser Scanning Line Sweeper */}
                <div className="absolute left-0 right-0 h-[2px] bg-mint/60 shadow-[0_0_12px_rgba(45,189,138,0.8)] pointer-events-none z-10 animate-scan" />

                {/* Cyber Corner brackets */}
                <div className="absolute top-3 left-3 border-t-2 border-l-2 border-mint/40 w-4 h-4 pointer-events-none z-20" />
                <div className="absolute top-3 right-3 border-t-2 border-r-2 border-mint/40 w-4 h-4 pointer-events-none z-20" />
                <div className="absolute bottom-3 left-3 border-b-2 border-l-2 border-mint/40 w-4 h-4 pointer-events-none z-20" />
                <div className="absolute bottom-3 right-3 border-b-2 border-r-2 border-mint/40 w-4 h-4 pointer-events-none z-20" />

                {/* Telemetry data overlays on screen */}
                <div className="absolute left-4 top-4 font-mono text-[8px] text-mint/70 space-y-0.5 pointer-events-none z-20 text-left">
                  <p>SYS_TYPE: Restorative</p>
                  <p>RESOLUTION: 0.1MM</p>
                  <p>SYS_STATUS: READY</p>
                </div>

                <div className="absolute right-4 top-4 font-mono text-[8px] text-mint/70 space-y-0.5 pointer-events-none z-20 text-right">
                  <p>FEED_FREQ: 60Hz</p>
                  <p>DEPTH_MAP: 3D_RECON</p>
                  <p>SECURE: 100%</p>
                </div>

                {/* Smooth crossfade Image Viewport using Framer Motion */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentTech.slug}
                    src={currentTech.image}
                    alt={currentTech.name}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 0.75, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  />
                </AnimatePresence>

                {/* Graphic filter overlay for medical scan screen aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 pointer-events-none z-10" />

              </div>

              {/* Viewport Specs Dashboard */}
              <div className="space-y-4 z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 border-t border-slate-800/60 font-mono text-[10px] text-left">
                  {currentTech.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <span className="text-slate-500 block uppercase tracking-wider text-[8px]">{spec.label}</span>
                      <strong className="text-mint-light block truncate">{spec.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-900/60 font-body">
                  <p className="text-slate-400 text-[11px] font-light max-w-md text-left leading-relaxed">
                    <strong>Pearlhaus Advantage:</strong> All diagnostic files are stored securely in our unified electronic health database, ensuring instantaneous clinical reference.
                  </p>
                  <div className="flex gap-3 shrink-0">
                    <Button size="sm" onClick={() => navigate(`/technology#${currentTech.slug}`)}>
                      Technical Specs
                    </Button>
                    <Link
                      to="/technology"
                      className="inline-flex items-center text-xs font-bold text-mint hover:text-mint-light transition-colors self-center px-1"
                    >
                      <span>Explore Tech</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnologySection;
