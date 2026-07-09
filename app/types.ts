import { Dispatch, FormEvent, SetStateAction } from "react";

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  longDescription: string;
  benefits: string[];
  deliverables: string[];
}

export interface ServiceProps {
  activeService: Service;
  activeServiceId: string;
  setActiveServiceId: (id: string) => void;
  onNavigate: (page: string, subId?: string) => void;
  handleQuoteSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formSubmitted: boolean;
}

export interface ServiceSidebarProps {
  activeServiceId: string;
  setActiveServiceId: (id: string) => void;
  onNavigate: (page: string, subId?: string) => void;
}

export interface ServicesGridProps {
  activeServiceId: string;
  setActiveServiceId: (id: string) => void;
}

export interface QuoteFormProps {
  activeService: Service;
  handleQuoteSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formSubmitted: boolean;
}

export interface BenefitsListProps {
  activeService: Service;
}

export interface ProjectTimelineEvent {
  phase: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'pending';
  details: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  area: string; // e.g. "1 Kanal", "10 Marla"
  type: string; // e.g. "Residential Construction", "Grey Structure"
  status: 'Completed' | 'In Progress' | 'Planning';
  completionDate: string;
  image: string;
  droneImage: string;
  timeline: ProjectTimelineEvent[];
  progressPercent: number;
  materials: string[];
  clientReview?: string;
  clientName?: string;
  youtubeUrl?: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
}

export type ProjectTab = 'All' | 'Completed' | 'In Progress' | 'Planning';

export interface ProjectFiltersProps {
  activeTab: ProjectTab;
  setActiveTab: (tab: ProjectTab) => void;
}

export interface ProjectGridProps {
  projects: Project[];
  setActiveProjectId: Dispatch<SetStateAction<string | null>>;
}

export interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export interface ProjectProp{
  project: Project;
}

export interface ProjectCardProps{
  project: Project;
  setActiveProjectId: Dispatch<SetStateAction<string | null>>
}

export interface Property {
  id: string;
  title: string;
  price: string; // in PKR e.g. "7.5 Crore"
  numericPrice: number; // For mortgage calculator (e.g. 75000000)
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string; // e.g. "1 Kanal", "10 Marla"
  image: string;
  droneImage: string;
  gallery: string[];
  walkthroughUrl?: string;
  amenities: string[];
  floorPlan: string; // Image/sketch placeholder
  description: string;
  builderName: string;
}

export interface PropertyFiltersProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;

  bedCount: number | "any";
  setBedCount: Dispatch<
    SetStateAction<number | "any">
  >;

  maxPrice: number;
  setMaxPrice: Dispatch<
    SetStateAction<number>
  >;

  formatPKR: (num: number) => string;
}

export interface PropertiesListingPageProps {
  properties: Property[];
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  bedCount: number | "any";
  setBedCount: Dispatch<SetStateAction<number | "any">>;
  maxPrice: number;
  setMaxPrice: Dispatch<SetStateAction<number>>;
  formatPKR: (num: number) => string;
  setActivePropertyId: Dispatch<SetStateAction<string | null>>;
}

export interface PropertyGridProps{
  properties: Property[];
  setActivePropertyId: Dispatch<SetStateAction<string | null>>
}

export interface PropertyCardProps {
  property: Property;
  setActivePropertyId: Dispatch<
    SetStateAction<string | null>
  >;
}

export interface PropertyDetailPageProps {
  property: Property;

  onBack: () => void;

  downPaymentPct: number;
  setDownPaymentPct: Dispatch<
    SetStateAction<number>
  >;

  tenureYears: number;
  setTenureYears: Dispatch<
    SetStateAction<number>
  >;

  interestRate: number;
  setInterestRate: Dispatch<
    SetStateAction<number>
  >;

  monthlyInstallment: number;

  formatPKR: (num: number) => string;

  triggerWhatsApp: () => void;

  onNavigate: (
    page: string,
    subId?: string
  ) => void;
}

export interface PropertyHeroProps {
  property: Property;
  onBack: () => void;
}

