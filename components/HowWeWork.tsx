import {
  CalendarIcon,
  TagIcon,
  WrenchIcon,
  ShieldIcon,
  ArrowRightIcon,
} from "./icons";
import Reveal from "./Reveal";

const steps = [
  {
    icon: CalendarIcon,
    title: "Book in minutes",
    blurb:
      "Call us or request online and grab a same-day or next-day slot that fits your schedule.",
  },
  {
    icon: TagIcon,
    title: "Upfront diagnosis",
    blurb:
      "A certified tech inspects your system and hands you a flat-rate quote before any work begins.",
  },
  {
    icon: WrenchIcon,
    title: "Expert service",
    blurb:
      "We repair or install with quality parts and tidy workmanship — done right the first time.",
  },
  {
    icon: ShieldIcon,
    title: "Sit back & relax",
    blurb:
      "Enjoy dependable comfort, backed by our 100% satisfaction guarantee and optional upkeep plan.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading row */}
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow text-teal-600">How we work</span>
            <h2 className="text-fluid-h2 mt-3 font-display font-bold text-ink">
              Comfort in{" "}
              <span className="ink-underline text-clay-600">four simple steps.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
            No runaround, no pushy upsells — just a clear, honest path from first
            call to lasting comfort.
          </p>
        </Reveal>

        {/* Steps with connector */}
        <div className="relative mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line behind the badges (desktop) */}
          <div
            className="absolute left-10 right-10 top-7 hidden border-t-2 border-dashed border-clay-300 lg:block"
            aria-hidden
          />

          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="relative">
              <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-clay-400 to-clay-600 font-display text-xl font-bold text-white shadow-float ring-8 ring-sand">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-6 flex items-center gap-2">
                <s.icon className="h-5 w-5 text-teal-600" />
                <h3 className="font-display text-xl font-semibold text-ink">
                  {s.title}
                </h3>
              </div>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                {s.blurb}
              </p>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="btn-primary group flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-bold"
          >
            Book your visit
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-sm font-medium text-ink-soft">
            Most repairs wrapped up in a single visit.
          </p>
        </div>
      </div>
    </section>
  );
}
