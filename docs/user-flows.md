# User Flows

> Historical planning artifact. For the current shipped state and verified business facts, use `README.md`, `docs/architecture.md`, and `docs/data-provenance.md`.

## New Visitor Books An Appointment

**User goal:** Decide whether Lucca's Hair is a good fit and book an appointment.

**Entry point:** Home page, search result, social link, or referral link.

**Steps:**

1. Visitor lands on Home.
2. Visitor sees premium brand positioning and the Book Appointment CTA.
3. Visitor reviews services or clicks Book Appointment directly.
4. Visitor opens Tony Lucca's Square booking site.
5. Visitor completes booking through Square.

**Conversion point:** Book Appointment CTA.

**Friction points:** Incomplete service details, missing prices or durations, unclear location or hours.

**UX notes:** Keep booking visible in the first viewport, navigation, page sections, and mobile sticky CTA.

## Returning Client Books Again

**User goal:** Quickly book another appointment without browsing the full site.

**Entry point:** Direct URL, saved bookmark, search result, or social profile.

**Steps:**

1. Returning client opens the site.
2. Client taps Book Appointment from navigation or sticky CTA.
3. Client opens Tony Lucca's Square booking site.
4. Client completes booking through Square.

**Conversion point:** Direct booking CTA interaction.

**Friction points:** Hidden CTA, external platform confusion, unavailable booking link, too many steps before booking.

**UX notes:** Returning clients should not need to read marketing content to book.

## Visitor Compares Services Before Booking

**User goal:** Understand available services, prices, and durations before booking.

**Entry point:** Home service preview, Services page, search result, or navigation.

**Steps:**

1. Visitor opens Services.
2. Visitor scans service categories, descriptions, prices, and durations once confirmed.
3. Visitor identifies the most relevant service.
4. Visitor follows the Book Appointment CTA.
5. Visitor completes booking through Square.

**Conversion point:** Service-level or page-level booking CTA.

**Friction points:** Exact services, prices, and durations are TBD; too much copy can slow comparison; mobile cards can become hard to scan.

**UX notes:** Use clear grouping, short descriptions, and repeated booking actions.

## Visitor Browses Products

**User goal:** Explore hair or grooming products recommended by Lucca.

**Entry point:** Products page, Home product preview, service recommendation, or navigation.

**Steps:**

1. Visitor opens Products.
2. Visitor browses categories or featured products, all TBD until confirmed.
3. Visitor reviews available product information.
4. Visitor asks about a product, saves interest, or uses a future purchase path.
5. Visitor may return to booking after product browsing.

**Conversion point:** Product inquiry, future purchase CTA, or return to booking.

**Friction points:** Product names, prices, images, inventory, and fulfillment are TBD.

**UX notes:** Keep products secondary to booking, but make the section feel credible and commerce-ready.

## Visitor Finds Contact Details

**User goal:** Ask a question, confirm details, or find location and hours.

**Entry point:** Footer, FAQ / Policies page, or booking friction point.

**Steps:**

1. Visitor uses the footer or a location/details section.
2. Visitor reviews address, phone, email, hours, and social links once confirmed.
3. Visitor chooses the preferred contact method.
4. Visitor asks a question or gets location details.
5. Visitor may continue to booking.

**Conversion point:** Contact action or Book Appointment CTA.

**Friction points:** Contact details are TBD; missing hours or location can reduce trust.

**UX notes:** Contact details should support booking rather than distract from it.

## Visitor Checks FAQ / Policies

**User goal:** Understand expectations before booking or buying.

**Entry point:** Footer, Products page, or policy-related question.

**Steps:**

1. Visitor opens FAQ / Policies.
2. Visitor reviews booking, cancellation, late arrival, deposit, product, return, pickup, or shipping details once confirmed.
3. Visitor resolves uncertainty.
4. Visitor books, contacts Lucca, or browses products.

**Conversion point:** Book Appointment CTA, contact action, or product inquiry.

**Friction points:** Policies are TBD; unclear policies can slow booking confidence.

**UX notes:** Use short questions and practical answers. Mark unknowns as `TBD`.

## Future Product Purchase Flow

**User goal:** Buy a product online once ecommerce is confirmed.

**Entry point:** Products page, Product Detail page, service recommendation, or future promotional section.

**Steps:**

1. Visitor opens Products.
2. Visitor selects a product.
3. Visitor reviews product detail, price, photos, availability, and fulfillment, all TBD.
4. Visitor checks out through Shopify, Stripe Checkout, or another confirmed platform.
5. Visitor receives order confirmation from the selected platform.

**Conversion point:** Add to cart, checkout, or confirmed product inquiry.

**Friction points:** Ecommerce platform, product data, inventory, shipping, pickup, and returns are TBD.

**UX notes:** Do not implement full ecommerce until Lucca confirms product details and fulfillment.
