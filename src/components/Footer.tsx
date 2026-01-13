import { Linkedin, Mail, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold">
              <span className="text-accent">U</span>sama
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Business Analyst & Power BI Expert
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/usama-mehmood"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:usama@example.com"
              className="p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-4 h-4 text-accent" /> by Usama Mehmood
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
