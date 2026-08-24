"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/*
 * Desktop experience engine, the mirror of MobileFx. Activates above 680px
 * when the user has not requested reduced motion. It flags
 * <html data-dfx="on"> so every entrance, instrument, and hover layer in
 * desktop.css stays inert on phones and for reduced-motion users, then wires:
 *   - one-shot scroll reveals with per-section signatures
 *   - a per-letter cascade on the home hero title
 *   - a scroll progress hairline
 *   - an ambient gold-dust canvas inside the page hero that drifts on idle,
 *     swirls away from the pointer, and flares when a booking CTA is clicked
 *   - magnetic pull + shine sweep on buttons, 3D tilt + glare on cards
 *   - click shockwaves that ripple out from pressed controls
 * The cursor itself is a quiet brand-tinted arrow, styled in desktop.css.
 * All decoration is aria-hidden; content order and copy are untouched.
 */

const FLARE_EVENT = "lucca:flare";

const REVEAL_GROUPS: Array<[effect: string, selector: string]> = [
  // Home: every section gets its own signature.
  [
    "rise",
    ".home-services > .home-kicker, .home-services > .home-section-title, .home-services__button",
  ],
  ["deal-grid", ".home-service-grid"],
  ["unseal", ".home-image-panel--about .home-image-panel__content"],
  ["iris", ".home-image-panel--book .home-image-panel__content"],
  ["focus", ".home-products__content"],
  ["slide", ".home-feature-item"],
  // Services.
  ["rise", ".services-offer .services-kicker, .services-offer h2"],
  ["tilt", ".services-card"],
  ["focus", ".services-booking-strip__image"],
  ["unseal", ".services-booking-strip__content"],
  // Book.
  ["rise", ".book-steps .book-kicker--center, .book-steps .book-section-title"],
  ["pop", ".book-step"],
  ["glow", ".book-timezone"],
  ["rise", ".book-faq .book-kicker--center, .book-faq .book-section-title"],
  ["glow", ".book-faq-item"],
  ["focus", ".book-question-cta__media"],
  ["unseal", ".book-question-cta__content"],
  // FAQ / Policies.
  ["glow", ".faq-policy-group"],
  ["pop", ".faq-policies-help-card"],
  // Products.
  ["rise", ".products-coming-soon__inner > *"],
  // Footer, everywhere.
  ["slide", ".footer-contact-item"],
  ["rise", ".footer-main__grid > *, .footer-legal > *"],
  // Rules and dividers draw instead of rising. Listed last so they win over
  // any broader group that also matched them.
  [
    "draw",
    ".home-services > .home-title-rule, .services-offer .services-title-rule, .book-steps .book-title-rule--center, .book-faq .book-title-rule--center, .products-title-rule",
  ],
];

const HERO_SELECTOR =
  ".home-hero, .services-hero, .book-hero, .products-hero, .faq-policies-hero";

const MAGNETIC_SELECTOR = ".home-button";
const TILT_SELECTOR = ".home-service-card, .services-card";
const INTERACTIVE_SELECTOR =
  "a, button, summary, [role='button'], input, textarea, select";
const BOOKING_SELECTOR = "a[href*='square.site'], a[href='/book']";

/* --- ambient gold dust canvas ---------------------------------------------- */

type Mote = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  phase: number;
  speed: number;
  /* burst motes decay and die; ambient motes live forever */
  life: number;
  burst: boolean;
};

