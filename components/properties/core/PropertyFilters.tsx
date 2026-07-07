import { PropertyFiltersProps } from '@/app/types'
import { Search, SlidersHorizontal } from 'lucide-react'
import React from 'react'

export default function PropertyFilters({searchQuery, setSearchQuery, bedCount, setBedCount, maxPrice, setMaxPrice, formatPKR}: PropertyFiltersProps) {
    return (
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 h-fit space-y-6">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <h4 className="font-serif text-sm font-bold text-[#1F2937]">Filter Listings</h4>
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            </div>

            {/* Text search */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search DHA, Bahria, Raya..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs text-[#1F2937] placeholder-slate-400 focus:outline-none focus:border-[#B8892D]"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            {/* Beds count */}
            <div>
                <label className="block text-[10px] font-mono uppercase text-[#6B7280] mb-2">Bedrooms count</label>
                <div className="grid grid-cols-4 gap-1.5 font-mono text-xs">
                    {['any', 3, 4, 5].map((val) => (
                        <button
                            key={val}
                            onClick={() => setBedCount(val as any)}
                            className={`py-1.5 rounded-lg border text-center transition-colors cursor-pointer ${bedCount === val
                                    ? 'bg-[#B8892D] border-[#B8892D] text-white font-bold'
                                    : 'bg-white border-slate-200 text-[#1F2937] hover:bg-slate-50'
                                }`}
                        >
                            {val === 'any' ? 'Any' : `${val}`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Budget ceiling */}
            <div>
                <label className="block text-[10px] font-mono uppercase text-[#6B7280] mb-2">
                    Maximum Budget: <span className="font-bold text-[#1F2937]">{formatPKR(maxPrice)}</span>
                </label>
                <input
                    type="range"
                    min="40000000"
                    max="100000000"
                    step="5000000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    className="w-full accent-[#B8892D]"
                />
            </div>
        </div>
    )
}
