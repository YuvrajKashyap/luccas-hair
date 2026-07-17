import type { CSSProperties } from "react";
import heroBackground from "../../../assets/mockups/book/book-hero-bg-clean.png";
import contactBackground from "../../../assets/mockups/book/book-contact-barber-photo.png";
import { contactLinks, getSquareBookingHref } from "@/data/business";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Icon } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";

export const metadata = createPageMetadata({
  title: "Book",
  description:
    "Book your next haircut with Tony Lucca at Lucca's Hair in The Colony, TX.",
  path: "/book",
});

const bookingSteps = [
  {
    title: "1. Choose Service",
    copy: "Select the service you want and how long you need.",
    icon: "calendar",
  },
  {
    title: "2. Pick A Time",
    copy: "See real-time availability and choose a time that works for you.",
    icon: "clock",
  },
  {
    title: "3. Confirm & Book",
    copy: "Confirm your details and you're all set. See you at your appointment!",
    icon: "check",
  },
] as const;

const bookingFaqs = [
  {
    question: "What if I need to cancel or reschedule?",
    answer: "Use Square or contact Tony directly if your appointment needs to change.",
  },
  {
    question: "Do I need to pay a deposit?",
    answer: "Deposit details are TBD and will be confirmed before launch.",
  },
  {
    question: "How early should I arrive?",
    answer: "Arrive a few minutes early so your appointment can start on time.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Payment details are handled through Square or directly with Tony.",
  },
] as const;

function backgroundStyle(name: string, image: { src: string }): CSSProperties {
  return { [name]: `url(${image.src})` } as CSSProperties;
}

export default function BookPage() {
  return (
    <div className="book-page">
      <section
        id="square-booking"
        className="book-hero"
        style={backgroundStyle("--book-hero-bg", heroBackground)}
      >
        <div className="book-hero__inner">
          <div className="book-hero__content">
            <p className="book-kicker">Let&apos;s get you looking your best.</p>
            <h1>Book your next cut.</h1>
            <span className="book-title-rule" aria-hidden="true" />
            <p>
              Booking is quick and easy. Choose your service, pick a time that works for
              you, and I&apos;ll take care of the rest.
            </p>
            <TrackableLink
              href={getSquareBookingHref()}
              eventName="booking_click"
              metadata={{ destination: "square", placement: "book_hero" }}
              className="home-button home-button--secondary book-hero__button"
            >
              <span>Book An Appointment</span>
              <Icon name="calendar" />
            </TrackableLink>
          </div>
        </div>
      </section>

      <section className="book-steps" aria-labelledby="book-steps-heading">
        <div className="book-section-inner">
          <p className="book-kicker book-kicker--center">Easy Booking</p>
          <h2 id="book-steps-heading" className="book-section-title">
            Book in 3 simple steps.
          </h2>
          <span className="book-title-rule book-title-rule--center" aria-hidden="true" />

          <div className="book-step-grid">
            {bookingSteps.map((step) => (
              <article key={step.title} className="book-step">
                <span className={`book-step__icon book-step__icon--${step.icon}`}>
                  {step.icon === "check" ? (
                    <span className="book-step__checkmark" />
                  ) : (
                    <Icon name={step.icon} />
                  )}
                  {step.icon === "calendar" ? (
                    <span className="book-step__mini-check" aria-hidden="true" />
                  ) : null}
                </span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>

          <aside className="book-timezone" aria-label="Booking timezone note">
            <Icon name="globe" />
            <p>
              <strong>All times are shown in Central Time (CT).</strong>
              <span>Please make sure you&apos;re booking in the correct timezone.</span>
            </p>
          </aside>
        </div>
      </section>

      <section className="book-faq" aria-labelledby="book-faq-heading">
        <div className="book-section-inner">
          <p className="book-kicker book-kicker--center">Questions?</p>
          <h2 id="book-faq-heading" className="book-section-title">
            Frequently asked.
          </h2>
          <span className="book-title-rule book-title-rule--center" aria-hidden="true" />

          <div className="book-faq-list">
            {bookingFaqs.map((item) => (
              <details key={item.question} className="book-faq-item">
                <summary>
                  <span>{item.question}</span>
                  <span className="book-faq-item__plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="book-question-cta"
        style={backgroundStyle("--book-contact-bg", contactBackground)}
        aria-label="Text Tony with questions"
      >
        <div className="book-question-cta__media" aria-hidden="true" />
        <div className="book-question-cta__content">
          <p className="book-kicker">Have Questions?</p>
          <h2>Text me anytime.</h2>
          <p>Prefer to reach out first? I&apos;m here to help.</p>
          <TrackableLink
            href={contactLinks.text}
            eventName="text_click"
            metadata={{ placement: "book_question_cta" }}
            className="home-button home-button--secondary book-question-cta__button"
          >
            <span>Text Lucca</span>
            <Icon name="message" />
          </TrackableLink>
        </div>
      </section>
    </div>
  );
}
