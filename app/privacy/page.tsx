import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy | GeoLegacy Survey",
  description:
    "How GeoLegacy Survey collects, uses, stores and protects your personal information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | GeoLegacy Survey",
    description:
      "How GeoLegacy Survey collects, uses, stores and protects your personal information.",
  },
};

const SECTIONS = [
  {
    heading: "1. Who we are",
    body: [
      "GeoLegacy Survey is a survey and geospatial engineering company providing land, hydrographic, geophysical, geotechnical and environmental site investigation services across Nigeria and West Africa.",
      "This policy explains how we collect, use, store and protect personal information when you use our website, contact us or engage our services.",
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "We collect information you provide directly, including your name, email address, phone number, organisation and details you share about your project.",
      "We may also collect limited technical information automatically, such as browser type, pages visited and how you reached the website, to understand how the site is used.",
    ],
  },
  {
    heading: "3. How we use your information",
    body: [
      "We use your details to respond to enquiries, prepare quotations, deliver survey services, send important updates about your project and comply with legal obligations.",
      "We do not sell personal information. We share details only with personnel and approved subcontractors who need them to deliver the agreed work.",
    ],
  },
  {
    heading: "4. Lawful basis and consent",
    body: [
      "We process personal information where it is needed to respond to a request, perform a contract, meet a legal obligation or pursue a legitimate business interest, such as improving our services.",
      "Where consent is relied on, you may withdraw it at any time by contacting us.",
    ],
  },
  {
    heading: "5. Data security",
    body: [
      "We apply appropriate technical and organisational measures to protect personal information from unauthorised access, loss or misuse.",
      "No method of transmission or storage is completely secure, and we update our practices as standards evolve.",
    ],
  },
  {
    heading: "6. Data retention",
    body: [
      "We keep personal information only for as long as needed to fulfil the purposes described in this policy, comply with legal requirements or resolve disputes.",
    ],
  },
  {
    heading: "7. Cookies",
    body: [
      "The website may use cookies and similar technologies to support essential functions and understand site usage. You can control cookies through your browser settings.",
    ],
  },
  {
    heading: "8. Third-party links",
    body: [
      "The website may link to third-party sites, including social media platforms. We are not responsible for the privacy practices of those sites and encourage you to review their policies.",
    ],
  },
  {
    heading: "9. Your rights",
    body: [
      "You may ask us to access, correct or delete the personal information we hold about you, or to restrict how it is processed, by contacting us at contact@geolegacy.com.",
      "We will respond to requests within a reasonable period and in line with applicable law.",
    ],
  },
  {
    heading: "10. Changes to this policy",
    body: [
      "We may update this policy from time to time. The date at the top of this page shows when it was last revised, and changes take effect when published.",
    ],
  },
  {
    heading: "11. Contact us",
    body: [
      "Questions or requests relating to this policy can be sent to contact@geolegacy.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro="How GeoLegacy Survey collects, uses, stores and protects your personal information."
      updated="September 2026"
      sections={SECTIONS}
    />
  );
}