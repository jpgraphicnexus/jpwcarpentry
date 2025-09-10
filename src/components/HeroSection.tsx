import { Button } from "@/components/ui/button";
import constructionWorkers from "@/assets/construction-workers.jpg";
import modernBuilding from "@/assets/modern-building.jpg";
import officeInterior from "@/assets/office-interior.jpg";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="relative">
              <h2 className="text-6xl lg:text-7xl font-bold text-primary leading-tight font-playfair">
                CRAFTING EXCELLENCE
                <br />
                FOR YOUR HOME
              </h2>
            </div>

            {/* Workers Image with Experience Badge */}
            <div className="relative">
              <img
                src={constructionWorkers}
                alt="Professional carpenters reviewing project plans"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-6 left-6 bg-light-gray px-6 py-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-medium-gray">Years of Experience</div>
              </div>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="rounded-full">
                custom woodwork
              </Button>
              <Button variant="outline" className="rounded-full">
                furniture design
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Navigation Tabs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="text-sm font-medium text-primary">ABOUT US</span>
                <span className="text-2xl font-bold text-golden">01</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="text-sm font-medium text-primary">PAST WORKS</span>
                <span className="text-2xl font-bold text-golden">02</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="text-sm font-medium text-primary">AVAILABLE SERVICES</span>
                <span className="text-2xl font-bold text-golden">03</span>
              </div>
            </div>

            {/* About Content */}
            <div className="bg-light-gray p-8 rounded-lg">
              <p className="text-medium-gray mb-6 leading-relaxed">
                Committed to excellence, quality, and craftsmanship, we bring your carpentry
                vision to life with unmatched expertise and dedication.
              </p>
              <Button variant="link" className="p-0 text-primary font-medium">
                Read More
              </Button>
            </div>

            {/* Building Image */}
            <div className="relative">
              <img
                src={modernBuilding}
                alt="Modern building architecture"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-golden rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;