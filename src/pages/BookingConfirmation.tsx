import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Calendar, Clipboard, Heart, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/ui/Button';

export const BookingConfirmation: React.FC = () => {
  const navigate = useNavigate();

  // Generate a mock booking reference for demonstration
  const mockRef = 'PH-' + Math.floor(Math.random() * 0xffffffff).toString(16).toUpperCase().padStart(8, '0');

  return (
    <PageWrapper>
      <div className="min-h-[75vh] flex items-center justify-center px-6 py-16 bg-surface">
        <div className="w-full max-w-lg bg-white border border-border rounded-2xl p-6 md:p-10 shadow-lg text-center space-y-8 relative overflow-hidden">
          {/* Top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-mint/5 rounded-full blur-3xl pointer-events-none" />

          {/* Success Checkbox */}
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-mint-pale text-mint flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-mint uppercase tracking-widest block font-body">Confirmed</span>
              <h1 className="font-display font-light text-navy text-2xl md:text-3xl">
                Your Smile is Scheduled!
              </h1>
            </div>
            <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
              Thank you for choosing Pearlhaus. We have reserved your appointment slot. A verification details card has been dispatched to your email address and SMS inbox.
            </p>
          </div>

          {/* Booking Info Box */}
          <div className="bg-surface rounded-xl border border-border p-5 text-left font-body space-y-3">
            <div className="flex justify-between items-center text-xs border-b border-border/40 pb-2.5">
              <span className="font-medium text-navy">Reference ID:</span>
              <span className="font-bold text-mint">{mockRef}</span>
            </div>
            <div className="flex justify-between items-center text-xs border-b border-border/40 pb-2.5">
              <span className="font-medium text-navy">Studio Location:</span>
              <span className="font-light text-slate">142 Harbour Street, Sydney</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-navy">Consultation Status:</span>
              <span className="font-bold text-mint uppercase tracking-wider text-[9px] bg-mint-pale px-2 py-0.5 rounded">Pre-Approved</span>
            </div>
          </div>

          {/* Next Steps Prompt */}
          <div className="space-y-4 border-t border-border/60 pt-6">
            <div className="text-left font-body space-y-3 bg-mint-pale/40 border border-mint/15 rounded-xl p-4">
              <h4 className="text-xs font-bold text-navy uppercase tracking-wider flex items-center">
                <Clipboard className="w-4 h-4 text-mint mr-2" />
                <span>Save 15 Minutes at Check-in</span>
              </h4>
              <p className="text-[11px] font-light text-slate leading-relaxed">
                If you are a new patient, you can pre-register online now. Submit your contact details and medical history securely, so you can walk straight into the lounge when you arrive.
              </p>
              <button
                onClick={() => navigate('/patient-forms')}
                className="text-[11px] font-bold text-mint hover:underline flex items-center space-x-1"
              >
                <span>Complete Patient Forms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 font-body">
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto text-center border border-border bg-white text-navy font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-md hover:bg-surface transition-colors duration-200"
              >
                Back to Home
              </button>
              <Button onClick={() => navigate('/patient-info')}>
                Patient Info Hub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BookingConfirmation;
