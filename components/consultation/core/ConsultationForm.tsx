import { FormProps } from '@/app/types'
import SuccessAlert from '@/components/SuccessAlert'
import { Star } from 'lucide-react'
import DeliverableNotice from '../ui/DeliverableNotice'

export default function ConsultationForm({successMsg, submitting, handleFormSubmit}: FormProps) {
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-2xl border border-slate-200 shadow-md mt-12 space-y-6">
          <div className="text-center space-y-1.5 border-b border-slate-100 pb-4">
            <h4 className="font-serif text-lg font-bold text-[#1F2937]">Select Consultation parameters</h4>
            <p className="text-xs text-[#6B7280]">Our calendar is fully integrated with structural engineer site surveyors.</p>
          </div>
         
         <SuccessAlert message={successMsg}/>

          <form onSubmit={(e) => handleFormSubmit(e, 'consultation')} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">First Name</label>
                <input type="text" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none" />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">WhatsApp Number</label>
                <input type="tel" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Select Meeting Date</label>
                <input type="date" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none" />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Select Meeting Slot</label>
                <select className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none">
                  <option>Morning (11:00 AM - 12:00 PM)</option>
                  <option>Afternoon (02:00 PM - 03:00 PM)</option>
                  <option>Evening (04:30 PM - 05:30 PM)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Preferred Mode</label>
                <select className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none">
                  <option>Physical Meeting (Lahore HQ)</option>
                  <option>Physical Meeting (Islamabad Office)</option>
                  <option>Zoom Video Call (For Overseas Clients)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Your plot parameters / notes</label>
              <textarea rows={3} placeholder="Please mention your plot number, DHA phase, and whether you have a pre-drawn map layout ready." className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none"></textarea>
            </div>

            <DeliverableNotice/>

            <div className="text-center pt-2">
              <button type="submit" disabled={submitting} className="bg-[#B8892D] hover:bg-[#C99A3C] text-white px-10 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#B8892D]">
                {submitting ? 'Confirming slot...' : 'Confirm Meeting Slot'}
              </button>
            </div>
          </form>
        </section>
    )
}
