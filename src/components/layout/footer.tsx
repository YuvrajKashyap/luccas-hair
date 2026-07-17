import Link from "next/link";
import {
  businessHours,
  businessInfo,
  contactLinks,
  getBookingHref,
} from "@/data/business";
import { LuccaLogo } from "@/components/brand/lucca-logo";
import { Icon } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "FAQ & Policies", href: "/faq-policies" },
];

function displayTime(value?: string) {
  if (!value) return null;

  const [hour, minute] = value.split(":").map(Number);
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${String(minute).padStart(2, "0")} ${suffix}`;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-contact-band" aria-label="Contact details">
        <div className="footer-contact-grid">
          <div className="footer-contact-item">
            <Icon name="map-pin" className="footer-contact-item__icon" />
            <div>
              <p className="footer-kicker">{businessInfo.locationLabel}</p>
              <p>{businessInfo.streetAddress}</p>
              <p>
                {businessInfo.city}, {businessInfo.region}
              </p>
              <TrackableLink
                href={contactLinks.directions}
                eventName="directions_click"
                metadata={{ placement: "footer_contact_band" }}
                className="footer-inline-link"
              >
                Get Directions <span aria-hidden="true">-&gt;</span>
              </TrackableLink>
            </div>
          </div>

          <div className="footer-contact-item footer-contact-item--hours">
            <Icon name="clock" className="footer-contact-item__icon" />
            <div>
              <p className="footer-kicker">Current Hours</p>
              {businessHours.map((hours) => (
                <p key={hours.label}>
                  {hours.label}:{" "}
                  {hours.opens
                    ? `${displayTime(hours.opens)} - ${displayTime(hours.closes)}`
                    : "Closed"}
                </p>
              ))}
            </div>
          </div>

          <div className="footer-contact-item">
            <Icon name="phone" className="footer-contact-item__icon" />
            <div>
              <p className="footer-kicker">Call Or Text</p>
              <TrackableLink href={contactLinks.call} eventName="call_click">
                {businessInfo.phone}
              </TrackableLink>
              <p>Text preferred</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <Icon name="mail" className="footer-contact-item__icon" />
            <div>
              <p className="footer-kicker">Email</p>
              <TrackableLink href={contactLinks.email} eventName="email_click">
                {businessInfo.email}
              </TrackableLink>
            </div>
          </div>

          <div className="footer-contact-item">
            <TrackableLink
              href={contactLinks.instagram}
              eventName="instagram_click"
              metadata={{ placement: "footer_contact_icon" }}
              className="footer-contact-item__icon-link"
              ariaLabel="Visit Lucca's Hair on Instagram"
            >
              <Icon name="instagram" className="footer-contact-item__icon" />
            </TrackableLink>
            <div>
              <p className="footer-kicker">Follow Tony</p>
              <p>{businessInfo.instagramHandle}</p>
              <p>See Tony&apos;s latest work and updates.</p>
              <TrackableLink
                href={contactLinks.instagram}
                eventName="instagram_click"
                metadata={{ placement: "footer_contact_link" }}
                className="footer-inline-link"
                ariaLabel="Follow Lucca's Hair on Instagram"
              >
                Follow On Instagram <span aria-hidden="true">-&gt;</span>
              </TrackableLink>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-main" aria-label="Footer navigation">
        <div className="footer-main__grid">
          <div className="footer-brand">
            <LuccaLogo variant="footer" />
          </div>

          <div className="footer-column footer-column--split">
            <p className="footer-kicker">Quick Links</p>
            <div className="footer-link-grid">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column footer-column--split">
            <p className="footer-kicker">Verified Service</p>
            <div className="footer-link-grid">
              <Link href="/services">Cuts</Link>
              <Link href="/services">$20 / 20 minutes</Link>
            </div>
          </div>

          <div className="footer-column footer-book">
            <p className="footer-kicker">Book Now</p>
            <p>Choose an available time on Tony&apos;s live Square calendar.</p>
            <TrackableLink
              href={getBookingHref()}
              eventName="booking_click"
              metadata={{ placement: "footer_book_now" }}
              className="home-button home-button--primary footer-book__button"
            >
              <Icon name="calendar" />
              <span>View Availability</span>
            </TrackableLink>
            <p className="powered-by">
              <Icon name="square" />
              Powered By Square
            </p>
          </div>
        </div>
      </section>

      <section className="footer-legal">
        <p>© {new Date().getFullYear()} Lucca&apos;s Hair. All rights reserved.</p>
        <div className="footer-legal__socials">
          <TrackableLink
            href={contactLinks.instagram}
            eventName="instagram_click"
            metadata={{ placement: "footer_legal_social" }}
            ariaLabel="Visit Lucca's Hair on Instagram"
          >
            <Icon name="instagram" />
          </TrackableLink>
        </div>
      </section>
    </footer>
  );
}
