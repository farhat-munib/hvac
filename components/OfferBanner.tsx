import { company } from "@/lib/company";
import { ArrowRightIcon, PhoneIcon } from "./icons";

export default function OfferBanner() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-clay-500 via-clay-500 to-clay-600 px-7 py-10 text-white shadow-soft-lg [&_:focus-visible]:outline-white sm:px-12 lg:py-12">
          {/* Soft glow inside */}
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
            aria-hidden
          />

          <span className="eyebrow text-white/80">Limited-time offers</span>

          {/* Offers */}
          <div className="relative mt-6 grid gap-8 sm:grid-cols-2">
            <div className="sm:pr-10">
              <div className="font-display text-5xl font-semibold sm:text-6xl">
                $89
              </div>
              <div className="mt-1 font-display text-xl font-medium italic text-white/90">
                AC Tune-Up
              </div>
              <p className="mt-2 text-sm text-white/75">
                21-point inspection by a certified tech. Beat the summer rush and
                catch small issues before they fail.
              </p>
            </div>

            {/* Dashed divider with side notches */}
            <div className="relative sm:pl-10">
              <span
                className="absolute left-0 top-0 hidden h-full border-l-2 border-dashed border-white/40 sm:block"
                aria-hidden
              />
              <div className="font-display text-5xl font-semibold sm:text-6xl">
                0% APR
              </div>
              <div className="mt-1 font-display text-xl font-medium italic text-white/90">
                for 12 months*
              </div>
              <p className="mt-2 text-sm text-white/75">
                Flexible financing on new system installs, so comfort fits your
                budget. *On approved credit — demo offer.
              </p>
            </div>
          </div>

          {/* CTA row */}
          <div className="relative mt-9 flex flex-col gap-3 border-t border-dashed border-white/30 pt-7 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-clay-600 shadow-float transition-all duration-300 hover:-translate-y-0.5 hover:bg-paper"
            >
              Claim this offer
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5" />
              {company.phoneDisplay}
            </a>
          </div>

          {/* Ticket side notches */}
          <span
            className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-paper"
            aria-hidden
          />
          <span
            className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-paper"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
