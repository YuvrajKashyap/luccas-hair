# Technical Direction

## Recommended Stack

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Framer Motion or Motion.
- Supabase.
- Zod.
- Vercel Analytics and Speed Insights.
- Vercel.

The production app infrastructure has now been initialized with placeholder pages only. Final high-fidelity UI implementation should still wait until mockups and assets are locked.

## Possible Booking Integrations

- Square.
- Fresha.
- Calendly.
- Squire.
- Direct text or call.
- Another booking platform selected by Lucca.

The booking platform is Square. The final Square booking link or embed details are TBD. The Book page should support an embed, external booking link, or direct contact CTA without restructuring the site.

## Possible Product Integrations

- Shopify.
- Stripe Checkout.
- Inquiry flow.
- Message to order.
- Coming soon product showcase.
- Another commerce platform selected by Lucca.

Product names, prices, photos, inventory, shipping, pickup, and return details are TBD. Full ecommerce should not be implemented until these details are confirmed.

## Recommended MVP Approach If Details Remain Unknown

- Build content models that allow `TBD` values without fake data.
- Use a booking CTA and booking module placeholder tied to the final platform once confirmed.
- Use a product showcase or inquiry flow instead of live checkout.
- Keep services and products data-driven.
- Make Contact and FAQ / Policies easy to update.
- Keep the application focused on booking as the primary conversion.

## SEO And Local Business Needs

- Page titles and descriptions for Home, Services, Book, Products, About, Contact, and FAQ / Policies.
- Local business details once confirmed.
- Structured data after address, phone, hours, and service details are confirmed.
- Open Graph images after brand assets are locked.
- Search-friendly service and product copy once approved.

## Analytics Needs

- Track Book Appointment CTA clicks.
- Track booking embed or external booking link usage if the platform allows it.
- Track product inquiry or future checkout actions.
- Track contact actions.
- Track page views for core MVP pages.
- Use privacy-conscious analytics appropriate for a small business site.

## Accessibility Expectations

- Semantic page structure.
- Keyboard-accessible navigation and CTAs.
- Visible focus states.
- Sufficient color contrast.
- Alt text for meaningful images once assets are confirmed.
- Accessible form labels if contact or inquiry forms are added.
- Motion that respects reduced motion preferences.

## Performance Expectations

- Optimize images and use responsive sizing.
- Keep motion lightweight.
- Avoid unnecessary client-side JavaScript.
- Use static or server-rendered content where practical.
- Protect Core Web Vitals on mobile.

## Deployment Direction

- Deploy on Vercel.
- Connect final domain, TBD.
- Use environment variables for integration keys if needed.
- Run build, lint, and QA checks before launch.
- Verify booking, contact, and product paths in production.

## What Not To Implement Yet

- Do not build the final high-fidelity UI before mockups and assets are locked.
- Do not build real booking integration until the platform is confirmed.
- Do not build ecommerce checkout until product and fulfillment details are confirmed.
- Do not invent final services, prices, durations, policies, products, or social links.
- Do not publish unapproved logo, photography, or product assets as final.
