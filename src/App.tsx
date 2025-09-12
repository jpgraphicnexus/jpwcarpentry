import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import PastWorks from "./pages/PastWorks";
import Services from "./pages/Services";
import KitchenRenovations from "./pages/KitchenRenovations";
import SmallCarpentryJobs from "./pages/SmallCarpentryJobs";
import HomeRenovations from "./pages/HomeRenovations";
import GeneralBuildingWorks from "./pages/GeneralBuildingWorks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/past-works" element={<PastWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/kitchen-renovations" element={<KitchenRenovations />} />
          <Route path="/services/small-carpentry-jobs" element={<SmallCarpentryJobs />} />
          <Route path="/services/home-renovations" element={<HomeRenovations />} />
          <Route path="/services/general-building-works" element={<GeneralBuildingWorks />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
