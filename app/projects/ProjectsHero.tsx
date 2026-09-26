import Reveal from "../components/Reveal";
import ProjectsHeroPhoto from "./ProjectsHeroPhoto";
import { PORTFOLIO } from "./projects-data";

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
      <ProjectsHeroPhoto />
      <div className="wrap">
        <Reveal>
          <h1>
            Work we&apos;ve surveyed, mapped and <em>delivered.</em>
          </h1>
          <p className="projects-hero-sub">
            {PORTFOLIO.length + 1} showcases of real fieldwork — crews, kit and
            data from land, water and subsurface investigation. No renders, no
            stock imagery.
          </p>
        </Reveal>

        <div className="about-hero-chips">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector} delay={i * 60}>
              <span className="about-hero-chip">{sector}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}