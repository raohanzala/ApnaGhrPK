import { Property } from '@/app/types'

export default function PropertyGallery({property}: {property: Property}) {
    return (
        <div className="space-y-4">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-[#B8892D] text-white font-serif font-black text-lg px-4 py-2 rounded-xl shadow-md">
                    {property.price}
                </div>
            </div>

            {/* Grid of gallery thumbs */}
            <div className="grid grid-cols-3 gap-4">
                {property.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                        <img
                            src={imgUrl}
                            alt={`Thumb ${idx}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
