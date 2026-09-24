import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock, CheckCircle2, Crown, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EditorialLabel from '../components/EditorialLabel';

export default function BookCall() {
  const [searchParams] = useSearchParams();
  const preselectedPackage = searchParams.get('package');

  // Budget Tiers
  const budgetTiers = [
    { id: 'tier-1', title: 'Tier I', range: '₹30k – ₹50k', desc: 'Single Reel Sprint / Product Launch' },
    { id: 'tier-2', title: 'Tier II', range: '₹50k – ₹1L', desc: 'Commercial Shoot & 12 Reels Batch' },
    { id: 'tier-3', title: 'Tier III', range: '₹1L – ₹3L', desc: 'Royal 360° Monthly Retainer' },
    { id: 'enterprise', title: 'Enterprise', range: '₹3L+', desc: 'Bespoke Multi-City Campaign' },
  ];

  // Dynamic Date Generator
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
      const monthDay = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      dates.push({
        id: d.toISOString().split('T')[0],
        day: dayName,
        dateStr: monthDay,
        full: d
      });
    }
    return dates;
  };

  const availableDates = generateDates();

  const timeSlots = [
    '11:00 AM',
    '02:30 PM',
    '05:00 PM',
    '07:30 PM'
  ];

  // Form States
  const [selectedTier, setSelectedTier] = useState('tier-2');
  const [selectedDate, setSelectedDate] = useState(availableDates[0].id);
  const [selectedTime, setSelectedTime] = useState('02:30 PM');
  
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate server response
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const currentSelectedDateObj = availableDates.find(d => d.id === selectedDate);
  const currentSelectedTierObj = budgetTiers.find(t => t.id === selectedTier);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* HEADER */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <EditorialLabel text="Private Concierge Booking" />
        <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-[#141419] tracking-tight">
          Ignite Your <span className="text-[#C5902B]">Brand</span>
        </h1>
        <p className="text-sm sm:text-base text-[#767267] font-sans leading-relaxed">
          Schedule a 1-on-1 strategy call with Digital Darbar’s executive creative team. Select your campaign budget, date, and preferred time slot.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="booking-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="bg-[#FFFFFF] border-2 border-[#E7E1D4] rounded-sm p-6 sm:p-10 shadow-xl space-y-10"
          >
            
            {/* STEP 1: BUDGET SELECTION */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#E7E1D4] pb-3">
                <span className="w-6 h-6 rounded-full bg-[#C5902B] text-white font-mono text-xs flex items-center justify-center font-bold">1</span>
                <h3 className="font-syne text-xl font-bold text-[#141419]">Select Estimated Budget Tier</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {budgetTiers.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`p-4 rounded-sm border cursor-pointer transition-all duration-300 space-y-1 ${
                        isSelected
                          ? 'bg-[#141419] text-[#FBF9F5] border-[#C5902B] shadow-md ring-2 ring-[#C5902B]'
                          : 'bg-[#FBF9F5] text-[#141419] border-[#E7E1D4] hover:border-[#C5902B]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-mono font-bold uppercase ${isSelected ? 'text-[#C5902B]' : 'text-[#767267]'}`}>
                          {tier.title}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C5902B]" />}
                      </div>
                      <div className="font-syne text-xl font-bold">
                        {tier.range}
                      </div>
                      <p className={`text-[11px] font-sans ${isSelected ? 'text-gray-300' : 'text-[#767267]'}`}>
                        {tier.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 2 & 3: DATE & TIME SELECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* DATE SELECTOR */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#E7E1D4] pb-3">
                  <span className="w-6 h-6 rounded-full bg-[#C5902B] text-white font-mono text-xs flex items-center justify-center font-bold">2</span>
                  <h3 className="font-syne text-xl font-bold text-[#141419]">Select Strategy Date</h3>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {availableDates.map((d) => {
                    const isSelected = selectedDate === d.id;
                    return (
                      <div
                        key={d.id}
                        onClick={() => setSelectedDate(d.id)}
                        className={`p-3 rounded-sm border text-center cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#C5902B] text-white border-[#C5902B] font-bold shadow-md'
                            : 'bg-[#FBF9F5] border-[#E7E1D4] text-[#141419] hover:border-[#C5902B]'
                        }`}
                      >
                        <span className="block text-[11px] font-mono uppercase">{d.day}</span>
                        <span className="block font-syne text-sm font-bold mt-1">{d.dateStr}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* TIME SELECTOR */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#E7E1D4] pb-3">
                  <span className="w-6 h-6 rounded-full bg-[#C5902B] text-white font-mono text-xs flex items-center justify-center font-bold">3</span>
                  <h3 className="font-syne text-xl font-bold text-[#141419]">Select Time Slot (IST)</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((t) => {
                    const isSelected = selectedTime === t;
                    return (
                      <div
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`p-3 rounded-sm border text-center cursor-pointer transition-all flex items-center justify-center gap-2 ${
                          isSelected
                            ? 'bg-[#141419] text-[#C5902B] border-[#C5902B] font-bold shadow-md'
                            : 'bg-[#FBF9F5] border-[#E7E1D4] text-[#141419] hover:border-[#C5902B]'
                        }`}
                      >
                        <Clock className="w-4 h-4" />
                        <span className="font-mono text-xs">{t}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* STEP 4: CONTACT & BRAND DETAILS */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 border-b border-[#E7E1D4] pb-3">
                <span className="w-6 h-6 rounded-full bg-[#C5902B] text-white font-mono text-xs flex items-center justify-center font-bold">4</span>
                <h3 className="font-syne text-xl font-bold text-[#141419]">Brand & Contact Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#141419] mb-1 font-bold">
                    Brand / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zaveri Fine Jewels"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E7E1D4] rounded-sm text-sm focus:outline-none focus:border-[#C5902B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#141419] mb-1 font-bold">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singhania"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E7E1D4] rounded-sm text-sm focus:outline-none focus:border-[#C5902B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#141419] mb-1 font-bold">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@singhaniacouture.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E7E1D4] rounded-sm text-sm focus:outline-none focus:border-[#C5902B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#141419] mb-1 font-bold">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E7E1D4] rounded-sm text-sm focus:outline-none focus:border-[#C5902B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#141419] mb-1 font-bold">
                  Campaign Goals / Additional Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your upcoming launch, timeline, or preferred shoot location..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E7E1D4] rounded-sm text-sm focus:outline-none focus:border-[#C5902B]"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#141419] hover:bg-[#C5902B] text-white font-mono text-xs tracking-widest uppercase font-bold rounded-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? (
                  <span>Securing Strategy Slot...</span>
                ) : (
                  <>
                    <span>Confirm Strategy Session</span>
                    <ArrowRight className="w-4 h-4 text-[#C5902B]" />
                  </>
                )}
              </button>
            </div>

          </motion.form>
        ) : (
          <motion.div
            key="booking-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#141419] text-white border-2 border-[#C5902B] rounded-sm p-8 sm:p-14 text-center space-y-6 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-[#C5902B] text-white mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <EditorialLabel text="Session Reserved" light />

            <h2 className="font-syne text-3xl sm:text-4xl font-bold">
              Strategy Session Confirmed!
            </h2>

            <p className="text-gray-300 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Thank you, <span className="text-[#C5902B] font-bold">{formData.contactName || 'Valued Partner'}</span>. Our senior executive creative director will connect with <span className="text-white font-bold">{formData.brandName || 'your brand'}</span> on the selected slot.
            </p>

            <div className="p-6 bg-[#282830] border border-[#C5902B]/40 rounded max-w-md mx-auto space-y-2 text-left text-xs font-mono">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Budget Tier:</span>
                <span className="text-[#C5902B] font-bold">{currentSelectedTierObj?.range}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Scheduled Date:</span>
                <span className="text-white font-bold">{currentSelectedDateObj?.day}, {currentSelectedDateObj?.dateStr}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time Slot:</span>
                <span className="text-white font-bold">{selectedTime} IST</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ brandName: '', contactName: '', email: '', phone: '', website: '', notes: '' });
                }}
                className="px-6 py-3 bg-[#282830] hover:bg-[#C5902B] text-white font-mono text-xs tracking-widest uppercase rounded transition-colors"
              >
                Book Another Session
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
