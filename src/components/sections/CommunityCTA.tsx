import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, Github, Mail } from "lucide-react";

export const CommunityCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-12 text-center border border-accent/20 shadow-card animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay connected with us and be part of our mission to create a safer digital world for families
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/company/hifzio"
                aria-label="Hifzio on LinkedIn"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft hover:shadow-card hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/HifzioHQ"
                aria-label="Hifzio on Twitter"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft hover:shadow-card hover:scale-110"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/hifzio"
                aria-label="Hifzio on Instagram"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft hover:shadow-card hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/hifzio"
                aria-label="Hifzio on GitHub"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft hover:shadow-card hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:hello@hifzio.com"
                aria-label="Email Hifzio"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft hover:shadow-card hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>

            <Button variant="hero" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
