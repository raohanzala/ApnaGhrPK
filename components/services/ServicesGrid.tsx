import React from 'react'
import ServiceCard from './ServiceCard';
import { SERVICES } from '@/app/data';
import PageHeading from '../PageHeading';
import { ServicesGridProps } from '@/app/types';

export default function ServicesGrid({activeServiceId, setActiveServiceId}: ServicesGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <PageHeading subTitle='What We Do' title='Core Services Portfolio'/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => {
                setActiveServiceId(srv.id);
                document.getElementById('service-detail-anchor')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group h-64 ${
                activeServiceId === srv.id
                  ? 'bg-white border-2 border-[#B8892D] shadow-md'
                  : 'bg-white border-[#E5E7EB] hover:bg-slate-50 hover:shadow-sm'
              }`}
            >
              <ServiceCard id={srv.id} title={srv.title} description={srv.description} activeServiceId={activeServiceId} />
            </div>
          ))}
        </div>
      </section>
  )
}
