import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import homeRenovation from "@/assets/home-renovation.webp";
import modernBuilding from "@/assets/modern-building.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const HomeRenovations = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === '/') {
      const section = document.getElementById('contact-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#contact-section');
    }
  };
  const features = [
    "Complete property assessment",
    "Extensions and conversions",
    "Loft conversions", 
    "Kitchen renovations",
    "Structural alterations",
    "Timber frame construction",
    "External carpentry work",
    "Full project management"
  ];

  const renovationTypes = [
    {
      title: "Modern Home Makeovers",
      description: "Moved into a new build but want to personalise it abit? No problem, here at JPW we can help you add areas of your home to personalise it to your specifications. These renovations are often cheaper as they often don't require as much major works instead minor changes with big effects.",
      features: ["Open plan living", "Smart home integration", "Sustainable materials"]
    },
    {
      title: "Older Properties Refreshed", 
      description: "We enjoy taking on projects whereby we can bring back to life a dated property. Great results can be achieved whether it's by adding extra space through an extension or loft conversion or minor changes to spruce up the interior, we look forward to carrying out these projects as they can be very satisfying!!",
      features: ["Period feature restoration", "Modern amenities integration", "Heritage compliance"]
    }
  ];

  const processSteps = [
    {
      title: "Property Survey",
      description: "Comprehensive assessment of existing structure and systems",
      duration: "1-2 days"
    },
    {
      title: "Design Development",
      description: "Create detailed renovation plans and obtain necessary permits",
      duration: "3-6 weeks"
    },
    {
      title: "Project Planning",
      description: "Schedule all trades and order materials for seamless execution",
      duration: "2-3 weeks"
    },
    {
      title: "Renovation Work",
      description: "Phased renovation with minimal disruption to daily life",
      duration: "8-24 weeks"
    },
    {
      title: "Final Handover",
      description: "Quality checks, snagging, and project completion",
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
                  HOME <span className="font-playfair text-golden">RENOVATIONS</span>
                </h1>
                <p className="text-xl text-medium-gray leading-relaxed">
                  Carrying out renovations from start to finish to transform your property.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  Full Project Management
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  All Trades Coordinated
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  Quality Guarantee
                </Badge>
              </div>

              <div className="pt-4">
                 <Button size="lg" className="bg-golden hover:bg-golden/90 text-dark-bg font-medium px-8 py-3"
                   onClick={handleContactClick}
                 >
                   Get Renovation Quote
                 </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={homeRenovation}
                alt="Complete home renovation with modern kitchen by JPW Carpentry & Building"
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
        </div>
      </section>

      {/* Renovation Types */}
      <section className="w-full py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Renovation Specialties</h2>
              <p className="text-lg text-medium-gray max-w-3xl mx-auto">
                We specialize in different types of home renovations, each tailored to your property's unique requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {renovationTypes.map((type, index) => (
                <div key={index} className="bg-background p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">{type.title}</h3>
                  <p className="text-medium-gray mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-golden rounded-full"></div>
                        <span className="text-medium-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">Complete Renovation Service</h2>
              <p className="text-lg text-medium-gray leading-relaxed">
                Our complete renovation services can handle every area of your project, from initial planing to the final decorations maintaining a high quality and efficient process throughout.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden rounded-full flex-shrink-0"></div>
                    <span className="text-medium-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={modernBuilding}
                alt="Complete Home Renovation - JPW Carpentry & Building"
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
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Renovation Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our structured approach ensures your home renovation is completed on time, on budget, and to the highest standards.
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
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-golden hover:bg-golden/90 text-dark-bg font-medium px-8 py-3">
              Start Your Renovation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeRenovations;