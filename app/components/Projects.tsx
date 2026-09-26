import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const WORK = [
  {
    img: "/images/work/land-tripod.jpg",
    eyebrow: "Land Survey",
    title: "Control networks & topographic mapping",
    body: "Total station traverses tied to GPS survey control — boundaries, terrain and features mapped to survey grade.",
    alt: "Total station survey on a tripod during a land control survey",
  },
  {
    img: "/images/work/hydro-mooring.jpg",
    eyebrow: "Hydrographic",
    title: "Mooring, berth & port surveys",
    body: "Buoy positions, berth footprints and channel soundings charted for marine operations you can insure.",
    alt: "Mooring buoy surveyed during a hydrographic and port survey",
  },
  {
    img: "/images/work/drilling-crew.jpg",
    eyebrow: "Geotechnical",
    title: "Boreholes & in-situ field testing",
    body: "Crews log soils and run SPT on site — foundation parameters your structural engineer can trust.",
    alt: "Geotechnical crew carrying out borehole and in-situ testing on site",
  },
];

export default function Projects() {
  return (
    <section className="section-pad" id="projects">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <span className="kicker">Work at a glance</span>
            <h2>Real crews, real kit, real sites</h2>
            <p>
              A look at the surveys, investigations and deliverables we plan,
              acquire and process.
            </p>
          </Reveal>
        </div>

        <div className="projects-grid">
          {WORK.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <a href="#projects" className="project-card">
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
              View our work
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