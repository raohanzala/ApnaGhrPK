export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  longDescription: string;
  benefits: string[];
  deliverables: string[];
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
  gallery: string[];
  walkthroughUrl?: string;
  amenities: string[];
  floorPlan: string; // Image/sketch placeholder
  description: string;
  builderName: string;
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
