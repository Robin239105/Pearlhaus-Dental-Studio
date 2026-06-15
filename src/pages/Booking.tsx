import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import BookingForm from '../components/booking/BookingForm';
import { Calendar, Shield, Clock, Phone } from 'lucide-react';

export const Booking: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  const treatmentSlug = searchParams.get('treatment') || undefined;
  const doctorSlug = searchParams.get('doctor') || undefined;

  const notes = [
    {
      title: 'Instant Confirmation',
      desc: 'You will receive an immediate SMS and email confirmation containing your reference ID and checklist.',
      icon: <Calendar className="w-5 h-5 text-mint shrink-0 mt-0.5" />,
    },
    {
      title: 'No upfront booking fees',
      desc: 'We do not charge upfront booking deposits. Health fund claims are processed on the day of treatment.',
      icon: <Shield className="w-5 h-5 text-mint shrink-0 mt-0.5" />,
    },
    {
      title: 'Cancellation & Rescheduling',
      desc: 'Please provide at least 24 hours notice if you need to reschedule your booking so we can offer the slot to others.',
      icon: <Clock className="w-5 h-5 text-mint shrink-0 mt-0.5" />,
    },
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Schedule Visit' }]} />
          <div className="space-y-2 max-w-2xl text-left">
            <SectionLabel>Boutique Concierge</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Reserve Your Session:{' '}
              <span className="block font-semibold">Pearlhaus Booking.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Select your service, choose your preferred clinician, and pick an appointment slot. If you are a new patient, you can pre-fill your forms after completing this booking.
            </p>
          </div>
        </div>
      </div>

      {/* 2. MAIN BOOKING SECTION */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Booking Form Grid Area (Steps 1-5) */}
        <div className="lg:col-span-8 bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
          <BookingForm
            preselectedTreatmentSlug={treatmentSlug}
            preselectedDoctorSlug={doctorSlug}
          />
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6 text-left font-body">
          {/* Booking Notes */}
          <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 space-y-6">
            <h3 className="font-display font-bold text-navy text-lg border-b border-border pb-4">
              Booking Information
            </h3>
            <div className="space-y-4 text-xs md:text-sm text-slate">
              {notes.map((note, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  {note.icon}
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-navy text-xs uppercase tracking-wider">{note.title}</h4>
                    <p className="text-xs font-light text-slate leading-relaxed">{note.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Need help block */}
          <div className="border border-border rounded-2xl p-6 md:p-8 space-y-4">
            <h4 className="font-display font-bold text-navy text-base">
              Prefer to book over the phone?
            </h4>
            <p className="text-xs font-light text-slate leading-relaxed">
              If you have multiple family bookings or want to discuss orthodontic sequencing, our concierge desk is available to assist you.
            </p>
            <div className="flex items-center space-x-2 text-xs font-bold text-mint">
              <Phone className="w-4 h-4" />
              <a href="tel:+61290001420" className="hover:underline">
                Call Concierge: +61 2 9000 1420
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Booking;
