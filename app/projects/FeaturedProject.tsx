import Image from "next/image";
import { FEATURED_WORK } from "./projects-data";
import Reveal from "../components/Reveal";

export default function FeaturedProject() {
  const project = FEATURED_WORK;

  return (
    <section className="featured section-pad" id="featured">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Featured work</span>
            <h2>{project.title}</h2>
            <p>{project.category}</p>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={80}>
          <div className="featured-card">
            <div className="featured-art">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 46vw"
                className="featured-art-img"
                style={{ objectFit: "cover" }}
              />
              <span className="featured-scan" aria-hidden="true" />
              <span className="featured-index">01</span>
            </div>
            <div className="featured-body">
              <span className="project-eyebrow">{project.category}</span>
              <p>{project.line}</p>
              <div className="svc-tags">
                {[
                  "Bathymetry & charting",
                  "Mooring & berth surveys",
                  "Harbour, jetty & port works",
                ].map((item) => (
                  <span key={item} className="svc-tag">
                    {item}
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