import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Sparkles, Fingerprint } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-background">
      {/* Modern Startup Background: Clean Grid + Soft Glowing Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] z-0" />
      
      {/* Ambient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-up">
          {/* Micro-interaction pill badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-accent/5 rounded-full border border-accent/20 backdrop-blur-md group hover:bg-accent/10 transition-all duration-500 cursor-default">
            <Sparkles size={14} className="text-accent group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-accent font-medium text-xs tracking-wider">
              Welcome to Hifzio
            </span>
          </div>

          {/* Ultra-clean typography */}
          <div className="mb-8 space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-foreground tracking-tight leading-[1.1]">
              We make your
              <br />
              online world <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_auto] animate-gradient">Safe & Secure</span>
            </h1>
          </div>

          {/* Value proposition */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            An ethical technology brand building <span className="font-medium text-foreground">family-friendly</span> digital safety products. Empowering a secure and ethical digital life for everyone.
          </p>

          {/* Clean, high-contrast CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              variant="default" 
              size="lg" 
              className="group relative bg-foreground text-background hover:bg-foreground/90 px-8 py-6 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.wequitech.wequi_guard', '_blank')}
            >
              <span className="relative z-10 flex items-center">
                Get Hifzio Guard
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Link to="/about">
              <Button 
                variant="ghost" 
                size="lg"
                className="px-8 py-6 rounded-full hover:bg-accent/5 font-semibold text-base transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Modern Trust Indicators (Startup tailored) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center border-t border-border/50 pt-12">
            <div className="flex flex-col items-center space-y-3 p-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-2">
                <Heart className="text-accent" size={24} />
              </div>
              <div className="text-lg font-bold text-foreground">Family First</div>
              <div className="text-sm text-muted-foreground">Designed for all ages</div>
            </div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                <Fingerprint className="text-primary" size={24} />
              </div>
              <div className="text-lg font-bold text-foreground">Privacy Native</div>
              <div className="text-sm text-muted-foreground">Zero tracking or profiling</div>
            </div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-2">
                <Shield className="text-accent" size={24} />
              </div>
              <div className="text-lg font-bold text-foreground">Ethical Tech</div>
              <div className="text-sm text-muted-foreground">Built on transparent values</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};