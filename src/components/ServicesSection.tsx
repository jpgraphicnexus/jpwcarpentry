import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import officeInterior from "@/assets/office-interior.jpg";
import modernBuilding from "@/assets/modern-building.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "General Contracting",
      description: "From concept to completion, we handle every aspect of your project.",
      variant: "light" as const,
    },
    {
      title: "Renovation Process",
      description: "Breathe new life into your space with our expertise in renovation and restoration.",
      variant: "light" as const,
    },
    {
      title: "Building Design",
      description: "Seamless integration of design and construction for efficiency and cost savings.",
      variant: "dark" as const,
      image: modernBuilding,
    },
    {
      title: "Building Management",
      description: "We oversee every detail to ensure timely and cost-effective project delivery.",
      variant: "light" as const,
    },
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${
                service.variant === "dark"
                  ? "bg-dark-bg text-white border-dark-bg"
                  : "bg-light-gray border-light-gray"
              } transition-all duration-300 hover:shadow-lg`}
            >
              <CardHeader className="space-y-4">
                <CardTitle
                  className={`text-xl font-bold ${
                    service.variant === "dark" ? "text-white" : "text-primary"
                  }`}
                >
                  {service.title}
                </CardTitle>
                <CardDescription
                  className={`text-sm leading-relaxed ${
                    service.variant === "dark" ? "text-gray-300" : "text-medium-gray"
                  }`}
                >
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.image && (
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
                    </div>
                  </div>
                )}
                <Button
                  variant="link"
                  className={`p-0 font-medium ${
                    service.variant === "dark" ? "text-white" : "text-primary"
                  }`}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;