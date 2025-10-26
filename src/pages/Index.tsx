import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, MessageSquare, Phone, CheckCircle2, ArrowRight, Sparkles, Calendar, GraduationCap, Bot, Repeat } from "lucide-react";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/hero-image.jpg";
import crmImage from "@/assets/crm-dashboard.jpg";
import telecomImage from "@/assets/telecom-system.jpg";
import aiNexusImage from "@/assets/ai-nexus-platform.jpg";

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
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Gedreven Bedrijfsoplossingen
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Transformeer je bedrijf met AI
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Ainexus Cloud levert geavanceerde AI-oplossingen voor CRM en telecom. Automatiseer processen, 
                  analyseer gesprekken en verhoog klanttevredenheid.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="AI-gedreven bedrijfsoplossingen in actie" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
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
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={crmImage} 
                    alt="AI CRM Software Dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={telecomImage} 
                    alt="AI Telecom Systeem" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={aiNexusImage} 
                    alt="AI Nexus Platform" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
                      <ArrowRight className="ml-2 h-4 w-4" />
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

        {/* Stappenplan Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">In 4 Stappen Aan De Slag</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Van kennismaking tot volledige AI-implementatie
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <Card className="relative border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                  1
                </div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-center text-xl">Quick Scan</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">30 min, gratis</p>
                    <p className="text-sm text-muted-foreground">via Zoom – geen verplichtingen</p>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link to="/demo">
                      Plan Nu
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="relative border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-center text-xl">AI Workshop</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">2 uur, €299</p>
                    <p className="text-sm text-muted-foreground">Leer AI zelf gebruiken</p>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link to="/contact">
                      Meer Info
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="relative border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                  3
                </div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Bot className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-center text-xl">Chatbot / Tool</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">Binnen 1 dag live</p>
                    <p className="text-sm text-muted-foreground">Automatiseer direct</p>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link to="/pricing">
                      Bekijk Opties
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="relative border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                  4
                </div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Repeat className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-center text-xl">AI Abonnement</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">Vanaf €199/mnd</p>
                    <p className="text-sm text-muted-foreground">Doorlopende AI-ondersteuning</p>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link to="/pricing">
                      Abonnementen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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

        {/* Floating Contact Button */}
        <div className="fixed bottom-8 right-8 z-50 group">
          <Button 
            size="lg" 
            asChild 
            className="rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110"
          >
            <Link to="/demo" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">Plan Gratis Scan</span>
            </Link>
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Index;
