import CertificationsSection from '@/components/about/CertificationsSection';
import CorporateProfileSection from '@/components/about/CorporateProfileSection';
import ExecutiveCouncilSection from '@/components/about/ExecutiveCouncilSection';
import PageHeader from '@/components/PageHeader';

export default function About() {
  return (
    <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] font-sans pb-24">
      
      <PageHeader
        subTitle='The ApnaGharPk Heritage'
        title='Engineering Ultimate Legacies'
        description="Founded with a vision to redefine luxury architecture, structural resilience, and financial integrity in Pakistan's real estate sector."
      />

      <CorporateProfileSection/>
      <ExecutiveCouncilSection/>
      <CertificationsSection/>
    </div>
  );
}
