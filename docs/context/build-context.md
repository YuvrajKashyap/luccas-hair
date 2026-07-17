# Build Context

Current handoff for future work on Lucca's Hair. Older phase documents remain useful design history, but this file describes the shipped application as of July 17, 2026.

## Product

Lucca's Hair is Tony Lucca's deployed appointment-first website for clients in The Colony, Texas. The custom site owns brand presentation, factual service discovery, local SEO, and conversion intent. Square owns live availability and appointment state.

## Shipped

- Responsive Home, Services, Products, and FAQ / Policies pages
- Direct Square booking actions and a compatible `/book` redirect
- Typed business, service, hours, policy, and navigation data
- Current metadata, sitemap, robots, and local-business JSON-LD
- Optional server-side analytics persistence and protected Supabase admin scaffold
- Fail-closed private routes and safe auth redirects
- Vitest regression coverage and a complete CI verification gate
- Vercel deployment, Analytics, and Speed Insights
- Canonical screenshots and social preview image

## Current verified facts

- Cuts: $20, 20 minutes
- Booking: `https://square.site/book/DT4HT5QD699RJ/lucca`
- Location: inside Salon Boutique, 5701 E SH-121 Access Rd, The Colony, TX
- Hours: Tue/Wed 10-5, Thu 10-5:30, Fri 10-5, Sat 9-4:30; Sun/Mon closed
- Instagram: `@luccahairco`

See `docs/data-provenance.md` before changing any business fact.

## Non-negotiable rules

- Do not break or replace the working Square booking flow.
- Do not invent services, policies, products, photos, reviews, or location fragments.
- Do not represent atmospheric concept imagery as Tony's client work.
- Keep the public application usable and buildable without Supabase secrets.
- Keep admin access fail closed when configuration is absent.
- Preserve unrelated edits and run `npm run verify` before push.

## Honest next opportunities

- Replace concept imagery with approved real photography when supplied.
- Add confirmed services or policies only after rechecking the business source.
- Activate the private event/admin path after production Supabase configuration is verified.
- Add commerce only after products, inventory, payments, fulfillment, and returns are defined.
