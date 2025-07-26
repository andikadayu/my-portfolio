
import Navigation from '@/app/components/navigation';
import About from '@/app/components/about';
import Skills from '@/app/components/skills';
import Experience from '@/app/components/experience';
import Projects from '@/app/components/projects';
import Contact from '@/app/components/contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <Navigation />
      <div className="w-full">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
