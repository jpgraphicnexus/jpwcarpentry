import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import kitchenRenovation from "@/assets/kitchen-renovation.webp";
import carpenterWorking from "@/assets/carpenter-working.jpg";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const KitchenRenovations = () => {
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
    "Custom kitchen design",
    "Quality worktop installation", 
    "Built-in appliance fitting",
    "Plumbing and electrical work",
    "Tiling and splashbacks",
    "Storage solutions"
  ];

  const processSteps = [
    {
      title: "Design Consultation",
      description: "Discuss your kitchen vision and take detailed measurements",
      duration: "1-2 hours"
    },
    {
      title: "3D Design & Quote",
      description: "Create detailed plans and provide comprehensive quote",
      duration: "3-5 days"
    },
    {
      title: "Ordering & Planning",
      description: "Order materials and coordinate installation schedule",
      duration: "2-3 weeks"
    },
    {
      title: "Installation",
      description: "Professional fitting with minimal disruption to your home",
      duration: "5-10 days"
    },
    {
      title: "Finishing Touches",
      description: "Final adjustments and quality checks",
      duration: "1-2 days"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/services">Services</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Kitchen Renovations</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
                  KITCHEN <span className="font-playfair text-golden">RENOVATIONS</span>
                </h1>
                <p className="text-xl text-medium-gray leading-relaxed">
                  Complete kitchen transformations, we can work alongside you to plan a kitchen with a chosen manufacturer. From which we can carry out the project start to finish to achieve your desired results.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  Quality Fitting
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  All Trades Included
                </Badge>
              </div>

              <div className="pt-4">
                 <Button size="lg" className="bg-golden hover:bg-golden/90 text-dark-bg font-medium px-8 py-3"
                   onClick={handleContactClick}
                 >
                  Get Free Kitchen Quote
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={kitchenRenovation}
                alt="Beautiful modern kitchen renovation by JPW Carpentry & Building"
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

      {/* Features Section */}
      <section className="w-full py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">What's Included</h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Our kitchen renovation service covers every aspect of your project from initial design to final installation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-background rounded-lg">
                <div className="w-3 h-3 bg-golden rounded-full flex-shrink-0"></div>
                <span className="text-primary font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Kitchen Renovation Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our proven approach ensures your kitchen renovation runs smoothly from design to completion.
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
             <Button size="lg" className="bg-golden hover:bg-golden/90 text-dark-bg font-medium px-8 py-3"
               onClick={handleContactClick}
             >
              Start Your Kitchen Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KitchenRenovations;