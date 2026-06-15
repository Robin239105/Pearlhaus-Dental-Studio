import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { Send, CheckCircle2, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

const contactSchema = zod.object({
  name: zod.string().min(2, 'Name must be at least 2 characters'),
  email: zod.string().email('Please enter a valid email address'),
  phone: zod.string().regex(/^(\+61|0)[2-9]\d{8}$/, 'Please enter a valid Australian phone number'),
  subject: zod.string().min(1, 'Please select a inquiry topic'),
  message: zod.string().min(10, 'Message must be at least 10 characters'),
  preferredTime: zod.string().min(1, 'Please select a preferred contact window'),
});

type ContactFormData = zod.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: '',
      preferredTime: 'morning',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-mint-pale/40 border border-mint/20 p-8 rounded-2xl text-center space-y-4 max-w-md mx-auto"
      >
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center shadow shadow-mint/20">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>
        <h3 className="font-display font-bold text-navy text-xl">Inquiry Sent Successfully!</h3>
        <p className="font-body text-xs text-slate leading-relaxed">
          Thank you for reaching out. A Pearlhaus coordinator will review your request and contact you within the next 2-3 hours during our regular business hours.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="text-xs font-bold text-mint hover:underline font-body uppercase tracking-wider block mx-auto pt-2"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            {...register('name')}
            className={cn(
              'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors',
              errors.name ? 'border-error ring-1 ring-error/20' : 'border-border'
            )}
          />
          {errors.name && (
            <span className="text-[10px] text-error font-body mt-1 block">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="0400 000 000"
            {...register('phone')}
            className={cn(
              'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors',
              errors.phone ? 'border-error ring-1 ring-error/20' : 'border-border'
            )}
          />
          {errors.phone && (
            <span className="text-[10px] text-error font-body mt-1 block">{errors.phone.message}</span>
          )}
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
          Email Address *
        </label>
        <input
          type="email"
          {...register('email')}
          className={cn(
            'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors',
            errors.email ? 'border-error ring-1 ring-error/20' : 'border-border'
          )}
        />
        {errors.email && (
          <span className="text-[10px] text-error font-body mt-1 block">{errors.email.message}</span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
            Subject *
          </label>
          <select
            {...register('subject')}
            className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors"
          >
            <option value="general">General Inquiry</option>
            <option value="cosmetic">Cosmetic Smile Consultation</option>
            <option value="implants">Implant Restorations</option>
            <option value="invisalign">Invisalign & Orthodontics</option>
            <option value="billing">Billing & Finance Plans</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
            Best Time to Call *
          </label>
          <select
            {...register('preferredTime')}
            className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors"
          >
            <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
            <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
            <option value="evening">Evening (5:00 PM - 7:00 PM)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
          Your Message *
        </label>
        <textarea
          rows={4}
          {...register('message')}
          placeholder="Please describe how we can assist you..."
          className={cn(
            'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors',
            errors.message ? 'border-error ring-1 ring-error/20' : 'border-border'
          )}
        />
        {errors.message && (
          <span className="text-[10px] text-error font-body mt-1 block">{errors.message.message}</span>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
