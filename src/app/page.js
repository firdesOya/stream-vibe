import AbstractLogo from "@/components/AbstractLogo";
import DeviceFeatures from "@/components/DeviceFeatures";
import FreeTrail from "@/components/FreeTrail";
import HomeBackground from "@/components/HomeBackground";
import IntroHero from "@/components/IntroHero";
import QuestionSection from "@/components/QuestionSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeBackground />
      <AbstractLogo />
      <IntroHero />
      <DeviceFeatures />
      <QuestionSection/>
      <FreeTrail />
    </div>
  );
}
