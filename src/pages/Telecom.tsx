import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, BarChart3, MessageCircle, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

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
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Phone className="w-4 h-4 mr-2" />
                  AI Telecom Platform
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
                    <Link to="/demo">
                      Vraag Demo Aan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/pricing">Bekijk Prijzen</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <Phone className="w-48 h-48 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Geavanceerde Telecom-functies</h2>
              <p className="text-lg text-muted-foreground">
                AI-gedreven oplossingen voor moderne telefonie
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Real-time Gespreksanalyse</CardTitle>
                  <CardDescription>
                    AI luistert mee en geeft direct inzichten tijdens gesprekken
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Automatische sentimentanalyse van klanten</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Identificeer sales-kansen tijdens gesprekken</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Live suggesties voor agents</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Slimme IVR-systemen</CardTitle>
                  <CardDescription>
                    AI-gestuurde interactieve voice response voor betere routing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Natuurlijke taalverwerking voor spraakherkenning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Intelligente doorverbinding naar juiste afdeling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">24/7 geautomatiseerde eerste opvang</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Kwaliteitsmonitoring</CardTitle>
                  <CardDescription>
                    Automatische evaluatie van gesprekskwaliteit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">AI-scoring van agent prestaties</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Compliance monitoring en rapportage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Gedetailleerde coachingsuggesties</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Geavanceerde Telefonie</CardTitle>
                  <CardDescription>
                    Complete cloud telefonie-oplossing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Call recording met automatische transcriptie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Multi-channel ondersteuning (voice, video, chat)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Internationale nummers in 100+ landen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect voor elk contact center</h2>
              <p className="text-lg text-muted-foreground">
                Van kleine teams tot enterprise callcenters
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-muted-foreground">
                  Verhoog first-call-resolution met AI-assistentie en betere routing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sales Teams</h3>
                <p className="text-muted-foreground">
                  Identificeer upsell kansen en verbeter closing rates
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Management</h3>
                <p className="text-muted-foreground">
                  Automatiseer kwaliteitscontrole en train teams effectiever
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meetbare impact</h2>
              <p className="text-lg text-muted-foreground">
                Resultaten die onze klanten behalen
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">-35%</div>
                <p className="text-lg font-semibold mb-2">Kortere gesprekstijd</p>
                <p className="text-muted-foreground">
                  Door efficiëntere routing en AI-assistentie
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+50%</div>
                <p className="text-lg font-semibold mb-2">Meer sales-kansen</p>
                <p className="text-muted-foreground">
                  Geïdentificeerd door AI tijdens gesprekken
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
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
              Transformeer je telefonie met AI
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Ontdek hoe Ainexus Telecom je contact center naar een hoger niveau tilt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/demo">
                  Gratis Demo Aanvragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
