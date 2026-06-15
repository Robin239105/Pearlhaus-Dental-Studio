import React from 'react';
import { Calendar, Clock, User, Sparkles, Phone, Mail, ShieldAlert, CreditCard } from 'lucide-react';
import { type Treatment, type TeamMember } from '../../types';
import { type PatientDetailsData } from './PatientDetails';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';

interface BookingSummaryProps {
  treatment: Treatment | null;
  doctor: TeamMember | null;
  date: Date | undefined;
  time: string;
  patientDetails: PatientDetailsData | null;
  onConfirm: () => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  treatment,
  doctor,
  date,
  time,
  patientDetails,
  onConfirm,
  onBack,
  isSubmitting = false,
}) => {
  if (!patientDetails || !date || !time) return null;

  const formattedDate = date.toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-navy font-body mb-2">
          Confirm Your Appointment
        </h3>
        <p className="text-xs text-slate font-body">
          Please review your appointment choices below. Click "Confirm Appointment" to finalize.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Card: Appointment details (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-xl border border-border space-y-6">
            {/* Treatment & Doctor */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/60">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-mint-pale rounded-lg text-mint shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-mint tracking-wider uppercase block font-body">
                    Treatment
                  </span>
                  <h4 className="font-body font-bold text-navy text-base">
                    {treatment ? treatment.title : 'General Dental Consultation'}
                  </h4>
                  <p className="font-body text-xs text-slate mt-0.5">
                    {treatment ? treatment.category : 'General Dentistry'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                {doctor ? (
                  <Avatar
                    src={doctor.image}
                    alt={doctor.name}
                    size="md"
                    border
                    className="w-12 h-12 shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-mint-pale text-mint flex items-center justify-center border border-mint/20 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <span className="text-[10px] font-bold text-mint tracking-wider uppercase block font-body">
                    Dentist
                  </span>
                  <h4 className="font-body font-bold text-navy text-base">
                    {doctor ? doctor.name : 'No Preference (First Available)'}
                  </h4>
                  <p className="font-body text-xs text-slate mt-0.5">
                    {doctor ? doctor.title : 'Pearlhaus Clinical Team'}
                  </p>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-border/60">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-mint shrink-0" />
                <div>
                  <span className="text-[10px] font-bold text-slate tracking-wider uppercase block font-body">
                    Date
                  </span>
                  <span className="font-body text-sm font-semibold text-navy">{formattedDate}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-mint shrink-0" />
                <div>
                  <span className="text-[10px] font-bold text-slate tracking-wider uppercase block font-body">
                    Time
                  </span>
                  <span className="font-body text-sm font-semibold text-navy">{time}</span>
                </div>
              </div>
            </div>

            {/* Patient Info */}
            <div className="space-y-4">
              <h5 className="font-body font-bold text-navy text-sm uppercase tracking-wide">
                Patient Contact
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body text-slate">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-muted shrink-0" />
                  <span>
                    Name: <strong className="text-navy">{patientDetails.firstName} {patientDetails.lastName}</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-muted shrink-0" />
                  <span>
                    Date of Birth: <strong className="text-navy">{new Date(patientDetails.dob).toLocaleDateString('en-AU')}</strong>
                  </span>
                </div>
                <a href={`tel:${patientDetails.phone}`} className="flex items-center space-x-2 hover:text-mint transition-colors">
                  <Phone className="w-4 h-4 text-muted shrink-0" />
                  <span>Phone: <strong className="text-navy">{patientDetails.phone}</strong></span>
                </a>
                <a href={`mailto:${patientDetails.email}`} className="flex items-center space-x-2 hover:text-mint transition-colors">
                  <Mail className="w-4 h-4 text-muted shrink-0" />
                  <span>Email: <strong className="text-navy">{patientDetails.email}</strong></span>
                </a>
              </div>
            </div>

            {/* Medical Notes if any */}
            {patientDetails.medicalConditions && (
              <div className="bg-error/5 p-4 rounded-lg border border-error/15 flex items-start space-x-2.5">
                <ShieldAlert className="w-4 h-4 text-error shrink-0 mt-0.5" />
                <div className="text-xs font-body text-slate">
                  <strong className="text-error uppercase tracking-wider text-[10px] block mb-1">
                    Medical Conditions / Warnings
                  </strong>
                  <span>{patientDetails.medicalConditions}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Card: Cost Breakdown & Billing details (1 col) */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-border space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <h5 className="font-body font-bold text-navy text-sm uppercase tracking-wide">
                Estimated Billing
              </h5>

              <div className="border-b border-border/60 pb-3">
                <div className="flex justify-between items-center text-xs font-body py-1 text-slate">
                  <span>Treatment Consultation:</span>
                  <span className="font-semibold text-navy">
                    {treatment ? treatment.price.split(' ')[1] || treatment.price : '$150'}
                  </span>
                </div>
                {patientDetails.hasInsurance === 'yes' && (
                  <div className="flex justify-between items-center text-xs font-body py-1 text-mint-dark">
                    <span>HICAPS Rebate (Claimable):</span>
                    <span>On-the-spot</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-[10px] text-muted py-0.5">
                  <span>Pricing Note:</span>
                  <span>{treatment ? treatment.priceNote : 'Standard gap-fees apply'}</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-xs font-bold text-navy font-body uppercase">Total Estimated:</span>
                <span className="text-lg font-bold text-mint font-body">
                  {treatment ? treatment.price : 'From $150'}
                </span>
              </div>

              <div className="bg-surface p-3.5 rounded-lg border border-border text-[11px] font-body text-slate leading-relaxed">
                <div className="flex items-center font-bold text-navy uppercase text-[10px] mb-1">
                  <CreditCard className="w-3.5 h-3.5 text-mint mr-1.5" />
                  <span>Payment Plans Available</span>
                </div>
                Interested in splitting the cost? Speak with Dr. {doctor ? doctor.name.split(' ').pop() : 'Whitmore'} about our interest-free repayment options through Zip, Afterpay, or DentiCare.
              </div>
            </div>

            <Button
              fullWidth
              onClick={onConfirm}
              disabled={isSubmitting}
              className="mt-6 font-semibold"
            >
              {isSubmitting ? 'Confirming Appointment...' : 'Confirm Appointment'}
            </Button>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="text-navy hover:text-mint font-body font-semibold text-sm transition-colors duration-200"
        >
          ← Back to Details
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
