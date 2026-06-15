import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Percent, Wallet, Calendar, ShieldCheck, HeartHandshake, HelpCircle } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';

export const Finance: React.FC = () => {
  const navigate = useNavigate();

  // Repayment Calculator State
  const [cost, setCost] = useState(5000);
  const [months, setMonths] = useState(12);

  const paymentMethods = [
    {
      name: 'Zip Money',
      description: 'Ideal for treatments between $1,000 and $15,000. Offers interest-free payment options up to 24 months, with easy monthly scheduled debits.',
      logo: '', // Placeholder style but let\'s make it styled
      badge: 'Up to 24 Months Interest-Free',
    },
    {
      name: 'Afterpay',
      description: 'Split your routine check-ups, cleanings, or cosmetic work under $2,000 into 4 equal fortnightly payments. Zero interest, immediate approval.',
      logo: '',
      badge: '4 Fortnightly Payments',
    },
    {
      name: 'SuperCare Access',
      description: 'We partner with SuperCare to assist you in releasing early superannuation funds for critical dental procedures such as implants, root canals, and surgery.',
      logo: '',
      badge: 'Superannuation Release',
    },
    {
      name: 'Private Health Claims',
      description: 'Instant claims on the spot using HICAPS. We accept all major private health insurance providers including Medibank, Bupa, HCF, HBF, and NIB.',
      logo: '',
      badge: 'Instant HICAPS Claims',
    },
  ];

  // Repayment calculations (interest-free model with 0% interest, showing just regular installments, plus a minor monthly fee of $9.95)
  const monthlyInstallment = cost / months;
  const weeklyInstallment = monthlyInstallment / 4.33; // Approx weeks in a month
  const setupFee = 99; // Standard setup fee
  const accountFee = 9.95; // Account fee per month

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Patient Info', path: '/patient-info' }, { label: 'Finance Options' }]} />
          <div className="space-y-2 max-w-2xl text-left">
            <SectionLabel>Flexible Repayments</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              A Beautiful Smile:{' '}
              <span className="block font-semibold">Affordable & Accessible.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              We believe financial barriers should not stand in the way of high-quality dental care. Explore our interest-free payment partners, immediate insurance claims, and flexible payment plan options.
            </p>
          </div>
        </div>
      </div>

      {/* 2. REPAYMENT CALCULATOR */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Calculator Controls */}
        <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between text-left space-y-8 shadow-sm">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-mint bg-mint-pale px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
              Interactive Estimator
            </span>
            <h3 className="font-display font-bold text-navy text-xl md:text-2xl">
              Repayment Calculator
            </h3>
            <p className="font-body font-light text-xs text-slate">
              Select your expected treatment cost and preferred plan duration to estimate your interest-free payments.
            </p>
          </div>

          {/* Cost Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between font-body">
              <span className="text-xs font-bold text-navy uppercase tracking-wider">Estimated Treatment Cost</span>
              <span className="font-display text-2xl font-semibold text-mint">${cost.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="500"
              max="20000"
              step="500"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
              className="w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-mint"
            />
            <div className="flex justify-between text-[10px] font-bold text-muted uppercase font-body">
              <span>$500</span>
              <span>$10,000</span>
              <span>$20,000</span>
            </div>
          </div>

          {/* Term Buttons */}
          <div className="space-y-3 font-body">
            <span className="text-xs font-bold text-navy uppercase tracking-wider block text-left">Repayment Period</span>
            <div className="grid grid-cols-5 gap-2">
              {[6, 12, 18, 24, 36].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setMonths(term)}
                  className={`py-3 rounded-lg text-xs font-bold transition-all duration-200 border ${
                    months === term
                      ? 'bg-mint border-mint text-white shadow-sm'
                      : 'bg-white border-border text-navy hover:bg-surface'
                  }`}
                >
                  {term} Mo
                </button>
              ))}
            </div>
          </div>

          {/* Footnotes */}
          <div className="pt-4 border-t border-border/60 text-[10px] text-muted font-body leading-relaxed space-y-1.5">
            <p>* Calculation is based on a 0% interest payment plan. A monthly administration account fee of ${accountFee} is included in estimates.</p>
            <p>* One-off establishment fee of ${setupFee} applies depending on final vendor approval.</p>
          </div>
        </div>

        {/* Right Column: Calculations Result Card */}
        <div className="lg:col-span-5 bg-navy rounded-2xl p-6 md:p-8 text-white text-left flex flex-col justify-between relative overflow-hidden shadow-lg">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-mint/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6">
            <h4 className="font-display font-light text-xl border-b border-white/10 pb-4">
              Repayment Estimates
            </h4>

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] text-white/60 font-body uppercase tracking-widest block">Estimated Weekly Cost</span>
                <div className="flex items-baseline">
                  <span className="font-display text-4xl md:text-5xl font-light">${(weeklyInstallment + accountFee/4.33).toFixed(2)}</span>
                  <span className="text-xs text-white/60 font-body ml-2">/ week</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-white/60 font-body uppercase tracking-widest block">Estimated Monthly Cost</span>
                <div className="flex items-baseline">
                  <span className="font-display text-2xl md:text-3xl font-light">${(monthlyInstallment + accountFee).toFixed(2)}</span>
                  <span className="text-xs text-white/60 font-body ml-2">/ month</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2.5 font-body text-xs">
              <div className="flex justify-between text-white/80">
                <span>Principal Amount:</span>
                <span className="font-bold">${cost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Duration:</span>
                <span className="font-bold">{months} Months</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Interest Rate:</span>
                <span className="font-bold text-mint">0.00% (Interest-Free)</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Button
              fullWidth
              className="bg-mint text-white hover:bg-mint-dark border-none"
              onClick={() => navigate('/booking')}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* 3. FINANCE PARTNERS LIST */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-lg mx-auto">
            <SectionLabel>Flexible Providers</SectionLabel>
            <h2 className="font-display font-light text-navy text-2xl md:text-4xl">
              Our Payment Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
            {paymentMethods.map((method, idx) => (
              <div key={idx} className="bg-white border border-border rounded-2xl p-6 md:p-8 text-left space-y-5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
                  <h4 className="font-display font-bold text-navy text-lg">{method.name}</h4>
                  <span className="text-[10px] font-bold text-mint bg-mint-pale border border-mint/20 px-2.5 py-1 rounded-full uppercase tracking-wider block sm:inline-block">
                    {method.badge}
                  </span>
                </div>
                <p className="text-xs font-light text-slate leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CLINICAL PHILOSOPHY CARD */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-center space-y-6">
        <HelpCircle className="w-10 h-10 text-mint mx-auto" />
        <div className="space-y-2">
          <h3 className="font-display font-semibold text-navy text-2xl">
            Questions About Repayments?
          </h3>
          <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
            Our treatment coordinators are experts in matching treatments with comfortable payment arrangements. Reach out today for a friendly check.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 font-body">
          <a
            href="tel:+61290001420"
            className="w-full sm:w-auto text-center border border-border bg-white text-navy font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-md hover:bg-surface transition-colors duration-200"
          >
            Call +61 2 9000 1420
          </a>
          <Button onClick={() => navigate('/contact')}>
            Online Enquiry
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Finance;
