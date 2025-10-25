import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Prijzen - Ainexus Cloud AI CRM en Telecom | Flexibele Plannen</title>
        <meta 
          name="description" 
          content="Transparante prijzen voor Ainexus Cloud AI CRM en Telecom software. Kies het plan dat bij jouw bedrijf past. Vanaf €49/maand. Gratis demo beschikbaar." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simpele, transparante prijzen
            </h1>
            <p className="text-xl text-muted-foreground">
              Kies het plan dat perfect bij jouw bedrijf past. Geen verborgen kosten.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect voor kleine teams</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€49</span>
                    <span className="text-muted-foreground">/maand</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Tot 5 gebruikers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Basis CRM-functies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Email ondersteuning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">1.000 AI credits/maand</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/demo">Start Gratis Trial</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="border-2 border-primary relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Meest gekozen
                </div>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>Voor groeiende bedrijven</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€149</span>
                    <span className="text-muted-foreground">/maand</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Tot 20 gebruikers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Volledige CRM + Telecom</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Prioriteit ondersteuning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">10.000 AI credits/maand</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Geavanceerde analytics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">API toegang</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link to="/demo">Start Gratis Trial</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Voor grote organisaties</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Onbeperkt gebruikers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Alle features inbegrepen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Onbeperkte AI credits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Custom integraties</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">SLA garantie</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contact">Neem Contact Op</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Kan ik mijn plan later wijzigen?</h3>
                <p className="text-muted-foreground">
                  Ja, je kunt op elk moment upgraden of downgraden. Wijzigingen gaan direct in en 
                  we berekenen pro rata kosten.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Is er een gratis proefperiode?</h3>
                <p className="text-muted-foreground">
                  Ja, alle plannen komen met een 14-daagse gratis proefperiode. Geen creditcard vereist.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Wat zijn AI credits?</h3>
                <p className="text-muted-foreground">
                  AI credits worden gebruikt voor gespreksanalyse, sentiment detection en andere 
                  AI-functionaliteiten. Extra credits zijn apart bij te kopen.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Zijn er setup kosten?</h3>
                <p className="text-muted-foreground">
                  Nee, er zijn geen setup kosten of verborgen fees. Je betaalt alleen de maandelijkse 
                  abonnementskosten.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;
