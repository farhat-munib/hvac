import { company, serviceAreas } from "@/lib/company";
import { PinIcon, PhoneIcon } from "./icons";

// A few suburbs plotted on the radial graphic (top %, left %).
const plotted = [
  { name: "Arvada", top: "16%", left: "30%" },
  { name: "Aurora", top: "30%", left: "78%" },
  { name: "Lakewood", top: "62%", left: "20%" },
  { name: "Centennial", top: "80%", left: "60%" },
  { name: "Thornton", top: "12%", left: "62%" },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy + suburb chips */}
          <div>
            <span className="eyebrow text-teal-600">Where we work</span>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Serving the whole{" "}
              <span className="italic text-clay-600">{company.city} metro.</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-soft">
              Based in {company.city}, {company.state}, our trucks cover the
              entire Front Range. If you’re nearby and need heating or cooling
              help, we’ve likely got a tech in your neighborhood today.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/12 px-3.5 py-1.5 text-sm font-semibold text-ink/80 transition-colors hover:border-teal-600 hover:bg-teal-600 hover:text-white"
                >
                  <PinIcon className="h-3.5 w-3.5" />
                  {area}
                </span>
              ))}
            </div>

            <a
              href={company.phoneHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-bold text-paper transition-colors hover:bg-teal-700"
            >
              <PhoneIcon className="h-5 w-5" />
              Not sure if we cover you? Call us
            </a>
          </div>

          {/* Radial coverage graphic */}
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              className="glow-teal pointer-events-none absolute inset-0 rounded-full"
              aria-hidden
            />
            {/* Concentric rings */}
            {[100, 76, 52, 28].map((size) => (
              <div
                key={size}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-600/20"
                style={{ width: `${size}%`, height: `${size}%` }}
                aria-hidden
              />
            ))}

            {/* Plotted suburbs */}
            {plotted.map((p) => (
              <div
                key={p.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: p.top, left: p.left }}
              >
                <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-ink shadow-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  {p.name}
                </span>
              </div>
            ))}

            {/* Center: HQ pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-clay-500 text-white shadow-float ring-8 ring-clay-500/15">
                <PinIcon className="h-8 w-8" />
              </span>
            </div>

            {/* Floating stat chips */}
            <div className="absolute -left-2 bottom-6 rounded-2xl bg-white p-3.5 shadow-float">
              <div className="font-display text-2xl font-semibold text-teal-600">
                30 mi
              </div>
              <div className="text-xs font-medium text-ink-soft">Service radius</div>
            </div>
            <div className="absolute -right-2 top-6 rounded-2xl bg-white p-3.5 shadow-float">
              <div className="font-display text-2xl font-semibold text-clay-600">
                &lt; 60 min
              </div>
              <div className="text-xs font-medium text-ink-soft">Avg. arrival</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
