import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Calendar, ArrowRight, Printer, AlertCircle, MapPin, Clock } from 'lucide-react';
import { type Treatment, type TeamMember } from '../../types';
import { type PatientDetailsData } from './PatientDetails';

interface BookingSuccessProps {
  referenceId: string;
  treatment: Treatment | null;
  doctor: TeamMember | null;
  date: Date | undefined;
  time: string;
  patientDetails: PatientDetailsData | null;
}

export const BookingSuccess: React.FC<BookingSuccessProps> = ({
  referenceId,
  treatment,
  doctor,
  date,
  time,
  patientDetails,
}) => {
  if (!patientDetails || !date || !time) return null;

  const formattedDate = date.toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl border border-border shadow-lg text-center max-w-2xl mx-auto space-y-8">
      {/* Animated Checkmark Badge */}
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-mint-pale border border-mint/20 flex items-center justify-center text-mint relative"
        >
          {/* Circular ripple */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full border-2 border-mint/30"
          />
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 z-10"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
              d="M20 6L9 17l-5-5"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Success Title */}
      <div className="space-y-2">
        <span className="text-[10px] font-bold text-mint tracking-wider uppercase block font-body">
          Booking Confirmed
        </span>
        <h2 className="font-display font-bold text-navy text-2xl md:text-3xl">
          Your Smile Journey Begins!
        </h2>
        <p className="font-body text-xs text-slate max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{patientDetails.firstName}</strong>. Your appointment has been secured in our clinical system. We have sent a confirmation email to <strong>{patientDetails.email}</strong>.
        </p>
      </div>

      {/* Booking Ref Code */}
      <div className="bg-surface rounded-xl p-4 inline-block border border-border">
        <span className="text-[10px] font-bold text-muted font-body uppercase tracking-wider block">
          Appointment Reference
        </span>
        <span className="text-xl font-bold font-body text-navy tracking-wider mt-1 block">
          {referenceId}
        </span>
      </div>

      {/* Appointment Summary Box */}
      <div className="border border-border/80 rounded-xl p-5 text-left font-body text-xs text-slate space-y-3 bg-off-white">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-mint shrink-0" />
          <span>
            Date: <strong className="text-navy">{formattedDate}</strong>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-mint shrink-0" />
          <span>
            Time: <strong className="text-navy">{time}</strong>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Check className="w-4 h-4 text-mint shrink-0" />
          <span>
            Treatment:{' '}
            <strong className="text-navy">
              {treatment ? treatment.title : 'General Dental Consultation'}
            </strong>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Check className="w-4 h-4 text-mint shrink-0" />
          <span>
            Dentist:{' '}
            <strong className="text-navy">
              {doctor ? doctor.name : 'First Available Practitioner'}
            </strong>
          </span>
        </div>
        <div className="flex items-start space-x-2">
          <MapPin className="w-4 h-4 text-mint shrink-0 mt-0.5" />
          <span>
            Location: <strong className="text-navy">Pearlhaus Studio, 142 Harbour St, Sydney CBD</strong>
          </span>
        </div>
      </div>

      {/* Calendar & Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="border border-border hover:border-mint hover:bg-mint-pale/10 py-3 rounded-lg text-xs font-semibold font-body text-navy flex items-center justify-center space-x-2 transition-all duration-300"
        >
          <Calendar className="w-4 h-4 text-mint" />
          <span>Add to Google Calendar</span>
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="border border-border hover:border-mint hover:bg-mint-pale/10 py-3 rounded-lg text-xs font-semibold font-body text-navy flex items-center justify-center space-x-2 transition-all duration-300"
        >
          <Calendar className="w-4 h-4 text-mint" />
          <span>Add to Apple Calendar</span>
        </a>
      </div>

      {/* What to Bring Checklist */}
      <div className="border-t border-border/60 pt-6 text-left space-y-4">
        <h4 className="flex items-center text-xs font-bold text-navy font-body tracking-wider uppercase">
          <AlertCircle className="w-4 h-4 text-mint mr-2 shrink-0" />
          <span>What to bring to your visit</span>
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs font-body text-slate">
          <li className="flex items-start space-x-2">
            <span className="text-mint shrink-0">✓</span>
            <span>Active Medicare card & Photo identification</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-mint shrink-0">✓</span>
            <span>Private health insurance card (for HICAPS claims)</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-mint shrink-0">✓</span>
            <span>List of any current medications you are taking</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-mint shrink-0">✓</span>
            <span>Any recent dental X-rays (taken in last 12 months)</span>
          </li>
        </ul>
      </div>

      {/* Bottom links */}
      <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}
          className="flex items-center text-xs font-bold text-slate hover:text-navy font-body uppercase tracking-wider"
        >
          <Printer className="w-4 h-4 mr-2" />
          <span>Print Summary</span>
        </a>
        <div className="flex space-x-6 text-xs font-bold font-body uppercase tracking-wider">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('To reschedule or cancel, please call our reception on +61 2 9000 1420 at least 24 hours prior.');
            }}
            className="text-slate hover:text-mint"
          >
            Modify Booking
          </a>
          <Link to="/" className="text-mint hover:text-mint-dark inline-flex items-center">
            <span>Back to Home</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
