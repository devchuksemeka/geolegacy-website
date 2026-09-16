import { RadarRings } from "../components/IndustrialBackdrops";
import Reveal from "../components/Reveal";

const CHIPS = [
  { label: "48-hour response", icon: "clock" },
  { label: "Free scoping call", icon: "chat" },
  { label: "Onshore & offshore", icon: "sea" },
  { label: "No-obligation quotation", icon: "doc" },
];

function ChipIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "clock":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "chat":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M21 11.5a8 8 0 01-8 8h-6.5L3 22l1.5-4A8 8 0 1110.6 19.5" />
        </svg>
      );
    case "sea":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 3v8" />
        </svg>
      );
    case "doc":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M6 2h8l4 4v16H6z" />
          <path d="M14 2v4h4M9 12h6M9 16h6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactHero() {
  return (
    <section className="contact-hero" id="contact-hero">
      <div className="bg-art grid-field grid-field--light" />
      <div className="bg-art radar">
        <RadarRings className="bg-art" />
      </div>
      <div className="wrap">
        <Reveal>
          <span className="kicker kicker-light">Contact Us</span>
          <h1>
            Let&apos;s scope your next <em>investigation.</em>
          </h1>
          <p className="contact-hero-sub">
            Share a few details about your project and we&apos;ll come back with
            a clear plan, timeline and quotation — usually within 48 hours.
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

        <a href="#survey-request" className="btn btn-light contact-hero-cta">
          Request a Survey
        </a>

        <span className="scroll-cue" aria-hidden="true">
          Scroll
        </span>
      </div>
    </section>
  );
}