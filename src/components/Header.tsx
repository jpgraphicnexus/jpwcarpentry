import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-background py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center">
            <div className="w-3 h-3 border-t-2 border-r-2 border-dark-bg rotate-45 -ml-0.5 -mb-0.5"></div>
          </div>
          <h1 className="text-2xl font-bold text-primary">JPW Carpentry & Building</h1>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/blog" 
              className="text-primary hover:text-golden transition-colors font-medium"
            >
              Blog
            </Link>
          </nav>
          <Button 
            variant="ghost" 
            className="text-primary hover:text-golden font-medium"
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact-section';
              }
            }}
          >
            Contact
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;