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
      title: "Kitchen Renovation",
      type: "Kitchen Renovation",
      description: "This kitchen renovation included a removal of a wall to create a big open plan space for the customer to enjoy the great new space, JPW and the team really enjoyed working alongside the client to achieve these great results.",
      image: modernBuilding
    },
    {
      title: "Bungalow Renovation", 
      type: "Full Renovation",
      description: "JPW and the team enjoyed transforming this dated bungalow to a new fresh look to the clients specifications.",
      image: officeInterior
    },
    {
      title: "Loft Conversion",
      type: "Loft Conversion",
      description: "This loft space was taken from an unusable space to a new space creating an extra bedroom and toilet for the client. Really enjoyed transforming this loft to create this new space.",
      image: customFurniture
    },
    {
      title: "Decking",
      type: "Outdoor Decking",
      description: "This decking was transformed from a dangerous rotten decking to a new refreshed look, all built to last.",
      image: modernBuilding
    },
    {
      title: "Oak Staircase",
      type: "Staircase Installation",
      description: "This transformation really changed the clients downstairs space creating a lovely oak effect to match their interior. Really enjoyed this project.",
      image: officeInterior
    },
    {
      title: "Oak Doors",
      type: "Door Installation",
      description: "Sourced and fitted to customers specifications. This project showcases we're happy to take on small projects too. A quick turnaround but a lasting effect for the customer. Doors can really make a major difference to your property.",
      image: customFurniture
    }
  ];

  const stats = [
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
            Here's a portfolio of some of our recent and favourite projects.
          </p>
          
          {/* Stats Grid */}
          <div className="flex justify-center mt-16">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-golden mb-2">5★</div>
              <div className="text-medium-gray font-medium">Average Rating</div>
            </div>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-background border-background hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.type} project by JPW Carpentry & Building`}
                    className="w-full h-64 object-cover rounded-t-lg"
                    width="384"
                    height="256"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-primary border-primary">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-medium-gray leading-relaxed">{project.description}</p>
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