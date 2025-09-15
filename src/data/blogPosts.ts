export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  lastModified: string;
  category: string;
  tags: string[];
  featuredImage: string;
  imageAlt: string;
  readTime: number;
  metaDescription: string;
  featured: boolean;
  location?: string; // For local SEO posts
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: "local-projects",
    name: "Local Projects",
    slug: "local-projects",
    description: "Showcasing our work across local communities",
    color: "bg-golden"
  },
  {
    id: "how-to-guides",
    name: "How-To Guides",
    slug: "how-to-guides", 
    description: "Expert advice and tutorials for homeowners",
    color: "bg-primary"
  },
  {
    id: "industry-insights",
    name: "Industry Insights",
    slug: "industry-insights",
    description: "Latest trends and regulations in construction",
    color: "bg-muted"
  },
  {
    id: "company-news",
    name: "Company News",
    slug: "company-news",
    description: "Updates from the JPW Carpentry team",
    color: "bg-secondary"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "loft-conversion-chichester-2024",
    title: "Complete Guide to Loft Conversions in Chichester: Costs, Planning & Building Regulations 2024",
    slug: "loft-conversion-chichester-guide-2024",
    excerpt: "Everything Chichester homeowners need to know about loft conversions, from planning permission to building regulations, with real local project costs and timelines.",
    content: `# Complete Guide to Loft Conversions in Chichester: Costs, Planning & Building Regulations 2024

*Last updated: December 2024 | Reading time: 8 minutes*

If you're a homeowner in Chichester looking to add valuable living space without the expense of moving house, a loft conversion could be the perfect solution. With property prices continuing to rise across West Sussex, converting your unused loft space offers excellent return on investment while creating the extra room your family needs.

## Why Loft Conversions Are Popular in Chichester

Chichester's mix of Victorian terraces, 1930s semis, and modern developments makes it ideal for loft conversions. The city's proximity to the South Downs National Park means planning restrictions can be strict, but most residential properties have excellent potential for loft conversion without requiring planning permission.

**Key benefits for Chichester homeowners:**
- Add 15-20% to your property value
- Create additional bedrooms for growing families
- Avoid the stress and cost of moving house
- Utilize existing unused space efficiently
- Most conversions fall under Permitted Development Rights

## Types of Loft Conversions Suitable for Chichester Properties

### Velux Loft Conversions
**Best for:** Most Chichester properties, especially terraced houses
**Cost range:** £15,000 - £25,000
**Timeline:** 4-6 weeks

Velux conversions use roof windows instead of dormers, making them the most cost-effective option. Perfect for creating bedrooms or home offices in Chichester's period properties where maintaining the roofline is important.

### Rear Dormer Conversions  
**Best for:** Semi-detached and detached houses
**Cost range:** £25,000 - £45,000
**Timeline:** 6-8 weeks

Single-storey rear dormers are popular in Chichester suburbs like Summersdale and Fishbourne. They provide maximum headroom and floor space while typically falling under Permitted Development Rights.

### Side Return Conversions
**Best for:** End-of-terrace properties
**Cost range:** £35,000 - £55,000  
**Timeline:** 8-12 weeks

Common in areas like Whyke and St. Pancras, these conversions extend into the side return space, creating substantial additional room.

## Chichester District Council Planning Requirements

### Permitted Development Rights
Most loft conversions in Chichester fall under Permitted Development Rights, meaning no planning permission is required if:

- Volume increase doesn't exceed 40 cubic metres (terraced houses) or 50 cubic metres (detached/semi-detached)
- No extension beyond the existing roof slope on the front elevation
- Side-facing windows are obscure-glazed
- Materials match the existing house where feasible
- Height increase doesn't exceed 150mm

### When You Need Planning Permission
Planning permission is required for:
- Properties in Conservation Areas (including parts of Chichester city centre)
- Listed buildings
- Conversions exceeding Permitted Development limits
- Front-facing dormers
- Properties with existing extensions that use up permitted development allowance

**Tip:** Chichester District Council's planning portal provides pre-application advice for £150, which can save time and money if your project is complex.

## Building Regulations for Chichester Loft Conversions

All loft conversions require Building Regulations approval, regardless of planning permission status. Chichester District Council Building Control charges:

- **Plan submission:** £200-£400
- **Inspection fees:** £300-£600
- **Total typical cost:** £500-£1,000

### Key Building Regulations Requirements:

**Structural Safety**
- Structural calculations for floor strengthening
- Beam sizing for load-bearing modifications
- Foundation assessment for additional weight

**Fire Safety**
- Escape windows in bedrooms (450mm x 450mm minimum opening)
- Fire-resistant doors and partitions
- Smoke alarms on all floors

**Insulation Standards**
- Roof insulation: U-value of 0.16 W/m²K or better
- Floor insulation between existing ceiling joists
- Thermal bridging considerations

**Staircase Requirements**
- Minimum headroom: 1.9m
- Maximum pitch: 42 degrees
- Handrails and balustrading to current standards

## Real Chichester Loft Conversion Costs (2024)

Based on our recent projects across Chichester and surrounding villages:

### Budget Velux Conversion (Bedroom + Storage)
- **Location:** Whyke terrace house
- **Size:** 25m² usable space
- **Features:** 2 Velux windows, basic insulation, carpet flooring
- **Cost:** £18,500
- **Timeline:** 5 weeks

### Mid-Range Rear Dormer (Bedroom + En-suite)
- **Location:** Summersdale semi-detached  
- **Size:** 35m² usable space
- **Features:** Rear dormer, en-suite shower room, built-in wardrobes
- **Cost:** £32,000
- **Timeline:** 7 weeks

### Premium Side Return Conversion (Master Suite)
- **Location:** St. Pancras end-terrace
- **Size:** 45m² usable space  
- **Features:** Side return extension, luxury en-suite, walk-in wardrobe, underfloor heating
- **Cost:** £48,500
- **Timeline:** 10 weeks

## Choosing the Right Contractor in Chichester

### Essential Checks:
- **Local experience:** Look for contractors with Chichester project portfolios
- **Building Control relationships:** Established contractors work smoothly with Chichester Building Control
- **Insurance:** Minimum £2 million public liability
- **Guarantees:** Structural work should carry 10-year guarantee
- **References:** Recent local customers willing to provide feedback

### Red Flags:
- Door-to-door sales approaches
- Requests for large upfront payments
- No fixed address or local presence
- Pressure to sign immediately
- Quotes significantly below market rate

## Timeline for Chichester Loft Conversions

### Pre-Construction Phase (2-4 weeks)
- Initial survey and design
- Structural calculations
- Building Regulations submission
- Material ordering
- Access arrangements

### Construction Phase (4-12 weeks depending on complexity)
- **Week 1-2:** Structural work, floor strengthening
- **Week 3-4:** Roof modifications, dormer construction
- **Week 5-6:** Insulation, plasterboard, first fix electrics/plumbing
- **Week 7-8:** Plastering, second fix, flooring
- **Week 9-10:** Decoration, final fixtures
- **Week 11-12:** Snagging, Building Control final inspection

## Maximizing Your Investment

### Design Tips for Chichester Properties:
- **Natural light:** Maximize south-facing windows for year-round brightness
- **Storage:** Built-in solutions work best in sloped ceiling areas  
- **Heating:** Extend existing central heating or consider underfloor heating
- **Access:** Ensure staircase design complements existing house style

### Adding Value:
- En-suite bathrooms add more value than additional reception rooms
- Quality insulation reduces energy bills and increases comfort
- Professional decoration and quality fixtures maximize appeal
- Consider future needs (home office space increasingly valuable)

## Common Challenges in Chichester Properties

### Victorian Terraces:
- **Issue:** Limited headroom in older properties
- **Solution:** Lowering ceiling below or raising roof height slightly
- **Cost impact:** Additional £3,000-£5,000

### 1930s Semi-Detached:
- **Issue:** Purlin and strut roof construction
- **Solution:** Steel beam installation to remove internal supports  
- **Cost impact:** Additional £2,000-£4,000

### Modern Properties:
- **Issue:** Trussed rafter roofs
- **Solution:** New structural framework, more complex but achievable
- **Cost impact:** Additional £4,000-£8,000

## Getting Started: Your Next Steps

1. **Measure your loft space** - Minimum 2.2m headroom needed for comfortable conversion
2. **Check your roof type** - Affects complexity and cost
3. **Consider your needs** - Bedroom, office, or multi-purpose space?
4. **Set realistic budget** - Include 10-15% contingency for unexpected issues
5. **Get multiple quotes** - Compare like-for-like specifications
6. **Check credentials** - Verify insurance, guarantees, and local references

## Why Choose JPW Carpentry for Your Chichester Loft Conversion

With over 20 years of experience in Chichester and West Sussex, we understand the unique challenges of local properties. Our team has completed over 150 loft conversions across the area, from Victorian terraces in the city centre to modern developments in Tangmere and Boxgrove.

**Our Chichester loft conversion service includes:**
- Free initial consultation and feasibility assessment
- Full project management from design to completion
- All Building Regulations submissions and liaison
- Structural engineer reports and calculations
- 10-year structural guarantee
- Fixed-price quotations with no hidden extras

## Ready to Transform Your Loft?

Contact JPW Carpentry today for your free loft conversion consultation. We'll assess your property's potential, discuss your requirements, and provide a detailed quotation with no obligation.

**Call us on 07399594658 or email joewhitfield@jpwcarpentrybuilding.com to book your free survey.**

*Serving Chichester, Bognor Regis, Littlehampton, and surrounding West Sussex villages.*

---

*This guide is based on current Building Regulations and planning policies as of December 2024. Always consult with qualified professionals and local authorities for project-specific advice.*`,
    author: "James Wilson",
    publishDate: "2024-12-15",
    lastModified: "2024-12-15", 
    category: "how-to-guides",
    tags: ["loft conversion", "chichester", "building regulations", "planning permission", "home improvement"],
    featuredImage: "/src/assets/modern-building.jpg",
    imageAlt: "Modern loft conversion in Chichester showing dormer windows and quality finishes",
    readTime: 8,
    metaDescription: "Complete guide to loft conversions in Chichester 2024. Costs, planning permission, building regulations, and local contractor advice for West Sussex homeowners.",
    featured: true,
    location: "Chichester"
  },
  {
    id: "kitchen-extension-planning-2024",
    title: "Kitchen Extensions in West Sussex: Planning Permission Guide for 2024",
    slug: "kitchen-extension-planning-west-sussex-2024",
    excerpt: "Navigate planning permission for kitchen extensions in West Sussex. Complete guide covering permitted development rights, costs, and local authority requirements.",
    content: `# Kitchen Extensions in West Sussex: Planning Permission Guide for 2024

Planning a kitchen extension in West Sussex? Understanding the planning requirements and building regulations is crucial for a successful project. This comprehensive guide covers everything you need to know about extending your kitchen in 2024.

## Permitted Development Rights in West Sussex

Most single-storey rear extensions fall under Permitted Development Rights, meaning you won't need planning permission if your extension meets specific criteria:

- Maximum 6 metres for detached houses
- Maximum 4 metres for semi-detached and terraced houses  
- No higher than 4 metres to the eaves
- Materials should be similar to the existing house

## When Planning Permission is Required

You'll need full planning permission for:
- Extensions exceeding Permitted Development limits
- Side return extensions over 3 metres wide
- Two-storey extensions
- Properties in Conservation Areas or with Article 4 directions

## Building Regulations for Kitchen Extensions

All extensions require Building Regulations approval, covering:
- Structural safety and foundations
- Insulation and energy efficiency
- Ventilation and electrical safety
- Drainage and waste connections

## Cost Breakdown for West Sussex Kitchen Extensions

**Single-storey rear extension (20m²):**
- Basic specification: £25,000-£35,000
- Mid-range finishes: £35,000-£50,000
- High-end specification: £50,000-£70,000

**Side return extension (15m²):**
- Basic specification: £30,000-£40,000
- Mid-range finishes: £40,000-£55,000
- High-end specification: £55,000-£75,000

## Design Considerations

### Maximising Natural Light
- Bi-fold doors to the garden
- Roof lights and skylights
- Large windows where planning permits

### Creating Flow
- Open-plan layouts
- Kitchen islands for social cooking
- Seamless indoor-outdoor connection

### Storage Solutions
- Floor-to-ceiling units
- Integrated appliances
- Pantry spaces in larger extensions

## Choosing Your Contractor

Select contractors with:
- Local West Sussex experience
- Portfolio of similar projects
- Full insurance and guarantees
- References from recent clients

## Timeline and Process

**Planning Phase (4-8 weeks):**
- Design development
- Planning/Building Regulations submission
- Approvals and conditions

**Construction Phase (8-12 weeks):**
- Foundations and structure
- Roof and weatherproofing
- First fix services
- Second fix and finishes

Ready to start your kitchen extension project? Contact JPW Carpentry for expert guidance and a free consultation. Call us on 07399594658 or email joewhitfield@jpwcarpentrybuilding.com.`,
    author: "James Wilson",
    publishDate: "2024-12-10",
    lastModified: "2024-12-10",
    category: "how-to-guides", 
    tags: ["kitchen extension", "west sussex", "planning permission", "building regulations"],
    featuredImage: "/src/assets/office-interior.jpg",
    imageAlt: "Modern kitchen extension in West Sussex with bi-fold doors",
    readTime: 6,
    metaDescription: "Kitchen extension planning guide for West Sussex 2024. Costs, planning permission requirements, and expert advice for homeowners.",
    featured: false,
    location: "West Sussex"
  },
  {
    id: "summer-house-construction-bognor",
    title: "Summer House Construction Project Showcase: Bognor Regis Client",
    slug: "summer-house-construction-bognor-regis",
    excerpt: "Discover how we transformed a client's garden in Bognor Regis with a bespoke summer house, featuring sustainable materials and clever design solutions.",
    content: `# Summer House Construction Project Showcase: Bognor Regis Client

Our recent summer house project in Bognor Regis demonstrates the perfect blend of functionality and style. This bespoke garden building serves as both a home office and entertaining space for our clients.

## Project Overview

**Location:** Bognor Regis, West Sussex
**Size:** 4m x 3m (12m²)
**Timeline:** 3 weeks
**Budget:** £18,500
**Purpose:** Home office and garden retreat

## Design Brief

Our clients needed:
- Dedicated home office space
- Year-round usability
- Low maintenance exterior
- Integration with existing garden design
- Planning permission compliance

## Construction Process

### Week 1: Foundations and Frame
We began with concrete pad foundations, ensuring proper drainage and stability. The timber frame uses pressure-treated C24 grade timber for longevity.

### Week 2: Roofing and Cladding  
EPDM rubber roofing provides excellent weather protection. Cedar cladding gives natural beauty that weathers gracefully.

### Week 3: Insulation and Finishes
Full insulation package ensures year-round comfort. Internal pine cladding creates a warm, natural interior.

## Features and Specifications

**Structural:**
- Pressure-treated timber frame
- 100mm insulation throughout
- Double-glazed windows and door
- EPDM flat roof membrane

**Electrical:**
- Full consumer unit installation
- LED lighting throughout
- Multiple socket outlets
- External security lighting

**Finishes:**
- Cedar external cladding
- Pine-lined interior
- Laminate flooring
- Painted plasterboard ceiling

## Planning Considerations

This summer house falls under Permitted Development Rights:
- Under 15m² floor area
- Single storey construction
- More than 2m from boundaries
- No more than 4m high

## Client Feedback

*"JPW Carpentry exceeded our expectations. The summer house is beautifully built and perfectly suits our needs. James and his team were professional throughout, and the quality of workmanship is exceptional."* - Mr & Mrs Thompson, Bognor Regis

## Maintenance Tips

To keep your summer house in perfect condition:
- Annual roof inspection
- Check and treat cladding every 2-3 years
- Service electrical systems annually
- Maintain proper ventilation

## Why Choose a Summer House?

Benefits include:
- Additional living/working space
- Increased property value
- Garden feature enhancement
- Year-round outdoor connection
- Flexible usage options

Interested in your own garden summer house? Contact JPW Carpentry for a free consultation and quotation. Call us on 07399594658 or email joewhitfield@jpwcarpentrybuilding.com.`,
    author: "James Wilson", 
    publishDate: "2024-12-05",
    lastModified: "2024-12-05",
    category: "local-projects",
    tags: ["summer house", "bognor regis", "garden buildings", "home office"],
    featuredImage: "/src/assets/custom-furniture.jpg",
    imageAlt: "Completed summer house construction in Bognor Regis garden",
    readTime: 4,
    metaDescription: "Summer house construction project in Bognor Regis. See our craftsmanship, design process, and client results for garden buildings in West Sussex.",
    featured: false,
    location: "Bognor Regis"
  }
];