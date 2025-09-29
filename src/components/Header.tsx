import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import jpwLogo from "@/assets/jpw-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // Already on homepage, just scroll
      const section = document.getElementById('contact-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      navigate('/#contact-section');
    }
  };

  return (
    <header className="w-full bg-background py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={jpwLogo} 
            alt="JPW Carpentry & Building Logo" 
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-2xl font-bold text-primary hidden md:block">JPW Carpentry & Building</h1>
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
            onClick={handleContactClick}
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