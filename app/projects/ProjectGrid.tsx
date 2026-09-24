import Image from "next/image";
import Reveal from "../components/Reveal";
import { PORTFOLIO_PROJECTS } from "./projects-data";

export default function ProjectGrid() {
  return (
    <section className="portfolio section-pad" id="portfolio">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Selected work</span>
            <h2>Projects across land and water</h2>
            <p>
              A cross-section of the site investigations our team plans,
              acquires and delivers.
            </p>
          </div>
        </Reveal>

        <div className="portfolio-grid">
          {PORTFOLIO_PROJECTS.map((project, i) => (
            <Reveal
              key={project.id}
              delay={(i % 3) * 80}
              className="portfolio-card"
            >
              <div className="portfolio-thumb">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="portfolio-img"
                  style={{ objectFit: "cover" }}
                />
                <span className="portfolio-scan" aria-hidden="true" />
                <span className="portfolio-num">
                  {String(i + 2).padStart(2, "0")}
                </span>
              </div>
              <div className="portfolio-body">
                <span className="project-eyebrow">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="portfolio-meta">
                  {project.location} &middot; {project.year}
                </p>
                <p className="portfolio-summary">{project.summary}</p>
                <div className="portfolio-stats">
                  {project.stats.map((stat) => (
                    <span className="portfolio-stat" key={stat.label}>
                      <b>{stat.value}</b>
                      {stat.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}