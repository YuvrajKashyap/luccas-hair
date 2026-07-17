# AGENTS.md

Permanent operating manual for future Codex work on the Lucca's Hair repository.

This file is written for future Codex threads that have zero chat context. Read it before making product, design, content, architecture, database, or implementation decisions in this repository.

## Current-State Override, July 17, 2026

The production Next.js application is implemented and deployed at `https://luccas-hair.vercel.app`. Strategy, mockup, and phase-planning sections later in this manual are retained as historical context. For shipped behavior and verified facts, prefer `README.md`, `docs/architecture.md`, `docs/data-provenance.md`, `docs/technical-implementation.md`, and the current code.

Square remains the booking system of record. New booking actions point directly to Square, while `/book` is a compatibility redirect. Do not replace Square or publish an unconfirmed fact without a new client-backed source.

## 1. Authority And Scope

This `AGENTS.md` file is the highest-level project operating manual inside the repository. It should guide all future Codex work on Lucca's Hair.

Use this file together with the existing planning docs:

- `README.md`
- `docs/product-blueprint.md`
- `docs/sitemap.md`
- `docs/user-flows.md`
- `docs/content-requirements.md`
- `docs/client-questionnaire.md`
- `docs/mockup-plan.md`
- `docs/technical-direction.md`
- `docs/project-brief.md`
- `docs/roadmap.md`
- `docs/client-notes.md`
- `docs/brand/brand-foundation.md`
- `docs/context/build-context.md`
- `docs/design/design-system-notes.md`
- `docs/design/mockup-notes.md`
- `docs/decisions/0001-project-name-and-repo-direction.md`
- `docs/decisions/0002-phase-based-build-process.md`
- `docs/decisions/0003-product-blueprint-and-mvp-scope.md`

If older docs still mark a fact as `TBD` but this file provides a confirmed fact, follow this file. When asked to update docs later, bring those docs in line with this manual.

If a detail is not listed as confirmed here, treat it as `TBD`.

Do not fabricate business details, services, photos, testimonials, ratings, policies, years of experience, awards, domain, social links, or ecommerce details.

## 2. Repository

- Project name: Lucca's Hair.
- Repository: `https://github.com/YuvrajKashyap/luccas-hair.git`
- Repo name: `luccas-hair`
- Current project type: deployed real local business website.
- Public client brand: Lucca's Hair.
- Public person: Tony Lucca.
- Business category: hair stylist and men's grooming specialist.
- Local market: The Colony, TX.

## 3. Current Project Status

The public Next.js application, selected visual direction, responsive UI, direct Square handoff, SEO surfaces, tests, CI, and Vercel deployment are implemented.

The product page is intentionally a coming-soon state. Ecommerce, a real client gallery, additional services, and unknown policies remain out of scope until Tony confirms the underlying data and operating model.

Protect the live business flow. Preserve the direct Square booking URL and run `npm run verify` before publishing changes.

## 4. Product Purpose

Lucca's Hair is a premium, production-grade website for Tony Lucca, operating publicly as Lucca's Hair.

The site should serve the business first. It should help real customers book appointments, understand services and pricing, trust Tony, and contact the business.

The project should also demonstrate strong real-world client, product, UX, frontend, conversion, and implementation work. It should not feel like a toy MVP, class exercise, or generic template.

## 5. Business Goals

### Primary Goal

Get users to book appointments.

Every major page should make booking clear, easy, and trustworthy.

### Secondary Goals

- Let users browse services and prices.
- Build credibility for Tony Lucca.
- Make the brand feel more premium than the current Square site.
- Prepare for future product sales.
- Provide a hidden protected admin and insights area for Tony and Yuvraj.
- Support local SEO for The Colony, TX.

## 6. Current Known Business Facts

These facts are confirmed enough to use in product planning and implementation unless the user later corrects them:

- Public brand name: Lucca's Hair.
- Public person: Tony Lucca.
- Best public role or title: Hair Stylist & Men's Grooming Specialist.
- Location: inside Salon Boutique.
- Address: 5701 E SH-121 Access Rd, The Colony, TX. Do not publish a suite or postal code until confirmed.
- Phone: 972-207-9215.
- Email: tlucca65@yahoo.com.
- Current booking system: Square.
- Current confirmed service from existing Square site: Cuts, $20, 20 minutes.
- Hours verified on Square on July 17, 2026: Tuesday and Wednesday 10 AM to 5 PM; Thursday 10 AM to 5:30 PM; Friday 10 AM to 5 PM; Saturday 9 AM to 4:30 PM.
- Closed: Sunday and Monday.
- Suite number: TBD.
- Square booking link: https://square.site/book/DT4HT5QD699RJ/lucca.
- Current public URL: https://luccas-hair.vercel.app.
- Google Business or review link: TBD.
- Real photos and gallery assets: TBD.
- Final logo assets: TBD.

## 7. Known Unknowns

Use `TBD` for these until confirmed:

- Suite number.
- Whether Square provides a clean embed or only an external booking link.
- Final domain.
- Google Business Profile and review link.
- Social links beyond the verified Instagram profile.
- Final logo assets.
- Real photos of Tony, the space, cuts, or products.
- Full confirmed service list.
- Final prices and durations beyond confirmed Cuts, $20, 20 minutes.
- Whether placeholder service offerings should become final.
- Product names.
- Product prices.
- Product photos.
- Product inventory.
- Product shipping or pickup method.
- Product return policy.
- Cancellation policy.
- Late arrival policy.
- Deposit policy.
- No-show policy.
- Whether email sending will be configured.
- Whether production Supabase configuration is active. Public builds must continue to work without it.

## 8. Brand Positioning

The site should feel like a premium solo stylist brand, not a generic salon chain.

Users are booking Tony directly.

Tony operates inside Salon Boutique, but the site should position Lucca's Hair as Tony's own premium front door.

The design direction is:

