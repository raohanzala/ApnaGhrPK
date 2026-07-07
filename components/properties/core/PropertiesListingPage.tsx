import { PropertiesListingPageProps } from "@/app/types";
import PropertyFilters from "./PropertyFilters";
import PropertyGrid from "./PropertyGrid";

export default function PropertiesListingPage({searchQuery, setSearchQuery, bedCount, setBedCount, maxPrice, setMaxPrice, properties, setActivePropertyId, formatPKR}: PropertiesListingPageProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
      <PropertyFilters searchQuery={searchQuery} setSearchQuery={setSearchQuery} bedCount={bedCount} setBedCount={setBedCount} maxPrice={maxPrice} setMaxPrice={setMaxPrice} formatPKR={formatPKR} />
      <PropertyGrid properties={properties} setActivePropertyId={setActivePropertyId} />
    </section>
  )
}
