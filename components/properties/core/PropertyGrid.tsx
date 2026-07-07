import { PropertyGridProps } from '@/app/types'
import PropertyCard from './PropertyCard'
import NoPropertiesFound from './NoPropertiesFound'

export default function PropertyGrid({properties, setActivePropertyId}: PropertyGridProps) {
    return (
        <div className="lg:col-span-8 space-y-6">
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-2 border-b border-slate-100">
                <span>Showing {properties.length} Premium Listings</span>
                <span>Sort: Standard Luxury High-To-Low</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {properties.map((property) => (
                    <PropertyCard property={property} setActivePropertyId={setActivePropertyId}/>
                ))}
            </div>

            {properties.length === 0 && (
                <NoPropertiesFound/>
            )}
        </div>
    )
}
