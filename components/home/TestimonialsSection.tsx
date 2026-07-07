import { REVIEWS } from '@/app/data'
import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function TestimonialsSection() {
    return (
        <section className="bg-white py-24 border-y border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Testimonials & Reviews</span>
                        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                            Word From Our Homeowners
                        </h2>
                    </div>

                    {/* Google review average highlight */}
                    <div className="flex items-center gap-2 bg-[#F8F7F4] p-3 rounded-lg border border-slate-200">
                        <div className="flex text-amber-500">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                        </div>
                        <span className="text-xs font-bold text-[#1F2937]">4.9 out of 5</span>
                        <span className="text-[10px] text-slate-400 font-mono">(120+ Google Reviews)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {REVIEWS.map((rev) => (
                        <Link
                            key={rev.id}
                            href={`/reviews/${rev.id}`}
                            className="bg-[#F8F7F4] p-6 rounded-2xl border border-[#E5E7EB] flex flex-col justify-between shadow-xs"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex text-amber-500">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />)}
                                    </div>
                                    {rev.isGoogleReview && (
                                        <span className="text-[9px] font-mono text-[#3E7C59] bg-[#3E7C59]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                                            ✓ Verified Google Review
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs text-[#6B7280] italic leading-relaxed">
                                    "{rev.comment}"
                                </p>
                            </div>

                            <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-200/60">
                                <img
                                    src={rev.avatar}
                                    alt={rev.name}
                                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                                    referrerPolicy="no-referrer"
                                />
                                <div>
                                    <h4 className="text-xs font-serif font-bold text-[#1F2937]">{rev.name}</h4>
                                    <p className="text-[10px] text-slate-400">{rev.role}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
