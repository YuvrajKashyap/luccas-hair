# Verification

Verification record for the recruiter-ready release on July 17, 2026.

## Automated gate

`npm run verify` passes locally and in GitHub Actions. It runs:

1. Prettier check
2. ESLint
3. TypeScript without emit
4. Vitest, 3 files and 10 tests
5. Next.js production build
6. Production-dependency audit at moderate severity or above

The complete dependency audit also reports zero known vulnerabilities.

## Route checks

| Route or flow | Expected result | Result |
| --- | --- | --- |
| `/` | Factual booking-first homepage | Pass |
| `/services` | Only the verified Square listing | Pass |
| `/products` | Honest coming-soon state, no checkout claim | Pass |
| `/faq-policies` | Verified facts separated from contact-to-confirm answers | Pass |
| `/book` | Redirect to Tony's live Square URL | Pass |
| `/admin` without private config | 404 with no public shell or private scaffold | Pass |
| `/admin/login` without private config | 404 | Pass |

## Browser checks

- Desktop homepage and service page inspected at 1440 by 900.
- Phone layout inspected at the narrow responsive breakpoints.
- No document-level horizontal overflow at the verified desktop viewport.
- Primary booking targets, metadata titles, footer facts, and route compatibility checked.
- Square destination loaded successfully without creating or modifying an appointment.

Canonical browser captures live in `screenshots/` and the social preview lives at `src/app/opengraph-image.png`.

## Production checks

After merge to `main`, verify:

```bash
curl -I -L https://luccas-hair.vercel.app
curl -I -L https://luccas-hair.vercel.app/book
```

Then confirm the newest GitHub Actions run and the deployed homepage, service page, and Square handoff.
