import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressBar from '../ui/ProgressBar';
import TreatmentSelector from './TreatmentSelector';
import DoctorSelector from './DoctorSelector';
import CalendarPicker from './CalendarPicker';
import PatientDetails, { type PatientDetailsData } from './PatientDetails';
import BookingSummary from './BookingSummary';
import BookingSuccess from './BookingSuccess';
import { type Treatment, type TeamMember } from '../../types';
import { treatments } from '../../data/treatments';
import { team } from '../../data/team';
import Button from '../ui/Button';

interface BookingFormProps {
  preselectedTreatmentSlug?: string;
  preselectedDoctorSlug?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  preselectedTreatmentSlug,
  preselectedDoctorSlug,
}) => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  // Booking states
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<TeamMember | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [patientDetails, setPatientDetails] = useState<PatientDetailsData | null>(null);
  const [referenceId, setReferenceId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-selection triggers
  useEffect(() => {
    if (preselectedTreatmentSlug) {
      const match = treatments.find((t) => t.slug === preselectedTreatmentSlug);
      if (match) {
        setSelectedTreatment(match);
      }
    }
    if (preselectedDoctorSlug) {
      const match = team.find((d) => d.slug === preselectedDoctorSlug);
      if (match) {
        setSelectedDoctor(match);
      }
    }
  }, [preselectedTreatmentSlug, preselectedDoctorSlug]);

  const stepsLabel = ['Service', 'Schedule', 'Details', 'Confirm'];

  const handleNextStep = () => {
    setDirection(1);
    setStep((prev) => prev + 1);
  };

  const handleBackStep = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const handleConfirmBooking = () => {
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      // Generate reference ID e.g. PH-7A9B3E2D
      const randomHex = Math.floor(Math.random() * 0xffffffff).toString(16).toUpperCase().padStart(8, '0');
      setReferenceId(`PH-${randomHex}`);
      setIsSubmitting(false);
      handleNextStep();
    }, 1500);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Show ProgressBar only for steps 1-4 */}
      {step <= 4 && (
        <ProgressBar
          currentStep={step}
          totalSteps={4}
          steps={stepsLabel}
        />
      )}

      <div className="relative overflow-hidden min-h-[400px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full"
          >
            {/* STEP 1: Treatment & Doctor Selection */}
            {step === 1 && (
              <div className="space-y-8">
                <TreatmentSelector
                  selectedTreatment={selectedTreatment}
                  onSelect={setSelectedTreatment}
                />
                
                {selectedTreatment && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="overflow-hidden"
                  >
                    <DoctorSelector
                      selectedTreatment={selectedTreatment}
                      selectedDoctor={selectedDoctor}
                      onSelect={setSelectedDoctor}
                    />
                  </motion.div>
                )}

                <div className="flex justify-end pt-4 border-t border-border/60">
                  <Button
                    onClick={handleNextStep}
                    disabled={!selectedTreatment} // must click a selection
                  >
                    Continue to Calendar
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Calendar & Time Slots */}
            {step === 2 && (
              <div className="space-y-6">
                {/* Doctor Selection if general consultation */}
                {!selectedTreatment && (
                  <DoctorSelector
                    selectedTreatment={null}
                    selectedDoctor={selectedDoctor}
                    onSelect={setSelectedDoctor}
                  />
                )}

                <CalendarPicker
                  selectedDoctor={selectedDoctor}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onSelectDate={setSelectedDate}
                  onSelectTime={setSelectedTime}
                />

                <div className="flex justify-between items-center pt-4 border-t border-border/60">
                  <button
                    type="button"
                    onClick={handleBackStep}
                    className="text-navy hover:text-mint font-body font-semibold text-sm transition-colors"
                  >
                    ← Back to Treatments
                  </button>
                  <Button
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                  >
                    Continue to Details
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Patient Form Details */}
            {step === 3 && (
              <PatientDetails
                initialData={patientDetails || {}}
                onNext={(data) => {
                  setPatientDetails(data);
                  handleNextStep();
                }}
                onBack={handleBackStep}
              />
            )}

            {/* STEP 4: Summary Review */}
            {step === 4 && (
              <BookingSummary
                treatment={selectedTreatment}
                doctor={selectedDoctor}
                date={selectedDate}
                time={selectedTime}
                patientDetails={patientDetails}
                onConfirm={handleConfirmBooking}
                onBack={handleBackStep}
                isSubmitting={isSubmitting}
              />
            )}

            {/* STEP 5: Success State */}
            {step === 5 && (
              <BookingSuccess
                referenceId={referenceId}
                treatment={selectedTreatment}
                doctor={selectedDoctor}
                date={selectedDate}
                time={selectedTime}
                patientDetails={patientDetails}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BookingForm;
