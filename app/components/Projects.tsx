import Link from "next/link";
import SurveyScene from "./SurveyScene";

export default function Projects() {
  return (
    <section className="section-pad" id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Selected work</span>
          <h2>Projects across land and water</h2>
          <p>
            A cross-section of the site investigations our team plans, acquires
            and delivers.
          </p>
        </div>

        <div className="projects-grid">
          <a href="#contact" className="project-card">
            <div className="project-thumb">
              <SurveyScene variant="land" />
            </div>
            <div className="project-body">
              <span className="project-eyebrow">Land Survey</span>
              <h3>Topographic mapping — mixed-use development</h3>
              <p>
                Full boundary and topographic survey supporting master planning
                approvals.
              </p>
            </div>
          </a>

          <a href="#contact" className="project-card">
            <div className="project-thumb">
              <SurveyScene variant="water" />
            </div>
            <div className="project-body">
              <span className="project-eyebrow">Hydrographic</span>
              <h3>Bathymetric survey — port access channel</h3>
              <p>
                Seabed profiling and sounding to support dredging and channel
                design.
              </p>
            </div>
          </a>

          <a href="#contact" className="project-card">
            <div className="project-thumb">
              <SurveyScene variant="ground" />
            </div>
            <div className="project-body">
              <span className="project-eyebrow">Geotechnical</span>
              <h3>Soil investigation — industrial facility</h3>
              <p>
                Borehole logging and lab analysis informing foundation design
                parameters.
              </p>
            </div>
          </a>
        </div>

        <div className="section-more">
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
        </div>
      </div>
    </section>
  );
}