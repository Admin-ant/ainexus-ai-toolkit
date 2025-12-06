import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, BarChart3, MessageCircle, Shield, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet";
import telecomSystemImage from "@/assets/telecom-system.jpg";
import aiNexusPlatformImage from "@/assets/ai-nexus-platform.jpg";

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
        
        {/* Hero Section with Background Image */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={telecomSystemImage} 
              alt="AI Telecom Dashboard" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium mb-6">
                <Phone className="w-4 h-4 mr-2" />
                AI Nexus Telecom Platform
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Intelligente telefonie met AI-gespreksanalyse
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ainexus CloudAI Telecom analyseert elk gesprek in real-time, identificeert kansen 
                en verbetert automatisch je klantenservice met geavanceerde AI-technologie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <a href="https://ainexustelecom.nl/" target="_blank" rel="noopener noreferrer">
                    Ontdek AI Nexus Telecom
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/demo">Vraag Demo Aan</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Introduction */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Onderdeel van het AI Nexus Ecosysteem
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  AI Nexus Telecom is een dedicated platform voor geavanceerde AI-gedreven telefonie-oplossingen. 
                  Het combineert jarenlange telecom-expertise met de nieuwste AI-technologie voor optimale klantcommunicatie.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Real-time gespreksanalyse en transcriptie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Slimme IVR met natuurlijke spraakherkenning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Automatische kwaliteitsmonitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Integratie met CRM en bedrijfssystemen</span>
                  </li>
                </ul>
                <Button asChild>
                  <a href="https://ainexustelecom.nl/" target="_blank" rel="noopener noreferrer">
                    Bekijk alle functies op ainexustelecom.nl
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={aiNexusPlatformImage} 
                  alt="AI Nexus Platform workspace" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features - Simplified */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kernfuncties</h2>
              <p className="text-lg text-muted-foreground">
                De belangrijkste AI-telecom mogelijkheden
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <BarChart3 className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Gespreksanalyse</CardTitle>
                  <CardDescription>
                    Real-time AI-analyse van elk gesprek
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Slimme IVR</CardTitle>
                  <CardDescription>
                    AI-gestuurde voice response systemen
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Kwaliteitscontrole</CardTitle>
                  <CardDescription>
                    Automatische monitoring en scoring
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Cloud Telefonie</CardTitle>
                  <CardDescription>
                    Complete VoIP-infrastructuur
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center mt-10">
              <a 
                href="https://ainexustelecom.nl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                Bekijk alle functies en prijzen op ainexustelecom.nl
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">-35%</div>
                <p className="text-lg font-semibold mb-2">Kortere gesprekstijd</p>
                <p className="text-muted-foreground">
                  Door efficiëntere routing en AI-assistentie
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">+50%</div>
                <p className="text-lg font-semibold mb-2">Meer sales-kansen</p>
                <p className="text-muted-foreground">
                  Geïdentificeerd door AI tijdens gesprekken
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">90%</div>
                <p className="text-lg font-semibold mb-2">Agent tevredenheid</p>
                <p className="text-muted-foreground">
                  Dankzij betere tools en real-time ondersteuning
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Klaar om je telefonie te transformeren?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Bezoek AI Nexus Telecom voor uitgebreide informatie over alle mogelijkheden, 
              use cases en prijzen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://ainexustelecom.nl/" target="_blank" rel="noopener noreferrer">
                  Naar ainexustelecom.nl
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Neem Contact Op</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Telecom;
