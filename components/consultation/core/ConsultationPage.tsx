"use client";

import { FormEvent, useState } from 'react'
import ConsultationForm from './ConsultationForm'
import PageHeader from '@/components/PageHeader';

export default function ConsultationPage() {
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [activeCareerId, setActiveCareerId] = useState<string | null>(null);

    const handleFormSubmit = (e: FormEvent, type: string) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            if (type === 'contact') {
                setSuccessMsg('Your message was received! Our lead engineer will contact you shortly.');
            } else if (type === 'consultation') {
                setSuccessMsg('Your consultation is booked! Check your phone/email for details.');
            } else if (type === 'career') {
                setSuccessMsg('Application submitted successfully! Our HR team will review PEC details.');
                setActiveCareerId(null);
            }
            setTimeout(() => setSuccessMsg(''), 4000);
        }, 2000);
    };

    return (
        <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] pb-24 font-sans">
            <PageHeader title='Book Free Construction Consultation' description='Block 1 hour with our Lead Architect and Structural Engineer. Walk out with a preliminary map sketch and raw material quote.' />

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-2xl border border-slate-200 shadow-md mt-12 space-y-6">
                <div className="text-center space-y-1.5 border-b border-slate-100 pb-4">
                    <h4 className="font-serif text-lg font-bold text-[#1F2937]">Select Consultation parameters</h4>
                    <p className="text-xs text-[#6B7280]">Our calendar is fully integrated with structural engineer site surveyors.</p>
                </div>

                <ConsultationForm successMsg={successMsg} submitting={submitting} handleFormSubmit={handleFormSubmit} />
            </section>
        </div>
    )
}
