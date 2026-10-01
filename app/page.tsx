import { Hero } from "@/components/home/Hero";
import { Companies } from "@/components/home/Companies";
import { DiscoverCourses } from "@/components/home/DiscoverCourses";
import { LearningPaths } from "@/components/home/LearningPaths";
import { PromoSection } from "@/components/home/PromoSection";

import { UnlockSection } from "@/components/home/UnlockSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <PromoSection />
      <LearningPaths />
      <DiscoverCourses />
      <UnlockSection />
    </>
  );
}
