import { Hero } from "@/components/home/Hero";
import { WhyWood } from "@/components/home/WhyWood";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { SocialImpact } from "@/components/home/SocialImpact";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyWood />
      <FeaturedProducts />
      <SocialImpact />
      <Testimonials />
      <CTA />
    </>
  );
}
