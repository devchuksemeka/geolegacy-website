export type Project = {
  id: string;
  category: string;
  title: string;
  location: string;
  year: string;
  sector: string;
  summary: string;
  services: string[];
  stats: { label: string; value: string }[];
  variant: "land" | "water" | "ground" | "signal";
  image: string;
};

const FEATURE: Project = {
  id: "lekki-development",
  category: "Land Survey",
  title: "Topographic and boundary survey for a mixed use development",
  location: "Lekki, Lagos",
  year: "2024",
  sector: "Real estate development",
  summary:
    "A 320 hectare masterplan in need of a single source of spatial truth. We set the control network, adjudicated the boundaries, mapped the full extent of the site and handed over one coordinated survey the design team could build on.",
  services: [
    "Topographic and detail mapping",
    "Cadastral and boundary adjudication",
    "GNSS control network",
    "Area and volume computation",
  ],
  stats: [
    { label: "Area mapped", value: "320 ha" },
    { label: "Boundary beacons", value: "1,240" },
    { label: "Field campaign", value: "9 weeks" },
  ],
  variant: "land",
  image: "/images/work/featured.jpg",
};

const GRID: Project[] = [
  {
    id: "ph-channel",
    category: "Hydrographic Survey",
    title: "Bathymetric survey of a port access channel",
    location: "Port Harcourt, Rivers State",
    year: "2023",
    sector: "Ports and dredging",
    summary:
      "Single and multibeam sounding along the approach channel to support a dredging campaign and updated nautical products.",
    services: ["Multibeam bathymetry", "Side scan sonar", "Tidal control"],
    stats: [
      { label: "Channel surveyed", value: "18 km" },
      { label: "Soundings", value: "42,000+" },
      { label: "Field campaign", value: "6 weeks" },
    ],
    variant: "water",
    image: "/images/work/proj-01.jpg",
  },
  {
    id: "ikeja-industrial",
    category: "Geotechnical Investigation",
    title: "Soil investigation for an industrial facility",
    location: "Ikeja, Lagos",
    year: "2023",
    sector: "Industrial development",
    summary:
      "Eighteen boreholes across a constrained factory site, logged and tested to foundation depth for the structural design.",
    services: ["Borehole drilling", "SPT and in situ testing", "Laboratory testing"],
    stats: [
      { label: "Boreholes", value: "18" },
      { label: "SPT tests", value: "360" },
      { label: "Lab samples", value: "120" },
    ],
    variant: "ground",
    image: "/images/work/proj-02.jpg",
  },
  {
    id: "bonny-pipeline",
    category: "Geophysical Survey",
    title: "Sub bottom profiling ahead of a pipeline crossing",
    location: "Bonny, Rivers State",
    year: "2022",
    sector: "Energy",
    summary:
      "Continuous sub bottom profiling along the crossing corridor to locate shallow hazards and confirm burial conditions.",
    services: ["Sub bottom profiling", "Magnetometry", "Interpretation"],
    stats: [
      { label: "Route length", value: "12 km" },
      { label: "Profiles run", value: "24" },
      { label: "Deliverables", value: "2 weeks" },
    ],
    variant: "signal",
    image: "/images/work/proj-03.jpg",
  },
  {
    id: "abuja-gis",
    category: "Positioning, GIS & Remote Sensing",
    title: "GIS asset database for a water utility network",
    location: "Abuja, Federal Capital Territory",
    year: "2024",
    sector: "Utilities",
    summary:
      "Field capture, GNSS positioning and data cleaning that turned 14,500 undocumented network assets into a working GIS.",
    services: ["GNSS field capture", "GIS database build", "Web mapping"],
    stats: [
      { label: "Assets captured", value: "14,500" },
      { label: "Service zones", value: "4" },
    ],
    variant: "signal",
    image: "/images/work/proj-04.jpg",
  },
  {
    id: "onne-jetty",
    category: "Hydrographic Survey",
    title: "Seabed survey for a jetty expansion",
    location: "Onne, Rivers State",
    year: "2021",
    sector: "Marine infrastructure",
    summary:
      "Detailed seabed survey and sampling at the jetty footprint ahead of berth deepening and fender works.",
    services: ["Multibeam bathymetry", "Seabed sampling", "Bathymetric charting"],
    stats: [
      { label: "Area surveyed", value: "48 ha" },
      { label: "Seabed samples", value: "32" },
    ],
    variant: "water",
    image: "/images/work/proj-05.jpg",
  },
  {
    id: "kubwa-housing",
    category: "Land Survey",
    title: "Cadastral survey for a housing estate",
    location: "Kubwa, Abuja",
    year: "2022",
    sector: "Housing development",
    summary:
      "Full cadastral adjudication of 780 plots, title documentation and coordinated street and utility survey.",
    services: ["Cadastral adjudication", "Title documentation", "Utility survey"],
    stats: [
      { label: "Plots adjudicated", value: "780" },
      { label: "Titles processed", value: "780" },
    ],
    variant: "land",
    image: "/images/work/proj-06.jpg",
  },
  {
    id: "tincan-berth",
    category: "Geotechnical Investigation",
    title: "Ground investigation for a container terminal upgrade",
    location: "Apapa, Lagos",
    year: "2021",
    sector: "Terminals and logistics",
    summary:
      "Deep boreholes and in situ testing through reclaimed ground to confirm pile design parameters for new crane rails.",
    services: ["Deep drilling", "In situ testing", "Foundation parameters"],
    stats: [
      { label: "Boreholes", value: "14" },
      { label: "Max depth", value: "45 m" },
    ],
    variant: "ground",
    image: "/images/work/proj-07.jpg",
  },
  {
    id: "owo-line",
    category: "Land Survey",
    title: "Route survey for a transmission line corridor",
    location: "Owo, Ondo State",
    year: "2020",
    sector: "Energy transmission",
    summary:
      "Topographic strips along 40 km of proposed route, tower spot heights and land parcel records for the right of way.",
    services: ["Route topographic survey", "Spot heights", "Parcel mapping"],
    stats: [
      { label: "Corridor surveyed", value: "40 km" },
      { label: "Tower spots", value: "96" },
    ],
    variant: "land",
    image: "/images/work/proj-08.jpg",
  },
];

export const FEATURED_PROJECT = FEATURE;
export const PORTFOLIO_PROJECTS = GRID;