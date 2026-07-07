import CostCalculator from '../CostCalculator'

export default function CostCalculatorSection() {
    return (
        <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Pricing Transparency</span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                    Estimate Your Construction Cost
                </h2>
                <div className="w-16 h-1 bg-[#B8892D] mx-auto rounded-full mt-2"></div>
                <p className="text-xs sm:text-sm text-[#6B7280]">
                    Use our interactive estimator to compute standard grey structure or turnkey luxury finish expenses in Pakistan.
                </p>
            </div>

            <CostCalculator />
        </section>
    )
}
