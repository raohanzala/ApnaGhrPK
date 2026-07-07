import { PropertyDescriptionProps } from '@/app/types'
import React from 'react'

export default function PropertyDescription({description}: PropertyDescriptionProps) {
    return (
        <div className="space-y-3">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937]">
                Architectural Statement
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
                {description}
            </p>
        </div>
    )
}
