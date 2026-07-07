import { ProjectFiltersProps } from '@/app/types'

export default function ProjectFilters({activeTab, setActiveTab}: ProjectFiltersProps) {
    return (
        <div className="flex justify-center border-b border-slate-200 pb-4">
            <div className="flex gap-2 p-1 bg-white border border-slate-200 rounded-xl font-mono text-xs">
                {['All', 'Completed', 'In Progress', 'Planning'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-colors ${activeTab === tab
                                ? 'bg-[#B8892D] text-white shadow-xs'
                                : 'text-[#1F2937] hover:bg-slate-100'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    )
}
