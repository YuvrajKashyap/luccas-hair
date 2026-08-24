import type { CSSProperties } from "react";
import policyHeroBackground from "../../../assets/mockups/faq-policies/asset.png";
import { contactLinks } from "@/data/business";
import { faqPolicySections } from "@/data/faq-policies";
import { getFaqPageJsonLd } from "@/lib/seo/faq-schema";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Icon, type IconName } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";

export const metadata = createPageMetadata({
  title: "FAQ / Policies",
  description:
    "FAQ and policy details for Lucca's Hair, including appointment booking, services, payments, products, and policy notes.",
  path: "/faq-policies",
});

function backgroundStyle(image: { src: string }): CSSProperties {
  return { "--faq-policy-hero-bg": `url(${image.src})` } as CSSProperties;
}

export default function FaqPoliciesPage() {
  return (
    <div className="faq-policies-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageJsonLd()) }}
      />
      <section
        className="faq-policies-hero"
        style={backgroundStyle(policyHeroBackground)}
        aria-labelledby="faq-policies-heading"
      >
        <div className="faq-policies-hero__inner">
          <div className="faq-policies-hero__content">
            <p className="faq-policies-eyebrow">FAQ &amp; Policies</p>
            <h1 id="faq-policies-heading">
              Frequently Asked <span>Questions</span>
            </h1>
            <p>Everything you need to know before your appointment.</p>
          </div>
        </div>
      </section>

      <section className="faq-policies-accordion" aria-label="FAQ policy sections">
        <div className="faq-policies-accordion__inner">
          {faqPolicySections.map((section) => (
            <details
              key={section.id}
              className="faq-policy-group"
              open={section.defaultOpen}
            >
              <summary className="faq-policy-group__summary">
                <span className="faq-policy-group__icon" aria-hidden="true">
                  <Icon name={section.icon as IconName} />
                </span>
                <span className="faq-policy-group__label">{section.label}</span>
                <span className="faq-policy-group__toggle" aria-hidden="true" />
              </summary>

              <div className="faq-policy-group__body">
                {section.items.map((item) => (
                  <details
                    key={item.question}
                    className="faq-policy-question"
                    open={item.defaultOpen}
                  >
                    <summary className="faq-policy-question__summary">
                      <span className="faq-policy-question__mark" aria-hidden="true" />
                      <span>{item.question}</span>
                      <span className="faq-policy-question__toggle" aria-hidden="true" />
                    </summary>
                    <div className="faq-policy-question__answer">
                      <p>{item.answer}</p>
                      <span>
                        {item.status === "confirmed" ? "Confirmed detail" : "Policy TBD"}
                      </span>
                    </div>
                  </details>
                ))}
              </div>
            </details>
          ))}

          <article className="faq-policies-help-card">
            <div className="faq-policies-help-card__icon" aria-hidden="true">
              <Icon name="calendar" />
            </div>
            <div className="faq-policies-help-card__copy">
              <p>Still have questions?</p>
              <h2>We&apos;re here to help.</h2>
              <span>
                If you cannot find the answer you&apos;re looking for, text Tony and
                he&apos;ll help you with the next step.
              </span>
            </div>
            <TrackableLink
              href={contactLinks.text}
              eventName="text_click"
              metadata={{ placement: "faq_policy_help_card" }}
              className="home-button home-button--secondary faq-policies-help-card__button"
              ariaLabel="Text Tony with a question"
            >
              <span>Text Tony</span>
              <Icon name="arrow-right" />
            </TrackableLink>
          </article>
        </div>
      </section>
    </div>
  );
}
