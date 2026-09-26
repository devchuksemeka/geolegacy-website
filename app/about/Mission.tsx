import { CrossSectionStrata } from "../components/IndustrialBackdrops";
import Reveal from "../components/Reveal";
import PhotoBand from "../components/PhotoBand";

export default function Mission() {
  return (
    <section className="about-mission" id="mission">
      <div className="bg-art">
        <CrossSectionStrata className="bg-art" />
      </div>
      <div className="wrap">
        <Reveal variant="scale">
          <span className="kicker kicker-light">Why we exist</span>
          <blockquote className="mission-statement">
            To give engineers, operators and investors{" "}
            <em>dependable ground truth</em> — acquiring, processing and
            interpreting site data to international standards, so every project
            can be planned, priced and built on certainty.
          </blockquote>
        </Reveal>

        <div className="mission-meta">
          <Reveal delay={100}>
            <h4>Vision</h4>
            <p>
              To become West Africa&apos;s most trusted name in subsurface
              certainty — the standard others calibrate against.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h4>Promise</h4>
            <p>
              One accountable team, one engineering standard — from the first
              survey control point to the final report on your desk.
            </p>
          </Reveal>
        </div>

        <PhotoBand
          src="/images/work/team-group.jpg"
          alt="The GeoLegacy Survey team — one accountable crew from field to office"
          caption="One accountable team — field and office"
          className="mission-photo"
        />
      </div>
    </section>
  );
}