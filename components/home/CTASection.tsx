import Link from 'next/link'

export default function CTASection() {
    return (
        <section className="bg-[#111111] text-[#F8F7F4] py-24 relative overflow-hidden text-center border-t border-[#B8892D]/20">
            <div className="absolute inset-0 z-0 opacity-15">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Villa background"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="space-y-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Start Building Today</span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
                        Ready to Build Your Dream Home?
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Book a free engineering site visit or sit with our award-winning designers at our DHA Phase 6 headquarters. Let’s blueprint your legacy.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/book-consultation"
                        className="w-full sm:w-auto bg-[#B8892D] hover:bg-[#C99A3C] text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer border border-[#B8892D]"
                    >
                        Book Free consultation
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border border-white/20 hover:border-white/50 cursor-pointer"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </section>
    )
}
