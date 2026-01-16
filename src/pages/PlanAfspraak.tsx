import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Bot, MapPin, User, Building2, CalendarIcon, Clock, Send, Info, Loader2 } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

const PlanAfspraak = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form fields
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("appointments").insert({
        name: name.trim(),
        company_name: companyName.trim() || null,
        email: email.trim(),
        phone: phone.trim() || null,
        preferred_date: date ? format(date, "yyyy-MM-dd") : null,
        preferred_time: time || null,
        subject: subject || null,
        message: message.trim() || null,
      });

      if (error) throw error;

      toast({
        title: "Afspraak aangevraagd!",
        description: "We nemen binnen 24 uur contact met u op om de afspraak te bevestigen.",
      });

      // Reset form
      setName("");
      setCompanyName("");
      setEmail("");
      setPhone("");
      setDate(undefined);
      setTime("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting appointment:", error);
      toast({
        title: "Er ging iets mis",
        description: "Probeer het later opnieuw of neem telefonisch contact met ons op.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const onderwerpen = [
    "Quick Scan (30 min, gratis)",
    "AI Workshop",
    "AI Chatbot implementatie",
    "AI Abonnement",
    "AI Website",
    "AI CRM Software",
    "AI Telecom",
    "Algemene vraag"
  ];

  return (
    <>
      <Helmet>
        <title>Plan een Afspraak | Ainexus Cloud</title>
        <meta name="description" content="Plan een vrijblijvend gesprek met onze AI-specialisten. Ontdek hoe Ainexus Cloud uw bedrijf kan helpen met AI-oplossingen." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-primary/20 px-4 py-2 border-l-4 border-primary">
                Plan een Afspraak
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Neem contact met ons op en ontdek hoe Ainexus Cloud uw bedrijfsprocessen kan optimaliseren met AI. 
              Plan direct een vrijblijvend gesprek in.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary mb-6">Contactgegevens</h2>
                
                {/* Phone */}
                <Card className="bg-muted/30 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Telefoon</p>
                      <p className="text-muted-foreground text-sm">+31 (0)20 123 4567</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="bg-muted/30 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-muted-foreground text-sm">info@ainexuscloud.nl</p>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Agent */}
                <Card className="bg-primary/10 border-primary/30 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">AI Agent</p>
                        <span className="text-xs bg-primary/30 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                          Online
                        </span>
                        <Info className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm">Of neem contact op met onze AI Agent</p>
                      <p className="text-primary text-sm font-medium">24/7 beschikbaar</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="bg-muted/30 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Locatie</p>
                      <p className="text-muted-foreground text-sm">Amsterdam, Nederland</p>
                      <p className="text-muted-foreground text-sm">Noord-Holland</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Plan */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-primary mb-4">Waarom een gesprek plannen?</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Vrijblijvend advies op maat
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Direct contact met een specialist
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Binnen 24 uur een reactie
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Flexibele afspraakmogelijkheden
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2">
                <Card className="bg-muted/20 border-border">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">Vraag een afspraak aan</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Company */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            Naam <span className="text-primary">*</span>
                          </label>
                          <Input 
                            placeholder="Uw volledige naam" 
                            className="bg-muted/50 border-border focus:border-primary"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            Bedrijfsnaam
                          </label>
                          <Input 
                            placeholder="Uw bedrijfsnaam" 
                            className="bg-muted/50 border-border focus:border-primary"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            E-mailadres <span className="text-primary">*</span>
                          </label>
                          <Input 
                            type="email"
                            placeholder="uw@email.nl" 
                            className="bg-muted/50 border-border focus:border-primary"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            Telefoonnummer
                          </label>
                          <Input 
                            type="tel"
                            placeholder="+31 6 12345678" 
                            className="bg-muted/50 border-border focus:border-primary"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Date & Time */}
                      <Card className="bg-muted/30 border-border">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-4">
                            <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium">Gewenste datum en tijd</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm text-muted-foreground">Datum</label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full justify-start text-left font-normal bg-muted/50 border-border hover:bg-muted",
                                      !date && "text-muted-foreground"
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP", { locale: nl }) : "Selecteer een datum"}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    disabled={(date) => date < new Date()}
                                    initialFocus
                                    className="p-3 pointer-events-auto"
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm text-muted-foreground">Tijd</label>
                              <Select value={time} onValueChange={setTime}>
                                <SelectTrigger className="bg-muted/50 border-border">
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <SelectValue placeholder="Selecteer een tijd" />
                                  </div>
                                </SelectTrigger>
                                <SelectContent>
                                  {timeSlots.map((t) => (
                                    <SelectItem key={t} value={t}>
                                      {t}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Onderwerp</label>
                        <Select value={subject} onValueChange={setSubject}>
                          <SelectTrigger className="bg-muted/50 border-border">
                            <SelectValue placeholder="Waar kunnen we u mee helpen?" />
                          </SelectTrigger>
                          <SelectContent>
                            {onderwerpen.map((onderwerp) => (
                              <SelectItem key={onderwerp} value={onderwerp}>
                                {onderwerp}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Bericht</label>
                        <Textarea 
                          placeholder="Vertel ons meer over uw situatie en wensen..."
                          className="bg-muted/50 border-border focus:border-primary min-h-[120px]"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Verzenden...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Afspraak aanvragen
                          </>
                        )}
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        Door dit formulier te verzenden gaat u akkoord met onze privacyvoorwaarden.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PlanAfspraak;
