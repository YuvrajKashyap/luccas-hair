import type { CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import heroBackground from "../../assets/mockups/home/home-landing-background.png";
import aboutBackground from "../../assets/mockups/home/home-about-lucca-backgroundpng.png";
import bookBackground from "../../assets/mockups/home/home-book-background.png";
import productBackground from "../../assets/mockups/home/home-product.png";
import beardTrimIcon from "../../assets/mockups/home/luccas_service_icons_exact_hq/transparent-png/beard-trim-64.png";
import cutAndBeardIcon from "../../assets/mockups/home/luccas_service_icons_exact_hq/transparent-png/cut-and-beard-64.png";
import fadesIcon from "../../assets/mockups/home/luccas_service_icons_exact_hq/transparent-png/fades-64.png";
import groomingIcon from "../../assets/mockups/home/luccas_service_icons_exact_hq/transparent-png/grooming-64.png";
import kidsSeniorsIcon from "../../assets/mockups/home/luccas_service_icons_exact_hq/transparent-png/kids-seniors-64.png";
import mensCutsIcon from "../../assets/mockups/home/luccas_service_icons_exact_hq/transparent-png/mens-cuts-64.png";
import { getBookingHref } from "@/data/business";
import { services } from "@/data/services";
import { getLocalBusinessJsonLd } from "@/lib/seo/local-business-schema";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Icon, type IconName } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";
import { ServiceCarousel } from "@/components/mobile/service-carousel";

export const metadata = createPageMetadata({
  title: "Men's Haircuts & Grooming in The Colony, TX",
  description:
    "Book a haircut with Tony Lucca at Lucca's Hair, inside Salon Boutique in The Colony, TX. Classic cuts, fades, beard trims, and styling, with online booking through Square.",
  path: "/",
});

const serviceIcons: Record<string, StaticImageData> = {
  "mens-cuts": mensCutsIcon,
  fades: fadesIcon,
  "beard-trim": beardTrimIcon,
  "cut-beard": cutAndBeardIcon,
  grooming: groomingIcon,
  "kids-seniors": kidsSeniorsIcon,
};

const featureItems: Array<{
  icon: IconName;
  title: string;
  copy: string;
}> = [
  {
    icon: "seal",
    title: "Professional Grade",
    copy: "High quality ingredients for the best results.",
  },
  {
    icon: "leaf-drop",
    title: "Conditions & Protects",
    copy: "Healthy hair, healthy you.",
  },
  {
    icon: "gentleman",
    title: "Made For Real Men",
    copy: "Simple. Effective. No hype.",
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
                <p className="home-hero__script">Brush your hair.</p>
                <p className="home-hero__copy">
                  Classic cuts. Modern style.
                  <br />
                  Bookings by appointment only.
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
          <p className="home-kicker home-kicker--center">Services For The Modern Man</p>
          <h2 id="home-services-heading" className="home-section-title">
            Sharp. Clean. Confident.
          </h2>
          <span className="home-title-rule" aria-hidden="true" />

          <ServiceCarousel labels={services.map((service) => service.name)}>
            {services.map((service) => (
              <article key={service.id} className="home-service-card">
                <Image
                  src={serviceIcons[service.id] ?? mensCutsIcon}
                  alt=""
                  width="48"
                  height="48"
                  className="home-service-card__icon"
                />
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </ServiceCarousel>

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
              <p className="home-kicker">About Lucca</p>
              <h2>It&apos;s more than a haircut.</h2>
              <p>
                Lucca&apos;s Hair is built on the belief that confidence starts with
                self-care. Every cut is personal. Every client matters.
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
              <p className="home-kicker">Your Time. Your Style.</p>
              <h2>Book Your Appointment</h2>
              <p>
                One-on-one attention. Quality time. The best experience. Book online in
                just a few clicks.
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
            </div>
          </article>
        </section>

        <section
          className="home-products"
          style={backgroundStyle(productBackground)}
          aria-labelledby="home-products-heading"
        >
          <div className="home-products__content">
            <p className="home-kicker">Coming Soon</p>
            <h2 id="home-products-heading">Premium Products. Handpicked.</h2>
            <p>
              Professional-grade hair and grooming products curated by Tony Lucca. Quality
              you can feel. Results you can see.
            </p>
            <TrackableLink
              href="/products"
              eventName="product_interest_click"
              metadata={{ placement: "home_products" }}
              className="home-button home-button--secondary"
            >
              View Products
            </TrackableLink>
          </div>
        </section>

        <section className="home-feature-strip" aria-label="Product benefits">
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
      </div>
    </>
  );
}
