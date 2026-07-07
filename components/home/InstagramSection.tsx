import Link from 'next/link'

export default function InstagramSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Social Feeds</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
            Our Instagram Portfolio
          </h2>
          <div className="w-16 h-1 bg-[#B8892D] mx-auto rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
          ].map((url, idx) => (
            <Link
              key={idx}
              href={`/gallery/${idx}`}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-[#E5E7EB]"
            >
              <img 
                src={url} 
                alt="Instagram Feed"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {/* <Instagram className="w-8 h-8 text-white" /> */}
              </div>
            </Link>
          ))}
        </div>
      </section>
  )
}
