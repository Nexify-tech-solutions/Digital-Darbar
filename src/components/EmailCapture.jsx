import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Sparkles, Lock, Gift } from 'lucide-react';
import TiltCard from './3d/TiltCard';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="email-section" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07070b]">
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        <TiltCard className="rounded-3xl glass-card border border-darbar-gold/40 p-8 sm:p-14 relative overflow-hidden text-center shadow-2xl">
          
          {/* Top Glow bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />
          
          <div className="max-w-2xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-darbar-gold/10 border border-darbar-gold/30 text-xs font-semibold text-darbar-gold uppercase tracking-widest mb-6">
              <Gift className="w-3.5 h-3.5" /> Early VIP Access
            </div>

            <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-white mb-4">
              Be First In Line When We <span className="text-gold-gradient">Launch</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed">
              Join our exclusive VIP guest list today to receive early access privileges, launch invitation codes, and a free <strong>$500 Digital Brand Audit</strong> upon launch.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-darbar-gold/10 border border-darbar-gold/40 text-center animate-fadeIn">
                <CheckCircle className="w-12 h-12 text-darbar-gold mx-auto mb-3" />
                <h3 className="font-cinzel font-bold text-2xl text-white mb-2">Welcome To Digital Royalty!</h3>
                <p className="text-slate-300 text-sm">
                  We've reserved your VIP invitation for <strong>{email}</strong>. Check your inbox soon for launch updates.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-darbar-gold underline hover:text-white"
                >
                  Register another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your professional email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-darbar-gold text-sm transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-4 rounded-xl bg-gold-gradient text-black font-extrabold text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Securing spot...</span>
                  ) : (
                    <>
                      Get VIP Pass <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}

            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-darbar-gold" /> 100% Privacy Guaranteed
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-darbar-gold" /> No Spam, Ever
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-darbar-gold" /> Free Strategy Audit Included
              </span>
            </div>

          </div>
        </TiltCard>

      </div>
    </section>
  );
}
