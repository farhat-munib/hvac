"use client";

import { useState } from "react";
import { company } from "@/lib/company";
import {
  PhoneIcon,
  ClockIcon,
  BadgeCheckIcon,
  ArrowRightIcon,
  ShieldIcon,
} from "./icons";

const serviceOptions = [
  "AC repair or installation",
  "Furnace / heating",
  "Heat pump",
  "Indoor air quality",
  "Ductwork & sealing",
  "Maintenance plan",
  "Emergency — no heat / no cool",
  "Something else",
];

type Errors = Partial<Record<"name" | "phone" | "email" | "service", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[\d\s().+-]{7,}$/;

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim()) next.phone = "A phone number helps us reach you.";
    else if (!phoneRe.test(values.phone))
      next.phone = "That doesn't look like a valid phone number.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!emailRe.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Let us know what you need.";
    return next;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    // Demo only — no backend. Pretend we sent it.
    console.log("Quote request submitted:", values);
    setSubmitted(true);
  }

  const fieldBase =
    "w-full rounded-xl border bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:ring-4";
  const ok = "border-sand-deep focus:border-clay-500 focus:ring-clay-500/15";
  const bad =
    "border-[#c4362c] focus:border-[#c4362c] focus:ring-[#c4362c]/15";

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <div
        className="glow-teal pointer-events-none absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Left: pitch + contact details */}
          <div>
            <span className="eyebrow text-teal-600">Request a free quote</span>
            <h2 className="text-fluid-h2 mt-3 font-display font-bold text-ink">
              Let’s get your comfort{" "}
              <span className="ink-underline text-clay-600">back on track.</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-soft">
              Tell us what’s going on and we’ll follow up fast — usually within
              the hour during business hours. No obligation, no pressure.
            </p>

            <div className="mt-9 space-y-1">
              <a
                href={company.phoneHref}
                className="group flex items-center gap-4 py-4"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-clay-500 text-white shadow-soft transition-colors group-hover:bg-clay-600">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-ink-soft">
                    Call or text — 24/7 emergency line
                  </span>
                  <span className="block font-display text-2xl font-semibold text-ink">
                    {company.phoneDisplay}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 border-t border-sand-deep py-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-50 text-teal-600">
                  <ClockIcon className="h-6 w-6" />
                </span>
                <span className="text-[15px] text-ink-soft">
                  <span className="block font-semibold text-ink">
                    {company.hours.weekdays}
                  </span>
                  <span className="block">{company.hours.saturday}</span>
                  <span className="block font-semibold text-clay-600">
                    {company.hours.emergency}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-3 border-t border-sand-deep py-4 text-sm font-semibold text-ink-soft">
                <ShieldIcon className="h-5 w-5 text-teal-600" />
                Licensed, bonded &amp; insured · Lic. {company.licenseNumber}
              </div>
            </div>
          </div>

          {/* Right: form / success */}
          <div className="rounded-[28px] bg-white p-6 shadow-soft-lg sm:p-9">
            {submitted ? (
              <div className="flex h-full min-h-[440px] flex-col items-center justify-center text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-clay-500 text-white shadow-float">
                  <BadgeCheckIcon className="h-10 w-10" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-semibold text-ink">
                  Thanks, {values.name.split(" ")[0] || "there"}!
                </h3>
                <p className="mt-3 max-w-sm text-ink-soft">
                  Your request is in. A member of the {company.name} team will
                  reach out shortly to confirm your appointment.
                </p>
                <p className="mt-1 text-sm text-ink-soft/70">
                  Need help right now? Call{" "}
                  <a
                    href={company.phoneHref}
                    className="font-bold text-clay-600 hover:text-clay-700"
                  >
                    {company.phoneDisplay}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setValues({
                      name: "",
                      phone: "",
                      email: "",
                      service: "",
                      message: "",
                    });
                  }}
                  className="mt-7 text-sm font-bold text-teal-600 underline-offset-4 hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" error={errors.name} htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={values.name}
                      onChange={handleChange}
                      className={`${fieldBase} ${errors.name ? bad : ok}`}
                    />
                  </Field>

                  <Field label="Phone" error={errors.phone} htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(303) 555-0142"
                      value={values.phone}
                      onChange={handleChange}
                      className={`${fieldBase} ${errors.phone ? bad : ok}`}
                    />
                  </Field>
                </div>

                <Field label="Email" error={errors.email} htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={values.email}
                    onChange={handleChange}
                    className={`${fieldBase} ${errors.email ? bad : ok}`}
                  />
                </Field>

                <Field
                  label="What do you need help with?"
                  error={errors.service}
                  htmlFor="service"
                >
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    className={`${fieldBase} appearance-none ${
                      errors.service ? bad : ok
                    } ${values.service ? "text-ink" : "text-ink-soft/50"}`}
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o} className="text-ink">
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message (optional)" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your system, the issue, or preferred times…"
                    value={values.message}
                    onChange={handleChange}
                    className={`${fieldBase} resize-none ${ok}`}
                  />
                </Field>

                <button
                  type="submit"
                  className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold"
                >
                  Request my free quote
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-ink-soft/60">
                  By submitting you agree to be contacted about your request.
                  This is a demo — no data is sent anywhere.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm font-medium text-[#c4362c]">{error}</p>
      )}
    </div>
  );
}
