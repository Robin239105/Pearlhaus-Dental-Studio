import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import { team } from '../../data/team';
import useScrollReveal from '../../hooks/useScrollReveal';

export const TeamPreview: React.FC = () => {
  const navigate = useNavigate();
  const { ref, controls } = useScrollReveal();
  
  // Get 4 featured doctors (or first 4 if less than 4 featured)
  const featuredDoctors = team.filter((d) => d.featured).slice(0, 4);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6 md:px-16 bg-off-white overflow-hidden z-10">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        {/* Title Block */}
        <div className="space-y-2 max-w-lg mx-auto">
          <SectionLabel>Your Care Team</SectionLabel>
          <h2 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
            Meet Our Dentists
          </h2>
          <p className="font-body font-light text-xs text-slate pt-2">
            Qualified, highly experienced, and genuinely kind practitioners dedicated to your care.
          </p>
        </div>

        {/* Doctor Grid (4 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          {featuredDoctors.map((d) => (
            <motion.div
              key={d.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white border border-border rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-mint/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Square Photo with Rounded Corners */}
                <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-border-active bg-surface relative mb-4">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover select-none pointer-events-none hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1 font-body">
                  <h4 className="font-display font-bold text-navy text-lg leading-tight">
                    {d.name}
                  </h4>
                  <span className="text-xs font-semibold text-mint block">
                    {d.title}
                  </span>
                  <p className="text-[10px] text-muted leading-tight font-light line-clamp-2">
                    {d.qualifications[0]}
                  </p>
                </div>

                {/* Specialty tags */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {d.specialties.slice(0, 2).map((spec) => (
                    <span
                      key={spec}
                      className="bg-mint-pale text-mint-dark font-semibold text-[9px] px-2 py-0.5 rounded uppercase tracking-wider"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Profile CTA */}
              <div className="pt-5 border-t border-border/40 mt-5 flex items-center justify-between">
                <Link
                  to={`/team/${d.slug}`}
                  className="text-xs font-bold text-navy hover:text-mint transition-colors underline decoration-mint decoration-2 underline-offset-4 font-body"
                >
                  View Profile
                </Link>
                <div className="flex items-center text-[10px] text-muted font-body">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1" />
                  <span>{d.experience} Yrs</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Team CTA */}
        <div className="pt-4">
          <Button variant="outline" onClick={() => navigate('/team')}>
            Meet the Full Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
