import { TopoContours } from "../components/IndustrialBackdrops";
import Reveal from "../components/Reveal";
import { PORTFOLIO_PROJECTS } from "./projects-data";

const SECTORS = [
  "Real estate",
  "Ports and marine",
  "Energy",
  "Utilities",
  "Industrial",
  "Infrastructure",
];

export default function ProjectsHero() {
  return (
    <section className="projects-hero" id="projects-hero">
      <div className="bg-art grid-field grid-field--light" />
      <div className="bg-art">
        <TopoContours className="bg-art" />
      </div>
      <div className="wrap">
        <Reveal>
          <h1>
            Work we&apos;ve surveyed, mapped and <em>delivered.</em>
          </h1>
          <p className="projects-hero-sub">
            A selected record of {PORTFOLIO_PROJECTS.length + 1} projects across
            land, water and subsurface investigation. Names and figures are
            shared where clients permit.
          </p>
        </Reveal>

        <div className="about-hero-chips">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector} delay={i * 60}>
              <span className="about-hero-chip">{sector}</span>
            </Reveal>
          ))}
        </div>

        <span className="scroll-cue" aria-hidden="true">
          Scroll
        </span>
      </div>
    </section>
  );
}