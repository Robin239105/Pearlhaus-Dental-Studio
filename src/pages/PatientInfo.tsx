import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ClipboardList, Wallet, HelpCircle, MapPin, Calendar, Heart, Shield, Clock } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';

export const PatientInfo: React.FC = () => {
  const navigate = useNavigate();

  const hubs = [
    {
      title: 'New Patient Guide',
      description: 'Everything you need to know about your first appointment, what to expect, and our holistic wellness journey.',
      icon: <BookOpen className="w-6 h-6 text-mint" />,
      path: '/new-patients',
      actionText: 'View Guide',
    },
    {
      title: 'Online Patient Forms',
      description: 'Save time in the lounge by completing your patient intake registration and medical history forms online.',
      icon: <ClipboardList className="w-6 h-6 text-mint" />,
      path: '/patient-forms',
      actionText: 'Complete Forms',
    },
    {
      title: 'Finance & Payment Plans',
      description: 'Flexible payment options including Afterpay, Zip, and interest-free payment plans. Calculate repayments instantly.',
      icon: <Wallet className="w-6 h-6 text-mint" />,
      path: '/finance',
      actionText: 'Explore Finance',
    },
    {
      title: 'Frequently Asked Questions',
      description: 'Have a question about clinical treatments, pain management, or pricing? Browse our comprehensive FAQ directory.',
      icon: <HelpCircle className="w-6 h-6 text-mint" />,
      path: '/faq',
      actionText: 'Browse FAQs',
    },
    {
      title: 'Contact & Location',
      description: 'Find our boutique studio in Sydney CBD, check our opening hours, transit directions, and parking details.',
      icon: <MapPin className="w-6 h-6 text-mint" />,
      path: '/contact',
      actionText: 'Get Directions',
    },
    {
      title: 'Book an Appointment',
      description: 'Ready to begin your journey? Select your treatment and preferred dentist to secure your appointment instantly.',
      icon: <Calendar className="w-6 h-6 text-mint" />,
      path: '/booking',
      actionText: 'Book Now',
    },
  ];

  const highlights = [
    {
      title: 'Clinical Excellence',
      description: 'Equipped with the latest CEREC same-day crowns, 3D imaging, and laser technology.',
      icon: <Shield className="w-5 h-5 text-mint" />,
    },
    {
      title: 'Spa-Like Atmosphere',
      description: 'Enjoy complimentary tea, aromatherapy, ceiling entertainment screens, and warm towels.',
      icon: <Heart className="w-5 h-5 text-mint" />,
    },
    {
      title: 'Flexible scheduling',
      description: 'Extended hours, lunch break appointments, and immediate 24/7 dental emergency care.',
      icon: <Clock className="w-5 h-5 text-mint" />,
    },
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Patient Information' }]} />
          <div className="space-y-2 max-w-2xl text-left">
            <SectionLabel>Resources & Care Guides</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Patient Information{' '}
              <span className="block font-semibold">Center.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Welcome to the Pearlhaus patient portal. We have compiled guides, forms, finance calculators, and clinic information to make your dental experience seamless and stress-free.
            </p>
          </div>
        </div>
      </div>

      {/* 2. HUBS GRID */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white border border-border hover:border-mint/60 hover:shadow-md transition-all duration-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between text-left group cursor-pointer"
              onClick={() => navigate(hub.path)}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-mint-pale flex items-center justify-center group-hover:bg-mint group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {hub.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-navy text-lg group-hover:text-mint transition-colors duration-300">
                    {hub.title}
                  </h3>
                  <p className="font-body font-light text-xs text-slate leading-relaxed">
                    {hub.description}
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <span className="inline-flex items-center text-xs font-bold text-mint group-hover:text-mint-dark font-body uppercase tracking-wider">
                  {hub.actionText}
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. EXPERIENCE HIGHLIGHTS */}
      <div className="bg-surface border-y border-border py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          <div className="space-y-2 max-w-md mx-auto">
            <SectionLabel>The Pearlhaus Standard</SectionLabel>
            <h3 className="font-display font-light text-navy text-2xl md:text-4xl">
              Elevating the Dental Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left font-body">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-white border border-border rounded-xl p-6 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-lg bg-mint-pale flex items-center justify-center text-mint">
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-navy text-sm">{item.title}</h4>
                  <p className="text-xs font-light text-slate leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. HELP SECTION */}
      <div className="px-6 md:px-16 py-16 text-center bg-white max-w-4xl mx-auto space-y-6">
        <HelpCircle className="w-10 h-10 text-mint mx-auto" />
        <div className="space-y-2">
          <h3 className="font-display font-semibold text-navy text-2xl">
            Need Personal Assistance?
          </h3>
          <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
            Our concierge team is available to help answer questions, check health insurance details, or book your visit.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 font-body">
          <a
            href="tel:+61290001420"
            className="w-full sm:w-auto text-center border border-border bg-white text-navy font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-md hover:bg-surface transition-colors duration-200"
          >
            Call +61 2 9000 1420
          </a>
          <Button onClick={() => navigate('/contact')}>
            Contact Online
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PatientInfo;
