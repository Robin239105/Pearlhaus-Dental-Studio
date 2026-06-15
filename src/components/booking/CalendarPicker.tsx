import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import type { TeamMember } from '../../types';
import { cn } from '../../lib/utils';

interface CalendarPickerProps {
  selectedDoctor: TeamMember | null;
  selectedDate: Date | undefined;
  selectedTime: string;
  onSelectDate: (date: Date | undefined) => void;
  onSelectTime: (time: string) => void;
}

export const CalendarPicker: React.FC<CalendarPickerProps> = ({
  selectedDoctor,
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}) => {
  // Available times based on whether it is Saturday
  const weekdayTimes = [
    '8:30 AM', '9:30 AM', '10:30 AM', '11:30 AM',
    '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'
  ];

  const saturdayTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  // Disable past days and Sundays
  const disabledDays = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Disable past days
    if (date < today) return true;

    // Disable Sundays (Day 0)
    const day = date.getDay();
    if (day === 0) return true;

    // If a doctor is selected, check if they are available on this day
    if (selectedDoctor) {
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDayName = dayNames[day];
      return !selectedDoctor.availableDays.includes(currentDayName);
    }

    return false;
  };

  const getTimeSlots = () => {
    if (!selectedDate) return [];
    const day = selectedDate.getDay();
    if (day === 6) return saturdayTimes; // Saturday
    return weekdayTimes;
  };

  const timeSlots = getTimeSlots();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-navy font-body mb-2">
          Select Date & Time
        </h3>
        <p className="text-xs text-slate font-body">
          {selectedDoctor
            ? `Choose a date when ${selectedDoctor.name} is available, then pick an appointment slot.`
            : 'Choose a date and select a time slot.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start bg-white p-4 md:p-6 rounded-xl border border-border">
        {/* Calendar Column */}
        <div className="flex flex-col items-center border-b lg:border-b-0 lg:border-r border-border pb-6 lg:pb-0 lg:pr-6">
          <div className="flex items-center space-x-2 text-navy font-body font-bold text-sm mb-4">
            <CalendarIcon className="w-4 h-4 text-mint" />
            <span>Select Date</span>
          </div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              onSelectDate(date);
              onSelectTime(''); // Reset time when date changes
            }}
            disabled={disabledDays}
            className="border rounded-xl p-3 bg-off-white"
          />
        </div>

        {/* Time Slots Column */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center space-x-2 text-navy font-body font-bold text-sm mb-4">
              <Clock className="w-4 h-4 text-mint" />
              <span>Available Times</span>
            </div>

            {selectedDate ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[280px] overflow-y-auto pr-1">
                {timeSlots.map((time) => {
                  const isSelected = selectedTime === time;

                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => onSelectTime(time)}
                      className={cn(
                        'py-2 px-3 text-xs font-semibold font-body text-center rounded-lg border transition-all duration-300',
                        isSelected
                          ? 'bg-mint text-white border-mint shadow shadow-mint/20'
                          : 'bg-white text-navy border-border hover:border-mint hover:bg-mint-pale/10'
                      )}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-border rounded-xl bg-surface/50">
                <CalendarIcon className="w-8 h-8 text-muted mb-2 animate-bounce" />
                <p className="text-xs font-medium text-slate font-body">
                  Please select a date on the calendar first
                </p>
              </div>
            )}
          </div>

          {selectedDate && selectedTime && (
            <div className="mt-6 p-4 bg-mint-pale rounded-lg border border-mint/10 text-xs font-medium text-mint-dark font-body flex items-center justify-between">
              <span>Selected Appointment Slot:</span>
              <span className="font-bold">
                {selectedDate.toLocaleDateString('en-AU', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}{' '}
                at {selectedTime}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPicker;
