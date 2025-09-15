import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import carpenterPortrait from "@/assets/carpenter-portrait.jpg";
import modernBuilding from "@/assets/modern-building.jpg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "James Wilson",
      role: "Managing Director & Site Manager",
      description: "Leading major renovations and extensions across the region"
    },
    {
      name: "Paul Mitchell", 
      role: "Senior Builder & Foreman",
      description: "Specializing in structural work and complex builds"
    },
    {
      name: "Our Trusted Network",
      role: "Subcontractors & Specialists",
      description: "Electricians, plumbers, roofers, and specialist contractors"
    }
  ];

  const values = [
    {
      title: "Quality Craftsmanship",
      description: "Every project is built to the highest standards using premium materials and proven techniques."
    },
    {
      title: "Project Management Excellence", 
      description: "Full oversight from planning to completion, ensuring your project stays on time and budget."
    },
    {
      title: "Transparent Communication",
      description: "Regular updates and honest advice throughout your build, keeping you informed every step."
    },
    {
      title: "Reliable Service",
      description: "Dependable team that shows up on time and delivers what we promise, every time."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                  ABOUT <span className="font-playfair text-golden">JPW CARPENTRY</span>
                  <br />
                  & BUILDING
                </h1>
                <p className="text-lg text-medium-gray leading-relaxed">
                  JPW Carpentry & Building has established itself as a trusted name in major residential construction projects. We specialize in transforming homes through comprehensive renovations, extensions, and conversions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span className="text-medium-gray">Founded in 2015</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span className="text-medium-gray">100+ Major Projects Completed</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span className="text-medium-gray">Fully Insured & Certified</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={modernBuilding}
                alt="Modern home extension and renovation project by JPW Carpentry & Building"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-golden rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              JPW Carpentry & Building was born from a passion for transforming homes and a commitment to excellence in every build. What started as a small carpentry business has evolved into a comprehensive construction company specializing in major residential projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">From Vision to Reality</h3>
              <p className="text-medium-gray leading-relaxed">
                We understand that your home is more than just a building - it's where life happens. Whether you're planning a complete renovation, adding an extension, or converting your loft, we bring the expertise and attention to detail needed to make your vision a reality.
              </p>
              <p className="text-medium-gray leading-relaxed">
                Our approach combines traditional building skills with modern project management techniques. We handle everything from initial planning and permits to the final finishing touches, working with our network of trusted subcontractors to deliver exceptional results.
              </p>
              <Button variant="outline" className="mt-6">
                View Our Projects
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={carpenterPortrait}
                alt="Professional builder from JPW Carpentry & Building team"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Meet Our Team</h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Our skilled team combines construction expertise with a commitment to delivering exceptional results on every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-light-gray border-light-gray hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-golden font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-medium-gray leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do, from the smallest repair to the largest renovation project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
                </div>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;