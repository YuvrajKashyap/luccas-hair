# Technical Implementation

## Stack Chosen

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Framer Motion installed for later motion work.
- Supabase for auth, contact submissions, and custom analytics events.
- Zod for validation.
- Vercel Analytics and Speed Insights.
- Vercel deployment readiness.
- ESLint, Prettier, and GitHub Actions.

## Booking Direction

Square handles appointment booking. The custom website is the premium front door and should send clients to Tony Lucca's Square booking site through the Book Appointment CTA.

The current site scope does not include a standalone `/book` page. Booking CTAs should point to `https://square.site/book/DT4HT5QD699RJ/lucca`, unless `NEXT_PUBLIC_SQUARE_BOOKING_URL` provides a future override.

## Supabase Usage

Supabase is scaffolded for:

- Admin authentication.
- Custom analytics events.
- Future admin visibility into booking, text, call, directions, product interest, and contact activity.

Lucca's Hair data uses the custom `luccas_hair` schema in Supabase. Custom analytics events are designed for server-only writes through `SUPABASE_SERVICE_ROLE_KEY`, not broad browser writes.

Local builds do not require Supabase keys. If env vars are missing, admin access is blocked and analytics storage runs in placeholder mode.

## Scaffolded Now

- Public routes for Home, Services, Products, and FAQ / Policies.
- Hidden admin route and admin login route.
- Root layout, navbar, footer, mobile sticky booking CTA, button, container, and section components.
- Editable data files for business info, services, products, FAQs, and navigation.
- Analytics event endpoint and client tracking helper.
- Supabase browser, server, and proxy helpers.
- Server-only Supabase service role helper for persistence.
- SEO metadata defaults, sitemap route, robots route, and local business schema helper.
- SQL migration drafts for the `luccas_hair` schema, contact submissions, analytics events, and admin allowlist.
- CI workflow for install, lint, typecheck, and build.

## Intentionally Not Built Yet

- Final high-fidelity UI.
- Final animation system.
- Product detail pages or ecommerce checkout.
- Full admin dashboard.
- Final logo, photography, or product assets.
- Final service prices, durations, policies, or product details beyond confirmed client info.

## Next Step

Create and lock page mockups and asset direction, then replace placeholder pages with the final UI one page at a time.
