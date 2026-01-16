import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Globe, Sparkles, Search, Smartphone, Gauge, Palette, ArrowRight, CheckCircle } from "lucide-react";
import aiWebsitesHero from "@/assets/ai-websites-hero.jpg";

const AIWebsites = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Content Generatie",
      description: "Automatisch professionele teksten en content voor uw website."
    },
    {
      icon: Search,
      title: "SEO Optimalisatie",
      description: "AI-gedreven SEO voor betere vindbaarheid in Google."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfect werkend op alle apparaten, automatisch aangepast."
    },
    {
      icon: Gauge,
      title: "Snelle Laadtijden",
      description: "Geoptimaliseerde performance voor de beste gebruikerservaring."
    },
    {
      icon: Palette,
      title: "Smart Design",
      description: "AI kiest de beste kleuren, fonts en layouts voor uw merk."
    },
    {
      icon: Globe,
      title: "Meertalig",
      description: "Automatische vertalingen voor internationale bezoekers."
    }
  ];

  const benefits = [
    "Website binnen enkele uren live",
    "Automatische content updates",
    "Ingebouwde chatbot voor leads",
    "A/B testing met AI optimalisatie",
    "Analytics en rapportages",
    "Geen technische kennis nodig"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Websites | Ainexus Cloud - Slimme Websites met Kunstmatige Intelligentie</title>
        <meta name="description" content="Laat een AI-powered website bouwen die zichzelf optimaliseert. Snelle laadtijden, SEO-geoptimaliseerd en altijd up-to-date content." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aiWebsitesHero} 
            alt="AI Website Builder" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl py-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Websites</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Websites die{" "}
              <span className="text-primary">Zichzelf Verbeteren</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ontdek de toekomst van webdesign. Onze AI-websites genereren content, 
              optimaliseren voor SEO en passen zich aan op basis van bezoekersgedrag.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/quick-scan">
                  Gratis Quick Scan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">Bekijk Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wat Maakt AI Websites Speciaal?
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditionele websites worden gebouwd en vergeten. AI websites evolueren continu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Van Idee naar Live Website
                </h3>
                <p className="text-muted-foreground mb-6">
                  Met onze AI-technologie heeft u binnen enkele uren een professionele 
                  website die klaar is voor bezoekers.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">2</div>
                    <div className="text-sm text-muted-foreground">Uur Setup</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">0</div>
                    <div className="text-sm text-muted-foreground">Code Nodig</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">∞</div>
                    <div className="text-sm text-muted-foreground">Updates</div>
                  </div>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/quick-scan">
                    Start Uw AI Website
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Voordelen van een AI Website
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Een AI-website is niet zomaar een website. Het is een slimme marketingtool 
                die 24/7 voor u werkt.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Traditioneel vs AI Website
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-muted-foreground mb-4">Traditionele Website</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
                    Weken ontwikkeltijd
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
                    Handmatige content updates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
                    Aparte SEO specialist nodig
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
                    Hoge onderhoudskosten
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">AI Website</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Binnen uren online
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Automatische content generatie
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Ingebouwde SEO optimalisatie
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Lage maandelijkse kosten
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Klaar voor een Slimmere Website?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ontdek in een gratis Quick Scan hoe een AI-website uw online aanwezigheid kan versterken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/quick-scan">
                  Gratis Quick Scan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Neem Contact Op</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWebsites;