export interface PropertyGalleryProps {
  property: Property;
}

export interface GalleryThumbnailProps {
  image: string;
  index: number;
}

export interface PropertyDescriptionProps {
  description: string;
}

export interface AmenitiesGridProps {
  amenities: string[];
}

export interface AmenityItemProps {
  amenity: string;
}

export interface FloorPlanProps {
  floorPlan: string;
}

export interface MortgageCalculatorProps {
  property: Property;

  downPaymentPct: number;
  setDownPaymentPct: Dispatch<
    SetStateAction<number>
  >;

  tenureYears: number;
  setTenureYears: Dispatch<
    SetStateAction<number>
  >;

  interestRate: number;
  setInterestRate: Dispatch<
    SetStateAction<number>
  >;

  monthlyInstallment: number;

  formatPKR: (
    num: number
  ) => string;
}

export interface PropertySidebarProps {
  property: Property;

  triggerWhatsApp: () => void;

  onNavigate: (
    page: string,
    subId?: string
  ) => void;
}

export interface ListingDetailsCardProps {
  property: Property;

  triggerWhatsApp: () => void;
}

export interface SiteVisitCardProps {
  onNavigate: (
    page: string,
    subId?: string
  ) => void;
}


export interface Video {
  id: string;
  title: string;
  category: 'House Tours' | 'Construction Tips' | 'Client Reviews' | 'Project Updates';
  youtubeId: string;
  duration: string;
  thumbnail: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  isVideo?: boolean;
  videoThumbnail?: string;
  isGoogleReview?: boolean;
}

export interface Article {
  id: string;
  title: string;
  category: 'Construction Tips' | 'Design Ideas' | 'Material Guides' | 'Budget Planning';
  excerpt: string;
  content: string; // Markdown or simple paragraphs
  readTime: string;
  date: string;
  image: string;
  author: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Construction' | 'Architecture' | 'Real Estate' | 'Pricing';
}

export interface Career {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  location: string;
  salaryRange: string;
  description: string;
  requirements: string[];
}

export interface FAQsSectionProps{
  activeFaqId: string | null;
  setActiveFaqId: Dispatch<SetStateAction<string | null>>;
}

export interface ContactHeroProps {
  title: string;
  description: string;
}

export interface ContactLayoutProps {
  children: React.ReactNode;
}

export interface Office {
  id: string;
  title: string;
  address: string;
  tag: string;
}

export interface OfficeCardProps {
  office: Office;
}

export interface OfficeLocationsProps {
  offices: Office[];
}

export interface HelpdeskCardProps {
  mobile: string;
  whatsapp: string;
  workingHours: string;
}

export interface SuccessAlertProps {
  message: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  faqs: FAQ[];

  activeFaqId: string | null;

  setActiveFaqId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

export interface FAQItemProps {
  faq: FAQ;

  isOpen: boolean;

  onToggle: () => void;
}

export interface FormProps {
  submitting: boolean;

  successMsg: string;

  handleFormSubmit: (
    e: FormEvent<HTMLFormElement>,
    formType: string
  ) => void;
}

export interface DeliverableNoticeProps {
  title: string;
  description: string;
}

export interface BlogListingPageProps {
  articles: Article[];

  setActiveBlogId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

export interface BlogGridProps {
  articles: Article[];

  setActiveBlogId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

export interface BlogCardProps {
  article: Article;

  setActiveBlogId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

export interface BlogDetailPageProps {
  article: Article;

  onBack: () => void;
}

export interface BackButtonProps {
  onBack: () => void;

  label: string;
}

export interface BlogMetaProps {
  category: string;

  date: string;

  readTime: string;

  author?: string;
}

export interface ArticleContentProps {
  content: string;
}

export interface ParagraphRendererProps {
  paragraph: string;
}

export interface TagListProps {
  tags: string[];
}

export interface Article {
  id: string;

  title: string;

  image: string;

  category: "Construction Tips" | "Design Ideas" | "Material Guides" | "Budget Planning";

  excerpt: string;

  content: string;

  author: string;

  date: string;

  readTime: string;

  tags: string[];
}

