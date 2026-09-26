import Image from "next/image";
import Reveal from "../components/Reveal";
import { PORTFOLIO } from "./projects-data";

export default function ProjectGrid() {
  return (
    <section className="portfolio section-pad" id="portfolio">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Work at a glance</span>
            <h2>Real crews, real kit, real sites</h2>
            <p>
              No renders and no stock imagery — this is the work our field and
              processing teams do day in, day out.
            </p>
          </div>
        </Reveal>

        <div className="portfolio-grid">
          {PORTFOLIO.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 80}
              className="portfolio-card"
            >
              <div className="portfolio-thumb">
                <Image
                  src={item.image}
                  alt={`${item.category} — ${item.title}`}
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
                <span className="project-eyebrow">{item.category}</span>
                <h3>{item.title}</h3>
                <p className="portfolio-summary">{item.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}