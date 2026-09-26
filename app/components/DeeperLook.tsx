import Image from "next/image";

const LAYERS = [
  {
    dot: "#9db8ff",
    title: "Surface",
    body: "Topographic detail, boundaries and existing infrastructure mapped to survey-grade accuracy.",
  },
  {
    dot: "#6fa1ff",
    title: "Subsurface",
    body: "Soil stratification and geotechnical properties captured through borehole and geophysical data.",
  },
  {
    dot: "#3f6fe0",
    title: "Seabed & waterway",
    body: "Bathymetric and sub-bottom data for marine, dredging and offshore engineering works.",
  },
  {
    dot: "#1d3aa0",
    title: "Interpretation",
    body: "Raw acquisition turned into engineering-ready reports, models and recommendations.",
  },
];

export default function DeeperLook() {
  return (
    <section className="depth section-pad" id="about">
      <div className="grid-field" style={{ height: "100%", opacity: 0.3 }} />
      <div className="wrap depth-layout">
        <div>
          <span className="kicker">Beneath the surface</span>
          <h2>A deeper look at every site</h2>
          <p
            style={{
              marginTop: 16,
              color: "rgba(255, 255, 255, 0.72)",
              fontSize: 17,
              maxWidth: "46ch",
            }}
          >
            Survey work isn&apos;t just what&apos;s visible at ground level. We
            investigate every layer — surface, subsurface and seabed — so
            nothing is left to assumption.
          </p>

          <div className="depth-copy-list">
            {LAYERS.map((layer) => (
              <div className="depth-copy-item" key={layer.title}>
                <span
                  className="layer-dot"
                  style={{ background: layer.dot }}
                />
                <div>
                  <h4>{layer.title}</h4>
                  <p>{layer.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="depth-photo">
          <Image
            src="/images/work/deep-sea.jpg"
            alt="Specialist subsea survey equipment prepared for a deep-sea investigation"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}