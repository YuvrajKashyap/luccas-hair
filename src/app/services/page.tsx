import type { CSSProperties } from "react";
import ctaImage from "../../../assets/mockups/services/services-cta-barber-cutting-fixed.jpg";
import heroInteriorImage from "../../../assets/mockups/services/services-hero-interior-bg.jpg";
import blackMarbleTexture from "../../../assets/mockups/services/texture-black-marble.jpg";
import { contactLinks, getBookingHref } from "@/data/business";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Icon } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "See the current $20, 20-minute cut listed by Lucca's Hair in The Colony, TX, then book through Square.",
  path: "/services",
});

function servicesPageStyle(): CSSProperties {
  return {
    "--services-hero-interior": `url(${heroInteriorImage.src})`,
    "--services-marble": `url(${blackMarbleTexture.src})`,
    "--services-cta": `url(${ctaImage.src})`,
  } as CSSProperties;
}

export default function ServicesPage() {
  return (
    <div className="services-page" style={servicesPageStyle()}>
      <section className="services-hero" aria-labelledby="services-heading">
        <span
          className="services-hero__layer services-hero__layer--interior"
          aria-hidden="true"
        />
        <div className="services-hero__shade" aria-hidden="true" />

        <div className="services-hero__inner">
          <div className="services-hero__content">
            <p className="services-kicker">Current Square Listing</p>
            <h1 id="services-heading">Services</h1>
            <p>
              One verified service.
              <br />
              Current price and duration.
            </p>
          </div>
        </div>
      </section>

      <section className="services-offer" aria-labelledby="services-offer-heading">
        <div className="services-offer__inner">
          <p className="services-kicker services-kicker--center">Verified Menu</p>
          <h2 id="services-offer-heading">
            What Square lists today.
            <br />
            Nothing invented.
          </h2>
          <span className="services-title-rule" aria-hidden="true" />

          <div className="services-card-grid services-card-grid--verified">
            {services.map((service) => (
              <article
                key={service.name}
                className="services-card services-card--verified"
              >
                <div className="services-card__content">
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                  <div className="services-card__price">
                    <strong>{service.price}</strong>
                    <span>{service.duration}</span>
                  </div>
                  <TrackableLink
                    href={getBookingHref()}
                    eventName="booking_click"
                    metadata={{ placement: "services_verified_card" }}
                    className="home-button home-button--primary"
                  >
                    Book On Square
                  </TrackableLink>
                </div>
              </article>
            ))}

            <aside className="services-contact-card">
              <p className="services-kicker">Need Something Else?</p>
              <h3>Ask Tony before you book.</h3>
              <p>
                The site does not publish unconfirmed services as a final menu. Text Tony
                if you want to ask about a specific cut or grooming need.
              </p>
              <TrackableLink
                href={contactLinks.text}
                eventName="text_click"
                metadata={{ placement: "services_contact_card" }}
                className="home-button home-button--secondary"
              >
                Text Tony
              </TrackableLink>
            </aside>
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
              Square shows Tony&apos;s current appointment availability and booking
              details.
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
