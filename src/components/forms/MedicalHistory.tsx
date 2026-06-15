import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

// Grouped medical conditions (60+ items represented cleanly)
export const MEDICAL_CONDITIONS_LIST = {
  cardiovascular: [
    'High Blood Pressure', 'Low Blood Pressure', 'Heart Attack', 'Heart Disease',
    'Angina / Chest Pain', 'Pacemaker', 'Stroke / TIA', 'Heart Murmur',
    'Rheumatic Fever', 'Heart Valve Disfunction', 'Congenital Heart Defect', 'Mitral Valve Prolapse'
  ],
  systemic: [
    'Diabetes (Type I or II)', 'Thyroid Disorder', 'Kidney Disease', 'Liver Disease',
    'Hepatitis (A, B, or C)', 'Epilepsy / Seizures', 'Asthma', 'Tuberculosis',
    'Cancer / Tumors', 'Leukemia', 'Chemotherapy / Radiotherapy', 'HIV / AIDS / Immunosuppression',
    'Arthritis / Joint Pain', 'Osteoporosis', 'Bleeding / Blood Disorders', 'Anemia',
    'Gastric Reflux (GERD)', 'Stomach Ulcers'
  ],
  allergies: [
    'Penicillin / Antibiotics', 'Latex / Rubber', 'Local Anesthetics', 'Aspirin',
    'Codeine / Narcotics', 'Sulfa Drugs', 'Metal Allergies (Nickel)', 'Nut Allergies',
    'Bee Stings', 'Egg Allergies', 'Preservatives', 'Acrylic / Plastics'
  ],
  lifestyle: [
    'Bleeding Gums', 'Sensitive Teeth', 'Dry Mouth', 'Grind / Clench Teeth',
    'Jaw Joint Pain (TMJ)', 'Previous Orthodontics', 'Periodontal Treatment', 'Frequent Headaches',
    'Active Smoker / Vaping', 'High Sugar Diet', 'Snore / Sleep Apnea', 'Fear of Dental Treatment'
  ]
};

const medicalHistorySchema = zod.object({
  fullName: zod.string().min(2, 'Name is required'),
  dob: zod.string().min(1, 'Date of birth is required'),
  conditions: zod.array(zod.string()).optional(),
  currentMedications: zod.string().optional(),
  recentSurgeries: zod.string().optional(),
  isPregnant: zod.enum(['yes', 'no', 'na']).optional(),
  consentCheckbox: zod.boolean().refine(val => val === true, 'You must consent to proceed'),
});

type MedicalHistoryData = zod.infer<typeof medicalHistorySchema>;

