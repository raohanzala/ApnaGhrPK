import { PROPERTIES } from '@/app/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PropertiesSection() {
    return (
        <section className="bg-white py-24 border-y border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Investment Enclaves</span>
                        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                            Luxury Homes For Sale
                        </h2>
                    </div>
                    <Link
                        href="/properties"
                        className="text-xs font-mono uppercase tracking-wider text-[#B8892D] flex items-center gap-1.5 hover:underline cursor-pointer"
                    >
                        View Full Directory <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PROPERTIES.map((prop) => (
                        <div
                            key={prop.id}
                            className="bg-[#F8F7F4] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="relative overflow-hidden group">
                                    <img
                                        src={prop.image}
                                        alt={prop.title}
                                        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#B8892D] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                                        {prop.price}
                                    </div>
                                </div>

                                <div className="p-5 space-y-3">
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                                        {prop.location}
                                    </span>
                                    <h3 className="font-serif text-base font-bold text-[#1F2937] line-clamp-1">
                                        {prop.title}
                                    </h3>

                                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200/70 text-center font-mono text-[10px] text-slate-600">
                                        <div>
                                            <span className="block text-slate-400">Beds:</span>
                                            <span className="font-bold text-[#1F2937]">{prop.bedrooms}</span>
                                        </div>
                                        <div>
                                            <span className="block text-slate-400">Baths:</span>
                                            <span className="font-bold text-[#1F2937]">{prop.bathrooms}</span>
                                        </div>
                                        <div>
                                            <span className="block text-slate-400">Area:</span>
                                            <span className="font-bold text-[#1F2937]">{prop.area}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-5 pb-5 pt-2">
                                <Link
                                    href={`/properties/${prop.id}`}
                                    className="w-full bg-[#111111] hover:bg-[#B8892D] text-white py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
