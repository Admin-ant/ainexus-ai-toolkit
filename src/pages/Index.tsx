import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, MessageSquare, Phone, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ainexus Cloud - AI CRM en Telecom Software voor Bedrijven</title>
        <meta 
          name="description" 
          content="Ainexus Cloud biedt geavanceerde AI-oplossingen voor CRM en telecom. Verhoog productiviteit met slimme gespreksanalyse, automatisering en klantbeheer." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Gedreven Bedrijfsoplossingen
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Transformeer je bedrijf met AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ainexus Cloud levert geavanceerde AI-oplossingen voor CRM en telecom. Automatiseer processen, 
              analyseer gesprekken en verhoog klanttevredenheid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/demo">
                  Gratis Demo Aanvragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">Bekijk Prijzen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze AI-Producten</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kies de oplossing die perfect bij jouw bedrijf past
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* CRM Card */}
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>AI CRM Software</CardTitle>
                  <CardDescription>
                    Slimme klantrelatiebeheer voor sales en support teams
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">AI-gestuurde leadkwalificatie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Geautomatiseerde workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">360° klantinzicht</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/crm">Meer over CRM</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Telecom Card */}
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>AI Telecom</CardTitle>
                  <CardDescription>
                    Intelligente gespreksanalyse en telefonie-oplossingen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Real-time gespreksanalyse</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Slimme IVR-systemen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Kwaliteitsmonitoring</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/telecom">Meer over Telecom</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* AI Nexus Card */}
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>AI Nexus Platform</CardTitle>
                  <CardDescription>
                    Complete AI-oplossing voor bedrijfsautomatisering
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">AI-chatbots & assistenten</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Procesautomatisering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Voorspellende analyses</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://ainexus.nl" target="_blank" rel="noopener noreferrer">
                      Bezoek Ainexus.nl
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Waarom Ainexus Cloud?</h2>
              <p className="text-lg text-muted-foreground">
                De voordelen van onze AI-oplossingen
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Gedreven</h3>
                <p className="text-muted-foreground">
                  Geavanceerde machine learning voor slimme automatisering
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gebruiksvriendelijk</h3>
                <p className="text-muted-foreground">
                  Intuïtieve interface, snel te implementeren
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Altijd bereikbaar voor hulp en advies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Klaar om te starten?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Plan een gratis demo en ontdek hoe Ainexus Cloud jouw bedrijf kan transformeren
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/demo">
                Gratis Demo Aanvragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
