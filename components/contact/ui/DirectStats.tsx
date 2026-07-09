import React from 'react'

export default function DirectStats() {
    return (
        <div className="bg-[#111111] text-white p-5 rounded-xl border border-[#B8892D]/30 space-y-3 text-xs font-mono">
            <h4 className="font-serif font-bold text-slate-200">Engineering Helpdesk</h4>
            <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Direct Mobile:</span>
                <span className="font-bold text-[#B8892D]">+92 (300) 123-4567</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>WhatsApp Desk:</span>
                <span className="font-bold text-[#3E7C59]">+92 (311) 987-6543</span>
            </div>
            <div className="flex justify-between">
                <span>Working Hours:</span>
                <span className="font-bold text-slate-300">Mon - Sat: 9 AM - 6 PM</span>
            </div>
        </div>
  )
}
