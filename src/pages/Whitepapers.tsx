import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whitepapers = [
  {
    title: "AI in de Telecomsector",
    description: "Hoe kunstmatige intelligentie de telecommunicatie-industrie transformeert en wat dit betekent voor uw bedrijf.",
    category: "Telecom",
    pages: 24,
  },
  {
    title: "CRM Automatisering met AI",
    description: "Ontdek hoe AI-gestuurde CRM-systemen klantrelaties verbeteren en verkoop verhogen.",
    category: "CRM",
    pages: 18,
  },
  {
    title: "Cloud Infrastructuur Best Practices",
    description: "Een complete gids voor het opzetten van schaalbare en veilige cloud-omgevingen.",
    category: "Cloud",
    pages: 32,
  },
  {
    title: "De Toekomst van AI Websites",
    description: "Trends en innovaties in AI-gestuurde webontwikkeling voor 2024 en verder.",
    category: "Websites",
    pages: 16,
  },
];

const Whitepapers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <FileText className="h-4 w-4" />
            <span className="text-sm font-medium">Kenniscentrum</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Whitepapers & Onderzoek
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diepgaande analyses en onderzoeksrapporten over AI, technologie en digitale transformatie.
          </p>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {paper.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{paper.pages} pagina's</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {paper.title}
                  </CardTitle>
                  <CardDescription>{paper.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Wilt u op de hoogte blijven?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schrijf u in voor onze nieuwsbrief en ontvang nieuwe whitepapers direct in uw inbox.
          </p>
          <Button size="lg">
            Aanmelden nieuwsbrief
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Whitepapers;
