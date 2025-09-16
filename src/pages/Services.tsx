import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import modernBuilding from "@/assets/modern-building.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import customFurniture from "@/assets/custom-furniture.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      title: "Home Extensions",
      subtitle: "Single & Two-Storey Extensions", 
      description: "Transform your home with professionally designed and built extensions. From planning permission to final finishes, we handle every aspect of your extension project.",
      features: [
        "Single-storey rear extensions",
        "Two-storey side returns", 
        "Wrap-around extensions",
        "Kitchen extensions",
        "Planning permission assistance",
        "Building regulations compliance"
      ],
      priceRange: "£45k - £120k",
      duration: "10-20 weeks",
      image: modernBuilding
    },
    {
      title: "Loft Conversions", 
      subtitle: "Create Additional Living Space",
      description: "Maximize your home's potential with expert loft conversions. Perfect for bedrooms, home offices, or playrooms, adding value and space to your property.",
      features: [
        "Dormer loft conversions",
        "Velux window installations", 
        "En-suite bathrooms",
        "Staircase installation",
        "Insulation and heating",
        "Structural calculations"
      ],
      priceRange: "£35k - £75k", 
      duration: "8-14 weeks",
      image: officeInterior
    },
    {
      title: "Full Home Renovations",
      subtitle: "Complete Property Transformation",
      description: "Comprehensive renovation services for properties requiring extensive work. From period restorations to modern makeovers, we bring homes back to life.",
      features: [
        "Complete strip-out and rebuild",
        "Structural alterations",
        "New electrical and plumbing",
        "Kitchen and bathroom design",
        "Flooring and decoration",
        "Garden landscaping"
      ],
      priceRange: "£60k - £200k+",
      duration: "12-24 weeks", 
      image: customFurniture
    }
  ];

  const additionalServices = [
    {
      title: "Kitchen Renovations",
      description: "Complete kitchen transformations including design, fitting, and all associated trades.",
      icon: "🏠"
    },
    {
      title: "Bathroom Renovations", 
      description: "Full bathroom installations from design to completion with quality fixtures and fittings.",
      icon: "🚿"
    },
    {
      title: "Garage Conversions",
      description: "Convert unused garage space into valuable living areas or home offices.",
      icon: "🏗️"
    },
    {
      title: "Basement Conversions",
      description: "Transform basements into usable space with proper damp-proofing and insulation.",
      icon: "⬇️"
    },
    {
      title: "Structural Work",
      description: "Load-bearing wall removal, beam installation, and foundation work.",
      icon: "🏛️" 
    },
    {
      title: "Project Management",
      description: "Complete project oversight with our network of trusted subcontractors.",
      icon: "📋"
    }
  ];

  const processSteps = [
    {
      title: "Free Consultation",
      description: "Site visit to discuss your project requirements and provide initial advice",
      duration: "1-2 hours"
    },
    {
      title: "Design & Planning",
      description: "Detailed plans, structural calculations, and permit applications",
      duration: "2-4 weeks"
    },
    {
      title: "Project Planning",
      description: "Scheduling, material ordering, and subcontractor coordination", 
      duration: "1-2 weeks"
    },
    {
      title: "Construction Phase",
      description: "Expert building work with regular progress updates and quality checks",
      duration: "Project dependent"
    },
    {
      title: "Final Inspection",
      description: "Completion check, snagging, and project handover with warranties",
      duration: "1 week"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            OUR <span className="font-playfair text-golden">SERVICES</span>
          </h1>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed mb-12">
            Comprehensive building services for major home improvements. From extensions and conversions to full renovations, we bring your vision to life with expert craftsmanship and project management.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-6 py-2 text-primary border-primary">
              Fully Insured
            </Badge>
            <Badge variant="outline" className="px-6 py-2 text-primary border-primary">
              Building Regulations
            </Badge>
            <Badge variant="outline" className="px-6 py-2 text-primary border-primary">
              Project Management
            </Badge>
            <Badge variant="outline" className="px-6 py-2 text-primary border-primary">
              Quality Guaranteed
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="w-full py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Specialist Services</h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Our core services focus on major building projects that transform homes and add significant value to your property.
            </p>
          </div>
          
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-golden font-medium text-lg">{service.subtitle}</p>
                  </div>
                  
                  <p className="text-medium-gray leading-relaxed text-lg">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-golden rounded-full flex-shrink-0"></div>
                        <span className="text-medium-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-6 pt-4">
                    <div>
                      <span className="text-sm text-medium-gray">Typical Cost:</span>
                      <div className="text-xl font-bold text-primary">{service.priceRange}</div>
                    </div>
                    <div>
                      <span className="text-sm text-medium-gray">Duration:</span>
                      <div className="text-xl font-bold text-primary">{service.duration}</div>
                    </div>
                  </div>
                  
                  <Link to="/#contact-section">
                    <Button className="bg-golden hover:bg-golden/90 text-dark-bg font-medium">
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional building services by JPW Carpentry & Building`}
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
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Additional Services</h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Supporting services to complement your main project or as standalone improvements to your home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-light-gray border-light-gray hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-medium-gray leading-relaxed text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven approach that ensures your project runs smoothly from initial consultation to final handover.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-dark-bg font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">{step.description}</p>
                <p className="text-golden text-xs font-medium">{step.duration}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-golden hover:bg-golden/90 text-dark-bg font-medium px-8 py-3">
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;