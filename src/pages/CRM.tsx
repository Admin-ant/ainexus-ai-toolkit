import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MessageSquare, Users, TrendingUp, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

const CRM = () => {
  return (
    <>
      <Helmet>
        <title>Ainexus CloudAI CRM Software voor Sales & Support | AI-Gedreven Klantbeheer</title>
        <meta 
          name="description" 
          content="Ainexus CloudAI CRM: Slimme AI-software voor sales en support teams. Automatiseer workflows, kwalificeer leads en verhoog conversies met 360° klantinzicht." 
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
                  <MessageSquare className="w-4 h-4 mr-2" />
                  AI CRM Software
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Verhoog je sales met AI-gedreven CRM
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Ainexus CloudAI CRM helpt sales- en supportteams om leads sneller te kwalificeren, 
                  processen te automatiseren en klanten beter te begrijpen met geavanceerde AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                    <Link to="/demo">
                      Probeer Gratis
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
                  <MessageSquare className="w-48 h-48 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Krachtige CRM-functies</h2>
              <p className="text-lg text-muted-foreground">
                Alles wat je nodig hebt om klantrelaties te optimaliseren
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>AI-Gestuurde Leadkwalificatie</CardTitle>
                  <CardDescription>
                    Laat AI automatisch bepalen welke leads het meest waardevol zijn
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Automatische lead scoring op basis van gedrag</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Voorspel conversiekansen met machine learning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Prioriteer follow-ups slim en efficiënt</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>360° Klantinzicht</CardTitle>
                  <CardDescription>
                    Alle klantdata op één plek, realtime bijgewerkt
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Complete interactiegeschiedenis per klant</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">AI-gegenereerde klantinzichten</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Gepersonaliseerde communicatiesuggesties</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Geautomatiseerde Workflows</CardTitle>
                  <CardDescription>
                    Bespaar tijd met slimme automatisering
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Automatische taaktoewijzing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Email campagnes op basis van triggers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Pipeline-management met AI-suggesties</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Omnikanaal Communicatie</CardTitle>
                  <CardDescription>
                    Bereik klanten op elk kanaal vanuit één platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Email, chat, telefoon en social media</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Unified inbox voor alle berichten</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">AI-chatbot voor eerste contact</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bewezen resultaten</h2>
              <p className="text-lg text-muted-foreground">
                Wat klanten bereiken met Ainexus CRM
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+45%</div>
                <p className="text-lg font-semibold mb-2">Hogere conversie</p>
                <p className="text-muted-foreground">
                  Door betere leadkwalificatie en follow-up timing
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">-60%</div>
                <p className="text-lg font-semibold mb-2">Minder handmatig werk</p>
                <p className="text-muted-foreground">
                  Automatiseer repetitieve taken en focus op verkopen
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-lg font-semibold mb-2">Klanttevredenheid</p>
                <p className="text-muted-foreground">
                  Snellere responstijden en betere service
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start vandaag met Ainexus CRM
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Sluit je aan bij honderden bedrijven die hun sales al hebben getransformeerd
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

export default CRM;
