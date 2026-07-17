# Data Provenance

Last live verification: **July 17, 2026**.

Public business data is centralized in `src/data/business.ts`, `src/data/services.ts`, and `src/data/faq-policies.ts`. Tests lock the highest-risk facts so a visual edit cannot quietly reintroduce speculative copy.

| Public fact | Current value | Source | Confidence | Update rule |
| --- | --- | --- | --- | --- |
| Business name | Lucca's Hair | Public Square booking page and client repository | High | Change only after Tony or Square changes it |
| Public person | Tony Lucca | Client repository and public contact surfaces | High | Client confirmation |
| Booking URL | `square.site/book/DT4HT5QD699RJ/lucca` | Live Square page | High | Replace only with a verified working destination |
| Service | Cuts | Live Square page | High | Recheck Square before changing the menu |
| Price | $20 | Live Square page | High | Recheck Square before changing price copy |
| Duration | 20 minutes | Live Square page | High | Recheck Square before changing duration copy |
| Location | Inside Salon Boutique, 5701 E SH-121 Access Rd, The Colony, TX | Client repository | Medium | Add suite or postal code only after confirmation |
| Phone | 972-207-9215 | Client repository and public site | High | Client confirmation |
| Email | tlucca65@yahoo.com | Client repository and public site | High | Client confirmation |
| Instagram | @luccahairco | Verified public profile link | High | Recheck link before changing |
| Hours | Tue/Wed 10-5, Thu 10-5:30, Fri 10-5, Sat 9-4:30; Sun/Mon closed | Live Square page | High | Recheck Square whenever availability rules change |

## Excluded from public claims

- Suite number and postal code
- Additional services, prices, or durations
- Walk-in availability
- Cancellation, late, no-show, deposit, refund, or payment policies
- Product names, prices, inventory, checkout, shipping, or returns
- Client haircut photos, testimonials, ratings, awards, or years of experience
- A founding year or final custom domain

The FAQ describes how to contact Tony when a policy is unknown. It does not infer policy from typical salon practice.

## Visual provenance

The photographic assets are atmospheric brand concepts created during the design phase. They establish tone and layout but are not represented as Tony's clients, completed haircuts, storefront, or product catalog. The public site includes that disclosure.
