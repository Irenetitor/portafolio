import Header from "@/components/Header";
import { About, Contact, Education, Hero, Projects, Skills } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer container">
        <p>© {new Date().getFullYear()} Irene · Built with Next.js and TypeScript</p>
      </footer>
    </>
  );
}
