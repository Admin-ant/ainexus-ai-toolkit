import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Zap, Target, TrendingUp, Shield, Clock, ArrowRight, CheckCircle } from "lucide-react";
import aiPlatformHero from "@/assets/ai-platform-hero.jpg";

const AI = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Geavanceerde ML-modellen die leren van uw data en steeds slimmer worden."
    },
    {
      icon: Zap,
      title: "Automatisering",
      description: "Automatiseer repetitieve taken en bespaar uren per week."
    },
    {
      icon: Target,
      title: "Voorspellende Analyse",
      description: "Voorspel trends en maak datagedreven beslissingen."
    },
    {
      icon: TrendingUp,
      title: "Optimalisatie",
      description: "Continue optimalisatie van uw bedrijfsprocessen met AI."
    },
    {
      icon: Shield,
      title: "Veilige AI",
      description: "Enterprise-grade beveiliging voor al uw AI-toepassingen."
    },
    {
      icon: Clock,
      title: "Real-time Inzichten",
      description: "Direct inzicht in uw data met real-time AI-analyses."
    }
  ];

  const useCases = [
    "Klantgedrag voorspellen en personaliseren",
    "Documenten automatisch verwerken en classificeren",
    "Chatbots voor 24/7 klantenservice",
    "Fraude detectie en preventie",
    "Voorraad- en demand forecasting",
    "Automatische rapportage en dashboards"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Oplossingen | Ainexus Cloud - Kunstmatige Intelligentie voor Bedrijven</title>
        <meta name="description" content="Ontdek onze AI oplossingen voor bedrijven. Machine learning, automatisering, voorspellende analyse en meer. Start vandaag met AI." />
      </Helmet>

      <Navigation />
      <FloatingActionButton />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aiPlatformHero} 
            alt="AI Platform Dashboard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl py-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Kunstmatige Intelligentie</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              AI Oplossingen voor{" "}
              <span className="text-primary">Slimmer Werken</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transformeer uw bedrijf met de kracht van kunstmatige intelligentie. 
              Van automatisering tot voorspellende analyse - wij maken AI toegankelijk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/quick-scan">
                  Gratis Quick Scan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">Demo Aanvragen</Link>
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
              AI Mogelijkheden
            </h2>
            <p className="text-lg text-muted-foreground">
              Ontdek hoe onze AI-oplossingen uw bedrijf kunnen transformeren
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Toepassingen van AI in Uw Bedrijf
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                AI is niet alleen voor grote techbedrijven. Ontdek hoe ook uw bedrijf 
                kan profiteren van kunstmatige intelligentie.
              </p>
              
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Start met AI in 4 Stappen
              </h3>
              <p className="text-muted-foreground mb-6">
                Ons stappenplan maakt de overgang naar AI eenvoudig en risicovrij.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to="/quick-scan">
                  Bekijk het Stappenplan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/80">AI Projecten</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">40%</div>
              <div className="text-primary-foreground/80">Tijdsbesparing</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80">AI Beschikbaar</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">98%</div>
              <div className="text-primary-foreground/80">Klanttevredenheid</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Klaar om te Starten met AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Plan een gratis Quick Scan en ontdek hoe AI uw bedrijf kan helpen groeien.
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

export default AI;