function createDustScene(hero: HTMLElement) {
  const canvas = document.createElement("canvas");
  canvas.className = "dfx-dust";
  canvas.setAttribute("aria-hidden", "true");
  hero.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return () => {};
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  const motes: Mote[] = [];
  let ambientCount = 0;
  const pointer = { x: -9999, y: -9999, vx: 0, vy: 0, inside: false };
  let raf = 0;
  let running = false;
  let visible = true;
  let last = 0;

  const measure = () => {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const target = Math.max(36, Math.min(84, Math.round((width * height) / 26000)));
    while (ambientCount < target) {
      motes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.08,
        vy: -0.04 - Math.random() * 0.1,
        r: 0.6 + Math.random() * 1.7,
        alpha: 0.12 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.9,
        life: 1,
        burst: false,
      });
      ambientCount += 1;
    }
  };

  const frame = (now: number) => {
    raf = 0;
    const dt = Math.min(40, Math.max(1, now - (last || now)));
    last = now;
    const step = dt / 16.67;
    ctx.clearRect(0, 0, width, height);
    const t = now / 1000;

    for (let i = motes.length - 1; i >= 0; i -= 1) {
      const m = motes[i];
      // Pointer influence: motes drift away from the cursor with soft falloff.
      if (pointer.inside && !m.burst) {
        const dx = m.x - pointer.x;
        const dy = m.y - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 24000 && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const push = ((155 - d) / 155) * 0.06 * step;
          m.vx += (dx / d) * push + pointer.vx * 0.004;
          m.vy += (dy / d) * push + pointer.vy * 0.004;
        }
      }
      m.x += (m.vx + Math.sin(t * m.speed + m.phase) * 0.05) * step * 2.2;
      m.y += m.vy * step * 2.2;
      m.vx *= Math.pow(0.985, step);
      m.vy = m.burst ? m.vy * Math.pow(0.96, step) : m.vy;
      if (m.burst) {
        m.life -= 0.014 * step;
        if (m.life <= 0) {
          motes.splice(i, 1);
          continue;
        }
      } else {
        if (m.y < -6) {
          m.y = height + 6;
          m.x = Math.random() * width;
        }
        if (m.x < -6) m.x = width + 6;
        if (m.x > width + 6) m.x = -6;
      }
      const twinkle = 0.65 + 0.35 * Math.sin(t * (m.speed * 2.1) + m.phase);
      ctx.globalAlpha = m.alpha * twinkle * m.life;
      ctx.fillStyle = m.burst ? "#ffd489" : "#f0ad4b";
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    pointer.vx *= 0.8;
    pointer.vy *= 0.8;
    if (running) raf = requestAnimationFrame(frame);
  };

  const setRunning = (next: boolean) => {
    if (next === running) return;
    running = next;
    if (running) {
      last = 0;
      raf = requestAnimationFrame(frame);
    } else if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  const onPointerMove = (event: PointerEvent) => {
    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    pointer.inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
    if (pointer.inside) {
      pointer.vx = x - pointer.x;
      pointer.vy = y - pointer.y;
      pointer.x = x;
      pointer.y = y;
    }
  };

  const onFlare = (event: Event) => {
    const detail = (event as CustomEvent<{ x: number; y: number }>).detail;
    const rect = hero.getBoundingClientRect();
    // Clamp the burst origin into the hero so navbar clicks flare from its edge.
    const x = Math.min(rect.width - 20, Math.max(20, (detail?.x ?? 0) - rect.left));
    const y = Math.min(rect.height - 20, Math.max(20, (detail?.y ?? 0) - rect.top));
    for (let i = 0; i < 30; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const force = 1.2 + Math.random() * 3.4;
      motes.push({
        x,
        y,
        vx: Math.cos(angle) * force,
        vy: Math.sin(angle) * force - 0.5,
        r: 0.8 + Math.random() * 2,
        alpha: 0.5 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        speed: 1 + Math.random(),
        life: 1,
        burst: true,
      });
    }
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      visible = entry?.isIntersecting ?? true;
      setRunning(visible && !document.hidden);
    },
    { threshold: 0 },
  );
  observer.observe(hero);

  const onVisibility = () => setRunning(visible && !document.hidden);
  const resizeObserver = new ResizeObserver(measure);

  measure();
  resizeObserver.observe(hero);
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener(FLARE_EVENT, onFlare);
  document.addEventListener("visibilitychange", onVisibility);
  setRunning(true);

  return () => {
    setRunning(false);
    observer.disconnect();
    resizeObserver.disconnect();
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener(FLARE_EVENT, onFlare);
    document.removeEventListener("visibilitychange", onVisibility);
    canvas.remove();
  };
}

/* --- hero title letter cascade --------------------------------------------- */

