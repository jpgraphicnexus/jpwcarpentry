import { Button } from "@/components/ui/button";
import constructionWorkerPortrait from "@/assets/construction-worker-portrait.jpg";
import modernBuilding from "@/assets/modern-building.jpg";

const ContactSection = () => {
  return (
    <section className="w-full py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <img
              src={modernBuilding}
              alt="Modern building architecture"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-golden rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-medium-gray mb-2">CONTACT</p>
              <h3 className="text-4xl font-bold text-primary">LET'S KEEP IN TOUCH</h3>
            </div>

            {/* Construction Worker Portrait */}
            <div className="w-48 h-48">
              <img
                src={constructionWorkerPortrait}
                alt="Construction professional"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-sm font-medium text-primary">PHONE</span>
                <span className="text-right text-primary font-medium">(+12) 345 678 90</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-sm font-medium text-primary">EMAIL</span>
                <span className="text-right text-primary font-medium">support@buildcore.co</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-sm font-medium text-primary">LOCATION</span>
                <span className="text-right text-primary font-medium">123 Anywhere Street, Any State</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;