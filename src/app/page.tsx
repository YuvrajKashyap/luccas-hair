import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import aboutBackground from "../../assets/mockups/home/home-about-lucca-backgroundpng.png";
import bookBackground from "../../assets/mockups/home/home-book-background.png";
import mensCutsIcon from "../../assets/mockups/home/luccas_service_icons_exact_hq/transparent-png/mens-cuts-64.png";
import heroBackground from "../../assets/mockups/services/services-hero-interior-bg.jpg";
import { contactLinks, getBookingHref } from "@/data/business";
import { services } from "@/data/services";
import { getLocalBusinessJsonLd } from "@/lib/seo/local-business-schema";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Icon, type IconName } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";

export const metadata = createPageMetadata({
  title: "Men's Haircuts in The Colony, TX",
  description:
    "Book Tony Lucca's verified $20, 20-minute cut in The Colony, TX through his live Square calendar.",
  path: "/",
});

const featureItems: Array<{
  icon: IconName;
  title: string;
  copy: string;
}> = [
  {
    icon: "scissors",
    title: "$20",
    copy: "Current price on Square",
  },
  {
    icon: "clock",
    title: "20 minutes",
    copy: "Current listed duration",
  },
  {
    icon: "calendar",
    title: "Live availability",
    copy: "Shown and managed by Square",
  },
];

function backgroundStyle(image: { src: string }): CSSProperties {
  return { "--home-bg-image": `url(${image.src})` } as CSSProperties;
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessJsonLd()) }}
      />
      <div className="home-page">
        <section className="home-hero" style={backgroundStyle(heroBackground)}>
          <div className="home-hero__inner">
            <div className="home-hero__content">
              <div className="home-hero__headline">
                <span className="home-rule" aria-hidden="true" />
                <h1 className="home-hero__title">Take Care.</h1>
                <p className="home-hero__script">Book your cut.</p>
                <p className="home-hero__copy">
                  Cuts with Tony Lucca.
                  <br />
                  Live availability through Square.
                </p>
              </div>
              <div className="home-hero__action-stack">
                <div className="home-hero__actions">
                  <TrackableLink
                    href={getBookingHref()}
                    eventName="booking_click"
                    metadata={{ placement: "home_hero" }}
                    className="home-button home-button--primary"
                  >
                    <Icon name="calendar" />
                    <span>Book Your Appointment</span>
                  </TrackableLink>
                  <Link href="/services" className="home-button home-button--secondary">
                    <span>View Services</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-services" aria-labelledby="home-services-heading">
          <p className="home-kicker home-kicker--center">Verified On Square</p>
          <h2 id="home-services-heading" className="home-section-title">
            One clear service. No guesswork.
          </h2>
          <span className="home-title-rule" aria-hidden="true" />

          <div className="home-service-grid home-service-grid--single">
            {services.map((service) => (
              <article key={service.id} className="home-service-card">
                <Image
                  src={mensCutsIcon}
                  alt=""
                  width="48"
                  height="48"
                  className="home-service-card__icon"
                />
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <dl className="home-service-card__facts">
                  <div>
                    <dt>Price</dt>
                    <dd>{service.price}</dd>
                  </div>
                  <div>
                    <dt>Time</dt>
                    <dd>{service.duration}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <Link
            href="/services"
            className="home-button home-button--secondary home-services__button"
          >
            View All Services
          </Link>
        </section>

        <section className="home-split" aria-label="About and booking highlights">
          <article
            className="home-image-panel home-image-panel--about"
            style={backgroundStyle(aboutBackground)}
          >
            <div className="home-image-panel__content">
              <p className="home-kicker">Tony Lucca</p>
              <h2>Book the person behind the chair.</h2>
              <p>
                Tony is a hair stylist at Salon Boutique in The Colony. This site gives
                clients a direct path to his live Square calendar and contact details.
              </p>
              <Link href="/services" className="home-button home-button--secondary">
                View Services
              </Link>
            </div>
          </article>

          <article
            className="home-image-panel home-image-panel--book"
            style={backgroundStyle(bookBackground)}
          >
            <div className="home-image-panel__content">
              <p className="home-kicker">Current Availability</p>
              <h2>Choose a time on Square.</h2>
              <p>
                Square shows Tony&apos;s current appointment times and collects the
                details needed to manage your booking.
              </p>
              <TrackableLink
                href={getBookingHref()}
                eventName="booking_click"
                metadata={{ placement: "home_book_panel" }}
                className="home-button home-button--primary"
              >
                <Icon name="calendar" />
                <span>Book Appointment</span>
              </TrackableLink>
              <p className="powered-by">
                <Icon name="square" />
                Powered By Square
              </p>
            </div>
          </article>
        </section>

        <section
          className="home-products"
          style={backgroundStyle(bookBackground)}
          aria-labelledby="home-products-heading"
        >
          <div className="home-products__content">
            <p className="home-kicker">Coming Soon</p>
            <h2 id="home-products-heading">Product guidance, when it is ready.</h2>
            <p>
              No products or checkout are live yet. Ask Tony directly if you want a
              recommendation before the product collection is confirmed.
            </p>
            <div className="home-products__actions">
              <TrackableLink
                href="/products"
                eventName="product_interest_click"
                metadata={{ placement: "home_products" }}
                className="home-button home-button--secondary"
              >
                View Product Update
              </TrackableLink>
              <TrackableLink
                href={contactLinks.text}
                eventName="text_click"
                metadata={{ placement: "home_products" }}
                className="home-button home-button--secondary"
              >
                Text Tony
              </TrackableLink>
            </div>
          </div>
        </section>

        <section className="home-feature-strip" aria-label="Current booking facts">
          <div className="home-feature-grid">
            {featureItems.map((item) => (
              <article key={item.title} className="home-feature-item">
                <Icon name={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <p className="concept-disclosure">
          Atmospheric brand visuals are concept imagery. No client haircut gallery is
          represented on this site.
        </p>
      </div>
    </>
  );
}
