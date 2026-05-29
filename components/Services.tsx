import {
  SnowflakeIcon,
  FlameIcon,
  HeatPumpIcon,
  AirQualityIcon,
  DuctIcon,
  WrenchIcon,
  ArrowRightIcon,
} from "./icons";

type Tone = "clay" | "teal";

const toneChip: Record<Tone, string> = {
  clay: "bg-clay-50 text-clay-600 group-hover:bg-clay-500 group-hover:text-white",
  teal: "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
};

const small = [
  {
    icon: FlameIcon,
    title: "Furnace & heating",
    blurb: "Gas, electric & boiler repair plus high-efficiency replacements.",
    tone: "clay" as Tone,
    span: "lg:col-span-3",
  },
  {
    icon: HeatPumpIcon,
    title: "Heat pumps",
    blurb: "All-in-one heating & cooling with rebate-friendly systems.",
    tone: "teal" as Tone,
    span: "lg:col-span-3",
  },
  {
    icon: AirQualityIcon,
    title: "Indoor air quality",
    blurb: "Whole-home filtration, humidifiers & UV purifiers.",
    tone: "teal" as Tone,
    span: "lg:col-span-2",
  },
  {
    icon: DuctIcon,
    title: "Ductwork & sealing",
    blurb: "Design, repair & sealing to balance airflow.",
    tone: "clay" as Tone,
    span: "lg:col-span-2",
  },
  {
    icon: WrenchIcon,
    title: "Maintenance plans",
    blurb: "Seasonal tune-ups, priority scheduling & member perks.",
    tone: "clay" as Tone,
    span: "lg:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Editorial heading row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow text-teal-600">What we do</span>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Comfort, covered <span className="italic text-clay-600">end to end.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
            One licensed team for every system in your home or building — repairs,
            installs, and the upkeep that keeps them running.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(170px,1fr)]">
          {/* Featured dark tile */}
          <article className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] bg-ink p-7 text-paper shadow-soft sm:col-span-2 lg:col-span-3 lg:row-span-2">
            <div
              className="glow-teal pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full"
              aria-hidden
            />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-clay-500 text-white">
                <SnowflakeIcon className="h-7 w-7" />
              </span>
              <span className="eyebrow ml-0 mt-6 block text-clay-400">
                Most requested
              </span>
              <h3 className="mt-2 font-display text-3xl font-semibold leading-tight">
                AC repair &amp; installation
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-paper/70">
                Same-day diagnostics and high-efficiency installs that quietly cut
                your summer energy bills. We service every make and model.
              </p>
            </div>
            <a
              href="#contact"
              className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-paper/10 px-5 py-2.5 text-sm font-bold text-paper backdrop-blur transition-colors hover:bg-clay-500"
            >
              Get a free quote
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </article>

          {/* Light tiles */}
          {small.map(({ icon: Icon, title, blurb, tone, span }) => (
            <article
              key={title}
              className={`group flex flex-col justify-between rounded-[26px] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${span}`}
            >
              <div>
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl transition-colors duration-300 ${toneChip[tone]}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {blurb}
                </p>
              </div>
              <a
                href="#contact"
                className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold transition-colors ${
                  tone === "clay"
                    ? "text-clay-600 hover:text-clay-700"
                    : "text-teal-600 hover:text-teal-700"
                }`}
              >
                Get a quote
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
