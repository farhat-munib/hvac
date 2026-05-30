// Central place for all placeholder company data so copy stays consistent
// across components. Swap these values to re-skin the demo for a real client.

export const company = {
  name: "Nyc Heating & Air",
  tagline: "Reliable heating, cooling & cleaner air — all year round.",
  phoneDisplay: "(303) 555-0142",
  phoneHref: "tel:+13035550142",
  email: "service@nycheatingandair.com",
  city: "Denver",
  state: "Colorado",
  yearsInBusiness: 15,
  licenseNumber: "CO-HVAC-0098432",
  hours: {
    weekdays: "Mon–Fri · 7:00 AM – 7:00 PM",
    saturday: "Sat · 8:00 AM – 4:00 PM",
    emergency: "24/7 Emergency Service",
  },
  address: {
    street: "2480 Brighton Blvd, Suite 12",
    cityStateZip: "Denver, CO 80216",
  },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-we-work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

// Suburbs used in the service-area + footer sections.
export const serviceAreas = [
  "Denver",
  "Aurora",
  "Lakewood",
  "Centennial",
  "Arvada",
  "Westminster",
  "Thornton",
  "Littleton",
  "Highlands Ranch",
  "Englewood",
  "Wheat Ridge",
  "Commerce City",
] as const;
