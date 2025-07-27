import { Metadata } from "next";
import Navigation from "@/app/components/navigation";
import About from "@/app/components/about";
import Skills from "@/app/components/skills";
import Experience from "@/app/components/experience";
import Projects from "@/app/components/projects";
import Contact from "@/app/components/contact";

export const metadata: Metadata = {
  title: "Home - Andika Dayu Portfolio",
  description:
    "Welcome to Muhammad Andika Dayu's portfolio - Experienced Backend Developer specializing in Go, C#, Python, PHP, Laravel, and microservices architecture.",
  alternates: {
    canonical: "https://andikadayu.my.id",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative" role="main">
        <div className="pt-16">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}
