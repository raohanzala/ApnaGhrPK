import PageHeading from "../PageHeading";

export default function ExecutiveCouncilSection() {
  return (
    <section className="bg-white py-20 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <PageHeading subTitle="Executive Council" title="Meet Our Visionaries & Structural Leaders"/>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                name: 'Engr. Haris Mumtaz',
                role: 'Founder & Chief Engineering Officer',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80',
                bio: 'PEC Registered civil engineer with 15+ years overseeing luxury residential villas in DHA Lahore & Bahria Town Islamabad.'
              },
              {
                name: 'Arch. Fatima Al-Vi',
                role: 'Senior Architectural Designer',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
                bio: 'Award-winning architect specializing in Modern Spanish, Moroccan, and high-contrast Contemporary villas.'
              },
              {
                name: 'Noman Shah',
                role: 'Head of Quality & Supply Chain',
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80',
                bio: 'Oversees strict structural supply contracts, ensuring raw material grade authenticity and zero commission inflating.'
              }
            ].map((exec, idx) => (
              <div key={idx} className="bg-[#F8F7F4] p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <img 
                  src={exec.img} 
                  alt={exec.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-[#B8892D]"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-[#1F2937]">{exec.name}</h4>
                  <p className="text-xs font-mono text-[#B8892D]">{exec.role}</p>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {exec.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
