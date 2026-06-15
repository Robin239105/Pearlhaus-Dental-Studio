import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Compass, Train, Car } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import ContactForm from '../components/forms/ContactForm';

export const Contact: React.FC = () => {
  const officeHours = [
    { day: 'Monday', hours: '8:00 AM – 7:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM – 7:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM – 7:00 PM' },
    { day: 'Thursday', hours: '8:00 AM – 8:00 PM', isLate: true },
    { day: 'Friday', hours: '8:00 AM – 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Calls Only' },
  ];

  const travelInfo = [
    {
      title: 'By Train & Metro',
      description: 'Pearlhaus is located just a 5-minute walk from Town Hall Station or Museum Station. Exit toward Druitt Street, and walk down Harbour Street.',
      icon: <Train className="w-5 h-5 text-mint" />,
    },
    {
      title: 'By Car & Parking',
      description: 'Secure parking is available at the Harbour Street public parking station directly opposite. We offer 1-hour parking validation for all appointments.',
      icon: <Car className="w-5 h-5 text-mint" />,
    },
    {
      title: 'Studio Location',
      description: 'Find us at Level 4, 142 Harbour Street, Sydney NSW 2000. Look for the modern green building with the glass facade.',
      icon: <Compass className="w-5 h-5 text-mint" />,
    },
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <div className="space-y-2 max-w-2xl text-left">
            <SectionLabel>Get in touch</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Connect With{' '}
              <span className="block font-semibold">Pearlhaus Studio.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Have a question, feedback, or want to speak with our treatment coordinators? Drop us a line below, visit our Sydney CBD space, or call our concierge team directly.
            </p>
          </div>
        </div>
      </div>

      {/* 2. FORM & INFO SECTION */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <ContactForm />
        </div>

        {/* Right Column: Address, Phones, Hours */}
        <div className="lg:col-span-5 space-y-8 text-left font-body">
          {/* Contact Cards */}
          <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 space-y-6">
            <h3 className="font-display font-bold text-navy text-xl border-b border-border pb-4">
              Concierge Desk
            </h3>

            <div className="space-y-4 text-xs md:text-sm text-slate">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="font-bold text-navy">Boutique Location</h4>
                  <p>Level 4, 142 Harbour Street</p>
                  <p>Sydney CBD, NSW 2000</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="font-bold text-navy">Telephone Enquiries</h4>
                  <p className="font-semibold text-mint hover:underline">
                    <a href="tel:+61290001420">+61 2 9000 1420</a>
                  </p>
                  <p className="text-[10px] text-muted uppercase">🚨 24hr emergency line: +61 2 9000 1422</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="font-bold text-navy">Email Guest Support</h4>
                  <p className="font-semibold hover:text-mint transition-colors duration-200">
                    <a href="mailto:hello@pearlhaus.com.au">hello@pearlhaus.com.au</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-white rounded-2xl border border-border p-6 md:p-8 space-y-4 shadow-sm">
            <div className="flex items-center space-x-2 border-b border-border pb-4">
              <Clock className="w-5 h-5 text-mint" />
              <h3 className="font-display font-bold text-navy text-lg">
                Studio Hours
              </h3>
            </div>

            <div className="space-y-3 font-body text-xs text-slate">
              {officeHours.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center py-0.5 border-b border-border/30 last:border-0 pb-1">
                  <span className="font-medium text-navy">{row.day}</span>
                  <div className="flex items-center space-x-1.5">
                    {row.isLate && (
                      <span className="text-[9px] font-bold text-mint bg-mint-pale px-2 py-0.5 rounded uppercase tracking-wider">
                        Late Night
                      </span>
                    )}
                    <span className={row.day === 'Sunday' ? 'text-error font-semibold' : ''}>
                      {row.hours}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. DIRECTIONS / PARKING / ACCESS */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-lg mx-auto">
            <SectionLabel>Arrival Guide</SectionLabel>
            <h2 className="font-display font-light text-navy text-2xl md:text-4xl">
              Finding Our Sydney Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-body">
            {travelInfo.map((info, idx) => (
              <div key={idx} className="bg-white border border-border rounded-xl p-6 shadow-sm space-y-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-mint-pale flex items-center justify-center text-mint">
                  {info.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-navy text-xs uppercase tracking-wider">{info.title}</h4>
                  <p className="text-xs font-light text-slate leading-relaxed">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. MAP PLACEHOLDER */}
      <div className="w-full h-[320px] md:h-[420px] relative bg-slate/10 overflow-hidden border-b border-border">
        {/* Styled custom Google Map Placeholder with spa-wellness overlay */}
        <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center space-y-3 p-6 text-center">
          <MapPin className="w-10 h-10 text-mint animate-bounce" />
          <div className="space-y-1 max-w-sm">
            <h4 className="font-display font-bold text-navy text-lg">Pearlhaus Dental Studio</h4>
            <p className="font-body font-light text-xs text-slate leading-relaxed">
              142 Harbour Street, Sydney NSW 2000
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=142+Harbour+Street+Sydney+NSW+2000"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs font-bold text-mint bg-white border border-border px-5 py-2.5 rounded shadow-sm hover:bg-mint hover:text-white hover:border-mint transition-all duration-300 uppercase tracking-wider"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
