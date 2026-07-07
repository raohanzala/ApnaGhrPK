import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import PropertiesSection from '@/components/home/PropertiesSection';
import ConstructionProcess from '@/components/home/ConstructionProcess';
import VideosSection from '@/components/home/VideosSection';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CostCalculatorSection from '@/components/home/CostCalculatorSection';
import BlogSection from '@/components/home/BlogSection';
import InstagramSection from '@/components/home/InstagramSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';


export default function Home() {
  return (
    <div className="bg-[#F8F7F4] text-[#1F2937] font-sans">
      <HeroSection/>
      <ServicesSection/>
      <WhyChooseUsSection/>
      <FeaturedProjects/>
      <PropertiesSection/>
      <ConstructionProcess/>
      <VideosSection/>
      <BeforeAfterSection/>
      <TestimonialsSection/>
      <CostCalculatorSection/>
      <BlogSection/>
      <InstagramSection/>
      <FAQSection/>
      <CTASection/>
    </div>
  );
}
