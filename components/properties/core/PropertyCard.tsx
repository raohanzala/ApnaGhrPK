import { PropertyCardProps } from '@/app/types'
import React from 'react'

export default function PropertyCard({property, setActivePropertyId}: PropertyCardProps) {
    return (
        <div
            key={property.id}
            className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
        >
            <div>
                <div className="relative overflow-hidden group">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-[#B8892D] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                        {property.price}
                    </div>
                </div>

                <div className="p-5 space-y-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                        {property.location}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#1F2937] line-clamp-1">
                        {property.title}
                    </h3>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200/70 text-center font-mono text-[10px] text-slate-600">
                        <div>
                            <span className="block text-slate-400">Beds:</span>
                            <span className="font-bold text-[#1F2937]">{property.bedrooms}</span>
                        </div>
                        <div>
                            <span className="block text-slate-400">Baths:</span>
                            <span className="font-bold text-[#1F2937]">{property.bathrooms}</span>
                        </div>
                        <div>
                            <span className="block text-slate-400">Area:</span>
                            <span className="font-bold text-[#1F2937]">{property.area}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 pb-5 pt-2">
                <button
                    onClick={() => setActivePropertyId(property.id)}
                    className="w-full bg-[#111111] hover:bg-[#B8892D] text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                    View Details Page
                </button>
            </div>
        </div>
    )
}
