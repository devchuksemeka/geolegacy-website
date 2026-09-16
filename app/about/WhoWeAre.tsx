import { PROOF_CARDS } from "./about-data";
import Reveal from "../components/Reveal";

export default function WhoWeAre() {
  return (
    <section className="about-wwa section-pad" id="about">
      <div className="wrap">
        <div>
          <Reveal>
            <span className="kicker">Who we are</span>
            <h2>
              A serious partner for land, sea and every layer beneath them.
            </h2>
          </Reveal>
          <div className="about-wwa-copy">
            <Reveal delay={80}>
              <p>
                <strong>
                  GeoLegacy Survey is an integrated survey and geospatial
                  engineering company.
                </strong>{" "}
                We plan, acquire, process and deliver site investigation data for
                energy, marine, infrastructure and real estate projects across
                Nigeria and West Africa.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                Our teams are built around one promise:{" "}
                <strong>field-verified data, delivered to engineering
                grade, on schedule.</strong>{" "}
                Every deployment — onshore or offshore — runs on calibrated
                instrumentation, disciplined QHSE protocols and a single
                accountable line from scope to final report. That is what makes
                our work something engineers, operators and investors can
                actually build on.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="about-proof">
          {PROOF_CARDS.map((card, i) => (
            <Reveal key={card.heading} delay={i * 100}>
              <div className="about-proof-card">
                {card.icon}
                <h4>{card.heading}</h4>
                <p>{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}