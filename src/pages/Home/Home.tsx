import { Hero } from '@/pages/Home/Hero';
import { FeatureStrip } from '@/components/home/FeatureStrip';
import { ExploreCategoriesSection } from '@/components/home/ExploreCategoriesSection';
import { FeaturedFoodSection } from '@/components/food/FeaturedFoodSection';
import { RestaurantDiscoverySection } from '@/components/restaurant/RestaurantDiscoverySection';
import { AboutSection } from '@/components/home/AboutSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <ExploreCategoriesSection />
      <FeaturedFoodSection />
      <RestaurantDiscoverySection />
      <AboutSection />
      <FinalCtaSection />
    </>
  );
}