- Dark.
- Cinematic.
- Warm.
- Polished.
- Modern.
- Premium.
- Masculine, clean, stylish, and approachable.
- Italian-inspired only where tasteful.

Visual palette direction:

- Black.
- Cream.
- Warm tan.
- Brass.
- Muted gold.
- Deep charcoal.
- Restrained neutral grays for borders and secondary text.

Avoid:

- Cheap barber pole styling.
- Generic barber template energy.
- Cheesy Italian stereotypes.
- Fake luxury language that sounds inflated.
- Overly loud vintage styling.
- Cluttered layouts that bury booking.
- Stock-heavy visuals pretending to be Tony's work.
- Overused clipper, beard, or pole graphics unless handled with restraint.

The brand should remain approachable and practical. It should feel premium because it is clear, polished, warm, and easy to use, not because it uses exaggerated claims.

## 9. Public Sitemap

The MVP public sitemap is:

1. Home
2. Services
3. Products
4. FAQ / Policies

Current route decision:

- Do not create or restore standalone `/book`, `/about`, or `/contact` pages unless the user explicitly changes this decision.
- Booking should happen through the primary Book Appointment CTA, which opens Tony Lucca's public Square booking site.
- About, trust, location, hours, and contact details should be handled on Home, Services, Products, FAQ / Policies, footer, and relevant content sections instead of separate pages.

Future public pages can include:

- Product Detail.
- Gallery.
- Testimonials.
- Memberships.
- Gift Cards.
- Blog or Style Journal.
- Client Portal.

Do not add future pages unless the user asks or the implementation phase clearly calls for them.

## 10. Private Sitemap

The private sitemap is:

1. Admin
2. Admin Login

Expected routes unless the user later changes them:

- `/admin`
- `/admin/login`

Admin must never appear in public navigation.

Admin must be protected by real authentication. Do not rely on hidden URLs, secret clicks, obfuscated paths, or security through obscurity.

Use Supabase Auth for protected access when implementation reaches the admin phase.

## 11. Navigation Rules

Public navigation should include:

- Home.
- Services.
- Products.

Public navigation should include a clear primary CTA:

- Book Appointment, linked directly to Tony Lucca's Square booking site.

FAQ / Policies can appear in the footer and in relevant page links from Services, Products, and booking-related sections.

Admin must never appear in public nav, footer nav, sitemap links shown to public users, or public marketing sections.

Mobile navigation must keep booking easy to access without requiring deep menu exploration.

## 12. Footer Rules

Footer should include:

- Book Appointment CTA.
- Core page links.
- Contact details.
- Hours.
- Location.
- FAQ / Policies link.
- Product inquiry or Products link.
- Domain and legal details when confirmed.

Use confirmed public details:

- Phone: 972-207-9215.
- Email: tlucca65@yahoo.com.
- Address: 5701 E SH-121 Access Rd, Suite TBD, The Colony, TX.
- Hours: Tuesday to Saturday, 10 AM to 5 PM.
- Closed: Sunday and Monday.

Keep social links as `TBD` until confirmed.

## 13. Core User Flows

### New Visitor Books An Appointment

Goal: understand the brand, trust Tony, and book.

Expected flow:

1. Visitor lands on Home, Services, or a local SEO entry page.
2. Visitor sees that Tony is a hair stylist and men's grooming specialist in The Colony, TX.
3. Visitor sees a clear Book Appointment CTA.
4. Visitor optionally reviews services and pricing.
5. Visitor opens Tony Lucca's Square booking site through the Book Appointment CTA.
6. Visitor completes appointment booking in Square.

Important boundary: the custom site tracks booking intent. It must not claim a confirmed booking unless Square API integration or webhooks are implemented and verified.

### Returning Client Books Again

Goal: quickly book Tony again.

Expected flow:

1. Returning client opens the site.
2. Client uses nav, sticky mobile CTA, or Home CTA.
3. Client opens Tony Lucca's Square booking site.
4. Client completes booking in Square.

Do not force returning clients through marketing content.

### Visitor Compares Services Before Booking

Goal: review services, prices, and durations.

Expected flow:

1. Visitor opens Services.
2. Visitor scans service cards or rows.
3. Visitor sees confirmed and placeholder status clearly.
4. Visitor chooses Book Appointment.
5. Visitor books through Square.

### Visitor Browses Products

Goal: learn whether products are available.

Expected flow:

1. Visitor opens Products.
2. Visitor sees products are coming soon or available by inquiry.
3. Visitor can ask about products, text Tony, or book.

No live checkout should exist until real products and fulfillment are confirmed.

### Visitor Finds Contact Details

Goal: ask a question, get directions, call, text, or email.

Expected flow:

1. Visitor uses the footer or a location/details section.
2. Visitor sees Book, Text, Call, Email, and Directions options.
3. Visitor can call, text, email, or open directions.
4. Visitor is reminded that appointments should be booked through Square.

### Visitor Checks FAQ / Policies

Goal: understand appointment, timing, cancellation, pricing, and product rules.

Expected flow:

1. Visitor opens FAQ / Policies from the footer, Services, Products, or a policy-related link.
2. Visitor reads clear, friendly policies.
3. Visitor books or contacts Tony.

Policies must remain editable and should not be treated as legally final until Tony confirms them.

### Admin Reviews Insights

Goal: Tony or Yuvraj reviews user activity and inquiries.

Expected flow:

1. Admin user opens `/admin`.
2. If unauthenticated, user is sent to `/admin/login`.
3. User signs in with Supabase Auth.
4. Dashboard shows booking clicks, text clicks, call clicks, directions clicks, product interest clicks, contact submissions, top pages if available, and recent activity.
5. Dashboard clearly labels booking clicks as booking intent, not confirmed appointments.

## 14. Booking Strategy

Square is the booking engine.

The custom site is the premium front door.

Do not build a full custom booking scheduler unless explicitly requested later.

