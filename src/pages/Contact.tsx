import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Bot } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Load Telnyx AI Agent Widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@telnyx/ai-agent-widget';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden!",
      description: "We nemen zo snel mogelijk contact met je op.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact - Ainexus Cloud | Neem Contact Op voor Demo of Vragen</title>
        <meta 
          name="description" 
          content="Neem contact op met Ainexus Cloud voor vragen over AI CRM en Telecom software. Bel ons op +31 (0)20 123 4567 of vul het contactformulier in voor een snelle reactie." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Neem contact met ons op
            </h1>
            <p className="text-xl text-muted-foreground">
              Heb je vragen of wil je meer weten? We helpen je graag verder!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Stuur ons een bericht</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Naam *
                      </label>
                      <Input id="name" required placeholder="Je volledige naam" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input id="email" type="email" required placeholder="je@email.nl" />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Bedrijf
                      </label>
                      <Input id="company" placeholder="Je bedrijfsnaam" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Bericht *
                      </label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="Waar kunnen we je mee helpen?"
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Verstuur bericht
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@ainexuscloud.nl</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We reageren binnen 24 uur
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">AI Agent</h3>
                        <p className="text-muted-foreground">
                          Of neem contact op met onze AI Agent
                        </p>
                        <p className="text-sm text-primary font-medium mt-1">
                          24/7 beschikbaar
                        </p>
                        <div className="mt-4">
                          {/* @ts-ignore */}
                          <telnyx-ai-agent agent-id="assistant-8333d517-5ddc-4b22-a42c-e0459967e2b9"></telnyx-ai-agent>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefoon</h3>
                        <p className="text-muted-foreground">+31 (0)20 123 4567</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ma-Vr: 09:00 - 17:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Bezoekadres</h3>
                        <p className="text-muted-foreground">
                          Straatweg 123<br />
                          1012 AB Amsterdam<br />
                          Nederland
                        </p>
                      </div>
                    </div>
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

export default Contact;
