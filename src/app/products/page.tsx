import type { CSSProperties } from "react";
import productsBackground from "../../../assets/mockups/products/products-background-asset.png";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Products",
  description:
    "Premium grooming products are coming soon to Lucca's Hair in The Colony, TX.",
  path: "/products",
});

function productsPageStyle(): CSSProperties {
  return {
    "--products-hero-image": `url(${productsBackground.src})`,
  } as CSSProperties;
}

export default function ProductsPage() {
  return (
    <div className="products-page" style={productsPageStyle()}>
      <section className="products-hero" aria-label="Lucca's Hair product preview" />

      <section className="products-coming-soon" aria-labelledby="products-heading">
        <div className="products-coming-soon__inner">
          <p className="products-kicker">Coming Soon</p>
          <h1 id="products-heading">
            Great products take time.
            <br />
            Ours are on the way.
          </h1>
          <span className="products-title-rule" aria-hidden="true" />
          <p className="products-coming-soon__copy">
            We&apos;re working behind the scenes to bring you <br />
            premium grooming products that live up <br />
            to the standards you know and trust.
          </p>
          <p className="products-stay-tuned">Stay tuned.</p>
        </div>
      </section>
    </div>
  );
}