Do not claim that the custom site can confirm Square appointments unless Square API integration or webhooks are actually implemented and verified.

There is no standalone `/book` page in the current site scope.

All primary Book Appointment CTAs should point directly to:

- `https://square.site/book/DT4HT5QD699RJ/lucca`

The app may allow `NEXT_PUBLIC_SQUARE_BOOKING_URL` to override this if the booking URL changes.

Booking-related sections should still make these details easy to find:

- Tony's name.
- Public role: Hair Stylist & Men's Grooming Specialist.
- Location inside Salon Boutique.
- Address with suite as `TBD`.
- Hours.
- Services and prices.
- Phone and text action.
- FAQ / Policies link.

Square implementation rules:

- Use the clean external Square booking link as the current booking path.
- Do not add or restore a Square embed unless explicitly requested later.
- Do not depend on fragile undocumented URL parameters for exact date, time, service, or provider preselection.
- Track booking CTA clicks in custom analytics.
- Track booking embed opens or external link clicks when possible.
- Treat analytics as intent, not confirmed appointments.
- Add Square API or webhooks only if explicitly requested and properly scoped.

## 15. Mobile CTA Strategy

Use a sticky mobile CTA.

Primary action:

- Book.

Secondary action:

- Text.

Directions should be available in the footer and location cards, but not the main sticky CTA.

Mobile CTA should:

- Stay visible without covering important content.
- Respect safe areas on modern phones.
- Have accessible labels.
- Track clicks.
- Avoid overloading the user with too many actions.

## 16. Services Strategy

Keep the public service menu mostly focused on men's cuts and grooming.

Public pricing should be shown.

Use exact prices where known and starting-at pricing for anything complex.

Store services in an editable data file so prices, durations, descriptions, and status can be updated easily.

Do not make women's color or complex salon services central unless Tony confirms them.

Additional services can be shown as available by request if needed.

### Confirmed Service Data

The current confirmed service from the existing Square site is:

| Service | Price | Duration | Status |
| --- | --- | --- | --- |
| Cuts | $20 | 20 minutes | Confirmed from current Square site |

### Suggested Placeholder Service Data

Use these only as placeholders until Tony confirms them. Mark them clearly in data and UI if shown before confirmation.

| Service | Price | Duration | Status |
| --- | --- | --- | --- |
| Men's Cut | $20 | 20 minutes | Confirmed from current Square site if mapped to Cuts |
| Fade / Taper | Starting at $25 | 30 minutes | Placeholder |
| Beard Trim | Starting at $15 | 15 minutes | Placeholder |
| Cut + Beard | Starting at $35 | 40 minutes | Placeholder |
| Cleanup / Neck Trim | Starting at $10 | 10 minutes | Placeholder |
| Kids Cut | Starting at $18 | 20 minutes | Placeholder |
| Senior Cut | Starting at $18 | 20 minutes | Placeholder |
| Shampoo + Style | Starting at $15 | 15 minutes | Placeholder |
| Consultation | TBD | 10 minutes | Placeholder |

### Service Data Implementation

Recommended service data fields:

- `id`
- `name`
- `priceLabel`
- `durationLabel`
- `description`
- `category`
- `status`, such as `confirmed`, `placeholder`, or `tbd`
- `squareServiceId`, optional and TBD unless Square integration provides it
- `featured`
- `bookingCtaLabel`

Never let placeholder services look like confirmed final truth.

## 17. Products Strategy

Products are a future business goal.

Tony does not currently have products ready.

The Products page should exist in the site.

Products should be presented as:

- Coming soon.
- Ask about products.
- Product recommendations by inquiry.

Do not fake real products on the live site.

Placeholder visuals are allowed only if clearly framed as coming soon or conceptual.

Good product CTAs:

- Ask About Products.
- Text Tony.
- Book Appointment.

Future ecommerce may use:

- Stripe Checkout.
- Shopify.
- Square.
- Another confirmed platform.

No ecommerce should be treated as real until product names, photos, prices, inventory, fulfillment, and return rules are confirmed.

Recommended product data fields for future use:

- `id`
- `name`
- `description`
- `priceLabel`
- `image`
- `status`
- `category`
- `availability`
- `ctaLabel`
- `fulfillment`

Use `TBD` or coming soon states for missing product facts.

## 18. About Content Strategy

There is no standalone About page in the current site scope.

About content should be both Tony-focused and brand-focused when it appears on Home or another approved public page.

Do not fabricate a personal biography.

Use respectful placeholder copy until Tony provides real background.

About content should emphasize:

- Trust.
- Craft.
- Personal service.
- Consistency.
- Local presence in The Colony.
- Tony as the person clients book directly.
- The business location inside Salon Boutique.

Do not invent:

- Years of experience.
- Awards.
- Training.
- Celebrity clients.
- Certifications.
- Personal history.
- Unverified specialties.

## 19. Gallery Strategy

Gallery should be future-ready.

Do not use fake haircut photos as proof of Tony's work.

If no real photos are available:

- Use a coming soon state.
- Request photos.
- Use visual placeholders only if clearly not presented as Tony's actual work.

A Gallery page can be added later if enough real photos exist.

Store approved gallery assets in a clear location under `assets/` during planning or `public/` during implementation, depending on how the app will serve them.

## 20. Reviews Strategy

Do not fake testimonials.

Do not invent ratings, customer quotes, review counts, or awards.

If a Google reviews link is available later, link to it.

Home can include a review section only if it uses:

- Real approved reviews.
- An empty state.
- A coming soon state.
- A CTA to leave or read reviews once a real link exists.

Do not add fake review schema, fake ratings, or fake aggregate reviews for SEO.

## 21. Contact Strategy

There is no standalone Contact page in the current site scope.

Confirmed contact details should still be visible in the footer and relevant location sections.

Contact actions can include:

- Text.
- Call.
- Email.
- Directions.

Confirmed contact values:

