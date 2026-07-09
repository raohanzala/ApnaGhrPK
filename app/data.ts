import { Service, Project, Property, Video, Review, Article, FAQItem, Career } from './types';

export const SERVICES: Service[] = [
  {
    id: 'house-construction',
    title: 'House Construction',
    icon: 'Home',
    description: 'A-Grade residential construction services from foundation to grey structure and luxury finishes.',
    longDescription: 'Our signature House Construction service delivers premium residential spaces built to the highest engineering standards. We manage the entire lifecycle of your home build, starting with robust soil testing and earthquake-resistant structural engineering, all the way to bespoke luxury finishes and paint.',
    benefits: [
      'Comprehensive end-to-end project management',
      'Daily site updates and live progress reports via app/portal',
      'Use of supreme A-grade materials (Amreli Steel, Maple Leaf Cement)',
      '10-year structural integrity guarantee'
    ],
    deliverables: [
      'Complete structural and architectural layout plans',
      'Finished Grey Structure and high-end turnkey fittings',
      'Plumbing, electrical, and gas lines installation with pressure tests',
      'Complete regulatory approvals and completion certificate'
    ]
  },
  {
    id: 'grey-structure',
    title: 'Grey Structure Construction',
    icon: 'Layers',
    description: 'Heavy structural construction including excavation, foundation, brickwork, and plaster.',
    longDescription: 'Grey Structure is the skeleton of your building. ApnaGharPk specializes in laying foundations, erecting RCC pillars, structural beams, high-tensile slab casting, double-wall brickwork, and top-tier plastering that ensures your home stands resilient against dampness, seismic shifts, and weathering.',
    benefits: [
      'Structural design approved by registered structural engineers',
      'Rigorous concrete compaction and water-curing management',
      'Termite proofing under the foundations and floors',
      'Premium grading of crush and sand (Sargodha/Margalla crush, Lawrencepur sand)'
    ],
    deliverables: [
      'Seismic-resistant RCC foundation, pillars, and roof slab',
      'First-class solid clay brick masonry walls',
      'Internal and external premium cement plastering',
      'Concealed conduit piping for electrical and plumbing'
    ]
  },
  {
    id: 'turnkey-construction',
    title: 'Turnkey Construction',
    icon: 'CheckCircle',
    description: 'Hassle-free, fully completed homes. We design, build, furnish, and handover the keys.',
    longDescription: 'The ultimate luxury experience: tell us your dream, and we hand over the keys to a finished paradise. This service integrates architectural modeling, structural construction, premium interior styling, plumbing/electrical fixtures, smart home automation, and landscaping with zero stress for you.',
    benefits: [
      'Zero oversight required; single point of accountability',
      'Fixed pricing models with no hidden material escalation charges',
      'Access to international import-quality fittings and Italian marbles',
      'Move-in ready status within pre-committed timelines'
    ],
    deliverables: [
      'Completed and painted luxury villa with architectural landscaping',
      'Fully fitted modular kitchens and designer wardrobes',
      'Premium Spanish/Italian tiling and sanitary ware installed',
      'Complete utility connections and smart home network configuration'
    ]
  },
  {
    id: 'architectural-design',
    title: 'Architectural Design',
    icon: 'Compass',
    description: 'Modern, Spanish, Classical, and Contemporary 2D/3D maps and layout plans.',
    longDescription: 'Our award-winning architects translate your lifestyle into spacious, beautifully lit physical realities. We specialize in custom layouts that maximize natural light, ventilation, and premium spatial flow while complying with local DHA, Bahria Town, and CDA bylaws.',
    benefits: [
      'Photorealistic 3D external and internal visual walk-throughs',
      'Highly optimized space planning to minimize useless corridors',
      'Bylaw-compliant planning for seamless society approval processes',
      'Energy-efficient design elements reducing heating/cooling loads'
    ],
    deliverables: [
      'Detailed 2D Submission drawing & architectural layout maps',
      '3D front elevation renders in high-definition',
      'Complete structural drawing set and electrical/plumbing schedules',
      'Laminated master blueprint set for site execution'
    ]
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    icon: 'Palette',
    description: 'Bespoke high-end custom interiors, lighting, cabinetry, and material selection.',
    longDescription: 'Bring life to your walls. Our interior specialists curate bespoke environments utilizing premium accent walls, custom false ceilings with indirect warm lighting, high-end marble/wooden floor combinations, modular kitchen systems, and custom timber work.',
    benefits: [
      'Fully customized mood boards and 3D interior visuals before starting',
      'Sourcing of premium local artisan woodwork and imported accessories',
      'Space-saving smart furniture integrations',
      'Ergonomic layout planning for maximum daily comfort'
    ],
    deliverables: [
      'Detailed 3D renders of living, dining, kitchens, and bedrooms',
      'False ceiling layouts, electrical elevations, and lighting plans',
      'Material specification sheet detailing brands, codes, and colors',
      'On-site supervision and execution of wood and fitting works'
    ]
  },
  {
    id: 'house-renovation',
    title: 'House Renovation',
    icon: 'RefreshCw',
    description: 'Transforming old structures into modern masterworks with modern elements.',
    longDescription: 'Give your legacy home a second life. Our renovation service updates aging grey structures, replaces old plumbing and electrical wires with safe modern standards, modernizes bathrooms, re-designs kitchens, and completely transforms front elevations to stunning contemporary profiles.',
    benefits: [
      'Adds immense equity value to older, depreciated residential assets',
      'Strengthening of existing pillars and structural walls',
      'Upgrades to modern, energy-efficient LED lighting and double-glazed windows',
      'Minimal disturbance during renovation process with clean staging'
    ],
    deliverables: [
      'Detailed survey report of structural integrity prior to design',
      '3D before-and-after comparison visualizations',
      'Complete replacement of plumbing, tiles, cabinets, and fixtures',
      'Fresh weather-sheet external and premium interior painting'
    ]
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    icon: 'Building2',
    description: 'A-grade commercial plazas, retail outlets, premium corporate offices and cafes.',
    longDescription: 'High-yield commercial spaces designed for maximum utility, heavy foot traffic, and corporate prominence. ApnaGharPk builds smart commercial plazas, high-end retail spaces, boutique offices, and restaurants featuring modern facades and commercial glass structures.',
    benefits: [
      'Highly optimized commercial spacing layouts yielding maximum rental ROI',
      'Integration of fire-fighting sprinkler systems and emergency exits',
      'High-capacity central air conditioning ducting and electrical load systems',
      'Durable, heavy-duty structural build engineered for commercial loads'
    ],
    deliverables: [
      'LDA/CDA/Society approved commercial submission files',
      'Completed commercial grey structure and external curtain glass walling',
      'Spacious high-capacity parking basements and lift structural shafts',
      'Move-in ready high-end office/retail finished units'
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Sale',
    icon: 'KeyRound',
    description: 'Premium plots, ready houses, and investment consulting in elite societies.',
    longDescription: 'Navigate Pakistan’s premium real estate landscape with expert guidance. We buy, sell, and build on prime residential and commercial plots across DHA Lahore/Karachi, Bahria Town, and CDA sectors, ensuring secure titles, clean documentation, and high-yield returns.',
    benefits: [
      '100% verified plot titles and zero-dispute asset assurance',
      'Exclusive off-market inventory of luxury homes and commercial corners',
      'Data-backed price trends and investment holding strategies',
      'End-to-end documentation transfer and society office facilitation'
    ],
    deliverables: [
      'Curated list of verified premium plots and built houses for purchase',
      'Professional evaluation and market analysis reports',
      'Detailed allocation and transfer files processing',
      'Immediate property handover with complete security keys'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'dha-6-spanish-villa',
    title: 'The Spanish Heritage Villa',
    location: 'DHA Phase 6, Lahore',
    area: '1 Kanal',
    type: 'Turnkey Construction',
    status: 'Completed',
    completionDate: 'May 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    droneImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    progressPercent: 100,
    materials: ['Maple Leaf OPC Cement', 'Amreli Steel G-60 Rebars', 'Imported Spanish Floor Tiles', 'Solid Ashwood Custom Main Door', 'Grohe Bath Fittings'],
    clientName: 'Brigadier (R) Tariq Mahmood',
    clientReview: 'ApnaGharPk built my dream home exactly how I wanted. Their transparency in material billing and strictly on-time handover is unmatched in Pakistan. Highly recommended!',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    beforeImage: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80', // raw site
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', // finished villa
    timeline: [
      { phase: 'Excavation & Termite Proofing', duration: '3 Weeks', status: 'completed', details: 'Completed soil excavation to 6ft depth and full subterranean spray.' },
      { phase: 'RCC Foundation & Plinth', duration: '4 Weeks', status: 'completed', details: 'Cast foundation with premium Margalla concrete crush.' },
      { phase: 'Grey Structure Walls & Slab Casting', duration: '12 Weeks', status: 'completed', details: 'Brickwork and dual RCC slab casting with strict water curing.' },
      { phase: 'Plumbing, Wiring & Plastering', duration: '6 Weeks', status: 'completed', details: 'Concealed copper wiring and PPRC plumbing with high pressure tests.' },
      { phase: 'Luxury Finishes & Paint', duration: '14 Weeks', status: 'completed', details: 'Imported Spanish tiling, solid wood doors, and weather sheet painting.' },
      { phase: 'Handover & Keys Celebration', duration: '1 Week', status: 'completed', details: 'Formal handover ceremony with client, certificates, and keys.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'bahria-town-contemporary',
    title: 'The Contemporary Minimalist Villa',
    location: 'Bahria Town, Islamabad',
    area: '10 Marla',
    type: 'House Construction',
    status: 'Completed',
    completionDate: 'February 2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    droneImage: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80',
    progressPercent: 100,
    materials: ['Bestway Cement', 'Amreli Steel G-60 Rebars', 'Porta Sanitary Ware', 'Pakistan Cables wiring', 'Kansai Weathercoat paint'],
    clientName: 'Dr. Faisal Shahzad',
    clientReview: 'Being an overseas Pakistani, I was worried about scams, but ApnaGharPk provided daily WhatsApp videos and structural drawings. Building with them was transparent and peaceful.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    timeline: [
      { phase: 'Excavation & Termite Proofing', duration: '2 Weeks', status: 'completed', details: 'Excavation completed and verified by Bahria Town inspectors.' },
      { phase: 'Foundation & Grey Structure', duration: '10 Weeks', status: 'completed', details: 'High-strength structural grey frame created and approved.' },
      { phase: 'Plaster & Electrical Piping', duration: '5 Weeks', status: 'completed', details: 'Smooth plaster coatings and internal electrical piping completed.' },
      { phase: 'Tiling & Interior Woodwork', duration: '8 Weeks', status: 'completed', details: 'Premium Turkish tiles and modern MDF wardrobes fabricated.' },
      { phase: 'Final Handover', duration: '1 Week', status: 'completed', details: 'Successful possession handed over.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'gulberg-commercial-hub',
    title: 'The Apex Corporate Plaza',
    location: 'Gulberg III, Lahore',
    area: '2 Kanal',
    type: 'Commercial Construction',
    status: 'In Progress',
    completionDate: 'December 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    droneImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    progressPercent: 65,
    materials: ['Fauji Cement', 'Mughal Steel G-60', 'Commercial Double-Glazed Glass Facade', 'Mitsubishi High-Speed Elevator Shafts'],
    clientName: 'Apex Developments Ltd.',
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    timeline: [
      { phase: 'Basement Piling & Shoring', duration: '6 Weeks', status: 'completed', details: 'Completed deep pile foundations to anchor 5 stories safely.' },
      { phase: 'Double Basement RCC Structures', duration: '8 Weeks', status: 'completed', details: 'Basements for parking cast and water-sealed.' },
      { phase: 'Ground to 4th Floor Framing', duration: '12 Weeks', status: 'completed', details: 'All floor columns and slabs completed up to top floor.' },
      { phase: 'Glass Facade & Masonry Walls', duration: '8 Weeks', status: 'in-progress', details: 'Installing high-performance structural double glazing.' },
      { phase: 'Internal MEP Finishes', duration: '10 Weeks', status: 'pending', details: 'Central HVAC piping and interior plaster structures.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const PROPERTIES: Property[] = [
  {
    id: 'prop-dha-6-ultra-luxury',
    title: '1 Kanal Brand New Ultra-Luxury Villa',
    price: '9.25 Crore',
    numericPrice: 92500000,
    location: 'DHA Phase 6, Lahore',
    bedrooms: 5,
    bathrooms: 6,
    area: '1 Kanal',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    droneImage: "",
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257592-4871e5f47d55?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80'
    ],
    walkthroughUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    amenities: ['Private Heated Pool', 'Smart Home Automation', 'Imported Italian Kitchen', 'Home Cinema Room', 'Solar Power Backup System', 'Servant Quarters'],
    floorPlan: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80', // detailed sketch feel
    description: 'This ultra-luxury architectural masterpiece in DHA Phase 6 Lahore represents the pinnacle of premium living. Designed with a gorgeous Spanish-Modern fusion elevation, it features imported Portuguese sandfaced marble, solid ashwood doors, 5 massive master bedrooms with Italian walk-in closets, fully loaded modular hot kitchen, custom automated central air, and a beautifully landscaped lawn with water fountain features. Ready to move in.',
    builderName: 'ApnaGharPk Elite'
  },
  {
    id: 'prop-bahria-islamabad-modern',
    title: '10 Marla Luxury Contemporary House',
    price: '4.85 Crore',
    numericPrice: 48500000,
    location: 'Bahria Town Phase 8, Islamabad',
    bedrooms: 4,
    bathrooms: 5,
    area: '10 Marla',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    droneImage: "",
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&w=800&q=80'
    ],
    walkthroughUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    amenities: ['Double Glazed Windows', 'Modern False Ceiling', 'Fitted Wardrobes', 'Rooftop Sitting Area', 'UPS & Gen Wiring', 'Imported Sanitary Fittings'],
    floorPlan: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'Beautifully designed 10 Marla minimalist contemporary villa in Bahria Town Islamabad. Featuring an elegant combination of concrete, wood cladding, and heavy glass frontage. High ceiling entrance foyer, Turkish marble floors, premium Grohe bath fixtures, and custom-designed acrylic sheets kitchen cabinet systems. Perfect for small families wanting high luxury on a moderate footprint.',
    builderName: 'ApnaGharPk Construction'
  },
  {
    id: 'prop-dha-rayas-penthouse',
    title: '3 Bed Luxury Apartment Overlooking Golf Course',
    price: '6.50 Crore',
    numericPrice: 65000000,
    location: 'DHA Raya, Lahore',
    bedrooms: 3,
    bathrooms: 4,
    area: '8 Marla',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80',
    droneImage: "",
    gallery: [
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'
    ],
    walkthroughUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    amenities: ['Direct Golf Course View', 'Gym & Health Club Access', '24/7 High Alert Security', 'Valet & Covered Parking', 'Central Heating & AC', 'Elevator Access Card'],
    floorPlan: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'An exclusive premium 3-bedroom penthouse apartment in the high-demand DHA Raya Lahore golf enclave. Unobstructed, breathtaking panoramic views of the championship 18-hole golf course. Finished with executive levels of wooden flooring, fully integrated imported appliances, and marble-clad master baths. Experience resort-level security and elite executive convenience.',
    builderName: 'DHA Raya Properties'
  }
];

export const VIDEOS: Video[] = [
  {
    id: 'vid-tour-1',
    title: 'Tour of a 1 Kanal Modern Spanish Masterpiece in DHA Lahore',
    category: 'House Tours',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '14:20',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vid-tips-1',
    title: 'How to Prevent Dampness & Seepage in Basement Foundations',
    category: 'Construction Tips',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '08:45',
    thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vid-rev-1',
    title: 'Client Review: Constructing 1 Kanal Turnkey House Overseas',
    category: 'Client Reviews',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '05:12',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vid-up-1',
    title: 'Grey Structure Progress Updates: Modern Commercial Plaza',
    category: 'Project Updates',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '11:30',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Brigadier (R) Tariq Mahmood',
    role: 'Retired Army Officer & Landowner',
    rating: 5,
    comment: 'The team at ApnaGharPk is extremely professional. I handed over my 1 Kanal DHA plot for Turnkey Construction, and they handled everything from maps to keys perfectly. Their transparency in invoicing and material testing reports won my trust.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    isGoogleReview: true
  },
  {
    id: 'rev-2',
    name: 'Zainab Fatima',
    role: 'Interior Designer & Client',
    rating: 5,
    comment: 'I requested ApnaGharPk to design and build our organic minimal interior for our newly renovated home. Their wood craftsmanship and plaster details are phenomenal. The project was completed within budget and with exceptional quality.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    isGoogleReview: true
  },
  {
    id: 'rev-3',
    name: 'Mian Amjad Raza',
    role: 'Commercial Developer',
    rating: 5,
    comment: 'For commercial plazas in Gulberg, structural durability and fire safety is paramount. ApnaGharPk structural engineers designed an incredibly solid basement and high column structure. Excellent team communication and daily app updates.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    isGoogleReview: false,
    isVideo: true,
    videoThumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-cost-estimation-2026',
    title: 'House Construction Cost in Pakistan (Complete 2026 Guide)',
    category: 'Budget Planning',
    excerpt: 'Detailed cost breakdown per square foot for A-Grade Grey Structure and turnkey finishes in Lahore, Islamabad, and Karachi.',
    content: `Building a home is one of the most significant investments you will ever make in Pakistan. With fluctuating material rates, planning your budget properly is critical to prevent mid-way project halts. This article breaks down actual raw materials costs, labour charges, and finishing expenses.

### 1. Grey Structure Cost Estimations
Grey structure covers the foundational slab, excavation, brickwork, RCC pillars, structural roof slabs, plastering, and internal copper wiring conduits.
- **A-Grade Material Per Sq. Ft. (2026)**: Approximately PKR 2,400 to PKR 2,750 per sq. ft.
- **Key Raw Materials**: Amreli/Mughal steel grade-60 rebars, Maple Leaf/Bestway cement, Margalla concrete crush, and red clay bricks.

### 2. Finishing/Turnkey Cost Estimations
Finishing takes your raw grey brick structure and transforms it into a gorgeous luxury home using Spanish tile floorings, solid ash wood doors, kitchen cabinets, and sanitary wares.
- **A-Grade Finish Per Sq. Ft. (2026)**: Ranges from PKR 2,500 to PKR 4,000+ depending on customized imports.

### 3. Practical Tips to Avoid Cost Overruns
- **Freeze the Design Early**: Any modification in maps after brick-laying causes severe wastes.
- **Hire Single Turnkey Builders**: Independent subcontracting leads to heavy coordination delays and pricing inflation.`,
    readTime: '6 Min Read',
    date: 'June 15, 2026',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    author: 'Engr. Haris Mumtaz (Lead Structural Engineer)',
    tags: ['Construction Cost', 'Budgeting', 'Grey Structure', '2026 Guide']
  },
  {
    id: 'art-dampness-basement',
    title: 'How to Permanent Termite-Proof & Waterproof Your Foundations',
    category: 'Construction Tips',
    excerpt: 'Crucial structural steps during soil excavation to safeguard your home from moisture damage and termite attacks forever.',
    content: `Foundational seepage is the primary cause of plaster peeling and paint peeling in Pakistani homes. Correcting dampness post-construction is three times more expensive than waterproofing during brick excavation.

### 1. Subterranean Termite Treatment
Before laying the concrete blinding, the entire soil bed must be chemical-sprayed by licensed pest control. We use industry-standard chlorpyrifos solutions that create a chemical shield blocking termites for up to 15 years.

### 2. Bitumen & Polythene Damp Proofing
Applying twin coats of premium industrial hot bitumen followed by high-gauge polythene sheets over the foundation walls blocks groundwater capillary action completely.

### 3. Damp Proof Course (DPC)
Ensure your contractor casts a 2-inch thick RCC DPC with high-performance water repellents (like Sika) at the plinth level. This simple DPC barrier is what saves your upper living rooms from basement ground seepage.`,
    readTime: '8 Min Read',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
    author: 'Engr. Noman Shah',
    tags: ['Waterproofing', 'Foundation', 'Construction Tips', 'Seepage']
  },
  {
    id: 'art-minimalist-trends',
    title: 'Modern Minimalist vs Spanish elevation: Which is better for you?',
    category: 'Design Ideas',
    excerpt: 'A detailed aesthetic and cost comparison between classical Spanish arch designs and contemporary glass elevations.',
    content: `Pakistani housing societies like DHA and Bahria Town are experiencing a gorgeous architectural shift. Homeowners are torn between the classic grandeur of Spanish elevations and the neat, clean profiles of contemporary minimalism.

### The Classic Spanish Villa
- **Aesthetics**: Characterized by beautiful curved arches, textured terracotta roof tiles, wrought-iron balcony grills, and grand majestic entries.
- **Pros**: Ageless curb appeal, holds its aesthetic value well over decades, highly structural.
- **Cons**: High dust retention on arched ledges (major factor in dusty cities), requires specialized handcrafted plaster artisans.

### The Modern Minimalist House
- **Aesthetics**: Features clean straight horizontal lines, massive double-glazed floor-to-ceiling glass windows, wood-textured siding, and cantilevered structures.
- **Pros**: Breathtaking natural indoor lighting, sleek and uncluttered atmosphere, massive terrace spaces.
- **Cons**: Requires premium double glazing to prevent thermal heating during severe Pakistani summers.`,
    readTime: '5 Min Read',
    date: 'April 10, 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    author: 'Arch. Fatima Al-Vi (Senior Architectural Designer)',
    tags: ['Architecture', 'Spanish Design', 'Minimalist', 'Home Elevating']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the current construction cost per square foot in Lahore/Islamabad?',
    answer: 'As of mid-2026, an A-Grade Grey Structure construction costs between PKR 2,400 to PKR 2,750 per square foot. A complete high-end Turnkey Luxury construction costs between PKR 5,000 to PKR 6,500+ per square foot, which includes imported Spanish tiling, kitchen fixtures, bath wares, structural certifications, and complete wooden works.',
    category: 'Pricing'
  },
  {
    id: 'faq-2',
    question: 'How long does it take to construct a 1 Kanal house from scratch?',
    answer: 'A standard 1 Kanal (4500 sq. ft. covered area) house takes approximately 12 to 15 months to complete on a Turnkey basis. Grey structure finishes are achieved in 6 to 8 months, while the remaining time is dedicated to plaster curing, detailed wooden cabinetry, Spanish tile installations, sanitary setups, and exterior elevations.',
    category: 'Construction'
  },
  {
    id: 'faq-3',
    question: 'Can you build my house while I am residing overseas?',
    answer: 'Absolutely! More than 60% of ApnaGharPk clients are overseas Pakistanis living in the US, UK, Middle East, and Canada. We provide a state-of-the-art client portal with daily high-definition site videos, material invoice verification sheets, and weekly structural progress reports. All payments are done through bank transfers with complete transparency.',
    category: 'Construction'
  },
  {
    id: 'faq-4',
    question: 'Do you charge separately for architectural maps and structural drawings?',
    answer: 'If you choose ApnaGharPk for your complete House Construction (Turnkey or Grey Structure), our premium 2D maps, 3D elevations, structural engineering designs, and regulatory submission drawings are 100% FREE as part of our comprehensive package.',
    category: 'Pricing'
  },
  {
    id: 'faq-5',
    question: 'What brands of materials do you use for A-Grade quality construction?',
    answer: 'We maintain strict agreements with premium brands: Amreli Steel or Mughal Steel (Grade 60 structural bars), Maple Leaf or Fauji Cement, Pakistan Cables (A-grade electric wiring), Porta or Grohe sanitary fixtures, Berger or Jotun paints, and custom premium Margalla crush with clean Lawrencepur sand.',
    category: 'Construction'
  }
];

export const CAREERS: Career[] = [
  {
    id: 'car-1',
    title: 'Senior Civil Site Engineer',
    department: 'Projects & Construction',
    type: 'Full-time',
    location: 'DHA Phase 6 Office, Lahore',
    salaryRange: 'PKR 120,000 - 180,000 / month',
    description: 'We are seeking an experienced civil engineer with a strong track record of managing residential villa projects from foundation to final luxury finishes. You will oversee material delivery, maintain strict quality checklists, and manage skilled masonry and finishing crews.',
    requirements: [
      'B.Sc. in Civil Engineering from a PEC-registered university',
      'Minimum 5+ years of practical field experience in residential high-end villa construction',
      'In-depth knowledge of concrete pouring, brickwork testing, and structural safety',
      'Excellent leadership, communication, and scheduling skills'
    ]
  },
  {
    id: 'car-2',
    title: 'Senior Architectural Visualizer',
    department: 'Architecture & Design',
    type: 'Full-time',
    location: 'Bahria Town, Islamabad',
    salaryRange: 'PKR 90,000 - 140,000 / month',
    description: 'Join our award-winning design studio to construct photorealistic 3D external and internal animations. You will collaborate directly with lead architects to draft high-contrast elevations for Spanish, Contemporary, and Classical luxury villas.',
    requirements: [
      'Diploma/Degree in Architecture, Fine Arts, or related field',
      '3+ years of professional visualization experience with 3ds Max + V-Ray/Corona or Lumion',
      'Strong portfolio showcasing modern concrete and wood textures, natural lighting, and landscaping details',
      'Ability to meet strict bylaws and submit accurate society files'
    ]
  }
];