export const MedicalHistory: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<MedicalHistoryData>({
    resolver: zodResolver(medicalHistorySchema),
    defaultValues: {
      fullName: '',
      dob: '',
      conditions: [],
      currentMedications: '',
      recentSurgeries: '',
      isPregnant: 'no',
      consentCheckbox: false,
    },
  });

  const watchConditions = watch('conditions') || [];

  const handleCheckboxToggle = (cond: string) => {
    const current = [...watchConditions];
    const idx = current.indexOf(cond);
    if (idx > -1) {
      current.splice(idx, 1);
    } else {
      current.push(cond);
    }
    setValue('conditions', current, { shouldValidate: true });
  };

  const onSubmit = (data: MedicalHistoryData) => {
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
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
        <h3 className="font-display font-bold text-navy text-xl">History Updated</h3>
        <p className="font-body text-xs text-slate leading-relaxed">
          Your medical records have been successfully updated in our system. The clinical team will review this prior to your next treatment.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="text-xs font-bold text-mint hover:underline font-body uppercase tracking-wider block mx-auto pt-2"
        >
          Update Another Form
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-navy font-body mb-1">
          Medical History Update
        </h3>
        <p className="text-xs text-slate font-body">
          Existing patients can submit an updated medical questionnaire prior to scheduled treatments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
            Patient Full Name *
          </label>
          <input
            type="text"
            {...register('fullName')}
            className={cn(
              'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors',
              errors.fullName ? 'border-error' : 'border-border'
            )}
          />
          {errors.fullName && (
            <span className="text-[10px] text-error font-body mt-1 block">{errors.fullName.message}</span>
          )}
        </div>

        <div>
          <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
            Date of Birth *
          </label>
          <input
            type="date"
            {...register('dob')}
            className={cn(
              'w-full px-4 py-2 text-sm text-navy bg-off-white border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors',
              errors.dob ? 'border-error' : 'border-border'
            )}
          />
          {errors.dob && (
            <span className="text-[10px] text-error font-body mt-1 block">{errors.dob.message}</span>
          )}
        </div>
      </div>

      {/* Conditions Grid Section */}
      <div className="space-y-6 border-t border-border/60 pt-6">
        <h4 className="text-xs font-bold text-navy font-body uppercase tracking-wider">
          Tick any conditions that apply to you (past or present):
        </h4>

        {/* Cardiovascular */}
        <div className="space-y-3">
          <h5 className="text-[10px] font-bold text-mint font-body uppercase tracking-widest">
            Cardiovascular & Circulatory
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {MEDICAL_CONDITIONS_LIST.cardiovascular.map((cond) => {
              const isChecked = watchConditions.includes(cond);
              return (
                <button
                  key={cond}
                  type="button"
                  onClick={() => handleCheckboxToggle(cond)}
                  className={cn(
                    'py-2 px-3 text-left text-xs font-medium font-body rounded-lg border transition-all duration-300',
                    isChecked
                      ? 'bg-mint/10 text-mint-dark border-mint font-semibold'
                      : 'bg-off-white text-navy border-border/80 hover:border-mint/40'
                  )}
                >
                  {cond}
                </button>
              );
            })}
          </div>
        </div>

        {/* Systemic */}
        <div className="space-y-3">
          <h5 className="text-[10px] font-bold text-mint font-body uppercase tracking-widest">
            Systemic & General Health
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {MEDICAL_CONDITIONS_LIST.systemic.map((cond) => {
              const isChecked = watchConditions.includes(cond);
              return (
                <button
                  key={cond}
                  type="button"
                  onClick={() => handleCheckboxToggle(cond)}
                  className={cn(
                    'py-2 px-3 text-left text-xs font-medium font-body rounded-lg border transition-all duration-300',
                    isChecked
                      ? 'bg-mint/10 text-mint-dark border-mint font-semibold'
                      : 'bg-off-white text-navy border-border/80 hover:border-mint/40'
                  )}
                >
                  {cond}
                </button>
              );
            })}
          </div>
        </div>

        {/* Allergies */}
        <div className="space-y-3">
          <h5 className="text-[10px] font-bold text-mint font-body uppercase tracking-widest">
            Allergies & Sensitivities
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {MEDICAL_CONDITIONS_LIST.allergies.map((cond) => {
              const isChecked = watchConditions.includes(cond);
              return (
                <button
                  key={cond}
                  type="button"
                  onClick={() => handleCheckboxToggle(cond)}
                  className={cn(
                    'py-2 px-3 text-left text-xs font-medium font-body rounded-lg border transition-all duration-300',
                    isChecked
                      ? 'bg-mint/10 text-mint-dark border-mint font-semibold'
                      : 'bg-off-white text-navy border-border/80 hover:border-mint/40'
                  )}
                >
                  {cond}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dental / Lifestyle */}
        <div className="space-y-3">
          <h5 className="text-[10px] font-bold text-mint font-body uppercase tracking-widest">
            Dental History & Lifestyle
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {MEDICAL_CONDITIONS_LIST.lifestyle.map((cond) => {
              const isChecked = watchConditions.includes(cond);
              return (
                <button
                  key={cond}
                  type="button"
                  onClick={() => handleCheckboxToggle(cond)}
                  className={cn(
                    'py-2 px-3 text-left text-xs font-medium font-body rounded-lg border transition-all duration-300',
                    isChecked
                      ? 'bg-mint/10 text-mint-dark border-mint font-semibold'
                      : 'bg-off-white text-navy border-border/80 hover:border-mint/40'
                  )}
                >
                  {cond}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Medications and pregnancy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-border/60 pt-6">
        <div>
          <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
            List all current medications, vitamins, or supplements:
          </label>
          <textarea
            rows={3}
            {...register('currentMedications')}
            placeholder="Please enter drug names and dosages..."
            className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-1.5">
              List any recent surgeries, hospitalizations, or serious illnesses:
            </label>
            <textarea
              rows={2}
              {...register('recentSurgeries')}
              placeholder="Provide year and procedure detail..."
              className="w-full px-4 py-2 text-sm text-navy bg-off-white border border-border rounded-md font-body focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-colors"
            />
          </div>

          <div className="mt-4">
            <label className="block text-[10px] font-bold text-navy font-body tracking-wider uppercase mb-2">
              If female: Are you currently pregnant?
            </label>
            <div className="flex space-x-6">
              {[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
                { label: 'N/A', value: 'na' }
              ].map((opt) => (
                <label key={opt.value} className="flex items-center space-x-2 font-body text-sm text-navy cursor-pointer">
                  <input
                    type="radio"
                    value={opt.value}
                    {...register('isPregnant')}
                    className="accent-mint w-4 h-4"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="border-t border-border/60 pt-6">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('consentCheckbox')}
            className="accent-mint w-5 h-5 shrink-0 mt-0.5"
          />
          <span className="text-xs text-slate font-body leading-normal">
            I certify that I have read and understand the above questions, and I have completed this questionnaire to the best of my knowledge. I understand that providing incorrect clinical history can compromise my treatment safety. *
          </span>
        </label>
        {errors.consentCheckbox && (
          <span className="text-[10px] text-error font-body mt-1 block">{errors.consentCheckbox.message}</span>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Submitting Form...' : 'Submit Medical History Update'}
      </Button>
    </form>
  );
};

export default MedicalHistory;
