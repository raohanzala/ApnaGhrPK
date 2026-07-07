"use client";

import { useState, useEffect, FormEvent } from 'react';
import { SERVICES } from '../data';
import PageHeader from '@/components/PageHeader';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServiceDetailsSection from '@/components/services/ServiceDetailsSection';

interface ServicesProps {
  selectedServiceId?: string;
  onNavigate: (page: string, subId?: string) => void;
}

export default function Services({ selectedServiceId, onNavigate }: ServicesProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // If a subId is passed (e.g. from footer click), set it as the active service details
  useEffect(() => {
    if (selectedServiceId) {
      setActiveServiceId(selectedServiceId);
      // Scroll to the detail section
      const element = document.getElementById('service-detail-anchor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedServiceId]);

  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  const handleQuoteSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] font-sans pb-24">
      
      <PageHeader 
        subTitle='Our Specialized Offerings'
        title='Comprehensive Building & Real Estate Services'
        description='From the initial foundational excavation to pristine, A-grade turnkey luxury finishes, ApnaGharPk is your trusted lifelong structural partner.'
      />

      <ServicesGrid activeServiceId={activeServiceId} setActiveServiceId={setActiveServiceId}/>

      {/* SERVICE DETAILS PAGE (Drawn dynamically based on activeServiceId) */}
      <ServiceDetailsSection onNavigate={onNavigate} activeServiceId={activeServiceId} setActiveServiceId={setActiveServiceId} activeService={activeService} handleQuoteSubmit={handleQuoteSubmit} formSubmitted={formSubmitted}/>
    </div>
  );
}
