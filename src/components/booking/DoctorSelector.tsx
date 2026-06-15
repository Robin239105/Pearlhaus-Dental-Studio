import React from 'react';
import { UserCheck, Check, Star } from 'lucide-react';
import { team } from '../../data/team';
import type { TeamMember, Treatment } from '../../types';
import { cn } from '../../lib/utils';
import Avatar from '../ui/Avatar';

interface DoctorSelectorProps {
  selectedTreatment: Treatment | null;
  selectedDoctor: TeamMember | null;
  onSelect: (doctor: TeamMember | null) => void;
}

export const DoctorSelector: React.FC<DoctorSelectorProps> = ({
  selectedTreatment,
  selectedDoctor,
  onSelect,
}) => {
  // Filter dentists who can perform this treatment. If null treatment, show all.
  const filteredDentists = team.filter((d) => {
    if (!selectedTreatment) return true;
    return d.treatments.includes(selectedTreatment.slug);
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-navy font-body mb-2">
          Select Your Dentist
        </h3>
        <p className="text-xs text-slate font-body">
          Choose a specific dentist or select "No Preference" to get the first available appointment time.
        </p>
      </div>

      {/* Grid of Doctors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[350px] overflow-y-auto pr-2">
        {/* No Preference option */}
        <div
          onClick={() => onSelect(null)}
          className={cn(
            'border rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:shadow-md bg-white',
            selectedDoctor === null
              ? 'border-mint bg-mint-pale/20 shadow-md shadow-mint/5'
              : 'border-border hover:border-mint-light'
          )}
        >
          <div className="flex items-center space-x-3.5">
            <div className="w-14 h-14 rounded-full bg-mint-pale text-mint flex items-center justify-center border border-mint/20 shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-body font-bold text-navy text-sm">No Preference / First Available</h4>
              <p className="font-body text-xs text-slate mt-0.5">
                We will match you with the dentist who best fits your scheduled time.
              </p>
            </div>
          </div>
          <div
            className={cn(
              'w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-2',
              selectedDoctor === null ? 'bg-mint border-mint text-white' : 'border-border bg-white'
            )}
          >
            {selectedDoctor === null && <Check className="w-3.5 h-3.5" />}
          </div>
        </div>

        {/* Dentists List */}
        {filteredDentists.map((d) => {
          const isSelected = selectedDoctor?.id === d.id;

          return (
            <div
              key={d.id}
              onClick={() => onSelect(d)}
              className={cn(
                'border rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:shadow-md bg-white',
                isSelected
                  ? 'border-mint bg-mint-pale/20 shadow-md shadow-mint/5'
                  : 'border-border hover:border-mint-light'
              )}
            >
              <div className="flex items-center space-x-3.5">
                <Avatar
                  src={d.image}
                  alt={d.name}
                  size="md"
                  border={isSelected}
                  className="w-14 h-14 shrink-0"
                />
                <div>
                  <h4 className="font-body font-bold text-navy text-sm">{d.name}</h4>
                  <p className="font-body text-xs text-mint font-semibold mt-0.5">{d.title}</p>
                  <div className="flex items-center space-x-1.5 mt-1 text-[10px] text-slate font-body">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{d.experience} Years Exp</span>
                    <span>•</span>
                    <span>{d.languages.join(', ')}</span>
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

export default DoctorSelector;
