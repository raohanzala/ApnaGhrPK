import { FloorPlanProps } from '@/app/types'
import React from 'react'

export default function FloorPlan({floorPlan}: FloorPlanProps) {
    return (
        <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1F2937]">
                Floor Plan Configuration
            </h3>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <p className="text-xs text-[#6B7280]">
                    Approved architectural layout mapping covering spatial flows, natural cross-ventilation, and dual kitchen layout setups.
                </p>
                <div className="border border-[#B8892D]/20 rounded-xl p-4 bg-[#F8F7F4] flex justify-center items-center overflow-hidden aspect-[16/9]">
                    <img
                        src={floorPlan}
                        alt="Floor plan outline"
                        className="max-h-full opacity-70 group-hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>
        </div>
    )
}
