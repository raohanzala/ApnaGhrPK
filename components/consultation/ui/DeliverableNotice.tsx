import { Star } from 'lucide-react'

export default function DeliverableNotice() {
    return (
        <div className="p-4 bg-[#F8F7F4] rounded-xl border border-slate-150 flex items-start gap-3 text-[10px] text-[#6B7280] leading-normal">
            <Star className="w-4 h-4 text-[#B8892D] shrink-0" />
            <span>
                <strong>Consultation Deliverable:</strong> When physically attending our studio, please bring soft/hard copies of your plot allocation file or society map guidelines. Our designers will render a preliminary layout during the slot.
            </span>
        </div>
    )
}
