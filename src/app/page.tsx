import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="pt-20">
     <Hero />
     <About />
     <Skills />
     <Projects />
     <Education />
     <Contact />
    </main>
  );    
}