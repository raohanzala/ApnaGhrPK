import { FAQItemProps } from '@/app/types'
import { ChevronDown } from 'lucide-react'

export default function FAQItem({faq, isOpen, onToggle}: FAQItemProps) {
    return (
        <div key={faq.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300">
            <button
                onClick={onToggle}
                className="w-full py-4.5 px-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors cursor-pointer"
            >
                <span className="font-serif text-sm font-bold text-[#1F2937] pr-4">{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-[#B8892D] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="px-6 pb-5 pt-1 text-xs text-[#6B7280] leading-relaxed border-t border-slate-100">
                    {faq.answer}
                </div>
            )}
        </div>
    )
}
