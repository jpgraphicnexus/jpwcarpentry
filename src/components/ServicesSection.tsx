import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import officeInterior from "@/assets/office-interior.jpg";
import customFurniture from "@/assets/custom-furniture.jpg";
import carpenterWorking from "@/assets/carpenter-working.jpg";
import modernBuilding from "@/assets/modern-building.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Kitchen Renovations",
      description: "Complete kitchen transformations with custom carpentry and professional fitting.",
      image: officeInterior,
      link: "/services/kitchen-renovations",
    },
    {
      title: "Small Carpentry Jobs",
      description: "Expert carpentry services for shelving, repairs, and bespoke woodwork projects.",
      image: carpenterWorking,
      link: "/services/small-carpentry-jobs",
    },
    {
      title: "Home Renovations",
      description: "Full project management for extensions, conversions, and complete home makeovers.",
      image: customFurniture,
      link: "/services/home-renovations",
    },
    {
      title: "General Building Works",
      description: "Comprehensive building services from structural work to finishing touches.",
      image: modernBuilding,
      link: "/services/general-building-works",
    },
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-light-gray border-light-gray transition-all duration-500 hover:bg-dark-bg hover:border-dark-bg hover:text-white hover:scale-105 hover:shadow-2xl group cursor-pointer h-48 hover:h-[420px]"
            >
              <CardHeader className="space-y-2 group-hover:space-y-4 transition-all duration-300 p-6">
                <CardTitle className="text-lg group-hover:text-xl font-bold text-primary group-hover:text-white transition-all duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-medium-gray group-hover:text-gray-300 transition-all duration-300 group-hover:block">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 px-6 pb-6">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                    width="256"
                    height="192"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
                  </div>
                </div>
                <Link to={service.link}>
                  <Button
                    variant="link"
                    className="p-0 font-medium text-white transition-all duration-300"
                  >
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;