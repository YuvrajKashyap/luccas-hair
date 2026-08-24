import type { CSSProperties } from "react";
import beardTrimImage from "../../../assets/mockups/services/service-card-beard-trim.jpg";
import facialImage from "../../../assets/mockups/services/service-card-facial.jpg";
import fadeImage from "../../../assets/mockups/services/service-card-fade.jpg";
import haircutImage from "../../../assets/mockups/services/service-card-haircut.jpg";
import kidsCutImage from "../../../assets/mockups/services/service-card-kids-cut-fixed.jpg";
import stylingImage from "../../../assets/mockups/services/service-card-styling-fixed.jpg";
import brickTexture from "../../../assets/mockups/services/services-brick-wall-texture.jpg";
import ctaImage from "../../../assets/mockups/services/services-cta-barber-cutting-fixed.jpg";
import heroInteriorImage from "../../../assets/mockups/services/services-hero-interior-bg.jpg";
import plantImage from "../../../assets/mockups/services/services-plant-detail.jpg";
import windowLogoImage from "../../../assets/mockups/services/services-window-logo-hero-bg.jpg";
import blackMarbleTexture from "../../../assets/mockups/services/texture-black-marble.jpg";
import { getBookingHref } from "@/data/business";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Icon } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";

export const metadata = createPageMetadata({
  title: "Services & Prices",
  description:
    "Haircuts, fades, beard trims, facials, styling, and kids cuts from Tony Lucca in The Colony, TX. See prices and book your appointment online through Square.",
  path: "/services",
});

type MockupImage = {
  src: string;
};

type ServiceCard = {
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  image: MockupImage;
  position: string;
  size?: string;
};

const serviceCards: ServiceCard[] = [
  {
    name: "Haircut",
    description: "Classic or modern cuts tailored to your style.",
    price: "$20",
    image: haircutImage,
    position: "center 42%",
  },
  {
    name: "Fade",
    description: "Clean, sharp fades that elevate your look.",
    price: "FREE",
    priceNote: "Comes with the haircut",
    image: fadeImage,
    position: "center 43%",
  },
  {
    name: "Beard Trim",
    description: "Shape, define, and maintain your beard.",
    price: "FREE",
    priceNote: "Comes with the haircut",
    image: beardTrimImage,
    position: "center 44%",
  },
  {
    name: "Facial",
    description: "Deep cleanse and skin revitalization.",
    price: "$20",
    image: facialImage,
    position: "center 42%",
  },
  {
    name: "Styling",
    description: "Professional styling for any occasion.",
    price: "FREE",
    priceNote: "Comes with the haircut",
    image: stylingImage,
    position: "center center",
  },
  {
    name: "Kids Cut",
    description: "Precision cuts for the little ones.",
    price: "FREE",
    priceNote: "Comes with the haircut",
    image: kidsCutImage,
    position: "center center",
  },
];

function servicesPageStyle(): CSSProperties {
  return {
    "--services-hero-interior": `url(${heroInteriorImage.src})`,
    "--services-window-logo": `url(${windowLogoImage.src})`,
    "--services-plant": `url(${plantImage.src})`,
    "--services-brick": `url(${brickTexture.src})`,
    "--services-marble": `url(${blackMarbleTexture.src})`,
    "--services-cta": `url(${ctaImage.src})`,
  } as CSSProperties;
}

function serviceCardStyle(service: ServiceCard): CSSProperties {
  return {
    "--service-card-image": `url(${service.image.src})`,
    "--service-card-position": service.position,
    "--service-card-size": service.size ?? "cover",
  } as CSSProperties;
}

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services at Lucca's Hair",
  itemListElement: serviceCards.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: {
        "@type": "HairSalon",
        name: "Lucca's Hair",
      },
      areaServed: "The Colony, TX",
    },
  })),
};

export default function ServicesPage() {
  return (
    <div className="services-page" style={servicesPageStyle()}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <section className="services-hero" aria-labelledby="services-heading">
        <span
          className="services-hero__layer services-hero__layer--interior"
          aria-hidden="true"
        />
        <span
          className="services-hero__layer services-hero__layer--window"
          aria-hidden="true"
        />
        <span
          className="services-hero__layer services-hero__layer--brick"
          aria-hidden="true"
        />
        <span
          className="services-hero__layer services-hero__layer--plant"
          aria-hidden="true"
        />
        <div className="services-hero__shade" aria-hidden="true" />

        <div className="services-hero__inner">
          <div className="services-hero__content">
            <p className="services-kicker">Premium Care. Personalized For You.</p>
            <h1 id="services-heading">Services</h1>
            <p>
              Expert cuts. Timeless style.
              <br />
              Tailored to you.
            </p>
          </div>
        </div>
      </section>

      <section className="services-offer" aria-labelledby="services-offer-heading">
        <div className="services-offer__inner">
          <p className="services-kicker services-kicker--center">What We Offer</p>
          <h2 id="services-offer-heading">
            Precision in every cut.
            <br />
            Excellence in every detail.
          </h2>
          <span className="services-title-rule" aria-hidden="true" />

          <div className="services-card-grid">
            {serviceCards.map((service) => (
              <article
                key={service.name}
                className="services-card"
                style={serviceCardStyle(service)}
              >
                <div className="services-card__content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="services-card__price">
                    <strong>{service.price}</strong>
                    {service.priceNote ? <span>{service.priceNote}</span> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="services-booking-strip"
        aria-labelledby="services-booking-heading"
      >
        <div className="services-booking-strip__inner">
          <div className="services-booking-strip__image" aria-hidden="true" />
          <div className="services-booking-strip__content">
            <h2 id="services-booking-heading">Ready For Your Next Cut?</h2>
            <p>
              Book your appointment today and experience the Lucca&apos;s Hair difference.
            </p>
            <TrackableLink
              href={getBookingHref()}
              eventName="booking_click"
              metadata={{ placement: "services_bottom_cta" }}
              className="home-button home-button--primary"
            >
              <Icon name="calendar" />
              <span>Book Appointment</span>
            </TrackableLink>
          </div>
        </div>
      </section>
    </div>
  );
}
