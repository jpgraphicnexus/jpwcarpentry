import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import carpenterPortrait from "@/assets/carpenter-portrait.jpg";
import modernBuilding from "@/assets/modern-building.jpg";

const AboutUs = () => {

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
                  JPW carpentry and building operates in West Sussex and surrounding areas and takes on a range of construction projects big or small and carries out each project with the care and attention it deserves to get the best results.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span className="text-medium-gray">Founded in 2022</span>
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

      {/* Our Story Section */}
      <section className="w-full py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              JPW carpentry&building was born after Joe (the founder) wanted to take the leap and set up a business in what he loves, carpentry & building, but more importantly working alongside customers to carry out their visions and ideas. We have a real passion for excellence and look forward to every project we take on to deliver the best results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">From Vision to Reality</h3>
              <p className="text-medium-gray leading-relaxed">
                We understand the importance of your home and take pride in helping transform it to the vision you have. Whether you already have the ideas or if you want JPW to assist in the planning and design we are happy to help. From planning a big loft conversion, extension, kitchen or if it's a smaller job such as hanging some doors or a nice outdoor decking.
              </p>
              <p className="text-medium-gray leading-relaxed">
                We bring the same level of care and passion for each project. We work closely with a great team of sub contractors which enables us to project manage projects too to help your build be as stress free as possible by making it run smoothly.
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
                width="576"
                height="320"
                loading="lazy"
                decoding="async"
              />
            </div>
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