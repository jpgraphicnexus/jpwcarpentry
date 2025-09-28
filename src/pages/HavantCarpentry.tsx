import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Star, Shield, Heart, Users, Home, CheckCircle, Calendar, PoundSterling, Building } from "lucide-react";
import homeRenovation from "@/assets/home-renovation.webp";

const HavantCarpentry = () => {
  const seoData = useSEO('/havant-carpentry-services');
  
  const services = [
    {
      title: "Family Kitchen Renovations",
      description: "Create the heart of your Havant home with practical, beautiful kitchens",
      priceRange: "From £6,500",
      icon: <Home className="w-8 h-8 text-golden" />,
      areas: ["Waterlooville", "Leigh Park", "Bedhampton"],
      features: ["Family-friendly layouts", "Durable surfaces", "Smart storage", "Child safety features"]
    },
    {
      title: "Loft Conversions & Storage",
      description: "Add valuable space to your Havant family home",
      priceRange: "From £12,000",
      icon: <Users className="w-8 h-8 text-golden" />,
      benefit: "No need to move house - extend up instead",
      features: ["Extra bedrooms", "Play areas", "Home offices", "Storage solutions"]
    },
    {
      title: "Children's Bedroom Solutions",
      description: "Built-in storage and study areas for growing families",
      priceRange: "From £800",
      icon: <Heart className="w-8 h-8 text-golden" />,
      popular: "Bunk beds, wardrobes, desk areas",
      features: ["Custom storage", "Study zones", "Safety features", "Growth adaptable"]
    },
    {
      title: "Home Office Conversions",
      description: "Create productive workspaces in Havant homes",
      priceRange: "From £1,500",
      icon: <Shield className="w-8 h-8 text-golden" />,
      trend: "Perfect for hybrid working families",
      features: ["Quiet zones", "Built-in desks", "Tech solutions", "Flexible spaces"]
    },
    {
      title: "Garden Room & Outdoor Spaces",
      description: "Extend your living space into the garden",
      priceRange: "From £8,000",
      icon: <Home className="w-8 h-8 text-golden" />,
      popular: "Family entertainment, teenage retreats",
      features: ["All-weather use", "Family gathering", "Teen spaces", "Exercise rooms"]
    },
    {
      title: "Utility & Storage Solutions",
      description: "Organize your busy family life with smart storage",
      priceRange: "From £600",
      icon: <Users className="w-8 h-8 text-golden" />,
      essential: "Mudrooms, pantries, garage storage",
      features: ["Boot rooms", "Pantry storage", "Toy organization", "Sports equipment"]
    }
  ];

  const projects = [
    {
      title: "Waterlooville Kitchen Extension",
      description: "Open-plan kitchen-diner for growing family",
      challenge: "Limited space, tight budget, young children at home",
      solution: "Single-storey extension, family-friendly layout, phased construction",
      timeline: "8 weeks",
      result: "'Finally have space for family meals' - The Johnson Family"
    },
    {
      title: "Leigh Park Loft Conversion",
      description: "Two-bedroom loft conversion for expanding family",
      challenge: "Trussed roof, limited headroom, noise considerations",
      solution: "Steel frame, dormer windows, sound insulation",
      timeline: "10 weeks",
      result: "Added value: £28,000 - no need to move house"
    },
    {
      title: "Bedhampton Home Office",
      description: "Garden office for working parent",
      challenge: "Planning permission, garden access, family budget",
      solution: "Permitted development design, modular construction",
      timeline: "4 weeks",
      result: "'Perfect work-life balance solution'"
    }
  ];

  const testimonials = [
    {
      name: "The Mitchell Family",
      location: "Waterlooville (PO7)",
      review: "JPW transformed our cramped kitchen into a space where our family actually wants to spend time. They worked around our children's routines and kept disruption to a minimum. Excellent value for money.",
      rating: 5
    },
    {
      name: "Sarah & Tom",
      location: "Havant (PO9)",
      review: "Our loft conversion gave us the extra bedrooms we desperately needed. JPW's team was professional, tidy, and surprisingly quiet considering the work involved. The kids barely noticed the disruption.",
      rating: 5
    },
    {
      name: "The Roberts Family",
      location: "Emsworth (PO10)",
      review: "Built-in storage throughout our house has been a game-changer for family organization. JPW understood exactly what we needed and delivered beyond expectations. Highly recommend to other families.",
      rating: 5
    }
  ];

  const areas = [
    { name: "Central Havant", description: "Town center, residential streets, period properties" },
    { name: "Waterlooville", description: "Family estates, modern developments, suburban homes" },
    { name: "Leigh Park", description: "Community housing, family properties, renovation projects" },
    { name: "Bedhampton", description: "Village properties, mixed housing, family homes" },
    { name: "Emsworth", description: "Border town, period cottages, waterfront properties" },
    { name: "Hayling Island", description: "Coastal properties, holiday homes, family retreats" },
    { name: "Purbrook", description: "Residential area, family developments, modern homes" },
    { name: "Cowplain", description: "Suburban estates, family properties, school catchment areas" }
  ];

  const seasonalProjects = [
    { season: "Spring (March-May)", projects: "Garden rooms, outdoor storage, shed conversions" },
    { season: "Summer (June-August)", projects: "Major renovations during school holidays" },
    { season: "Autumn (September-November)", projects: "Kitchen renovations, utility rooms" },
    { season: "Winter (December-February)", projects: "Planning and design, indoor projects" }
  ];

  return (
    <>
      <SEO {...seoData} />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-golden/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Havant's Trusted <span className="text-golden">Family Carpentry</span> Service
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Transforming family homes across Havant, Waterlooville, and surrounding Hampshire areas with quality craftsmanship at honest prices
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Heart className="w-4 h-4 mr-2" />
                    500+ Happy Families
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    <Shield className="w-4 h-4 mr-2" />
                    15+ Years in Havant
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    <PoundSterling className="w-4 h-4 mr-2" />
                    Fixed Price Guarantee
                  </Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-gradient-to-r from-golden to-golden-hover text-dark-bg font-semibold px-8">
                    <Link to="/#contact-section">
                      <Phone className="w-5 h-5 mr-2" />
                      Get Your Free Havant Quote Today
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
                  src={homeRenovation} 
                  alt="Family home renovation project in Havant by JPW Carpentry"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-golden">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Families Served</div>
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
                Complete Carpentry Solutions for Havant Families
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From growing families to empty nesters, we create practical, beautiful spaces that work for every stage of family life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-golden/20">
                  <CardHeader className="pb-4 text-center">
                    <div className="mx-auto mb-4 p-3 bg-golden/10 rounded-full w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-golden transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <Badge variant="outline" className="border-golden text-golden px-4 py-1">
                        {service.priceRange}
                      </Badge>
                    </div>
                    
                    {service.areas && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">Popular in:</p>
                        <p className="text-sm text-muted-foreground">{service.areas.join(", ")}</p>
                      </div>
                    )}
                    
                    {service.benefit && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">Key Benefit:</p>
                        <p className="text-sm text-muted-foreground">{service.benefit}</p>
                      </div>
                    )}
                    
                    {service.features && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">Features:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="w-3 h-3 mr-2 text-golden flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Area Coverage */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Serving Havant Families Across All Areas
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive family carpentry services throughout Hampshire's family communities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((area, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow text-center">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center justify-center">
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
                Why Havant Families Trust JPW Carpentry
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-golden flex items-center">
                    <Heart className="w-6 h-6 mr-3" />
                    Family Understanding
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />We're a family business serving family homes</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Understand the challenges of living with children during renovations</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Flexible scheduling around school runs and family life</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Child-safe work practices and secure site management</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-golden flex items-center">
                    <PoundSterling className="w-6 h-6 mr-3" />
                    Honest Pricing
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />No-surprise fixed pricing with detailed breakdowns</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Family budget-friendly payment plans available</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Value engineering to maximize your investment</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />10% discount for multiple room projects</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-golden flex items-center">
                    <Shield className="w-6 h-6 mr-3" />
                    Reliable Service
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Turn up when we say we will - respect for busy families</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Clean, tidy work practices - minimal disruption</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Direct communication with project manager</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Emergency callout service for urgent repairs</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-golden flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    Local Commitment
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />15+ years serving Havant and surrounding areas</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Children attend local schools - we're part of the community</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Supporting local suppliers and tradespeople</li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-golden flex-shrink-0 mt-0.5" />Long-term relationships with Havant families</li>
                  </ul>
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
                Family-Focused Services for Havant Homes
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our services are designed around busy family life, perfect for Havant's family-oriented communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/services/kitchen-renovations" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Home className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Family Kitchens</h3>
                    <p className="text-sm text-muted-foreground">Practical kitchen designs for busy family life</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/home-renovations" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Building className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Loft Conversions</h3>
                    <p className="text-sm text-muted-foreground">Add bedrooms without moving - perfect for growing families</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/small-carpentry-jobs" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Users className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Children's Storage</h3>
                    <p className="text-sm text-muted-foreground">Built-in wardrobes and toy storage solutions</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/services/general-building-works" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-golden/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-golden/20 transition-colors">
                      <Home className="h-6 w-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-golden transition-colors">Home Offices</h3>
                    <p className="text-sm text-muted-foreground">Create workspace for hybrid working parents</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Many Havant families choose our <Link to="/services/kitchen-renovations" className="text-golden hover:underline">family kitchen renovations</Link> to create the heart of their home, while our <Link to="/services/home-renovations" className="text-golden hover:underline">loft conversion services</Link> help growing families add space without the disruption of moving.
              </p>
              <Button variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Recent Havant Family Home Transformations
              </h2>
              <p className="text-xl text-muted-foreground">
                Real projects for real families in your local area
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Havant Families Say About JPW</h2>
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
                    <CardTitle className="text-lg flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-golden" />
                      {testimonial.name}
                    </CardTitle>
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

        {/* Family-Friendly Features */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why Families Choose JPW for Home Improvements
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Shield className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold text-sm">Child Safety First</h3>
                  <p className="text-xs text-muted-foreground">All work areas secured, tools locked away daily</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Clock className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold text-sm">Minimal Disruption</h3>
                  <p className="text-xs text-muted-foreground">Phased work to maintain family routines</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Calendar className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold text-sm">Flexible Scheduling</h3>
                  <p className="text-xs text-muted-foreground">Work around school holidays and commitments</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Home className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold text-sm">Clean Work Practices</h3>
                  <p className="text-xs text-muted-foreground">Daily cleanup, dust sheets, respect for spaces</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Users className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold text-sm">Family Consultation</h3>
                  <p className="text-xs text-muted-foreground">Include children in design decisions</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Phone className="w-8 h-8 text-golden mx-auto" />
                  <h3 className="font-semibold text-sm">Emergency Support</h3>
                  <p className="text-xs text-muted-foreground">Priority callout for family safety issues</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seasonal Family Projects */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Perfect Timing for Family Home Improvements
              </h2>
              <p className="text-xl text-muted-foreground">
                Plan your family projects around the school calendar
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasonalProjects.map((season, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg text-golden">{season.season}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{season.projects}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4 text-center">School Holiday Specials</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <CheckCircle className="w-6 h-6 text-golden mx-auto" />
                  <p className="text-sm">Major disruption projects scheduled for school breaks</p>
                </div>
                <div className="space-y-2">
                  <CheckCircle className="w-6 h-6 text-golden mx-auto" />
                  <p className="text-sm">Children's bedroom makeovers during holidays</p>
                </div>
                <div className="space-y-2">
                  <CheckCircle className="w-6 h-6 text-golden mx-auto" />
                  <p className="text-sm">Family consultation sessions during term time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Schools & Community */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Supporting Havant's Family Community
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <CardHeader className="pb-2">
                  <h3 className="font-semibold">School Catchments</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Purbrook Infant, Havant Academy, Warblington School</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardHeader className="pb-2">
                  <h3 className="font-semibold">Community Support</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Local sports clubs, family events, school fundraising</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardHeader className="pb-2">
                  <h3 className="font-semibold">Family Services</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Recommendations for family-friendly suppliers</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardHeader className="pb-2">
                  <h3 className="font-semibold">Local Knowledge</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Best family facilities, parks, activities during projects</p>
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
                Common questions about our Havant family carpentry services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Do you offer family-friendly scheduling in Havant?",
                  answer: "Yes, we understand family life in Havant and offer flexible scheduling including evening and weekend appointments to minimize disruption to your family routine."
                },
                {
                  question: "How do you child-proof work areas during projects?",
                  answer: "Safety is our priority. We secure all work areas, use dust barriers, and ensure tools are safely stored. We're experienced in working around families with young children in Havant homes."
                },
                {
                  question: "What's the typical timeline for a family kitchen renovation in Havant?",
                  answer: "Family kitchen renovations in Havant typically take 2-3 weeks. We coordinate with families to minimize disruption, often working in phases to maintain some kitchen functionality."
                },
                {
                  question: "Do you provide free quotes for Havant family projects?",
                  answer: "Yes, we provide free, comprehensive quotes for all Havant projects. We'll visit at a time convenient for your family schedule."
                },
                {
                  question: "Which areas of Havant do you cover?",
                  answer: "We cover all Havant areas including Leigh Park, Waterlooville, Emsworth, Hayling Island, and surrounding Hampshire family neighborhoods."
                },
                {
                  question: "How do you handle noise and disruption for families?",
                  answer: "We coordinate noisy work around school hours and nap times when possible. All families receive a detailed schedule so you can plan activities accordingly."
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
                Start Your Havant Family Home Transformation
              </h2>
              <p className="text-xl text-muted-foreground">
                Evening and weekend appointments available for busy families
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
                      <h3 className="font-semibold">Call for Family-Friendly Quote</h3>
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
                      <p className="text-muted-foreground">Havant, Waterlooville, Hayling Island, and surrounding Hampshire</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-golden/10 p-3 rounded-full">
                      <Calendar className="w-6 h-6 text-golden" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Flexible Appointments</h3>
                      <p className="text-muted-foreground">Evening and weekend consultations available</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4">Family-Friendly Benefits:</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center"><Heart className="w-4 h-4 mr-2 text-golden" />Child-safe work practices</div>
                    <div className="flex items-center"><Clock className="w-4 h-4 mr-2 text-golden" />Flexible scheduling</div>
                    <div className="flex items-center"><Shield className="w-4 h-4 mr-2 text-golden" />Family budget considerations</div>
                    <div className="flex items-center"><Users className="w-4 h-4 mr-2 text-golden" />Local community involvement</div>
                  </div>
                </div>
              </div>
              
              <Card className="p-8 bg-gradient-to-br from-golden/5 to-golden/10 border-golden/20">
                <CardHeader className="p-0 mb-6 text-center">
                  <CardTitle className="text-2xl text-primary">Ready for Your Family-Friendly Project?</CardTitle>
                  <CardDescription>Get your free quote with family scheduling options</CardDescription>
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
                    <Link to="/#contact-section">
                      <Heart className="w-5 h-5 mr-2" />
                      Get Your Family-Friendly Quote Online
                    </Link>
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
              "name": "Do you offer family-friendly scheduling in Havant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we understand family life in Havant and offer flexible scheduling including evening and weekend appointments to minimize disruption to your family routine."
              }
            },
            {
              "@type": "Question",
              "name": "How do you child-proof work areas during projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Safety is our priority. We secure all work areas, use dust barriers, and ensure tools are safely stored. We're experienced in working around families with young children in Havant homes."
              }
            },
            {
              "@type": "Question",
              "name": "What's the typical timeline for a family kitchen renovation in Havant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Family kitchen renovations in Havant typically take 2-3 weeks. We coordinate with families to minimize disruption, often working in phases to maintain some kitchen functionality."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide free quotes for Havant family projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide free, comprehensive quotes for all Havant projects. We'll visit at a time convenient for your family schedule."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Havant do you cover?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We cover all Havant areas including Leigh Park, Waterlooville, Emsworth, Hayling Island, and surrounding Hampshire family neighborhoods."
              }
            },
            {
              "@type": "Question",
              "name": "How do you handle noise and disruption for families?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We coordinate noisy work around school hours and nap times when possible. All families receive a detailed schedule so you can plan activities accordingly."
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
          "name": "JPW Carpentry - Havant Family Home Specialists",
          "description": "Professional carpentry services in Havant, Hampshire. Kitchen renovations, loft conversions, built-in storage for family homes. Competitive prices, reliable service.",
          "url": "https://jpwcarpentry.lovable.app/havant-carpentry-services",
          "telephone": "07399594658",
          "email": "joewhitfield@jpwcarpentrybuilding.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Havant",
            "addressRegion": "Hampshire",
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.8541",
            "longitude": "-0.9815"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Havant"
            },
            {
              "@type": "Place",
              "name": "Waterlooville"
            },
            {
              "@type": "Place", 
              "name": "Leigh Park"
            },
            {
              "@type": "Place",
              "name": "Bedhampton"
            },
            {
              "@type": "Place",
              "name": "Emsworth"
            },
            {
              "@type": "Place",
              "name": "Hayling Island"
            }
          ],
          "serviceType": [
            "Family Kitchen Renovations",
            "Loft Conversions & Storage", 
            "Children's Bedroom Solutions",
            "Home Office Conversions",
            "Garden Room & Outdoor Spaces",
            "Utility & Storage Solutions"
          ],
          "priceRange": "££",
          "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "120"
          },
          "speciality": [
            "Family-focused carpentry",
            "Child-safe work practices",
            "Flexible family scheduling",
            "Budget-friendly solutions"
          ]
        })}
      </script>
    </>
  );
};

export default HavantCarpentry;