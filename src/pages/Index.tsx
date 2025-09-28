import { useEffect } from "react";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const seoData = useSEO('/');
  
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash === '#contact-section') {
      setTimeout(() => {
        const section = document.getElementById('contact-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO {...seoData} />
      <LocalBusinessSchema pageType="homepage" />
      <LocalBusinessSchema pageType="homepage" />
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