- Phone: 972-207-9215.
- Email: tlucca65@yahoo.com.
- Address: 5701 E SH-121 Access Rd, Suite TBD, The Colony, TX.
- Location: inside Salon Boutique.

Contact form rules, only if a form is explicitly reintroduced later:

- Contact form is for general questions, not appointment scheduling.
- Appointment booking should go through Square.
- Contact form submissions should be stored in Supabase if configured.
- If email sending is added later, use Resend or another transactional email provider.
- Use validation.
- Protect against spam.
- Do not expose service role keys.
- Do not guarantee response time unless Tony confirms it.

Directions rules:

- Directions should route to the confirmed address.
- Include `Suite TBD` until suite is confirmed.
- If using map embed or external map link, verify it resolves to Salon Boutique at the given address.

## 22. FAQ / Policies Strategy

Create generic editable barber or salon policies.

Tone should be friendly, clear, and professional.

Include sections for:

- Appointment timing.
- Late arrivals.
- Cancellations.
- No-shows.
- Pricing variation.
- Service changes.
- Product policy, TBD.
- Contact questions.

Do not make policies harsh unless Tony asks.

Do not claim a legally final policy until Tony confirms it.

Use wording like "Please contact Tony if..." rather than punitive language unless specific rules are confirmed.

Keep policies easy to edit in a data file.

## 23. Admin Strategy

Admin is required.

Admin should be hidden from public navigation and protected by real authentication.

Admin should be available at `/admin`.

Admin login should be available at `/admin/login` unless the implementation chooses a Supabase-provided auth route with clear reasoning.

Use Supabase Auth for protected access.

Do not rely on:

- Hidden URLs.
- Secret clicks.
- Obscurity.
- Client-only checks.
- Hardcoded passwords.
- Committed credentials.

Admin should provide insights only in v1, not content editing.

Tony will ask Yuvraj for content updates, so no CMS is required in v1.

Admin should show:

- Booking clicks.
- Text clicks.
- Call clicks.
- Directions clicks.
- Product interest clicks.
- Contact submissions.
- Top pages if available.
- Recent activity.

Admin must clearly distinguish booking clicks from confirmed bookings.

Use labels such as:

- "Booking clicks"
- "Booking intent"
- "Not confirmed Square appointments"

Do not display "confirmed bookings" unless Square API or webhooks are implemented and verified.

## 24. Analytics And Insights Rules

Track business-relevant actions:

- Book Appointment CTA clicks.
- Square link clicks.
- Square embed opens if measurable.
- Text clicks.
- Call clicks.
- Email clicks.
- Directions clicks.
- Product interest clicks.
- Contact form submissions.
- Page views.

Analytics should support admin insights and UX decisions.

Use privacy-conscious analytics suitable for a small local business.

Recommended analytics stack:

- Vercel Analytics for page-level insights.
- Vercel Speed Insights for performance.
- Custom Supabase Postgres events for business action tracking if configured.

Recommended event fields:

- `id`
- `event_name`
- `event_type`
- `page_path`
- `target`
- `metadata`
- `created_at`
- `session_id`, anonymous if used
- `user_agent`, optional
- `referrer`, optional

Avoid storing sensitive personal data in analytics events.

Contact submissions are not analytics events. Store them separately with appropriate access controls.

## 25. Recommended Tech Stack

Use this stack unless the user explicitly changes direction:

- Next.js App Router.
- TypeScript.
- Tailwind CSS v4.
- Motion or Framer Motion.
- Supabase Auth.
- Supabase Postgres.
- Zod validation.
- Server Actions or Route Handlers for forms.
- Vercel deployment.
- Vercel Analytics.
- Vercel Speed Insights.
- ESLint.
- Prettier.
- GitHub Actions for lint, typecheck, and build.

Use official docs and current package guidance when implementing. Do not rely on stale assumptions about Next.js, Tailwind v4, Supabase, or Vercel APIs.

## 26. Infrastructure Expectations

Use a clean `src` directory.

Use data files for:

- Business info.
- Services.
- Products.
- FAQs.
- Policies.
- Navigation.
- Footer links.
- Contact actions.

Use components for:

- Layout.
- UI primitives.
- Sections.
- Forms.
- Cards.
- Page-specific content blocks.
- Admin dashboard widgets.

Use `lib` modules for:

- Supabase.
- Analytics.
- SEO.
- Validation.
- Utilities.
- Formatting.

Keep `docs/` and `assets/` folders.

Keep environment variables documented in `.env.example`.

The app must build without real Supabase keys by using graceful fallbacks where possible. For example, public pages should still build if admin or form features require missing runtime env vars.

Never commit secrets.

## 27. Suggested Project Structure

Recommended structure once implementation begins:

```text
src/
  app/
  components/
  components/layout/
  components/ui/
  components/sections/
  data/
  lib/
  lib/supabase/
  lib/analytics/
  lib/seo/
  server/
  styles/
  types/
docs/
assets/
public/
```

Use this as a guide, not a reason to create empty folders before they are needed.

## 28. Data And Content Rules

Centralize editable business data.

Mark all placeholder data clearly.

Keep service and price updates easy.

Keep copy realistic and not overly salesy.

Avoid em dashes in project docs and marketing copy unless the user later allows them.

Prefer clean, direct, premium language.

Use `TBD` for unknown facts.

Do not scatter hardcoded business facts across components if they belong in data files.

Recommended data files once implementation begins:

- `src/data/business.ts`
- `src/data/services.ts`
- `src/data/products.ts`
- `src/data/faqs.ts`
- `src/data/policies.ts`
- `src/data/navigation.ts`
- `src/data/socials.ts`

Business data should include:

- Public brand name.
- Tony's public name and title.
- Address.
- Suite value, currently `TBD`.
- Phone.
- Email.
- Hours.
- Closed days.
- Booking link, currently `TBD`.
- Domain, currently `TBD`.
- Google Business link, currently `TBD`.

