import { FEATURED_PROJECT } from "./projects-data";
import ProjectArt from "./ProjectArt";
import Reveal from "../components/Reveal";

export default function FeaturedProject() {
  const project = FEATURED_PROJECT;

  return (
    <section className="featured section-pad" id="featured">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Featured project</span>
            <h2>{project.title}</h2>
            <p>
              {project.sector} &middot; {project.location} &middot;{" "}
              {project.year}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="featured-card">
            <div className="featured-art">
              <ProjectArt variant={project.variant} />
              <span className="featured-index">01</span>
            </div>
            <div className="featured-body">
              <span className="project-eyebrow">{project.category}</span>
              <p>{project.summary}</p>
              <div className="featured-stats">
                {project.stats.map((stat) => (
                  <div className="featured-stat" key={stat.label}>
                    <span className="featured-stat-value">{stat.value}</span>
                    <span className="featured-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="svc-tags">
                {project.services.map((service) => (
                  <span key={service} className="svc-tag">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}