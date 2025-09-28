import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOComponent from "@/components/SEOComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Phone, Mail, MapPin, Clock, Star, Shield, Crown, Gem, Award, TrendingUp, CheckCircle, Building, Home, Users } from "lucide-react";
import { Link } from "react-router-dom";
import homeRenovationImage from "@/assets/home-renovation.webp";

const FarehamCarpentry = () => {
  return (
    <>
      <SEOComponent
        title="Fareham Carpentry Services | Executive Home Specialists | JPW Carpentry"
        description="Premium carpentry services in Fareham, Hampshire. Executive home extensions, luxury kitchens, bespoke storage solutions. Serving Fareham's finest properties with exceptional craftsmanship."
        keywords="Fareham carpentry, carpenter Fareham, executive home improvements Fareham, luxury kitchen Fareham, home extension Fareham, bespoke carpentry Fareham"
        canonicalUrl="/fareham-carpentry-services"
      />
      <Header />
      
      <main className="min-h-screen">
        {/* Breadcrumb Navigation */}
        <section className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/services">Services</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>Fareham Carpentry Services</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Fareham's Executive Home Improvement <span className="text-golden">Specialists</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                    Transforming Fareham's finest properties with premium craftsmanship and bespoke solutions for discerning homeowners
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <Crown className="h-5 w-5 text-golden" />
                    <span className="font-medium">Executive Property Specialists</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <Gem className="h-5 w-5 text-golden" />
                    <span className="font-medium">Premium Craftsmanship</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <Award className="h-5 w-5 text-golden" />
                    <span className="font-medium">Luxury Finishes</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="golden" className="text-lg px-8 py-6" asChild>
                    <a href="tel:07399594658">Schedule Your Executive Consultation</a>
                  </Button>
                  <Button size="lg" variant="golden-outline" className="text-lg px-8 py-6" asChild>
                    <a href="#portfolio">View Premium Portfolio</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={homeRenovationImage} 
                  alt="Luxury home renovation project in Fareham showcasing executive carpentry craftsmanship"
                  className="rounded-lg shadow-2xl w-full h-auto"
                  loading="eager"
                />
                <div className="absolute -bottom-6 -left-6 bg-golden text-dark-bg p-6 rounded-lg shadow-xl">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-8 w-8" />
                    <div>
                      <p className="font-bold text-lg">£85k Average</p>
                      <p className="text-sm">Property Value Increase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Premium Carpentry Services for Fareham's Executive Properties
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bespoke solutions crafted to the highest standards for discerning homeowners who demand excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-golden hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-golden/10 rounded-lg group-hover:bg-golden/20 transition-colors">
                      <Building className="h-6 w-6 text-golden" />
                    </div>
                    <Badge variant="secondary" className="bg-golden/20 text-golden">From £35,000</Badge>
                  </div>
                  <CardTitle className="text-xl">Executive Home Extensions</CardTitle>
                  <CardDescription>
                    Luxury extensions that enhance your Fareham property's prestige
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Architectural design collaboration, premium materials
                  </p>
                  <Button variant="outline" size="sm" className="hover:bg-golden hover:text-dark-bg transition-colors" asChild>
                    <a href="#contact">Discuss Extension</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-golden hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-golden/10 rounded-lg group-hover:bg-golden/20 transition-colors">
                      <Gem className="h-6 w-6 text-golden" />
                    </div>
                    <Badge variant="secondary" className="bg-golden/20 text-golden">From £15,000</Badge>
                  </div>
                  <CardTitle className="text-xl">Designer Kitchen Installations</CardTitle>
                  <CardDescription>
                    Bespoke kitchens worthy of Fareham's finest homes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    German engineering, stone worktops, integrated appliances
                  </p>
                  <Button variant="outline" size="sm" className="hover:bg-golden hover:text-dark-bg transition-colors" asChild>
                    <a href="#contact">Kitchen Consultation</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-golden hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-golden/10 rounded-lg group-hover:bg-golden/20 transition-colors">
                      <Crown className="h-6 w-6 text-golden" />
                    </div>
                    <Badge variant="secondary" className="bg-golden/20 text-golden">From £8,000</Badge>
                  </div>
                  <CardTitle className="text-xl">Luxury Home Offices</CardTitle>
                  <CardDescription>
                    Executive home offices for Fareham's business professionals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Popular in Whiteley, Park Gate, Titchfield
                  </p>
                  <Button variant="outline" size="sm" className="hover:bg-golden hover:text-dark-bg transition-colors" asChild>
                    <a href="#contact">Office Design</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-golden hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-golden/10 rounded-lg group-hover:bg-golden/20 transition-colors">
                      <Award className="h-6 w-6 text-golden" />
                    </div>
                    <Badge variant="secondary" className="bg-golden/20 text-golden">From £2,500</Badge>
                  </div>
                  <CardTitle className="text-xl">Bespoke Storage Solutions</CardTitle>
                  <CardDescription>
                    Custom storage systems for executive lifestyle organization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Walk-in wardrobes, wine cellars, library systems
                  </p>
                  <Button variant="outline" size="sm" className="hover:bg-golden hover:text-dark-bg transition-colors" asChild>
                    <a href="#contact">Storage Solutions</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-golden hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-golden/10 rounded-lg group-hover:bg-golden/20 transition-colors">
                      <Home className="h-6 w-6 text-golden" />
                    </div>
                    <Badge variant="secondary" className="bg-golden/20 text-golden">From £12,000</Badge>
                  </div>
                  <CardTitle className="text-xl">Premium Outdoor Living</CardTitle>
                  <CardDescription>
                    Luxury garden rooms and outdoor entertainment spaces
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Bi-fold integration, heating systems, premium decking
                  </p>
                  <Button variant="outline" size="sm" className="hover:bg-golden hover:text-dark-bg transition-colors" asChild>
                    <a href="#contact">Outdoor Living</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-golden hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-golden/10 rounded-lg group-hover:bg-golden/20 transition-colors">
                      <Shield className="h-6 w-6 text-golden" />
                    </div>
                    <Badge variant="secondary" className="bg-golden/20 text-golden">From £10,000</Badge>
                  </div>
                  <CardTitle className="text-xl">Period Property Restoration</CardTitle>
                  <CardDescription>
                    Sympathetic restoration of Fareham's historic properties
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Titchfield village, Wickham, historic Fareham
                  </p>
                  <Button variant="outline" size="sm" className="hover:bg-golden hover:text-dark-bg transition-colors" asChild>
                    <a href="#contact">Restoration Quote</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Area Coverage */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Serving Fareham's Premium Residential Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Established presence across Fareham's most prestigious neighborhoods and executive developments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { area: "Fareham Town Centre", description: "Historic properties, period conversions, town houses" },
                { area: "Whiteley", description: "Executive developments, modern family homes, luxury estates" },
                { area: "Park Gate", description: "Suburban family properties, executive housing, modern developments" },
                { area: "Titchfield", description: "Historic village, period properties, luxury conversions" },
                { area: "Wickham", description: "Georgian properties, village homes, period restoration" },
                { area: "Stubbington", description: "Family estates, modern developments, executive housing" },
                { area: "Hill Head", description: "Coastal properties, executive homes, waterfront locations" },
                { area: "Locks Heath", description: "Modern estates, family properties, executive developments" }
              ].map((location) => (
                <Card key={location.area} className="text-center hover:shadow-md transition-shadow bg-white">
                  <CardContent className="pt-6">
                    <MapPin className="h-8 w-8 text-golden mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">{location.area}</h3>
                    <p className="text-sm text-muted-foreground">{location.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose JPW */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Fareham's Discerning Homeowners Choose JPW
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Uncompromising standards and executive service that exceeds expectations
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-golden/10 rounded-lg">
                      <Crown className="h-8 w-8 text-golden" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Premium Quality Standards</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Only the finest materials from premium suppliers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Craftsmen with 20+ years experience in luxury properties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Attention to detail that matches executive expectations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-golden/10 rounded-lg">
                      <Gem className="h-8 w-8 text-golden" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Executive Service Experience</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Discreet, professional service respecting privacy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Flexible scheduling around business commitments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Project management minimizing disruption to executive lifestyle</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-golden/10 rounded-lg">
                      <Award className="h-8 w-8 text-golden" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Architectural Collaboration</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Established relationships with premium architects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Design consultation services available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Planning permission support for complex projects</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-golden/10 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-golden" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Investment Protection</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Work designed to enhance property values significantly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>10-year comprehensive warranties on all work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                        <span>Insurance work and property surveys available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Service Links */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Executive Services for Fareham's Premium Properties
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our luxury services are designed for Fareham's discerning homeowners who demand the finest craftsmanship
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/services/kitchen-renovations" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 group-hover:border-golden/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Gem className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Designer Kitchens</h3>
                    <p className="text-sm text-muted-foreground">Luxury kitchen installations with premium materials</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/home-renovations" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 group-hover:border-golden/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Crown className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Executive Extensions</h3>
                    <p className="text-sm text-muted-foreground">Premium extensions that enhance property prestige</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/small-carpentry-jobs" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 group-hover:border-golden/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Award className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Bespoke Storage</h3>
                    <p className="text-sm text-muted-foreground">Custom wardrobes, wine cellars, and library systems</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/general-building-works" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 group-hover:border-golden/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Building className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Luxury Home Offices</h3>
                    <p className="text-sm text-muted-foreground">Executive workspace design and construction</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Fareham's executive homeowners particularly value our <Link to="/services/kitchen-renovations" className="text-golden hover:underline">designer kitchen services</Link> featuring German engineering and stone worktops, while our <Link to="/services/home-renovations" className="text-golden hover:underline">luxury extension expertise</Link> adds significant value to Whiteley and Park Gate properties.
              </p>
              <Button variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section id="portfolio" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prestigious Fareham Property Transformations
              </h2>
              <p className="text-xl text-muted-foreground">
                Showcasing our commitment to excellence in Fareham's finest properties
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="h-5 w-5 text-golden" />
                    <Badge variant="outline" className="border-golden text-golden">Executive Project</Badge>
                  </div>
                  <CardTitle>Whiteley Executive Extension</CardTitle>
                  <CardDescription>Two-storey rear extension with luxury kitchen and master suite</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm">Challenge:</p>
                      <p className="text-sm text-muted-foreground">Executive timeline, premium finishes, architectural integration</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Solution:</p>
                      <p className="text-sm text-muted-foreground">Fast-track project management, premium suppliers, luxury specifications</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm font-medium">Timeline: 16 weeks</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-golden text-golden" />
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-golden/5 rounded-lg border border-golden/20">
                      <p className="text-sm font-medium text-golden">Property value increased £85,000</p>
                      <p className="text-xs italic text-muted-foreground">"Exceeded our highest expectations"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-golden" />
                    <Badge variant="outline" className="border-golden text-golden">Period Restoration</Badge>
                  </div>
                  <CardTitle>Titchfield Period Restoration</CardTitle>
                  <CardDescription>Georgian townhouse complete renovation and modernization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm">Challenge:</p>
                      <p className="text-sm text-muted-foreground">Historic building constraints, modern luxury integration</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Solution:</p>
                      <p className="text-sm text-muted-foreground">Heritage-compliant design, hidden modern systems, period authenticity</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm font-medium">Timeline: 20 weeks</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-golden text-golden" />
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-golden/5 rounded-lg border border-golden/20">
                      <p className="text-sm font-medium text-golden">Featured in Hampshire Life</p>
                      <p className="text-xs italic text-muted-foreground">"Perfect blend of history and luxury"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Gem className="h-5 w-5 text-golden" />
                    <Badge variant="outline" className="border-golden text-golden">Luxury Kitchen</Badge>
                  </div>
                  <CardTitle>Park Gate Luxury Kitchen</CardTitle>
                  <CardDescription>German kitchen installation with stone island and wine storage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm">Challenge:</p>
                      <p className="text-sm text-muted-foreground">Open-plan integration, premium appliances, family functionality</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Solution:</p>
                      <p className="text-sm text-muted-foreground">Bespoke design, integrated technology, luxury materials</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm font-medium">Timeline: 6 weeks</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-golden text-golden" />
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-golden/5 rounded-lg border border-golden/20">
                      <p className="text-sm font-medium text-golden">Award-winning design</p>
                      <p className="text-xs italic text-muted-foreground">"The heart of our executive entertaining"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Fareham's Executive Homeowners Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Trusted by discerning clients who demand the highest standards
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-golden text-golden" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "JPW delivered exceptional quality on our executive home extension. Their attention to detail and premium materials created exactly the luxury space we envisioned. Outstanding project management throughout."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-golden/10 rounded-full">
                      <Crown className="h-4 w-4 text-golden" />
                    </div>
                    <div>
                      <p className="font-semibold">James & Victoria M.</p>
                      <p className="text-sm text-muted-foreground">Whiteley (PO15)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-golden text-golden" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "The restoration of our Georgian property was handled with remarkable skill and sensitivity. JPW's understanding of period properties combined with modern luxury is unmatched in Hampshire."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-golden/10 rounded-full">
                      <Shield className="h-4 w-4 text-golden" />
                    </div>
                    <div>
                      <p className="font-semibold">Dr. Richard S.</p>
                      <p className="text-sm text-muted-foreground">Titchfield (PO14)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-golden text-golden" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Our designer kitchen exceeded every expectation. JPW coordinated with our architect perfectly and delivered a space that's both beautiful and supremely functional for executive entertaining."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-golden/10 rounded-full">
                      <Gem className="h-4 w-4 text-golden" />
                    </div>
                    <div>
                      <p className="font-semibold">Caroline & Andrew H.</p>
                      <p className="text-sm text-muted-foreground">Park Gate (PO15)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Executive Expertise */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Fareham's Executive Property Specialists
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive premium services and market expertise
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Premium Services</h3>
                <div className="space-y-4">
                  {[
                    { icon: Award, title: "Architectural Collaboration", desc: "Working with leading Hampshire architects" },
                    { icon: Gem, title: "Interior Design Coordination", desc: "Seamless integration with design professionals" },
                    { icon: Crown, title: "Premium Material Sourcing", desc: "Access to exclusive suppliers and finishes" },
                    { icon: Shield, title: "Project Management Excellence", desc: "Dedicated managers for executive projects" }
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-golden/10 rounded-lg">
                          <item.icon className="h-6 w-6 text-golden" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Market Knowledge</h3>
                <div className="space-y-4">
                  {[
                    "Property Values - Deep understanding of Fareham's premium market",
                    "Planning Requirements - Established relationships with Fareham Borough Council",
                    "Architectural Trends - Current styles popular in executive developments",
                    "Investment Returns - Proven track record of value-enhancing improvements"
                  ].map((service, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-golden/5 rounded-lg border border-golden/20">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-6 w-6 text-golden" />
                    <h4 className="font-semibold">Investment Returns</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Average property value increase of £65,000 on executive extension projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-primary">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our Fareham executive carpentry services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Do you specialize in executive home improvements in Fareham?",
                  answer: "Yes, we specialize in high-end executive home improvements throughout Fareham, Whiteley, and surrounding premium residential areas. We understand the exacting standards expected by discerning homeowners."
                },
                {
                  question: "Can you work with architects on luxury projects?",
                  answer: "Absolutely. We regularly collaborate with leading Hampshire architects on executive projects and can provide design-build services for complex luxury renovations."
                },
                {
                  question: "What's the timeline for executive kitchen installations in Fareham?",
                  answer: "Executive kitchen installations typically take 4-6 weeks, depending on complexity and premium finishes. We provide detailed project management throughout."
                },
                {
                  question: "Do you offer private consultations for executive properties?",
                  answer: "Yes, we provide discreet, private consultations at your convenience. We understand the need for confidentiality and professional discretion with executive properties."
                },
                {
                  question: "Which premium areas of Fareham do you serve?",
                  answer: "We serve all premium Fareham areas including Whiteley executive developments, Park Gate estates, Titchfield village, Hill Head waterfront properties, and Wickham period homes."
                },
                {
                  question: "Do you provide investment value assessments?",
                  answer: "Yes, we can provide detailed assessments of how proposed improvements will enhance your property value, backed by our extensive experience with executive properties in the Fareham market."
                }
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Begin Your Executive Home Transformation
              </h2>
              <p className="text-xl text-muted-foreground">
                Private consultation to discuss your luxury project requirements
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Executive Contact Service</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-golden/10 rounded-lg">
                        <Phone className="h-6 w-6 text-golden" />
                      </div>
                      <div>
                        <p className="font-medium">Direct Line</p>
                        <a href="tel:07399594658" className="text-golden hover:underline text-lg">
                          07399594658
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-golden/10 rounded-lg">
                        <Mail className="h-6 w-6 text-golden" />
                      </div>
                      <div>
                        <p className="font-medium">Executive Email</p>
                        <a href="mailto:joewhitfield@jpwcarpentrybuilding.com" className="text-golden hover:underline">
                          joewhitfield@jpwcarpentrybuilding.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-golden/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-golden" />
                      </div>
                      <div>
                        <p className="font-medium">Service Area</p>
                        <p className="text-muted-foreground">Fareham, Whiteley, Titchfield, and surrounding executive areas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-golden/10 rounded-lg">
                        <Clock className="h-6 w-6 text-golden" />
                      </div>
                      <div>
                        <p className="font-medium">Executive Consultation</p>
                        <p className="text-muted-foreground">Private consultations at your convenience</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-golden/5 rounded-lg border border-golden/20">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Crown className="h-5 w-5 text-golden" />
                    Executive Service Guarantee
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-golden" />
                      <span>Discretion and privacy assured</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-golden" />
                      <span>Flexible consultation scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-golden" />
                      <span>Premium portfolio viewing available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-golden" />
                      <span>Investment value assessment included</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-golden/5 to-golden/10 p-8 rounded-lg border border-golden/20">
                <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Ready for Your Executive Project?</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-dark-bg" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-primary">Call Direct</h4>
                      <a href="tel:07399594658" className="text-golden hover:text-golden-hover text-lg">
                        07399594658
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button size="lg" asChild className="w-full bg-golden text-dark-bg hover:bg-golden-hover">
                      <Link to="/#contact-section">Schedule Your Executive Consultation Online</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you specialize in executive home improvements in Fareham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in high-end executive home improvements throughout Fareham, Whiteley, and surrounding premium residential areas. We understand the exacting standards expected by discerning homeowners."
                }
              },
              {
                "@type": "Question",
                "name": "Can you work with architects on luxury projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We regularly collaborate with leading Hampshire architects on executive projects and can provide design-build services for complex luxury renovations."
                }
              },
              {
                "@type": "Question",
                "name": "What's the timeline for executive kitchen installations in Fareham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Executive kitchen installations typically take 4-6 weeks, depending on complexity and premium finishes. We provide detailed project management throughout."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer private consultations for executive properties?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide discreet, private consultations at your convenience. We understand the need for confidentiality and professional discretion with executive properties."
                }
              },
              {
                "@type": "Question",
                "name": "Which premium areas of Fareham do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve all premium Fareham areas including Whiteley executive developments, Park Gate estates, Titchfield village, Hill Head waterfront properties, and Wickham period homes."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide investment value assessments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we can provide detailed assessments of how proposed improvements will enhance your property value, backed by our extensive experience with executive properties in the Fareham market."
                }
              }
            ]
          })
        }}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "JPW Carpentry - Fareham Executive Specialists",
            "image": "https://jpwcarpentry.lovable.app/assets/home-renovation.webp",
            "description": "Premium carpentry services in Fareham, Hampshire. Executive home extensions, luxury kitchens, bespoke storage solutions.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fareham",
              "addressRegion": "Hampshire",
              "addressCountry": "GB"
            },
            "telephone": "+447399594658",
            "email": "joewhitfield@jpwcarpentrybuilding.com",
            "url": "https://jpwcarpentry.lovable.app/fareham-carpentry-services",
            "areaServed": [
              "Fareham",
              "Whiteley", 
              "Park Gate",
              "Titchfield",
              "Wickham",
              "Stubbington",
              "Hill Head",
              "Locks Heath"
            ],
            "serviceType": [
              "Executive Home Extensions",
              "Luxury Kitchen Design", 
              "Premium Carpentry Services",
              "Executive Property Renovation",
              "Bespoke Storage Solutions",
              "Period Property Restoration"
            ],
            "priceRange": "£10000-£200000",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "89"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "James & Victoria M."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "JPW delivered exceptional quality on our executive home extension. Their attention to detail and premium materials created exactly the luxury space we envisioned. Outstanding project management throughout."
              }
            ]
          })
        }}
      />
    </>
  );
};

export default FarehamCarpentry;