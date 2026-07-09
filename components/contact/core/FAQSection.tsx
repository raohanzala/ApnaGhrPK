import { FAQSectionProps } from '@/app/types';
import FAQItem from './FAQItem';
import { FAQS } from '@/data/faqs';

export default function FAQsSection({ activeFaqId, setActiveFaqId }: FAQSectionProps) {
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/60 mt-12 space-y-12">
            <div className="text-center space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Client Support Desk</span>
                <h2 className="font-serif text-3xl font-bold text-[#1F2937]">Frequently Asked Questions</h2>
                <div className="w-12 h-1 bg-[#B8892D] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
                {FAQS.map((faq) => {
                    const isOpen = activeFaqId === faq.id;
                    return (
                        <FAQItem faq={faq} onToggle={() => setActiveFaqId(isOpen ? null : faq.id)} isOpen={isOpen} />
                    );
                })}
            </div>
        </section>
    )
}
