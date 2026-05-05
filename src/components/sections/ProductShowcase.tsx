import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { Link } from "react-router-dom";
import guardLogo from "@/assets/hifzio_guard.svg";
import browserLogo from "@/assets/hifzio_browser.svg";
import kidsLogo from "@/assets/hifzio_kids.svg";
import streamLogo from "@/assets/hifzio_stream.svg";

const products = [
  {
    id: 1,
    name: "Hifzio Guard",
    description: "Blocks millions of harmful sites including tracking, ads, and inappropriate content. Premium features include parental controls and app usage restrictions.",
    productLogo: guardLogo,
    comingSoon: false,
    gradient: "from-blue-500/20 to-purple-500/20",
    iosLink: "#",
    androidLink: "https://play.google.com/store/apps/details?id=com.wequitech.wequi_guard&pcampaignid=web_share",
    websiteLink: "https://guard.hifzio.com"
  },
  {
    id: 2,
    name: "Hifzio Browser",
    description: "AI-powered browser that detects and blurs indecent images. Built on private and secure foundations for the ideal balance of safety and privacy.",
    productLogo: browserLogo,
    comingSoon: true,
    gradient: "from-purple-500/20 to-pink-500/20",
    iosLink: "#",
    androidLink: "#",
    websiteLink: "https://hifzio.com"
  },
  {
    id: 3,
    name: "Hifzio Kids",
    description: "A safe and curated digital experience designed specifically for children — with age-appropriate content and strong parental controls.",
    productLogo: kidsLogo,
    comingSoon: true,
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    id: 4,
    name: "Hifzio Stream",
    description: "A family-friendly streaming and content platform that curates ethically safe content for all ages — filtered, moderated, and built with families in mind.",
    productLogo: streamLogo,
    comingSoon: true,
  }

];
// {
//   id: 4,
//   name: "Hifzio Stream",
//   tagline: "Safe & Clean Entertainment",
//   description: "A family-friendly streaming and content platform that curates ethically safe content for all ages — filtered, moderated, and built with families in mind.",
//   icon: Zap,
//   productLogo: streamLogo,
//   features: [
//     "Family-safe content curation",
//     "Age-restricted categories",
//     "Parental approval system",
//     "Ad-free experience",
//     "Multi-profile support",
//   ],
//   comingSoon: true,
//   gradient: "from-orange-500/20 to-red-500/20",
// },
export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="text-primary font-medium text-xs tracking-wider uppercase">
              The Ecosystem
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Innovative solutions designed to seamlessly protect and enhance your family's digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              productLogo={product.productLogo}
              comingSoon={product.comingSoon}
              gradient={product.gradient}
              iosLink={product.iosLink}
              androidLink={product.androidLink}
              websiteLink={product.websiteLink}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-20">
          <Link to="/products">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 font-semibold hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
