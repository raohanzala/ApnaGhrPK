import { FormProps } from '@/app/types'
import SuccessAlert from '../../SuccessAlert'

export default function ContactForm({successMsg, handleFormSubmit, submitting}: FormProps) {
    return (
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <h3 className="font-serif text-xl font-bold">Leave A Message</h3>
            <p className="text-xs text-[#6B7280]">Our lead structural surveyor and real estate consultant will compile a detailed preliminary report for your plot size.</p>

            {successMsg && (
                <SuccessAlert message={successMsg}/>
            )}

            <form onSubmit={(e) => handleFormSubmit(e, 'contact')} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Your Name</label>
                        <input type="text" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#B8892D]" />
                    </div>
                    <div className="space-y-1">
                        <label className="block text-[10px] font-mono text-[#6B7280] uppercase">WhatsApp Number</label>
                        <input type="tel" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#B8892D]" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Plot Location / Society</label>
                        <input type="text" placeholder="e.g. DHA Phase 6 Lahore, Sector G-13" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#B8892D]" />
                    </div>
                    <div className="space-y-1">
                        <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Desired Plot Area</label>
                        <select className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none">
                            <option>5 Marla</option>
                            <option>10 Marla</option>
                            <option>1 Kanal</option>
                            <option>2 Kanal</option>
                            <option>Commercial Plaza</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Describe Your Requirements</label>
                    <textarea rows={4} placeholder="Mention Grey structure build, turnkey finishes, architectural design maps approvals etc." className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#B8892D]"></textarea>
                </div>

                <button type="submit" disabled={submitting} className="bg-[#B8892D] hover:bg-[#C99A3C] text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
                    {submitting ? 'Submitting Details...' : 'Send Message'}
                </button>
            </form>
        </div>
    )
}
