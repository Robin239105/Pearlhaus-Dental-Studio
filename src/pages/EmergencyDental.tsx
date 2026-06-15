import React from 'react';
import { ShieldAlert, AlertTriangle, Phone, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import EmergencyForm from '../components/forms/EmergencyForm';

export const EmergencyDental: React.FC = () => {
  const commonEmergencies = [
    { name: 'Severe Toothache Relief', cost: 'From $150', note: 'Consultation & diagnostics' },
    { name: 'Emergency Tooth Extraction', cost: 'From $250', note: 'Under local anesthetic' },
    { name: 'Same-day Fillings/Repairs', cost: 'From $180', note: 'Composite tooth-colored' },
    { name: 'Modern Root Canal (Stage 1)', cost: 'From $350', note: 'Relieves nerve infection' },
  ];

  return (
    <PageWrapper>
      {/* 1. URGENT HERO HEADER (Crimson theme) */}
      <div className="w-full bg-gradient-to-br from-red-950 via-slate-900 to-navy text-white py-16 px-6 md:px-16 text-left relative overflow-hidden border-b-4 border-error">
        {/* Background graphic */}
        <div className="absolute right-[-10%] top-[-10%] w-[350px] h-[350px] bg-error/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-6 relative z-10 font-body">
          <Breadcrumb
            items={[{ label: 'Emergency care' }]}
            className="text-white/60 [&_a]:text-white/60 [&_span]:text-white [&_svg]:text-white/40"
          />
          
          <div className="space-y-4 max-w-2xl">
            <span className="bg-error text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center space-x-1.5 shadow">
              <ShieldAlert className="w-3.5 h-3.5 mr-1" />
              <span>Same-Day Emergency Dental</span>
            </span>
            <h1 className="font-display font-light text-white text-3xl md:text-5xl leading-tight">
              In Pain? <strong className="font-semibold text-error">Call Us Immediately.</strong>
            </h1>
            <p className="font-body font-light text-xs md:text-sm text-slate-300 leading-relaxed pt-1">
              Dental emergencies don't wait. Pearlhaus provides priority, same-day emergency appointments for quick pain relief, dental trauma, and infections.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="tel:+61290001421"
              className="px-8 py-4 bg-error text-white font-body font-bold text-sm uppercase tracking-wider rounded-md hover:bg-error/90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-error/20"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Emergency Line: +61 2 9000 1421</span>
            </a>
            <div className="text-xs font-semibold text-slate-300 font-body flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4 text-error" />
              <span>24hr Hotline • Available 6 Days In-Clinic</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN GRID: CHECKLIST & FORM */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Symptoms and Guides (7 cols) */}
        <div className="lg:col-span-7 text-left space-y-10 font-body">
          
          {/* What Counts Section */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-navy text-xl md:text-2xl flex items-center">
              <AlertTriangle className="w-5 h-5 text-error mr-2 shrink-0" />
              <span>What Counts as a Dental Emergency?</span>
            </h3>
            <p className="text-xs text-slate font-light leading-relaxed">
              If you are experiencing any of the following symptoms, please contact us immediately to prevent permanent damage or serious infections:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {[
                'Severe, throbbing toothaches that keep you awake',
                'Swelling in the face, gums, check, or jawline',
                'A tooth that has been fully knocked out (avulsion)',
                'Persistent bleeding in the mouth after injury',
                'A fractured, broken, or severely chipped tooth',
                'A lost filling, crown, or bridge causing pain'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate">
                  <span className="text-error font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* First Aid Instructions */}
          <div className="space-y-4 border-t border-border pt-8">
            <h3 className="font-display font-semibold text-navy text-xl md:text-2xl">
              What to Do While Waiting
            </h3>
            <div className="space-y-4 text-xs text-slate leading-relaxed font-light">
              <div className="bg-surface p-4 rounded-xl border border-border">
                <h4 className="font-bold text-navy text-xs mb-1.5">For a Knocked-Out Tooth</h4>
                <p>Locate the tooth, handling it only by the crown (chewing surface). Do not scrub or clean the root. If possible, gently place the tooth back in its socket. If not, submerge it in a glass of cold milk or keep it inside your cheek, and visit our clinic within 60 minutes for a chance of re-implantation.</p>
              </div>
              <div className="bg-surface p-4 rounded-xl border border-border">
                <h4 className="font-bold text-navy text-xs mb-1.5">For Severe Swelling</h4>
                <p>Facial swelling is often a sign of a serious dental abscess. Apply a cold compress to the outside of your cheek to reduce inflammation. Take standard ibuprofen (advising against aspirin as it can thin blood and increase bleeding) and call our emergency line immediately.</p>
              </div>
              <div className="bg-surface p-4 rounded-xl border border-border">
                <h4 className="font-bold text-navy text-xs mb-1.5">For a Broken Tooth</h4>
                <p>Rinse your mouth with warm salt water to clean the area and prevent infection. Apply pressure with gauze if there is minor bleeding, and take pain relief. Collect any broken fragments and bring them with you to your appointment.</p>
              </div>
            </div>
          </div>

          {/* Estimates Table */}
          <div className="space-y-4 border-t border-border pt-8">
            <h3 className="font-display font-semibold text-navy text-xl md:text-2xl">
              Common Emergency Treatment Estimations
            </h3>
            <div className="overflow-hidden border border-border rounded-xl">
              <table className="w-full text-left font-body text-xs">
                <thead className="bg-surface border-b border-border font-bold text-navy">
                  <tr>
                    <th className="p-3">Emergency Service</th>
                    <th className="p-3">Estimated Cost</th>
                    <th className="p-3">Inclusions</th>
                  </tr>
                </thead>
                <tbody className="text-slate font-light divide-y divide-border">
                  {commonEmergencies.map((item, idx) => (
                    <tr key={idx} className="hover:bg-surface/50">
                      <td className="p-3 font-semibold text-navy">{item.name}</td>
                      <td className="p-3 font-bold text-error">{item.cost}</td>
                      <td className="p-3">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Side: Emergency Form (5 cols) */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-6">
            <EmergencyForm />
            
            {/* Location & Directions */}
            <div className="bg-surface p-5 rounded-2xl border border-border text-left font-body text-xs text-slate space-y-3">
              <h4 className="font-bold text-navy text-xs uppercase tracking-wide">Clinic Location</h4>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-error mr-2 shrink-0 mt-0.5" />
                <span>142 Harbour Street, Sydney NSW 2000 (Close to Town Hall Station)</span>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-4 h-4 text-error mr-2 shrink-0 mt-0.5" />
                <span>Parking is available at the Harbour Street secure parking station. We offer parking validation.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default EmergencyDental;
