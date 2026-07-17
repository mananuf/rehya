import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { WhereWeWorkSection } from "@/components/landing/where-we-work-section";
import { LeadershipSection } from "@/components/landing/leadership-section";
import { NewsroomSection } from "@/components/landing/newsroom-section";
import { TransparencySection } from "@/components/landing/transparency-section";
import { QuestionsSection } from "@/components/landing/questions-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhereWeWorkSection />
      <LeadershipSection />
      <NewsroomSection />
      <TransparencySection />
      <QuestionsSection />
      <FooterSection />
    </main>
  );
}
