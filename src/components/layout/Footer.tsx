import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Youtube,
  Star,
  MapPin,
  Phone,
  Mail,
  AlertTriangle,
  ShieldCheck,
  Award,
  CreditCard,
  ChevronRight,
  Sparkles,
  Clock,
} from 'lucide-react';
import mapImage from '../../assets/sydney_cbd_clinic_map.png';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-[#050d18] text-white overflow-hidden z-30">
      {/* Subtle top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#2DBD8A] to-transparent" />

      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#2DBD8A]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#2DBD8A]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-white tracking-tight">
              Ready to{' '}
              <span className="text-[#2DBD8A]">transform</span> your smile?
            </h3>
            <p className="font-sans text-sm text-slate-400 mt-1.5 font-light">
              Experience the ultimate blend of luxury care and dental precision.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/booking')}
            className="shrink-0 bg-[#2DBD8A] hover:bg-[#26a87a] text-white px-8 py-3.5 rounded-full font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-[#2DBD8A]/20 cursor-pointer"
          >
            Book Appointment
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* ── MAIN BODY ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

        {/* ── Col 1: Brand ─────────────────────────────────────────────────── */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="col-span-2 lg:col-span-1 flex flex-col space-y-6">
          <Link to="/" className="flex flex-col select-none cursor-pointer group">
            <div className="flex items-baseline">
              <span className="font-sans italic font-light text-[26px] text-white group-hover:text-[#2DBD8A] transition-colors duration-300">pearl</span>
              <span className="font-sans font-bold text-[26px] text-[#2DBD8A]">haus</span>
            </div>
            <span className="font-sans font-light text-[9px] tracking-[0.4em] text-slate-500 -mt-1 uppercase">Dental Studio</span>
          </Link>

          <p className="font-script text-xl text-[#5ECFA6] leading-snug">"Where Confidence Begins."</p>

          <p className="font-sans font-light text-sm text-slate-400 leading-relaxed">
            Sydney's premier wellness-focused dental clinic. Since 2009, delivering patient-first restorative and cosmetic care in a warm, boutique environment.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-1">
            {[
              { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com/pearlhaus.dental', label: 'Instagram' },
              { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com/pearlhaus', label: 'Facebook' },
              { icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com', label: 'YouTube' },
              { icon: <Star className="w-4 h-4" />, href: '/faq', label: 'Reviews' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-[#2DBD8A] hover:border-[#2DBD8A]/50 hover:bg-[#2DBD8A]/10 transition-all duration-300 cursor-pointer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Col 2: Treatments ─────────────────────────────────────────────── */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col space-y-5">
          <h4 className="font-sans text-xs font-bold text-[#2DBD8A] uppercase tracking-[0.2em]">Treatments</h4>
          <ul className="flex flex-col space-y-4">
            {[
              { label: 'Cosmetic Dentistry', sub: 'Whitening · Veneers · Bonding', path: '/cosmetic-dentistry' },
              { label: 'General Dentistry', sub: 'Check-up · Fillings · Root Canals', path: '/general-dentistry' },
              { label: 'Orthodontics', sub: 'Invisalign · Braces · Retainers', path: '/orthodontics' },
              { label: 'Dental Implants', sub: 'Single · All-on-4 · Full Arch', path: '/implants' },
              { label: "Children's Dentistry", sub: 'Preventive · Fissure Sealants', path: '/childrens-dentistry' },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="group block"
                >
                  <span className="font-sans text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-200 block">{item.label}</span>
                  <span className="font-sans text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-200">{item.sub}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/treatments"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#2DBD8A] hover:text-white transition-colors duration-300 group cursor-pointer pt-1"
          >
            View All Treatments
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* ── Col 3: Clinic & Patient Info ─────────────────────────────────── */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col space-y-8">
          <div>
            <h4 className="font-sans text-xs font-bold text-[#2DBD8A] uppercase tracking-[0.2em] mb-4">The Clinic</h4>
            <ul className="flex flex-col space-y-3">
              {[
                { label: 'Meet the Team', path: '/team' },
                { label: 'Our Technology', path: '/technology' },
                { label: 'About Pearlhaus', path: '/about' },
                { label: 'Smile Gallery', path: '/gallery' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold text-[#2DBD8A] uppercase tracking-[0.2em] mb-4">Patient Info</h4>
            <ul className="flex flex-col space-y-3">
              {[
                { label: 'New Patient Guide', path: '/new-patients' },
                { label: 'Online Patient Forms', path: '/patient-forms' },
                { label: 'Finance & Payment Plans', path: '/finance' },
                { label: 'FAQ', path: '/faq' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/emergency-dental"
                  className="font-sans text-sm text-red-400 hover:text-red-300 font-semibold transition-colors duration-200 cursor-pointer inline-flex items-center gap-1.5"
                >
                  <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
                  Emergency Appointments
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ── Col 4: Contact & Hours ────────────────────────────────────────── */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col space-y-6">
          <h4 className="font-sans text-xs font-bold text-[#2DBD8A] uppercase tracking-[0.2em]">Visit Us</h4>

          {/* Contact details */}
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#2DBD8A] shrink-0 mt-0.5" />
              <span className="font-sans text-sm text-slate-300 leading-snug">142 Harbour Street,<br />Sydney NSW 2000</span>
            </div>
            <a
              href="tel:+61290001420"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#2DBD8A] shrink-0" />
              <span className="font-sans text-sm text-slate-300 group-hover:text-white transition-colors duration-200">+61 2 9000 1420</span>
            </a>
            <a
              href="mailto:hello@pearlhaus.com.au"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#2DBD8A] shrink-0" />
              <span className="font-sans text-sm text-slate-300 group-hover:text-white transition-colors duration-200">hello@pearlhaus.com.au</span>
            </a>
          </div>

          {/* Hours */}
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 space-y-2.5">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-3.5 h-3.5 text-[#2DBD8A]" />
              <span className="font-sans text-xs font-bold text-slate-300 uppercase tracking-wider">Opening Hours</span>
            </div>
            {[
              { day: 'Mon – Fri', hours: '8:00 AM – 7:00 PM', open: true },
              { day: 'Saturday', hours: '9:00 AM – 5:00 PM', open: true },
              { day: 'Sunday', hours: 'Closed', open: false },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="font-sans text-xs text-slate-400">{row.day}</span>
                <span className={`font-sans text-xs font-semibold ${row.open ? 'text-slate-200' : 'text-slate-600 italic'}`}>{row.hours}</span>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="hidden sm:block group relative w-full h-[120px] rounded-xl overflow-hidden border border-white/10 hover:border-[#2DBD8A]/40 transition-all duration-300 cursor-pointer">
            <img
              src={mapImage}
              alt="Pearlhaus Sydney CBD Location Map"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#050d18]/50 group-hover:bg-[#050d18]/30 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d18]/90 via-[#050d18]/20 to-transparent" />
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#2DBD8A] hover:text-white transition-colors duration-300 uppercase tracking-wider cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              Get Directions
              <ChevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── TRUST BAR ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.07] bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-7 flex flex-wrap justify-center md:justify-between items-center gap-6">
          {[
            { icon: <Award className="w-4 h-4" />, text: 'ADA Member Practice' },
            { icon: <Star className="w-4 h-4 fill-amber-400 text-amber-400" />, text: '4.9/5 Google · 847 Reviews' },
            { icon: <Sparkles className="w-4 h-4" />, text: 'Invisalign Diamond Provider' },
            { icon: <ShieldCheck className="w-4 h-4" />, text: 'AHPRA Registered Dentists' },
            { icon: <CreditCard className="w-4 h-4" />, text: 'Interest-Free Finance' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors duration-200 group cursor-default"
            >
              <span className="text-[#2DBD8A] group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
              <span className="font-sans text-xs font-medium whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── COPYRIGHT BAR ──────────────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.05] bg-black/40">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-slate-500">
            © 2026 Pearlhaus Dental Studio. All rights reserved. ABN: 12 345 678 901
          </p>
          <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { label: 'Privacy Policy', path: '/privacy' },
              { label: 'Terms of Service', path: '/terms' },
              { label: 'Sitemap', path: '/sitemap' },
              { label: 'Accessibility', path: '/accessibility' },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="font-sans text-xs text-slate-500 hover:text-[#2DBD8A] transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
            <span className="font-sans text-xs text-slate-500">
              Developed By{' '}
              <a
                href="https://alaminrobin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DBD8A] hover:text-white transition-colors duration-200"
              >
                Al Amin Robin
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
