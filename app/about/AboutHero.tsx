import Reveal from "../components/Reveal";
import AboutHeroPhoto from "./AboutHeroPhoto";
import { HERO_CHIPS } from "./about-data";

function ChipIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "pin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.3" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
        </svg>
      );
    case "sea":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 3v8" />
        </svg>
      );
  }
}

export default function AboutHero() {
  return (
    <section className="about-hero" id="about-hero">
      <AboutHeroPhoto />
      <div className="wrap">
        <Reveal>
          <span className="kicker kicker-light">About Us</span>
          <h1>
            The ground truth behind <em>serious projects.</em>
          </h1>
          <p className="about-hero-sub">
            We plan, acquire, process and deliver site investigation data that
            engineers, operators and investors can build on — from the land
            surface down through the seabed.
          </p>
        </Reveal>
        <div className="about-hero-chips">
          {HERO_CHIPS.map((chip, i) => (
            <Reveal key={chip.label} delay={i * 80}>
              <span className="about-hero-chip">
                <ChipIcon icon={chip.icon} />
                {chip.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}