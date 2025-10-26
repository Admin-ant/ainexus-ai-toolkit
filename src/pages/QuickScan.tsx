import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle2, Clock, Rocket, Users, Zap } from "lucide-react";
import heroImage from "@/assets/quick-scan-hero.jpg";
import workshopImage from "@/assets/ai-workshop.jpg";
import chatbotImage from "@/assets/ai-chatbot.jpg";

const QuickScan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gratis Quick Scan - AI Nexus | Start met AI in 30 minuten</title>
        <meta name="description" content="Boek een gratis 30 minuten Quick Scan en ontdek hoe AI jouw bedrijfsprocessen kan transformeren. Geen verplichtingen, directe inzichten." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="AI Quick Scan Video Call" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-medium">100% Gratis & Zonder Verplichtingen</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent drop-shadow-lg">
                Start met AI in 4 Stappen
              </h1>
              <p className="text-xl text-foreground max-w-3xl mx-auto mb-8 drop-shadow-md">
                In slechts 30 minuten ontdek je de mogelijkheden van AI voor jouw bedrijf. 
                Geen technisch jargon, alleen concrete oplossingen.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
                  <Link to="/demo">Plan Gratis Quick Scan</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 backdrop-blur-sm bg-background/50 hover:bg-background/70">
                  <Link to="/contact">Stel een Vraag</Link>
                </Button>
              </div>
            </div>

            {/* Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg backdrop-blur-sm bg-card/90">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>30 Minuten</CardTitle>
                  <CardDescription>Kort maar krachtig gesprek via Zoom</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg backdrop-blur-sm bg-card/90">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Persoonlijk Advies</CardTitle>
                  <CardDescription>Afgestemd op jouw specifieke situatie</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg backdrop-blur-sm bg-card/90">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Direct Toepasbaar</CardTitle>
                  <CardDescription>Concrete vervolgstappen na het gesprek</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Workshop Visual Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-6">Leer AI Zelf Gebruiken</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Na de Quick Scan kun je meteen aan de slag met onze praktische AI Workshop. 
                  Geen theorie, maar hands-on leren met jouw eigen bedrijfscases.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span>Direct toepasbare AI-tools voor jouw team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span>Praktijkvoorbeelden uit jouw branche</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span>Persoonlijke begeleiding en Q&A</span>
                  </li>
                </ul>
                <Button size="lg" asChild>
                  <Link to="/contact">Vraag Workshop Info</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={workshopImage} 
                    alt="AI Workshop met professionals"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chatbot Visual Section */}
        <section className="py-20 px-4 bg-accent/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={chatbotImage} 
                    alt="AI Chatbot Interface"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Jouw Custom AI-Tool</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We bouwen een op maat gemaakte AI-chatbot of tool specifiek voor jouw bedrijfsprocessen. 
                  Binnen één dag operationeel en direct inzetbaar.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span>Volledig geïntegreerd met jouw systemen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span>24/7 beschikbaar voor jouw klanten en team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span>Continu leren en verbeteren</span>
                  </li>
                </ul>
                <Button size="lg" asChild>
                  <Link to="/contact">Vraag Offerte Aan</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Steps Process */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Jouw AI Traject</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Van Quick Scan tot volledig AI-gedreven organisatie in 4 duidelijke stappen
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-2xl mb-2">Quick Scan</CardTitle>
                  <div className="text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4" />
                      <span>30 minuten</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Gratis via Zoom</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    We analyseren samen jouw bedrijfsprocessen en identificeren AI-kansen. 
                    Geen verplichtingen, alleen waardevolle inzichten.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link to="/demo">Plan Nu</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-2xl mb-2">AI Workshop</CardTitle>
                  <div className="text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4" />
                      <span>2 uur</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">€299</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    Leer AI-tools zelf gebruiken. Hands-on training met jouw eigen bedrijfscases. 
                    Direct toepasbare kennis voor je team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contact">Meer Info</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-2xl mb-2">Chatbot / Tool</CardTitle>
                  <div className="text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4" />
                      <span>Binnen 1 dag live</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    We bouwen een custom AI-chatbot of tool specifiek voor jouw bedrijf. 
                    Direct operationeel en klaar voor gebruik.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contact">Vraag Offerte</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-2xl mb-2">AI Abonnement</CardTitle>
                  <div className="text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>Vanaf €299/maand</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    Doorlopende ondersteuning en optimalisatie. We groeien mee met je bedrijf 
                    en blijven innoveren.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/pricing">Bekijk Pakketten</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">Wat gebeurt er tijdens de Quick Scan?</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Kennismaking (5 min)</CardTitle>
                      <CardDescription className="text-base">
                        We maken kennis en jij vertelt over je bedrijf, huidige uitdagingen en doelen.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Proces Analyse (15 min)</CardTitle>
                      <CardDescription className="text-base">
                        We bespreken je belangrijkste bedrijfsprocessen en identificeren waar AI het meeste impact kan hebben.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">AI Mogelijkheden (10 min)</CardTitle>
                      <CardDescription className="text-base">
                        Ik laat concrete AI-oplossingen zien die passen bij jouw situatie, inclusief voorbeelden en use cases.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Vervolgstappen (5 min)</CardTitle>
                      <CardDescription className="text-base">
                        We bespreken mogelijke vervolgstappen, investering en tijdlijn. Geen druk, alleen duidelijkheid.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Klaar om te Starten?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Plan je gratis Quick Scan en ontdek binnen 30 minuten hoe AI jouw bedrijf kan transformeren.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/demo">Plan Nu - 100% Gratis</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuickScan;
