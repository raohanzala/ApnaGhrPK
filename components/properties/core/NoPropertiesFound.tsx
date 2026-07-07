import { Info } from 'lucide-react'

export default function NoPropertiesFound() {
    return (
        <div className="bg-white rounded-xl p-12 text-center border border-slate-200 text-slate-400 space-y-2">
            <Info className="w-8 h-8 mx-auto text-slate-300" />
            <p className="text-sm font-semibold text-slate-500">No properties match your exact filters.</p>
            <p className="text-xs">Try increasing the budget threshold or broadening the keywords.</p>
        </div>
    )
}
