import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import carpenterWorking from "@/assets/carpenter-working.jpg";
import woodworkingProject from "@/assets/woodworking-project.jpg";

const SmallCarpentryJobs = () => {
  const services = [
    "Door hanging and repairs",
    "Built-in wardrobes",
    "Custom shelving and storage", 
    "Skirting and architrave fitting",
    "Flooring installation",
    "Media walls and built-ins",
    "Garden gates and fencing",
    "Decking and external carpentry"
  ];

  const processSteps = [
    {
      title: "Initial Assessment",
      description: "Discuss your carpentry needs and take measurements",
      duration: "30-60 mins"
    },
    {
      title: "Quote & Planning",
      description: "Provide detailed quote and material specifications",
      duration: "1-2 days"
    },
    {
      title: "Material Sourcing",
      description: "Source quality timber and hardware for your project",
      duration: "3-5 days"
    },
    {
      title: "Expert Craftsmanship",
      description: "Precision carpentry work with attention to detail",
      duration: "1-5 days"
    },
    {
      title: "Finishing & Cleanup",
      description: "Final sanding, finishing, and site cleanup",
      duration: "Half day"
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
                  SMALL <span className="font-playfair text-golden">CARPENTRY</span> JOBS
                </h1>
                <p className="text-xl text-medium-gray leading-relaxed">
                  Professional carpentry services for doors, built-in wardrobes, flooring, and all your smaller carpentry needs. Quality craftsmanship for every project.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  Expert Craftsmanship
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  Quality Materials
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  Flexible Scheduling
                </Badge>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div>
                  <span className="text-sm text-medium-gray">Typical Cost:</span>
                  <div className="text-2xl font-bold text-primary">£150 - £2k</div>
                </div>
                <div>
                  <span className="text-sm text-medium-gray">Duration:</span>
                  <div className="text-2xl font-bold text-primary">1-5 days</div>
                </div>
              </div>

              <Button size="lg" className="bg-golden hover:bg-golden/90 text-dark-bg font-medium px-8 py-3">
                Get Carpentry Quote
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={carpenterWorking}
                alt="Small Carpentry Jobs - JPW Carpentry & Building"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-golden rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Carpentry Services</h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              From custom shelving to bespoke furniture, we handle all your carpentry needs with precision and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-background rounded-lg">
                <div className="w-3 h-3 bg-golden rounded-full flex-shrink-0"></div>
                <span className="text-primary font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={woodworkingProject}
                alt="Bespoke Carpentry Work - JPW Carpentry & Building"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-golden rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">Bespoke Woodwork</h2>
              <p className="text-lg text-medium-gray leading-relaxed">
                Every piece of woodwork is crafted with attention to detail and quality materials. From simple repairs to complex bespoke furniture, we bring your vision to life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span className="text-medium-gray">Premium quality timber selection</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span className="text-medium-gray">Traditional joinery techniques</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span className="text-medium-gray">Custom finishes and staining</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Simple, efficient process from consultation to completion for all your carpentry needs.
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
              Book Your Carpentry Job
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmallCarpentryJobs;