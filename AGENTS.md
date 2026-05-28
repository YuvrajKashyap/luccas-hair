# AGENTS.md

Permanent operating manual for future Codex work on the Lucca's Hair repository.

This file is written for future Codex threads that have zero chat context. Read it before making product, design, content, architecture, database, or implementation decisions in this repository.

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
- Current project type: real local business website, currently in planning and pre-implementation.
- Public client brand: Lucca's Hair.
- Public person: Tony Lucca.
- Business category: hair stylist and men's grooming specialist.
- Local market: The Colony, TX.

## 3. Current Project Status

Phase 1 foundation is complete.

Phase 2 product blueprint is complete.

No Next.js application has been created yet unless future commits add it. At the time this manual was created, the repository contains documentation and asset folders only.

The intended next phases are:

1. Phase 3: mockups and asset lock.
2. Phase 4: Next.js implementation.
3. Phase 5: booking and product integrations.
4. Phase 6: QA, SEO, deployment, and launch.

Do not start implementation before the user asks for implementation or gives a task that clearly requires it.

Do not build final UI from vague direction. Final page UI should follow selected mockups, one page at a time.

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
- Address: 5701 E SH-121 Access Rd, Suite TBD, The Colony, TX.
- Phone: 972-207-9215.
- Email: tlucca65@yahoo.com.
- Current booking system: Square.
- Current confirmed service from existing Square site: Cuts, $20, 20 minutes.
- Hours to use unless later corrected: Tuesday to Saturday, 10 AM to 5 PM.
- Closed: Sunday and Monday.
- Last appointment selection should be around 5 PM.
- Suite number: TBD.
- Square booking link: TBD.
- Domain: TBD.
- Google Business or review link: TBD.
- Real photos and gallery assets: TBD.
- Final logo assets: TBD.

## 7. Known Unknowns

Use `TBD` for these until confirmed:

- Suite number.
- Square booking link.
- Whether Square provides a clean embed or only an external booking link.
- Final domain.
- Google Business Profile and review link.
- Final social links.
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
- Whether Supabase is already provisioned.
- Whether Vercel project and analytics are configured.

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
3. Book
4. Products
5. About
6. Contact
7. FAQ / Policies

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
- Book.
- Products.
- About.
- Contact.

Public navigation should include a clear primary CTA:

- Book Appointment.

FAQ / Policies can appear in the footer and in relevant page links from Book, Contact, Services, and Products.

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
5. Visitor opens Book.
6. Visitor uses Square-powered CTA or embed.
7. Visitor completes appointment booking in Square.

Important boundary: the custom site tracks booking intent. It must not claim a confirmed booking unless Square API integration or webhooks are implemented and verified.

### Returning Client Books Again

Goal: quickly book Tony again.

Expected flow:

1. Returning client opens the site.
2. Client uses nav, sticky mobile CTA, or Home CTA.
3. Client opens Square through Book.
4. Client completes booking in Square.

Do not force returning clients through marketing content.

### Visitor Compares Services Before Booking

Goal: review services, prices, and durations.

Expected flow:

1. Visitor opens Services.
2. Visitor scans service cards or rows.
3. Visitor sees confirmed and placeholder status clearly.
4. Visitor chooses Book.
5. Visitor books through Square.

### Visitor Browses Products

Goal: learn whether products are available.

Expected flow:

1. Visitor opens Products.
2. Visitor sees products are coming soon or available by inquiry.
3. Visitor can ask about products, text Tony, or book.

No live checkout should exist until real products and fulfillment are confirmed.

### Visitor Contacts Tony

Goal: ask a question, get directions, call, text, or email.

Expected flow:

1. Visitor opens Contact.
2. Visitor sees Book, Text, Call, Email, and Directions options.
3. Visitor can submit a general question.
4. Visitor is reminded that appointments should be booked through Square.

### Visitor Checks FAQ / Policies

Goal: understand appointment, timing, cancellation, pricing, and product rules.

Expected flow:

1. Visitor opens FAQ / Policies from footer, Book, Contact, or Services.
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

The `/book` page should present:

- Tony's name.
- Public role: Hair Stylist & Men's Grooming Specialist.
- Location inside Salon Boutique.
- Address with suite as `TBD`.
- Hours.
- Services and prices.
- Phone and text action.
- Square-powered CTA or embed.
- Clear note that booking is completed through Square if using an external Square link.
- FAQ / Policies link.

Square implementation rules:

- Use a clean Square embed or advanced widget if Square supports one.
- Use a clean external Square booking link if embed support is limited.
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

Directions should be available on Contact and location cards, but not the main sticky CTA.

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

## 18. About Page Strategy

About should be both Tony-focused and brand-focused.

Do not fabricate a personal biography.

Use respectful placeholder copy until Tony provides real background.

About should emphasize:

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

Contact should include buttons and a contact form.

Buttons:

- Book.
- Text.
- Call.
- Email.
- Directions.

Confirmed contact values:

- Phone: 972-207-9215.
- Email: tlucca65@yahoo.com.
- Address: 5701 E SH-121 Access Rd, Suite TBD, The Colony, TX.
- Location: inside Salon Boutique.

Contact form rules:

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

## 30. Supabase Rules

Use Supabase Auth for admin protection.

Use Supabase Postgres for:

- Contact submissions if configured.
- Custom analytics events if configured.
- Admin insights data if configured.

Before implementing Supabase features, verify current Supabase docs and changelog. Supabase APIs and CLI behavior change over time.

Security requirements:

- Enable Row Level Security on exposed tables.
- Do not expose service role or secret keys in public clients.
- Do not use user-editable metadata for authorization decisions.
- Do not put privileged database functions in exposed schemas.
- Protect contact submissions from public reads.
- Validate inputs with Zod before inserting.
- Use server-side writes for sensitive data.
- Keep admin-only reads behind authenticated server checks.

If the Supabase project is not configured yet:

- Keep public pages buildable.
- Show graceful disabled states for admin data or forms.
- Document missing env vars.
- Do not fake stored data.

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
4. Book desktop.
5. Products desktop.
6. About desktop.
7. Contact / FAQ / Policies desktop.
8. Admin dashboard desktop.
9. Mobile versions for Services, Book, Products, and Contact.

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
- Point to Contact and Book.

### Services

Services should:

- Show public pricing.
- Make confirmed vs placeholder data clear during early implementation.
- Keep men's cuts and grooming central.
- Use simple comparison cards or rows.
- Link each service group to Book.
- Avoid making complex salon services central unless confirmed.

### Book

Book should:

- Use Square as booking engine.
- Include Square CTA or embed.
- Show services, hours, location, and Tony's info.
- Track booking CTA clicks.
- Link to FAQ / Policies.
- Avoid claiming bookings are confirmed inside the custom site.

### Products

Products should:

- Exist in the MVP.
- Present products as coming soon or by inquiry.
- Avoid fake product names and prices.
- Use Ask About Products, Text Tony, and Book Appointment CTAs.
- Be future-ready for ecommerce.

### About

About should:

- Focus on Tony and the brand.
- Avoid fabricated biography.
- Use respectful placeholder copy until real background is provided.
- Emphasize trust, craft, personal service, consistency, and local presence.

### Contact

Contact should:

- Include Book, Text, Call, Email, and Directions buttons.
- Include a general questions form if forms are implemented.
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
