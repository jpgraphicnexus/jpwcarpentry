import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {/* Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center">
                <div className="w-3 h-3 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
              </div>
              <h2 className="text-2xl font-bold text-white">JPW Carpentry & Building</h2>
            </div>

            {/* Tagline */}
            <div>
              <h3 className="text-3xl font-bold text-white leading-tight">
                THE SOLUTION FOR
                <br />
                CARPENTRY & BUILDING.
              </h3>
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
              <a href="/services/kitchen-renovations" className="block text-gray-300 hover:text-golden transition-colors">
                Kitchen Renovations
              </a>
              <a href="/services/small-carpentry-jobs" className="block text-gray-300 hover:text-golden transition-colors">
                Small Carpentry Jobs
              </a>
              <a href="/services/home-renovations" className="block text-gray-300 hover:text-golden transition-colors">
                Home Renovations
              </a>
              <a href="/services/general-building-works" className="block text-gray-300 hover:text-golden transition-colors">
                General Building Works
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Copyright © JPW Carpentry & Building 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;