"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  businessInfo,
  contactLinks,
  getBookingHref,
  getSquareBookingHref,
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

const footerServices = [
  "Men's Cuts",
  "Fades",
  "Beard Trim",
  "Cut + Beard",
  "Grooming",
  "Kids & Seniors",
];

export function Footer() {
  const pathname = usePathname();
  const bookingHref = pathname.startsWith("/book")
    ? getSquareBookingHref()
    : getBookingHref();

  return (
    <footer className="site-footer">
      <section className="footer-contact-band" aria-label="Contact details">
        <div className="footer-contact-grid">
          <div className="footer-contact-item">
            <Icon name="map-pin" className="footer-contact-item__icon" />
            <div>
              <p className="footer-kicker">Inside Salon Boutique</p>
              <p>5701 E SH-121 Access Rd</p>
              <p>Suite TBD</p>
              <p>The Colony, TX</p>
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

          <div className="footer-contact-item">
            <Icon name="clock" className="footer-contact-item__icon" />
            <div>
              <p className="footer-kicker">Hours</p>
              <p>Tuesday - Saturday</p>
              <p>10:00 AM - 5:00 PM</p>
              <p>Closed Sunday &amp; Monday</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <Icon name="phone" className="footer-contact-item__icon" />
            <div>
              <p className="footer-kicker">Call Or Text</p>
              <TrackableLink href={contactLinks.call} eventName="call_click">
                {businessInfo.phone}
              </TrackableLink>
              <p>Text Preferred</p>
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
            <Icon name="instagram" className="footer-contact-item__icon" />
            <div>
              <p className="footer-kicker">Follow Tony</p>
              <p>@luccas.hair</p>
              <p>Stay up to date on styles, news, and product drops.</p>
              <span className="footer-inline-link">
                Follow On Instagram <span aria-hidden="true">-&gt;</span>
              </span>
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
            <p className="footer-kicker">Services</p>
            <div className="footer-link-grid">
              {footerServices.map((service) => (
                <Link key={service} href="/services">
                  {service}
                </Link>
              ))}
              <Link href="/services">View All Services</Link>
            </div>
          </div>

          <div className="footer-column footer-book">
            <p className="footer-kicker">Book Now</p>
            <p>Appointments are recommended.</p>
            <p>Walk-ins may be limited.</p>
            <TrackableLink
              href={bookingHref}
              eventName="booking_click"
              metadata={{ placement: "footer_book_now" }}
              className="home-button home-button--primary footer-book__button"
            >
              <Icon name="calendar" />
              <span>Book Appointment</span>
            </TrackableLink>
            <p className="powered-by">
              <Icon name="square" />
              Powered By Square
            </p>
          </div>
        </div>
      </section>

      <section className="footer-legal">
        <p>© 2024 Lucca&apos;s Hair. All rights reserved.</p>
        <div className="footer-legal__links">
          <Link href="/faq-policies">Privacy Policy</Link>
          <Link href="/faq-policies">Terms of Service</Link>
        </div>
        <div className="footer-legal__socials" aria-hidden="true">
          <Icon name="instagram" />
          <Icon name="facebook" />
        </div>
      </section>
    </footer>
  );
}
