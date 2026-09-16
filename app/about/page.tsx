import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import WhoWeAre from "./WhoWeAre";
import Mission from "./Mission";
import Stats from "../components/Stats";
import Partners from "./Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "About Us | GeoLegacy Survey — Integrated Site Investigations & Geospatial Engineering",
  description:
    "GeoLegacy Survey is an integrated survey and geospatial engineering company delivering land, hydrographic, geophysical and geotechnical site investigations across Nigeria and West Africa.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | GeoLegacy Survey",
    description:
      "Integrated survey and geospatial engineering — land, hydrographic, geophysical and geotechnical site investigations across Nigeria and West Africa.",
  },
};

export default function AboutPage() {
  return (
    <>
      <main id="main">
        <AboutHero />
        <WhoWeAre />
        <Mission />
        <Stats />
        <Partners />
        <Contact
          heading="Project in mind? Let&apos;s scope it together."
          description="Whether it&apos;s a single plot, a pipeline corridor or a full offshore campaign, our team will work out the right survey scope, method and pricing for you."
          formTitle="Request a Survey"
        />
      </main>
      <Footer />
    </>
  );
}