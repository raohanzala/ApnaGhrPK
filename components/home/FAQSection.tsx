"use client";

import { FAQS } from '@/app/data';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react'

export default function FAQSection() {
    const [activeFaq, setActiveFaq] = useState<string | null>(null);

  return (
    <section className="bg-white py-24 border-y border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Answers & Guides</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#B8892D] mx-auto rounded-full mt-2"></div>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-[#F8F7F4] rounded-xl border border-[#E5E7EB] overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-[#1F2937]">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#B8892D] transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#6B7280] border-t border-slate-200/50 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}
