import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Wat is AI NexusCloud?",
    answer: "AI NexusCloud is een compleet platform voor AI-gestuurde bedrijfsoplossingen. We bieden diensten op het gebied van telecom, CRM, cloud infrastructuur en websites, allemaal aangedreven door de nieuwste AI-technologie.",
  },
  {
    question: "Voor welke bedrijven zijn jullie oplossingen geschikt?",
    answer: "Onze oplossingen zijn geschikt voor bedrijven van elke omvang - van ZZP'ers tot grote ondernemingen. We hebben specifieke pakketten voor elk segment, afgestemd op de unieke behoeften en budgetten.",
  },
  {
    question: "Hoe lang duurt de implementatie?",
    answer: "De implementatietijd varieert per oplossing. Eenvoudige integraties kunnen binnen enkele dagen operationeel zijn, terwijl complexere enterprise-implementaties enkele weken kunnen duren. We maken altijd een duidelijke planning op maat.",
  },
  {
    question: "Bieden jullie ondersteuning na implementatie?",
    answer: "Ja, we bieden uitgebreide ondersteuning na implementatie. Afhankelijk van uw pakket heeft u toegang tot 24/7 support, een dedicated accountmanager en regelmatige check-ins om te zorgen dat alles optimaal functioneert.",
  },
  {
    question: "Hoe zit het met de beveiliging van mijn data?",
    answer: "Beveiliging staat bij ons voorop. We gebruiken enterprise-grade encryptie, voldoen aan GDPR-regelgeving en hebben strikte toegangscontroles. Uw data wordt opgeslagen in beveiligde datacenters binnen de EU.",
  },
  {
    question: "Kan ik een demo aanvragen?",
    answer: "Absoluut! We bieden gratis demo's aan voor al onze producten. Tijdens de demo laten we u precies zien hoe onze oplossingen werken en beantwoorden we al uw vragen. Vraag uw demo aan via onze website.",
  },
  {
    question: "Wat zijn de kosten?",
    answer: "Onze prijzen variëren afhankelijk van de gekozen oplossing en het aantal gebruikers. We hanteren transparante prijzen zonder verborgen kosten. Bekijk onze prijzenpagina voor gedetailleerde informatie of vraag een offerte op maat aan.",
  },
  {
    question: "Kunnen jullie integreren met bestaande systemen?",
    answer: "Ja, onze oplossingen zijn ontworpen om naadloos te integreren met populaire bedrijfssoftware. We ondersteunen koppelingen met de meeste ERP-systemen, boekhoudsoftware en andere bedrijfsapplicaties.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Hulp & Ondersteuning</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Veelgestelde Vragen
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vind snel antwoorden op de meest gestelde vragen over onze producten en diensten.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Staat uw vraag er niet bij?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Neem contact met ons op en we helpen u graag verder met al uw vragen.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact opnemen
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
