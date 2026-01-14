import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Handshake, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const partners = [
  {
    name: "TechCloud Solutions",
    category: "Cloud Partner",
    description: "Strategische partner voor enterprise cloud infrastructuur en hosting oplossingen.",
  },
  {
    name: "DataSecure BV",
    category: "Security Partner",
    description: "Specialist in cybersecurity en data protection voor onze klanten.",
  },
  {
    name: "ConnectTel",
    category: "Telecom Partner",
    description: "Telecom infrastructuur partner voor betrouwbare connectiviteit.",
  },
  {
    name: "DigitalFlow Agency",
    category: "Marketing Partner",
    description: "Creatief bureau voor digitale marketing en branding ondersteuning.",
  },
  {
    name: "InnovateLab",
    category: "Technology Partner",
    description: "Onderzoeks- en ontwikkelingspartner voor AI-innovaties.",
  },
  {
    name: "BusinessGrowth Consultants",
    category: "Consulting Partner",
    description: "Strategisch advies voor digitale transformatie trajecten.",
  },
];

const partnerBenefits = [
  "Toegang tot cutting-edge AI-technologie",
  "Co-marketing mogelijkheden",
  "Gezamenlijke klantprojecten",
  "Partner training en certificering",
  "Dedicated partner support",
  "Revenue sharing programma",
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Handshake className="h-4 w-4" />
            <span className="text-sm font-medium">Ecosysteem</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Onze Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Samen met onze partners bouwen we aan innovatieve oplossingen die bedrijven helpen groeien.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <span className="text-xs font-medium text-primary">{partner.category}</span>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {partner.name}
                  </CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Word Partner
              </h2>
              <p className="text-muted-foreground mb-8">
                Sluit u aan bij ons partnerecosysteem en profiteer van de voordelen van samenwerking met AI Nexus.
              </p>
              <ul className="space-y-3 mb-8">
                {partnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button size="lg">
                Partner worden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 text-center">
              <Handshake className="h-24 w-24 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground">Actieve partners wereldwijd</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
