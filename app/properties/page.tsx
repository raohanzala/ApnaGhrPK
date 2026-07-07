"use client";

import { useState, useEffect } from 'react';
import { PROPERTIES } from '../data';
import PageHeader from '@/components/PageHeader';
import PropertyGrid from '@/components/properties/core/PropertyGrid';
import PropertyFilters from '@/components/properties/core/PropertyFilters';
import PropertyHero from '@/components/properties/detail/PropertyHero';
import PropertyGallery from '@/components/properties/detail/PropertyGallery';
import PropertyDescription from '@/components/properties/detail/PropertyDescription';
import AmenitiesGrid from '@/components/properties/detail/AmenitiesGrid';
import FloorPlan from '@/components/properties/detail/FloorPlan';
import MortgageCalculator from '@/components/properties/detail/MortgageCalculator';
import ListingDetailsCard from '@/components/properties/detail/ListingDetailsCard';
import SiteVisitCard from '@/components/properties/detail/SiteVisitCard';
import PropertiesListingPage from '@/components/properties/core/PropertiesListingPage';
import PropertyDetailPage from '@/components/properties/core/PropertyDetailPage';

interface PropertiesProps {
  selectedPropertyId?: string;
  onNavigate: (page: string, subId?: string) => void;
}

export default function Properties({ selectedPropertyId, onNavigate }: PropertiesProps) {
  const [activePropertyId, setActivePropertyId] = useState<string | null>(null);

  // Listing filters
  const [searchQuery, setSearchQuery] = useState('');
  const [bedCount, setBedCount] = useState<number | 'any'>('any');
  const [maxPrice, setMaxPrice] = useState<number>(100000000); // 10 Crore in PKR

  // Mortgage Calculator state
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [tenureYears, setTenureYears] = useState(15);
  const [interestRate, setInterestRate] = useState(13.5); // Average KIBOR + bank margin in Pakistan
  const [monthlyInstallment, setMonthlyInstallment] = useState(0);

  // Load selected property if routed directly
  useEffect(() => {
    if (selectedPropertyId) {
      setActivePropertyId(selectedPropertyId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPropertyId]);

  const activeProperty = PROPERTIES.find(p => p.id === activePropertyId);

  // Perform Mortgage calculations for activeProperty
  useEffect(() => {
    if (!activeProperty) return;
    const principal = activeProperty.numericPrice * (1 - downPaymentPct / 100);
    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = tenureYears * 12;

    if (monthlyRate === 0) {
      setMonthlyInstallment(principal / numberOfPayments);
    } else {
      const installment = 
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyInstallment(Math.round(installment));
    }
  }, [activeProperty, downPaymentPct, tenureYears, interestRate]);

  // Handle WhatsApp messaging
  const triggerWhatsApp = () => {
    if (!activeProperty) return;
    const text = `Assalam-o-Alaikum ApnaGharPk, I am interested in viewing the details of "${activeProperty.title}" located in ${activeProperty.location} (Listed at ${activeProperty.price}). Please share booking dates.`;
    const url = `https://wa.me/923001234567?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // Filter listings
  const filteredProperties = PROPERTIES.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBed = bedCount === 'any' ? true : p.bedrooms === bedCount;
    const matchesPrice = p.numericPrice <= maxPrice;
    return matchesSearch && matchesBed && matchesPrice;
  });

  const formatPKR = (num: number) => {
    if (num >= 10000000) {
      return `PKR ${(num / 10000000).toFixed(2)} Crore`;
    } else if (num >= 100000) {
      return `PKR ${(num / 100000).toFixed(2)} Lakh`;
    }
    return `PKR ${num.toLocaleString()}`;
  };

  if (activeProperty) {
    return (
      <PropertyDetailPage property={activeProperty} onBack={() => setActivePropertyId(null)} downPaymentPct={downPaymentPct} setDownPaymentPct={setDownPaymentPct} tenureYears={tenureYears} setTenureYears={setTenureYears} interestRate={interestRate} setInterestRate={setInterestRate} monthlyInstallment={monthlyInstallment} formatPKR={formatPKR} triggerWhatsApp={triggerWhatsApp} onNavigate={onNavigate}/>
    );
  }

  return (
    <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] font-sans pb-24">
      <PageHeader subTitle='Premium Ready Assets' title='Luxury Properties For Sale' description='Browse state-of-the-art completed villas and luxury enclaves with certified legal titles across DHA and Bahria Town.'/>
      <PropertiesListingPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} bedCount={bedCount} setBedCount={setBedCount} maxPrice={maxPrice} setMaxPrice={setMaxPrice} formatPKR={formatPKR} properties={filteredProperties} setActivePropertyId={setActivePropertyId}/>
    </div>
  );
}
