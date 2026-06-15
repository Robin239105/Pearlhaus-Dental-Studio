import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { stats } from '../../data/stats';

export const StatsSection: React.FC = () => {
  return (
    <section className="w-full bg-mint-pale border-y border-border py-10 md:py-14 select-none z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center items-center">
        {stats.map((stat, idx) => {
          // Check if value is decimal (like 4.9)
          const decimals = stat.value % 1 !== 0 ? 1 : 0;

          return (
            <motion.div
              key={idx}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col items-center justify-center space-y-1.5"
            >
              {/* Number */}
              <div className="font-display font-bold text-3xl md:text-4xl text-mint-dark flex items-baseline">
                <CountUp
                  end={stat.value}
                  decimals={decimals}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                <span>{stat.suffix}</span>
              </div>
              
              {/* Label */}
              <span className="font-body text-xs font-semibold text-navy tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
