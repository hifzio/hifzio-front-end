import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden pt-16">
      {/* Background Image with Low Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          opacity: 0.15 // Adjust opacity as needed (0.1 to 0.3 typically works well)
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-up">
          {/* Enhanced badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-accent/10 rounded-2xl border border-accent/20 backdrop-blur-sm group hover:bg-accent/15 transition-all duration-300">
            <Sparkles size={16} className="text-accent animate-pulse" />
            <span className="text-accent font-semibold text-sm tracking-wide">
              Welcome to Hifzio
            </span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>

          {/* Main headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              We make your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_auto] animate-gradient">
                online world
              </span>
            </h1>
            
            {/* Enhanced subtitle with icons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-2xl md:text-4xl font-bold text-foreground">
                <Shield className="text-accent" size={32} />
                Safe
              </div>
              <div className="text-muted-foreground text-xl">&</div>
              <div className="flex items-center gap-2 text-2xl md:text-4xl font-bold text-foreground">
                <Lock className="text-primary" size={32} />
                Secure
              </div>
            </div>
          </div>

          {/* Enhanced description */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium backdrop-blur-sm bg-background/30 rounded-2xl p-6 border border-border/20">
            An ethical technology brand building <span className="font-bold text-accent">family-friendly</span> digital safety products for modern families.
            <span className="block mt-3 text-lg text-foreground/80 font-normal">
              Empowering a safe and ethical digital life.
            </span>
          </p>
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/products">
              <Button 
                variant="default" 
                size="lg" 
                className="group relative bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-8 py-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center">
                  Explore Our Products
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </span>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent to-primary blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 rounded-2xl border-2 border-border/50 hover:border-accent/50 hover:bg-accent/5 hover:text-accent font-semibold text-lg backdrop-blur-sm bg-background/50 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="space-y-2 backdrop-blur-sm bg-background/40 rounded-2xl p-4 border border-border/20">
              <div className="text-2xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="space-y-2 backdrop-blur-sm bg-background/40 rounded-2xl p-4 border border-border/20">
              <div className="text-2xl font-bold text-foreground">256-bit</div>
              <div className="text-sm text-muted-foreground">Military Grade Encryption</div>
            </div>
            <div className="space-y-2 backdrop-blur-sm bg-background/40 rounded-2xl p-4 border border-border/20">
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Security Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center backdrop-blur-sm bg-background/30">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};