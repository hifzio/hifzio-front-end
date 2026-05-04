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
    androidLink: "#",
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions designed to protect and enhance your digital experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              websiteLink={product.websiteLink} // 👈 new prop
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="accent" size="lg" className="shadow-card hover:shadow-soft hover:scale-105 transition-all duration-300">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
