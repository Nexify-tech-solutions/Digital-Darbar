import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`border rounded-sm transition-all duration-300 ${
              isOpen 
                ? 'bg-[#FFFFFF] border-[#C5902B] shadow-md' 
                : 'bg-[#F5F2EB]/60 border-[#E7E1D4] hover:border-[#C5902B]/60'
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className={`font-syne text-lg font-bold transition-colors ${isOpen ? 'text-[#C5902B]' : 'text-[#141419]'}`}>
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                isOpen ? 'bg-[#C5902B] text-white rotate-180' : 'bg-[#E7E1D4] text-[#141419]'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 text-sm text-[#767267] font-sans leading-relaxed border-t border-[#E7E1D4]/40 mt-1 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
