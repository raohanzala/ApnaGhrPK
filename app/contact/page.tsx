"use client"

import { FormEvent, useState } from 'react'
import PageHeader from '@/components/PageHeader';
import OfficeLocations from '@/components/contact/core/OfficeLocations';
import ContactLayout from '@/components/contact/core/ContactLayout';
import ContactForm from '@/components/contact/core/ContactForm';
import FAQSection from '@/components/home/FAQSection';

export default function page() {
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    // Career form modal state
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
            <PageHeader title='Get In Touch' description='Book a free physical site visit or meet our lead architects at our CCA Phase 6 Lahore offices.' />

            <ContactLayout>
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <OfficeLocations />
                    <ContactForm successMsg={successMsg} submitting={submitting} handleFormSubmit={handleFormSubmit} />
                </section>

                <FAQSection />
            </ContactLayout>
        </div>
    )
}
