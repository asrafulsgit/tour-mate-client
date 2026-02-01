import BecomeAGuide from "@/components/public/home/BecomeAGuide";
import ExploreByDivision from "@/components/public/home/ExploreByDivision";
import FeaturedTours from "@/components/public/home/FeaturedTours";
import Hero from "@/components/public/home/Hero";
import NewsLetter from "@/components/public/home/NewsLetter";
import Stats from "@/components/public/home/Stats";
import Testimonial from "@/components/public/home/Testimonial";
import WhyChooseTourMate from "@/components/public/home/WhyChooseTourMate";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedTours />
      <ExploreByDivision />
      <WhyChooseTourMate />
      <BecomeAGuide />
      <Testimonial />
      <Stats />
      <NewsLetter />
    </main>
  );
}
