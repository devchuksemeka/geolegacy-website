import Hero from "./components/Hero";
import SectorStrip from "./components/SectorStrip";
import Services from "./components/Services";
import DeeperLook from "./components/DeeperLook";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Credibility from "./components/Credibility";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <SectorStrip />
        <Services />
        <DeeperLook />
        <Process />
        <Stats />
        <Projects />
        <Credibility />
        <Contact />
      </main>
      <Footer />
    </>
  );
}