import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center">
                <div className="w-3 h-3 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
              </div>
              <h2 className="text-2xl font-bold text-white">BUILDCORE</h2>
            </div>

            {/* Tagline */}
            <div>
              <h3 className="text-3xl font-bold text-white leading-tight">
                THE SOLUTION FOR
                <br />
                CONSTRUCTION.
              </h3>
            </div>
          </div>

          {/* Right Content - Newsletter */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">Newsletter Update</span>
              <div className="flex-1 flex">
                <Input
                  type="email"
                  placeholder="Enter your email address ..."
                  className="bg-transparent border-b border-gray-600 rounded-none border-0 border-b-1 text-white placeholder:text-gray-400 focus:border-golden"
                />
                <Button variant="ghost" size="icon" className="text-golden hover:text-golden-hover">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-current rotate-45 -ml-0.5 -mb-0.5"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700">
          <div>
            <h4 className="text-white font-bold mb-6">COMPANY</h4>
            <div className="space-y-4">
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                About Us
              </a>
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                Our Stories
              </a>
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                Projects
              </a>
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                Career
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">SUPPORT</h4>
            <div className="space-y-4">
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                Phone Number
              </a>
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                Email Address
              </a>
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                Company Location
              </a>
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                Customer Support
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">SERVICES</h4>
            <div className="space-y-4">
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                General Contracting
              </a>
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                Building Design
              </a>
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                Renovation & Restoration
              </a>
              <a href="#" className="block text-gray-300 hover:text-golden transition-colors">
                Construction Management
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Copyright © Peterdraw 2023. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-golden text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-golden text-sm transition-colors">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;