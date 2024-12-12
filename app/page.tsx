"use client";

// import EducationAndWork from "@/components/ui/EducationNWork";
import Services from "@/components/ui/Services";
import HeroSection from "@/components/ui/HeroSection";
import SkillSet from "@/components/ui/SkillSet";
import ProjectsAndTestimonials from "@/components/ui/ProjectsNTestimonials";

export default function Home() {
  return (
    <div className="text-foreground bg-background min-h-screen z-0">
      <HeroSection />
      <Services />
      <SkillSet />
      {/* <EducationAndWork /> */}
      <ProjectsAndTestimonials />
    </div>
  );
}
