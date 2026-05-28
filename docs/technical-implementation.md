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

Square will handle appointment booking. The custom website is the premium front door and should send clients into a Square embed or external Square booking link once the final URL is confirmed.

The current Book page includes a Square placeholder area and tracking-ready booking CTAs. The final Square link is TBD.

## Supabase Usage

Supabase is scaffolded for:

- Admin authentication.
- Contact form submissions.
- Custom analytics events.
- Future admin visibility into booking, text, call, directions, product interest, and contact activity.

Lucca's Hair data uses the custom `luccas_hair` schema in Supabase. Contact submissions and custom analytics events are designed for server-only writes through `SUPABASE_SERVICE_ROLE_KEY`, not broad browser writes.

Local builds do not require Supabase keys. If env vars are missing, admin access is blocked and contact or analytics storage runs in placeholder mode.

## Scaffolded Now

- Public routes for Home, Services, Book, Products, About, Contact, and FAQ / Policies.
- Hidden admin route and admin login route.
- Root layout, navbar, footer, mobile sticky booking CTA, button, container, and section components.
- Editable data files for business info, services, products, FAQs, and navigation.
- Contact form with Zod validation and Supabase insert path.
- Analytics event endpoint and client tracking helper.
- Supabase browser, server, and proxy helpers.
- Server-only Supabase service role helper for persistence.
- SEO metadata defaults, sitemap route, robots route, and local business schema helper.
- SQL migration drafts for the `luccas_hair` schema, contact submissions, analytics events, and admin allowlist.
- CI workflow for install, lint, typecheck, and build.

## Intentionally Not Built Yet

- Final high-fidelity UI.
- Final animation system.
- Final Square embed or external booking link.
- Product detail pages or ecommerce checkout.
- Full admin dashboard.
- Final logo, photography, or product assets.
- Final service prices, durations, policies, or product details beyond confirmed client info.

## Next Step

Create and lock page mockups and asset direction, then replace placeholder pages with the final UI one page at a time.
