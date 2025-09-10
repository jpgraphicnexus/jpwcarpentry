import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import woodworkingProject from "@/assets/woodworking-project.jpg";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact-section" className="w-full py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Image */}
          <div className="relative">
            <img
              src={woodworkingProject}
              alt="High-quality woodworking and carpentry project showcase"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-golden rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
            </div>
          </div>

          {/* Right Content - Quote Request Form */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-medium-gray mb-2">CONTACT</p>
              <h3 className="text-4xl font-bold text-primary">LET'S KEEP IN TOUCH</h3>
              <p className="text-medium-gray mt-4">
                Request a quote for your carpentry project. We'll get back to you within 24 hours.
              </p>
            </div>

            {/* Quote Request Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-primary">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-primary">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="bg-background border-border"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-primary">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-primary">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium text-primary">
                  Project Address
                </Label>
                <Input
                  id="address"
                  placeholder="Enter the project address"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDetails" className="text-sm font-medium text-primary">
                  Project Details
                </Label>
                <Textarea
                  id="projectDetails"
                  placeholder="Tell us about your carpentry project. What type of work do you need? Custom cabinetry, furniture, trim work, etc."
                  className="bg-background border-border min-h-[120px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-golden hover:bg-golden-hover text-dark-bg font-medium py-3"
              >
                Request Quote
              </Button>
            </form>

            {/* Contact Details */}
            <div className="space-y-4 pt-6 border-t border-border">
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-primary">PHONE</span>
                <span className="text-right text-primary font-medium">(+12) 345 678 90</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-primary">EMAIL</span>
                <span className="text-right text-primary font-medium">support@jpwcarpentry.co</span>
              </div>
              <div className="flex justify-between items-center py-2">
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