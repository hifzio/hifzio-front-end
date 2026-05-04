import { Target, Eye, Award, Users, Shield, ThumbsUp, Globe, Rocket, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Building a safer digital world for every family
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-xl font-medium text-foreground mb-6">
                Hifzio was founded with a clear belief: the internet should protect people, not expose them to harm.
              </p>
              <p>
                Today, families are living in a digital world where harmful content, privacy risks, distractions, and unsafe online behavior are growing faster than ever. Parents want to protect their children. Individuals want to stay focused, private, and safe. Communities want technology that supports their values instead of weakening them.
              </p>
              <p className="font-semibold text-accent">
                Hifzio exists to solve this problem.
              </p>
              <p>
                We are building an ethical technology ecosystem for safer digital life — starting with Hifzio Guard, our flagship internet protection product designed to help families block harmful and haram content, reduce digital risk, and create a cleaner online environment.
              </p>
              <p>
                But our vision goes far beyond one product.
              </p>
              <p>
                Hifzio is building a connected ecosystem that includes Hifzio Browser, Hifzio Kids, Hifzio Learn, Hifzio Shield, Hifzio Cloud, and Hifzio ID — a family-first digital platform designed around safety, privacy, trust, and responsible technology.
              </p>
              <p>
                Our mission is not to restrict the internet, but to make it safer, cleaner, and more meaningful. We believe the next generation of technology must be built with values at its core — protecting children, respecting privacy, supporting families, and helping people use the internet with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build ethical, intelligent, and user-friendly technology that protects families, children, privacy, and digital wellbeing — helping people experience the internet safely without losing freedom, access, or control.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted global technology ecosystem where every family can use the internet with confidence — free from harmful content, privacy abuse, digital addiction, and online security threats.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col items-center text-center mb-10">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="text-accent" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Our Values</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Trust
                </h4>
                <p className="text-muted-foreground">We protect users with honesty, transparency, and responsibility.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Privacy
                </h4>
                <p className="text-muted-foreground">We believe privacy is a right, not a feature.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Ethics
                </h4>
                <p className="text-muted-foreground">We build technology that respects faith, family, human dignity, and social wellbeing.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Family Empowerment
                </h4>
                <p className="text-muted-foreground">We help parents and individuals create safer digital habits without fear or confusion.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Freedom with Protection
                </h4>
                <p className="text-muted-foreground">We do not believe safety should mean restriction. We design tools that protect users while preserving choice and control.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Innovation for Good
                </h4>
                <p className="text-muted-foreground">We use technology, AI, and security systems to solve real problems and create a healthier digital future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact - Startup Edition (honest & traction-focused) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Traction
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Small steps, big mission — building momentum with early supporters
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pilot Families */}
            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 text-center animate-fade-up group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <Heart className="text-accent" size={28} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">150+</div>
              <p className="text-foreground font-semibold mb-1">Pilot Families</p>
              <p className="text-sm text-muted-foreground">Actively testing Hifzio Guard</p>
            </div>

            {/* Threats Analyzed (not blocked — honest R&D metric) */}
            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 text-center animate-fade-up group" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <Shield className="text-accent" size={28} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">2.3M+</div>
              <p className="text-foreground font-semibold mb-1">Sites Analyzed</p>
              <p className="text-sm text-muted-foreground">For harmful & haram content patterns</p>
            </div>

            {/* Team Size */}
            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 text-center animate-fade-up group" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <Users className="text-accent" size={28} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">6</div>
              <p className="text-foreground font-semibold mb-1">Dedicated Team</p>
              <p className="text-sm text-muted-foreground">Engineers, designers & safety experts</p>
            </div>

            {/* Countries - target */}
            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 text-center animate-fade-up group" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <Globe className="text-accent" size={28} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">25+</div>
              <p className="text-foreground font-semibold mb-1">Countries Targeted</p>
              <p className="text-sm text-muted-foreground">Global rollout in progress</p>
            </div>
          </div>

          {/* Optional: extra note about early stage — builds trust */}
          <div className="text-center mt-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-muted/30 rounded-full px-4 py-2 text-sm text-muted-foreground">
              <Rocket size={16} />
              <span>Early stage • Your support shapes our future</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;