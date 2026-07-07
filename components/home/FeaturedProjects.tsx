import { PROJECTS } from '@/app/data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedProjects() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
                <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Exquisite Realizations</span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                        Featured Masterpieces
                    </h2>
                </div>
                <Link
                    href="/projects"
                    className="text-xs font-mono uppercase tracking-wider text-[#B8892D] flex items-center gap-1.5 hover:underline cursor-pointer"
                >
                    All Active Projects <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="space-y-16">
                {PROJECTS.map((proj, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <Link
                            key={proj.id}
                            href={`/projects/${proj.id}`}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                                }`}
                        >
                            {/* Visual Thumbnail Frame */}
                            <div className={`lg:col-span-7 relative group overflow-hidden rounded-2xl border border-slate-200 shadow-sm ${isEven ? 'lg:order-1' : 'lg:order-2'
                                }`}>
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                                    referrerPolicy="no-referrer"
                                />
                                {/* Status Indicator */}
                                <span className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-md text-[#F8F7F4] text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded border border-slate-700">
                                    {proj.status}
                                </span>
                            </div>

                            {/* Info block */}
                            <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'
                                }`}>
                                <span className="font-mono text-xs uppercase tracking-wider text-[#B8892D]">{proj.type}</span>
                                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
                                    {proj.title}
                                </h3>

                                <div className="grid grid-cols-2 gap-4 text-xs font-mono py-4 border-y border-slate-200/80">
                                    <div>
                                        <span className="text-[#6B7280] block">Location:</span>
                                        <span className="font-bold text-[#1F2937]">{proj.location}</span>
                                    </div>
                                    <div>
                                        <span className="text-[#6B7280] block">Covered Area:</span>
                                        <span className="font-bold text-[#1F2937]">{proj.area}</span>
                                    </div>
                                    <div>
                                        <span className="text-[#6B7280] block">Engineered Status:</span>
                                        <span className="font-bold text-[#3E7C59]">{proj.status}</span>
                                    </div>
                                    <div>
                                        <span className="text-[#6B7280] block">Completion:</span>
                                        <span className="font-bold text-[#1F2937]">{proj.completionDate}</span>
                                    </div>
                                </div>

                                <p className="text-xs text-[#6B7280] leading-relaxed">
                                    A beautiful combination of premium design layouts and earthquake-resistant structural engineering. Constructed using premium imported fittings and high-tensile steel rebars.
                                </p>

                                <Link
                                    href={`/projects/${proj.id}`}
                                    className="bg-transparent hover:bg-[#111111] text-[#111111] hover:text-white border border-[#111111] px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                                >
                                    View Project Details <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}
