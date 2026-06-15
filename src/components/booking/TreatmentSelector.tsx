import React, { useState } from 'react';
import { Sparkles, Shield, Activity, Hammer, Baby, Check, HelpCircle } from 'lucide-react';
import { treatments } from '../../data/treatments';
import type { Treatment } from '../../types';
import { cn } from '../../lib/utils';

interface TreatmentSelectorProps {
  selectedTreatment: Treatment | null;
  onSelect: (treatment: Treatment | null) => void;
}

export const TreatmentSelector: React.FC<TreatmentSelectorProps> = ({
  selectedTreatment,
  onSelect,
}) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = [
    { name: 'All', icon: null },
    { name: 'Cosmetic Dentistry', icon: <Sparkles className="w-3.5 h-3.5 mr-1" /> },
    { name: 'General Dentistry', icon: <Shield className="w-3.5 h-3.5 mr-1" /> },
    { name: 'Orthodontics', icon: <Activity className="w-3.5 h-3.5 mr-1" /> },
    { name: 'Dental Implants', icon: <Hammer className="w-3.5 h-3.5 mr-1" /> },
    { name: "Children's Dentistry", icon: <Baby className="w-3.5 h-3.5 mr-1" /> },
  ];

  const filteredTreatments = treatments.filter((t) => {
    if (activeTab === 'All') return true;
    return t.category === activeTab;
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-navy font-body mb-2">
          Select a Treatment
        </h3>
        <p className="text-xs text-slate font-body">
          Choose the service you would like to book. If you are unsure, you can choose a General Consultation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-border pb-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            type="button"
            onClick={() => setActiveTab(cat.name)}
            className={cn(
              'flex items-center px-4 py-2 text-xs font-semibold font-body tracking-wider uppercase rounded-full border transition-all duration-300',
              activeTab === cat.name
                ? 'bg-mint text-white border-mint shadow-md shadow-mint/15'
                : 'bg-white text-slate border-border hover:border-mint-light hover:text-mint'
            )}
          >
            {cat.icon}
            <span>{cat.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Treatments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[350px] overflow-y-auto pr-2">
        {/* Not Sure Consultation Option */}
        <div
          onClick={() => onSelect(null)}
          className={cn(
            'border rounded-xl p-4 flex items-start justify-between cursor-pointer transition-all duration-300 hover:shadow-md bg-white',
            selectedTreatment === null
              ? 'border-mint bg-mint-pale/20 shadow-md shadow-mint/5'
              : 'border-border hover:border-mint-light'
          )}
        >
          <div className="flex space-x-3">
            <div className="p-2 bg-mint-pale rounded-lg text-mint shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-body font-bold text-navy text-sm">Not Sure / General Consultation</h4>
              <p className="font-body text-xs text-slate mt-1">
                Book a comprehensive check-up or talk to a dentist to design a custom treatment plan.
              </p>
              <div className="flex space-x-4 mt-2 text-[10px] font-bold tracking-wide uppercase text-muted">
                <span>From $150</span>
                <span>•</span>
                <span>45-60 mins</span>
              </div>
            </div>
          </div>
          <div
            className={cn(
              'w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-2',
              selectedTreatment === null ? 'bg-mint border-mint text-white' : 'border-border bg-white'
            )}
          >
            {selectedTreatment === null && <Check className="w-3.5 h-3.5" />}
          </div>
        </div>

        {/* Dynamic Treatment Options */}
        {filteredTreatments.map((t) => {
          const isSelected = selectedTreatment?.id === t.id;

          return (
            <div
              key={t.id}
              onClick={() => onSelect(t)}
              className={cn(
                'border rounded-xl p-4 flex items-start justify-between cursor-pointer transition-all duration-300 hover:shadow-md bg-white',
                isSelected
                  ? 'border-mint bg-mint-pale/20 shadow-md shadow-mint/5'
                  : 'border-border hover:border-mint-light'
              )}
            >
              <div className="flex space-x-3">
                <div className="p-2 bg-mint-pale rounded-lg text-mint shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-body font-bold text-navy text-sm">{t.title}</h4>
                  <p className="font-body text-xs text-slate mt-1 line-clamp-2">
                    {t.shortDescription}
                  </p>
                  <div className="flex space-x-4 mt-2 text-[10px] font-bold tracking-wide uppercase text-muted">
                    <span>{t.price}</span>
                    <span>•</span>
                    <span>{t.duration}</span>
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  'w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-2',
                  isSelected ? 'bg-mint border-mint text-white' : 'border-border bg-white'
                )}
              >
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TreatmentSelector;
