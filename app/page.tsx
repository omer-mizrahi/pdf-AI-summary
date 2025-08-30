import BgGradient from "@/components/common/BgGradient";
import DemoSection from "@/components/DemoSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
      </div>
      {/* <PricingSection /> */}
      {/* <CTA /> */}

    </div>
  );
}
