import PropertyHero from '../detail/PropertyHero'
import PropertyGallery from '../detail/PropertyGallery'
import PropertyDescription from '../detail/PropertyDescription'
import AmenitiesGrid from '../detail/AmenitiesGrid'
import MortgageCalculator from '../detail/MortgageCalculator'
import ListingDetailsCard from '../detail/ListingDetailsCard'
import SiteVisitCard from '../detail/SiteVisitCard'
import { PropertyDetailPageProps } from '@/app/types'
import FloorPlan from '../detail/FloorPlan'

export default function PropertyDetailPage({property, onBack, downPaymentPct, setDownPaymentPct, tenureYears, setTenureYears, interestRate, setInterestRate, monthlyInstallment, formatPKR, triggerWhatsApp, onNavigate}: PropertyDetailPageProps) {
    return (
        <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] font-sans pb-24">
            <PropertyHero property={property} onBack={onBack} />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

                <div className="lg:col-span-8 space-y-12">
                    <PropertyGallery property={property} />
                    <PropertyDescription description={property.description} />
                    <AmenitiesGrid amenities={property.amenities} />
                    <FloorPlan floorPlan={property.floorPlan} />
                    <MortgageCalculator
                        property={property}
                        downPaymentPct={downPaymentPct}
                        setDownPaymentPct={setDownPaymentPct}
                        tenureYears={tenureYears}
                        setTenureYears={setTenureYears}
                        interestRate={interestRate}
                        setInterestRate={setInterestRate}
                        monthlyInstallment={monthlyInstallment}
                        formatPKR={formatPKR}
                    />

                </div>

                {/* Right sidebar info */}
                <div className="lg:col-span-4 space-y-8">
                    <ListingDetailsCard property={property} triggerWhatsApp={triggerWhatsApp} />
                    <SiteVisitCard onNavigate={onNavigate} />
                </div>

            </section>
        </div>
    )
}
