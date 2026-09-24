import Link from "next/link";
import Reveal from "../components/Reveal";
import type { Service } from "./service-data";

export default function ServiceSection({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const dark = index % 2 === 1;

  return (
    <section
      className={`svc-section section-pad svc-section--bg${
        dark ? " svc-section--dark" : ""
      }`}
      id={service.id}
    >
      <div
        className="svc-bg"
        style={{ backgroundImage: `url(${service.image})` }}
        aria-hidden="true"
      />
      <div className="svc-bg-overlay" aria-hidden="true" />

      <div className="bg-art grid-field grid-field--light svc-gridfield" />

      <div className="wrap svc-layout">
        <Reveal variant="left" className="svc-copy">
          <span className={`svc-eyebrow${dark ? " svc-eyebrow--light" : ""}`}>
            {service.eyebrow}
          </span>
          <h2>{service.title}</h2>
          <p>{service.intro}</p>
          <p>{service.why}</p>
          <Link
            href="/contact#survey-request"
            className={`btn ${dark ? "btn-light" : "btn-primary"} svc-cta`}
          >
            Request a quotation
          </Link>
        </Reveal>

        <Reveal
          variant="right"
          delay={120}
          className={`svc-spec${dark ? " svc-spec--dark" : ""}`}
        >
          <div className="svc-spec-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              {service.icon}
            </svg>
          </div>
          <h3>What&apos;s included</h3>
          <ul className="svc-list">
            {service.deliverables.map((item) => (
              <li key={item}>
                <svg
                  className="svc-check"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="svc-tags">
            {service.applications.map((app) => (
              <span key={app} className="svc-tag">
                {app}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}