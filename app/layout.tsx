import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geolegacysurvey.com/"),
  title:
    "GeoLegacy Survey | Land, Hydrographic, Geophysical & Geotechnical Site Investigations",
  description:
    "GeoLegacy Survey delivers land, hydrographic, geophysical and geotechnical site investigations, positioning, GIS and remote sensing services for energy, marine and infrastructure projects across Nigeria and West Africa.",
  keywords: [
    "land survey",
    "hydrographic survey",
    "geophysical survey",
    "geotechnical investigation",
    "GIS",
    "remote sensing",
    "positioning",
    "offshore survey",
    "onshore survey",
    "Nigeria survey company",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title:
      "GeoLegacy Survey | Precision Site Investigations, Onshore & Offshore",
    description:
      "Land, hydrographic, geophysical and geotechnical site investigations, positioning, mapping, GIS and remote sensing services across Nigeria and West Africa.",
    url: "https://www.geolegacysurvey.com/",
    siteName: "GeoLegacy Survey",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoLegacy Survey",
    description:
      "Precision land, hydrographic, geophysical and geotechnical site investigations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <a href='#main' className='skip-link'>
          Skip to content
        </a>
        <Header />
        {children}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "GeoLegacy Survey",
              description:
                "Land, hydrographic, geophysical and geotechnical site investigation services, including positioning, mapping, GIS, remote sensing and environmental studies.",
              areaServed: ["Nigeria", "West Africa"],
              url: "https://www.geolegacysurvey.com/",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
