import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, Github, Mail } from "lucide-react";

export const CommunityCTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)] z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center animate-fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Join Our Community
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Stay connected with us and be part of our mission to create a safer digital world for families. We're building in public.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/hifzio", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/HifzioHQ", label: "Twitter" },
                { icon: Instagram, href: "https://www.instagram.com/hifzio", label: "Instagram" },
                { icon: Github, href: "https://github.com/hifzio", label: "GitHub" },
                { icon: Mail, href: "mailto:hello@hifzio.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-muted/30 border border-border/50 hover:bg-foreground hover:border-foreground transition-all duration-300"
                >
                  <social.icon size={22} className="text-foreground group-hover:text-background transition-colors duration-300" />
                </a>
              ))}
            </div>

            <Button 
              variant="default" 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.location.href = "mailto:hello@hifzio.com"}
            >
              Get In Touchs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
