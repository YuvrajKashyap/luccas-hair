import { productTeasers } from "@/data/products";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TrackableLink } from "@/components/ui/trackable-link";

export const metadata = createPageMetadata({
  title: "Products",
  description:
    "Placeholder product showcase page for Lucca's Hair. Product names, prices, photos, and fulfillment are TBD.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Products
          </p>
          <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            Product showcase scaffold.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Products are secondary to appointment booking. This page is ready for future
            product names, images, prices, and inquiry or ecommerce flow once confirmed.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {productTeasers.map((product) => (
            <article
              key={product.id}
              className="rounded-[var(--radius-lg)] border border-border bg-card p-5"
            >
              <h2 className="font-serif text-3xl text-foreground">{product.name}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{product.summary}</p>
              <TrackableLink
                href="/contact"
                eventName="product_interest_click"
                metadata={{ productId: product.id }}
                className="mt-5 inline-flex text-sm font-semibold text-accent hover:text-foreground"
              >
                Ask about this
              </TrackableLink>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
