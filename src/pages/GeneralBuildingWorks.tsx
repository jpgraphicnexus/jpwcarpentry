import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import generalBuilding from "@/assets/general-building.webp";
import constructionWorkers from "@/assets/construction-workers.jpg";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { MapPin } from "lucide-react";
import SEOComponent from "@/components/SEOComponent";
import { Helmet } from "react-helmet-async";

const GeneralBuildingWorks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === '/') {
      const section = document.getElementById('contact-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#contact-section');
    }
  };
  const services = [
    "Timber frame structures",
    "Extensions and outbuildings",
    "Structural alterations", 
    "Foundation work and groundwork",
    "Roofing and timber structures",
    "External carpentry and decking",
    "Garden buildings and fencing",
    "General building maintenance"
  ];

  const projectTypes = [
    {
      title: "Garden Out Buildings",
      description: "Custom garden buildings, sheds, workshops, and outdoor structures",
      scope: "Complete construction from foundations to final finishes"
    },
    {
      title: "Structural Carpentry", 
      description: "Hand cut roofs to stud work - traditional carpentry and timber frame construction",
      scope: "From hand cut roofs to complete stud work and structural timber"
    },
    {
      title: "External Works",
      description: "Driveways, patios, garden walls, and outdoor construction",
      scope: "Complete external property improvements"
    }
  ];

  const processSteps = [
    {
      title: "Site Survey",
      description: "Detailed assessment of site conditions and requirements",
      duration: "1-3 days"
    },
    {
      title: "Planning & Permits",
      description: "Obtain necessary permits and create detailed construction plans",
      duration: "4-8 weeks"
    },
    {
      title: "Site Preparation",
      description: "Groundwork, access setup, and material delivery coordination",
      duration: "1-2 weeks"
    },
    {
      title: "Construction Phase",
      description: "Professional building work with regular progress monitoring",
      duration: "Variable"
    },
    {
      title: "Quality Completion",
      description: "Final inspections, certifications, and project handover",
      duration: "1-2 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOComponent
        title="General Building Works Hampshire | Construction Services | JPW Carpentry"
        description="Comprehensive general building works across Hampshire. Extensions, structural work, roofing, and construction services. Professional builders with 20+ years experience."
        keywords="general building works Hampshire, construction services Portsmouth, building contractor, extensions Hampshire, structural work, professional builders"
        canonicalUrl="/services/general-building-works"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "General Building Works Hampshire",
            "description": "Comprehensive general building works including extensions, structural work, roofing, and construction services.",
            "provider": {
              "@type": "Organization",
              "name": "JPW Carpentry & Building"
            },
            "areaServed": ["Portsmouth", "Chichester", "Havant", "Gosport", "Fareham"],
            "offers": {
              "@type": "Offer",
              "priceRange": "£3,000 - £150,000",
              "priceCurrency": "GBP"
            }
          })}
        </script>
      </Helmet>
      <Header />
      
      {/* Breadcrumb Navigation */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/services">Services</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>General Building Works</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
                  GENERAL <span className="font-playfair text-golden">BUILDING</span> WORKS
                </h1>
                <p className="text-xl text-medium-gray leading-relaxed">
                  Comprehensive building services including timber frame structures, extensions, and outbuildings. Professional construction for all your building needs.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  Structural Expertise
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  Fully Licensed
                </Badge>
              </div>

              <div className="pt-4">
                 <Button size="lg" className="bg-golden hover:bg-golden/90 text-dark-bg font-medium px-8 py-3"
                   onClick={handleContactClick}
                 >
                  Get Building Quote
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={generalBuilding}
                alt="Professional building and construction work by JPW Carpentry & Building"
                className="w-full h-96 object-cover rounded-lg"
                width="576"
                height="384"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-golden rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="w-full py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Project Types</h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              We take on a range of building works such as garden out buildings, timber frame structural work and hand cut roofs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <div key={index} className="bg-background p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">{type.title}</h3>
                <p className="text-medium-gray mb-4 leading-relaxed">{type.description}</p>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-golden rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-medium-gray text-sm">{type.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="w-full py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Choose JPW</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto">
                <span className="text-dark-bg font-bold text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Customer Service</h3>
              <p className="text-medium-gray">Prioritising customer service to ensure smooth running projects</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto">
                <span className="text-dark-bg font-bold text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Quality Guarantee</h3>
              <p className="text-medium-gray">All work backed by comprehensive warranties and quality assurance</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto">
                <span className="text-dark-bg font-bold text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Fully Insured</h3>
              <p className="text-medium-gray">Comprehensive public liability and employer's insurance coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Building Services Across Hampshire</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional building and construction services throughout Hampshire, from outbuildings to structural work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link to="/portsmouth-carpentry-services" className="group">
              <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow group-hover:border-golden/50">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-golden/20 transition-colors">
                    <MapPin className="h-6 w-6 text-golden" />
                  </div>
                  <h4 className="font-semibold text-primary group-hover:text-golden transition-colors">Portsmouth</h4>
                  <p className="text-sm text-muted-foreground">Extensions & Loft Conversions</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/chichester-carpentry-services" className="group">
              <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow group-hover:border-golden/50">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-golden/20 transition-colors">
                    <MapPin className="h-6 w-6 text-golden" />
                  </div>
                  <h4 className="font-semibold text-primary group-hover:text-golden transition-colors">Chichester</h4>
                  <p className="text-sm text-muted-foreground">Heritage Building Works</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/havant-carpentry-services" className="group">
              <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow group-hover:border-golden/50">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-golden/20 transition-colors">
                    <MapPin className="h-6 w-6 text-golden" />
                  </div>
                  <h4 className="font-semibold text-primary group-hover:text-golden transition-colors">Havant</h4>
                  <p className="text-sm text-muted-foreground">Family Extensions & Offices</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/gosport-carpentry-services" className="group">
              <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow group-hover:border-golden/50">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-golden/20 transition-colors">
                    <MapPin className="h-6 w-6 text-golden" />
                  </div>
                  <h4 className="font-semibold text-primary group-hover:text-golden transition-colors">Gosport</h4>
                  <p className="text-sm text-muted-foreground">Marine Workshops & Storage</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/fareham-carpentry-services" className="group">
              <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow group-hover:border-golden/50">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-golden/20 transition-colors">
                    <MapPin className="h-6 w-6 text-golden" />
                  </div>
                  <h4 className="font-semibold text-primary group-hover:text-golden transition-colors">Fareham</h4>
                  <p className="text-sm text-muted-foreground">Executive Garden Buildings</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralBuildingWorks;