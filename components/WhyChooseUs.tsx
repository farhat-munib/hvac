import { company } from "@/lib/company";

const values = [
  {
    title: "Fast response",
    blurb:
      "Same-day appointments and true 24/7 emergency dispatch — because a dead furnace can't wait until Monday.",
  },
  {
    title: "Upfront pricing",
    blurb:
      "Flat-rate quotes approved before we start. No surprise fees, no overtime gotchas, ever.",
  },
  {
    title: "Certified technicians",
    blurb:
      "NATE-certified, background-checked techs who respect your home, your time, and your budget.",
  },
  {
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
    <section id="why-us" className="relative overflow-hidden bg-ink py-20 text-paper lg:py-28">
      <div
        className="glow-clay pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full opacity-70"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow text-clay-400">Why homeowners choose us</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            The dependable name in{" "}
            <span className="italic text-clay-400">{company.city} comfort.</span>
          </h2>
          <p className="mt-4 text-lg text-paper/65">
            Licensed, bonded, and insured with financing available — we treat
            every home like it’s our own.
          </p>
        </div>

        {/* Numbered editorial list */}
        <div className="mt-14 border-t border-paper/12">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group grid items-baseline gap-4 border-b border-paper/12 py-7 sm:grid-cols-[auto_1fr] sm:gap-10"
            >
              <span className="font-display text-4xl font-medium tabular-nums text-paper/30 transition-colors group-hover:text-clay-400 sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="sm:flex sm:items-baseline sm:gap-10">
                <h3 className="font-display text-2xl font-semibold sm:w-72 sm:shrink-0">
                  {v.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-paper/65 sm:mt-0">
                  {v.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stat strip */}
        <div className="mt-14 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-2 sm:border-l sm:border-paper/12 sm:first:border-l-0 sm:px-6">
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
