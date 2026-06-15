import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, Clipboard, Sparkles, Smile, CheckSquare, ShieldCheck, HeartHandshake, Phone } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';

export const NewPatients: React.FC = () => {
  const navigate = useNavigate();

  const journeySteps = [
    {
      title: '1. Welcome & Wellness Lounge',
      description: 'Step into our calm, aromatherapy-scented lounge. Check in digitally, and enjoy a curated selection of fine herbal teas or organic coffee before your appointment.',
      icon: <Coffee className="w-6 h-6 text-mint" />,
    },
    {
      title: '2. Comprehensive Digital Mapping',
      description: 'We perform complete HD 3D intraoral scans and ultra-low-radiation digital X-rays to establish a clear structural overview of your oral health.',
      icon: <Clipboard className="w-6 h-6 text-mint" />,
    },
    {
      title: '3. Conversational Examination',
      description: 'Meet your dedicated dentist. We walk you through your digital scans on high-res displays, discussing health patterns, goals, and any concerns in a friendly, clinical-yet-warm chat.',
      icon: <Smile className="w-6 h-6 text-mint" />,
    },
    {
      title: '4. Tailored Wellness Blueprint',
      description: 'You will receive a detailed wellness report, outlining diagnostic results, maintenance advice, and clear, transparent estimates for any recommended treatments.',
      icon: <Sparkles className="w-6 h-6 text-mint" />,
    },
  ];

  const checklistItems = [
    'Your dental insurance card (if you have private health cover)',
    'A list of current medications or health conditions',
    'Completed online patient intake form (takes 3-4 minutes)',
    'Your previous dental records or recent X-rays (optional)',
    'Any questions or aesthetic smile goals you want to discuss',
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Patient Info', path: '/patient-info' }, { label: 'New Patient Guide' }]} />
          <div className="space-y-2 max-w-2xl text-left">
            <SectionLabel>Your First Visit</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              A Gentle Start:{' '}
              <span className="block font-semibold">Your New Patient Journey.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Discover how we combine world-class clinical diagnostics with the calming rituals of a luxury wellness spa. No judgement, no cold metal vibes—just precision care.
            </p>
          </div>
        </div>
      </div>

      {/* 2. THE JOURNEY */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-lg mx-auto">
          <SectionLabel>What to expect</SectionLabel>
          <h2 className="font-display font-light text-navy text-2xl md:text-4xl">
            Your First 60 Minutes at Pearlhaus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-body">
          {journeySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white border border-border rounded-2xl p-6 shadow-sm space-y-4 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-mint-pale flex items-center justify-center text-mint">
                {step.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-navy text-base leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-light text-slate leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. CHECKLIST & PREPARATION */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Checkbox Box */}
          <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-6 md:p-8 text-left space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-mint bg-mint-pale px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                Preparation Checklist
              </span>
              <h3 className="font-display font-bold text-navy text-xl md:text-2xl">
                Preparing for Your Appointment
              </h3>
            </div>
            <ul className="space-y-3.5 font-body">
              {checklistItems.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm text-slate">
                  <CheckSquare className="w-4 h-4 text-mint shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-border/60">
              <p className="text-[11px] font-body font-light text-muted leading-relaxed">
                * To save 15 minutes at check-in, please complete our secure online patient form prior to your arrival.
              </p>
            </div>
          </div>

          {/* Right Text / CTA Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            <h3 className="font-display font-light text-navy text-2xl md:text-3xl leading-tight">
              Pre-Register Online{' '}
              <span className="block font-semibold">In Under 5 Minutes.</span>
            </h3>
            <p className="font-body font-light text-xs text-slate leading-relaxed">
              Skip the clipboards. Our digital intake system allows you to securely submit your medical history, health goals, and contact details from your phone or desktop.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button onClick={() => navigate('/patient-forms')}>
                Fill Forms Online
              </Button>
              <button
                onClick={() => navigate('/booking')}
                className="font-body text-xs font-bold text-mint uppercase tracking-wider py-3 px-6 text-center border border-mint rounded-md hover:bg-mint-pale transition-colors duration-200"
              >
                Book First Visit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CLINICAL PHILOSOPHY */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-2">
          <SectionLabel>Our Commitment</SectionLabel>
          <h3 className="font-display font-light text-navy text-2xl md:text-3xl">
            A Safe Space for Fearful Patients
          </h3>
          <p className="font-body font-light text-xs text-slate max-w-xl mx-auto leading-relaxed">
            If you experience dental anxiety, you are in safe hands. We specialize in gentle care, offering sedation options, noise-cancelling headphones, ceiling entertainment, and a clinical environment that looks and feels like a spa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-body text-left">
          <div className="border border-border rounded-xl p-5 flex items-start space-x-3.5">
            <ShieldCheck className="w-5 h-5 text-mint shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-navy text-xs uppercase tracking-wider">Clinical Transparency</h4>
              <p className="text-xs font-light text-slate leading-relaxed">No hidden fees, no unnecessary recommendations. You receive itemized estimates with standard ADA codes.</p>
            </div>
          </div>
          <div className="border border-border rounded-xl p-5 flex items-start space-x-3.5">
            <HeartHandshake className="w-5 h-5 text-mint shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-navy text-xs uppercase tracking-wider">Compassionate Listening</h4>
              <p className="text-xs font-light text-slate leading-relaxed">We proceed at your pace. You are in control of the appointment, and you can tell us to stop at any time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. PHONE ENQUIRY */}
      <div className="bg-surface border-t border-border py-16 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <Phone className="w-8 h-8 text-mint mx-auto" />
          <h3 className="font-display font-semibold text-navy text-2xl">
            Have a Specific Question?
          </h3>
          <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
            Our guest relationships team is happy to chat. We can check your health insurance eligibility or explain individual treatments.
          </p>
          <a
            href="tel:+61290001420"
            className="inline-block bg-white text-navy border border-border rounded px-5 py-2.5 font-body text-xs font-bold uppercase tracking-wider hover:bg-surface transition-colors duration-200"
          >
            Call Us: +61 2 9000 1420
          </a>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NewPatients;
