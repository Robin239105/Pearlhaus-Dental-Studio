import React from 'react';
import { Phone, Clock, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TopBar: React.FC = () => {
  return (
    <div className="hidden md:flex w-full h-[38px] bg-[#071320] border-b border-white/5 text-white/70 font-body text-[10px] font-semibold tracking-widest uppercase px-16 items-center justify-between z-45 select-none">
      {/* Left side: Contact & Hours */}
      <div className="flex items-center space-x-8">
        <a
          href="tel:+61290001420"
          className="group relative flex items-center text-white/70 hover:text-mint transition-colors duration-300 cursor-pointer"
        >
          <Phone className="w-3 h-3 mr-2 text-mint transition-transform duration-300 group-hover:rotate-12" />
          <span>+61 2 9000 1420</span>
          <span className="absolute -bottom-1.5 left-5 w-[calc(100%-1.25rem)] h-[1px] bg-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
        <div className="flex items-center text-white/45 font-light select-none space-x-2.5">
          <Clock className="w-3 h-3 text-mint/85" />
          <span>Mon-Fri: 8am – 7pm</span>
          <span className="relative flex h-1 w-1 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint/50 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1 w-1 bg-mint/60"></span>
          </span>
          <span>Sat: 9am – 5pm</span>
        </div>
      </div>

      {/* Right side: Emergency & Socials */}
      <div className="flex items-center space-x-8">
        <Link
          to="/emergency-dental"
          className="flex items-center border border-error/30 text-[#FC8181] hover:bg-error hover:text-white hover:border-error px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm shadow-error/5"
        >
          <span className="relative flex h-1.5 w-1.5 mr-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75 animate-duration-1000"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-error"></span>
          </span>
          <span>Emergency Support</span>
        </Link>
        <a
          href="https://instagram.com/pearlhaus.dental"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center text-white/70 hover:text-mint transition-colors duration-300 cursor-pointer"
          aria-label="Follow Pearlhaus on Instagram"
        >
          <Instagram className="w-3 h-3 text-mint mr-2 transition-transform duration-300 group-hover:scale-110" />
          <span>@pearlhaus.dental</span>
          <span className="absolute -bottom-1.5 left-5 w-[calc(100%-1.25rem)] h-[1px] bg-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
