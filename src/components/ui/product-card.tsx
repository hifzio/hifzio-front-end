import { LucideIcon } from "lucide-react";
import { Apple, Download, QrCode, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";

interface ProductCardProps {
  name: string;
  tagline?: string;
  description: string;
  icon?: LucideIcon;
  productLogo?: string;
  features?: string[];
  comingSoon: boolean;
  gradient: string;
  iosLink?: string;
  androidLink?: string;
  websiteLink?: string;
  index?: number;
}

// QR Modal Component
export const QRModal = ({
  isOpen,
  onClose,
  iosLink,
  androidLink,
}: {
  isOpen: boolean;
  onClose: () => void;
  iosLink?: string;
  androidLink?: string;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="bg-card rounded-3xl p-8 max-w-md w-full border border-border/50 shadow-2xl relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-foreground">Scan to Download</h3>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 rounded-full">×</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {iosLink && (
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white p-4 rounded-2xl border-2 border-border/50">
                <QRCode value={iosLink} size={140} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-foreground font-semibold">
                  <Apple size={16} />
                  <span>iOS App</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Scan with your iPhone camera</p>
              </div>
            </div>
          )}
          {androidLink && (
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white p-4 rounded-2xl border-2 border-border/50">
                <QRCode value={androidLink} size={140} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-foreground font-semibold">
                  <Download size={16} />
                  <span>Android App</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Scan with your Android camera</p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 p-4 bg-muted/50 rounded-xl">
          <p className="text-xs text-muted-foreground text-center">Point your phone's camera at the QR code to download the app</p>
        </div>
      </div>
    </div>
  );
};

// Main ProductCard Component - Simplified working glow
export const ProductCard = ({
  name,
  tagline,
  description,
  icon: Icon,
  productLogo,
  features,
  comingSoon,
  gradient,
  iosLink,
  androidLink,
  websiteLink,
  index = 0,
}: ProductCardProps) => {
  const [showQRCodes, setShowQRCodes] = useState(false);

  return (
    <>
      <div
        className="group relative rounded-3xl animate-fade-up"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Rotating glow border - visible and travels around corners */}
        <div
          className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "conic-gradient(from var(--angle), transparent, hsl(var(--accent)), transparent, transparent, hsl(var(--accent)), transparent)",
            animation: "rotate-slow 6s linear infinite",
          }}
        />
        {/* Soft blur aura for extra glow */}
        <div
          className="absolute -inset-[4px] rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-md pointer-events-none"
          style={{
            background: "conic-gradient(from var(--angle), transparent, hsl(var(--accent)), transparent)",
            animation: "rotate-slow 6s linear infinite",
          }}
        />

        {/* Card content */}
        <div className="relative h-full w-full rounded-3xl border border-border/70 group-hover:border-transparent bg-gradient-card p-8 overflow-hidden z-10 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {comingSoon && (
            <div className="absolute top-6 right-6 z-10">
              <span className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20 backdrop-blur-sm">
                Coming Soon
              </span>
            </div>
          )}

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              {productLogo ? (
                <div className="flex-1 pr-4">
                  <img src={productLogo} alt={`${name} logo`} className="h-14 w-auto rounded-xl bg-white object-contain p-1.5 shadow-sm transition-transform duration-500 group-hover:scale-105" />
                </div>
              ) : (
                <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-soft`}>
                  {Icon && <Icon className="text-accent" size={32} strokeWidth={2} />}
                </div>
              )}

              {!comingSoon && (iosLink || androidLink) && (
                <Button variant="ghost" size="sm" className="h-10 px-3 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group/qr flex-shrink-0" onClick={() => setShowQRCodes(true)}>
                  <QrCode size={18} className="mr-2 text-muted-foreground group-hover/qr:text-accent transition-colors" />
                  <span className="text-sm font-medium text-muted-foreground group-hover/qr:text-accent transition-colors">Show QR</span>
                </Button>
              )}
            </div>

            <h3 className={`text-3xl font-bold text-foreground mb-2 ${!comingSoon ? 'group-hover:text-accent transition-colors duration-300' : ''}`}>
              {name}
            </h3>
            {tagline && <p className="text-accent font-medium mb-4 text-sm tracking-wide">{tagline}</p>}
            <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

            {features && features.length > 0 && (
              <div className="space-y-2 mb-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-3">
              {websiteLink && (
                <Button variant="outline" className="w-full group/btn hover:scale-105 transition-all duration-300 hover:border-accent hover:text-accent" onClick={() => window.open(websiteLink, "_blank")}>
                  <Globe size={18} className="mr-2 group-hover/btn:animate-pulse" />
                  Visit Website
                </Button>
              )}
              {!comingSoon ? (
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="default" className="w-full group/btn hover:scale-105 transition-all duration-300 shadow-soft" onClick={() => iosLink && window.open(iosLink, "_blank")}>
                    <Apple size={18} className="mr-2 group-hover/btn:animate-pulse" />
                    iOS
                  </Button>
                  <Button variant="outline" className="w-full group/btn hover:scale-105 transition-all duration-300 hover:border-accent hover:text-accent" onClick={() => androidLink && window.open(androidLink, "_blank")}>
                    <Download size={18} className="mr-2 group-hover/btn:animate-pulse" />
                    Android
                  </Button>
                </div>
              ) : (
                <Button variant="outline" className="w-full hover:border-accent hover:text-accent transition-all duration-300" disabled>
                  Notify Me
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <QRModal isOpen={showQRCodes} onClose={() => setShowQRCodes(false)} iosLink={iosLink} androidLink={androidLink} />
    </>
  );
};