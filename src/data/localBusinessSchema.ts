export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  areaServed: string[];
  serviceArea: {
    "@type": string;
    geoMidpoint: {
      "@type": string;
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
  hasOfferCatalog: {
    "@type": string;
    name: string;
    itemListElement: Array<{
      "@type": string;
      itemOffered: {
        "@type": string;
        name: string;
        description: string;
      };
    }>;
  };
  openingHours: string[];
  priceRange: string;
  paymentAccepted: string[];
  currenciesAccepted: string;
  foundingDate: string;
  founder: {
    "@type": string;
    name: string;
  };
  hasMap?: string;
  sameAs: string[];
}

// Base business information with REAL GBP coordinates
const baseBusinessInfo = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JPW Carpentry & Building",
  url: "https://jpwcarpentry.com",
  telephone: "07399594658",
  email: "joewhitfield@jpwcarpentrybuilding.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "", // Hidden for Service Area Business
    addressLocality: "Hampshire",
    addressRegion: "Hampshire",
    postalCode: "",
    addressCountry: "GB"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.9448858,  // REAL GBP COORDINATES
    longitude: -0.5723678  // REAL GBP COORDINATES
  },
  areaServed: [
    "Portsmouth",
    "Chichester", 
    "Havant",
    "Gosport",
    "Fareham",
    "Hampshire",
    "West Sussex",
    "Southsea",
    "Waterlooville",
    "Emsworth"
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 50.9448858,  // REAL GBP COORDINATES
      longitude: -0.5723678  // REAL GBP COORDINATES
    },
    geoRadius: "25000"
  },
  openingHours: [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-16:00"
  ],
  priceRange: "££",
  paymentAccepted: ["Cash", "Bank Transfer", "Cheque"],
  currenciesAccepted: "GBP",
  foundingDate: "2004",
  founder: {
    "@type": "Person",
    name: "James Wilson"
  },
  hasMap: "https://www.google.com/maps/place/JPW+Carpentry+%26+Building/@50.9448857,-0.5723678,10z/data=!3m1!4b1!4m6!3m5!1s0x23ad25a9271cec8d:0xc75c49b807a6e895!8m2!3d50.9448858!4d-0.5723678!16s%2Fg%2F11zj4tk8s2",
  sameAs: [
    "https://www.facebook.com/jpwcarpentry",
    "https://www.instagram.com/jpwcarpentry",
    "https://www.checkatrade.com/trades/jpwcarpentry1129351"
  ]
};

// Homepage schema
export const homepageSchema: LocalBusinessSchema = {
  ...baseBusinessInfo,
  description: "Professional carpentry and building services across Hampshire including Portsmouth, Chichester, Havant. Kitchen renovations, home extensions, loft conversions. 20+ years experience, fully insured.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Carpentry & Building Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kitchen Renovations Hampshire",
          description: "Complete kitchen transformations with custom design, quality installation, and project management across Hampshire"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Extensions Hampshire",
          description: "Single and two-storey extensions, loft conversions, and home additions with planning permission support"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Built-in Storage Solutions",
          description: "Custom wardrobes, shelving, and storage solutions designed for Hampshire homes"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Small Carpentry Jobs",
          description: "Door fitting, shelving installation, repairs, and bespoke woodwork projects"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Building Works",
          description: "Structural work, timber frame construction, roofing, and comprehensive building services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Loft Conversions",
          description: "Transform unused loft space into bedrooms, offices, or storage areas with building regulations compliance"
        }
      }
    ]
  }
};

// Service-specific schemas
export const kitchenRenovationsSchema: LocalBusinessSchema = {
  ...baseBusinessInfo,
  description: "Expert kitchen renovation services across Hampshire. Custom design, quality installation, all trades included. Serving Portsmouth, Chichester, Havant with 20+ years experience.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kitchen Renovation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Kitchen Design Hampshire",
          description: "Bespoke kitchen design and planning service with 3D visualization and material selection"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kitchen Installation Portsmouth",
          description: "Professional kitchen fitting including plumbing, electrical, and tiling work"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kitchen Project Management",
          description: "Complete project oversight from design to completion with coordinated trades"
        }
      }
    ]
  }
};

export const homeRenovationsSchema: LocalBusinessSchema = {
  ...baseBusinessInfo,
  description: "Complete home renovation services across Hampshire. Extensions, loft conversions, full refurbishments. Expert project management serving Portsmouth, Chichester, Havant areas.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Renovation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Extensions Hampshire",
          description: "Single and two-storey extensions with planning permission support and building regulations compliance"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Loft Conversions Portsmouth",
          description: "Transform loft space into bedrooms, offices, or storage with structural calculations and building control"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete House Refurbishment",
          description: "Full property renovation from planning to completion with trusted subcontractor network"
        }
      }
    ]
  }
};

export const smallCarpentrySchema: LocalBusinessSchema = {
  ...baseBusinessInfo,
  description: "Small carpentry jobs and repairs across Hampshire. Door fitting, shelving, built-in storage, bespoke woodwork. No job too small, serving Portsmouth, Chichester, Havant.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Small Carpentry Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Built-in Storage Hampshire",
          description: "Custom wardrobes, shelving, and storage solutions for Hampshire homes"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Door Fitting Portsmouth",
          description: "Professional door hanging, repair, and installation services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bespoke Woodwork",
          description: "Custom furniture, media units, and handcrafted wooden features"
        }
      }
    ]
  }
};

export const generalBuildingSchema: LocalBusinessSchema = {
  ...baseBusinessInfo,
  description: "General building works across Hampshire. Structural alterations, timber frame construction, roofing, groundwork. Professional builders serving Portsmouth, Chichester, Havant.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "General Building Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Structural Building Work Hampshire",
          description: "Load-bearing alterations, beam installation, foundation work with building regulations compliance"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Timber Frame Construction",
          description: "Traditional and modern timber frame structures, garden buildings, and outbuildings"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Building Project Management",
          description: "Complete project oversight with trusted subcontractor network and quality assurance"
        }
      }
    ]
  }
};

// Service type mapping
export const serviceSchemas = {
  'kitchen-renovations': kitchenRenovationsSchema,
  'home-renovations': homeRenovationsSchema,
  'small-carpentry-jobs': smallCarpentrySchema,
  'general-building-works': generalBuildingSchema
} as const;

export type ServiceType = keyof typeof serviceSchemas;