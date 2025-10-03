import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Phone, Mail, MapPin, Clock, Star, Shield, Award, CircleCheck as CheckCircle, Building, Chrome as Home, Wrench } from "lucide-react";
import kitchenRenovation from "@/assets/kitchen-renovation.webp";
import homeRenovation from "@/assets/home-renovation.webp";
import oakStaircase from "@/assets/oak-staircase.webp";
import flooringInstallation from "@/assets/flooring-installation.webp";
import bespokeJoinery from "@/assets/bespoke-joinery.webp";
import builtInStorage from "@/assets/built-in-storage.webp";
import doorsWindows from "@/assets/doors-windows.webp";

const PortsmouthCarpentry = () => {
  const seoData = useSEO('/portsmouth-carpentry-services');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  const services = [
    {
      title: "Kitchen Fitting & Renovation",
      description: "Transform your Portsmouth kitchen with bespoke fitted units",
      popular: "Southsea, Old Portsmouth, North End",
      image: kitchenRenovation
    },
    {
      title: "Built-in Storage Solutions", 
      description: "Maximize space in Portsmouth homes with custom storage",
      popular: "Victorian terraces, modern developments",
      image: builtInStorage
    },
    {
      title: "Home Extensions & Conversions",
      description: "Add value to your Portsmouth property with expert extensions", 
      popular: "Planning permission support included",
      image: homeRenovation
    },
    {
      title: "Bespoke Joinery & Furniture",
      description: "Handcrafted furniture designed for Portsmouth homes",
      popular: "Traditional and contemporary styles",
      image: bespokeJoinery
    },
    {
      title: "Flooring Installation",
      description: "Professional flooring for Portsmouth properties",
      popular: "Hardwood, laminate, engineered",
      image: flooringInstallation
    },
    {
      title: "Internal Doors & Windows", 
      description: "Quality door and window installation across Portsmouth",
      popular: "Period property expertise", 
      image: doorsWindows
    }
  ];

  const areas = [
    { name: "Central Portsmouth", details: "Commercial Road, Guildhall, Historic Dockyard area" },
    { name: "Southsea", details: "Palmerston Road, Albert Road, seafront properties" },
    { name: "Old Portsmouth", details: "Historic quarter, cathedral area, waterfront homes" },
    { name: "North End", details: "Copnor, Hilsea, residential developments" },
    { name: "Fratton", details: "Victorian terraces, family homes, renovation projects" },
    { name: "Baffins", details: "Modern estates, family properties" },
    { name: "Milton", details: "Lakeside developments, contemporary homes" }
  ];

  return (
    <>
      <SEO {...seoData} />
      <LocalBusinessSchema 
        pageType="service" 
        customServices={[
          {
            name: "Portsmouth Kitchen Fitting & Renovation",
            description: "Transform your Portsmouth kitchen with bespoke fitted units and professional installation"
          },
          {
            name: "Portsmouth Home Extensions & Conversions", 
            description: "Add value to your Portsmouth property with expert extensions and loft conversions"
          },
          {
            name: "Portsmouth Built-in Storage Solutions",
            description: "Maximize space in Portsmouth homes with custom wardrobes and storage solutions"
          },
          {
            name: "Portsmouth Bespoke Joinery & Furniture",
            description: "Handcrafted furniture and joinery designed specifically for Portsmouth homes"
          }
        ]}
      />
      <LocalBusinessSchema 
        pageType="service" 
        customServices={[
          {
            name: "Portsmouth Kitchen Fitting & Renovation",
            description: "Transform your Portsmouth kitchen with bespoke fitted units and professional installation"
          },
          {
            name: "Portsmouth Home Extensions & Conversions", 
            description: "Add value to your Portsmouth property with expert extensions and loft conversions"
          },
          {
            name: "Portsmouth Built-in Storage Solutions",
            description: "Maximize space in Portsmouth homes with custom wardrobes and storage solutions"
          },
          {
            name: "Portsmouth Bespoke Joinery & Furniture",
            description: "Handcrafted furniture and joinery designed specifically for Portsmouth homes"
          }
        ]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Portsmouth Carpentry Services</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <Badge className="mb-4 bg-golden text-dark-bg">Portsmouth's #1 Carpentry Service</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                  Portsmouth's Premier Carpentry Services
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Expert carpenters serving Portsmouth, Southsea, and surrounding Hampshire areas with 20+ years of experience
                </p>
                
                {/* Trust Signals */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-golden" />
                    <span>Serving 500+ Portsmouth homes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-golden" />
                    <span>20+ Years Experience</span>
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
                      Get Your Free Portsmouth Quote Today
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
                  alt="Professional carpenter working on Portsmouth home renovation project"
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
                Complete Carpentry Services Across Portsmouth
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From Victorian terraces in Southsea to modern developments in North End, 
                we provide expert carpentry services throughout Portsmouth and Hampshire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={`${service.title} in Portsmouth`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Popular in:</strong> {service.popular}
                    </p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link to="/#contact-section">Get Quote for This Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Service Links */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Popular Services for Portsmouth Properties
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our specialized services are perfectly suited to Portsmouth's unique mix of Victorian terraces and modern family homes
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
                    <p className="text-sm text-muted-foreground">Perfect for Portsmouth's Victorian terraces and modern homes</p>
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
                    <p className="text-sm text-muted-foreground">Add space without moving - popular in Portsmouth's growing areas</p>
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
                    <p className="text-sm text-muted-foreground">Custom storage solutions for Portsmouth's compact homes</p>
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
                    <p className="text-sm text-muted-foreground">Popular choice for Portsmouth families needing extra space</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Our <Link to="/services/kitchen-renovations" className="text-golden hover:underline">kitchen renovation services</Link> are particularly popular in Portsmouth's Victorian terraces, while many Portsmouth families choose our <Link to="/services/home-renovations" className="text-golden hover:underline">loft conversion expertise</Link> to add space without moving house.
              </p>
              <Button variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Local Area Coverage */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-primary">
                Serving All Portsmouth Areas
              </h2>
              <p className="text-xl text-muted-foreground">
                Local knowledge and expertise across every Portsmouth district
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-golden" />
                      {area.name}
                    </CardTitle>
                    <CardDescription>{area.details}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose JPW */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-primary">
                Why Portsmouth Homeowners Choose JPW Carpentry
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-dark-bg" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Expertise</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>Born and raised in Hampshire</li>
                  <li>Understand Portsmouth properties</li>
                  <li>Planning permission experience with Portsmouth City Council</li>
                  <li>Specialist knowledge of Victorian terraces</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-dark-bg" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Transparent Pricing</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>Fixed-price quotes with no hidden extras</li>
                  <li>Detailed breakdowns before work begins</li>
                  <li>10% contingency included in estimates</li>
                  <li>Multiple payment options available</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-dark-bg" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Quality Guarantee</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>2-year warranty on all workmanship</li>
                  <li>Fully insured with £2M public liability</li>
                  <li>Only qualified, time-served carpenters</li>
                  <li>Premium materials and finishes</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-dark-bg" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Customer Service</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>Direct contact with project manager</li>
                  <li>Flexible scheduling around your life</li>
                  <li>Clean, tidy work practices</li>
                  <li>Respect for your home and neighbors</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* Planning & Regulations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-primary">
                  Portsmouth Building Regulations & Planning Expertise
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Navigate Portsmouth's planning requirements with confidence. Our local expertise ensures your project complies with all regulations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-golden mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-primary">Portsmouth City Council Applications</h3>
                      <p className="text-muted-foreground">Expert support through the planning application process</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-golden mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-primary">Conservation Areas</h3>
                      <p className="text-muted-foreground">Specialist knowledge of Old Portsmouth and Southsea restrictions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-golden mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-primary">Building Regulations</h3>
                      <p className="text-muted-foreground">Guaranteed compliance with all current building standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-golden mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-primary">Party Wall Agreements</h3>
                      <p className="text-muted-foreground">Essential for Portsmouth's many terraced properties</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary text-white">
                <CardContent className="p-8 text-center">
                  <Award className="w-16 h-16 text-golden mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Planning Success Rate</h3>
                  <div className="text-4xl font-bold text-golden mb-2">95%</div>
                  <p className="text-white/90">Approval rate for Portsmouth applications</p>
                  <Button size="lg" asChild className="mt-6 bg-golden text-dark-bg hover:bg-golden-hover">
                    <Link to="/#contact-section">Discuss Your Project</Link>
                  </Button>
                </CardContent>
              </Card>
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
                Common questions about our Portsmouth carpentry services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Do you provide free quotes in Portsmouth?",
                  answer: "Yes, we provide free, no-obligation quotes for all carpentry projects in Portsmouth and surrounding areas. We typically respond within 24 hours and can arrange a site visit at your convenience."
                },
                {
                  question: "How long do kitchen renovations take in Portsmouth?",
                  answer: "Most kitchen renovations in Portsmouth take 2-4 weeks depending on the scope of work and any structural changes required. We provide detailed timelines during the quote process."
                },
                {
                  question: "Are you familiar with Portsmouth planning regulations?",
                  answer: "Yes, we have extensive experience with Portsmouth City Council planning requirements. We can assist with planning applications and ensure all work complies with local building regulations."
                },
                {
                  question: "Do you work on Victorian terraced houses in Portsmouth?",
                  answer: "Absolutely! We specialize in working with Portsmouth's Victorian terraced houses, understanding their unique challenges and opportunities. Many of our projects involve renovating these character properties."
                },
                {
                  question: "What areas of Portsmouth do you cover?",
                  answer: "We cover all Portsmouth areas including Southsea, Old Portsmouth, North End, Fratton, Baffins, Milton, and surrounding Hampshire areas like Gosport and Fareham."
                },
                {
                  question: "Do you provide guarantees on your work?",
                  answer: "Yes, we provide comprehensive guarantees on all our work. Our commitment to quality means we stand behind every project we complete in Portsmouth."
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
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
                Get Your Free Portsmouth Carpentry Quote
              </h2>
              <p className="text-xl text-white/90">
                Ready to transform your Portsmouth home? Contact us today for a free, no-obligation quote.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-dark-bg" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Call Direct</h4>
                      <a href="tel:07399594658" className="text-golden hover:text-golden-hover">
                        07399594658
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-dark-bg" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <a href="mailto:joewhitfield@jpwcarpentrybuilding.com" className="text-golden hover:text-golden-hover">
                        joewhitfield@jpwcarpentrybuilding.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-dark-bg" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Service Area</h4>
                      <p className="text-white/90">Portsmouth, Southsea, Gosport, Fareham, and surrounding Hampshire areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-dark-bg" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Response Time</h4>
                      <p className="text-white/90">Free quotes within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" asChild className="bg-golden text-dark-bg hover:bg-golden-hover">
                  <Link to="/#contact-section">Get Your Free Quote Online</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you provide free quotes in Portsmouth?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide free, no-obligation quotes for all carpentry projects in Portsmouth and surrounding areas. We typically respond within 24 hours and can arrange a site visit at your convenience."
              }
            },
            {
              "@type": "Question",
              "name": "How long do kitchen renovations take in Portsmouth?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most kitchen renovations in Portsmouth take 2-4 weeks depending on the scope of work and any structural changes required. We provide detailed timelines during the quote process."
              }
            },
            {
              "@type": "Question",
              "name": "Are you familiar with Portsmouth planning regulations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we have extensive experience with Portsmouth City Council planning requirements. We can assist with planning applications and ensure all work complies with local building regulations."
              }
            },
            {
              "@type": "Question",
              "name": "Do you work on Victorian terraced houses in Portsmouth?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Victorian terraced houses are one of our specialties. We understand the unique challenges and opportunities of working with period properties in Portsmouth and have extensive experience maintaining their character while adding modern functionality."
              }
            }
          ]
        })}
      </script>
    </>
  );
};

export default PortsmouthCarpentry;