interface PageHeadingProps{
    subTitle: string;
    title: string;
}

export default function PageHeading({subTitle, title}: PageHeadingProps) {
    return (
        <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">{subTitle}</span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1F2937]">
                {title}
            </h2>
            <div className="w-12 h-1 bg-[#B8892D] mx-auto rounded-full"></div>
        </div>
    )
}
