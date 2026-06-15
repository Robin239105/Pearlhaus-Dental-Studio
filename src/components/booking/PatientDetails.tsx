import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

// Define Zod Validation Schema
const patientDetailsSchema = zod.object({
  firstName: zod.string().min(2, 'First name must be at least 2 characters'),
  lastName: zod.string().min(2, 'Last name must be at least 2 characters'),
  email: zod.string().email('Please enter a valid email address'),
  phone: zod.string().regex(/^(\+61|0)[2-9]\d{8}$/, 'Please enter a valid Australian phone number (e.g. 0400000000)'),
  dob: zod.string().min(1, 'Date of birth is required'),
  medicareNumber: zod.string().optional(),
  isNewPatient: zod.enum(['yes', 'no'], { required_error: 'Please select if you are a new patient' }),
  referralSource: zod.string().min(1, 'Please select how you heard about us'),
  hasInsurance: zod.enum(['yes', 'no'], { required_error: 'Please select if you have private health insurance' }),
  insuranceFund: zod.string().optional(),
  insuranceNumber: zod.string().optional(),
  medicalConditions: zod.string().optional(),
  accessibilityNeeds: zod.string().optional(),
  preferredContact: zod.enum(['phone', 'email', 'sms'], { required_error: 'Please select your preferred contact method' }),
});

export type PatientDetailsData = zod.infer<typeof patientDetailsSchema>;

interface PatientDetailsProps {
  initialData: Partial<PatientDetailsData>;
  onNext: (data: PatientDetailsData) => void;
  onBack: () => void;
}

export const PatientDetails: React.FC<PatientDetailsProps> = ({
  initialData,
  onNext,
  onBack,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PatientDetailsData>({
    resolver: zodResolver(patientDetailsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      medicareNumber: '',
      isNewPatient: 'yes',
      referralSource: 'google',
      hasInsurance: 'no',
      insuranceFund: '',
      insuranceNumber: '',
      medicalConditions: '',
      accessibilityNeeds: '',
      preferredContact: 'email',
      ...initialData,
    },
  });

  const watchHasInsurance = watch('hasInsurance');

  const onSubmitForm = (data: PatientDetailsData) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-navy font-body mb-2">
          Your Information
        </h3>
        <p className="text-xs text-slate font-body">
          Please fill out your details below to secure your clinical record and finalize your booking.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-border space-y-6">
        {/* Step 1: Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
              First Name *
            </label>
            <input
              type="text"
              {...register('firstName')}
              className={cn(
                'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200',
                errors.firstName ? 'border-error ring-1 ring-error/20' : 'border-border'
              )}
            />
            {errors.firstName && (
              <span className="text-[10px] text-error font-body mt-1 block">
                {errors.firstName.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
              Last Name *
            </label>
            <input
              type="text"
              {...register('lastName')}
              className={cn(
                'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200',
                errors.lastName ? 'border-error ring-1 ring-error/20' : 'border-border'
              )}
            />
            {errors.lastName && (
              <span className="text-[10px] text-error font-body mt-1 block">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              {...register('email')}
              className={cn(
                'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200',
                errors.email ? 'border-error ring-1 ring-error/20' : 'border-border'
              )}
            />
            {errors.email && (
              <span className="text-[10px] text-error font-body mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="0400000000"
              {...register('phone')}
              className={cn(
                'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200',
                errors.phone ? 'border-error ring-1 ring-error/20' : 'border-border'
              )}
            />
            {errors.phone && (
              <span className="text-[10px] text-error font-body mt-1 block">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
              Date of Birth *
            </label>
            <input
              type="date"
              {...register('dob')}
              className={cn(
                'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200',
                errors.dob ? 'border-error ring-1 ring-error/20' : 'border-border'
              )}
            />
            {errors.dob && (
              <span className="text-[10px] text-error font-body mt-1 block">
                {errors.dob.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
              Medicare Number (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. 2123 45678 1"
              {...register('medicareNumber')}
              className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200"
            />
          </div>
        </div>

        {/* Step 2: Patient Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border/60 pt-6">
          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-2">
              Are you a new patient to Pearlhaus? *
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 font-body text-sm text-navy cursor-pointer">
                <input
                  type="radio"
                  value="yes"
                  {...register('isNewPatient')}
                  className="accent-mint w-4 h-4"
                />
                <span>Yes, I am new</span>
              </label>
              <label className="flex items-center space-x-2 font-body text-sm text-navy cursor-pointer">
                <input
                  type="radio"
                  value="no"
                  {...register('isNewPatient')}
                  className="accent-mint w-4 h-4"
                />
                <span>No, I have visited before</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
              How did you hear about us? *
            </label>
            <select
              {...register('referralSource')}
              className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200"
            >
              <option value="google">Google Search</option>
              <option value="social">Instagram / Social Media</option>
              <option value="friend">Word of Mouth / Friend Referral</option>
              <option value="local">I walk past the studio</option>
              <option value="other">Other Referral</option>
            </select>
          </div>
        </div>

        {/* Step 3: Insurance Info */}
        <div className="border-t border-border/60 pt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-2">
              Do you have private dental health insurance? *
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 font-body text-sm text-navy cursor-pointer">
                <input
                  type="radio"
                  value="yes"
                  {...register('hasInsurance')}
                  className="accent-mint w-4 h-4"
                />
                <span>Yes, I do</span>
              </label>
              <label className="flex items-center space-x-2 font-body text-sm text-navy cursor-pointer">
                <input
                  type="radio"
                  value="no"
                  {...register('hasInsurance')}
                  className="accent-mint w-4 h-4"
                />
                <span>No, I don't</span>
              </label>
            </div>
          </div>

          {watchHasInsurance === 'yes' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden pt-2"
            >
              <div>
                <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
                  Health Fund Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Medibank, Bupa"
                  {...register('insuranceFund')}
                  className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
                  Membership Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. 12345678"
                  {...register('insuranceNumber')}
                  className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Step 4: Medical Details & Comments */}
        <div className="border-t border-border/60 pt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
              Any medical conditions, allergies, or concerns we should know?
            </label>
            <textarea
              {...register('medicalConditions')}
              placeholder="e.g. Pregnancy, heart conditions, diabetes, latex allergy, high dental anxiety"
              rows={2}
              className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-1.5">
              Special requirements or accessibility needs?
            </label>
            <textarea
              {...register('accessibilityNeeds')}
              placeholder="e.g. Wheelchair access, interpreter needed, sensory sensitivities"
              rows={2}
              className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors duration-200"
            />
          </div>
        </div>

        {/* Step 5: Preferred Contact Method */}
        <div className="border-t border-border/60 pt-6">
          <label className="block text-xs font-bold text-navy font-body tracking-wider uppercase mb-2">
            Preferred contact method for appointment reminders *
          </label>
          <div className="flex space-x-6">
            {['sms', 'email', 'phone'].map((method) => (
              <label key={method} className="flex items-center space-x-2 font-body text-sm text-navy cursor-pointer capitalize">
                <input
                  type="radio"
                  value={method}
                  {...register('preferredContact')}
                  className="accent-mint w-4 h-4"
                />
                <span>{method === 'sms' ? 'SMS / Text' : method}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center pt-4">
        <button
          type="button"
          onClick={onBack}
          className="text-navy hover:text-mint font-body font-semibold text-sm transition-colors duration-200"
        >
          ← Back to Calendar
        </button>
        <Button type="submit">
          Continue to Summary
        </Button>
      </div>
    </form>
  );
};

export default PatientDetails;
