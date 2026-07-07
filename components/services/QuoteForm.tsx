import { QuoteFormProps, ServiceProps } from '@/app/types'

export default function QuoteForm({activeService, handleQuoteSubmit, formSubmitted }: QuoteFormProps) {
    return (
        <div className="border border-slate-200 rounded-2xl p-6 bg-[#F8F7F4]/50">
            <h4 className="font-serif font-bold text-base text-[#1F2937] mb-2">
                Request Custom Quote for {activeService.title}
            </h4>
            <p className="text-xs text-[#6B7280] mb-4">
                Fill in your details below and an engineering manager will contact you within 2 business hours with a preliminary pricing list.
            </p>
            <form onSubmit={handleQuoteSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#B8892D]"
                />
                <input
                    type="tel"
                    placeholder="WhatsApp / Phone"
                    required
                    className="bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#B8892D]"
                />
                <button
                    type="submit"
                    className={`text-xs font-semibold uppercase py-2 px-4 rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-colors ${formSubmitted
                            ? 'bg-[#3E7C59] text-white'
                            : 'bg-[#B8892D] hover:bg-[#C99A3C] text-white shadow-xs'
                        }`}
                >
                    {formSubmitted ? 'Request Sent!' : 'Request Price List'}
                </button>
            </form>
        </div>
    )
}
