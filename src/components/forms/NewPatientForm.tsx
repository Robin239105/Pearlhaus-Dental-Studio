import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, AlertCircle, FileText, Activity, User, Shield } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';
import { MEDICAL_CONDITIONS_LIST } from './MedicalHistory';

// Zod Validation Schema
const newPatientSchema = zod.object({
  // Step 1: Personal Details
  firstName: zod.string().min(2, 'First name is required'),
  lastName: zod.string().min(2, 'Last name is required'),
  dob: zod.string().min(1, 'Date of birth is required'),
  gender: zod.string().min(1, 'Gender is required'),
  phone: zod.string().regex(/^(\+61|0)[2-9]\d{8}$/, 'Please enter a valid Australian number'),
  email: zod.string().email('Please enter a valid email address'),
  address: zod.string().min(5, 'Address is required'),
  
  // Emergency Contact
  emergencyName: zod.string().min(2, 'Emergency contact name is required'),
  emergencyPhone: zod.string().regex(/^(\+61|0)[2-9]\d{8}$/, 'Please enter a valid emergency phone number'),
  emergencyRelationship: zod.string().min(1, 'Relationship is required'),

  // Step 2: Insurance
  hasInsurance: zod.enum(['yes', 'no']),
  insuranceFund: zod.string().optional(),
  insuranceNumber: zod.string().optional(),

  // Step 3: Medical History
  conditions: zod.array(zod.string()).optional(),
  currentMedications: zod.string().optional(),
  recentSurgeries: zod.string().optional(),
  isPregnant: zod.enum(['yes', 'no', 'na']).optional(),

  // Step 4: Dental History & Consent
  lastDentalVisit: zod.string().min(1, 'Please select your last visit frequency'),
  dentalConcerns: zod.string().optional(),
  consentCheck: zod.boolean().refine(val => val === true, 'Consent is required'),
});

type NewPatientFormData = zod.infer<typeof newPatientSchema>;

