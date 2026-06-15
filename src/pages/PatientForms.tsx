import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Heart, Activity, CheckCircle, ShieldCheck, Download, AlertCircle } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import { NewPatientForm } from '../components/forms/NewPatientForm';
import { MedicalHistory } from '../components/forms/MedicalHistory';

export const PatientForms: React.FC = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<'none' | 'new-patient' | 'medical-history'>('none');

  const formsList = [
    {
      id: 'new-patient' as const,
      title: 'New Patient Registration Form',
      description: 'Collects your contact information, emergency details, insurance membership, and general preferences.',
      time: 'Requires ~3-4 minutes',
      icon: <FileText className="w-6 h-6 text-mint" />,
      actionText: 'Launch Online Form',
    },
    {
      id: 'medical-history' as const,
      title: 'Medical History Questionnaire',
      description: 'A comprehensive medical checklist covering cardiovascular health, systemic conditions, allergies, and lifestyle factors.',
      time: 'Requires ~2-3 minutes',
      icon: <Activity className="w-6 h-6 text-mint" />,
      actionText: 'Launch Medical History',
    },
  ];

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Patient Info', path: '/patient-info' }, { label: 'Online Forms' }]} />
          <div className="space-y-2 max-w-2xl text-left">
            <SectionLabel>Digital Check-In</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Online Patient{' '}
              <span className="block font-semibold">Intake & Health Forms.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Save time and relax upon arrival. Complete your clinical registration and medical declarations securely from home. All data is processed using industry-standard health privacy protocols.
            </p>
          </div>
        </div>
      </div>

      {/* 2. CARD SELECTION PANEL */}
      <div className="px-6 md:px-16 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formsList.map((form) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md hover:border-mint/60 transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-mint-pale flex items-center justify-center text-mint">
                  {form.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-navy text-lg leading-tight">
                    {form.title}
                  </h3>
                  <p className="font-body font-light text-xs text-slate leading-relaxed">
                    {form.description}
                  </p>
                  <div className="flex items-center text-[10px] font-semibold text-mint-dark font-body bg-mint-pale/40 px-2.5 py-1 rounded inline-block">
                    ⏱ {form.time}
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button fullWidth onClick={() => setActiveModal(form.id)}>
                  {form.actionText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. PRINTABLE / ALTERNATIVE DOWNLOADS */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
          <div className="space-y-2">
            <SectionLabel>Traditional Check-In</SectionLabel>
            <h3 className="font-display font-light text-navy text-2xl md:text-3xl">
              Prefer Printable PDF Forms?
            </h3>
            <p className="font-body font-light text-xs text-slate max-w-md mx-auto leading-relaxed">
              If you prefer to fill out your forms by hand, you can download our printable PDF versions. Please print, sign, and bring them with you to your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto font-body text-left">
            <div className="bg-white border border-border rounded-xl p-5 flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <h4 className="font-bold text-navy text-xs uppercase tracking-wider">Registration Form PDF</h4>
                <p className="text-[10px] font-light text-slate">Printable PDF - 1.2 MB</p>
              </div>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('In a live environment, this downloads the registration PDF.'); }}
                className="p-2.5 rounded-lg bg-surface border border-border hover:bg-mint-pale text-slate hover:text-mint transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white border border-border rounded-xl p-5 flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <h4 className="font-bold text-navy text-xs uppercase tracking-wider">Medical History PDF</h4>
                <p className="text-[10px] font-light text-slate">Printable PDF - 890 KB</p>
              </div>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('In a live environment, this downloads the medical history PDF.'); }}
                className="p-2.5 rounded-lg bg-surface border border-border hover:bg-mint-pale text-slate hover:text-mint transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CLINICAL SECURITY DECLARATION */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="w-16 h-16 rounded-2xl bg-mint-pale flex items-center justify-center text-mint">
            <ShieldCheck className="w-8 h-8" />
          </div>
        </div>
        <div className="md:col-span-8 space-y-4">
          <h4 className="font-display font-bold text-navy text-xl">
            Privacy & HIPAA Compliance Guarantee
          </h4>
          <p className="font-body font-light text-xs text-slate leading-relaxed">
            Your privacy is of the utmost importance to us. Pearlhaus utilizes end-to-end encrypted databases (SSL/TLS) to store and transmit your health registration and clinical answers. None of your medical history or contact details are shared with unapproved third parties.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 font-body text-[10px] text-slate font-bold uppercase tracking-wider">
            <span className="flex items-center space-x-1.5 bg-surface px-2.5 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-mint" />
              <span>SSL SECURE TRADING</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-surface px-2.5 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-mint" />
              <span>HIPAA ALIGNED PRIVACY</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-surface px-2.5 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-mint" />
              <span>ENCRYPTED DATABASES</span>
            </span>
          </div>
        </div>
      </div>

      {/* MODAL MOUNTING */}
      <Modal
        isOpen={activeModal === 'new-patient'}
        onClose={() => setActiveModal('none')}
        title="New Patient Registration"
        size="xl"
      >
        <NewPatientForm />
      </Modal>

      <Modal
        isOpen={activeModal === 'medical-history'}
        onClose={() => setActiveModal('none')}
        title="Medical History Questionnaire"
        size="xl"
      >
        <MedicalHistory />
      </Modal>
    </PageWrapper>
  );
};

export default PatientForms;
