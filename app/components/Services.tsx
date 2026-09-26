import Link from "next/link";
import Reveal from "./Reveal";

const SERVICES = [
  {
    heading: "Land Survey",
    body: "Topographic, cadastral and boundary surveys delivering precise, legally defensible spatial data for planning and title.",
    icon: <path d="M3 20l6-14 4 8 3-6 5 12H3z" />,
  },
  {
    heading: "Hydrographic Survey",
    body: "Bathymetric, seabed and waterway surveys for ports, dredging, pipelines and marine infrastructure projects.",
    icon: (
      <path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 4v9" />
    ),
  },
  {
    heading: "Geophysical Survey",
    body: "Sub-bottom profiling, magnetometry and seismic data acquisition to characterise the subsurface before you build.",
    icon: <path d="M3 12h4l2-7 4 14 2-7h6" />,
  },
  {
    heading: "Geotechnical Investigation",
    body: "Soil borehole logging, sampling and lab-backed analysis that informs safe, cost-efficient foundation design.",
    icon: <path d="M12 2v20M4 8l8-6 8 6M4 8v12M20 8v12M4 20h16" />,
  },
  {
    heading: "Positioning, GIS & Remote Sensing",
    body: "GNSS positioning, GIS mapping and satellite/drone remote sensing that turns coordinates into decisions.",
    icon: (
      <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z" />
    ),
  },
  {
    heading: "Environmental & Data Studies",
    body: "Soil, seabed and environmental baseline studies with full-cycle data acquisition, processing and interpretation.",
    icon: <path d="M4 4h16v6H4zM4 14h7v6H4zM14 14h6v6h-6z" />,
  },
];

export default function Services() {
  return (
    <section className="services section-pad px-section" id="services">
      <div
        className="px-bg"
        style={{ backgroundImage: "url(/images/work/marine-platform.jpg)" }}
        aria-hidden="true"
      />
      <div className="px-overlay px-overlay--light" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <span className="kicker">What we do</span>
            <h2>Full-spectrum survey and geospatial services</h2>
            <p>
              One survey partner for every layer of investigation your project
              needs — from initial positioning to final engineering-ready
              reporting.
            </p>
          </Reveal>
        </div>

        <div className="service-grid">
          {SERVICES.map((service, i) => (
            <Reveal key={service.heading} delay={(i % 3) * 90} className="service-card">
              <svg
                className="service-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                {service.icon}
              </svg>
              <h3>{service.heading}</h3>
              <p>{service.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="section-more">
          <Reveal variant="scale">
            <Link href="/services" className="section-link">
              Explore all services
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