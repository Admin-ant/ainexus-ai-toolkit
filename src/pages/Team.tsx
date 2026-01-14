import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { UsersRound, Target, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Jan de Vries",
    role: "CEO & Oprichter",
    description: "Visionair leider met 15+ jaar ervaring in tech startups.",
  },
  {
    name: "Lisa van den Berg",
    role: "CTO",
    description: "AI-expert en voormalig onderzoeker bij TU Delft.",
  },
  {
    name: "Mark Jansen",
    role: "Head of Sales",
    description: "Bouwt sterke klantrelaties en leidt ons salesteam.",
  },
  {
    name: "Sophie Bakker",
    role: "Head of Product",
    description: "Transformeert klantwensen naar innovatieve producten.",
  },
  {
    name: "Tom Visser",
    role: "Lead Developer",
    description: "Architecteert schaalbare en robuuste AI-systemen.",
  },
  {
    name: "Emma de Groot",
    role: "Customer Success Manager",
    description: "Zorgt voor optimale klanttevredenheid en succes.",
  },
];

const values = [
  {
    icon: Target,
    title: "Missie",
    description: "AI toegankelijk maken voor elk bedrijf, ongeacht grootte of budget. We geloven dat AI de toekomst is van zakelijk succes.",
  },
  {
    icon: Heart,
    title: "Passie",
    description: "We zijn gedreven door een oprechte passie voor technologie en het helpen van bedrijven om te groeien met innovatieve oplossingen.",
  },
  {
    icon: Lightbulb,
    title: "Innovatie",
    description: "Continu verbeteren en innoveren staat centraal in alles wat we doen. We blijven vooroplopen in AI-ontwikkelingen.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <UsersRound className="h-4 w-4" />
            <span className="text-sm font-medium">Over Ons</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ons Team & Missie
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Maak kennis met het team achter AI NexusCloud en ontdek wat ons drijft.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Maak Kennis met het Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2019</div>
              <p className="text-muted-foreground">Opgericht</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">35+</div>
              <p className="text-muted-foreground">Teamleden</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Klanten</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Klanttevredenheid</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
