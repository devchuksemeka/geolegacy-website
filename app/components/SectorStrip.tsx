const SECTORS = [
  {
    name: "Oil & Gas",
    desc: "Pipeline, facility and terminal surveys",
    icon: (
      <path d="M12 3c2 3.2 5 5 5 9a5 5 0 01-10 0c0-2.2 1.2-3.8 2.5-5.5.5 2 1 3.2 2.2 3.6C10.8 7.8 12 5.8 12 3z" />
    ),
  },
  {
    name: "Marine & Ports",
    desc: "Bathymetry, dredging and berth surveys",
    icon: (
      <path d="M12 21c3.9 0 7-2.7 7-7 .9-5.4-2.2-9.6-7-13-4.8 3.4-7.9 7.6-7 13 0 4.3 3.1 7 7 7z" />
    ),
  },
  {
    name: "Infrastructure",
    desc: "Roads, bridges and utility corridors",
    icon: <path d="M2 10h20v4H2zM5 14v7M19 14v7M12 14v7M6 10V6M18 10V6M9 6V3M15 6V3" />,
  },
  {
    name: "Real Estate",
    desc: "Boundary, title and topo mapping",
    icon: <path d="M3 21V9l9-6 9 6v12M9 21v-7h6v7M3 21h18" />,
  },
  {
    name: "Government",
    desc: "Cadastral, planning and public works",
    icon: <path d="M12 2l9 5H3l9-5zM5 11h14v10H5zM8 11v6M12 11v6M16 11v6" />,
  },
];

export default function SectorStrip() {
  return (
    <section className="sector-strip section-pad">
      <div className="wrap">
        <div className="trusted-head">
          <span className="kicker">Who trusts us</span>
          <h2>Trusted across Nigeria&apos;s most demanding sectors</h2>
          <p>
            From coastal terminals to mixed-use estates, our data sits behind
            the decisions of operators, planners and investors.
          </p>
        </div>

        <ul className="trusted-grid">
          {SECTORS.map((sector) => (
            <li className="trusted-card" key={sector.name}>
              <span className="trusted-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {sector.icon}
                </svg>
              </span>
              <div>
                <strong>{sector.name}</strong>
                <small>{sector.desc}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}