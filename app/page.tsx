import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background grid-bg">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
