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
import { MapPin, Phone, Mail, Star, Clock, Shield, Award, CircleCheck as CheckCircle, Building, Chrome as Home, Wrench } from "lucide-react";
import carpenterWorking from "@/assets/carpenter-working.jpg";
import oakDoors from "@/assets/oak-doors.webp";

const ChichesterCarpentry = () => {
  const seoData = useSEO('/chichester-carpentry-services');
  
  const services = [
    {
      title: "Conservation Work",
      description: "Keeping work in keeping with the great architecture of Chichester and historic value"
    },
    {
      title: "Renovating Period Properties",
      description: "Taking care to use original materials and keeping the job authentic"
    },
    {
      title: "Bespoke Kitchen Design",
      description: "Handcrafted kitchens for Chichester's finest homes"
    },
    {
      title: "Loft Conversions",
      description: "Loft conversions available in the Chichester area"
    },
    {
      title: "Home Extensions",
      description: "Premium extensions for Chichester homes"
    }
  ];


  const areas = [
    { name: "Cathedral Quarter" },
    { name: "Pallant" },
    { name: "St. Pancras" },
    { name: "Summersdale" },
    { name: "Fishbourne" },
    { name: "Bosham" },
    { name: "Westgate" },
    { name: "South Downs Villages" }
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
                    Chichester based carpentry and building specialists
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    A team of passionate, precise and professional tradesmen based in the Chichester area, carrying out a high-quality level of work to the customer's needs.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Shield className="w-4 h-4 mr-2" />
                    High Quality Craftsmen
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
                      Get Your Quote Now
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
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Specialist Carpentry Services for Chichester
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From bespoke kitchens to pitching a new hand-cut roof, JPW can cover all your carpentry and construction needs in and around the Chichester area.
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
                Serving Chichester and Surrounding Villages
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((area, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow text-center">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 mr-2 text-golden" />
                      {area.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
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