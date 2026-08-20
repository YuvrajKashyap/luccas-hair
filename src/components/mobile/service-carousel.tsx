"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
 * Phone-only carousel shell for the home services row. On desktop it renders
 * the exact same .home-service-grid markup (the pager is display:none), so the
 * approved desktop grid is untouched. On phones the grid becomes a centered
 * snap carousel: neighbours scale back and dim as pages slide past
 * (--fx-depth / --fx-fade, painted per frame, transform/opacity only), and a
 * pager rail stays in two-way sync with the scroll position.
 */

export function ServiceCarousel({
  labels,
  children,
}: {
  labels: string[];
  children: ReactNode;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const mobile = window.matchMedia("(max-width: 680px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cards = () =>
      Array.from(scroller.children).filter(
        (el): el is HTMLElement => el instanceof HTMLElement,
      );

    let raf = 0;
    let settleTimer: number | undefined;

    const clearDepth = () => {
      for (const card of cards()) {
        card.style.removeProperty("--fx-depth");
        card.style.removeProperty("--fx-fade");
      }
    };

    const paintDepth = () => {
      raf = 0;
      if (!mobile.matches || reduced.matches) return;
      const mid = scroller.scrollLeft + scroller.clientWidth / 2;
      for (const card of cards()) {
        const center = card.offsetLeft + card.offsetWidth / 2;
        const d = Math.min(1, Math.abs(center - mid) / scroller.clientWidth);
        card.style.setProperty("--fx-depth", (1 - d * 0.07).toFixed(4));
        card.style.setProperty("--fx-fade", (1 - d * 0.32).toFixed(4));
      }
    };

    const settle = () => {
      const mid = scroller.scrollLeft + scroller.clientWidth / 2;
      let best = 0;
      let bestDistance = Infinity;
      cards().forEach((card, i) => {
        const d = Math.abs(card.offsetLeft + card.offsetWidth / 2 - mid);
        if (d < bestDistance) {
          bestDistance = d;
          best = i;
        }
      });
      setActive(best);
    };

    const onScroll = () => {
      if (!mobile.matches) return;
      if (!raf) raf = requestAnimationFrame(paintDepth);
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(settle, 150);
    };

    const onMediaChange = () => {
      if (mobile.matches && !reduced.matches) {
        paintDepth();
      } else {
        clearDepth();
      }
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    mobile.addEventListener("change", onMediaChange);
    reduced.addEventListener("change", onMediaChange);
    onMediaChange();

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      mobile.removeEventListener("change", onMediaChange);
      reduced.removeEventListener("change", onMediaChange);
      cancelAnimationFrame(raf);
      window.clearTimeout(settleTimer);
      clearDepth();
    };
  }, []);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    const card = scroller?.children[index];
    if (!scroller || !(card instanceof HTMLElement)) return;
    setActive(index);
    scroller.scrollTo({
      left: card.offsetLeft - (scroller.clientWidth - card.offsetWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <>
      <div ref={scrollerRef} className="home-service-grid">
        {children}
      </div>
      <div className="svc-pager">
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            className={
              i === active ? "svc-pager__dot svc-pager__dot--active" : "svc-pager__dot"
            }
            aria-label={`Go to ${label}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </>
  );
}
