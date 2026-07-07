import { AmenitiesGridProps } from '@/app/types'
import React from 'react'

export default function AmenitiesGrid({amenities}: AmenitiesGridProps) {
    return (
        <div className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="font-serif text-lg font-bold text-[#1F2937]">
                Bespoke Amenities & Fitouts
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                {amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#1F2937] bg-[#F8F7F4] p-3 rounded-lg border border-slate-100">
                        <span className="text-[#B8892D] font-bold">✦</span>
                        <span>{amenity}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
