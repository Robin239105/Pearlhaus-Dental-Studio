import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ChevronRight, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import { team } from '../data/team';

export const Team: React.FC = () => {
  const navigate = useNavigate();

  // Find Principal Dentist (Dr. Charlotte Whitmore)
  const principal = team.find((d) => d.slug === 'charlotte-whitmore') || team[0];
  // Other dentists
  const otherDentists = team.filter((d) => d.slug !== 'charlotte-whitmore');

  // Support staff list (receptionist, assistants)
  const supportStaff = [
    { name: 'Chloe Saunders', role: 'Practice Manager', image: '/images/team/charlotte-whitmore.png' },
    { name: 'Lucas Bennett', role: 'Head Dental Hygienist', image: '/images/team/james-okafor.png' },
    { name: 'Amelia Chen', role: 'Lead Dental Assistant', image: '/images/team/priya-nair.png' },
    { name: 'Liam Kovac', role: 'Receptionist & Patient Relations', image: '/images/team/ethan-park.png' },
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Our Team' }]} />
          <div className="space-y-2 max-w-2xl">
            <SectionLabel>Clinical Excellence</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Meet the Clinicians{' '}
              <span className="block font-semibold">Of Pearlhaus Dental Studio.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Our hand-picked practitioners combine international clinical credentials with a gentle, patient-focused approach, ensuring your dental visit is comfortable.
            </p>
          </div>
        </div>
      </div>

      {/* 2. FEATURED PRINCIPAL CARD */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto">
        <h3 className="font-display font-semibold text-navy text-xl md:text-2xl mb-6 text-left border-b pb-3">
          Our Founder & Principal Dentist
        </h3>
        
        <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-12 items-stretch gap-6">
          {/* Photo */}
          <div className="lg:col-span-5 h-[320px] lg:h-full min-h-[300px] relative">
            <img
              src={principal.image}
              alt={principal.name}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />
          </div>
          {/* Bio info */}
          <div className="lg:col-span-7 p-6 md:p-10 text-left flex flex-col justify-between space-y-6 font-body">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-mint bg-mint-pale border border-mint/20 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                Founder & Principal
              </span>
              <h4 className="font-display font-bold text-navy text-2xl leading-none">
                {principal.name}
              </h4>
              <p className="text-xs text-mint font-semibold">{principal.title}</p>
              <p className="text-xs font-light text-slate leading-relaxed pt-2">{principal.bio}</p>
              
              <div className="flex flex-wrap gap-1.5 pt-2">
                {principal.specialties.map((spec) => (
                  <span key={spec} className="bg-mint-pale text-mint-dark font-semibold text-[9px] px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border/60 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-1.5 text-xs text-slate">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>{principal.experience} Years of Academic & Clinical Excellence</span>
              </div>
              <Link
                to={`/team/${principal.slug}`}
                className="inline-flex items-center text-xs font-bold text-mint hover:text-mint-dark transition-colors uppercase tracking-wider"
              >
                <span>Read Full Biography</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ALL DENTISTS GRID */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto bg-surface border-y border-border">
        <h3 className="font-display font-semibold text-navy text-xl md:text-2xl mb-8 text-left">
          Our Dental Practitioners
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left font-body">
          {otherDentists.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-full aspect-[16/11] rounded-xl overflow-hidden mb-4 relative bg-surface">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-navy text-lg leading-tight">{d.name}</h4>
                  <span className="text-xs text-mint font-semibold block">{d.title}</span>
                  <p className="text-[11px] font-light text-slate line-clamp-3 leading-relaxed pt-1">{d.bio}</p>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-4">
                  {d.specialties.slice(0, 2).map((spec) => (
                    <span key={spec} className="bg-mint-pale text-mint-dark font-semibold text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-border/40 flex items-center justify-between">
                <Link
                  to={`/team/${d.slug}`}
                  className="text-xs font-bold text-navy hover:text-mint transition-colors underline decoration-mint decoration-2 underline-offset-4"
                >
                  View Profile
                </Link>
                <div className="flex items-center text-[10px] text-muted">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1" />
                  <span>{d.experience} Years Exp</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SUPPORT STAFF SECTION */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto space-y-8 text-center">
        <div className="space-y-2 max-w-md mx-auto">
          <SectionLabel>Practice Care</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
            Our Supportive Staff
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left font-body">
          {supportStaff.map((staff, idx) => (
            <div key={idx} className="bg-white border border-border rounded-xl p-4 shadow-sm text-center space-y-3">
              <Avatar
                src={staff.image}
                alt={staff.name}
                size="xl"
                border
                className="w-20 h-20 mx-auto"
              />
              <div>
                <h4 className="font-semibold text-navy text-sm leading-tight">{staff.name}</h4>
                <p className="text-[11px] text-muted mt-0.5">{staff.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CAREERS CTA */}
      <div className="bg-surface border-t border-border py-16 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <Briefcase className="w-10 h-10 text-mint mx-auto" />
          <h3 className="font-display font-semibold text-navy text-2xl">
            Join the Pearlhaus Team
          </h3>
          <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
            We are always seeking passionate practitioners, dental assistants, and receptionists who prioritize patient-centered care and aesthetic excellence.
          </p>
          <a
            href="mailto:careers@pearlhaus.com.au"
            className="inline-flex items-center justify-center px-6 py-3 border border-navy text-navy hover:bg-navy hover:text-white rounded-md text-xs font-bold uppercase tracking-wider font-body transition-colors duration-300"
          >
            <Mail className="w-4 h-4 mr-2" />
            <span>Send CV / Portfolio</span>
          </a>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Team;
