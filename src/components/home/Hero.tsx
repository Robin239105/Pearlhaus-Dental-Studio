import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star,
  Calendar,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Zap,
  Heart,
} from 'lucide-react';
import heroSmile from '../../assets/hero_smile.png';
import heroDetails from '../../assets/hero_details.png';

/* ─── helpers ─── */
const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.65, delay, ease },
});

/* ─── Animated count-up number ─── */
const Stat: React.FC<{ value: string; label: string; accent?: boolean }> = ({
  value,
  label,
  accent,
}) => (
  <div className="flex flex-col">
    <span className={`font-sans text-2xl md:text-3xl font-bold leading-none tracking-tight ${accent ? 'text-[#2DBD8A]' : 'text-[#0D2137]'}`}>
      {value}
    </span>
    <span className="font-sans text-[10px] md:text-xs text-[#6B7280] mt-1 leading-tight">{label}</span>
  </div>
);

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-[#F5F7FA] lg:min-h-screen flex items-center overflow-hidden"
      aria-label="Pearlhaus Dental Studio Hero"
    >
      {/* ── Background accents ─────────────────────────────────────── */}
      <div className="absolute top-[-120px] right-[-80px] w-[600px] h-[600px] bg-[#2DBD8A]/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[450px] h-[450px] bg-[#E8F7F2]/80 rounded-full blur-[90px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #2DBD8A22 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* ── Main layout ────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-12 xl:px-16 py-8 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-6 lg:gap-6 items-start">

          {/* ════════════════════════════════════════════
              LEFT COLUMN — Headline + CTAs + Bento grid
          ════════════════════════════════════════════ */}
          <div className="flex flex-col gap-4 md:gap-6">

            {/* ── Badge ── */}
            <motion.div {...fadeIn(0.05)}>
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white border border-[#2DBD8A]/20 shadow-sm shadow-[#2DBD8A]/05 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DBD8A] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DBD8A]" />
                </span>
                <span className="font-sans text-[10px] md:text-[11px] font-semibold text-[#2DBD8A] uppercase tracking-[0.15em] md:tracking-[0.18em]">
                  Sydney CBD · Boutique Dental Studio
                </span>
              </div>
            </motion.div>

            {/* ── Headline ── */}
            <div className="overflow-hidden">
              <motion.h1
                className="font-sans font-bold text-[#0D2137] leading-[1.04] tracking-tight"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {['Your Most', 'Confident', 'Smile Starts', 'Here.'].map((line, i) => (
                  <motion.span
                    key={i}
                    className={`block text-[clamp(2.2rem,8vw,4.5rem)] md:text-[clamp(2.6rem,5.5vw,4.5rem)] ${
                      i === 1
                        ? 'text-[#2DBD8A]'
                        : i === 3
                        ? 'text-[#0D2137]/40 font-light'
                        : ''
                    }`}
                    variants={{
                      hidden: { y: 60, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.75, ease } },
                    }}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* ── Mobile Hero Image Card (visible only on sm-lg screens, NOT tiny mobile) ── */}
            <motion.div
              {...fadeIn(0.3)}
              className="hidden sm:block lg:hidden relative rounded-2xl overflow-hidden h-[200px] shadow-xl group"
            >
              <img
                src={heroSmile}
                alt="Beautiful smile result at Pearlhaus Dental Studio"
                className="w-full h-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137]/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
                  <Heart className="w-3 h-3 text-[#2DBD8A] fill-[#2DBD8A]" />
                  <span className="font-sans text-[10px] font-bold text-white">Actual Patient Result</span>
                </div>
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-lg px-2.5 py-1 shadow-md">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="font-sans text-[11px] font-bold text-[#0D2137]">4.9</span>
              </div>
            </motion.div>

            {/* ── Subtext ── */}
            <motion.p
              {...fadeUp(0.55)}
              className="font-sans text-sm md:text-base text-[#4A5568] leading-relaxed max-w-md font-light"
            >
              Pearlhaus blends advanced 3D diagnostics with boutique clinical care — delivering beautiful, lasting results in a calm, luxury environment.
            </motion.p>

            {/* ── CTA row ── */}
            <motion.div {...fadeUp(0.65)} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(45,189,138,0.35)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/booking')}
                className="group relative inline-flex items-center justify-center gap-2.5 bg-[#0D2137] hover:bg-[#152e4b] text-white font-sans font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700" />
                <Calendar className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Book Appointment</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/treatments')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0FDF8] text-[#2DBD8A] font-sans font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-2xl border border-[#2DBD8A]/30 shadow-sm transition-all duration-300 cursor-pointer"
              >
                Our Treatments
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* ── Inline trust strip for mobile (compact, replaces TrustBar above the fold) ── */}
            <motion.div {...fadeUp(0.75)} className="flex sm:hidden items-center justify-between gap-2 bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm">
              <div className="flex flex-col items-center gap-0.5">
                <ShieldCheck className="w-4 h-4 text-[#2DBD8A]" />
                <span className="font-sans text-[9px] text-[#6B7280] font-semibold text-center leading-tight">ADA<br/>Member</span>
              </div>
              <div className="h-6 w-px bg-slate-100" />
              <div className="flex flex-col items-center gap-0.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-sans text-[9px] text-[#6B7280] font-semibold text-center leading-tight">4.9/5<br/>Rating</span>
              </div>
              <div className="h-6 w-px bg-slate-100" />
              <div className="flex flex-col items-center gap-0.5">
                <Sparkles className="w-4 h-4 text-[#2DBD8A]" />
                <span className="font-sans text-[9px] text-[#6B7280] font-semibold text-center leading-tight">Invisalign<br/>Diamond</span>
              </div>
              <div className="h-6 w-px bg-slate-100" />
              <div className="flex flex-col items-center gap-0.5">
                <CheckCircle2 className="w-4 h-4 text-[#2DBD8A]" />
                <span className="font-sans text-[9px] text-[#6B7280] font-semibold text-center leading-tight">AHPRA<br/>Registered</span>
              </div>
            </motion.div>

            {/* ── Social proof (visible sm+) ── */}
            <motion.div {...fadeUp(0.75)} className="hidden sm:flex items-center gap-3 md:gap-4">
              <div className="flex -space-x-2">
                {[
                  { src: '/images/team/charlotte-whitmore.png', alt: 'Patient Charlotte' },
                  { src: '/images/team/james-okafor.png', alt: 'Patient James' },
                  { src: '/images/team/priya-nair.png', alt: 'Patient Priya' },
                  { src: '/images/team/alexander-reid.png', alt: 'Patient Alexander' },
                  { src: '/images/team/sofia-marchetti.png', alt: 'Patient Sofia' },
                ].map((a, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#F5F7FA] overflow-hidden select-none shrink-0 bg-slate-100"
                    style={{ zIndex: 10 - i }}
                  >
                    <img
                      src={a.src}
                      alt={a.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-sans text-xs md:text-sm font-bold text-[#0D2137] ml-1.5">4.9/5</span>
                </div>
                <p className="font-sans text-[10px] md:text-xs text-[#6B7280] mt-0.5">
                  Trusted by 12,000+ patients · 847 reviews
                </p>
              </div>
            </motion.div>

            {/* ════ BENTO STATS GRID (hidden on mobile, visible md+) ════ */}
            <div className="hidden md:grid grid-cols-3 gap-2 md:gap-3 mt-1 md:mt-2">
              {/* Stat card 1 */}
              <motion.div
                {...fadeIn(0.8)}
                whileHover={{ scale: 1.02, y: -2 }}
                className="col-span-1 bg-white border border-slate-100 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm flex flex-col gap-1 cursor-default"
              >
                <Stat value="15+" label="Years of Excellence" />
              </motion.div>
              {/* Stat card 2 */}
              <motion.div
                {...fadeIn(0.9)}
                whileHover={{ scale: 1.02, y: -2 }}
                className="col-span-1 bg-[#0D2137] rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm flex flex-col gap-1 cursor-default"
              >
                <span className="font-sans text-2xl md:text-3xl font-bold leading-none text-white">12K+</span>
                <span className="font-sans text-[10px] md:text-xs text-white/50 mt-1 leading-tight">Happy Patients</span>
              </motion.div>
              {/* Stat card 3 */}
              <motion.div
                {...fadeIn(1.0)}
                whileHover={{ scale: 1.02, y: -2 }}
                className="col-span-1 bg-[#2DBD8A] rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm flex flex-col gap-1 cursor-default"
              >
                <span className="font-sans text-2xl md:text-3xl font-bold leading-none text-white">98%</span>
                <span className="font-sans text-[10px] md:text-xs text-white/70 mt-1 leading-tight">Success Rate</span>
              </motion.div>
            </div>

            {/* Feature chips — hidden on mobile, horizontal scroll on tablet, wrap on desktop */}
            <motion.div {...fadeUp(1.05)} className="hidden md:flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide md:flex-wrap md:overflow-visible md:pb-0 md:mx-0 md:px-0">
              {[
                { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: '0% Interest Plans' },
                { icon: <Sparkles className="w-3.5 h-3.5" />, text: '3D Intraoral Scanning' },
                { icon: <Clock className="w-3.5 h-3.5" />, text: 'Instant HICAPS Claims' },
                { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: 'Same-Day Emergencies' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-100 shadow-xs whitespace-nowrap shrink-0"
                >
                  <span className="text-[#2DBD8A]">{item.icon}</span>
                  <span className="font-sans text-[11px] md:text-xs text-[#374151] font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ════════════════════════════════════════════
              RIGHT COLUMN — Stacked visual Bento cards (Desktop only)
          ════════════════════════════════════════════ */}
          <div className="hidden lg:flex flex-col gap-4">

            {/* ── Main image card ── */}
            <motion.div
              {...fadeIn(0.3)}
              whileHover={{ scale: 1.01, y: -3 }}
              className="relative rounded-3xl overflow-hidden h-[320px] xl:h-[360px] shadow-2xl shadow-slate-200/80 group cursor-default"
            >
              <img
                src={heroSmile}
                alt="Beautiful smile result at Pearlhaus Dental Studio"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                  <Heart className="w-3.5 h-3.5 text-[#2DBD8A] fill-[#2DBD8A]" />
                  <span className="font-sans text-xs font-bold text-white">Actual Patient Result</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-md">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-sans text-xs font-bold text-[#0D2137]">4.9 / 5</span>
              </div>
            </motion.div>

            {/* ── Two small bento cards side-by-side ── */}
            <div className="grid grid-cols-2 gap-4">

              {/* Technology card */}
              <motion.div
                {...fadeIn(0.5)}
                whileHover={{ scale: 1.02, y: -2 }}
                className="relative rounded-2xl overflow-hidden h-[160px] shadow-lg shadow-slate-200/60 group cursor-default"
              >
                <img
                  src={heroDetails}
                  alt="3D Intraoral Scanner technology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137]/80 via-[#0D2137]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#2DBD8A]" />
                    <span className="font-sans text-[11px] font-bold text-white">3D Scanning</span>
                  </div>
                  <p className="font-sans text-[10px] text-white/60 mt-0.5">Advanced diagnostics</p>
                </div>
              </motion.div>

              {/* Availability card */}
              <motion.div
                {...fadeIn(0.6)}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-[#2DBD8A] rounded-2xl p-4 h-[160px] flex flex-col justify-between shadow-lg shadow-[#2DBD8A]/25 cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="w-5 h-5 text-white/80" />
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                  <p className="font-sans text-[11px] font-bold text-white/70 uppercase tracking-wider">
                    Available Today
                  </p>
                  <p className="font-sans text-lg font-bold text-white mt-0.5 leading-tight">
                    2:30 PM<br />4:15 PM
                  </p>
                </div>
                <button
                  onClick={() => navigate('/booking')}
                  className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-xl transition-colors duration-200 cursor-pointer w-fit"
                >
                  Book
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </motion.div>
            </div>

            {/* ── Trust strip card ── */}
            <motion.div
              {...fadeIn(0.7)}
              className="bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-sm flex items-center justify-between cursor-default"
            >
              {[
                { icon: <ShieldCheck className="w-4 h-4" />, label: 'ADA Member' },
                { icon: <Star className="w-4 h-4 fill-amber-400 text-amber-400" />, label: 'Top Rated' },
                { icon: <Sparkles className="w-4 h-4" />, label: 'Invisalign Diamond' },
                { icon: <CheckCircle2 className="w-4 h-4" />, label: 'AHPRA Registered' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="text-[#2DBD8A]">{item.icon}</span>
                  <span className="font-sans text-[10px] text-[#6B7280] text-center leading-tight">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator (hidden on mobile to save space) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9CA3AF] group-hover:text-[#2DBD8A] transition-colors duration-200">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-[#D1D5DB] group-hover:border-[#2DBD8A]/50 rounded-full flex items-start justify-center pt-1.5 transition-colors duration-300"
        >
          <div className="w-1 h-2 bg-[#2DBD8A] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
