import { StarIcon } from "./icons";
import Reveal from "./Reveal";

const reviews = [
  {
    name: "Marcus T.",
    location: "Aurora, CO",
    quote:
      "Our AC died during the July heat wave and they had a tech out the same afternoon. Honest diagnosis, fair price, fixed in an hour.",
    initials: "MT",
    tone: "clay",
    offset: "",
  },
  {
    name: "Priya & Dev S.",
    location: "Highlands Ranch, CO",
    quote:
      "We swapped a 20-year-old furnace for a heat pump. They explained every option, handled the rebate paperwork, and left the place spotless.",
    initials: "PS",
    tone: "teal",
    offset: "lg:mt-12",
  },
  {
    name: "Karen W.",
    location: "Lakewood, CO",
    quote:
      "I'm on their maintenance plan and it's the best money I spend all year. Priority scheduling, no surprise fees, same friendly tech every time.",
    initials: "KW",
    tone: "clay",
    offset: "lg:mt-6",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow text-teal-600">What neighbors say</span>
            <h2 className="text-fluid-h2 mt-3 font-display font-bold text-ink">
              Rated <span className="ink-underline text-clay-600">4.9 stars</span>{" "}
              across 800+ reviews.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 text-clay-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-6 w-6" />
              ))}
            </div>
            <span className="font-display text-lg font-semibold text-ink">4.9</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              as="figure"
              key={r.name}
              delay={i * 100}
              className={`relative flex h-full flex-col rounded-[26px] border border-sand-deep/60 bg-gradient-to-b from-white to-paper p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sand-deep hover:shadow-soft-lg ${r.offset}`}
            >
              <span
                className={`font-display text-6xl leading-none ${
                  r.tone === "clay" ? "text-clay-200" : "text-teal-100"
                }`}
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="-mt-4 flex-1 font-display text-lg italic leading-relaxed text-ink">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-sand-deep pt-5">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white ${
                    r.tone === "clay" ? "bg-clay-500" : "bg-teal-600"
                  }`}
                >
                  {r.initials}
                </span>
                <span>
                  <span className="block font-display font-semibold text-ink">
                    {r.name}
                  </span>
                  <span className="block text-sm text-ink-soft">{r.location}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
