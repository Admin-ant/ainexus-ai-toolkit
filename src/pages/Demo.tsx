import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo aangevraagd!",
      description: "We nemen binnen 24 uur contact met je op om een afspraak in te plannen.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Gratis Demo Aanvragen - Ainexus Cloud AI Software | Live Demonstratie</title>
        <meta 
          name="description" 
          content="Vraag een gratis demo aan van Ainexus Cloud AI CRM en Telecom software. Ontdek in 30 minuten hoe AI jouw bedrijf kan transformeren. Geen verplichtingen." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vraag een gratis demo aan
            </h1>
            <p className="text-xl text-muted-foreground">
              Ontdek in 30 minuten hoe Ainexus Cloud jouw bedrijf kan transformeren
            </p>
          </div>
        </section>

        {/* Demo Form Section */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Vul je gegevens in</CardTitle>
                  <CardDescription>
                    We nemen zo snel mogelijk contact met je op
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Volledige naam *
                      </label>
                      <Input id="name" required placeholder="Jan de Vries" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Zakelijk email *
                      </label>
                      <Input id="email" type="email" required placeholder="jan@bedrijf.nl" />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefoonnummer *
                      </label>
                      <Input id="phone" type="tel" required placeholder="+31 6 12345678" />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Bedrijfsnaam *
                      </label>
                      <Input id="company" required placeholder="Bedrijf BV" />
                    </div>
                    
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium mb-2">
                        Interesse in *
                      </label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecteer een product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="crm">AI CRM Software</SelectItem>
                          <SelectItem value="telecom">AI Telecom</SelectItem>
                          <SelectItem value="both">Beide producten</SelectItem>
                          <SelectItem value="other">Anders/Niet zeker</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Heb je specifieke vragen of wensen?
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Vertel ons waar we je mee kunnen helpen..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Vraag demo aan
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Wat kun je verwachten?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Persoonlijke demo (30 min)</h3>
                        <p className="text-sm text-muted-foreground">
                          Een live demonstratie afgestemd op jouw situatie en behoeften
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Gratis trial toegang</h3>
                        <p className="text-sm text-muted-foreground">
                          14 dagen volledig gratis uitproberen na de demo
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Vraag & antwoord</h3>
                        <p className="text-sm text-muted-foreground">
                          Alle ruimte om je vragen te stellen aan onze experts
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Geen verplichtingen</h3>
                        <p className="text-sm text-muted-foreground">
                          Gratis demo, geen creditcard vereist, geen verkooppraatje
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Populaire demo topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                        AI-gespreksanalyse in actie
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                        CRM integratiemogelijkheden
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                        Workflow automatisering setup
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                        Rapportage en analytics
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                        Implementatie tijdlijn
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Demo;
