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
    <section className="section-pad" id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How a project moves</span>
          <h2>From scope to delivered data</h2>
          <p>
            A consistent four-stage workflow keeps every survey on schedule,
            on standard and easy for your team to act on.
          </p>
        </div>

        <div className="process-grid">
          {STEPS.map((step) => (
            <div className="process-step" key={step.num}>
              <span className="process-num">{step.num}</span>
              <h3>{step.heading}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}