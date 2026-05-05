import { Shield, Globe, Users, Zap, Lock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";

// Product logo imports
import guardLogo from "@/assets/hifzio_guard_with_text.svg";
import browserLogo from "@/assets/hifzio_browser_with_text.svg";
import kidsLogo from "@/assets/hifzio_kids_with_text.svg";
import streamLogo from "@/assets/hifzio_stream_with_text.svg";

const products = [
  {
    id: 1,
    name: "Hifzio Guard",
    tagline: "Complete Protection for Your Family",
    description: "Blocks millions of harmful sites including tracking, ads, porn, and harmful ideologies. Enforces Safe-Search and YouTube restrictions to prevent exposure to inappropriate content.",
    icon: Shield,
    productLogo: guardLogo,
    features: [
      "Block tracking, ads, and harmful content",
      "Parental control system",
      "App usage restrictions",
      "Prayer time silence mode",
      "YouTube & Social media filtering",
    ],
    comingSoon: false,
    gradient: "from-blue-500/20 to-purple-500/20",
    iosLink: "#",
    androidLink: "https://play.google.com/store/apps/details?id=com.wequitech.wequi_guard&pcampaignid=web_share",
    websiteLink: "https://guard.hifzio.com"
  },
  {
    id: 2,
    name: "Hifzio Browser",
    tagline: "Browse with Privacy & Safety",
    description: "AI-powered browser that runs on your device, detecting indecent images and blurring them as you browse. Built on Brave and DuckDuckGo for ultimate privacy.",
    icon: Globe,
    productLogo: browserLogo,
    features: [
      "On-device AI image detection",
      "Automatic content blurring",
      "Built on Brave & DuckDuckGo",
      "Complete privacy protection",
      "Zero data collection",
    ],
    comingSoon: true,
    gradient: "from-purple-500/20 to-pink-500/20",
    iosLink: "#",
    androidLink: "#",
  },
  {
    id: 3,
    name: "Hifzio Kids",
    tagline: "A Safe Digital World for Children",
    description: "A curated and moderated digital experience designed specifically for children — age-appropriate content with strong parental controls and activity monitoring.",
    icon: Users,
    productLogo: kidsLogo,
    features: [
      "Age-appropriate content filtering",
      "Safe browsing environment",
      "Parental activity dashboard",
      "Screen time management",
      "Educational content focus",
    ],
    comingSoon: true,
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    id: 4,
    name: "Hifzio Stream",
    tagline: "Safe & Clean Entertainment",
    description: "A family-friendly streaming and content platform that curates ethically safe content for all ages — filtered, moderated, and built with families in mind.",
    icon: Zap,
    productLogo: streamLogo,
    features: [
      "Family-safe content curation",
      "Age-restricted categories",
      "Parental approval system",
      "Ad-free experience",
      "Multi-profile support",
    ],
    comingSoon: true,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  // {
  //   id: 5,
  //   name: "Hifzio Shield",
  //   tagline: "Next-Gen Security Solution",
  //   description: "Advanced AI-powered security system that protects your entire digital ecosystem with real-time threat detection and prevention.",
  //   icon: Lock,
  //   features: [
  //     "AI threat detection",
  //     "Real-time protection",
  //     "Multi-device support",
  //     "Automatic updates",
  //     "24/7 monitoring",
  //   ],
  //   comingSoon: true,
  //   gradient: "from-indigo-500/20 to-purple-500/20",
  // },
  // {
  //   id: 6,
  //   name: "Hifzio ID",
  //   tagline: "Manage Your Digital Identity",
  //   description: "Comprehensive digital identity and family management dashboard to monitor and manage your family's digital activities, accounts, and online safety.",
  //   icon: Smartphone,
  //   features: [
  //     "Digital identity management",
  //     "Family account dashboard",
  //     "Activity monitoring",
  //     "App usage insights",
  //     "Safety alerts",
  //   ],
  //   comingSoon: true,
  //   gradient: "from-pink-500/20 to-red-500/20",
  // },
];

const Products = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for complete digital protection
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                tagline={product.tagline}
                description={product.description}
                icon={product.icon}
                productLogo={product.productLogo}
                features={product.features}
                comingSoon={product.comingSoon}
                gradient={product.gradient}
                iosLink={product.iosLink}
                androidLink={product.androidLink}
                websiteLink={product.websiteLink}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join families who trust Hifzio to protect their digital life
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="shadow-card hover:shadow-soft hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.wequitech.wequi_guard', '_blank')}
            >
              Download Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
