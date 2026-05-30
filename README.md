# Nyc Heating & Air — Demo Landing Page

A single-page marketing site for a fictional residential & commercial HVAC
company serving the Denver, Colorado metro. Built with **Next.js 16 (App
Router)**, **React 19**, and **Tailwind CSS v4**.

> This is a front-end demo. There is **no backend** — the quote form validates
> input and shows a thank-you state, logging the payload to the console.

## Getting started

```bash
npm install      # if you haven't already
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Design

- **Direction:** "warm modern home comfort" — an editorial, premium
  home-services feel on warm cream paper with warm-charcoal dark sections.
- **Palette:** two accents instead of generic blue-on-white — **terracotta**
  (heating) and **deep teal** (cooling), defined as theme tokens in
  [`app/globals.css`](app/globals.css).
- **Type:** **Fraunces** (characterful editorial serif) for display + Plus
  Jakarta Sans (body), loaded via `next/font/google`.
- **Texture & depth:** subtle paper grain, soft radial glows, and tactile
  diffuse shadows (no hard 1px-border cards).
- **Layouts:** split hero with floating glass cards, a **bento** services grid,
  a **numbered editorial** value list, a **coupon/ticket** offer panel, and a
  **radial coverage** graphic for the service area.
- Conversion-focused: click-to-call and "Book Service" CTAs repeat throughout;
  subtle hover states and a staggered hero page-load animation.

## Structure

```
app/
  layout.tsx        # fonts, metadata, root shell
  page.tsx          # composes the sections in order
  globals.css       # Tailwind v4 import, theme tokens, signature utilities
components/
  Header.tsx        # sticky header, click-to-call, mobile menu (client)
  Hero.tsx          # split hero: serif headline, dual CTAs, floating cards
  Services.tsx      # bento grid (dark featured tile + mixed-size tiles)
  HowWeWork.tsx     # 4-step process with connector line
  WhyChooseUs.tsx   # image split + value props + stat strip
  ServiceArea.tsx   # Denver metro + suburbs, radial coverage graphic
  Testimonials.tsx  # 3 staggered serif review quotes
  OfferBanner.tsx   # $89 tune-up / 0% financing coupon panel
  ContactForm.tsx   # validated quote form + success state (client)
  Footer.tsx        # contact, hours, links, license, socials
  icons.tsx         # inline SVG icon set (no icon dependency)
lib/
  company.ts        # all placeholder company data in one place
```

## Customizing

Edit [`lib/company.ts`](lib/company.ts) to change the company name, phone,
hours, license number, address, and service areas in one place — every section
reads from it.

## Notes

- The hero photo is a free [Unsplash](https://unsplash.com) image served
  through `next/image` (the `images.unsplash.com` host is whitelisted in
  [`next.config.ts`](next.config.ts)). All other imagery is CSS gradients/SVG.
- All copy, reviews, offers, and the license number are placeholders.
