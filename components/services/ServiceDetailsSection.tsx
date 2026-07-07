import DeliverablesList from './DeliverablesList'
import BenefitsList from './BenefitsList'
import ServiceSidebar from './ServiceSidebar'
import QuoteForm from './QuoteForm'
import type { ServiceProps } from '@/app/types' 
import PageHeading from '../PageHeading'

export default function ServiceDetailsSection({activeService, activeServiceId, setActiveServiceId, onNavigate, handleQuoteSubmit, formSubmitted}: ServiceProps) {
  return (
    <section id="service-detail-anchor" className="bg-white py-24 border-t border-[#E5E7EB] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <PageHeading subTitle='Service Details' title={`Deep Dive: ${activeService.title}`}/>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <ServiceSidebar activeServiceId={activeServiceId} onNavigate={onNavigate} setActiveServiceId={setActiveServiceId}/>

            {/* Dynamic Content Panel */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-[#F8F7F4] text-[#B8892D] text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded border border-slate-200">
                  Certified Building Code Compliance
                </span>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                  {activeService.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <BenefitsList activeService={activeService}/>
                <DeliverablesList activeService={activeService}/>
              </div>

              <QuoteForm handleQuoteSubmit={handleQuoteSubmit} activeService={activeService} formSubmitted={formSubmitted}/>

            </div>

          </div>

        </div>
      </section>
  )
}
