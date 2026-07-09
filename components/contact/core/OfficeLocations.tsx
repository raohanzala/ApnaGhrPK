import DirectStats from '../ui/DirectStats'
import OfficeCard from '../ui/OfficeCard'

export default function OfficeLocations() {
    return (
        <div className="lg:col-span-5 space-y-8">
            <span className="text-xs font-mono text-[#B8892D] uppercase tracking-wider block font-bold">Office Locator</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">Corporate Offices & Business Enclaves</h2>

            <OfficeCard/>
            <DirectStats />
        </div>
    )
}
