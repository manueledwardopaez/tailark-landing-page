import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-1";
import Features from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ContentSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
