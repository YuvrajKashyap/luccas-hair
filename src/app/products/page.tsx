import type { CSSProperties } from "react";
import productsBackground from "../../../assets/mockups/home/home-book-background.png";
import { contactLinks, getBookingHref } from "@/data/business";
import { createPageMetadata } from "@/lib/seo/metadata";
import { TrackableLink } from "@/components/ui/trackable-link";

export const metadata = createPageMetadata({
  title: "Products",
  description:
    "Product details are not live yet. Contact Tony directly for current grooming recommendations.",
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
            No product names, prices, inventory, or checkout are live yet. This page stays
            intentionally simple until Tony confirms a real collection.
          </p>
          <div className="products-actions">
            <TrackableLink
              href={contactLinks.text}
              eventName="product_interest_click"
              metadata={{ placement: "products_page" }}
              className="home-button home-button--secondary"
            >
              Ask Tony About Products
            </TrackableLink>
            <TrackableLink
              href={getBookingHref()}
              eventName="booking_click"
              metadata={{ placement: "products_page" }}
              className="home-button home-button--primary"
            >
              Book A Cut
            </TrackableLink>
          </div>
        </div>
      </section>
    </div>
  );
}
