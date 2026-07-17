# Technical Implementation

## Current stack

- Next.js 16 App Router with React 19 and TypeScript
- Hand-authored responsive CSS
- Supabase SSR and Auth for optional private features
- Vercel Analytics and Speed Insights
- Vitest, ESLint, Prettier, npm audit, and GitHub Actions

## Public application

Home, Services, Products, and FAQ / Policies are production UI, not placeholders. All primary booking actions point to Tony's live Square page. `/book` remains as a redirect for compatibility with older links.

Business facts, services, policies, and navigation are typed data rather than copy scattered across components. The local-business JSON-LD uses the same source and omits unknown address fragments.

## Private application

Supabase supports allowlisted admin authentication, custom event persistence, and a 30-day private conversion summary in the `luccas_hair` schema. It is deliberately optional:

- Public routes build without Supabase keys.
- Missing Supabase configuration makes admin routes return 404.
- Service-role credentials are used only on the server.
- Auth callback redirects accept internal paths only.

## Quality system

`npm run verify` is the single local and CI gate. It checks format, lint, types, tests, the production build, and production dependencies. Regression tests cover the Square booking URL and listing, known/unknown location fields, current hours, safe auth redirects, and structured-data output.

## Deliberately inactive

- Product commerce and checkout
- A custom booking engine
- Public client gallery, reviews, or testimonials
- Private admin and event persistence without valid configuration
- Unverified policies, services, product facts, and address details

See [architecture](architecture.md), [data provenance](data-provenance.md), and [verification](verification.md) for the complete release evidence.
