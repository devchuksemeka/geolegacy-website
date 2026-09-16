"use client";

import { useCallback, useState } from "react";

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
  const [inView, setInView] = useState(false);

  const attachObserver = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(node);
  }, []);

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

        <div
          className={`depth-visual${inView ? " in-view" : ""}`}
          id="depthVisual"
          ref={attachObserver}
          aria-hidden="true"
        >
          <svg viewBox="0 0 420 520" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#1a2c72" />
                <stop offset="1" stopColor="#16296b" />
              </linearGradient>
            </defs>
            <rect width="420" height="520" fill="url(#skyGrad)" />

            <g className="depth-layer">
              <path
                d="M0 120 L60 108 L120 122 L180 104 L240 118 L300 100 L360 116 L420 106 L420 150 L0 150 Z"
                fill="#9db8ff"
                opacity="0.9"
              />
              <text
                x="20"
                y="95"
                fontFamily="var(--font-space-grotesk), 'Space Grotesk'"
                fontSize="13"
                fill="#dbe4ff"
              >
                Surface
              </text>

              <g stroke="#eaf0ff" strokeWidth="1.3" strokeLinecap="round" opacity="0.9">
                <path d="M296 74 L272 116" />
                <path d="M296 74 L316 116" />
                <path d="M296 74 L296 122" />
              </g>
              <rect x="282" y="56" width="28" height="18" rx="4" fill="#101d55" stroke="#eaf0ff" strokeWidth="1" />
              <circle cx="282" cy="64" r="4" fill="#eaf0ff" opacity="0.9" />
              <line x1="282" y1="65" x2="238" y2="65" stroke="#eaf0ff" strokeWidth="0.9" strokeDasharray="3 4" opacity="0.55" />
              <line x1="228" y1="65" x2="228" y2="116" stroke="#eaf0ff" strokeWidth="1.4" />
              <rect x="214" y="48" width="28" height="18" rx="3" fill="#16296b" stroke="#eaf0ff" strokeWidth="1" />
              <circle cx="228" cy="58" r="3" fill="#eaf0ff" />
            </g>

            <g className="depth-layer">
              <path
                d="M0 150 L420 150 L420 260 L0 260 Z"
                fill="#6fa1ff"
                opacity="0.55"
              />
              <path
                d="M0 190 Q60 175 120 195 T240 190 T360 200 T420 190"
                stroke="#eaf0ff"
                strokeWidth="1.2"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M0 220 Q70 205 140 222 T280 216 T420 224"
                stroke="#eaf0ff"
                strokeWidth="1.2"
                fill="none"
                opacity="0.35"
              />
              <text
                x="20"
                y="180"
                fontFamily="var(--font-space-grotesk), 'Space Grotesk'"
                fontSize="13"
                fill="#eef2ff"
              >
                Subsurface
              </text>

              <line
                x1="196"
                y1="152"
                x2="196"
                y2="256"
                stroke="#eaf0ff"
                strokeWidth="1"
                strokeDasharray="4 3"
                opacity="0.55"
              />
              <line x1="184" y1="174" x2="208" y2="174" stroke="#eaf0ff" strokeWidth="0.8" opacity="0.4" />
              <line x1="184" y1="206" x2="208" y2="206" stroke="#eaf0ff" strokeWidth="0.8" opacity="0.4" />
              <line x1="184" y1="238" x2="208" y2="238" stroke="#eaf0ff" strokeWidth="0.8" opacity="0.4" />
              <text
                x="212"
                y="178"
                fontFamily="var(--font-space-grotesk), 'Space Grotesk'"
                fontSize="9"
                fill="#eef2ff"
                opacity="0.6"
              >
                SPT
              </text>
            </g>

            <g className="depth-layer">
              <path
                d="M0 260 L420 260 L420 390 L0 390 Z"
                fill="#3f6fe0"
                opacity="0.55"
              />
              <circle cx="90" cy="300" r="3" fill="#eaf0ff" opacity="0.7" />
              <circle cx="230" cy="330" r="3" fill="#eaf0ff" opacity="0.55" />
              <circle cx="330" cy="290" r="3" fill="#eaf0ff" opacity="0.6" />
              <path
                d="M0 340 Q80 320 160 342 T340 336 T420 344"
                stroke="#eaf0ff"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              />
              <text
                x="20"
                y="290"
                fontFamily="var(--font-space-grotesk), 'Space Grotesk'"
                fontSize="13"
                fill="#eef2ff"
              >
                Seabed &amp; waterway
              </text>

              <path
                d="M224 268 L260 268 L272 284 L330 284 L342 266 L220 266 Z"
                fill="#0b1740"
                stroke="#eaf0ff"
                strokeWidth="1"
              />
              <rect x="258" y="248" width="36" height="20" rx="3" fill="#16296b" stroke="#eaf0ff" strokeWidth="0.9" />
              <line x1="276" y1="268" x2="276" y2="300" stroke="#eaf0ff" strokeWidth="1.6" />
              <path
                d="M276 300 L256 332 M276 300 L298 334"
                stroke="#eaf0ff"
                strokeWidth="1"
                strokeDasharray="3 4"
                opacity="0.6"
              />
              <path d="M250 348 Q268 340 276 348" stroke="#eaf0ff" strokeWidth="1" fill="none" opacity="0.6" />
              <line x1="250" y1="348" x2="302" y2="348" stroke="#eaf0ff" strokeWidth="0.7" opacity="0.35" />
              <circle cx="276" cy="348" r="3" fill="#eaf0ff" opacity="0.8" />
            </g>

            <g className="depth-layer">
              <path d="M0 390 L420 390 L420 520 L0 520 Z" fill="#101d55" />
              <g stroke="#4a63c7" strokeWidth="1" opacity="0.6">
                <line x1="0" y1="420" x2="420" y2="420" />
                <line x1="0" y1="455" x2="420" y2="455" />
                <line x1="0" y1="490" x2="420" y2="490" />
              </g>
              <text
                x="20"
                y="410"
                fontFamily="var(--font-space-grotesk), 'Space Grotesk'"
                fontSize="13"
                fill="#c9d4ff"
              >
                Interpretation &amp; reporting
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}