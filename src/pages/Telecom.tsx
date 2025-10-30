import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, BarChart3, MessageCircle, Shield, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";
import telecomSystem from "@/assets/telecom-system.jpg";
import aiNexusPlatform from "@/assets/ai-nexus-platform.jpg";

const Telecom = () => {
  return (
    <>
      <Helmet>
        <title>Ainexus CloudAI Telecom: Slimme Gespreksanalyse & IVR | AI Telefonie</title>
        <meta 
          name="description" 
          content="Ainexus CloudAI Telecom: Geavanceerde AI voor real-time gespreksanalyse, intelligente IVR-systemen en kwaliteitsmonitoring. Verbeter klantenservice met AI-telefonie." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={telecomSystem} 
              alt="AI Nexus Telecom Platform" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Powered by AI Nexus
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Nexus Telecom
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Slimme telefonie-oplossingen met geavanceerde AI-technologie voor bedrijven die voorop willen lopen
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <a href="https://ainexustelecom.nl/" target="_blank" rel="noopener noreferrer">
                    Bezoek AI Nexus Telecom
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/demo">Gratis Demo Aanvragen</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  De kracht van AI Nexus × Telecom
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  AI Nexus Telecom combineert de kracht van ons AI-platform met geavanceerde telecom-infrastructuur. 
                  Profiteer van enterprise-grade telefonie aangedreven door cutting-edge AI-technologie.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">AI-gedreven gespreksanalyse</h3>
                      <p className="text-sm text-muted-foreground">Real-time inzichten en sentiment detection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Intelligente IVR & Routing</h3>
                      <p className="text-sm text-muted-foreground">Natuurlijke spraakherkenning en slimme doorverbinding</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Wereldwijde infrastructuur</h3>
                      <p className="text-sm text-muted-foreground">180+ landen, 99.999% uptime, 24/7 support</p>
                    </div>
                  </div>
                </div>
                <Button size="lg" asChild>
                  <a href="https://ainexustelecom.nl/waarom-wij" target="_blank" rel="noopener noreferrer">
                    Waarom AI Nexus Telecom?
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={aiNexusPlatform} 
                  alt="AI Nexus Platform in actie" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Telecom-oplossingen</h2>
              <p className="text-lg text-muted-foreground">
                Van AI spraakagenten tot wereldwijde connectiviteit
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>AI Spraakagenten</CardTitle>
                  <CardDescription>
                    Natuurlijke gesprekken met AI-technologie
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between" asChild>
                    <a href="https://ainexustelecom.nl/diensten" target="_blank" rel="noopener noreferrer">
                      Meer informatie
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Gespreksanalyse</CardTitle>
                  <CardDescription>
                    Real-time inzichten en AI-monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between" asChild>
                    <a href="https://ainexustelecom.nl/oplossingen" target="_blank" rel="noopener noreferrer">
                      Bekijk oplossingen
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Wereldwijde Nummers</CardTitle>
                  <CardDescription>
                    Lokale aanwezigheid in 180+ landen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between" asChild>
                    <a href="https://ainexustelecom.nl/diensten" target="_blank" rel="noopener noreferrer">
                      Ontdek diensten
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <a href="https://ainexustelecom.nl/diensten" target="_blank" rel="noopener noreferrer">
                  Bekijk Alle Diensten
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases & Toepassingen</h2>
              <p className="text-lg text-muted-foreground">
                Van customer support tot sales - AI Nexus Telecom past zich aan uw behoeften aan
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Klantenservice</CardTitle>
                  <CardDescription>
                    Verhoog first-call-resolution met AI
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Sales & Outbound</CardTitle>
                  <CardDescription>
                    Identificeer kansen en verbeter conversie
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Quality & Training</CardTitle>
                  <CardDescription>
                    Automatische monitoring en coaching
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <a href="https://ainexustelecom.nl/use-cases" target="_blank" rel="noopener noreferrer">
                  Bekijk Alle Use Cases
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Betrouwbaar & Schaalbaar</h2>
              <p className="text-lg text-muted-foreground">
                Enterprise-grade infrastructuur die meegroeit met uw organisatie
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.999%</div>
                <p className="text-lg font-semibold mb-2">Uptime</p>
                <p className="text-sm text-muted-foreground">
                  Betrouwbare infrastructuur
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">180+</div>
                <p className="text-lg font-semibold mb-2">Landen</p>
                <p className="text-sm text-muted-foreground">
                  Wereldwijde dekking
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-lg font-semibold mb-2">Support</p>
                <p className="text-sm text-muted-foreground">
                  Altijd beschikbaar
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">AI</div>
                <p className="text-lg font-semibold mb-2">Gedreven</p>
                <p className="text-sm text-muted-foreground">
                  Slimme technologie
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <a href="https://ainexustelecom.nl/prijzen" target="_blank" rel="noopener noreferrer">
                  Bekijk Prijzen & Pakketten
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Klaar om te starten met AI Nexus Telecom?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Ontdek alle mogelijkheden of plan een persoonlijke demo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://ainexustelecom.nl/contact" target="_blank" rel="noopener noreferrer">
                  Plan Gratis Consult
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/demo">
                  Vraag Demo Aan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm opacity-75">
              Meer informatie? Bezoek <a href="https://ainexustelecom.nl" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:opacity-100 transition-opacity">ainexustelecom.nl</a>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Telecom;
