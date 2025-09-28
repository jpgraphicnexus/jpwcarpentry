import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Index from "./pages/Index";

// Lazy load pages to reduce initial bundle size
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const PastWorks = React.lazy(() => import("./pages/PastWorks"));
const Services = React.lazy(() => import("./pages/Services"));
const KitchenRenovations = React.lazy(() => import("./pages/KitchenRenovations"));
const SmallCarpentryJobs = React.lazy(() => import("./pages/SmallCarpentryJobs"));
const HomeRenovations = React.lazy(() => import("./pages/HomeRenovations"));
const GeneralBuildingWorks = React.lazy(() => import("./pages/GeneralBuildingWorks"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const PortsmouthCarpentry = React.lazy(() => import("./pages/PortsmouthCarpentry"));
const ChichesterCarpentry = React.lazy(() => import("./pages/ChichesterCarpentry"));
const HavantCarpentry = React.lazy(() => import("./pages/HavantCarpentry"));
const GosportCarpentry = React.lazy(() => import("./pages/GosportCarpentry"));
const FarehamCarpentry = React.lazy(() => import("./pages/FarehamCarpentry"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "JPW Carpentry & Building",
            "url": "https://jpwcarpentry.com",
            "logo": "https://jpwcarpentry.com/assets/jpw-logo.png",
            "description": "Professional carpentry and building services across Hampshire including Portsmouth, Chichester, Havant, Gosport, and Fareham.",
            "founder": {
              "@type": "Person",
              "name": "James Wilson"
            },
            "foundingDate": "2004",
            "areaServed": [
              {
                "@type": "City",
                "name": "Portsmouth",
                "@id": "https://en.wikipedia.org/wiki/Portsmouth"
              },
              {
                "@type": "City", 
                "name": "Chichester",
                "@id": "https://en.wikipedia.org/wiki/Chichester"
              },
              {
                "@type": "City",
                "name": "Havant", 
                "@id": "https://en.wikipedia.org/wiki/Havant"
              },
              {
                "@type": "City",
                "name": "Gosport",
                "@id": "https://en.wikipedia.org/wiki/Gosport"
              },
              {
                "@type": "City",
                "name": "Fareham",
                "@id": "https://en.wikipedia.org/wiki/Fareham"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 50.8429,
                "longitude": -1.0761
              },
              "geoRadius": "25000"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+44-7399-594658",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.facebook.com/jpwcarpentry",
              "https://www.instagram.com/jpwcarpentry"
            ]
          })}
        </script>
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/past-works" element={<PastWorks />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/kitchen-renovations" element={<KitchenRenovations />} />
              <Route path="/services/small-carpentry-jobs" element={<SmallCarpentryJobs />} />
              <Route path="/services/home-renovations" element={<HomeRenovations />} />
              <Route path="/services/general-building-works" element={<GeneralBuildingWorks />} />
              <Route path="/portsmouth-carpentry-services" element={<PortsmouthCarpentry />} />
              <Route path="/chichester-carpentry-services" element={<ChichesterCarpentry />} />
              <Route path="/havant-carpentry-services" element={<HavantCarpentry />} />
              <Route path="/gosport-carpentry-services" element={<GosportCarpentry />} />
              <Route path="/fareham-carpentry-services" element={<FarehamCarpentry />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
