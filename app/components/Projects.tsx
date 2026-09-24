import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const WORK = [
  {
    img: "/images/work/home-01.jpg",
    eyebrow: "Land Survey",
    title: "Topographic mapping — mixed-use development",
    body: "Full boundary and topographic survey supporting master planning approvals.",
    alt: "Surveyor working on site during a land survey",
  },
  {
    img: "/images/work/home-02.jpg",
    eyebrow: "Hydrographic",
    title: "Bathymetric survey — port access channel",
    body: "Seabed profiling and sounding to support dredging and channel design.",
    alt: "Survey vessel operating on the water during a hydrographic survey",
  },
  {
    img: "/images/work/home-03.jpg",
    eyebrow: "Geotechnical",
    title: "Soil investigation — industrial facility",
    body: "Borehole logging and lab analysis informing foundation design parameters.",
    alt: "Crew carrying out geotechnical soil investigation on site",
  },
];

export default function Projects() {
  return (
    <section className="section-pad" id="projects">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <span className="kicker">Selected work</span>
            <h2>Projects across land and water</h2>
            <p>
              A cross-section of the site investigations our team plans, acquires
              and delivers.
            </p>
          </Reveal>
        </div>

        <div className="projects-grid">
          {WORK.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <a href="#contact" className="project-card">
                <div className="project-thumb">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="project-img"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="thumb-scan" aria-hidden="true" />
                </div>
                <div className="project-body">
                  <span className="project-eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="section-more">
          <Reveal variant="scale">
            <Link href="/projects" className="section-link">
              View all projects
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}