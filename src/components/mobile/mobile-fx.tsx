"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/*
 * Phone-only experience engine. Activates below 680px when the user has not
 * requested reduced motion. It flags <html data-mfx="on"> so every entrance,
 * ripple, and instrument in mobile.css stays inert on desktop and for
 * reduced-motion users, then wires:
 *   - one-shot scroll reveals (IntersectionObserver, per-section signatures)
 *   - a scroll progress hairline
 *   - touch ripples that pool light under the finger on primary controls
 */

const REVEAL_GROUPS: Array<[effect: string, selector: string]> = [
  // The carousel reveals as ONE unit (cards stagger via --fx-i) so that
  // peeking neighbour cards are never individually intersection-hidden.
  ["deal-grid", ".home-service-grid"],
  [
    "rise",
    ".home-services > .home-kicker, .home-services > .home-section-title, .home-services > .home-title-rule, .home-services__button",
  ],
  ["unseal", ".home-image-panel__content"],
  ["focus", ".home-products__content"],
  ["slide", ".home-feature-item"],
  [
    "rise",
    ".services-offer .services-kicker, .services-offer h2, .services-offer .services-title-rule",
  ],
  ["tilt", ".services-card"],
  ["unseal", ".services-booking-strip__content"],
  ["pop", ".book-step"],
  [
    "rise",
    ".book-steps .book-section-title, .book-steps .book-kicker--center, .book-timezone",
  ],
  ["rise", ".book-faq .book-section-title, .book-faq .book-kicker--center"],
  ["glow", ".book-faq-item"],
  ["unseal", ".book-question-cta__content"],
  ["glow", ".faq-policy-group, .faq-policies-help-card"],
  ["rise", ".products-coming-soon__inner > *"],
  ["slide", ".footer-contact-item"],
  ["rise", ".footer-main__grid > *, .footer-legal > *"],
];

const RIPPLE_TARGETS =
  ".home-button, .svc-pager__dot, .site-nav__link, .faq-policy-group__summary, .faq-policy-question__summary, .book-faq-item summary";

export function MobileFx() {
  const pathname = usePathname();
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 680px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;

    const syncFlag = () => {
      if (mobile.matches && !reduced.matches) {
        root.dataset.mfx = "on";
      } else {
        delete root.dataset.mfx;
      }
    };
    syncFlag();
    mobile.addEventListener("change", syncFlag);
    reduced.addEventListener("change", syncFlag);

    // --- scroll reveals -----------------------------------------------------
    // One-shot: sections keep their place once revealed instead of hiding
    // and replaying every time the user scrolls back through.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("fx-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -9% 0px" },
    );

    const observed: Element[] = [];
    for (const [effect, selector] of REVEAL_GROUPS) {
      const siblingIndex = new Map<Element | null, number>();
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        const parent = el.parentElement;
        const i = siblingIndex.get(parent) ?? 0;
        siblingIndex.set(parent, i + 1);
        el.dataset.fx = effect;
        el.style.setProperty("--fx-i", String(i));
        if (effect === "deal-grid") {
          Array.from(el.children).forEach((child, idx) => {
            if (child instanceof HTMLElement) {
              child.style.setProperty("--fx-i", String(idx));
            }
          });
        }
        observer.observe(el);
        observed.push(el);
      });
    }

    // --- scroll instruments -------------------------------------------------
    // One rAF per scroll frame drives the progress hairline plus two html
    // attributes the CSS keys off: data-scroll (down = collapse chrome) and
    // data-past-hero (dock only appears after the hero CTA has scrolled by).
    let progressRaf = 0;
    let lastY = window.scrollY;
    const paintScroll = () => {
      progressRaf = 0;
      const y = window.scrollY;
      const bar = barRef.current;
      if (bar) {
        const max = root.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }
      root.dataset.pastHero = y > window.innerHeight * 0.55 ? "1" : "0";
      const nearBottom = window.innerHeight + y >= root.scrollHeight - 140;
      const delta = y - lastY;
      if (Math.abs(delta) > 6) {
        root.dataset.scroll = delta > 0 && y > 220 && !nearBottom ? "down" : "up";
        lastY = y;
      }
    };
    const onScroll = () => {
      if (!mobile.matches) return;
      if (!progressRaf) progressRaf = requestAnimationFrame(paintScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    paintScroll();

    // --- touch ripples ------------------------------------------------------
    const onPointerDown = (event: PointerEvent) => {
      if (root.dataset.mfx !== "on") return;
      if (event.pointerType === "mouse") return;
      const target = (event.target as Element | null)?.closest?.(RIPPLE_TARGETS);
      if (!(target instanceof HTMLElement)) return;
      const rect = target.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "mfx-ripple";
      const size = Math.max(rect.width, rect.height) * 2.2;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      target.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    };
    document.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      mobile.removeEventListener("change", syncFlag);
      reduced.removeEventListener("change", syncFlag);
      observer.disconnect();
      observed.forEach((el) => el.classList.remove("fx-in"));
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(progressRaf);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [pathname]);

  return (
    <div className="mfx-progress" aria-hidden="true">
      <span ref={barRef} />
    </div>
  );
}
