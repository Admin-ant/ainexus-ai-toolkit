import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg"></div>
              <span className="text-lg font-bold">Ainexus Cloud</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-gedreven oplossingen voor moderne bedrijven
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Producten</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/crm" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  AI CRM Software
                </Link>
              </li>
              <li>
                <Link to="/telecom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  AI Telecom
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Prijzen
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Demo Aanvragen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@ainexuscloud.nl</li>
              <li>Tel: +31 (0)20 123 4567</li>
              <li>Amsterdam, Nederland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ainexus Cloud. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
