import { SiteVisitCardProps } from '@/app/types'
import { Calendar } from 'lucide-react'
import React from 'react'

export default function SiteVisitCard({onNavigate}: SiteVisitCardProps) {
    return (
        <div className="bg-[#111111] text-[#F8F7F4] p-6 rounded-2xl border border-slate-700 space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#B8892D] flex items-center gap-1.5">
                <Calendar className="w-4.5 h-4.5" /> Request Private Site Visit
            </h4>
            <p className="text-[10px] text-slate-300 leading-relaxed">
                Schedule a designated timing with our DHA property officer to inspect structure layers, plumbing conduits, and concrete thickness in person.
            </p>
            <button
                onClick={() => onNavigate('book-consultation')}
                className="w-full bg-[#B8892D] hover:bg-[#C99A3C] text-white py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer border border-[#B8892D]"
            >
                Schedule Site Visit
            </button>
        </div>
    )
}
