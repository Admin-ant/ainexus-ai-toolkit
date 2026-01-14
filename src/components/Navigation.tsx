import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, Phone, Users, Cloud, BarChart3 } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const productItems = [
  {
    title: "AI Telecom",
    description: "Intelligente telecommunicatie oplossingen",
    icon: Phone,
    href: "/telecom",
  },
  {
    title: "AI CRM",
    description: "Klantrelatiebeheer met AI",
    icon: Users,
    href: "/crm",
  },
  {
    title: "AI Cloud",
    description: "Cloud infrastructuur en AI services",
    icon: Cloud,
    href: "/ai",
  },
  {
    title: "AI Websites",
    description: "Websites met AI-integratie",
    icon: BarChart3,
    href: "/ai-websites",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Producten <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 p-2 bg-background border border-border shadow-lg z-50">
                {productItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-accent transition-colors group"
                  >
                    <item.icon className="h-5 w-5 mt-0.5 text-primary" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Prijzen
            </Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/contact">Inloggen</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/demo">Gratis Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/ai"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              AI
            </Link>
            <Link
              to="/ai-websites"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              AI Websites
            </Link>
            <Link
              to="/crm"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              AI CRM
            </Link>
            <Link
              to="/telecom"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              AI Telecom
            </Link>
            <Link
              to="/pricing"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Prijzen
            </Link>
            <Link
              to="/contact"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Inloggen
                </Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/demo" onClick={() => setIsOpen(false)}>
                  Gratis Demo
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
