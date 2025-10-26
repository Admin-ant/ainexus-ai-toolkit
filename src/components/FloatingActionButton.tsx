import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  return (
    <Link
      to="/quick-scan"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 group"
    >
      <Button
        size="lg"
        className="h-auto py-4 px-6 rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0"
      >
        <div className="flex flex-col items-center gap-1">
          <Rocket className="w-6 h-6 animate-pulse" />
          <span className="font-bold text-base">Start met AI</span>
          <span className="text-xs opacity-90">4 Stappen</span>
        </div>
      </Button>
    </Link>
  );
};

export default FloatingActionButton;
