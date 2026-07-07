import { MortgageCalculatorProps } from '@/app/types'
import { Calculator, Info } from 'lucide-react'

export default function MortgageCalculator({property, downPaymentPct, setDownPaymentPct, tenureYears, setTenureYears, interestRate, setInterestRate, monthlyInstallment, formatPKR}: MortgageCalculatorProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Calculator className="w-5 h-5 text-[#B8892D]" />
                <h3 className="font-serif text-lg font-bold text-[#1F2937]">
                    Pakistani Bank Mortgage Estimator
                </h3>
            </div>
            <p className="text-xs text-[#6B7280]">
                Compute home financing installments with Pakistani standard commercial banking parameters (HBL, Meezan Bank, Bank Alfalah).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                    <label className="block text-[10px] font-mono uppercase text-[#6B7280] mb-2">
                        Down Payment: <span className="font-bold text-[#1F2937]">{downPaymentPct}%</span>
                    </label>
                    <input
                        type="range"
                        min="15"
                        max="60"
                        value={downPaymentPct}
                        onChange={(e) => setDownPaymentPct(parseInt(e.target.value))}
                        className="w-full accent-[#B8892D]"
                    />
                    <span className="text-[10px] font-mono block text-[#B8892D] mt-1">
                        Required: {formatPKR(property.numericPrice * (downPaymentPct / 100))}
                    </span>
                </div>

                <div>
                    <label className="block text-[10px] font-mono uppercase text-[#6B7280] mb-2">
                        Financing Tenure: <span className="font-bold text-[#1F2937]">{tenureYears} Years</span>
                    </label>
                    <select
                        value={tenureYears}
                        onChange={(e) => setTenureYears(parseInt(e.target.value))}
                        className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2 text-xs text-[#1F2937] focus:outline-none"
                    >
                        {[5, 10, 15, 20].map(y => <option key={y} value={y}>{y} Years</option>)}
                    </select>
                </div>

                <div>
                    <label className="block text-[10px] font-mono uppercase text-[#6B7280] mb-2">
                        Annual Mark-up / KIBOR: <span className="font-bold text-[#1F2937]">{interestRate}%</span>
                    </label>
                    <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                        className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2 text-xs text-[#1F2937] focus:outline-none"
                    />
                </div>
            </div>

            {/* Pricing Result */}
            <div className="bg-[#111111] text-[#F8F7F4] p-5 rounded-xl border border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <div>
                    <span className="text-[10px] font-mono uppercase text-[#B8892D] tracking-wider block">Estimated Monthly Payment</span>
                    <div className="text-2xl font-serif font-black">{formatPKR(monthlyInstallment)} / Month</div>
                </div>
                <div className="p-2.5 bg-slate-800 rounded-lg text-[10px] text-slate-300 max-w-xs leading-normal font-sans border border-slate-700">
                    <Info className="w-4 h-4 text-[#B8892D] inline shrink-0 mr-1.5 -mt-0.5" />
                    Includes standard property insurance margin. Subject to bank approval.
                </div>
            </div>
        </div>
    )
}
