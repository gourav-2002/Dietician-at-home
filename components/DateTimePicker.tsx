
'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ChevronLeft, ChevronRight, X, Clock } from 'lucide-react';

interface DateTimePickerProps {
    value: string;
    onChange: (value: string) => void;
}

type Step = 'date' | 'time';

const DateTimePicker: React.FC<DateTimePickerProps> = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<Step>('date');
    const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
        // Initialize with tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        return tomorrow;
    });
    const [viewDate, setViewDate] = useState(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    });
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const modalRef = useRef<HTMLDivElement>(null);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    useEffect(() => {
        // Close on click outside
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(viewDate);
        const firstDay = getFirstDayOfMonth(viewDate);
        const days = [];

        // Empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        // Days of current month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), i));
        }

        return days;
    };

    const handlePrevMonth = () => {
        // Prevent going back before current month?
        // Req: "Month/Year navigation ... Show current month calendar"
        // Just simple nav is fine.
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const isDateDisabled = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const compareDate = new Date(date);
        compareDate.setHours(0, 0, 0, 0);
        return compareDate <= today;
    };

    const isTomorrow = (date: Date) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        return date.getDate() === tomorrow.getDate() &&
            date.getMonth() === tomorrow.getMonth() &&
            date.getFullYear() === tomorrow.getFullYear();
    };

    const isSameDate = (d1: Date | null, d2: Date | null) => {
        if (!d1 || !d2) return false;
        return d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear();
    };

    const handleDateSelect = (date: Date) => {
        if (isDateDisabled(date)) return;
        setSelectedDate(date);
    };

    // Time Logic
    const generateTimeSlots = () => {
        const slots = [];
        // 10:00 AM to 7:00 PM
        for (let hour = 10; hour <= 19; hour++) {
            const isPm = hour >= 12;
            const displayHour = hour > 12 ? hour - 12 : hour;
            const amPm = isPm ? 'PM' : 'AM';

            // Slot 1: hour:00
            slots.push(`${displayHour === 0 ? 12 : displayHour}:00 ${amPm}`);

            // Slot 2: hour:30 (except maybe 7 PM? Req says 7:00 PM is end of range listing, 
            // but explicitly lists "06:30 PM, 07:00 PM" as intervals. So 7:00 is okay. 
            // If loop goes to 19 (7PM), we add 7:00. Do we add 7:30? The list ends at 7:00 PM.)
            if (hour < 19) {
                slots.push(`${displayHour === 0 ? 12 : displayHour}:30 ${amPm}`);
            }
        }
        return slots;
    };

    const handleTimeSelect = (timeSlot: string) => {
        if (!selectedDate) return;

        setSelectedTime(timeSlot);

        // Format: "January 20, 2026 - 10:30 AM"
        const monthName = months[selectedDate.getMonth()];
        const day = selectedDate.getDate();
        const year = selectedDate.getFullYear();

        const formattedDate = `${monthName} ${day}, ${year}`;
        const finalValue = `${formattedDate} - ${timeSlot}`;

        onChange(finalValue);
        setIsOpen(false);
        setStep('date'); // Reset for next time
    };

    const formattedSelectedDate = selectedDate
        ? `${months[selectedDate.getMonth()]} ${selectedDate.getDate()}th, ${selectedDate.getFullYear()}`
        : "";

    return (
        <div className="relative w-full">
            {/* Input Trigger */}
            <div
                className="relative cursor-pointer group"
                onClick={() => setIsOpen(true)}
            >
                <input
                    type="text"
                    readOnly
                    value={value}
                    placeholder="Select Preferred Date & Time"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-all hover:border-gray-300 cursor-pointer bg-white text-gray-800"
                />
                <Calendar className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#4CAF50] transition-colors w-5 h-5 pointer-events-none" />
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        ref={modalRef}
                        className="bg-white rounded-xl shadow-2xl w-full max-w-[600px] overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
                    >
                        {/* Header / Close */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800">
                                {step === 'date' ? 'Select Date' : 'Pick a Time'}
                            </h3>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-100 h-1">
                            <div
                                className={`bg-[#4CAF50] h-1 transition-all duration-300 ${step === 'date' ? 'w-1/2' : 'w-full'}`}
                            ></div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 overflow-y-auto custom-scrollbar">

                            {/* STEP 1: DATE SELECTION */}
                            {step === 'date' && (
                                <div className="space-y-6 animate-in slide-in-from-left-4 duration-300">
                                    {/* Calendar Navigation */}
                                    <div className="flex justify-between items-center mb-4">
                                        <button
                                            type="button"
                                            onClick={handlePrevMonth}
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                                        </button>
                                        <span className="text-lg font-bold text-gray-800">
                                            {months[viewDate.getMonth()]} {viewDate.getFullYear()}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={handleNextMonth}
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <ChevronRight className="w-6 h-6 text-gray-600" />
                                        </button>
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="grid grid-cols-7 gap-2 mb-2">
                                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                            <div key={day} className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider py-1">
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-7 gap-2">
                                        {generateCalendarDays().map((date, idx) => {
                                            if (!date) return <div key={`empty-${idx}`} className="p-2"></div>;

                                            const disabled = isDateDisabled(date);
                                            const isTomorrowDate = isTomorrow(date);
                                            const isSelected = isSameDate(date, selectedDate);
                                            // const isToday = isSameDate(date, new Date()); // Today is disabled anyway

                                            return (
                                                <button
                                                    type="button"
                                                    key={date.toISOString()}
                                                    onClick={() => handleDateSelect(date)}
                                                    disabled={disabled}
                                                    className={`
                            py-3 rounded-lg text-sm font-medium transition-all duration-200 relative
                            ${disabled ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-[#E8F5E9] text-gray-700'}
                            ${isSelected ? 'bg-[#4CAF50] text-white hover:bg-[#43A047] shadow-md transform scale-105' : ''}
                            ${!isSelected && isTomorrowDate && !disabled ? 'bg-[#E8F5E9] text-[#4CAF50] font-bold border border-[#4CAF50]/30' : ''}
                          `}
                                                >
                                                    {date.getDate()}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Next Button */}
                                    <div className="mt-6">
                                        <button
                                            type="button"
                                            onClick={() => setStep('time')}
                                            disabled={!selectedDate}
                                            className={`
                        w-full py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2
                        ${selectedDate
                                                    ? 'bg-[#4CAF50] text-white shadow-lg shadow-green-500/30 hover:bg-[#43A047] active:scale-[0.98]'
                                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
                      `}
                                        >
                                            Next Step <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: TIME SELECTION */}
                            {step === 'time' && (
                                <div className="space-y-6 animate-in slide-in-from-right-4 duration-300 h-full">

                                    <div className="flex items-center gap-4 mb-2">
                                        <button
                                            type="button"
                                            onClick={() => setStep('date')}
                                            className="p-2 -ml-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <div>
                                            <h4 className="text-sm text-gray-500 font-medium">Selected Date</h4>
                                            <p className="text-lg font-bold text-[#4CAF50]">{formattedSelectedDate}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {generateTimeSlots().map((slot) => {
                                            const isSelected = selectedTime === slot;
                                            return (
                                                <button
                                                    type="button"
                                                    key={slot}
                                                    onClick={() => handleTimeSelect(slot)}
                                                    className={`
                            py-3 px-4 rounded-xl border-2 text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2
                            ${isSelected
                                                            ? 'border-[#4CAF50] bg-[#4CAF50] text-white shadow-md'
                                                            : 'border-gray-100 bg-white text-gray-600 hover:border-[#4CAF50] hover:bg-[#E8F5E9]'}
                            hover:scale-[1.02] active:scale-[0.98]
                          `}
                                                >
                                                    <Clock className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#4CAF50]'}`} />
                                                    {slot}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateTimePicker;
