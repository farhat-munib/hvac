import Image from "next/image";
import { company } from "@/lib/company";
import {
  PhoneIcon,
  ArrowRightIcon,
  ShieldIcon,
  ClockIcon,
  BadgeCheckIcon,
  StarIcon,
  BoltIcon,
} from "./icons";

const HERO_IMG = "/hero.webp";

const trust = [
  { icon: ShieldIcon, label: "Licensed & insured" },
  { icon: ClockIcon, label: "24/7 service" },
  { icon: BadgeCheckIcon, label: "Free estimates" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center"
    >
      {/* Atmosphere */}
      <div className="glow-clay pointer-events-none absolute -right-16 top-6 h-[30rem] w-[30rem] rounded-full" aria-hidden />
      <div className="glow-teal pointer-events-none absolute -left-32 top-[24%] h-[28rem] w-[28rem] rounded-full" aria-hidden />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-24 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-0">
        {/* Copy */}
        <div className="max-w-xl">
          <span
            className="rise-in eyebrow inline-flex items-center gap-2 text-clay-600"
            style={{ animationDelay: "0.02s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
            Trusted across the {company.city} metro
          </span>

          <h1
            className="rise-in mt-5 font-display text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.02em] text-ink sm:text-6xl"
            style={{ animationDelay: "0.08s" }}
          >
            Stay perfectly comfortable,{" "}
            <span className="ink-underline italic text-clay-600">
              all year long.
            </span>
          </h1>

          <p
            className="rise-in mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "0.16s" }}
          >
            {company.name} keeps {company.city} homes and businesses warm in
            winter, cool in summer, and breathing easy in between — with honest,
            upfront pricing from certified technicians.
          </p>

          <div
            className="rise-in mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 rounded-full bg-clay-500 px-7 py-4 text-base font-bold text-white shadow-float transition-all hover:-translate-y-0.5 hover:bg-clay-600"
            >
              Book Service
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper/60 px-7 py-4 text-base font-bold text-ink backdrop-blur transition-colors hover:border-ink/40"
            >
              <PhoneIcon className="h-5 w-5 text-teal-600" />
              {company.phoneDisplay}
            </a>
          </div>

          <div
            className="rise-in mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{ animationDelay: "0.32s" }}
          >
            {trust.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm font-semibold text-ink"
              >
                <Icon className="h-4 w-4 text-teal-600" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Framed photo + floating cards */}
        <div className="rise-in relative" style={{ animationDelay: "0.2s" }}>
          <div className="relative h-[440px] overflow-hidden rounded-[28px] shadow-soft-lg sm:h-[540px] lg:h-[calc(100svh-13rem)] lg:max-h-[600px] lg:min-h-[460px]">
            <Image
              src={HERO_IMG}
              alt="HVAC technician servicing a residential cooling system"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[center_28%]"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
              aria-hidden
            />
          </div>

          {/* Rating card */}
          <div className="float-y absolute -left-3 top-8 rounded-2xl bg-paper/90 p-4 shadow-float backdrop-blur sm:-left-6">
            <div className="flex gap-0.5 text-clay-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <div className="mt-1.5 font-display text-2xl font-semibold text-ink">
              4.9 / 5
            </div>
            <div className="text-xs font-medium text-ink-soft">
              800+ Google reviews
            </div>
          </div>

          {/* Response card */}
          <div
            className="float-y absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl bg-ink p-4 text-paper shadow-float sm:right-4"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-clay-500 text-white">
              <BoltIcon className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold">Same-day service</div>
              <div className="text-xs text-paper/70">Avg. arrival under 60 min</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
