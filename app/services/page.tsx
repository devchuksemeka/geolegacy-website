import type { Metadata } from "next";
import ServicesHero from "./ServicesHero";
import ServiceSection from "./ServiceSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { SERVICES } from "./service-data";

export const metadata: Metadata = {
  title:
    "Services | GeoLegacy Survey — Land, Hydrographic, Geophysical & Geotechnical",
  description:
    "Land survey, hydrographic, geophysical and geotechnical site investigations, positioning, GIS and remote sensing services across Nigeria and West Africa.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | GeoLegacy Survey",
    description:
      "Six integrated survey and geospatial service lines — from land surface to seabed.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <main id="main">
        <ServicesHero />
        {SERVICES.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
        <Contact
          heading="Not sure which service you need?"
          description="Describe your site and objectives to us — we&apos;ll recommend the right survey scope, method and pricing for your project."
        />
      </main>
      <Footer />
    </>
  );
}