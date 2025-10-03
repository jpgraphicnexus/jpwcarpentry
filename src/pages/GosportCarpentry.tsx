import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Phone, Mail, MapPin, Clock, Star, Shield, CheckCircle, Award, Home, Building, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import kitchenRenovation from "@/assets/kitchen-renovation.webp";
import homeRenovation from "@/assets/home-renovation.webp";
import oakStaircase from "@/assets/oak-staircase.webp";
import flooringInstallation from "@/assets/flooring-installation.webp";
import bespokeJoinery from "@/assets/bespoke-joinery.webp";
import builtInStorage from "@/assets/built-in-storage.webp";
import doorsWindows from "@/assets/doors-windows.webp";

const GosportCarpentry = () => {
  const seoData = useSEO('/gosport-carpentry-services');
  
  return (
    <>
      <SEO {...seoData} />
      <LocalBusinessSchema 
        pageType="service" 
        customServices={[
          {
            name: "Gosport Carpentry Services",
            description: "Professional carpentry services in Gosport, Hampshire"
          }
        ]}
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
        <section className="relative py-20 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <Badge className="mb-4 bg-golden text-dark-bg">Gosport's Trusted Carpentry Service</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                  Professional Carpentry Services in Gosport
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Expert carpenters serving Gosport, Alverstoke, Lee-on-the-Solent and surrounding Hampshire areas with 20+ years of experience
                </p>
                
                {/* Trust Signals */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-golden" />
                    <span>Serving Gosport families for 20+ years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-golden" />
                    <span>Expert Craftsmanship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-golden" />
                    <span>Fully Insured</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-golden text-dark-bg hover:bg-golden-hover font-semibold">
                    <Link to="/#contact-section">
                      <Phone className="w-5 h-5 mr-2" />
                      Get Your Free Gosport Quote Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-dark-bg bg-white hover:bg-gray-100">
                    <Link to="/past-works">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={oakStaircase}
                  alt="Professional carpenter working on Gosport home renovation project"
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-golden text-dark-bg p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">Free Quotes</div>
                  <div className="text-sm">Within 24 Hours</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-primary">
                Complete Carpentry Services Across Gosport
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From family homes in Alverstoke to modern developments in Bridgemary, 
                we provide expert carpentry services throughout Gosport and Hampshire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={kitchenRenovation} 
                      alt="Kitchen Fitting & Renovation in Gosport"
                      className="w-full h-full object-cover"
                    />
                  </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Kitchen Fitting & Renovation</CardTitle>
                  <CardDescription className="text-base">Transform your Gosport kitchen with bespoke fitted units</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Popular in:</strong> Alverstoke, Town Centre, Lee-on-the-Solent
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/#contact-section">Get Quote for This Service</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={builtInStorage} 
                      alt="Built-in Storage Solutions in Gosport"
                      className="w-full h-full object-cover"
                    />
                  </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Built-in Storage Solutions</CardTitle>
                  <CardDescription className="text-base">Maximize space in Gosport homes with custom storage</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Popular in:</strong> Family homes, modern developments
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/#contact-section">Get Quote for This Service</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={homeRenovation} 
                      alt="Home Extensions & Conversions in Gosport"
                      className="w-full h-full object-cover"
                    />
                  </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Home Extensions & Conversions</CardTitle>
                  <CardDescription className="text-base">Add value to your Gosport property with expert extensions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Popular in:</strong> Planning permission support included
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/#contact-section">Get Quote for This Service</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={bespokeJoinery} 
                      alt="Bespoke Joinery & Furniture in Gosport"
                      className="w-full h-full object-cover"
                    />
                  </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Bespoke Joinery & Furniture</CardTitle>
                  <CardDescription className="text-base">Handcrafted furniture designed for Gosport homes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Popular in:</strong> Traditional and contemporary styles
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/#contact-section">Get Quote for This Service</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={flooringInstallation} 
                      alt="Flooring Installation in Gosport"
                      className="w-full h-full object-cover"
                    />
                  </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Flooring Installation</CardTitle>
                  <CardDescription className="text-base">Professional flooring for Gosport properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Popular in:</strong> Hardwood, laminate, engineered
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/#contact-section">Get Quote for This Service</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={doorsWindows} 
                      alt="Internal Doors & Windows in Gosport"
                      className="w-full h-full object-cover"
                    />
                  </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Internal Doors & Windows</CardTitle>
                  <CardDescription className="text-base">Quality door and window installation across Gosport</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Popular in:</strong> Period property expertise
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/#contact-section">Get Quote for This Service</Link>
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
                Serving All Gosport Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From the town centre to Lee-on-the-Solent, we serve all Gosport communities
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
                Why Choose JPW Carpentry in Gosport
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experienced, professional carpentry services for Gosport homes
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">20+ Years Experience</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Over two decades serving Gosport families</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Expert knowledge of local properties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Trusted by hundreds of Gosport homeowners</span>
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
                    <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Premium materials and craftsmanship</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Fully insured and qualified tradespeople</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Workmanship guarantee on all projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Home className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Local & Reliable</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Based locally in Gosport area</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Flexible scheduling to suit you</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Free, no-obligation quotes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Complete Service</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>From small repairs to full renovations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Planning and building regulation support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Clean, tidy, and professional service</span>
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
                Popular Services for Gosport Properties
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our specialized services are perfectly suited to Gosport's family homes and properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/services/kitchen-renovations" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Home className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Kitchen Renovations</h3>
                    <p className="text-sm text-muted-foreground">Perfect for Gosport's family homes</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/home-renovations" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Building className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Home Extensions</h3>
                    <p className="text-sm text-muted-foreground">Add space without moving - popular in Gosport</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/small-carpentry-jobs" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Wrench className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Built-in Storage</h3>
                    <p className="text-sm text-muted-foreground">Custom storage solutions for Gosport homes</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/general-building-works" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Award className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Loft Conversions</h3>
                    <p className="text-sm text-muted-foreground">Popular choice for Gosport families needing extra space</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Our <Link to="/services/kitchen-renovations" className="text-golden hover:underline">kitchen renovation services</Link> are particularly popular in Gosport, while many families choose our <Link to="/services/home-renovations" className="text-golden hover:underline">loft conversion expertise</Link> to add space without moving house.
              </p>
              <Button variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
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
                Common questions about our Gosport carpentry services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What areas of Gosport do you cover?",
                  answer: "We serve all Gosport areas including Alverstoke, Lee-on-the-Solent, Bridgemary, Town Centre, Hardway, and surrounding Hampshire areas."
                },
                {
                  question: "How quickly can you provide a quote?",
                  answer: "We aim to provide all quotes within 24-48 hours. For urgent projects, we can often arrange a same-day consultation."
                },
                {
                  question: "Do you handle planning permission?",
                  answer: "Yes, we can assist with planning permission applications and building regulations for extensions and major renovations."
                },
                {
                  question: "What is your typical project timeline?",
                  answer: "Timelines vary by project. Small jobs can be completed in days, while full renovations may take several weeks. We'll provide a detailed schedule with your quote."
                },
                {
                  question: "Are you fully insured?",
                  answer: "Yes, we carry full public liability insurance and all our work is guaranteed. We're also registered with local trading standards."
                },
                {
                  question: "Do you offer payment plans?",
                  answer: "Yes, we can arrange flexible payment schedules for larger projects to help spread the cost of your renovation or extension."
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
                Get your free quote for quality carpentry in Gosport
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
                        <p className="font-medium">Working Hours</p>
                        <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Why Choose Us
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>20+ years experience in Gosport</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Fully insured and qualified</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Free, no-obligation quotes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Clean, professional service</span>
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
                      <Link to="/#contact-section">Get Your Free Quote Online</Link>
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
                "name": "What areas of Gosport do you cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve all Gosport areas including Alverstoke, Lee-on-the-Solent, Bridgemary, Town Centre, Hardway, and surrounding Hampshire areas."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you provide a quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We aim to provide all quotes within 24-48 hours. For urgent projects, we can often arrange a same-day consultation."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle planning permission?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we can assist with planning permission applications and building regulations for extensions and major renovations."
                }
              },
              {
                "@type": "Question",
                "name": "What is your typical project timeline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Timelines vary by project. Small jobs can be completed in days, while full renovations may take several weeks. We'll provide a detailed schedule with your quote."
                }
              },
              {
                "@type": "Question",
                "name": "Are you fully insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we carry full public liability insurance and all our work is guaranteed. We're also registered with local trading standards."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer payment plans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we can arrange flexible payment schedules for larger projects to help spread the cost of your renovation or extension."
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
            "description": "Professional carpentry services in Gosport, Hampshire. Expert kitchen renovations, home extensions, and bespoke joinery.",
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
              "Kitchen Fitting & Renovation",
              "Home Extensions & Conversions", 
              "Built-in Storage Solutions",
              "Bespoke Joinery & Furniture",
              "Flooring Installation",
              "Internal Doors & Windows"
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
                  "name": "Sarah M."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "JPW transformed our cramped Alverstoke kitchen into a modern family space. Professional, clean, and finished exactly on time. Highly recommend to any Gosport homeowner."
              }
            ]
          })
        }}
      />
    </>
  );
};

export default GosportCarpentry;