function splitHeroTitle(): () => void {
  const title = document.querySelector<HTMLElement>(".home-hero__title");
  if (!title || title.dataset.dfxSplit) return () => {};
  const text = title.textContent ?? "";
  if (!text.trim()) return () => {};
  title.dataset.dfxSplit = "on";
  title.setAttribute("aria-label", text);
  const frag = document.createDocumentFragment();
  let index = 0;
  for (const word of text.split(/(\s+)/)) {
    if (!word) continue;
    if (/^\s+$/.test(word)) {
      frag.appendChild(document.createTextNode(" "));
      continue;
    }
    const wordSpan = document.createElement("span");
    wordSpan.className = "dfx-word";
    wordSpan.setAttribute("aria-hidden", "true");
    for (const char of word) {
      const charSpan = document.createElement("span");
      charSpan.className = "dfx-char";
      charSpan.textContent = char;
      charSpan.style.setProperty("--ci", String(index));
      wordSpan.appendChild(charSpan);
      index += 1;
    }
    frag.appendChild(wordSpan);
  }
  title.replaceChildren(frag);
  return () => {
    title.replaceChildren(document.createTextNode(text));
    title.removeAttribute("aria-label");
    delete title.dataset.dfxSplit;
  };
}

/* --- engine ----------------------------------------------------------------- */

