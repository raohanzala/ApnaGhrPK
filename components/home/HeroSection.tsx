"use client";

import {motion} from 'motion/react'
import Logo from '../Logo'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F1115]">
            {/* Cinematic drone view overlay background image with premium dark tint */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
                    alt="Cinematic Construction Site"
                    className="w-full h-full object-cover opacity-25 scale-105 select-none"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-black/50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-[#F8F7F4] space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Embedded Luxury Brand Logo */}
                    <div className="dark flex justify-center mb-4 select-none">
                        <Logo variant="full" className="scale-110" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-[#B8892D]/25 border border-[#B8892D]/40 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#B8892D] mx-auto">
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                        Pakistan's Premier Architecture & Construction Firm
                    </div>

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight">
                        Building Dream Homes With <span className="text-[#B8892D] italic font-normal">Trust, Quality & Excellence</span>
                    </h1>

                    <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        From architectural planning to final luxury construction, we build magnificent structures that reflect quality, durability, and contemporary elite living.
                    </p>
                </motion.div>

                {/* Action CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="/book-consultation"
                        className="w-full sm:w-auto bg-[#B8892D] hover:bg-[#C99A3C] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer border border-[#B8892D]"
                    >
                        Book Free Consultation
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/projects"
                        className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all border-2 border-[#F8F7F4]/30 hover:border-[#F8F7F4] flex items-center justify-center gap-2 cursor-pointer"
                    >
                        Explore Projects
                    </Link>
                </motion.div>

                {/* Core Stats Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="pt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto border-t border-white/10 mt-16"
                >
                    {[
                        { val: '500+', lab: 'Homes Built' },
                        { val: '10+', lab: 'Years Experience' },
                        { val: '100%', lab: 'Client Satisfaction' },
                        { val: '50+', lab: 'Professional Engineers' },
                    ].map((stat, idx) => (
                        <div key={idx} className="space-y-1 bg-[#1F2937]/35 p-4 rounded-xl border border-white/5 backdrop-blur-xs">
                            <div className="text-3xl sm:text-4xl font-serif font-black text-[#B8892D]">{stat.val}</div>
                            <div className="text-xs font-mono uppercase tracking-wider text-slate-300">{stat.lab}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