export const NewPatientForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
    reset,
  } = useForm<NewPatientFormData>({
    resolver: zodResolver(newPatientSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dob: '',
      gender: 'other',
      phone: '',
      email: '',
      address: '',
      emergencyName: '',
      emergencyPhone: '',
      emergencyRelationship: '',
      hasInsurance: 'no',
      insuranceFund: '',
      insuranceNumber: '',
      conditions: [],
      currentMedications: '',
      recentSurgeries: '',
      isPregnant: 'no',
      lastDentalVisit: 'six-months',
      dentalConcerns: '',
      consentCheck: false,
    },
  });

  const watchHasInsurance = watch('hasInsurance');
  const watchConditions = watch('conditions') || [];

  const handleCheckboxToggle = (cond: string) => {
    const current = [...watchConditions];
    const idx = current.indexOf(cond);
    if (idx > -1) {
      current.splice(idx, 1);
    } else {
      current.push(cond);
    }
    setValue('conditions', current);
  };

  const stepsLabel = ['Personal Info', 'Insurance', 'Medical History', 'Dental & Consent'];

  const validateStep = async () => {
    let fieldsToValidate: (keyof NewPatientFormData)[] = [];
    
    if (step === 1) {
      fieldsToValidate = [
        'firstName', 'lastName', 'dob', 'gender', 'phone', 'email', 'address',
        'emergencyName', 'emergencyPhone', 'emergencyRelationship'
      ];
    } else if (step === 2) {
      fieldsToValidate = ['hasInsurance'];
    } else if (step === 3) {
      fieldsToValidate = []; // Medical conditions are optional checkboxes
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setDirection(1);
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data: NewPatientFormData) => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
    }, 1500);
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-mint-pale/40 border border-mint/20 p-8 rounded-2xl text-center space-y-6 max-w-lg mx-auto"
      >
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-mint text-white flex items-center justify-center shadow-lg shadow-mint/25">
            <CheckCircle2 className="w-8 h-8" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-display font-bold text-navy text-2xl">Registration Complete!</h3>
          <p className="font-body text-xs text-slate leading-relaxed">
            Thank you for completing your new patient registration. We have successfully recorded your details, emergency contacts, and clinical history.
          </p>
          <p className="font-body text-xs text-slate-500 font-semibold">
            This digital form replaces the paperwork required upon arrival. Please arrive 5 minutes before your scheduled appointment time.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
          }}
          className="text-xs font-bold text-mint hover:underline font-body uppercase tracking-wider block mx-auto pt-2"
        >
          Submit Another Form
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <ProgressBar currentStep={step} totalSteps={4} steps={stepsLabel} />

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm mt-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* STEP 1: Personal & Emergency Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 pb-3 border-b border-border">
                  <User className="w-5 h-5 text-mint" />
                  <h4 className="font-body font-bold text-navy text-sm uppercase tracking-wide">
                    Personal Details
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">First Name *</label>
                    <input type="text" {...register('firstName')} className={cn('w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint', errors.firstName && 'border-error')} />
                    {errors.firstName && <span className="text-[10px] text-error font-body mt-1 block">{errors.firstName.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Last Name *</label>
                    <input type="text" {...register('lastName')} className={cn('w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint', errors.lastName && 'border-error')} />
                    {errors.lastName && <span className="text-[10px] text-error font-body mt-1 block">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Date of Birth *</label>
                    <input type="date" {...register('dob')} className={cn('w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint', errors.dob && 'border-error')} />
                    {errors.dob && <span className="text-[10px] text-error font-body mt-1 block">{errors.dob.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Gender *</label>
                    <select {...register('gender')} className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none">
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other / Prefer not to say</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Phone Number *</label>
                    <input type="tel" placeholder="0400000000" {...register('phone')} className={cn('w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint', errors.phone && 'border-error')} />
                    {errors.phone && <span className="text-[10px] text-error font-body mt-1 block">{errors.phone.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Email Address *</label>
                    <input type="email" {...register('email')} className={cn('w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint', errors.email && 'border-error')} />
                    {errors.email && <span className="text-[10px] text-error font-body mt-1 block">{errors.email.message}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Home Address *</label>
                  <input type="text" {...register('address')} className={cn('w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint', errors.address && 'border-error')} />
                  {errors.address && <span className="text-[10px] text-error font-body mt-1 block">{errors.address.message}</span>}
                </div>

                <div className="flex items-center space-x-2 pb-3 border-b border-border pt-4">
                  <AlertCircle className="w-5 h-5 text-mint" />
                  <h4 className="font-body font-bold text-navy text-sm uppercase tracking-wide">
                    Emergency Contact
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Contact Full Name *</label>
                    <input type="text" {...register('emergencyName')} className={cn('w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint', errors.emergencyName && 'border-error')} />
                    {errors.emergencyName && <span className="text-[10px] text-error font-body mt-1 block">{errors.emergencyName.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Relationship *</label>
                    <input type="text" placeholder="e.g. Partner, Parent" {...register('emergencyRelationship')} className={cn('w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none', errors.emergencyRelationship && 'border-error')} />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Contact Phone Number *</label>
                  <input type="tel" {...register('emergencyPhone')} className={cn('w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint', errors.emergencyPhone && 'border-error')} />
                  {errors.emergencyPhone && <span className="text-[10px] text-error font-body mt-1 block">{errors.emergencyPhone.message}</span>}
                </div>

                <div className="flex justify-end pt-4 border-t border-border">
                  <Button type="button" onClick={validateStep}>
                    Continue to Insurance
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Health Insurance */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 pb-3 border-b border-border">
                  <Shield className="w-5 h-5 text-mint" />
                  <h4 className="font-body font-bold text-navy text-sm uppercase tracking-wide">
                    Private Health Insurance
                  </h4>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-2">
                    Do you have private dental health insurance?
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 font-body text-sm text-navy cursor-pointer">
                      <input type="radio" value="yes" {...register('hasInsurance')} className="accent-mint w-4 h-4" />
                      <span>Yes, I do</span>
                    </label>
                    <label className="flex items-center space-x-2 font-body text-sm text-navy cursor-pointer">
                      <input type="radio" value="no" {...register('hasInsurance')} className="accent-mint w-4 h-4" />
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
                      <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Health Fund Name</label>
                      <input type="text" placeholder="e.g. Medibank" {...register('insuranceFund')} className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">Membership Number</label>
                      <input type="text" placeholder="e.g. 123456" {...register('insuranceNumber')} className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none" />
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-between items-center pt-6 border-t border-border">
                  <button type="button" onClick={handleBack} className="text-navy hover:text-mint font-body font-semibold text-sm transition-colors">
                    ← Back
                  </button>
                  <Button type="button" onClick={validateStep}>
                    Continue to Medical History
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Medical History Checklists */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 pb-3 border-b border-border">
                  <Activity className="w-5 h-5 text-mint" />
                  <h4 className="font-body font-bold text-navy text-sm uppercase tracking-wide">
                    Medical History Questionnaire
                  </h4>
                </div>

                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  <p className="text-xs text-slate font-body">Tick any conditions that apply (past or present):</p>
                  
                  {/* Cardiovascular */}
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold text-mint font-body uppercase tracking-wider block">Cardiovascular</span>
                    <div className="flex flex-wrap gap-1.5">
                      {MEDICAL_CONDITIONS_LIST.cardiovascular.map((c) => {
                        const isChecked = watchConditions.includes(c);
                        return (
                          <button
                            key={c}
                            type="button"
                            onClick={() => handleCheckboxToggle(c)}
                            className={cn(
                              'py-1.5 px-2.5 text-left text-[11px] font-medium font-body rounded border transition-colors',
                              isChecked ? 'bg-mint/10 text-mint-dark border-mint' : 'bg-off-white text-navy border-border hover:border-mint/30'
                            )}
                          >
                            {c}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Systemic */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[9px] font-bold text-mint font-body uppercase tracking-wider block">Systemic Health</span>
                    <div className="flex flex-wrap gap-1.5">
                      {MEDICAL_CONDITIONS_LIST.systemic.map((c) => {
                        const isChecked = watchConditions.includes(c);
                        return (
                          <button
                            key={c}
                            type="button"
                            onClick={() => handleCheckboxToggle(c)}
                            className={cn(
                              'py-1.5 px-2.5 text-left text-[11px] font-medium font-body rounded border transition-colors',
                              isChecked ? 'bg-mint/10 text-mint-dark border-mint' : 'bg-off-white text-navy border-border hover:border-mint/30'
                            )}
                          >
                            {c}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Allergies */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[9px] font-bold text-mint font-body uppercase tracking-wider block">Allergies</span>
                    <div className="flex flex-wrap gap-1.5">
                      {MEDICAL_CONDITIONS_LIST.allergies.map((c) => {
                        const isChecked = watchConditions.includes(c);
                        return (
                          <button
                            key={c}
                            type="button"
                            onClick={() => handleCheckboxToggle(c)}
                            className={cn(
                              'py-1.5 px-2.5 text-left text-[11px] font-medium font-body rounded border transition-colors',
                              isChecked ? 'bg-mint/10 text-mint-dark border-mint' : 'bg-off-white text-navy border-border hover:border-mint/30'
                            )}
                          >
                            {c}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-border pt-4">
                  <div>
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1">Medications</label>
                    <textarea rows={2} {...register('currentMedications')} placeholder="Vitamins or prescription drug names..." className="w-full px-3 py-1.5 text-xs text-navy bg-off-white border border-border rounded-md font-body" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1">Recent Surgeries</label>
                    <textarea rows={2} {...register('recentSurgeries')} placeholder="Year and procedure details..." className="w-full px-3 py-1.5 text-xs text-navy bg-off-white border border-border rounded-md font-body" />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <button type="button" onClick={handleBack} className="text-navy hover:text-mint font-body font-semibold text-sm transition-colors">
                    ← Back
                  </button>
                  <Button type="button" onClick={validateStep}>
                    Continue to Consent
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4: Dental History & Consent */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 pb-3 border-b border-border">
                  <FileText className="w-5 h-5 text-mint" />
                  <h4 className="font-body font-bold text-navy text-sm uppercase tracking-wide">
                    Dental Details & Consent
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
                      Last dental check-up & clean? *
                    </label>
                    <select {...register('lastDentalVisit')} className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none">
                      <option value="six-months">Less than 6 months ago</option>
                      <option value="twelve-months">6 to 12 months ago</option>
                      <option value="two-years">1 to 2 years ago</option>
                      <option value="longer">More than 2 years ago</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
                      Primary dental concerns or goals?
                    </label>
                    <input type="text" placeholder="e.g. Straightening teeth, wisdom pain, whitening" {...register('dentalConcerns')} className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none" />
                  </div>
                </div>

                <div className="border-t border-border/60 pt-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input type="checkbox" {...register('consentCheck')} className="accent-mint w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate font-body leading-normal">
                      I authorize the clinicians of Pearlhaus Dental Studio to perform diagnostic assessments, and I verify that the clinical history provided in this form is accurate and complete. I consent to receive appointment alerts. *
                    </span>
                  </label>
                  {errors.consentCheck && (
                    <span className="text-[10px] text-error font-body mt-1 block">{errors.consentCheck.message}</span>
                  )}
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-border">
                  <button type="button" onClick={handleBack} disabled={isSubmitting} className="text-navy hover:text-mint font-body font-semibold text-sm transition-colors">
                    ← Back
                  </button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting Registration...' : 'Submit Registration'}
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
};

export default NewPatientForm;
