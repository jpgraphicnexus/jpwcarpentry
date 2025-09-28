import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
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
