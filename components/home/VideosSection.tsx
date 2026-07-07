"use client";

import { VIDEOS } from '@/app/data';
import { Play } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react'

export default function VideosSection() {
      const [activeVideoCat, setActiveVideoCat] = useState<string>('All');

    const videoCategories = ['All', 'House Tours', 'Construction Tips', 'Client Reviews', 'Project Updates'];
      const filteredVideos = activeVideoCat === 'All' 
        ? VIDEOS 
        : VIDEOS.filter(v => v.category === activeVideoCat);

    return (
        <section className="bg-white py-24 border-y border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Media Channels</span>
                        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                            On-Site Video Guides & Tours
                        </h2>
                    </div>

                    {/* Category filters */}
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                        {videoCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveVideoCat(cat)}
                                className={`px-3 py-1 rounded transition-colors cursor-pointer ${activeVideoCat === cat
                                        ? 'bg-[#B8892D] text-white'
                                        : 'bg-[#F8F7F4] text-[#1F2937] hover:bg-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {filteredVideos.map((vid) => (
                        <Link
                            key={vid.id}
                            href={`/videos/${vid.id}`}
                            className="group cursor-pointer bg-[#F8F7F4] rounded-xl overflow-hidden border border-[#E5E7EB] transition-all hover:-translate-y-1 flex flex-col justify-between"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                                <img
                                    src={vid.thumbnail}
                                    alt={vid.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-red-600 group-hover:bg-[#B8892D] text-white flex items-center justify-center shadow-lg transition-colors">
                                        <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                                    </div>
                                </div>
                                <span className="absolute bottom-2 right-2 bg-black/75 text-[9px] font-mono text-white px-1.5 py-0.5 rounded">
                                    {vid.duration}
                                </span>
                            </div>

                            <div className="p-4 space-y-2">
                                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#B8892D] block">
                                    {vid.category}
                                </span>
                                <h4 className="text-xs font-serif font-bold text-[#1F2937] leading-snug line-clamp-2">
                                    {vid.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
