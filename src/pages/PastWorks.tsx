import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import modernBuilding from "@/assets/modern-building.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import customFurniture from "@/assets/custom-furniture.jpg";

const PastWorks = () => {
  const projects = [
    {
      title: "Victorian Home Extension",
      location: "Cambridge",
      year: "2024",
      type: "Two-Storey Extension",
      description: "Complete two-storey rear extension including kitchen renovation, new bathrooms, and structural alterations. Project included planning permission, building regulations, and full project management.",
      features: ["Structural steelwork", "Kitchen renovation", "New electrical systems", "Underfloor heating"],
      duration: "16 weeks",
      value: "£85,000",
      image: modernBuilding
    },
    {
      title: "Loft Conversion & Renovation",
      location: "St Albans", 
      year: "2024",
      type: "Loft Conversion",
      description: "Full loft conversion creating master bedroom with en-suite, plus ground floor renovation including new kitchen and living spaces. Complete rewire and central heating upgrade.",
      features: ["Dormer windows", "En-suite bathroom", "Velux windows", "Full house rewire"],
      duration: "12 weeks",
      value: "£65,000",
      image: officeInterior
    },
    {
      title: "Period Property Restoration",
      location: "Hertford",
      year: "2023", 
      type: "Full Renovation",
      description: "Comprehensive restoration of 1930s semi-detached property. Complete strip-out and rebuild including new roof, windows, kitchen, bathrooms, and landscaping.",
      features: ["New roof installation", "Window replacement", "Full rewire & plumbing", "Garden landscaping"],
      duration: "20 weeks",
      value: "£120,000",
      image: customFurniture
    },
    {
      title: "Open Plan Living Extension",
      location: "Watford",
      year: "2023",
      type: "Single-Storey Extension", 
      description: "Modern single-storey extension creating open plan kitchen-dining-living space. Included bi-fold doors, underfloor heating, and complete interior redesign.",
      features: ["Bi-fold doors", "Underfloor heating", "Open plan design", "New boiler system"],
      duration: "10 weeks", 
      value: "£55,000",
      image: modernBuilding
    },
    {
      title: "Garage Conversion & Extension",
      location: "Stevenage",
      year: "2023",
      type: "Conversion & Extension",
      description: "Converted existing garage into living space and added small extension for utility room. Included damp-proofing, insulation, and complete electrical installation.",
      features: ["Garage conversion", "Utility extension", "Damp-proofing", "New heating zone"],
      duration: "8 weeks",
      value: "£45,000", 
      image: officeInterior
    },
    {
      title: "Edwardian House Renovation",
      location: "Hitchin",
      year: "2022",
      type: "Full Renovation",
      description: "Complete renovation of Edwardian terrace including new kitchen, bathrooms, flooring throughout, and rear garden landscaping. Preserved original features while modernizing.",
      features: ["Period feature restoration", "New bathrooms", "Hardwood flooring", "Garden design"],
      duration: "14 weeks",
      value: "£75,000",
      image: customFurniture
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "£2M+", label: "Total Project Value" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5★", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            OUR <span className="font-playfair text-golden">PAST WORKS</span>
          </h1>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed mb-12">
            Explore our portfolio of successful home renovations, extensions, and conversions. Each project showcases our commitment to quality craftsmanship and attention to detail.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-golden mb-2">{stat.number}</div>
                <div className="text-medium-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Featured Projects</h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Each project tells a story of transformation, bringing our clients' visions to life through expert craftsmanship and careful project management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="bg-background border-background hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.type} project in ${project.location}`}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-golden text-dark-bg font-medium">
                      {project.year}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-primary border-primary">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                      <CardDescription className="text-golden font-medium">{project.location}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-medium-gray">{project.duration}</div>
                      <div className="text-lg font-bold text-primary">{project.value}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-medium-gray leading-relaxed">{project.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-golden rounded-full"></div>
                          <span className="text-sm text-medium-gray">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="link" className="p-0 text-primary font-medium">
                    View Project Details
                  </Button>
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
              Every successful project follows our proven process, ensuring quality results and satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Initial site visit and project discussion" },
              { step: "02", title: "Planning", desc: "Detailed plans, permits, and scheduling" },
              { step: "03", title: "Construction", desc: "Expert building with regular updates" },
              { step: "04", title: "Completion", desc: "Final inspection and project handover" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-dark-bg font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PastWorks;