## 29. Environment Variables

Document required env vars in `.env.example` when the app is created.

Likely future variables:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
SQUARE_BOOKING_URL=
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=
```

Rules:

- Do not commit `.env.local`.
- Do not commit real secrets.
- Never expose service role keys to the browser.
- Only variables prefixed with `NEXT_PUBLIC_` may be read by client code.
- Public Supabase anon or publishable keys are acceptable in client code when used with correct Row Level Security.
- Secret keys must stay server-side.

## 30. Supabase Architecture Requirements for Lucca's Hair

This project uses Supabase as part of Yuvraj's shared app ecosystem. Future Codex work must follow this architecture exactly. Do not fall back to generic Supabase defaults.

Before implementing any Supabase feature, verify current Supabase docs and changelog. Supabase APIs, CLI behavior, Data API settings, and auth helpers change over time.

### Shared Supabase Project Model

- The Supabase project is shared across Yuvraj's app ecosystem.
- The shared Supabase project is called `yk-portfolio`.
- One physical Supabase project contains many isolated app backends.
- Each app must have its own SQL schema.
- Lucca's Hair must not pollute the `public` schema.
- Lucca's Hair must not touch the schemas for Axis, Capital, Arcade, Jasiverse, or any other app.
- This repo owns only the Lucca's Hair schema and related app-specific resources.
- Shared auth does not mean shared app tables.

Never create Lucca's Hair contact, analytics, service, product, or admin tables in the `public` schema.

### Canonical App Namespace

- Public brand name: `Lucca's Hair`.
- Repo slug: `luccas-hair`.
- Supabase SQL schema: `luccas_hair`.
- Possible future storage bucket, only if needed: `luccas-hair-assets`.

SQL schema names use snake_case because SQL identifiers should not use apostrophes or hyphens.

Code, URLs, package naming, and repo references can use `luccas-hair` as the product slug.

Database objects must be created under `luccas_hair.*`.

Never create Lucca's Hair app tables in the `public` schema. Contact submissions and analytics events belong under `luccas_hair`.

### App Classification

Lucca's Hair is:

- A public local business website with a private owner and admin area.
- Low to medium sensitivity.
- Not high-sensitivity like Capital.
- Not a finance app.
- Not a multi-user SaaS app.
- Mostly static and marketing-oriented on public pages.

Private admin data includes:

- Contact submissions.
- Analytics events.
- Admin activity or audit events if added later.

Admin access must be owner-only or allowlist-only.

Runtime model:

- Public content should mostly come from code and editable TypeScript data files in the repo.
- Supabase is used for admin auth, contact submissions, analytics events, and private insights.
- Sensitive admin reads and writes should be server-controlled.
- Private tables must not have broad direct browser access.

### Auth Rules

Use Supabase Auth only.

Do not use Auth.js.

Do not use NextAuth.

Do not create custom password auth.

Do not create fake shadow auth systems.

Supabase `auth.users.id` is the identity anchor.

If app-specific users are needed, they belong in `luccas_hair.users`.

Admin access should be allowlist-based.

Admin should be protected by real auth, not hidden routes or secret clicks.

`/admin` must not be in public navigation.

`/admin` must not rely on obscurity for security.

Recommended owner-only pattern:

- `luccas_hair.allowed_emails`
- `luccas_hair.users`
- `luccas_hair.user_state`
- Helper function such as `luccas_hair.is_active_user(uid uuid)`

### Data Model Boundaries

Public business content should initially live in editable TypeScript data files, including:

- Services.
- Prices.
- Hours.
- Navigation links.
- FAQs.
- Policies.
- Products coming soon content.
- Contact display data.

Do not move public business content into Supabase unless a real admin CMS or editor is later requested.

V1 admin is insights only, not a CMS.

Tony will request content updates from Yuvraj, so content editing in Supabase is not needed for V1.

Supabase should be used for:

- Admin users and access if needed.
- Contact form submissions.
- Analytics events.
- Admin audit events, optional.
- Future lead or product interest tracking.

Supabase should not be used in V1 for:

- Real ecommerce inventory.
- Square booking confirmation data.
- Fake product catalog management.
- Fake testimonials.
- Public gallery proof.
- CMS tables unless explicitly requested later.

### Recommended Lucca's Hair Schema Tables

This is the expected migration direction when backend scaffolding happens. These objects are planned architecture, not proof that the tables already exist.

Expected schema:

- `luccas_hair`

Expected access foundation:

- `luccas_hair.allowed_emails`
  - Owner and admin allowlist.
  - Zero client-facing policies.
  - Server-only access unless a specific secure admin workflow is added.
- `luccas_hair.users`
  - `id uuid primary key references auth.users(id) on delete cascade`
  - `email`
  - `display_name`
  - `role`
  - `access_status`
  - `created_at`
  - `updated_at`
- `luccas_hair.user_state`
  - Admin or user state such as `last_seen_at`.
  - References `luccas_hair.users`.

Expected business and admin tables:

- `luccas_hair.contact_submissions`
  - General contact form messages.
  - Not booking appointments.
  - Fields may include `name`, `email`, `phone`, `message`, `source_page`, `status`, `user_agent`, `ip_hash`, and `created_at`.
- `luccas_hair.analytics_events`
  - Custom event tracking for booking clicks, text clicks, call clicks, directions clicks, product interest clicks, and contact submits.
  - Fields may include `event_type`, `page_path`, `metadata jsonb`, `session_id`, `user_agent`, `ip_hash`, and `created_at`.
- `luccas_hair.admin_audit_events`, optional
  - Records important admin actions if needed later.

Do not create services, products, or testimonials tables unless a CMS is explicitly requested later.

Do not create Square bookings tables unless Square API or webhook integration is explicitly added later.

Admin analytics can track booking intent, not confirmed bookings.

### RLS Rules

RLS must be enabled on every `luccas_hair` table.

Sensitive or internal tables should have zero client-facing policies.

