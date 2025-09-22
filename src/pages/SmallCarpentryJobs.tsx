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
                  Here at JPW we carry out a range of smaller carpentry jobs some as listed below, these can be quick turnarounds while achieving great results.
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

              <div className="pt-4">
                <Button size="lg" className="bg-golden hover:bg-golden/90 text-dark-bg font-medium px-8 py-3" asChild>
                  <a href="/#contact-section" onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact-section');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact-section';
                    }
                  }}>Get Carpentry Quote</a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={carpenterWorking}
                alt="Small Carpentry Jobs - JPW Carpentry & Building"
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


      <Footer />
    </div>
  );
};

export default SmallCarpentryJobs;