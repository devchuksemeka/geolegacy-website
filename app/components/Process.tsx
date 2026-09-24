import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    heading: "Scope & plan",
    body: "We assess site conditions, define survey control and agree deliverables against your project's engineering requirements.",
  },
  {
    num: "02",
    heading: "Acquire",
    body: "Field and marine crews capture positioning, geophysical, geotechnical and hydrographic data using calibrated instrumentation.",
  },
  {
    num: "03",
    heading: "Process & interpret",
    body: "Data is cleaned, modelled and interpreted by our GIS and geoscience team into clear, usable outputs.",
  },
  {
    num: "04",
    heading: "Deliver & support",
    body: "You receive engineering-ready reports and maps, with consultancy support through design and construction.",
  },
];

export default function Process() {
  return (
    <section className="section-pad px-section" id="process">
      <div
        className="px-bg"
        style={{ backgroundImage: "url(/images/work/services-bg-1.jpg)" }}
        aria-hidden="true"
      />
      <div className="px-overlay px-overlay--light" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <span className="kicker">How a project moves</span>
            <h2>From scope to delivered data</h2>
            <p>
              A consistent four-stage workflow keeps every survey on schedule,
              on standard and easy for your team to act on.
            </p>
          </Reveal>
        </div>

        <div className="process-grid">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 100} className="process-step">
              <span className="process-num">{step.num}</span>
              <h3>{step.heading}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}