import Image from "next/image";
import { company, navLinks, serviceAreas } from "@/lib/company";
import { PhoneIcon, ClockIcon, PinIcon } from "./icons";

function Social({ d, label }: { d: string; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-clay-500 hover:bg-clay-500 hover:text-white"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d={d} />
      </svg>
    </a>
  );
}

const socials = [
  {
    label: "Facebook",
    d: "M13.5 21v-7h2.3l.4-3h-2.7V9c0-.9.3-1.5 1.6-1.5H16V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H7.7v3h2.4v7h3.4Z",
  },
  {
    label: "Instagram",
    d: "M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm4.9-7.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM20 6.9a5.4 5.4 0 0 0-1.5-3.8A5.4 5.4 0 0 0 14.7 1.6C13.2 1.5 8.8 1.5 7.3 1.6A5.4 5.4 0 0 0 3.5 3.1 5.4 5.4 0 0 0 2 6.9c-.1 1.5-.1 5.9 0 7.4a5.4 5.4 0 0 0 1.5 3.8 5.4 5.4 0 0 0 3.8 1.5c1.5.1 5.9.1 7.4 0a5.4 5.4 0 0 0 3.8-1.5 5.4 5.4 0 0 0 1.5-3.8c.1-1.5.1-5.9 0-7.4Zm-2 9a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.3.4s-4.1.1-5.3-.4A3 3 0 0 1 6 15.9c-.5-1.2-.4-4-.4-5.3S5.5 6.5 6 5.3A3 3 0 0 1 7.7 3.6c1.2-.5 4-.4 5.3-.4s4.1-.1 5.3.4A3 3 0 0 1 20 5.3c.5 1.2.4 4 .4 5.3s.1 4.1-.4 5.3Z",
  },
  {
    label: "Google",
    d: "M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.2c1.9-1.7 3.1-4.3 3.1-7.5Zm-9.8 10c2.7 0 5-.9 6.6-2.4l-3.2-2.5a6 6 0 0 1-9-3.1H3.1v2.6A10 10 0 0 0 12 22.2Zm-5.6-8a6 6 0 0 1 0-3.8V7.8H3.1a10 10 0 0 0 0 9l3.3-2.6Zm5.6-7.9a5.4 5.4 0 0 1 3.8 1.5l2.8-2.8A9.6 9.6 0 0 0 12 1.8a10 10 0 0 0-8.9 5.5l3.3 2.6a6 6 0 0 1 5.6-3.6Z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Nyc Heating & Air"
                width={160}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {company.tagline} Serving the {company.city} metro for over{" "}
              {company.yearsInBusiness} years.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <Social key={s.label} d={s.d} label={s.label} />
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="eyebrow text-paper/50">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-clay-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="eyebrow text-paper/50">Service area</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {serviceAreas.slice(0, 8).map((a) => (
                <li key={a} className="flex items-center gap-1.5">
                  <PinIcon className="h-3.5 w-3.5 text-teal-300" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-paper/50">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2.5 font-semibold text-paper transition-colors hover:text-clay-400"
                >
                  <PhoneIcon className="h-4 w-4 text-teal-300" />
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.cityStateZip}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <span>
                  {company.hours.weekdays}
                  <br />
                  {company.hours.saturday}
                  <br />
                  <span className="font-semibold text-clay-400">
                    {company.hours.emergency}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/12 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. License No.{" "}
            {company.licenseNumber} · Licensed, bonded &amp; insured.
          </p>
          <p className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-clay-400">
              Privacy
            </a>
            <a href="#" className="hover:text-clay-400">
              Terms
            </a>
            <a href="#" className="hover:text-clay-400">
              Accessibility
            </a>
            <span className="text-paper/30">Demo site — placeholder content.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