export function DesktopFx() {
  const pathname = usePathname();
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 681px)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const cleanups: Array<() => void> = [];

    const syncFlag = () => {
      if (desktop.matches && !reduced.matches) {
        root.dataset.dfx = "on";
      } else {
        delete root.dataset.dfx;
      }
      if (desktop.matches && !reduced.matches && finePointer.matches) {
        root.dataset.dfxCursor = "on";
      } else {
        delete root.dataset.dfxCursor;
      }
    };
    syncFlag();
    desktop.addEventListener("change", syncFlag);
    finePointer.addEventListener("change", syncFlag);
    reduced.addEventListener("change", syncFlag);
    cleanups.push(() => {
      desktop.removeEventListener("change", syncFlag);
      finePointer.removeEventListener("change", syncFlag);
      reduced.removeEventListener("change", syncFlag);
    });

    // --- scroll reveals -----------------------------------------------------
    // One-shot: once a section has arrived it stays put. People are here to
    // book and go; content must never vanish and replay on the way back up.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("dfx-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    const observed: Element[] = [];
    for (const [effect, selector] of REVEAL_GROUPS) {
      const siblingIndex = new Map<Element | null, number>();
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        const parent = el.parentElement;
        const i = siblingIndex.get(parent) ?? 0;
        siblingIndex.set(parent, i + 1);
        el.dataset.dfxR = effect;
        el.style.setProperty("--dfx-i", String(i));
        if (effect === "deal-grid") {
          Array.from(el.children).forEach((child, idx) => {
            if (child instanceof HTMLElement) {
              child.style.setProperty("--dfx-i", String(idx));
            }
          });
        }
        observer.observe(el);
        observed.push(el);
      });
    }
    cleanups.push(() => {
      observer.disconnect();
      observed.forEach((el) => el.classList.remove("dfx-in"));
    });

    // --- hero letter cascade + ambient dust ---------------------------------
    if (!reduced.matches) {
      cleanups.push(splitHeroTitle());
      const hero = document.querySelector<HTMLElement>(HERO_SELECTOR);
      if (hero && desktop.matches) {
        cleanups.push(createDustScene(hero));
      }
    }

    // --- scroll progress hairline -------------------------------------------
    let progressRaf = 0;
    const paintProgress = () => {
      progressRaf = 0;
      const y = window.scrollY;
      document.querySelector(".site-header")?.classList.toggle("dfx-scrolled", y > 12);
      const bar = barRef.current;
      if (!bar) return;
      const max = root.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, y / max) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!desktop.matches) return;
      if (!progressRaf) progressRaf = requestAnimationFrame(paintProgress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    paintProgress();
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(progressRaf);
      document.querySelector(".site-header")?.classList.remove("dfx-scrolled");
    });

    // --- magnetic buttons ----------------------------------------------------
    const onMagneticMove = (event: PointerEvent) => {
      if (root.dataset.dfxCursor !== "on") return;
      const target = (event.target as Element | null)?.closest?.(MAGNETIC_SELECTOR);
      if (!(target instanceof HTMLElement)) return;
      const rect = target.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      // Subtle lean only: hero buttons sit 19px apart, so the pull is capped
      // well below that or neighbouring buttons collide.
      const magX = Math.max(-6, Math.min(6, dx * 0.1));
      const magY = Math.max(-4, Math.min(4, dy * 0.22));
      target.style.setProperty("--mag-x", `${magX.toFixed(1)}px`);
      target.style.setProperty("--mag-y", `${magY.toFixed(1)}px`);
    };
    const onMagneticOut = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest?.(MAGNETIC_SELECTOR);
      if (!(target instanceof HTMLElement)) return;
      if (target.contains(event.relatedTarget as Node | null)) return;
      target.style.removeProperty("--mag-x");
      target.style.removeProperty("--mag-y");
    };
    document.addEventListener("pointermove", onMagneticMove, { passive: true });
    document.addEventListener("pointerout", onMagneticOut, { passive: true });
    cleanups.push(() => {
      document.removeEventListener("pointermove", onMagneticMove);
      document.removeEventListener("pointerout", onMagneticOut);
    });

    // --- 3D tilt + glare cards ----------------------------------------------
    const onTiltMove = (event: PointerEvent) => {
      if (root.dataset.dfxCursor !== "on") return;
      const card = (event.target as Element | null)?.closest?.(TILT_SELECTOR);
      if (!(card instanceof HTMLElement)) return;
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--rx", `${((0.5 - py) * 7).toFixed(2)}deg`);
      card.style.setProperty("--ry", `${((px - 0.5) * 8).toFixed(2)}deg`);
      card.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
      card.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
      card.classList.add("dfx-tilting");
    };
    const onTiltOut = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest?.(TILT_SELECTOR);
      if (!(card instanceof HTMLElement)) return;
      if (card.contains(event.relatedTarget as Node | null)) return;
      card.classList.remove("dfx-tilting");
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
    };
    document.addEventListener("pointermove", onTiltMove, { passive: true });
    document.addEventListener("pointerout", onTiltOut, { passive: true });
    cleanups.push(() => {
      document.removeEventListener("pointermove", onTiltMove);
      document.removeEventListener("pointerout", onTiltOut);
    });

    // --- click shockwaves + booking flare -----------------------------------
    const onClickWave = (event: PointerEvent) => {
      if (root.dataset.dfxCursor !== "on") return;
      if (event.pointerType !== "mouse") return;
      const target = (event.target as Element | null)?.closest?.(
        INTERACTIVE_SELECTOR,
      );
      if (!target) return;
      const wave = document.createElement("span");
      wave.className = "dfx-wave";
      wave.setAttribute("aria-hidden", "true");
      wave.style.left = `${event.clientX}px`;
      wave.style.top = `${event.clientY}px`;
      document.body.appendChild(wave);
      wave.addEventListener("animationend", () => wave.remove(), { once: true });
    };
    const onBookingClick = (event: MouseEvent) => {
      if (root.dataset.dfx !== "on") return;
      const target = (event.target as Element | null)?.closest?.(BOOKING_SELECTOR);
      if (!target) return;
      window.dispatchEvent(
        new CustomEvent(FLARE_EVENT, {
          detail: { x: event.clientX, y: event.clientY },
        }),
      );
      const bar = barRef.current?.parentElement;
      if (bar) {
        bar.classList.remove("dfx-progress--flare");
        void bar.offsetWidth;
        bar.classList.add("dfx-progress--flare");
      }
    };
    document.addEventListener("pointerdown", onClickWave, { passive: true });
    document.addEventListener("click", onBookingClick, { passive: true });
    cleanups.push(() => {
      document.removeEventListener("pointerdown", onClickWave);
      document.removeEventListener("click", onBookingClick);
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return (
    <div className="dfx-progress" aria-hidden="true">
      <span ref={barRef} />
    </div>
  );
}
