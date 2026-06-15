import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  steps,
}) => {
  return (
    <div className="w-full py-4">
      {/* Mobile progress summary */}
      <div className="flex justify-between items-center md:hidden mb-4 px-2">
        <span className="text-xs font-semibold text-muted font-body">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-xs font-bold text-mint font-body">
          {steps[currentStep - 1]}
        </span>
      </div>

      <div className="relative flex items-center justify-between w-full">
        {/* Progress bar line */}
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-border -translate-y-1/2 z-0" />
        <div
          className="absolute left-0 top-1/2 h-[2px] bg-mint -translate-y-1/2 transition-all duration-500 ease-out z-0"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />

        {/* Step circles */}
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <div key={index} className="relative flex flex-col items-center z-10">
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center font-body text-xs font-bold transition-all duration-500',
                  isCompleted && 'bg-mint text-white border border-mint scale-105',
                  isActive && 'bg-white text-mint border-2 border-mint shadow-md shadow-mint/20 scale-110',
                  !isCompleted && !isActive && 'bg-white text-muted border border-border'
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span>{stepNumber}</span>
                )}
              </div>
              <span
                className={cn(
                  'hidden md:block absolute top-10 text-[11px] font-semibold font-body tracking-wider uppercase whitespace-nowrap transition-colors duration-300',
                  isCompleted && 'text-slate',
                  isActive && 'text-mint font-bold',
                  !isCompleted && !isActive && 'text-muted'
                )}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
      {/* Spacer for label padding */}
      <div className="hidden md:block h-8" />
    </div>
  );
};

export default ProgressBar;
