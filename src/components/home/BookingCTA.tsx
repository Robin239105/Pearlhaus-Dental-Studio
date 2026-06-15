import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Phone, PhoneCall, Calendar, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import ScriptAccent from '../ui/ScriptAccent';

const quickInquirySchema = zod.object({
  name: zod.string().min(2, 'Name is required'),
  phone: zod.string().regex(/^(\+61|0)[2-9]\d{8}$/, 'Enter a valid Australian number'),
  preferredTime: zod.string(),
  mode: zod.enum(['callback', 'online']),
});

type QuickInquiryData = zod.infer<typeof quickInquirySchema>;

export const BookingCTA: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<QuickInquiryData>({
    resolver: zodResolver(quickInquirySchema),
    defaultValues: {
      name: '',
      phone: '',
      preferredTime: 'morning',
      mode: 'callback',
    },
  });

  const watchMode = watch('mode');

  const onSubmit = (data: QuickInquiryData) => {
    if (data.mode === 'online') {
      navigate('/booking');
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
    }, 1200);
  };

  const checklistItems = [
    'New patients always welcome',
    'Evening and Saturday appointments',
    'Interest-free payment plans',
    'Emergency appointments available',
  ];

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 z-10 border-t border-border">
      
      {/* Left side: Mint Gradient */}
      <div className="bg-gradient-to-br from-mint to-mint-dark text-white px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center text-left space-y-6">
        <div className="space-y-1">
          <h2 className="font-display italic font-light text-3xl md:text-5xl leading-tight">
            Ready to Begin?
          </h2>
          <div>
            <ScriptAccent className="text-white opacity-90">your smile journey</ScriptAccent>
          </div>
        </div>

        <ul className="space-y-3.5 pt-4">
          {checklistItems.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-3 text-xs md:text-sm font-semibold font-body">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-6">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/booking')}
            className="bg-white text-mint-dark hover:bg-mint-pale font-body font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-md shadow-lg shadow-mint-dark/20 transition-all duration-300 focus:outline-none"
          >
            Book Appointment Online
          </motion.button>
        </div>
      </div>

      {/* Right side: White Quick Contact Form */}
      <div className="bg-white px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center text-left">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4 max-w-sm"
            >
              <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center shadow shadow-mint/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-navy text-xl">Callback Scheduled!</h3>
              <p className="font-body text-xs text-slate leading-relaxed">
                Thank you for your request. Our receptionist will call you on the number provided during your preferred timeframe.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-bold text-mint hover:underline font-body uppercase tracking-wider block"
              >
                Send Another Request
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 max-w-md w-full"
            >
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-navy text-xl md:text-2xl leading-none">
                  Quick Inquiry
                </h3>
                <p className="text-xs text-slate font-body">
                  Fill in your phone number, and we will call you back to schedule your session.
                </p>
              </div>

              {/* Mode Toggle (Callback vs Online) */}
              <div className="grid grid-cols-2 gap-2 border border-border p-1 rounded-lg bg-surface">
                <button
                  type="button"
                  onClick={() => setValue('mode', 'callback')}
                  className={cn(
                    'py-2 text-xs font-semibold font-body text-center rounded-md transition-all duration-350 flex items-center justify-center space-x-1.5 focus:outline-none',
                    watchMode === 'callback' ? 'bg-white text-navy shadow-sm' : 'text-slate hover:text-navy'
                  )}
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Me Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setValue('mode', 'online')}
                  className={cn(
                    'py-2 text-xs font-semibold font-body text-center rounded-md transition-all duration-350 flex items-center justify-center space-x-1.5 focus:outline-none',
                    watchMode === 'online' ? 'bg-white text-navy shadow-sm' : 'text-slate hover:text-navy'
                  )}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Online</span>
                </button>
              </div>

              {/* Form fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    {...register('name')}
                    className={cn(
                      'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors',
                      errors.name ? 'border-error' : 'border-border'
                    )}
                  />
                  {errors.name && <span className="text-[10px] text-error font-body mt-1 block">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="0400 000 000"
                    {...register('phone')}
                    className={cn(
                      'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors',
                      errors.phone ? 'border-error' : 'border-border'
                    )}
                  />
                  {errors.phone && <span className="text-[10px] text-error font-body mt-1 block">{errors.phone.message}</span>}
                </div>

                {watchMode === 'callback' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Preferred Contact Time</label>
                    <select
                      {...register('preferredTime')}
                      className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none"
                    >
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 7PM)</option>
                    </select>
                  </motion.div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy hover:bg-navy/95 text-white py-3 rounded-md font-body text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center cursor-pointer shadow"
              >
                {watchMode === 'online' ? 'Proceed to Online Booking' : isSubmitting ? 'Scheduling Callback...' : 'Request Callback'}
              </button>

              <div className="pt-2 text-center text-xs font-body text-slate">
                Or call us directly:{' '}
                <a href="tel:+61290001420" className="font-bold text-mint hover:underline">
                  +61 2 9000 1420
                </a>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};

export default BookingCTA;
