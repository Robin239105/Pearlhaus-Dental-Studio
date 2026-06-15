import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Shield, Activity, Hammer, Baby, ChevronRight, Clock, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { treatments } from '../data/treatments';
import { cn } from '../lib/utils';

export const Treatments: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    { name: 'All', icon: null },
    { name: 'Cosmetic Dentistry', slug: 'cosmetic-dentistry', icon: <Sparkles className="w-3.5 h-3.5 mr-1" /> },
    { name: 'General Dentistry', slug: 'general-dentistry', icon: <Shield className="w-3.5 h-3.5 mr-1" /> },
    { name: 'Orthodontics', slug: 'orthodontics', icon: <Activity className="w-3.5 h-3.5 mr-1" /> },
    { name: 'Dental Implants', slug: 'implants', icon: <Hammer className="w-3.5 h-3.5 mr-1" /> },
    { name: "Children's Dentistry", slug: 'childrens-dentistry', icon: <Baby className="w-3.5 h-3.5 mr-1" /> },
  ];

  // Filter treatments
  const filteredTreatments = treatments.filter((t) => {
    if (activeFilter === 'All') return true;
    return t.category === activeFilter;
  });

  return (
    <PageWrapper>
      {/* 1. HERO BLOCK (mint gradient) */}
      <div className="w-full bg-gradient-to-br from-mint-pale via-surface to-warm-white border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        {/* Glow */}
        <div className="absolute right-[-10%) top-[-10%) w-[300px] h-[300px] bg-mint/5 rounded-full blur-[50px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Treatments' }]} />
          <div className="space-y-2 max-w-2xl">
            <SectionLabel>Our Dental Services</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Comprehensive Dental Care{' '}
              <span className="block font-semibold">Under One Roof.</span>
            </h1>
            <p className="font-body font-light text-xs md:text-sm text-slate leading-relaxed pt-2">
              Pearlhaus delivers state-of-the-art restorative, general, cosmetic, and pediatric dentistry. Select a category below to browse our specific treatments or read our guides.
            </p>
          </div>
        </div>
      </div>

      {/* 2. CATEGORY HUB PANELS */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.slice(1).map((cat) => (
            <Link
              key={cat.slug}
              to={`/${cat.slug}`}
              className="bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-mint/30 transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-mint-pale text-mint flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="font-body font-bold text-navy text-xs tracking-wider uppercase group-hover:text-mint transition-colors">
                {cat.name.replace(' Dentistry', '')}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. TREATMENTS CATALOG GRID */}
      <div className="px-6 md:px-16 py-8 max-w-7xl mx-auto space-y-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 border-b border-border pb-6 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveFilter(cat.name)}
              className={cn(
                'flex items-center px-5 py-2.5 text-xs font-semibold font-body tracking-wider uppercase rounded-full border transition-all duration-300',
                activeFilter === cat.name
                  ? 'bg-mint text-white border-mint shadow-md shadow-mint/15'
                  : 'bg-white text-navy border-border hover:border-mint hover:text-mint'
              )}
            >
              {cat.icon}
              <span>{cat.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Treatment cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-mint/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-surface relative">
                  {t.isNew && (
                    <span className="absolute left-4 top-4 bg-mint text-white font-bold text-[9px] px-2.5 py-1 rounded uppercase tracking-wider font-body z-10 shadow">
                      New
                    </span>
                  )}
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover select-none pointer-events-none hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="p-5 space-y-3 text-left">
                  <Badge variant="pale" className="text-[9px]">
                    {t.category}
                  </Badge>
                  <h3 className="font-display font-semibold text-navy text-lg leading-tight">
                    {t.title}
                  </h3>
                  <p className="font-body font-light text-xs text-slate line-clamp-3 leading-relaxed">
                    {t.shortDescription}
                  </p>
                </div>
              </div>

              {/* Price & Booking footer */}
              <div className="p-5 pt-0">
                <div className="border-t border-border/40 pt-4 flex items-center justify-between text-xs font-body text-slate">
                  <div>
                    <span className="text-[10px] text-muted block">Estimated Price</span>
                    <strong className="text-navy font-bold text-sm">{t.price}</strong>
                  </div>
                  <div className="flex items-center text-right text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-mint mr-1" />
                    <span>{t.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 pt-2">
                  <Link
                    to={`/treatments/${t.slug}`}
                    className="py-2.5 text-center text-xs font-bold border border-border rounded-md text-navy hover:bg-surface transition-colors font-body"
                  >
                    Details
                  </Link>
                  <Button
                    size="sm"
                    onClick={() => navigate(`/booking?treatment=${t.slug}`)}
                  >
                    Book
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. GENERAL CONSULTATION CTA */}
      <div className="bg-surface border-t border-border px-6 py-16 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <HelpCircle className="w-10 h-10 text-mint mx-auto" />
          <div className="space-y-1">
            <h3 className="font-display font-semibold text-navy text-2xl">
              Not Sure Which Treatment You Need?
            </h3>
            <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
              Book a General Consultation. We will perform a comprehensive diagnostic examination and help design a customized care plan.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => navigate('/booking')}>
              Book Consultation
            </Button>
            <Button variant="outline" onClick={() => navigate('/contact')}>
              Speak to Us
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Treatments;
