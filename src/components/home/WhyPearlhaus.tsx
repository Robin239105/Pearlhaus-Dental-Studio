import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import useScrollReveal from '../../hooks/useScrollReveal';

export const WhyPearlhaus: React.FC = () => {
  const { ref, controls } = useScrollReveal();

  const differentiators = [
    {
      title: 'Pain-Free Promise',
      description: 'We use the latest anaesthetic techniques and gentle approaches to ensure every visit is comfortable. No more dental anxiety.',
    },
    {
      title: 'Same-Day Emergency Care',
      description: "Dental emergencies don't wait. Neither do we. Call our emergency line for same-day appointments, available 6 days a week.",
    },
    {
      title: 'Interest-Free Payment Plans',
      description: "Premium dental care shouldn't be out of reach. We offer 0% interest finance plans up to 24 months through our payment partners.",
    },
    {
      title: 'State-of-the-Art Technology',
      description: 'From 3D CT scans to CEREC same-day crowns, our technology means less time in the chair and better, more precise results.',
    },
    {
      title: 'Family-Friendly Environment',
      description: 'From toddlers to grandparents, we create a warm, welcoming space where the whole family feels comfortable and cared for.',
    },
    {
      title: 'Transparent Pricing Always',
      description: 'No hidden fees, no surprises. We provide detailed treatment plans with full cost breakdown before any work begins. Always.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6 md:px-16 bg-surface border-y border-border overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
        
        {/* Left Side: Editorial Image Stack */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[450px] md:h-[550px] w-full">
          {/* Top Image (Clinic Interior) */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-4 top-4 w-[80%] h-[320px] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/site/patient_consultation.png"
              alt="Pearlhaus clinical studio interior"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </motion.div>

          {/* Bottom Overlapping Image (Doctor with Patient) */}
          <motion.div
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-4 bottom-4 w-[65%] h-[240px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10"
          >
            {/* Mint accent border on bottom image top-left corner */}
            <div className="absolute left-0 top-0 w-8 h-8 border-t-4 border-l-4 border-mint z-20 rounded-tl-lg" />
            <img
              src="/images/site/clinical_checkup.png"
              alt="Gentle patient checkup by Dr. Charlotte Whitmore"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Right Side: List of Differentiators */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div className="space-y-2">
            <SectionLabel>The Pearlhaus Difference</SectionLabel>
            <h2 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Dentistry That Puts{' '}
              <span className="block font-semibold">You First. Always.</span>
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4"
          >
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-3.5"
              >
                {/* Mint Circle Number */}
                <div className="w-8 h-8 rounded-full bg-mint-pale border border-mint/20 flex items-center justify-center shrink-0 font-body text-xs font-bold text-mint-dark">
                  0{index + 1}
                </div>
                <div className="space-y-1">
                  <h4 className="font-body font-bold text-navy text-sm">
                    {diff.title}
                  </h4>
                  <p className="font-body font-light text-xs text-slate leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyPearlhaus;
