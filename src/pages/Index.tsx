import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { CommunityCTA } from "@/components/sections/CommunityCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <CommunityCTA />
    </div>
  );
};

export default Index;
