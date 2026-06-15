import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, Home, Calendar, Phone } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/ui/Button';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="min-h-[75vh] flex items-center justify-center px-6 py-16 bg-surface">
        <div className="w-full max-w-lg bg-white border border-border rounded-2xl p-8 md:p-12 shadow-lg text-center space-y-8 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-mint/5 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="space-y-4">
            <span className="text-4xl font-display font-light text-mint italic block">404</span>
            <div className="space-y-1">
              <h1 className="font-display font-light text-navy text-2xl md:text-3xl leading-snug">
                Page Not Found.
              </h1>
              <p className="font-body font-light text-xs text-slate max-w-xs mx-auto leading-relaxed pt-2">
                We apologize, but the dental guide, clinical article, or information page you are looking for does not exist or has been relocated.
              </p>
            </div>
          </div>

          {/* Quick links block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left font-body">
            <div
              onClick={() => navigate('/')}
              className="bg-surface hover:bg-mint-pale border border-border rounded-xl p-4 flex items-center space-x-3 cursor-pointer transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-mint shrink-0 shadow-sm">
                <Home className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-[11px] uppercase tracking-wider">Home Page</h4>
                <p className="text-[10px] text-slate">Back to main overview</p>
              </div>
            </div>

            <div
              onClick={() => navigate('/booking')}
              className="bg-surface hover:bg-mint-pale border border-border rounded-xl p-4 flex items-center space-x-3 cursor-pointer transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-mint shrink-0 shadow-sm">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-[11px] uppercase tracking-wider">Book Now</h4>
                <p className="text-[10px] text-slate">Schedule a consultation</p>
              </div>
            </div>
          </div>

          {/* Concierge support */}
          <div className="pt-6 border-t border-border/60 font-body text-xs text-slate space-y-4">
            <p className="font-light">Need personal assistance finding something?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+61290001420"
                className="w-full sm:w-auto text-center border border-border bg-white text-navy font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-md hover:bg-surface transition-colors duration-200"
              >
                Call Clinic
              </a>
              <Button onClick={() => navigate('/contact')} className="w-full sm:w-auto">
                Contact Concierge
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
