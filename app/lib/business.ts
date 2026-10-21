export const BUSINESS = {
  brandName: "GeoLegacy Survey",
  website: "https://www.geolegacysurvey.com",
  email: "contact@geolegacysurvey.com",
  phoneDisplay: "+234 806 591 8435",
  phoneHref: "tel:+2348065918435",
  whatsappNumber: "2348065918435",
  whatsappDisplay: "+234 806 591 8435",
  whatsappHref: "https://wa.me/2348065918435",
  coverage: "Nigeria — onshore & offshore coverage",
  areaServed: ["Nigeria", "West Africa"],
  officeHours: "Mon–Fri, 8:00–17:00 WAT",
  address:
    "44 NDDC Road, Rumuokwurusi Pipeline, Port Harcourt, Rivers State, Nigeria",
  addressShort: "Port Harcourt, Rivers State, Nigeria",
  addressHref:
    "https://www.google.com/maps/search/?api=1&query=44+NDDC+Road+Rumuokwurusi+Pipeline+Port+Harcourt+Rivers+State+Nigeria",
} as const;

export const SOCIALS = {
  x: "#",
  instagram: "#",
  linkedin: "#",
  facebook: "#",
  tiktok: "#",
} as const;

export const SOCIAL_LINKS = [
  { name: "X", href: SOCIALS.x },
  { name: "Instagram", href: SOCIALS.instagram },
  { name: "LinkedIn", href: SOCIALS.linkedin },
  // { name: "Facebook", href: SOCIALS.facebook },
  // { name: "TikTok", href: SOCIALS.tiktok },
] as const;