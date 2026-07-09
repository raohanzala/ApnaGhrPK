import React from 'react'

interface PageHeaderProps {
    subTitle?: string;
    title: string;
    description: string;
}

export default function PageHeader({subTitle, title, description}: PageHeaderProps) {
  return (
    <div className="bg-[#111111] text-[#F8F7F4] py-20 relative overflow-hidden border-b border-[#B8892D]/20">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
            alt="Services Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D]">{subTitle}</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
  )
}
