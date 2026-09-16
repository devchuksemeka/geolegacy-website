import { TopoContours } from "../components/IndustrialBackdrops";
import Reveal from "../components/Reveal";

const CHIPS = [
  { label: "Six integrated service lines", icon: "grid" },
  { label: "Onshore & offshore", icon: "sea" },
  { label: "ISO-calibrated instruments", icon: "check" },
  { label: "Engineering-ready reporting", icon: "doc" },
];

function ChipIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "grid":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "sea":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 3v8" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      );
    case "doc":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 2h8l4 4v16H6z" />
          <path d="M14 2v4h4M9 12h6M9 16h6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesHero() {
  return (
    <section className="services-hero" id="services-hero">
      <div className="bg-art grid-field grid-field--light" />
      <div className="bg-art">
        <TopoContours className="bg-art" />
      </div>
      <div className="wrap">
        <Reveal>
          <h1>
            Every layer of investigation, <em>one partner.</em>
          </h1>
          <p className="services-hero-sub">
            From the first pin to the final layer of the seabed — six integrated
            service lines delivered with the same rigour, the same calibrated
            instruments and the same engineering-ready report.
          </p>
        </Reveal>

        <div className="about-hero-chips">
          {CHIPS.map((chip, i) => (
            <Reveal key={chip.label} delay={i * 80}>
              <span className="about-hero-chip">
                <ChipIcon icon={chip.icon} />
                {chip.label}
              </span>
            </Reveal>
          ))}
        </div>

        <span className="scroll-cue" aria-hidden="true">
          Scroll
        </span>
      </div>
    </section>
  );
}