import HeroSection from "@/components/HeroSection";
import ServiceIntro from "@/components/ServiceIntro";
import CategorySection from "@/components/CategorySection";
import CommunicationSection from "@/components/CommunicationSection";
import RecommendationSection from "@/components/RecommendationSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <ServiceIntro />
      <CategorySection />
      <CommunicationSection />
      <RecommendationSection />
    </main>
  );
}
