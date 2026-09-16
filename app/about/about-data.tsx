export type Partner = {
  name: string;
  abbrev: string;
  category: string;
  description: string;
  logo?: string;
};

export const PARTNERS: Partner[] = [
  {
    name: "Helios Energy Partners",
    abbrev: "HE",
    category: "Oil & gas",
    description: "Upstream operations and subsurface programme support.",
    logo: undefined,
  },
  {
    name: "Meridian Marine Works",
    abbrev: "MM",
    category: "Marine & dredging",
    description: "Port approach and channel infrastructure projects.",
    logo: undefined,
  },
  {
    name: "Terrafirm Civil",
    abbrev: "TC",
    category: "Civil infrastructure",
    description: "Roads, bridges and large-scale civil works.",
    logo: undefined,
  },
  {
    name: "Aurora Port Logistics",
    abbrev: "AP",
    category: "Port operations",
    description: "Terminal and marine logistics development.",
    logo: undefined,
  },
  {
    name: "Stratum Development",
    abbrev: "SD",
    category: "Real estate",
    description: "Master-planned mixed-use and commercial developments.",
    logo: undefined,
  },
  {
    name: "WestGrid Energy",
    abbrev: "WG",
    category: "Power & utilities",
    description: "Generation, transmission and distribution infrastructure.",
    logo: undefined,
  },
];

export const HERO_CHIPS = [
  {
    label: "Nigeria-based",
    icon: "pin",
  },
  {
    label: "ISO-calibrated instrumentation",
    icon: "check",
  },
  {
    label: "QHSE-led deployments",
    icon: "shield",
  },
  {
    label: "Onshore & offshore",
    icon: "sea",
  },
];

export const PROOF_CARDS = [
  {
    heading: "Land & sea, one standard",
    body: "Same discipline onshore and offshore — no gaps in the data, no split accountability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    ),
  },
  {
    heading: "Calibrated instrumentation",
    body: "Positioning and geophysical equipment maintained to international calibration standards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 12l2 2 4-4M21 12c0 5-4.5 8.5-9 10-4.5-1.5-9-5-9-10V6l9-4 9 4v6z" />
      </svg>
    ),
  },
  {
    heading: "Engineering-ready reporting",
    body: "Deliverables structured for direct use by engineers, planners and regulators.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
        <path d="M14 3v5h5" />
      </svg>
    ),
  },
  {
    heading: "Full data lifecycle",
    body: "Acquisition, processing and interpretation handled by one accountable team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 3v18h18M7 15l4-5 3 3 5-7" />
      </svg>
    ),
  },
];