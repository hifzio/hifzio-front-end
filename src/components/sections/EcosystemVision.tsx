import { Fingerprint, Shield, Globe, PlaySquare, Baby } from "lucide-react";

export const EcosystemVision = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradient – subtle and modern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5 opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6 backdrop-blur-sm">
            <span className="text-accent text-xs font-semibold tracking-wider uppercase">The Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            A Unified Safety Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything we build is interconnected. Powered by a single, secure identity that pushes safety rules across every application seamlessly.
          </p>
        </div>

        {/* Clear Hierarchy Visualization */}
        <div className="max-w-6xl mx-auto">
          {/* Central Core: Hifzio ID */}
          <div className="flex justify-center relative z-20">
            <div className="w-full max-w-md bg-card border border-primary/30 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(var(--primary),0.1)] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
              <div className="relative z-10">
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 ring-4 ring-background shadow-inner">
                  <Fingerprint size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Hifzio ID</h3>
                <p className="text-muted-foreground">
                  The unified, encrypted identity that authenticates your family across all Hifzio products. Set rules once, apply them everywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block relative h-24 -mt-4 z-0">
            {/* Central vertical line down */}
            <div className="absolute left-1/2 top-4 bottom-1/2 w-px bg-border -translate-x-1/2" />
            {/* Horizontal distribution line */}
            <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px bg-border" />
            {/* Vertical lines to products */}
            <div className="absolute top-1/2 left-[12.5%] w-px h-1/2 bg-border" />
            <div className="absolute top-1/2 left-[37.5%] w-px h-1/2 bg-border" />
            <div className="absolute top-1/2 left-[62.5%] w-px h-1/2 bg-border" />
            <div className="absolute top-1/2 left-[87.5%] w-px h-1/2 bg-border" />
          </div>

          {/* Connection Lines - Mobile/Tablet */}
          <div className="lg:hidden flex justify-center h-12 -mt-2 relative z-0">
            <div className="w-px h-full bg-border" />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Guard */}
            <div className="bg-card border border-border/50 rounded-3xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="mx-auto w-16 h-16 bg-card border border-border/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Shield size={28} className="text-accent" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Hifzio Guard</h4>
              <p className="text-sm text-muted-foreground">System-wide protection and robust parental controls.</p>
            </div>
            
            {/* Browser */}
            <div className="bg-card border border-border/50 rounded-3xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="mx-auto w-16 h-16 bg-card border border-border/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Globe size={28} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Hifzio Browser</h4>
              <p className="text-sm text-muted-foreground">Safe browsing with real-time on-device AI filtering.</p>
            </div>

            {/* Kids */}
            <div className="bg-card border border-border/50 rounded-3xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="mx-auto w-16 h-16 bg-card border border-border/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Baby size={28} className="text-accent" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Hifzio Kids</h4>
              <p className="text-sm text-muted-foreground">A curated, engaging, and highly safe environment for children.</p>
            </div>

            {/* Stream */}
            <div className="bg-card border border-border/50 rounded-3xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="mx-auto w-16 h-16 bg-card border border-border/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <PlaySquare size={28} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Hifzio Stream</h4>
              <p className="text-sm text-muted-foreground">Family-friendly streaming content moderated for safety.</p>
            </div>
          </div>
        </div>

        {/* Bottom description */}
        <div className="text-center mt-16 md:mt-24 max-w-2xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-base text-foreground">
            <span className="font-semibold text-accent">One ID, one safety policy.</span> Set your family's rules once in Hifzio ID, and they instantly apply across every product in the ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};