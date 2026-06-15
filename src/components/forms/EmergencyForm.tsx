import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { AlertTriangle, Clock, CheckCircle2, Phone, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const emergencySchema = zod.object({
  name: zod.string().min(2, 'Name must be at least 2 characters'),
  phone: zod.string().regex(/^(\+61|0)[2-9]\d{8}$/, 'Please enter a valid Australian phone number'),
  painLevel: zod.number().min(1).max(10),
  symptoms: zod.array(zod.string()).min(1, 'Please select at least one symptom'),
  description: zod.string().min(5, 'Please provide a brief description of the pain or injury'),
});

type EmergencyFormData = zod.infer<typeof emergencySchema>;

export const EmergencyForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<EmergencyFormData>({
    resolver: zodResolver(emergencySchema),
    defaultValues: {
      name: '',
      phone: '',
      painLevel: 5,
      symptoms: [],
      description: '',
    },
  });

  const watchPainLevel = watch('painLevel');
  const watchSymptoms = watch('symptoms') || [];

  const handleSymptomToggle = (symptom: string) => {
    const current = [...watchSymptoms];
    const idx = current.indexOf(symptom);
    if (idx > -1) {
      current.splice(idx, 1);
    } else {
      current.push(symptom);
    }
    setValue('symptoms', current, { shouldValidate: true });
  };

  const onSubmit = (data: EmergencyFormData) => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
    }, 1200);
  };

  const symptomOptions = [
    'Severe Toothache',
    'Bleeding Gums/Mouth',
    'Chipped/Broken Tooth',
    'Knocked-Out Tooth',
    'Lost Filling/Crown',
    'Swollen Jaw/Cheek',
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-red-50 border border-error/20 p-6 md:p-8 rounded-2xl text-center space-y-6 max-w-md mx-auto"
      >
        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full bg-error text-white flex items-center justify-center shadow shadow-error/20">
            <CheckCircle2 className="w-7 h-7" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-display font-bold text-navy text-xl">Request Logged</h3>
          <p className="font-body text-xs text-slate leading-relaxed">
            We have flagged your request in our system as **URGENT**. A dentist will call you back on your number within the next **15-30 minutes** to coordinate a same-day appointment.
          </p>
        </div>

        {/* Immediate advice box */}
        <div className="bg-white p-4 rounded-xl border border-error/15 text-left space-y-2">
          <span className="flex items-center text-xs font-bold text-error uppercase font-body">
            <ShieldAlert className="w-4 h-4 mr-1.5 shrink-0" />
            <span>Immediate Advice while waiting</span>
          </span>
          <ul className="list-disc list-inside text-[11px] text-slate space-y-1 font-body">
            <li>For swelling, apply a cold compress to the outside cheek.</li>
            <li>If a tooth has been knocked out, place it in milk immediately.</li>
            <li>Rinse mouth with warm salty water to clean bacteria.</li>
            <li>Avoid taking aspirin as it can thin blood and increase bleeding.</li>
          </ul>
        </div>

        <div className="border-t border-border/80 pt-4 space-y-2">
          <p className="text-[10px] text-slate font-body">Or call our emergency line directly:</p>
          <a
            href="tel:+61290001421"
            className="block w-full py-2.5 bg-[#E53E3E] text-white text-xs font-bold font-sans uppercase tracking-wider rounded-md hover:bg-[#CC3333] transition-all text-center"
          >
            Call Now: +61 2 9000 1421
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 md:p-8 rounded-2xl border border-error/20 shadow-sm space-y-5">
      <div className="flex items-center space-x-2 bg-error/5 text-error px-4 py-3 rounded-lg border border-error/10">
        <AlertTriangle className="w-5 h-5 shrink-0 animate-bounce" />
        <div className="text-xs font-body leading-tight">
          <strong>Emergency Request:</strong> Same-day priority appointments. Complete this form or call us directly.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            {...register('name')}
            className={cn(
              'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-error/20 focus:border-error transition-colors',
              errors.name ? 'border-error ring-1 ring-error/20' : 'border-border'
            )}
          />
          {errors.name && (
            <span className="text-[10px] text-error font-body mt-1 block">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
            Contact Number *
          </label>
          <input
            type="tel"
            placeholder="0400 000 000"
            {...register('phone')}
            className={cn(
              'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-error/20 focus:border-error transition-colors',
              errors.phone ? 'border-error ring-1 ring-error/20' : 'border-border'
            )}
          />
          {errors.phone && (
            <span className="text-[10px] text-error font-body mt-1 block">{errors.phone.message}</span>
          )}
        </div>
      </div>

      {/* Pain Level Slider */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-[10px] font-bold text-navy font-sans tracking-wider uppercase">
            Pain Intensity Level *
          </label>
          <span
            className="text-xs font-bold font-sans px-3 py-1 rounded-full uppercase tracking-wider text-white transition-all duration-300"
            style={{
              backgroundColor:
                watchPainLevel >= 8
                  ? '#E53E3E'
                  : watchPainLevel >= 5
                  ? '#D97706'
                  : '#2DBD8A',
            }}
          >
            {watchPainLevel} –{' '}
            {watchPainLevel >= 8
              ? 'Severe / Extreme'
              : watchPainLevel >= 5
              ? 'Moderate'
              : 'Mild'}
          </span>
        </div>
        {/* Coloured track via accent-color inline style */}
        <input
          type="range"
          min="1"
          max="10"
          {...register('painLevel', { valueAsNumber: true })}
          className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
          style={{
            accentColor:
              watchPainLevel >= 8
                ? '#E53E3E'
                : watchPainLevel >= 5
                ? '#D97706'
                : '#2DBD8A',
            background: `linear-gradient(to right, ${
              watchPainLevel >= 8
                ? '#E53E3E'
                : watchPainLevel >= 5
                ? '#D97706'
                : '#2DBD8A'
            } ${((watchPainLevel - 1) / 9) * 100}%, #E2EDE9 ${((watchPainLevel - 1) / 9) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-[9px] text-slate/60 font-sans mt-1 select-none">
          <span>1 – Mild</span>
          <span>5 – Moderate</span>
          <span>10 – Severe</span>
        </div>
      </div>

      {/* Symptoms selection */}
      <div>
        <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#0D2137', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
          Select Symptoms *
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {symptomOptions.map((opt) => {
            const isChecked = watchSymptoms.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => handleSymptomToggle(opt)}
                style={{
                  padding: '10px 12px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  borderRadius: '10px',
                  border: isChecked ? '1.5px solid #E53E3E' : '1.5px solid #E2EDE9',
                  backgroundColor: isChecked ? '#E53E3E' : '#FFFFFF',
                  color: isChecked ? '#FFFFFF' : '#0D2137',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isChecked ? '0 2px 8px rgba(229,62,62,0.25)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={e => {
                  if (!isChecked) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#E53E3E';
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#FFF5F5';
                  }
                }}
                onMouseLeave={e => {
                  if (!isChecked) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#E2EDE9';
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#FFFFFF';
                  }
                }}
              >
                {/* Checkbox indicator */}
                <span style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '4px',
                  border: isChecked ? '2px solid rgba(255,255,255,0.6)' : '2px solid #E2EDE9',
                  backgroundColor: isChecked ? 'rgba(255,255,255,0.25)' : 'transparent',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}>
                  {isChecked && (
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
        {errors.symptoms && (
          <span style={{ fontSize: '10px', color: '#E53E3E', display: 'block', marginTop: '6px', fontFamily: 'Inter, sans-serif' }}>
            {errors.symptoms.message as string}
          </span>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
          Describe what happened *
        </label>
        <textarea
          rows={3}
          {...register('description')}
          placeholder="Please describe when the pain started, or what caused the dental injury..."
          className={cn(
            'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-error/20 focus:border-error transition-colors',
            errors.description ? 'border-error ring-1 ring-error/20' : 'border-border'
          )}
        />
        {errors.description && (
          <span className="text-[10px] text-error font-body mt-1 block">{errors.description.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#E53E3E] text-white hover:bg-[#CC3333] py-3 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center cursor-pointer shadow-md shadow-red-200 disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2"><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Requesting Call...</span>
        ) : (
          <span className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.67 12 19.79 19.79 0 0 1 1.63 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Request Same-Day Call Back</span>
        )}
      </button>
    </form>
  );
};

export default EmergencyForm;
