import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, Phone, MapPin, Calendar, AlertTriangle, Clock, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import MegaMenu from './MegaMenu';
import Button from '../ui/Button';
import { treatments } from '../../data/treatments';
import { team } from '../../data/team';
import { blog } from '../../data/blog';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hover mega menu states
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Dropdown states
  const [isPatientInfoDropdownOpen, setIsPatientInfoDropdownOpen] = useState(false);
  const patientInfoTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Search states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    type: 'treatment' | 'dentist' | 'blog';
    title: string;
    link: string;
  }[]>([]);

  // Mobile Accordion state
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);
  const [isMobilePatientInfoOpen, setIsMobilePatientInfoOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 36) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mega Menu hover handling
  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  // Patient Info dropdown hover handling
  const handleDropdownEnter = () => {
    if (patientInfoTimeoutRef.current) clearTimeout(patientInfoTimeoutRef.current);
    setIsPatientInfoDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    patientInfoTimeoutRef.current = setTimeout(() => {
      setIsPatientInfoDropdownOpen(false);
    }, 200);
  };

  // Search trigger
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results: typeof searchResults = [];

    // Search treatments
    treatments
      .filter((t) => t.title.toLowerCase().includes(query.toLowerCase()) || t.category.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 3)
      .forEach((t) => {
        results.push({ type: 'treatment', title: t.title, link: `/treatments/${t.slug}` });
      });

    // Search dentists
    team
      .filter((d) => d.name.toLowerCase().includes(query.toLowerCase()) || d.specialties.some(s => s.toLowerCase().includes(query.toLowerCase())))
      .slice(0, 3)
      .forEach((d) => {
        results.push({ type: 'dentist', title: d.name, link: `/team/${d.slug}` });
      });

    // Search blogs
    blog
      .filter((b) => b.title.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 3)
      .forEach((b) => {
        results.push({ type: 'blog', title: b.title, link: `/blog/${b.slug}` });
      });

    setSearchResults(results);
  };

  const closeAll = () => {
    setIsMegaMenuOpen(false);
    setIsPatientInfoDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative font-body font-medium text-sm transition-colors duration-300 py-2 cursor-pointer group',
      isActive ? 'text-mint' : 'text-navy hover:text-mint'
    );

  return (
    <div className="h-[112px] relative select-none">
      <header
        className={cn(
          'transition-all duration-500 z-40 ease-in-out',
          isScrolled
            ? 'fixed top-3 left-4 right-4 max-w-7xl mx-auto rounded-full bg-white/90 border border-slate-200/50 shadow-xl shadow-navy/5 h-[64px] px-8 backdrop-blur-md overflow-hidden'
            : 'absolute top-0 left-0 right-0 border-b border-slate-200/30 h-[112px] bg-white/80 backdrop-blur-sm'
        )}
      >
        {/* ROW 1: INTEGRATED TOP HEADER */}
        {/* ROW 1: TOP HEADER — Mobile (compact) */}
        <div
          className={cn(
            'md:hidden w-full border-b border-slate-200/10 bg-slate-50/40 text-navy/70 transition-all duration-300 ease-in-out select-none overflow-hidden',
            isScrolled ? 'h-0 opacity-0 pointer-events-none' : 'h-[36px]'
          )}
        >
          <div className="w-full h-full flex items-center justify-between px-4 text-[10px] font-semibold tracking-widest uppercase">
            <a
              href="tel:+61290001420"
              className="flex items-center text-navy/70 hover:text-mint transition-colors duration-300 cursor-pointer"
            >
              <Phone className="w-3 h-3 mr-1.5 text-mint" />
              <span>+61 2 9000 1420</span>
            </a>
            <Link
              to="/emergency-dental"
              className="flex items-center border border-error/30 text-error hover:bg-error hover:text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider transition-all duration-300 cursor-pointer"
            >
              <span className="relative flex h-1.5 w-1.5 mr-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-error"></span>
              </span>
              <span>Emergency</span>
            </Link>
          </div>
        </div>

        {/* ROW 1: TOP HEADER — Desktop (full) */}
        <div
          className={cn(
            'hidden md:block w-full border-b border-slate-200/10 bg-slate-50/40 text-navy/70 transition-all duration-300 ease-in-out select-none overflow-hidden',
            isScrolled ? 'h-0 opacity-0 pointer-events-none' : 'h-[36px]'
          )}
        >
          <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between px-6 md:px-16 text-[10px] font-semibold tracking-widest uppercase">
            {/* Left side: Contact & Hours */}
            <div className="flex items-center space-x-8">
              <a
                href="tel:+61290001420"
                className="group relative flex items-center text-navy/70 hover:text-mint transition-colors duration-300 cursor-pointer"
              >
                <Phone className="w-3 h-3 mr-2 text-mint transition-transform duration-300 group-hover:rotate-12" />
                <span>+61 2 9000 1420</span>
                <span className="absolute -bottom-1.5 left-5 w-[calc(100%-1.25rem)] h-[1px] bg-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <div className="flex items-center text-navy/45 font-light select-none space-x-2.5">
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
                className="flex items-center border border-error/30 text-error hover:bg-error hover:text-white px-3 py-0.5 rounded-full text-[9px] font-bold tracking-wider transition-all duration-300 cursor-pointer shadow-sm shadow-error/5"
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
                className="group relative flex items-center text-navy/70 hover:text-mint transition-colors duration-300 cursor-pointer"
                aria-label="Follow Pearlhaus on Instagram"
              >
                <Instagram className="w-3 h-3 text-mint mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span>@pearlhaus.dental</span>
                <span className="absolute -bottom-1.5 left-5 w-[calc(100%-1.25rem)] h-[1px] bg-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </div>
          </div>
        </div>

        {/* ROW 2: NAVBAR MAIN ROW */}
        <div
          className={cn(
            'w-full flex items-center justify-between transition-all duration-300 max-w-7xl mx-auto',
            isScrolled ? 'h-[64px] px-0' : 'h-[76px] px-6 md:px-16'
          )}
        >
          {/* LOGO */}
          <Link to="/" onClick={closeAll} className="flex flex-col select-none group cursor-pointer">
            <div className="flex items-baseline">
              <span className="font-display italic font-light text-2xl md:text-2xl text-navy group-hover:text-mint transition-colors duration-300">
                pearl
              </span>
              <span className="font-body font-bold text-2xl md:text-2xl text-mint group-hover:text-mint-dark transition-colors duration-300">
                haus
              </span>
            </div>
            <span className="font-body font-light text-[8px] md:text-[9px] tracking-[0.4em] text-slate-400 -mt-1 uppercase">
              DENTAL STUDIO
            </span>
          </Link>

          {/* DESKTOP NAV ITEMS */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative" onMouseEnter={handleMegaMenuEnter} onMouseLeave={handleMegaMenuLeave}>
              <button type="button" className={cn('group relative font-body font-medium text-sm transition-colors duration-300 py-2 flex items-center cursor-pointer hover:text-mint focus:outline-none', isMegaMenuOpen ? 'text-mint' : 'text-navy')}>
                <span>Treatments</span>
                <ChevronDown className="w-3.5 h-3.5 ml-1 transition-transform duration-300" style={{ transform: isMegaMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                <span className={cn('absolute bottom-0 left-0 h-[2px] bg-mint transition-transform duration-300 origin-left w-full', isMegaMenuOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')} />
              </button>
            </div>
            <NavLink to="/team" className={navLinkClass}>
              {({ isActive }) => (<><span>Our Team</span><span className={cn('absolute bottom-0 left-0 h-[2px] bg-mint transition-transform duration-300 origin-left w-full', isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')} /></>)}
            </NavLink>
            <NavLink to="/gallery" className={navLinkClass}>
              {({ isActive }) => (<><span>Gallery</span><span className={cn('absolute bottom-0 left-0 h-[2px] bg-mint transition-transform duration-300 origin-left w-full', isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')} /></>)}
            </NavLink>
            <div className="relative" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
              <button type="button" className={cn('group relative font-body font-medium text-sm transition-colors duration-300 py-2 flex items-center cursor-pointer hover:text-mint focus:outline-none', isPatientInfoDropdownOpen ? 'text-mint' : 'text-navy')}>
                <span>Patient Info</span>
                <ChevronDown className="w-3.5 h-3.5 ml-1 transition-transform duration-300" style={{ transform: isPatientInfoDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                <span className={cn('absolute bottom-0 left-0 h-[2px] bg-mint transition-transform duration-300 origin-left w-full', isPatientInfoDropdownOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')} />
              </button>
              <AnimatePresence>
                {isPatientInfoDropdownOpen && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="absolute left-0 top-full mt-3 w-52 bg-white/95 border border-slate-200/50 rounded-xl shadow-xl py-2.5 z-50 backdrop-blur-md">
                    {[{ name: 'New Patient Guide', path: '/new-patients' }, { name: 'Online Patient Forms', path: '/patient-forms' }, { name: 'Finance & Payment Plans', path: '/finance' }, { name: 'FAQ', path: '/faq' }, { name: 'Patient Hub', path: '/patient-info' }].map((item) => (
                      <Link key={item.path} to={item.path} onClick={closeAll} className="block px-4 py-2 text-xs text-navy hover:bg-mint-pale/50 hover:text-mint transition-colors duration-300 font-body font-semibold cursor-pointer">{item.name}</Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink to="/about" className={navLinkClass}>
              {({ isActive }) => (<><span>About</span><span className={cn('absolute bottom-0 left-0 h-[2px] bg-mint transition-transform duration-300 origin-left w-full', isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')} /></>)}
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              {({ isActive }) => (<><span>Blog</span><span className={cn('absolute bottom-0 left-0 h-[2px] bg-mint transition-transform duration-300 origin-left w-full', isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')} /></>)}
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              {({ isActive }) => (<><span>Contact</span><span className={cn('absolute bottom-0 left-0 h-[2px] bg-mint transition-transform duration-300 origin-left w-full', isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')} /></>)}
            </NavLink>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button type="button" onClick={() => setIsSearchOpen(true)} className="p-2 text-navy hover:text-mint transition-all duration-300 focus:outline-none cursor-pointer hover:scale-105" aria-label="Open search"><Search className="w-5 h-5" /></button>
            <Button size="sm" onClick={() => navigate('/booking')}><Calendar className="w-4 h-4 mr-2" />Book Appointment</Button>
          </div>

          <div className="flex lg:hidden items-center space-x-3">
            <button type="button" onClick={() => setIsSearchOpen(true)} className="p-2 text-navy hover:text-mint transition-colors duration-200 focus:outline-none cursor-pointer" aria-label="Open search"><Search className="w-5 h-5" /></button>
            <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-navy hover:text-mint transition-colors duration-200 focus:outline-none cursor-pointer" aria-label="Toggle navigation menu">{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
          </div>
        </div>

        <MegaMenu isOpen={isMegaMenuOpen} isScrolled={isScrolled} onMouseEnter={handleMegaMenuEnter} onMouseLeave={handleMegaMenuLeave} onItemClick={closeAll} />
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 overflow-y-auto flex flex-col p-6 lg:hidden">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
              <Link to="/" onClick={closeAll} className="flex flex-col select-none cursor-pointer">
                <div className="flex items-baseline"><span className="font-display italic font-light text-2xl text-navy">pearl</span><span className="font-body font-bold text-2xl text-mint">haus</span></div>
                <span className="font-body font-light text-[8px] tracking-[0.4em] text-slate-400 uppercase">DENTAL STUDIO</span>
              </Link>
              <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-navy hover:text-mint focus:outline-none cursor-pointer"><X className="w-6 h-6" /></button>
            </div>
            <nav className="flex-1 flex flex-col space-y-4 font-body text-base font-medium">
              <div>
                <button type="button" onClick={() => setIsMobileTreatmentsOpen(!isMobileTreatmentsOpen)} className="flex items-center justify-between w-full py-2 text-navy hover:text-mint focus:outline-none cursor-pointer">
                  <span>Treatments</span>
                  <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', isMobileTreatmentsOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {isMobileTreatmentsOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 border-l border-slate-200 flex flex-col space-y-2 mt-2">
                      <Link to="/treatments" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">View All Treatments</Link>
                      <Link to="/cosmetic-dentistry" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">Cosmetic Dentistry Hub</Link>
                      <Link to="/general-dentistry" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">General Dentistry Hub</Link>
                      <Link to="/orthodontics" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">Orthodontics Hub</Link>
                      <Link to="/implants" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">Implants Hub</Link>
                      <Link to="/childrens-dentistry" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">Children's Dentistry Hub</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/team" onClick={closeAll} className="py-2 hover:text-mint text-navy border-b border-slate-100 cursor-pointer">Our Team</Link>
              <Link to="/gallery" onClick={closeAll} className="py-2 hover:text-mint text-navy border-b border-slate-100 cursor-pointer">Smile Gallery</Link>
              <div>
                <button type="button" onClick={() => setIsMobilePatientInfoOpen(!isMobilePatientInfoOpen)} className="flex items-center justify-between w-full py-2 text-navy hover:text-mint focus:outline-none cursor-pointer">
                  <span>Patient Info</span>
                  <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', isMobilePatientInfoOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {isMobilePatientInfoOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 border-l border-slate-200 flex flex-col space-y-2 mt-2">
                      <Link to="/new-patients" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">New Patient Guide</Link>
                      <Link to="/patient-forms" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">Online Patient Forms</Link>
                      <Link to="/finance" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">Finance & Repayments</Link>
                      <Link to="/faq" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">FAQ</Link>
                      <Link to="/patient-info" onClick={closeAll} className="py-1.5 text-sm hover:text-mint cursor-pointer">Patient Info Hub</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/about" onClick={closeAll} className="py-2 hover:text-mint text-navy border-b border-slate-100 cursor-pointer">About Pearlhaus</Link>
              <Link to="/blog" onClick={closeAll} className="py-2 hover:text-mint text-navy border-b border-slate-100 cursor-pointer">Dental Blog</Link>
              <Link to="/contact" onClick={closeAll} className="py-2 hover:text-mint text-navy border-b border-slate-100 cursor-pointer">Contact & Location</Link>
            </nav>
            <div className="border-t border-slate-100 pt-6 mt-6 space-y-4">
              <a href="tel:+61290001420" className="flex items-center text-sm font-semibold text-slate font-body cursor-pointer"><Phone className="w-4 h-4 text-mint mr-2" /><span>+61 2 9000 1420</span></a>
              <div className="flex items-center text-sm font-semibold text-slate font-body select-none"><MapPin className="w-4 h-4 text-mint mr-2" /><span>142 Harbour Street, Sydney NSW</span></div>
              <Button fullWidth onClick={() => { closeAll(); navigate('/booking'); }}>Book Appointment</Button>
              <Link to="/emergency-dental" onClick={closeAll} className="flex items-center justify-center text-xs font-bold text-error bg-error/5 border border-error/15 py-3.5 rounded-full uppercase tracking-wider hover:bg-error hover:text-white transition-all duration-300 cursor-pointer gap-2 shadow-sm shadow-error/5">
                <AlertTriangle className="w-4 h-4 shrink-0 animate-pulse" />
                <span>Same-Day Emergency Service</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[100px] overflow-y-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeAll} className="fixed inset-0 bg-navy/50 backdrop-blur-md" />
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="relative w-full max-w-2xl bg-white/95 rounded-2xl shadow-2xl z-10 overflow-hidden border border-mint/20 backdrop-blur-md">
              <div className="flex items-center border-b border-slate-100 px-5 py-4.5 bg-slate-50/50">
                <Search className="w-5 h-5 text-mint mr-3 shrink-0" />
                <input type="text" placeholder="Search treatments, team, blog..." value={searchQuery} onChange={handleSearchChange} autoFocus className="w-full font-body text-base text-navy placeholder:text-slate-400 bg-transparent focus:outline-none" />
                <button type="button" onClick={closeAll} className="p-1 rounded-full hover:bg-slate-100 text-muted transition-colors duration-200 cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              <div className="max-h-[300px] overflow-y-auto font-body">
                {searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((item, idx) => (
                      <Link key={idx} to={item.link} onClick={closeAll} className="flex items-center justify-between px-6 py-4 hover:bg-mint-pale/40 transition-colors duration-300 border-b border-slate-50 last:border-0 cursor-pointer group">
                        <span className="text-sm font-semibold text-navy group-hover:text-mint transition-colors duration-200">{item.title}</span>
                        <span className="text-[9px] font-bold text-mint bg-mint-pale border border-mint/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider select-none">{item.type}</span>
                      </Link>
                    ))}
                  </div>
                ) : searchQuery.trim() ? (
                  <div className="px-6 py-8 text-center text-sm text-slate-400 select-none">No results found for "{searchQuery}"</div>
                ) : (
                  <div className="px-6 py-8 text-center text-sm text-slate-400 select-none">Type a query to search Pearlhaus resources...</div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
