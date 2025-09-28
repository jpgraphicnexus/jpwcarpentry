import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Star, Clock, Shield, Award, CircleCheck as CheckCircle, Building, Chrome as Home, Wrench } from "lucide-react";
import carpenterWorking from "@/assets/carpenter-working.jpg";
import oakDoors from "@/assets/oak-doors.webp";

const ChichesterCarpentry = () => {
  const seoData = useSEO('/chichester-carpentry-services');
  
  const services = [
    {
      title: "Conservation Area Carpentry",
      description: "Sympathetic renovations respecting Chichester's historic character",
      priceRange: "From £1,200",
      speciality: "Planning permission support included",
      areas: ["Cathedral Quarter", "Pallant", "St. Pancras"]
    },
    {
      title: "Period Property Restoration",
      description: "Victorian and Georgian property carpentry with authentic materials",
      priceRange: "From £2,000",
      speciality: "Traditional techniques",
      areas: ["Cathedral Quarter", "Pallant", "St. Pancras"]
    },
    {
      title: "Bespoke Kitchen Design",
      description: "Handcrafted kitchens for Chichester's finest homes",
      priceRange: "From £12,000",
      speciality: "Traditional and contemporary fusion",
      areas: ["Summersdale", "Fishbourne", "Cathedral Quarter"]
    },
    {
      title: "Heritage Window Restoration",
      description: "Sash window repair and replacement in period style",
      priceRange: "From £400 per window",
      speciality: "Conservation Area approved",
      areas: ["Historic properties", "Listed buildings"]
    },
    {
      title: "Listed Building Carpentry",
      description: "Specialist work on Grade I and Grade II listed properties",
      priceRange: "POA",
      speciality: "Historic England guidelines",
      areas: ["Cathedral Close", "Historic properties"]
    },
    {
      title: "Luxury Home Extensions",
      description: "Premium extensions for Chichester's executive homes",
      priceRange: "From £25,000",
      speciality: "Architect collaboration",
      areas: ["Summersdale", "Fishbourne", "Bosham"]
    }
  ];

  const projects = [
    {
      title: "Cathedral Quarter Georgian Restoration",
      description: "Grade II listed townhouse complete renovation",
      challenge: "Historic England compliance, original features preservation",
      solution: "Traditional lime mortar, hand-forged ironwork, period-appropriate materials",
      timeline: "16 weeks",
      result: "'Exemplary heritage restoration' - Conservation Officer"
    },
    {
      title: "Pallant Conservation Area Kitchen",
      description: "Bespoke kitchen in 18th-century townhouse",
      challenge: "Conservation Area restrictions, structural limitations",
      solution: "Hidden modern appliances, traditional cabinetry, heritage colors",
      timeline: "6 weeks",
      result: "Added value: £45,000"
    },
    {
      title: "Summersdale Executive Extension",
      description: "Contemporary extension on 1930s family home",
      challenge: "Neighbor consultation, planning requirements",
      solution: "Sympathetic design, premium materials, landscape integration",
      timeline: "14 weeks",
      result: "'Seamless blend of old and new'"
    }
  ];

  const testimonials = [
    {
      name: "Lady Margaret S.",
      location: "Cathedral Close (PO19)",
      review: "JPW's work on our Georgian townhouse was exemplary. They understood the heritage requirements perfectly and delivered craftsmanship worthy of the Cathedral Quarter. Highly recommended for period properties.",
      rating: 5
    },
    {
      name: "James & Caroline H.",
      location: "Summersdale (PO19)",
      review: "Our kitchen renovation exceeded all expectations. JPW managed the entire project professionally, from planning permission to the final installation. The quality is outstanding.",
      rating: 5
    },
    {
      name: "Dr. Richard P.",
      location: "Fishbourne (PO18)",
      review: "Exceptional restoration work on our listed cottage. JPW's knowledge of traditional techniques and materials is unmatched in Chichester. A pleasure to work with.",
      rating: 5
    }
  ];

  const areas = [
    { name: "Cathedral Quarter", description: "Historic city center, Cathedral Close, Canon Lane" },
    { name: "Pallant", description: "Georgian townhouses, period properties, conservation area" },
    { name: "St. Pancras", description: "Victorian terraces, family homes, heritage properties" },
    { name: "Summersdale", description: "Executive homes, modern developments, luxury properties" },
    { name: "Fishbourne", description: "Village properties, period cottages, Roman heritage area" },
    { name: "Bosham", description: "Waterfront properties, historic village, sailing community" },
    { name: "Westgate", description: "Residential area, mixed property types, family homes" },
    { name: "South Downs Villages", description: "Singleton, West Dean, Charlton, rural properties" }
  ];

  return (
    <>
      <SEO {...seoData} />
      <LocalBusinessSchema 
        pageType="service" 
        customServices={[
          {
            name: "Chichester Conservation Area Carpentry",
            description: "Sympathetic renovations respecting Chichester's historic character with planning permission support"
          },
          {
            name: "Chichester Period Property Restoration", 
            description: "Victorian and Georgian property carpentry using authentic materials and traditional techniques"
          },
          {
            name: "Chichester Heritage Window Restoration",
            description: "Sash window repair and replacement in period style, Conservation Area approved"
          },
          {
            name: "Chichester Listed Building Carpentry",
            description: "Specialist work on Grade I and Grade II listed properties following Historic England guidelines"
          }
        ]}
      />
      <LocalBusinessSchema 
        pageType="service" 
        customServices={[
          {
            name: "Chichester Conservation Area Carpentry",
            description: "Sympathetic renovations respecting Chichester's historic character with planning permission support"
          },
          {
            name: "Chichester Period Property Restoration", 
            description: "Victorian and Georgian property carpentry using authentic materials and traditional techniques"
          },
          {
            name: "Chichester Heritage Window Restoration",
            description: "Sash window repair and replacement in period style, Conservation Area approved"
          },
          {
            name: "Chichester Listed Building Carpentry",
            description: "Specialist work on Grade I and Grade II listed properties following Historic England guidelines"
          }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Chichester's Heritage Carpentry Specialists
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Expert craftsmen serving Chichester's historic properties and modern homes with traditional skills and contemporary standards
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Shield className="w-4 h-4 mr-2" />
                    Cathedral City Specialists
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    <Award className="w-4 h-4 mr-2" />
                    Conservation Area Experts
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    South Downs Approved
                  </Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-gradient-to-r from-golden to-golden-hover text-dark-bg font-semibold px-8">
                    <Link to="/#contact-section">
                      <Phone className="w-5 h-5 mr-2" />
                      Get Your Heritage-Compliant Quote
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-golden text-golden hover:bg-golden hover:text-dark-bg px-8">
                    <Link to="/past-works">
                      <Mail className="w-5 h-5 mr-2" />
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={oakDoors} 
                  alt="Expert carpenter working on heritage property in Chichester"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-golden">20+</div>
                    <div className="text-sm text-muted-foreground">Years Heritage Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Specialist Carpentry Services for Chichester Properties
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From Conservation Area compliance to luxury home extensions, we deliver exceptional craftsmanship for Chichester's most discerning homeowners
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-golden/20">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-golden transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="border-golden text-golden">
                        {service.priceRange}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary">Speciality:</p>
                      <p className="text-sm text-muted-foreground">{service.speciality}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary">Popular in:</p>
                      <p className="text-sm text-muted-foreground">{service.areas.join(", ")}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Service Links */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Premium Services for Chichester's Historic Properties
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our heritage expertise perfectly complements Chichester's Conservation Areas and period properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/services/kitchen-renovations" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Home className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Heritage Kitchens</h3>
                    <p className="text-sm text-muted-foreground">Sympathetic kitchen design for period properties</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/home-renovations" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Building className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Period Extensions</h3>
                    <p className="text-sm text-muted-foreground">Conservation Area compliant extensions and conversions</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/small-carpentry-jobs" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Wrench className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Period Joinery</h3>
                    <p className="text-sm text-muted-foreground">Traditional carpentry techniques for historic properties</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/general-building-works" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Award className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Heritage Restoration</h3>
                    <p className="text-sm text-muted-foreground">Listed building restoration and conservation work</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Our <Link to="/services/kitchen-renovations" className="text-golden hover:underline">heritage kitchen services</Link> are specially designed for Chichester's Conservation Areas, while our <Link to="/services/home-renovations" className=\"text-golden hover:underline">period extension expertise</Link> ensures compliance with historic building requirements.
              </p>
              <Button variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Local Area Coverage */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Serving Historic Chichester and Surrounding Villages
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive carpentry services across West Sussex's most prestigious areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((area, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-golden" />
                      {area.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose JPW */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why Chichester's Discerning Homeowners Choose JPW
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-golden">Heritage Expertise</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />20+ years working with Chichester's historic properties</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Deep understanding of Conservation Area requirements</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Established relationships with Chichester District Council planning</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Traditional joinery techniques combined with modern standards</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-golden">Premium Quality</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Only the finest materials sourced from specialist suppliers</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Time-served craftsmen with heritage property experience</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Attention to detail that matches Chichester's high standards</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Bespoke solutions for unique period property challenges</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-golden">Local Knowledge</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Born and raised in West Sussex - understand local architecture</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />South Downs National Park planning expertise</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Cathedral city parking and access solutions</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Network of trusted local suppliers and specialists</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-golden">Comprehensive Service</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Full project management from design to completion</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Planning permission and Building Regulations support</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Listed Building Consent applications</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Insurance work and period property surveys</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Prestigious Chichester Carpentry Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Showcasing our expertise with heritage properties and luxury homes
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-golden">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm mb-1">Challenge:</p>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Solution:</p>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <Badge variant="outline" className="border-golden text-golden">
                        <Clock className="w-3 h-3 mr-1" />
                        {project.timeline}
                      </Badge>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm font-medium italic text-primary">{project.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Chichester Clients Say</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.review}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conservation & Planning Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Chichester Conservation Area & Planning Expertise
              </h2>
              <p className="text-xl text-muted-foreground">
                Navigate complex heritage requirements with confidence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <CheckCircle className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold">Chichester District Council</h3>
                  <p className="text-sm text-muted-foreground">Established planning relationships</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Shield className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold">Conservation Areas</h3>
                  <p className="text-sm text-muted-foreground">Cathedral Quarter, Pallant, St. Pancras expertise</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Award className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold">Listed Buildings</h3>
                  <p className="text-sm text-muted-foreground">Grade I, Grade II, and Grade II* experience</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <MapPin className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold">South Downs National Park</h3>
                  <p className="text-sm text-muted-foreground">Landscape and heritage considerations</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <CheckCircle className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold">Historic England</h3>
                  <p className="text-sm text-muted-foreground">Compliance with national heritage guidelines</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Badge variant="outline" className="border-golden text-golden px-6 py-3 text-lg">
                98% planning approval rate for Chichester applications
              </Badge>
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
                Common questions about our Chichester carpentry services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Do you work on heritage properties in Chichester?",
                  answer: "Yes, we specialize in heritage property restoration in Chichester. We understand the unique requirements of listed buildings and work closely with conservation officers to ensure compliance."
                },
                {
                  question: "Are you familiar with Chichester District Council planning requirements?",
                  answer: "Absolutely. We have extensive experience with Chichester District Council planning applications and building regulations, particularly for conservation areas and listed properties."
                },
                {
                  question: "How long do luxury kitchen installations take in Chichester?",
                  answer: "Premium kitchen installations in Chichester typically take 3-5 weeks, depending on the complexity and any structural modifications required for heritage properties."
                },
                {
                  question: "Do you provide free consultations for Chichester properties?",
                  answer: "Yes, we offer free consultations for all Chichester projects. For heritage properties, we provide detailed feasibility assessments at no cost."
                },
                {
                  question: "What areas around Chichester do you serve?",
                  answer: "We serve Chichester city center, Goodwood, Fishbourne, Bosham, West Wittering, and surrounding West Sussex villages within 15 miles of the cathedral."
                },
                {
                  question: "Do you have experience with period property regulations?",
                  answer: "Yes, we have over 15 years of experience working with period properties in Chichester, including Tudor, Georgian, and Victorian buildings requiring special conservation techniques."
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Discuss Your Chichester Carpentry Project
              </h2>
              <p className="text-xl text-muted-foreground">
                Heritage property assessments and premium carpentry consultations available
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-golden/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-golden" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call for Immediate Response</h3>
                      <a href="tel:07399594658" className="text-golden hover:underline text-lg font-medium">
                        07399594658
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-golden/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-golden" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Consultation</h3>
                      <a href="mailto:joewhitfield@jpwcarpentrybuilding.com" className="text-golden hover:underline">
                        joewhitfield@jpwcarpentrybuilding.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-golden/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-golden" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Service Area</h3>
                      <p className="text-muted-foreground">Chichester, South Downs villages, and West Sussex</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-golden/10 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-golden" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Response Time</h3>
                      <p className="text-muted-foreground">Heritage property assessments available</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4">Areas We Cover:</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>• Cathedral Quarter</div>
                    <div>• Pallant</div>
                    <div>• St. Pancras</div>
                    <div>• Summersdale</div>
                    <div>• Fishbourne</div>
                    <div>• Bosham</div>
                    <div>• Westgate</div>
                    <div>• South Downs Villages</div>
                  </div>
                </div>
              </div>
              
              <Card className="p-8 bg-gradient-to-br from-golden/5 to-golden/10 border-golden/20">
                <CardHeader className="p-0 mb-6 text-center">
                  <CardTitle className="text-2xl text-primary">Ready to Discuss Your Heritage Property?</CardTitle>
                  <CardDescription>Get expert advice on your Chichester conservation project</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6 text-center">
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
                  
                  <Button size="lg" asChild className="w-full bg-gradient-to-r from-golden to-golden-hover text-dark-bg font-semibold py-3">
                    <Link to="/#contact-section">Get Your Heritage Property Quote Online</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* FAQ Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you work on heritage properties in Chichester?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in heritage property restoration in Chichester. We understand the unique requirements of listed buildings and work closely with conservation officers to ensure compliance."
              }
            },
            {
              "@type": "Question",
              "name": "Are you familiar with Chichester District Council planning requirements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We have extensive experience with Chichester District Council planning applications and building regulations, particularly for conservation areas and listed properties."
              }
            },
            {
              "@type": "Question",
              "name": "How long do luxury kitchen installations take in Chichester?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Premium kitchen installations in Chichester typically take 3-5 weeks, depending on the complexity and any structural modifications required for heritage properties."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide free consultations for Chichester properties?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer free consultations for all Chichester projects. For heritage properties, we provide detailed feasibility assessments at no cost."
              }
            },
            {
              "@type": "Question",
              "name": "What areas around Chichester do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve Chichester city center, Goodwood, Fishbourne, Bosham, West Wittering, and surrounding West Sussex villages within 15 miles of the cathedral."
              }
            },
            {
              "@type": "Question",
              "name": "Do you have experience with period property regulations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we have over 15 years of experience working with period properties in Chichester, including Tudor, Georgian, and Victorian buildings requiring special conservation techniques."
              }
            }
          ]
        })}
      </script>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "JPW Carpentry - Chichester Heritage Specialists",
          "description": "Expert carpentry services in Chichester, West Sussex. Conservation Area specialists, period property renovations, bespoke joinery.",
          "url": "https://jpwcarpentry.lovable.app/chichester-carpentry-services",
          "telephone": "07399594658",
          "email": "joewhitfield@jpwcarpentrybuilding.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chichester",
            "addressRegion": "West Sussex",
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.8367",
            "longitude": "-0.7792"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Chichester"
            },
            {
              "@type": "Place",
              "name": "Cathedral Quarter"
            },
            {
              "@type": "Place", 
              "name": "Pallant"
            },
            {
              "@type": "Place",
              "name": "Summersdale"
            },
            {
              "@type": "Place",
              "name": "Fishbourne"
            }
          ],
          "serviceType": [
            "Conservation Area Carpentry",
            "Period Property Restoration", 
            "Heritage Window Restoration",
            "Listed Building Carpentry",
            "Bespoke Kitchen Design",
            "Luxury Home Extensions"
          ],
          "priceRange": "£££",
          "openingHours": "Mo-Fr 07:00-18:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50"
          }
        })}
      </script>
    </>
  );
};

export default ChichesterCarpentry;