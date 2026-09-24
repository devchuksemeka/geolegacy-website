import Reveal from "./Reveal";

const ACCREDS = [
  {
    heading: "QHSE-led operations",
    body: "Health, safety and environmental protocols on every field and marine deployment.",
    icon: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />,
  },
  {
    heading: "Calibrated instrumentation",
    body: "Positioning and geophysical equipment maintained to international standards.",
    icon: (
      <path d="M9 12l2 2 4-4M21 12c0 5-4.5 8.5-9 10-4.5-1.5-9-5-9-10V6l9-4 9 4v6z" />
    ),
  },
  {
    heading: "Engineering-ready reporting",
    body: "Deliverables structured for direct use by engineers, planners and regulators.",
    icon: (
      <path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2zM14 3v5h5" />
    ),
  },
  {
    heading: "Full data lifecycle",
    body: "Acquisition, processing and interpretation handled by one accountable team.",
    icon: <path d="M3 3v18h18M7 15l4-5 3 3 5-7" />,
  },
];

export default function Credibility() {
  return (
    <section className="credibility section-pad">
      <div className="wrap">
        <Reveal variant="right">
          <span className="kicker">Client testimonial</span>
          <blockquote>
            &ldquo;GeoLegacy brought the same discipline to our onshore survey
            as they did offshore — one team, one standard, no gaps in the
            data.&rdquo;
          </blockquote>
          <div className="quote-attr">
            <div className="quote-avatar">PM</div>
            <div>
              <div className="quote-name">Project Manager</div>
              <div className="quote-role">Infrastructure Development Client</div>
            </div>
          </div>
        </Reveal>

        <div className="accred-list">
          {ACCREDS.map((accred, i) => (
            <Reveal key={accred.heading} delay={i * 90} className="accred-card">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                {accred.icon}
              </svg>
              <h4>{accred.heading}</h4>
              <p>{accred.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}