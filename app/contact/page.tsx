import type { Metadata } from "next";
import ContactHero from "./ContactHero";
import NextSteps from "./NextSteps";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | GeoLegacy Survey — Request a Quotation",
  description:
    "Contact GeoLegacy Survey for land, hydrographic, geophysical and geotechnical site investigations across Nigeria and West Africa. Request a quotation and we respond within 48 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | GeoLegacy Survey",
    description:
      "Request a survey quotation for onshore or offshore site investigations — our team responds within 48 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      <main id="main">
        <ContactHero />
        <NextSteps />
        <Contact
          heading="Send us the details of your project."
          description="Tell us the location, scope and timeline and we&apos;ll respond with a clear plan, method and quotation — usually within 48 hours."
        />
      </main>
      <Footer />
    </>
  );
}