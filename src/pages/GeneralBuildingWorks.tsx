import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import modernBuilding from "@/assets/modern-building.jpg";
import constructionWorkers from "@/assets/construction-workers.jpg";

const GeneralBuildingWorks = () => {
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
      title: "New Build Construction",
      description: "Ground-up construction of new residential properties and commercial buildings",
      scope: "Complete construction management from foundations to roof"
    },
    {
      title: "Structural Repairs", 
      description: "Essential repairs to foundations, walls, and structural elements",
      scope: "Underpinning, crack repairs, and strengthening works"
    },
    {
      title: "Commercial Projects",
      description: "Office fit-outs, retail spaces, and commercial building maintenance",
      scope: "Project management for business premises"
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
      <Header />
      
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
                  Commercial & Residential
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  Fully Licensed
                </Badge>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div>
                  <span className="text-sm text-medium-gray">Project Range:</span>
                  <div className="text-2xl font-bold text-primary">£5k - £500k+</div>
                </div>
                <div>
                  <span className="text-sm text-medium-gray">Duration:</span>
                  <div className="text-2xl font-bold text-primary">2-52 weeks</div>
                </div>
              </div>

              <Button size="lg" className="bg-golden hover:bg-golden/90 text-dark-bg font-medium px-8 py-3">
                Get Building Quote
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={modernBuilding}
                alt="General Building Works - JPW Carpentry & Building"
                className="w-full h-96 object-cover rounded-lg"
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
              From small repairs to major construction projects, we handle all types of building work with professional expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Services Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">Complete Building Services</h2>
              <p className="text-lg text-medium-gray leading-relaxed">
                Our comprehensive building services cover all aspects of construction, from groundwork to final finishes, ensuring quality results on every project.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden rounded-full flex-shrink-0"></div>
                    <span className="text-medium-gray">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={constructionWorkers}
                alt="Professional Building Team - JPW Carpentry & Building"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-golden rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Our Building Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto">
                <span className="text-dark-bg font-bold text-2xl">JPW</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Trusted Partner</h3>
              <p className="text-medium-gray">Reliable building expertise across all project types</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto">
                <span className="text-dark-bg font-bold text-2xl">100%</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Quality Guarantee</h3>
              <p className="text-medium-gray">All work backed by comprehensive warranties and insurance</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto">
                <span className="text-dark-bg font-bold text-2xl">£2M</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Fully Insured</h3>
              <p className="text-medium-gray">Comprehensive public liability and employer's insurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Building Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our systematic approach ensures every building project is delivered safely, on time, and to the highest standards.
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
              Start Your Building Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralBuildingWorks;