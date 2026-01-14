import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const vacatures = [
  {
    title: "Senior AI Developer",
    department: "Engineering",
    location: "Amsterdam / Remote",
    type: "Fulltime",
    description: "We zoeken een ervaren AI developer om ons team te versterken en innovatieve AI-oplossingen te ontwikkelen.",
  },
  {
    title: "Sales Manager",
    department: "Sales",
    location: "Rotterdam",
    type: "Fulltime",
    description: "Leid ons salesteam en help bedrijven de kracht van AI te ontdekken voor hun organisatie.",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Utrecht / Hybrid",
    type: "Fulltime",
    description: "Zorg voor optimale klanttevredenheid en help onze klanten het maximale uit onze oplossingen te halen.",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Fulltime",
    description: "Ontwerp intuïtieve en mooie interfaces voor onze AI-producten en platforms.",
  },
];

const benefits = [
  "Competitief salaris",
  "Flexibele werktijden",
  "Remote werken mogelijk",
  "Persoonlijk ontwikkelingsbudget",
  "Pensioenregeling",
  "27 vakantiedagen",
  "Laptop en thuiswerkvergoeding",
  "Regelmatige team events",
];

const Vacatures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm font-medium">Carrière</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Werk bij AI Nexus
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bouw mee aan de toekomst van AI-technologie. Ontdek onze openstaande vacatures en word onderdeel van ons team.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Waarom werken bij AI Nexus?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-background border border-border rounded-lg p-4 text-center text-sm font-medium text-foreground"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacatures Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Openstaande Vacatures
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {vacatures.map((vacature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-xs font-medium text-primary mb-2">{vacature.department}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {vacature.title}
                  </CardTitle>
                  <CardDescription>{vacature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {vacature.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {vacature.type}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Bekijk vacature
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Application CTA */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Geen passende vacature gevonden?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Stuur een open sollicitatie en wie weet hebben we binnenkort de perfecte rol voor jou.
          </p>
          <Button size="lg">
            Open sollicitatie
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vacatures;
