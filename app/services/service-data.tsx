export type ServiceBackdrop = "topo" | "strata" | "radar";

export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  why: string;
  deliverables: string[];
  applications: string[];
  backdrop: ServiceBackdrop;
  image: string;
  icon: React.ReactNode;
};

export const SERVICES: Service[] = [
  {
    id: "land-survey",
    eyebrow: "Precision positioning & mapping",
    title: "Land Survey",
    intro:
      "Land survey is the foundation of every project — accurate, legally defensible spatial data that plans, titles and builds are built on.",
    why: "From raw bush to developed plots, we establish control networks and map terrain with GNSS and total station surveys, so boundaries hold up where it counts and earthworks quantities are never a surprise.",
    deliverables: [
      "Topographic & detail mapping",
      "Cadastral, boundary & title surveys",
      "Engineering and control networks",
      "GNSS / RTK & total station survey",
      "Area, volume & quantity computation",
      "GIS-ready survey plans and reports",
    ],
    applications: ["Urban planning", "Real estate & title", "Infrastructure", "Mining & quarrying"],
    backdrop: "topo",
    image: "/images/work/service-01.jpg",
    icon: <path d="M3 20l6-14 4 8 3-6 5 12H3z" />,
  },
  {
    id: "hydrographic-survey",
    eyebrow: "Beneath the waterline",
    title: "Hydrographic Survey",
    intro:
      "Bathymetry, seabed characterisation and waterway mapping for ports, dredging, pipelines and offshore structures.",
    why: "We acquire single-beam and multibeam data, side-scan sonar imaging and tidal-controlled water levels, then turn them into chart-grade products your marine engineers can build on.",
    deliverables: [
      "Bathymetric charts & hydrographic plans",
      "Side-scan sonar & seabed imaging",
      "Tidal, current & water-level monitoring",
      "Pipeline & cable route surveys",
      "Dredging volume computation",
      "Harbour, jetty & port surveys",
    ],
    applications: ["Ports & harbours", "Dredging & reclamation", "Offshore energy", "Inland waterways"],
    backdrop: "radar",
    image: "/images/work/service-02.jpg",
    icon: (
      <path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 4v9" />
    ),
  },
  {
    id: "geophysical-survey",
    eyebrow: "Seeing beneath the surface",
    title: "Geophysical Survey",
    intro:
      "Non-intrusive investigation of the subsurface — before civil works, drilling or cable laying commit to the ground.",
    why: "Sub-bottom profiling, magnetometry and seismic methods locate buried services, voids, bedrock and hazardous objects, so you understand the ground before you touch it.",
    deliverables: [
      "Sub-bottom profiling (SBP)",
      "Magnetometer & UXO detection surveys",
      "Seismic reflection & refraction",
      "Ground-penetrating radar (GPR)",
      "Buried utilities & void mapping",
      "Integrated interpretation & reporting",
    ],
    applications: ["Route selection", "Utility detection", "Offshore investigation", "Engineering design"],
    backdrop: "strata",
    image: "/images/work/service-03.jpg",
    icon: <path d="M3 12h4l2-7 4 14 2-7h6" />,
  },
  {
    id: "geotechnical-investigation",
    eyebrow: "Engineering the ground truth",
    title: "Geotechnical Investigation",
    intro:
      "Boreholes, sampling and laboratory testing that tell structural engineers exactly what the ground can carry.",
    why: "We log soils, run in-situ testing and laboratory analysis, and deliver the soil parameters that drive safe, cost-efficient foundation design.",
    deliverables: [
      "Soil & rock borehole drilling",
      "SPT & in-situ testing",
      "Disturbed & undisturbed sampling",
      "Laboratory testing & classification",
      "Foundation design parameters",
      "Geotechnical interpretation reports",
    ],
    applications: ["Foundations & structures", "Roads & pavements", "Slope stability", "Earthworks & fill"],
    backdrop: "strata",
    image: "/images/work/service-04.jpg",
    icon: <path d="M12 2v20M4 8l8-6 8 6M4 8v12M20 8v12M4 20h16" />,
  },
  {
    id: "positioning-gis-remote-sensing",
    eyebrow: "Coordinates into decisions",
    title: "Positioning, GIS & Remote Sensing",
    intro:
      "GNSS positioning, GIS mapping and satellite and drone remote sensing that connect field data to decision-making workflows.",
    why: "From geodetic control to interactive asset portals, we design spatial systems your team actually uses — accurate, current and connected.",
    deliverables: [
      "GNSS / RTK positioning services",
      "Geodetic & control networks",
      "GIS data capture & mapping",
      "Satellite & drone remote sensing",
      "Web mapping & spatial analysis",
      "Asset & land management databases",
    ],
    applications: ["Utilities & networks", "Asset management", "Environment & land use", "Integrated operations"],
    backdrop: "topo",
    image: "/images/work/service-05.jpg",
    icon: <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z" />,
  },
  {
    id: "environmental-data-studies",
    eyebrow: "Baselines that hold up",
    title: "Environmental & Data Studies",
    intro:
      "Environmental baseline and feasibility studies that document today's conditions — and protect your project's approvals.",
    why: "Soils, seabed and water quality sampling, joined to rigorous data acquisition and interpretation, gives lenders and regulators the evidence they ask for.",
    deliverables: [
      "Environmental baseline studies",
      "Soil, water & sediment sampling",
      "Marine & terrestrial assessments",
      "Feasibility & impact studies",
      "Data acquisition & interpretation",
      "Compliance-ready reporting",
    ],
    applications: ["Energy & renewables", "Marine projects", "Development approvals", "ESG reporting"],
    backdrop: "radar",
    image: "/images/work/service-06.jpg",
    icon: <path d="M4 4h16v6H4zM4 14h7v6H4zM14 14h6v6h-6z" />,
  },
];