import BeforeAfterSlider from '../projects/shared/BeforeAfterSlider'

export default function BeforeAfterSection() {
    return (
        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Physical Transformations</span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                    Observe Our Execution Precision
                </h2>
                <div className="w-16 h-1 bg-[#B8892D] mx-auto rounded-full mt-2"></div>
                <p className="text-xs sm:text-sm text-[#6B7280]">
                    Drag the divider line to observe a raw, grey structure brick framework transform into a finished 1 Kanal Spanish Luxury Villa handover.
                </p>
            </div>

            <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            />
        </section>
    )
}
