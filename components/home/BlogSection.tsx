import { ARTICLES } from '@/app/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BlogSection() {
    return (
        <section className="bg-white py-24 border-y border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Construction Guides</span>
                        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                            Insights & Building Tips
                        </h2>
                    </div>
                    <Link
                        href="/articles"
                        className="text-xs font-mono uppercase tracking-wider text-[#B8892D] flex items-center gap-1.5 hover:underline cursor-pointer"
                    >
                        Read All Articles <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ARTICLES.map((art) => (
                        <Link
                            key={art.id}
                            href={`/articles/${art.id}`}
                            className="bg-[#F8F7F4] rounded-2xl overflow-hidden border border-[#E5E7EB] flex flex-col justify-between"
                        >
                            <div>
                                <img
                                    src={art.image}
                                    alt={art.title}
                                    className="w-full aspect-[16/10] object-cover"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="p-5 space-y-2.5">
                                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                                        <span>{art.date}</span>
                                        <span>{art.readTime}</span>
                                    </div>
                                    <span className="text-[10px] font-mono uppercase text-[#B8892D] font-bold block">
                                        {art.category}
                                    </span>
                                    <h3 className="font-serif text-base font-bold text-[#1F2937] leading-snug line-clamp-2">
                                        {art.title}
                                    </h3>
                                    <p className="text-xs text-[#6B7280] line-clamp-2">
                                        {art.excerpt}
                                    </p>
                                </div>
                            </div>

                            <div className="px-5 pb-5 pt-2">
                                <Link
                                    href={`/articles/${art.id}`}
                                    className="text-xs font-mono uppercase tracking-wider text-[#B8892D] hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
