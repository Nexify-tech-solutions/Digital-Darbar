import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus, ArrowUpRight, Sparkles, HelpCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PackageCard from '../components/PackageCard';
import FAQAccordion from '../components/FAQAccordion';
import EditorialLabel from '../components/EditorialLabel';
import { packages, serviceAddOns } from '../data/services';
import { faqs } from '../data/faq';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'retainer', 'one-off'
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const toggleAddOn = (id) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter(item => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const filteredPackages = packages.filter(pkg => {
    if (activeCategory === 'retainer') return pkg.type === 'retainer';
    if (activeCategory === 'one-off') return pkg.type === 'one-off';
    return true;
  });

  return (
    <div className="space-y-24 md:space-y-36 pb-20 pt-8">
      
      {/* HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <EditorialLabel text="Pricing & Engagement Models" />
        <h1 className="font-syne text-4xl sm:text-6xl font-extrabold text-[#141419] tracking-tight">
          Agency Services & <span className="text-[#C5902B]">Packages</span>
        </h1>
        <p className="text-base sm:text-lg text-[#767267] font-sans max-w-2xl mx-auto leading-relaxed">
          Transparent, high-value visual production packages and retainer models designed for luxury growth.
        </p>

        {/* PACKAGE TOGGLE SWITCH */}
        <div className="pt-6 flex items-center justify-center">
          <div className="inline-flex items-center p-1.5 bg-[#F5F2EB] border border-[#E7E1D4] rounded-full gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 text-xs font-mono tracking-widest uppercase rounded-full transition-all ${
                activeCategory === 'all' 
                  ? 'bg-[#141419] text-white shadow-sm font-bold' 
                  : 'text-[#767267] hover:text-[#141419]'
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setActiveCategory('retainer')}
              className={`px-5 py-2 text-xs font-mono tracking-widest uppercase rounded-full transition-all ${
                activeCategory === 'retainer' 
                  ? 'bg-[#141419] text-white shadow-sm font-bold' 
                  : 'text-[#767267] hover:text-[#141419]'
              }`}
            >
              Monthly Retainers
            </button>
            <button
              onClick={() => setActiveCategory('one-off')}
              className={`px-5 py-2 text-xs font-mono tracking-widest uppercase rounded-full transition-all ${
                activeCategory === 'one-off' 
                  ? 'bg-[#141419] text-white shadow-sm font-bold' 
                  : 'text-[#767267] hover:text-[#141419]'
              }`}
            >
              One-Off Shoots
            </button>
          </div>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* SERVICE ADD-ONS INTERACTIVE BUILDER */}
      <section className="bg-[#F5F2EB] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E7E1D4]">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <SectionHeader
            kicker="Custom Production Enhancements"
            title="Service Add-Ons"
            subtitle="Tailor your campaign with specialized luxury add-ons. Click to select and customize your project scope."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceAddOns.map((addon) => {
              const isSelected = selectedAddOns.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`p-6 rounded-sm border cursor-pointer transition-all duration-300 flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#FFFFFF] border-[#C5902B] shadow-md ring-1 ring-[#C5902B]'
                      : 'bg-[#FBF9F5] border-[#E7E1D4] hover:border-[#C5902B]/60'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h4 className="font-syne text-lg font-bold text-[#141419]">{addon.title}</h4>
                      <span className="font-mono text-xs font-bold text-[#C5902B] bg-[#C5902B]/10 px-2 py-0.5 rounded">
                        {addon.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#767267] font-sans leading-relaxed">
                      {addon.description}
                    </p>
                  </div>

                  <button
                    aria-label={`Toggle ${addon.title}`}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#C5902B] text-white'
                        : 'bg-[#E7E1D4] text-[#141419] hover:bg-[#C5902B] hover:text-white'
                    }`}
                  >
                    {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Add-ons summary bar */}
          {selectedAddOns.length > 0 && (
            <div className="p-6 bg-[#141419] text-white rounded-sm border border-[#C5902B] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#C5902B] uppercase block">Selected Add-Ons ({selectedAddOns.length})</span>
                <p className="text-sm font-sans text-gray-300">
                  Ready to include these enhancements in your proposal.
                </p>
              </div>
              <Link
                to={`/book-call?addons=${selectedAddOns.join(',')}`}
                className="px-6 py-3 bg-[#C5902B] text-white font-mono text-xs tracking-widest uppercase font-bold rounded hover:bg-[#B37D1D] transition-colors"
              >
                Proceed with Selected Add-Ons
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <SectionHeader
            kicker="Clear Answers"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our shoot workflow, model casting, turnaround, and retainer models."
            centered
          />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* BESPOKE CAMPAIGN CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FFFFFF] border-2 border-[#E7E1D4] rounded-sm p-8 sm:p-12 text-center space-y-6">
          <EditorialLabel text="Custom Agency Proposals" />
          <h2 className="font-syne text-3xl sm:text-4xl font-bold text-[#141419]">
            Need a Bespoke Multi-City Campaign?
          </h2>
          <p className="text-sm sm:text-base text-[#767267] font-sans max-w-xl mx-auto">
            Our creative directors will construct a tailored production package aligned with your brand launch timelines.
          </p>
          <div className="pt-2">
            <Link
              to="/book-call"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#141419] text-white font-mono text-xs tracking-widest uppercase font-bold rounded-sm hover:bg-[#C5902B] transition-colors"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5902B]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