Contact submissions and analytics events should not be readable by the public.

Admin-only data should be readable only by authenticated active admins.

Broad public read or write policies are not allowed.

Never create permissive policies just to "make it work."

If a table is only accessed through server-side route handlers or server actions, keep client policies extremely narrow or absent.

RLS is defense in depth, not a replacement for server-side checks.

Recommended table categories:

- `luccas_hair.allowed_emails`: zero-policy sensitive server-only table.
- `luccas_hair.users`: owner/admin scoped, no broad access.
- `luccas_hair.user_state`: owner/admin scoped.
- `luccas_hair.contact_submissions`: server insert only, admin read only.
- `luccas_hair.analytics_events`: server insert only, admin read only.
- `luccas_hair.admin_audit_events`: server insert only, admin read only.

### Server-Only And Client-Safe Boundaries

Always server-only:

- Service role usage.
- Admin access checks.
- Contact form persistence.
- Analytics event persistence if using service role.
- Admin dashboard aggregation.
- Any future Square API integration.
- Any future Stripe or Shopify integration.
- Any future webhook handling.

Client-safe:

- Public page rendering from static data files.
- Clicking CTAs.
- Submitting forms to server actions or route handlers.
- Calling a safe internal analytics endpoint that validates and stores events server-side.

Never:

- Expose the service role key in the browser.
- Write directly to private tables from public client code.
- Let the browser read contact submissions.
- Let the browser read analytics events.
- Trust client-submitted metadata without validation.

### Environment Variables

