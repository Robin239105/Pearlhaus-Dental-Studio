import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Star, CreditCard, Sparkles } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const badges = [
    { icon: <ShieldCheck className="w-4 h-4 text-mint shrink-0" />, text: 'ADA Member Practice' },
    { icon: <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />, text: '4.9/5 Google Rating' },
    { icon: <Award className="w-4 h-4 text-mint shrink-0" />, text: 'Invisalign Diamond Provider' },
    { icon: <ShieldCheck className="w-4 h-4 text-mint shrink-0" />, text: 'AHPRA Registered Dentists' },
    { icon: <CreditCard className="w-4 h-4 text-mint shrink-0" />, text: 'Interest-Free Finance' },
  ];

  return (
    <div className="hidden sm:block w-full bg-surface border-y border-border py-6 overflow-x-auto select-none z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 flex items-center justify-between min-w-[900px] gap-4"
      >
        {badges.map((badge, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center space-x-2.5 font-body text-xs font-semibold text-navy tracking-wide uppercase">
              {badge.icon}
              <span>{badge.text}</span>
            </div>
            {idx < badges.length - 1 && (
              <div className="h-4 w-[1px] bg-border shrink-0" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustBar;
