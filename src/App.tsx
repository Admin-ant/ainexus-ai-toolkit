import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CRM from "./pages/CRM";
import Telecom from "./pages/Telecom";
import AI from "./pages/AI";
import AIWebsites from "./pages/AIWebsites";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import QuickScan from "./pages/QuickScan";
import Whitepapers from "./pages/Whitepapers";
import FAQ from "./pages/FAQ";
import Vacatures from "./pages/Vacatures";
import Partners from "./pages/Partners";
import Team from "./pages/Team";
import PlanAfspraak from "./pages/PlanAfspraak";
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
          <Route path="/crm" element={<CRM />} />
          <Route path="/telecom" element={<Telecom />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/ai-websites" element={<AIWebsites />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/quick-scan" element={<QuickScan />} />
          <Route path="/whitepapers" element={<Whitepapers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/vacatures" element={<Vacatures />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/team" element={<Team />} />
          <Route path="/plan-afspraak" element={<PlanAfspraak />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