Browser-safe:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL`, if used

Server-only:

- `SUPABASE_SERVICE_ROLE_KEY`, only if needed for server-side inserts or admin aggregation.
- Future Square secrets.
- Future Stripe or Shopify secrets.

Admin and access:

- Seed `luccas_hair.allowed_emails`, preferred for durable allowlist access.
- Or use a server-only env var such as `LUCCAS_ADMIN_EMAILS` only as a bootstrap helper.

Rules:

- Never commit secrets.
- `.env.example` should document required variables without real values.
- Production env vars should live in Vercel.
- Local env may live in `.env.local`.
- The app should build without real Supabase keys when possible, using clear placeholder or fallback behavior.
- Never expose service role or secret keys to browser code.

### Custom Schema Runtime Reminders

Because `luccas_hair` is a custom schema, Codex must remember Supabase custom schema setup.

The schema may need to be exposed in Supabase API/Data API settings depending on runtime access pattern.

Grants on schema, tables, sequences, and functions matter.

App code must be schema-aware.

Supabase helpers should query `luccas_hair`, not `public`.

When debugging runtime errors, check these before changing architecture:

- Schema exposure.
- Schema grants.
- Table grants.
- Sequence grants.
- Function grants.
- RLS.
- Schema-qualified queries.
- Server-only vs client-side access path.

Do not "fix" custom schema issues by moving tables into `public`.

### Migration Rules

Migration files in this repo may only create or modify `luccas_hair.*` objects and necessary grants or functions for that schema.

Do not alter `axis.*`, `capital.*`, `arcade.*`, `jasiverse.*`, or unrelated schemas.

Do not create app business tables in `public`.

Do not leave half-migration states.

Create access foundation first before business tables.

Create tables in logical groups.

Add foreign keys, uniqueness constraints, delete behavior, and indexes deliberately.

Enable RLS immediately.

Add policies deliberately by table category.

Keep migrations idempotent where reasonable.

Do not rely on runtime app code to patch missing schema design.

Expected migration order for Lucca's Hair:

1. Create schema `luccas_hair`.
2. Create `set_updated_at` helper if needed.
3. Create `allowed_emails` if admin allowlist is database-backed.
4. Create `users`.
5. Create `user_state`, if useful.
6. Create helper function such as `is_active_user(uid uuid)`.
7. Enable RLS on access tables.
8. Create contact and analytics tables.
9. Enable RLS on all tables.
10. Add carefully scoped policies or keep zero client policies when server-only.
11. Add indexes for admin dashboards and time-series event queries.
12. Verify grants and custom schema runtime behavior.

### Contact Form Rules

Contact form is for general questions only.

Appointment booking goes through Square.

Contact submissions should be validated with Zod or equivalent before persistence.

Store contact submissions in `luccas_hair.contact_submissions` only.

Do not email-spam Tony without explicit email provider setup.

If email sending is added later, use a proper transactional email provider such as Resend.

Do not store sensitive unnecessary data.

Consider hashing IP if stored for spam or rate-limit context.

### Analytics Rules

Custom analytics should track business-intent events:

- `booking_click`
- `text_click`
- `call_click`
- `directions_click`
- `product_interest_click`
- `contact_submit`
- `square_booking_opened`, if useful

Analytics events go in `luccas_hair.analytics_events`.

Admin dashboard can show booking intent, not confirmed appointments.

Do not claim confirmed Square bookings unless Square API or webhooks are implemented.

Store only useful metadata.

Avoid storing raw personally sensitive data unless necessary.

If Vercel Analytics is also used, it complements but does not replace custom business-intent events.

### Square Boundary

Square is the booking engine.

The custom site is the premium front door.

Do not build a custom booking scheduler unless explicitly requested later.

Do not write Square appointment data into Supabase unless Square API or webhooks are intentionally implemented.

Do not claim Square appointments are confirmed in this app unless that integration exists.

Booking clicks should be tracked as intent only.

Book Appointment CTAs should send users directly to Square. Do not restore an internal `/book` page unless the user explicitly requests it later.

### Storage Rules

Do not create Supabase storage buckets unless the app actually needs them.

For V1, most assets should live in the repo or public asset folder.

If Supabase storage is needed later, use an app-specific bucket such as `luccas-hair-assets`.

Do not mix Lucca's Hair assets with Axis, Capital, Arcade, Jasiverse, or other app buckets.

Default private unless public access is clearly needed.

Do not store client or gallery proof photos as "real work" unless Tony provides them.

### Supabase Anti-Patterns

Never:

- Create Lucca's Hair tables in `public`.
- Do not use Auth.js.
- Do not use NextAuth.
- Do not use runtime Prisma for app data.
- Create global `public.profiles`.
- Expose service-role keys to the browser.
- Make admin accessible through secret URL only.
- Add broad public RLS policies.
- Touch another app's schema.
- Fake Square booking confirmations.
- Fake reviews or testimonials.
- Fake product inventory.
- Add ecommerce tables before real products exist.
- Overbuild a CMS in V1.
- Ignore custom schema exposure or grants.
- Use generic Supabase defaults that break Yuvraj's ecosystem rules.

### Supabase Backend Verification Checklist

Before finishing any Supabase or backend task, verify:

- All app tables are under `luccas_hair.*`.
- No new app tables were created in `public`.
- No unrelated schemas were changed.
- RLS is enabled where appropriate.
- Client policies are narrow or absent.
- Service role is server-only.
- Admin routes are auth-protected.
- Contact form data cannot be read publicly.
- Analytics events cannot be read publicly.
- Public pages still build without real Supabase data.
- Migrations are clean and focused.
- `.env.example` is updated if env vars changed.
- `npm run lint`, `npm run typecheck`, and `npm run build` pass when the app exists.

## 31. SEO Requirements

Optimize for local SEO, but never guarantee first place on Google.

Target natural keyword themes:

- Hair stylist in The Colony.
- Men's haircut in The Colony.
- Tony Lucca.
- Lucca's Hair.
- Salon Boutique.
- Men's grooming in The Colony.

SEO requirements:

- Use clean metadata for each page.
- Include `sitemap.xml`.
- Include `robots.txt`.
- Include local business schema where appropriate.
- Use accurate address, hours, phone, and business info.
- Prepare for Google Search Console setup.
- Keep performance strong for Core Web Vitals.
- Use clear page headings.
- Use natural copy, not keyword stuffing.

Do not add:

- Fake review schema.
- Fake ratings.
- Fake aggregate reviews.
- Fake awards.
- Fake service areas.
- Fake business details for SEO.

Schema should only include facts that are confirmed.

## 32. Accessibility Requirements

Use semantic HTML.

Buttons and links must have clear accessible names.

Forms need:

- Labels.
- Validation messages.
- Helpful error states.
- Keyboard support.

Navigation must work with keyboard.

Color contrast must be strong.

Visible focus states are required.

Do not make important content only visible through animation.

Respect reduced motion where possible.

Images need meaningful alt text when they communicate content. Decorative images should be marked appropriately.

Sticky mobile CTA must not trap focus or cover form controls.

Admin charts and metrics need text labels, not color-only meaning.

## 33. Performance Requirements

Use Next Image where appropriate.

Optimize images and generated assets before shipping.

Avoid unnecessary heavy libraries.

Keep animations subtle and performant.

Lazy-load non-critical sections where useful.

Keep Lighthouse performance high.

Protect Core Web Vitals on mobile.

Avoid shipping large mockup or source assets directly to public pages unless optimized.

Do not add large client-side dependencies for simple UI behavior.

Prefer static or server-rendered content for public pages where practical.

## 34. Design Implementation Rules

Do not freestyle final UI before mockups are selected.

Infrastructure can use simple placeholder UI.

Final UI should be implemented page by page from selected mockups.

Use one selected reference mockup per page.

Do not mix visual directions randomly after a page is locked.

Avoid generic template layouts.

The final design should look premium, cinematic, and custom.

Use the warm dark visual direction with cream and brass accents unless the user changes direction.

Generated assets should be stored clearly in `public/` or `assets/` with useful names.

Design should support:

- Fast booking.
- Clear service comparison.
- Trust in Tony.
- Local credibility.
- Future product interest.
- Clean mobile behavior.
- Admin separation.

Do not use fake haircut results, fake client images, or fake testimonials as proof.

## 35. Component And UI Rules

Use components intentionally.

Recommended component groups:

- `layout`: header, footer, mobile nav, sticky CTA, shell.
- `ui`: button, card, badge, input, textarea, select, dialog, tabs.
- `sections`: hero, service list, booking CTA, product preview, trust section, contact actions.
- `admin`: metric cards, charts, recent activity, submission table.

Prefer accessible primitives and semantic markup.

Buttons should represent actions.

Links should represent navigation.

Booking CTAs that leave for Square should be links with tracking.

Cards should be restrained and purposeful.

Avoid UI cards inside other UI cards unless there is a real information hierarchy reason.

Keep text readable on mobile.

Do not let sticky elements cover important controls.

## 36. Mockup Workflow

Mockups come before final frontend implementation.

Recommended mockup order:

1. Home desktop.
2. Home mobile.
3. Services desktop.
4. Products desktop.
5. FAQ / Policies desktop.
6. Admin dashboard desktop.
7. Mobile versions for Services, Products, and FAQ / Policies.

For each page:

- Generate or select exploratory mockups.
- Choose one selected reference mockup.
- Store selected mockups in `assets/mockups/`.
- Store visual references in `assets/references/`.
- Do not mix visual directions randomly after selection.
- Extract needed assets separately.
- Only then implement the page.

Assets to generate separately from mockups:

- Final illustrated logo or mascot mark.
- Transparent logo exports.
- Favicon.
- Social preview assets.
- Product placeholder visuals if needed.
- Service or environment photography if approved.
- Reusable textures or hero imagery.
- Admin dashboard visual patterns if needed.

## 37. Page Requirements

### Home

Home should:

- Establish Lucca's Hair as Tony's premium solo stylist brand.
- Make Book Appointment visible in the first viewport.
- Mention The Colony, TX naturally.
- Surface services and pricing preview.
- Include product coming soon or product inquiry preview.
- Build trust without fake reviews or credentials.
- Point to Services, Products, FAQ / Policies, and the external Square booking CTA.

### Services

Services should:

- Show public pricing.
- Make confirmed vs placeholder data clear during early implementation.
- Keep men's cuts and grooming central.
- Use simple comparison cards or rows.
- Link each service group to the external Square booking CTA.
- Avoid making complex salon services central unless confirmed.

### Products

Products should:

- Exist in the MVP.
- Present products as coming soon or by inquiry.
- Avoid fake product names and prices.
- Use Ask About Products, Text Tony, and Book Appointment CTAs.
- Be future-ready for ecommerce.

### About Content

About content should:

- Focus on Tony and the brand.
- Avoid fabricated biography.
- Use respectful placeholder copy until real background is provided.
- Emphasize trust, craft, personal service, consistency, and local presence.

### Contact Content

Contact content should:

- Include Book, Text, Call, Email, and Directions buttons.
- Avoid a general questions form unless explicitly reintroduced.
- Make clear that appointments should be booked through Square.
- Use the confirmed phone, email, location, and hours.

### FAQ / Policies

FAQ / Policies should:

- Explain appointment timing, late arrivals, cancellations, no-shows, pricing variation, and product policy TBD.
- Keep tone friendly.
- Stay editable.
- Avoid harsh or legal-final language until Tony confirms.

### Admin

Admin should:

- Be hidden from public nav.
- Require Supabase Auth.
- Show insights only in v1.
- Show recent activity and contact submissions.
- Clearly distinguish intent metrics from confirmed bookings.

## 38. Testing And Quality Commands

Run appropriate checks before final reporting and before committing.

If dependencies are missing:

```bash
npm install
```

When code changes:

```bash
npm run lint
npm run typecheck
npm run build
```

When formatting is configured:

```bash
npm run format:check
```

When TypeScript changes:

```bash
npm run typecheck
```

When frontend UI changes:

- Run lint, typecheck, and build.
- Start the dev server if needed.
- Verify pages in a browser.
- Check mobile and desktop layouts.
- Check sticky CTA behavior.
- Check public nav does not expose Admin.
- Check links and CTAs.
- Check console errors.

When Supabase or database changes:

- Verify against current Supabase docs.
- Check RLS.
- Verify queries or mutations.
- Confirm admin access is protected.
- Confirm public users cannot read private submissions.

If a command is unavailable because the app is not initialized yet, state that clearly in the final report. Do not pretend checks passed.

## 39. Git Rules

Check git status before changes.

Keep commits focused.

Use clear commit messages.

Push to `origin main` when finished if auth is available.

If push fails, leave the local commit and provide exact commands to push.

Do not include temporary Codex instruction files in commits.

Do not commit:

- `.env.local`
- Secrets
- API keys
- Temporary scratch files
- Local generated clutter
- Codex goal files

Before committing:

- Run relevant checks.
- Run an em dash search for docs and marketing copy if those changed.
- Confirm no fake business details were introduced.
- Confirm Admin is not in public nav if nav changed.
- Confirm booking still goes through Square unless a later scoped integration changes this.

## 40. Security Rules

Never commit secrets.

Never expose admin through public navigation.

Never rely on hidden URLs as security.

Use real auth for admin.

Use server-side validation for forms.

Protect contact submissions.

Keep service role keys server-only.

Treat analytics and contact data as sensitive enough to avoid careless exposure.

Do not add third-party scripts without a reason.

Document env vars and external services.

## 41. Do Not Do These Things

- Do not fabricate services as final truth.
- Do not fabricate prices as final truth except clearly marked placeholders.
- Do not fabricate photos.
- Do not fabricate testimonials.
- Do not fabricate ratings.
- Do not fabricate reviews.
- Do not fabricate awards.
- Do not fabricate years of experience.
- Do not expose admin in public navigation.
- Do not commit secrets.
- Do not build custom Square booking unless explicitly requested.
- Do not claim Square bookings are confirmed in the custom site unless API integration or webhooks exist.
- Do not add ecommerce checkout until products and fulfillment are real.
- Do not overcomplicate with CMS in v1.
- Do not use fake business details for SEO.
- Do not remove documentation without replacing useful context.
- Do not build final UI without selected mockups.
- Do not use fake haircut photos as Tony's portfolio.
- Do not add harsh policies unless Tony asks.
- Do not make products appear live if they are not ready.

## 42. Build Philosophy

The goal is a real finished business website, not a toy MVP.

Still implement in safe passes so quality stays high.

Each pass should leave the repo clean, building, and committed.

Do not make a huge untested change that breaks the app.

Prioritize:

- Business value.
- Booking conversion.
- Clarity.
- Trust.
- Local credibility.
- Performance.
- Accessibility.
- Maintainability.
- Recruiter-readable engineering process.

## 43. Future Codex Task Workflow

For most future tasks:

1. Read this file.
2. Check `git status`.
3. Read the relevant docs and code.
4. Preserve existing useful context.
5. Make the smallest complete change that satisfies the task.
6. Avoid unrelated refactors.
7. Run relevant checks.
8. Commit and push if requested.
9. Report clearly.

For product or content tasks:

1. Check confirmed facts and unknowns.
2. Use `TBD` for unknowns.
3. Do not invent proof, claims, reviews, photos, or product details.
4. Keep booking primary.
5. Keep products secondary and future-ready.

For implementation tasks:

1. Confirm whether mockups are locked.
2. Create or update data files first when business data is involved.
3. Implement reusable components where useful.
4. Verify responsive behavior.
5. Verify accessibility basics.
6. Run lint, typecheck, and build.

## 44. Expected Final Report Format

For future Codex tasks, return final reports in a code block with:

```text
1. Summary
2. Files created or modified
3. Key decisions
4. Commands run
5. Test/build results
6. Git status
7. Push status
8. Next recommended step
```

Keep final reports concise, factual, and grounded in what was actually done.
