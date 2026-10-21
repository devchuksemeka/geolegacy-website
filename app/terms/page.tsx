import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service | GeoLegacy Survey",
  description:
    "The terms and conditions governing the use of the GeoLegacy Survey website and engagement of our survey services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | GeoLegacy Survey",
    description:
      "Terms governing use of the GeoLegacy Survey website and engagement of our survey services.",
  },
};

const SECTIONS = [
  {
    heading: "1. Agreement to terms",
    body: [
      "These Terms of Service govern your access to and use of the GeoLegacy Survey website and the services described on it. By using this website or engaging our services, you agree to be bound by these terms.",
      "If you do not agree with any part of these terms, please do not use the website or the services.",
    ],
  },
  {
    heading: "2. About our services",
    body: [
      "GeoLegacy Survey is a survey and geospatial engineering company providing land, hydrographic, geophysical, geotechnical and environmental site investigation services, positioning, GIS and remote sensing, across Nigeria and West Africa.",
      "Descriptions of services on this website are provided for general information and do not, on their own, constitute a binding offer. A contract is formed only when we issue a written quotation and you accept it.",
    ],
  },
  {
    heading: "3. Quotations and pricing",
    body: [
      "Quotations are prepared based on the scope, location, method and reporting requirements described at the time of request. Quotations are valid for the period stated on the quotation document.",
      "Changes to scope, site conditions or access that become known after fieldwork begins may result in a revised quotation, which we will discuss with you before additional work proceeds.",
    ],
  },
  {
    heading: "4. Client responsibilities",
    body: [
      "You agree to provide accurate project information, grant lawful access to sites, and obtain any permits required for the survey work in the areas involved.",
      "You also agree to coordinate site representatives as needed for safety briefings and to advise us of site hazards before fieldwork begins.",
    ],
  },
  {
    heading: "5. Health, safety and permits",
    body: [
      "Field and marine operations follow our QHSE procedures. You remain responsible for site-level risks outside our control, including security, weather and compliance with local access conditions.",
      "Where the law requires licences or approvals for survey activity, these will be secured in line with the scope agreed in the quotation.",
    ],
  },
  {
    heading: "6. Deliverables and acceptance",
    body: [
      "Deliverables — including reports, datasets, maps and models — are produced from the data we acquire and the instructions we agree with you. Deliverables are for your stated project use.",
      "Please raise any concerns about deliverables promptly after receipt so we can address them in line with the agreed scope.",
    ],
  },
  {
    heading: "7. Intellectual property",
    body: [
      "Reports and datasets remain the property of GeoLegacy Survey until payment obligations are met. On full payment, you receive a licence to use them for the project for which they were commissioned.",
      "Our methods, software, procedures and instrument configurations remain our intellectual property.",
    ],
  },
  {
    heading: "8. Confidentiality",
    body: [
      "We keep project information confidential and share it only with our personnel and approved subcontractors who need it to deliver the work.",
      "We may reference completed project types in our marketing unless you ask us to keep a specific project confidential.",
    ],
  },
  {
    heading: "9. Liability",
    body: [
      "Our liability in respect of services is limited to the scope of the contract agreed in writing, and to the extent permitted by law, to the value of the fees paid for the relevant services.",
      "We are not liable for indirect or consequential loss, including loss of profit, revenue or opportunity, arising from survey data or user reliance on it outside the agreed project scope.",
    ],
  },
  {
    heading: "10. Website use",
    body: [
      "You may not misuse this website, attempt to gain unauthorised access to it, or use it in any way that could damage, disable or impair it.",
      "We may change or remove content on the website at any time without prior notice.",
    ],
  },
  {
    heading: "11. Governing law",
    body: [
      "These terms are governed by the laws of the Federal Republic of Nigeria. Disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the courts of Nigeria.",
    ],
  },
  {
    heading: "12. Contact",
    body: [
      "Questions about these terms can be sent to contact@geolegacysurvey.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      intro="The terms that apply when you use this website or commission survey work with GeoLegacy Survey."
      updated="September 2026"
      sections={SECTIONS}
    />
  );
}