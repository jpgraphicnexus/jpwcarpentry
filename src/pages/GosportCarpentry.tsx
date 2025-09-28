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
import { Phone, Mail, MapPin, Clock, Star, Shield, Anchor, Waves, Ship, CheckCircle, Award, Users, Home, Building } from "lucide-react";
import { Link } from "react-router-dom";
import carpenterWorkingImage from "@/assets/carpenter-working.jpg";

const GosportCarpentry = () => {
  return (
    <>
      <SEOComponent
        title="Gosport Carpentry Services | Marine Grade Quality | JPW Carpentry"
        description="Professional carpentry services in Gosport, Hampshire. Coastal property specialists, marine-grade materials, naval family trusted. Waterfront homes, boat storage, sea-resistant solutions."
        keywords="Gosport carpentry, carpenter Gosport, coastal property carpentry, marine carpentry Gosport, waterfront homes Gosport, naval base carpentry"
        canonicalUrl="/gosport-carpentry-services"
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
                <BreadcrumbPage>Gosport Carpentry Services</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Gosport's Marine-Grade Carpentry Specialists
                  </h1>
                  <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                    Serving Gosport's naval community and coastal properties with sea-tested quality and maritime-grade craftsmanship since 2004
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <Ship className="h-5 w-5" />
                    <span className="font-medium">Naval Community Trusted</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <Anchor className="h-5 w-5" />
                    <span className="font-medium">Marine Grade Quality</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <Waves className="h-5 w-5" />
                    <span className="font-medium">Coastal Specialists</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                    <Link to="/#contact-section">Get Your Coastal-Ready Quote</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10" asChild>
                    <Link to="/past-works">View Our Work</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={carpenterWorkingImage} 
                  alt="Professional carpenter working on marine-grade carpentry project in Gosport"
                  className="rounded-lg shadow-2xl w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Specialized Carpentry for Gosport's Coastal Environment
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Marine-grade solutions designed to withstand coastal conditions and serve the unique needs of Gosport's naval community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Waves className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">From £18,000</Badge>
                  </div>
                  <CardTitle>Marine-Grade Home Extensions</CardTitle>
                  <CardDescription>
                    Salt-resistant extensions built to withstand coastal conditions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Enhanced weatherproofing, marine-grade fixings
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#contact">Get Extension Quote</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Anchor className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">From £3,000</Badge>
                  </div>
                  <CardTitle>Boat Storage & Workshop Solutions</CardTitle>
                  <CardDescription>
                    Custom boat storage, marine workshops, and sailing equipment storage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Popular in Alverstoke, Hardway, Lee-on-the-Solent
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#contact">Discuss Storage Solutions</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Ship className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">From £8,000</Badge>
                  </div>
                  <CardTitle>Waterfront Property Renovations</CardTitle>
                  <CardDescription>
                    Specialist renovations for properties facing Portsmouth Harbour
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Salt damage repair, enhanced ventilation, moisture control
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#contact">Coastal Renovation Quote</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">From £7,500</Badge>
                  </div>
                  <CardTitle>Naval Family Kitchen Solutions</CardTitle>
                  <CardDescription>
                    Practical, durable kitchens designed for busy naval families
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Deployment-ready storage, low-maintenance finishes
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#contact">Kitchen Consultation</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">From £2,500</Badge>
                  </div>
                  <CardTitle>Coastal Garden Structures</CardTitle>
                  <CardDescription>
                    Wind-resistant pergolas, decking, and outdoor entertainment areas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Treated timber, stainless steel fixings, marine varnishes
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#contact">Outdoor Project Quote</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">From £5,000</Badge>
                  </div>
                  <CardTitle>Heritage Naval Property Restoration</CardTitle>
                  <CardDescription>
                    Sympathetic restoration of historic naval quarters and period properties
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Royal Naval Hospital, Historic Dockyard vicinity
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#contact">Heritage Consultation</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Area Coverage */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Serving All Gosport's Maritime Communities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From the town centre to the coastal edges, we understand the unique needs of each Gosport area
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { area: "Town Centre", description: "High Street, Trinity Green, shopping areas" },
                { area: "Alverstoke", description: "Village properties, period homes, waterfront locations" },
                { area: "Hardway", description: "Waterfront properties, boat yards, marine businesses" },
                { area: "Lee-on-the-Solent", description: "Coastal properties, aviation heritage, family homes" },
                { area: "Bridgemary", description: "Naval families, modern estates, community housing" },
                { area: "Rowner", description: "Military housing, family properties, base accommodation" },
                { area: "Elson", description: "Residential areas, mixed housing, community properties" },
                { area: "Browndown", description: "Coastal edge, unique properties, military heritage" }
              ].map((location) => (
                <Card key={location.area} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
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
                Why Gosport's Naval Community Trusts JPW Carpentry
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized expertise in coastal conditions and understanding of military family needs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Waves className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Coastal Expertise</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>20+ years working with salt air and marine conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Understanding of tidal effects on coastal properties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Specialist knowledge of marine-grade materials and treatments</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Ship className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Naval Family Understanding</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Flexible scheduling around deployment cycles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Rapid response for urgent repairs before departures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Secure storage and key-holding services during deployments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Anchor className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Marine-Grade Quality</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Only marine-grade fixings and fastenings used</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Salt-resistant treatments and protective coatings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Enhanced weatherproofing for coastal exposure</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Local Maritime Knowledge</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Understanding of Portsmouth Harbour tidal patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Knowledge of local planning requirements near naval facilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Respect for naval security and base protocols</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Service Links */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Marine-Grade Services for Gosport Properties
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our coastal expertise ensures your Gosport property withstands maritime conditions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/services/kitchen-renovations" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Coastal Kitchens</h3>
                    <p className="text-sm text-muted-foreground">Salt-resistant materials and enhanced ventilation</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/home-renovations" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Marine Extensions</h3>
                    <p className="text-sm text-muted-foreground">Waterfront extensions with enhanced weatherproofing</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/small-carpentry-jobs" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Naval Storage</h3>
                    <p className="text-sm text-muted-foreground">Secure storage solutions for naval families</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/general-building-works" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Anchor className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Boat Workshops</h3>
                    <p className="text-sm text-muted-foreground">Custom marine workshops and storage facilities</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Our <Link to="/services/kitchen-renovations" className="text-primary hover:underline">coastal kitchen renovations</Link> use marine-grade materials perfect for Gosport's seafront properties, while our <Link to="/services/general-building-works" className="text-primary hover:underline">specialized building services</Link> include boat storage and marine workshop solutions.
              </p>
              <Button variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Recent Gosport Maritime Carpentry Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Showcasing our expertise in coastal and naval community projects
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Waves className="h-5 w-5 text-primary" />
                    <Badge variant="outline">Waterfront Project</Badge>
                  </div>
                  <CardTitle>Alverstoke Waterfront Extension</CardTitle>
                  <CardDescription>Single-storey extension with panoramic harbour views</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm">Challenge:</p>
                      <p className="text-sm text-muted-foreground">Salt exposure, high winds, tidal considerations</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Solution:</p>
                      <p className="text-sm text-muted-foreground">Marine-grade materials, enhanced drainage, wind-resistant design</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm font-medium">Timeline: 10 weeks</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm italic text-muted-foreground">"Perfect for watching the naval ships"</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Ship className="h-5 w-5 text-primary" />
                    <Badge variant="outline">Naval Family</Badge>
                  </div>
                  <CardTitle>Naval Family Kitchen Renovation</CardTitle>
                  <CardDescription>Complete kitchen refit for serving naval officer's family</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm">Challenge:</p>
                      <p className="text-sm text-muted-foreground">Deployment timeline, children at home, budget constraints</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Solution:</p>
                      <p className="text-sm text-muted-foreground">Phased work, secure storage, deployment-ready completion</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm font-medium">Timeline: 4 weeks</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm italic text-muted-foreground">"Ready for our next posting"</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Anchor className="h-5 w-5 text-primary" />
                    <Badge variant="outline">Marine Storage</Badge>
                  </div>
                  <CardTitle>Lee-on-the-Solent Boat Workshop</CardTitle>
                  <CardDescription>Custom workshop and boat storage facility</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm">Challenge:</p>
                      <p className="text-sm text-muted-foreground">Planning permission, marine access, equipment storage</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Solution:</p>
                      <p className="text-sm text-muted-foreground">Multi-use design, marine-grade construction, security features</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm font-medium">Timeline: 6 weeks</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm italic text-muted-foreground">"Perfect for maintaining our yacht"</p>
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
                What Gosport's Naval Families Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Trusted by the naval community for quality and reliability
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "JPW understood our deployment schedule perfectly and completed our extension while I was at sea. The marine-grade quality is evident - no salt damage after two winters. Highly recommended for naval families."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Ship className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Commander Sarah T.</p>
                      <p className="text-sm text-muted-foreground">Alverstoke (PO12)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Our waterfront property needed specialist attention due to salt exposure. JPW's knowledge of coastal conditions saved us thousands in future repairs. Excellent maritime expertise."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Waves className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">The Henderson Family</p>
                      <p className="text-sm text-muted-foreground">Hardway (PO12)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Fantastic boat storage solution that's both secure and practical. JPW worked around base security requirements and delivered exactly what we needed for our sailing equipment."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Anchor className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Petty Officer Mark R.</p>
                      <p className="text-sm text-muted-foreground">Bridgemary (PO13)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coastal Expertise */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Gosport's Coastal Carpentry Specialists
              </h2>
              <p className="text-xl text-muted-foreground">
                Marine environment solutions and specialized naval community services
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Marine Environment Solutions</h3>
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: "Salt Damage Prevention", desc: "Protective treatments and resistant materials" },
                    { icon: Waves, title: "Wind Load Calculations", desc: "Structures designed for coastal wind exposure" },
                    { icon: Anchor, title: "Moisture Management", desc: "Enhanced ventilation and damp-proofing" },
                    { icon: Ship, title: "Marine-Grade Hardware", desc: "Stainless steel, bronze, and galvanized fixings" }
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <item.icon className="h-6 w-6 text-primary" />
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
                <h3 className="text-2xl font-semibold mb-6">Specialized Services</h3>
                <div className="space-y-4">
                  {[
                    "Boat Storage Solutions - Custom workshops, equipment storage, marine access",
                    "Waterfront Decking - Salt-resistant, non-slip, marine-grade materials",
                    "Coastal Garden Structures - Wind-resistant pergolas, privacy screens",
                    "Naval Quarter Renovations - Historic property restoration with modern standards"
                  ].map((service, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-6 w-6 text-primary" />
                    <h4 className="font-semibold">Naval Community Recognition</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by 200+ naval families with security clearance awareness and deployment-flexible scheduling
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
                Common questions about our Gosport naval community carpentry services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Do you work with naval families on deployment schedules?",
                  answer: "Yes, we're experienced in working with naval families and understand deployment cycles. We can adjust project timelines to coordinate with deployments and leave periods."
                },
                {
                  question: "Are you security cleared to work on naval properties?",
                  answer: "While we don't hold formal security clearance, we're trusted by many naval families and understand the discretion and professionalism required for MOD residential work."
                },
                {
                  question: "How quickly can you complete emergency repairs for naval families?",
                  answer: "We prioritize emergency repairs for naval families, especially those facing deployment. Most urgent repairs can be completed within 24-48 hours."
                },
                {
                  question: "Do you offer payment plans for naval families?",
                  answer: "Yes, we understand naval pay cycles and can arrange flexible payment schedules to accommodate monthly naval salaries and deployment allowances."
                },
                {
                  question: "Which areas of Gosport do you serve?",
                  answer: "We serve all Gosport areas including Alverstoke, Lee-on-the-Solent, Stubbington, Bridgemary, and all MOD residential areas in the Gosport peninsula."
                },
                {
                  question: "Can you work around naval family moving schedules?",
                  answer: "Absolutely. We understand PCS moves and can expedite projects before postings or prepare properties for new naval families arriving in Gosport."
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
                Ready to Discuss Your Gosport Carpentry Project?
              </h2>
              <p className="text-xl text-muted-foreground">
                Get your marine-grade quote with naval family scheduling options
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Call Now</p>
                        <a href="tel:07399594658" className="text-primary hover:underline">
                          07399594658
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email Us</p>
                        <a href="mailto:joewhitfield@jpwcarpentrybuilding.com" className="text-primary hover:underline">
                          joewhitfield@jpwcarpentrybuilding.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Service Area</p>
                        <p className="text-muted-foreground">Gosport, Lee-on-the-Solent, and surrounding coastal Hampshire</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Naval Family Service</p>
                        <p className="text-muted-foreground">Flexible scheduling for deployment cycles</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Ship className="h-5 w-5 text-primary" />
                    Naval Family Benefits
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Deployment-flexible scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Security-conscious work practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Rapid response for urgent repairs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Key-holding services during deployments</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-golden/5 to-golden/10 p-8 rounded-lg border border-golden/20">
                <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Ready for Your Coastal Project?</h3>
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
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-dark-bg" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-primary">Email Us</h4>
                      <a href="mailto:joewhitfield@jpwcarpentrybuilding.com" className="text-golden hover:text-golden-hover">
                        joewhitfield@jpwcarpentrybuilding.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button size="lg" asChild className="w-full bg-golden text-dark-bg hover:bg-golden-hover">
                      <Link to="/#contact-section">Get Your Marine-Grade Quote Online</Link>
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
                "name": "Do you work with naval families on deployment schedules?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we're experienced in working with naval families and understand deployment cycles. We can adjust project timelines to coordinate with deployments and leave periods."
                }
              },
              {
                "@type": "Question",
                "name": "Are you security cleared to work on naval properties?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While we don't hold formal security clearance, we're trusted by many naval families and understand the discretion and professionalism required for MOD residential work."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you complete emergency repairs for naval families?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We prioritize emergency repairs for naval families, especially those facing deployment. Most urgent repairs can be completed within 24-48 hours."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer payment plans for naval families?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we understand naval pay cycles and can arrange flexible payment schedules to accommodate monthly naval salaries and deployment allowances."
                }
              },
              {
                "@type": "Question",
                "name": "Which areas of Gosport do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve all Gosport areas including Alverstoke, Lee-on-the-Solent, Stubbington, Bridgemary, and all MOD residential areas in the Gosport peninsula."
                }
              },
              {
                "@type": "Question",
                "name": "Can you work around naval family moving schedules?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We understand PCS moves and can expedite projects before postings or prepare properties for new naval families arriving in Gosport."
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
            "name": "JPW Carpentry - Gosport Specialists",
            "image": "https://jpwcarpentry.lovable.app/assets/carpenter-working.jpg",
            "description": "Professional carpentry services in Gosport, Hampshire. Coastal property specialists, marine-grade materials, naval family trusted.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gosport",
              "addressRegion": "Hampshire",
              "addressCountry": "GB"
            },
            "telephone": "+447399594658",
            "email": "joewhitfield@jpwcarpentrybuilding.com",
            "url": "https://jpwcarpentry.lovable.app/gosport-carpentry-services",
            "areaServed": [
              "Gosport",
              "Alverstoke", 
              "Hardway",
              "Lee-on-the-Solent",
              "Bridgemary",
              "Rowner",
              "Elson",
              "Browndown"
            ],
            "serviceType": [
              "Marine-Grade Carpentry",
              "Coastal Property Renovations", 
              "Boat Storage Solutions",
              "Naval Family Services",
              "Waterfront Extensions",
              "Heritage Naval Property Restoration"
            ],
            "priceRange": "£500-£50000",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "127"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Commander Sarah T."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "JPW understood our deployment schedule perfectly and completed our extension while I was at sea. The marine-grade quality is evident - no salt damage after two winters. Highly recommended for naval families."
              }
            ]
          })
        }}
      />
    </>
  );
};

export default GosportCarpentry;