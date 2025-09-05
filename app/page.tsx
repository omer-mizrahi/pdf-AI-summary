import BgGradient from "@/components/common/BgGradient";
import CtaSection from "@/components/CtaSection";
import DemoSection from "@/components/DemoSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CtaSection />
        {/* <CTA /> */}
      </div>

    </div>
  );
}
