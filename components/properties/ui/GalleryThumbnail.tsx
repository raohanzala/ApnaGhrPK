import React from 'react'

export default function GalleryThumbnail({property}) {
    return (
        <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
            <img
                src={imgUrl}
                alt={`Thumb ${idx}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
            />
        </div>
    )
}
