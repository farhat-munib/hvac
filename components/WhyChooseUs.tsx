import Image from "next/image";
import { company } from "@/lib/company";
import { BoltIcon, TagIcon, BadgeCheckIcon, ShieldIcon } from "./icons";

const WHY_IMG = "/whyus.webp";

const values = [
  {
    icon: BoltIcon,
    tone: "clay",
    title: "Fast response",
    blurb:
      "Same-day appointments and true 24/7 emergency dispatch — a dead furnace can't wait until Monday.",
  },
  {
    icon: TagIcon,
    tone: "teal",
    title: "Upfront pricing",
    blurb:
      "Flat-rate quotes approved before we start. No surprise fees, no overtime gotchas, ever.",
  },
  {
    icon: BadgeCheckIcon,
    tone: "clay",
    title: "Certified technicians",
    blurb:
      "NATE-certified, background-checked techs who respect your home, your time, and your budget.",
  },
  {
    icon: ShieldIcon,
    tone: "teal",
    title: "Satisfaction guaranteed",
    blurb:
      "If it's not right, we make it right — workmanship backed by our 100% satisfaction promise.",
  },
];

const stats = [
  { value: `${company.yearsInBusiness}+`, label: "Years in business", tone: "clay" },
  { value: "12k+", label: "Jobs completed", tone: "teal" },
  { value: "4.9★", label: "Average rating", tone: "clay" },
  { value: "24/7", label: "Emergency service", tone: "teal" },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="on-dark relative overflow-hidden bg-ink py-20 text-paper lg:py-28"
    >
      <div
        className="glow-clay pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full opacity-70"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Stock image + floating cards */}
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-[28px] shadow-soft-lg sm:h-[520px]">
              <Image
                src={WHY_IMG}
                alt="A certified Nyc Heating & Air technician servicing equipment on a job site"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                aria-hidden
              />
            </div>

            {/* Years badge */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-4 rounded-2xl bg-clay-500 p-5 text-white shadow-float sm:-left-6">
              <div className="font-display text-5xl font-semibold leading-none">
                {company.yearsInBusiness}+
              </div>
              <div className="text-sm font-medium leading-tight text-white/85">
                years keeping
                <br />
                {company.city} comfortable
              </div>
            </div>

            {/* Satisfaction chip */}
            <div className="float-y absolute -right-3 top-6 flex items-center gap-2.5 rounded-2xl bg-paper p-3.5 text-ink shadow-float sm:-right-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-600">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <div className="text-xs font-bold leading-tight">
                100% satisfaction
                <br />
                <span className="font-medium text-ink-soft">guaranteed</span>
              </div>
            </div>
          </div>

          {/* Heading + value props */}
          <div>
            <span className="eyebrow text-clay-400">Why homeowners choose us</span>
            <h2 className="text-fluid-h2 mt-3 font-display font-bold">
              The dependable name in{" "}
              <span className="text-clay-400">{company.city} comfort.</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-paper/75">
              Licensed, bonded, and insured with financing available — we treat
              every home like it’s our own.
            </p>

            <div className="mt-9 space-y-6">
              {values.map(({ icon: Icon, title, blurb, tone }) => (
                <div key={title} className="flex gap-4">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                      tone === "clay"
                        ? "bg-clay-500/15 text-clay-400"
                        : "bg-teal-500/15 text-teal-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-paper/75">
                      {blurb}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-20 grid grid-cols-2 gap-y-8 border-t border-paper/12 pt-12 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-2 sm:border-l sm:border-paper/12 sm:first:border-l-0 sm:px-6"
            >
              <div
                className={`font-display text-4xl font-semibold sm:text-5xl ${
                  s.tone === "clay" ? "text-clay-400" : "text-teal-300"
                }`}
              >
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium text-paper/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
