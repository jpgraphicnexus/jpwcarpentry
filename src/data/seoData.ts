export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl: string;
  ogImage?: string;
}

export interface SEOConfig {
  [key: string]: SEOData;
}

export const seoConfig: SEOConfig = {
  // Homepage
  '/': {
    title: 'JPW Carpentry & Building - Professional Carpentry Services Hampshire | 20+ Years Experience',
    description: 'Expert carpentry and building services across Hampshire. Kitchen renovations, home extensions, custom joinery. Serving Portsmouth, Chichester, Havant. Free quotes.',
    keywords: 'carpentry Hampshire, carpenter Portsmouth, kitchen renovation, home extension, building services Hampshire, custom joinery',
    canonicalUrl: '/',
    ogImage: '/assets/carpenter-working.jpg'
  },

  // About Page
  '/about': {
    title: 'About JPW Carpentry - Master Carpenter James Wilson | Hampshire Building Services',
    description: 'Meet James Wilson, master carpenter with 20+ years experience. Family-run business serving Hampshire with quality craftsmanship and reliable service.',
    keywords: 'James Wilson carpenter, JPW Carpentry about, Hampshire carpenter, master craftsman, family business',
    canonicalUrl: '/about',
    ogImage: '/assets/carpenter-working.jpg'
  },

  // Services Overview
  '/services': {
    title: 'Carpentry Services Hampshire - Kitchen Renovations, Home Extensions | JPW Carpentry',
    description: 'Complete carpentry and building services across Hampshire. Kitchen renovations, home extensions, loft conversions, custom joinery. Professional project management.',
    keywords: 'carpentry services Hampshire, kitchen renovation, home extension, loft conversion, building services, project management',
    canonicalUrl: '/services',
    ogImage: '/assets/carpenter-working.jpg'
  },

  // Service Pages
  '/services/kitchen-renovations': {
    title: 'Kitchen Renovations Hampshire - Custom Kitchen Design & Installation | JPW Carpentry',
    description: 'Transform your kitchen with expert renovation services. Custom design, quality installation, complete project management. Serving Portsmouth, Chichester, Havant.',
    keywords: 'kitchen renovation Hampshire, kitchen design Portsmouth, custom kitchens, kitchen installation, Hampshire kitchen specialists',
    canonicalUrl: '/services/kitchen-renovations',
    ogImage: '/assets/kitchen-renovation.webp'
  },

  '/services/small-carpentry-jobs': {
    title: 'Small Carpentry Jobs Hampshire - Shelving, Repairs & Custom Work | JPW Carpentry',
    description: 'Professional small carpentry jobs across Hampshire. Shelving, door fitting, built-in storage, repairs. No job too small. Quick turnaround, quality results.',
    keywords: 'small carpentry jobs Hampshire, shelving installation, door fitting, built-in storage, carpentry repairs, handyman services',
    canonicalUrl: '/services/small-carpentry-jobs',
    ogImage: '/assets/small-carpentry.webp'
  },

  '/services/home-renovations': {
    title: 'Home Renovations Hampshire - Complete House Refurbishment | JPW Carpentry',
    description: 'Complete home renovation services across Hampshire. From single rooms to whole house refurbishments. Expert project management and quality craftsmanship.',
    keywords: 'home renovation Hampshire, house refurbishment Portsmouth, complete renovation, property renovation, home improvement Hampshire',
    canonicalUrl: '/services/home-renovations',
    ogImage: '/assets/home-renovation.webp'
  },

  '/services/general-building-works': {
    title: 'General Building Works Hampshire - Construction & Structural Services | JPW Carpentry',
    description: 'Comprehensive building services including extensions, structural work, timber frame construction. Professional builders serving Hampshire communities.',
    keywords: 'general building works Hampshire, construction services Portsmouth, building contractor, extensions Hampshire, structural work',
    canonicalUrl: '/services/general-building-works',
    ogImage: '/assets/general-building.webp'
  },

  // Location Pages
  '/portsmouth-carpentry-services': {
    title: 'Carpenter in Portsmouth - Professional Carpentry Services | JPW Carpentry',
    description: 'Expert carpenter in Portsmouth, Hampshire. Kitchen fitting, built-in storage, home extensions, bespoke joinery. Serving Southsea, Old Portsmouth. Free quotes.',
    keywords: 'Portsmouth carpenter, carpentry services Portsmouth, kitchen fitting Portsmouth, home extensions Portsmouth, Southsea carpenter',
    canonicalUrl: '/portsmouth-carpentry-services',
    ogImage: '/assets/carpenter-working.jpg'
  },

  '/chichester-carpentry-services': {
    title: 'Carpenter in Chichester - Heritage Property Specialists | JPW Carpentry',
    description: 'Expert carpenter in Chichester, West Sussex. Conservation Area specialists, period property renovations, bespoke joinery. Cathedral city expertise.',
    keywords: 'Chichester carpenter, carpentry services Chichester, Conservation Area Chichester, period property renovation, heritage carpentry',
    canonicalUrl: '/chichester-carpentry-services',
    ogImage: '/assets/carpenter-working.jpg'
  },

  '/havant-carpentry-services': {
    title: 'Carpenter in Havant - Family Home Specialists | JPW Carpentry',
    description: 'Professional carpenter in Havant, Hampshire. Family-focused carpentry services, kitchen renovations, built-in storage. Serving Waterlooville, Emsworth.',
    keywords: 'Havant carpenter, carpentry services Havant, family home improvements, kitchen renovation Havant, Waterlooville carpenter',
    canonicalUrl: '/havant-carpentry-services',
    ogImage: '/assets/carpenter-working.jpg'
  },

  '/gosport-carpentry-services': {
    title: 'Carpenter in Gosport - Marine & Coastal Property Specialists | JPW Carpentry',
    description: 'Expert carpenter in Gosport, Hampshire. Marine-grade carpentry for coastal properties, boat storage solutions, naval family services. Waterfront expertise.',
    keywords: 'Gosport carpenter, marine carpentry, coastal property renovation, boat storage, naval family services, waterfront carpentry',
    canonicalUrl: '/gosport-carpentry-services',
    ogImage: '/assets/carpenter-working.jpg'
  },

  '/fareham-carpentry-services': {
    title: 'Carpenter in Fareham - Executive Property Specialists | JPW Carpentry',
    description: 'Premium carpenter in Fareham, Hampshire. Executive property renovations, luxury kitchens, bespoke joinery. High-end carpentry for discerning clients.',
    keywords: 'Fareham carpenter, executive carpentry, luxury kitchen Fareham, premium joinery, high-end renovation Fareham',
    canonicalUrl: '/fareham-carpentry-services',
    ogImage: '/assets/carpenter-working.jpg'
  },

  // Past Works
  '/past-works': {
    title: 'Our Work Portfolio - Carpentry Projects Hampshire | JPW Carpentry',
    description: 'View our portfolio of completed carpentry projects across Hampshire. Kitchen renovations, extensions, custom joinery. Quality craftsmanship examples.',
    keywords: 'carpentry portfolio Hampshire, completed projects, kitchen renovation examples, home extension gallery, custom joinery showcase',
    canonicalUrl: '/past-works',
    ogImage: '/assets/carpenter-working.jpg'
  },

  // Blog
  '/blog': {
    title: 'Expert Building & Carpentry Advice Blog | JPW Carpentry',
    description: 'Professional insights on home improvements, building regulations, and carpentry projects. Expert advice from experienced builders serving Hampshire.',
    keywords: 'building advice, carpentry tips, home improvement blog, building regulations, carpentry insights Hampshire',
    canonicalUrl: '/blog',
    ogImage: '/assets/carpenter-working.jpg'
  }
};

// Default SEO data for unknown routes
export const defaultSEO: SEOData = {
  title: 'JPW Carpentry & Building - Professional Carpentry Services Hampshire',
  description: 'Expert carpentry and building services across Hampshire. Kitchen renovations, home extensions, custom joinery. Professional craftsmanship with 20+ years experience.',
  keywords: 'carpentry Hampshire, building services, kitchen renovation, home extension, custom joinery',
  canonicalUrl: '/',
  ogImage: '/assets/carpenter-working.jpg'
};

// Function to get SEO data for blog posts
export const getBlogPostSEO = (slug: string, title: string, excerpt: string, tags: string[]): SEOData => {
  return {
    title: `${title} | JPW Carpentry Blog`,
    description: excerpt.length > 160 ? excerpt.substring(0, 157) + '...' : excerpt,
    keywords: tags.join(', '),
    canonicalUrl: `/blog/${slug}`,
    ogImage: '/assets/carpenter-working.jpg'
  };
};