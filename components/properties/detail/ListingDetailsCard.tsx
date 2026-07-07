import { ListingDetailsCardProps } from '@/app/types'
import { Phone } from 'lucide-react'
import React from 'react'

export default function ListingDetailsCard({property, triggerWhatsApp}: ListingDetailsCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-5">
            <h4 className="font-serif font-bold text-sm text-[#1F2937] border-b border-slate-200 pb-2">
                Listing Parameters
            </h4>
            <div className="space-y-3.5 text-xs font-mono">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Price Tag:</span>
                    <span className="font-bold text-[#B8892D]">{property.price}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Total Covered:</span>
                    <span className="font-bold text-[#1F2937]">{property.area}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Bedrooms:</span>
                    <span className="font-bold text-[#1F2937]">{property.bedrooms} Beds</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Bathrooms:</span>
                    <span className="font-bold text-[#1F2937]">{property.bathrooms} Baths</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Builder Team:</span>
                    <span className="font-bold text-[#3E7C59]">{property.builderName}</span>
                </div>
            </div>

            <div className="pt-2">
                <button
                    onClick={triggerWhatsApp}
                    className="w-full bg-[#3E7C59] hover:bg-[#326448] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Phone className="w-4 h-4 text-white" /> Contact on WhatsApp
                </button>
            </div>
        </div>
    )
}
