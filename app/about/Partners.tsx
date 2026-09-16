import Image from "next/image";
import { PARTNERS } from "./about-data";
import Reveal from "../components/Reveal";

export default function Partners() {
  return (
    <section className="about-partners section-pad" id="partners">
      <div className="grid-field" style={{ position: "absolute", inset: 0, height: "100%", opacity: 0.5 }} />
      <div className="wrap">
        <Reveal>
          <div className="section-head partners-head">
            <div>
              <span className="kicker">Trusted partners</span>
              <h2>A network built on delivery</h2>
              <p>
                We work alongside operators, contractors and developers who
                expect their data to hold up in front of clients, regulators
                and financiers.
              </p>
            </div>
            <div className="partners-count">
              <span className="partners-count-num">{PARTNERS.length}</span>
              <span className="partners-count-label">long-standing alliances</span>
            </div>
          </div>
        </Reveal>

        <div className="about-partners-grid">
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 70}>
              <div className="partner-card">
                <span className="partner-mono" aria-hidden="true">
                  {partner.logo ? (
                    <Image src={partner.logo} alt={partner.name} fill sizes="64px" />
                  ) : (
                    partner.abbrev
                  )}
                </span>
                <div className="partner-info">
                  <span className="partner-type">{partner.category}</span>
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}