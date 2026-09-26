export type PortfolioItem = {
  id: string;
  category: string;
  title: string;
  line: string;
  image: string;
};

export const FEATURED_WORK: PortfolioItem = {
  id: "marine-port-works",
  category: "Marine & Port Infrastructure",
  title: "Port, berth and terminal surveys — delivered to chart grade",
  line:
    "From mooring buoys to vessel berths, we acquire the bathymetry, positioning and seabed data that keeps marine infrastructure safe, insurable and buildable.",
  image: "/images/work/dock-machine.jpg",
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "control-topographic",
    category: "Land Survey",
    title: "Control networks & topographic mapping",
    line:
      "Total station traverses tied to a GNSS control network — boundaries, terrain and features mapped to survey grade.",
    image: "/images/work/land-tripod.jpg",
  },
  {
    id: "mooring-berth-surveys",
    category: "Hydrographic Survey",
    title: "Mooring, berth & port surveys",
    line:
      "Buoy positions, berth footprints and channel soundings acquired and charted for marine operations you can insure.",
    image: "/images/work/hydro-mooring.jpg",
  },
  {
    id: "borehole-spot-testing",
    category: "Geotechnical Investigation",
    title: "Boreholes & in-situ field testing",
    line:
      "Crews log soils and run SPT through constrained sites — foundation parameters your structural engineer can trust.",
    image: "/images/work/drilling-crew.jpg",
  },
  {
    id: "rtk-field-desktop",
    category: "Positioning & GNSS",
    title: "RTK acquisition, logged on site",
    line:
      "Real-time survey-grade positioning captured at the rock face and recorded straight to the project database.",
    image: "/images/work/grid-laptop.jpg",
  },
  {
    id: "control-desktop-processing",
    category: "GIS & Remote Sensing",
    title: "Control & desktop processing",
    line:
      "Our processing team computes control networks, cleans observations and builds the GIS layers your ops floor uses.",
    image: "/images/work/svc-gis.jpg",
  },
  {
    id: "subsea-geophysical",
    category: "Geophysical Survey",
    title: "Subsea geophysical spread",
    line:
      "Sonar, positioning and seabed sensing run through towed and deployed spreads ahead of subsea works.",
    image: "/images/work/svc-hydro.jpg",
  },
  {
    id: "crew-mobilisations",
    category: "Field Operations",
    title: "HSE-led crew mobilisations",
    line:
      "Identified crews, calibrated instruments and disciplined site setup — every mobilisation runs to one safety standard.",
    image: "/images/work/grid-crew.jpg",
  },
  {
    id: "processing-delivery",
    category: "Processing & Delivery",
    title: "Interpretation & engineering-ready reports",
    line:
      "Data cleaned, modelled and delivered in-house — the same team that acquired it finishes the job.",
    image: "/images/work/grid-office.jpg",
  },
  {
    id: "the-team",
    category: "The Team",
    title: "Surveyors, geologists & geomaticians, one crew",
    line:
      "Field and office specialists accountable from the first control point to the final signature on your report.",
    image: "/images/work/grid-team.jpg",
  },
];