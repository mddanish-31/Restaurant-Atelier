import { Hero } from '@/pages/Home/Hero';
import { FeatureStrip } from '@/components/home/FeatureStrip';
import { FeaturedFoodSection } from '@/components/food/FeaturedFoodSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <FeaturedFoodSection />
    </>
  );
}