import { MapPin } from 'lucide-react'

export default function OfficeCard() {
    return (
        <div className="space-y-4 text-xs">
            <div className="bg-white p-5 rounded-xl border border-slate-200/80 flex gap-3.5 items-start">
                <MapPin className="w-5 h-5 text-[#B8892D] mt-0.5 shrink-0" />
                <div className="space-y-1 font-sans">
                    <h4 className="font-serif font-bold text-sm">CCA Headquarters Office, Lahore</h4>
                    <p className="text-slate-500">Block CCA, Phase 6, DHA Lahore, Pakistan</p>
                    <p className="text-[#B8892D] font-mono text-[10px] uppercase">Corporate HQ & Designing Studio</p>
                </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 flex gap-3.5 items-start">
                <MapPin className="w-5 h-5 text-[#B8892D] mt-0.5 shrink-0" />
                <div className="space-y-1 font-sans">
                    <h4 className="font-serif font-bold text-sm">Bahria Town Regional Office, Islamabad</h4>
                    <p className="text-slate-500">Phase 8, Main Expressway, Bahria Town, Islamabad, Pakistan</p>
                    <p className="text-[#B8892D] font-mono text-[10px] uppercase">Northern Region Projects Office</p>
                </div>
            </div>
        </div>
    )
}
