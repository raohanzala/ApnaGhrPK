import { BenefitsListProps } from '@/app/types'
import { CheckCircle2 } from 'lucide-react'
import React from 'react'

export default function BenefitsList({activeService}: BenefitsListProps) {
    return (
        <div className="space-y-4 bg-[#F8F7F4] p-6 rounded-2xl border border-slate-200/80">
            <h4 className="font-serif font-bold text-sm text-[#111111] border-b border-slate-200 pb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#3E7C59]" /> Client Advantages
            </h4>
            <ul className="space-y-2.5">
                {activeService.benefits.map((ben, idx) => (
                    <li key={idx} className="text-xs text-[#6B7280] flex items-start gap-2 leading-relaxed">
                        <span className="text-[#3E7C59] mt-0.5 font-bold">✓</span>
                        <span>{ben}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
