import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Activity, Shield, Hammer, ArrowRight, HelpCircle, AlertTriangle } from 'lucide-react';
import { treatments } from '../../data/treatments';
import { cn } from '../../lib/utils';

interface MegaMenuProps {
  isOpen: boolean;
  isScrolled?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onItemClick: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  isOpen,
  isScrolled = false,
  onMouseEnter,
  onMouseLeave,
  onItemClick,
}) => {
  // Let's rotate the featured treatment from the featured ones
  const featuredList = treatments.filter((t) => t.featured);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Rotate featured treatment every time mega menu opens
      setFeaturedIndex((prev) => (prev + 1) % featuredList.length);
    }
  }, [isOpen, featuredList.length]);

  const currentFeatured = featuredList[featuredIndex] || treatments[0];

  const categories = [
    {
      title: 'Cosmetic Dentistry',
      icon: <Sparkles className="w-4 h-4 text-mint mr-2.5 shrink-0" />,
      items: [
        { name: 'Teeth Whitening', slug: 'teeth-whitening' },
        { name: 'Porcelain Veneers', slug: 'porcelain-veneers' },
        { name: 'Composite Bonding', slug: 'composite-bonding' },
        { name: 'Smile Makeover', slug: 'smile-makeover' },
        { name: 'Gum Contouring', slug: 'gum-contouring' },
      ],
    },
    {
      title: 'General Dentistry',
      icon: <Shield className="w-4 h-4 text-mint mr-2.5 shrink-0" />,
      items: [
        { name: 'Check-up & Clean', slug: 'checkup-clean' },
        { name: 'White Fillings', slug: 'white-fillings' },
        { name: 'Root Canal Treatment', slug: 'root-canal' },
        { name: 'Tooth Extractions', slug: 'extractions' },
        { name: 'Mouthguards & Splints', slug: 'mouthguards' },
      ],
    },
    {
      title: 'Orthodontics',
      icon: <Activity className="w-4 h-4 text-mint mr-2.5 shrink-0" />,
      items: [
        { name: 'Invisalign', slug: 'invisalign' },
        { name: 'Traditional Braces', slug: 'braces' },
        { name: 'Retainers', slug: 'retainers' },
        { name: 'Teen Orthodontics', slug: 'teen-orthodontics' },
      ],
    },
    {
      title: 'Implants & Restorations',
      icon: <Hammer className="w-4 h-4 text-mint mr-2.5 shrink-0" />,
      items: [
        { name: 'Single Dental Implant', slug: 'single-implant' },
        { name: 'All-on-4 Implants', slug: 'all-on-4' },
        { name: 'Implant-Supported Dentures', slug: 'implant-dentures' },
        { name: 'Crowns & Bridges', slug: 'crowns-bridges' },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={cn(
            'absolute z-50 overflow-hidden transition-all duration-300',
            isScrolled
              ? 'left-4 right-4 top-[72px] max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/50 shadow-2xl shadow-navy/5'
              : 'left-0 right-0 top-[112px] w-full bg-white/95 backdrop-blur-md border-b border-slate-200/30 shadow-xl'
          )}
        >
          {/* Main Grid: 5 columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-12 md:px-16 py-10 max-w-7xl mx-auto">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                <h4 className="flex items-center text-xs font-bold tracking-wider text-mint uppercase font-body select-none">
                  {cat.icon}
                  <span>{cat.title}</span>
                </h4>
                <ul className="flex flex-col space-y-3 font-body text-sm text-slate">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        to={`/treatments/${item.slug}`}
                        onClick={onItemClick}
                        className="group relative inline-block text-slate hover:text-mint transition-colors duration-300 py-0.5 cursor-pointer text-xs font-semibold"
                      >
                        <span>{item.name}</span>
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Visual Featured Card (Col 5) */}
            <div className="bg-gradient-to-br from-mint-pale/50 to-white border border-mint/20 shadow-md shadow-mint/5 p-6 rounded-xl flex flex-col justify-between h-full hover:shadow-lg hover:border-mint/45 hover:shadow-mint/10 transition-all duration-300 ease-out group/card">
              <div>
                <span className="inline-flex items-center bg-mint/10 border border-mint/25 text-mint text-[9px] font-bold px-2.5 py-0.5 rounded-full font-body uppercase tracking-wider select-none">
                  Featured Treatment
                </span>
                <h4 className="text-lg font-display font-bold text-navy mt-4 leading-tight">
                  {currentFeatured.title}
                </h4>
                <p className="text-xs text-slate-500 font-body mt-2.5 leading-relaxed line-clamp-3 font-light">
                  {currentFeatured.shortDescription}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to={`/treatments/${currentFeatured.slug}`}
                  onClick={onItemClick}
                  className="inline-flex items-center text-xs font-bold text-mint hover:text-mint-dark transition-colors duration-300 uppercase tracking-wider cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover/card:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="bg-slate-50/50 border-t border-slate-100 px-12 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold font-body text-navy tracking-wider uppercase max-w-7xl mx-auto">
            <Link
              to="/booking"
              onClick={onItemClick}
              className="group relative flex items-center hover:text-mint transition-colors duration-300 mb-2.5 md:mb-0 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 mr-2 text-mint transition-transform duration-300 group-hover:scale-110" />
              <span>Not sure which treatment? ➔ Start Booking Online</span>
              <span className="absolute bottom-0 left-6 w-[calc(100%-1.5rem)] h-[1.5px] bg-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            <Link
              to="/emergency-dental"
              onClick={onItemClick}
              className="group relative flex items-center text-error hover:text-error/80 transition-colors duration-300 cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110 animate-pulse" />
              <span>Emergency dental pain? ➔ Same-Day Appointments</span>
              <span className="absolute bottom-0 left-6 w-[calc(100%-1.5rem)] h-[1.5px] bg-error scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
