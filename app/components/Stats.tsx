import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="stats px-section">
      <div
        className="px-bg"
        style={{ backgroundImage: "url(/images/work/office-team.jpg)" }}
        aria-hidden="true"
      />
      <div className="px-overlay px-overlay--light" aria-hidden="true" />
      <div className="wrap stats-grid">
        <Reveal variant="scale" delay={0}>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">Field-verified data on every deliverable</div>
          </div>
        </Reveal>
        <Reveal variant="scale" delay={90}>
          <div>
            <div className="stat-num">Land&nbsp;&amp;&nbsp;Sea</div>
            <div className="stat-label">Onshore and offshore capability, one team</div>
          </div>
        </Reveal>
        <Reveal variant="scale" delay={180}>
          <div>
            <div className="stat-num">4</div>
            <div className="stat-label">Discipline-integrated survey stages</div>
          </div>
        </Reveal>
        <Reveal variant="scale" delay={270}>
          <div>
            <div className="stat-num">NG</div>
            <div className="stat-label">Based in Nigeria, built for West Africa</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}