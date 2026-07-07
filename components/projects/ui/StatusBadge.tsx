import React from 'react'

export default function StatusBadge({proj}) {
    return (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs text-[10px] font-mono uppercase tracking-wider text-[#1F2937]">
            {proj.status}
        </div>
    )
}
