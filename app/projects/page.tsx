import type { Metadata } from "next";
import ProjectsHero from "./ProjectsHero";
import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectGrid";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Projects | GeoLegacy Survey",
  description:
    "Selected land, hydrographic, geophysical and geotechnical survey projects across Nigeria and West Africa.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | GeoLegacy Survey",
    description:
      "A selected record of survey and geospatial projects across land and water.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <main id="main">
        <ProjectsHero />
        <FeaturedProject />
        <ProjectGrid />
        <Contact
          heading="Have a project of your own?"
          description="Tell us about your site and we&apos;ll scope the right survey, agree a plan and confirm a quotation within 48 hours."
        />
      </main>
      <Footer />
    </>
  );
}