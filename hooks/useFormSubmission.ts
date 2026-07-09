import React from 'react'

export default function useFormSubmission() {
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
}
