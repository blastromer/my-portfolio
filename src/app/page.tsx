import { AboutSection } from "@/components/about-section";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";
import { Stats } from "@/components/stats";
import { WhatIBuild } from "@/components/what-i-build";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <WhatIBuild />
        <Projects />
        <AboutSection />
      </main>
    </>
  );
}
