import type { SVGProps } from "react";

export type IconName =
  | "calendar"
  | "cart"
  | "scissors"
  | "razor"
  | "beard"
  | "cut-beard"
  | "bottle"
  | "profile"
  | "seal"
  | "leaf-drop"
  | "gentleman"
  | "map-pin"
  | "clock"
  | "phone"
  | "mail"
  | "message"
  | "globe"
  | "instagram"
  | "facebook"
  | "square"
  | "x-circle"
  | "credit-card"
  | "shield"
  | "arrow-right";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  title?: string;
  strokeWidth?: number;
};

export function Icon({ name, title, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      vectorEffect="non-scaling-stroke"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {renderIcon(name)}
    </svg>
  );
}

function renderIcon(name: IconName) {
  switch (name) {
    case "calendar":
      return (
        <>
          <rect x="4" y="5" width="16" height="15" rx="1.5" />
          <path d="M8 3v4M16 3v4M4 9h16M8 13h3M8 16h6" />
        </>
      );
    case "cart":
      return (
        <>
          <path d="M5 5h2l1.7 10.2h9.6L20 8H8" />
          <path d="M9.5 19.2h.1M17.5 19.2h.1" />
          <circle cx="9.5" cy="19.2" r="1.2" />
          <circle cx="17.5" cy="19.2" r="1.2" />
        </>
      );
    case "scissors":
      return (
        <>
          <circle cx="6" cy="17" r="2.4" />
          <circle cx="6" cy="7" r="2.4" />
          <path d="M8 8.5 20 18M8 15.5 20 6" />
        </>
      );
    case "razor":
      return (
        <>
          <path d="M9 3h8l1 5-9.5 12H4.5L8 8Z" />
          <path d="M8 8h10M6.5 16.2l4.8 3.8M10.5 6h3.8" />
        </>
      );
    case "beard":
      return (
        <>
          <path d="M7 6c0 8 1.8 13 5 13s5-5 5-13" />
          <path d="M7 7c1.5 2.3 3 3.3 5 3.3S15.5 9.3 17 7" />
          <path d="M9 4.5c.9 1.1 1.8 1.6 3 1.6s2.1-.5 3-1.6" />
          <path d="M10 15c.7.5 1.3.8 2 .8s1.3-.3 2-.8" />
        </>
      );
    case "cut-beard":
      return (
        <>
          <circle cx="5" cy="17" r="1.7" />
          <circle cx="5" cy="8" r="1.7" />
          <path d="m6.4 9.3 6.2 5M6.4 15.7 12.6 10" />
          <path d="M16 4v16M19 5v14M16 7h3M16 10h3M16 13h3M16 16h3" />
        </>
      );
    case "bottle":
      return (
        <>
          <path d="M9 8h6l1.3 2.2V20H7.7V10.2Z" />
          <path d="M10 4h4v4h-4zM9 13h6" />
        </>
      );
    case "profile":
      return (
        <>
          <path d="M5 19c.6-3.5 3.1-5.3 7-5.3s6.4 1.8 7 5.3" />
          <path d="M7 8c1-2.5 2.7-3.8 5-3.8S16 5.5 17 8" />
          <path d="M8 8c.4 3.1 1.8 4.8 4 4.8s3.6-1.7 4-4.8" />
          <path d="M4 19h16" />
        </>
      );
    case "seal":
      return (
        <>
          <path d="m12 2.8 2 2.1 2.9-.4.5 2.8 2.5 1.4-1.3 2.6 1.3 2.6-2.5 1.4-.5 2.8-2.9-.4-2 2.1-2-2.1-2.9.4-.5-2.8-2.5-1.4 1.3-2.6-1.3-2.6 2.5-1.4.5-2.8 2.9.4Z" />
          <circle cx="12" cy="11.3" r="3.8" />
          <path d="M10.6 11.4h2.8M12 10v2.8" />
        </>
      );
    case "leaf-drop":
      return (
        <>
          <path d="M12 3s4 4.3 4 8a4 4 0 0 1-8 0c0-3.7 4-8 4-8Z" />
          <path d="M5 14c3.6-.2 6.2 1.4 7 5.4-3.8.2-6.2-1.7-7-5.4Z" />
          <path d="M19 14c-3.6-.2-6.2 1.4-7 5.4 3.8.2 6.2-1.7 7-5.4Z" />
        </>
      );
    case "gentleman":
      return (
        <>
          <path d="M8 19c.6-2.9 2-4.4 4-4.4s3.4 1.5 4 4.4" />
          <path d="M8.5 9.2c.5 2.7 1.7 4.1 3.5 4.1s3-1.4 3.5-4.1" />
          <path d="M7.8 8.4c.8-2.6 2.2-3.9 4.2-3.9s3.4 1.3 4.2 3.9" />
          <path d="M9.3 6.2c1.8.9 3.6.9 5.4 0M10 20.8h4" />
        </>
      );
    case "map-pin":
      return (
        <>
          <path d="M19 10c0 5.2-7 11-7 11S5 15.2 5 10a7 7 0 0 1 14 0Z" />
          <circle cx="12" cy="10" r="2.4" />
        </>
      );
    case "clock":
      return (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3.2 2" />
        </>
      );
    case "phone":
      return (
        <>
          <path d="M7 4.5 9.8 4l1.5 4-1.8 1.3a13 13 0 0 0 5.2 5.2l1.3-1.8 4 1.5-.5 2.8c-.2 1.1-1.2 1.8-2.3 1.6C10.8 17.6 6.4 13.2 5.4 6.8 5.2 5.7 5.9 4.7 7 4.5Z" />
        </>
      );
    case "mail":
      return (
        <>
          <rect x="4" y="6" width="16" height="12" rx="1.4" />
          <path d="m5 7.5 7 5.5 7-5.5" />
        </>
      );
    case "message":
      return (
        <>
          <path d="M5 6.5h14v9H9l-4 3Z" />
          <path d="M8.5 10h7M8.5 13h4.5" />
        </>
      );
    case "globe":
      return (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.8 12h16.4M12 3.5c2.2 2.2 3.2 5 3.2 8.5s-1 6.3-3.2 8.5M12 3.5C9.8 5.7 8.8 8.5 8.8 12s1 6.3 3.2 8.5" />
        </>
      );
    case "instagram":
      return (
        <>
          <rect x="5" y="5" width="14" height="14" rx="4" />
          <circle cx="12" cy="12" r="3.1" />
          <path d="M16.7 7.4h.1" />
        </>
      );
    case "facebook":
      return (
        <path
          d="M14 8.3h2.1V5h-2.7c-3 0-4.4 1.8-4.4 4.5v2H6.7V15H9v6h3.6v-6h2.8l.5-3.5h-3.3V9.8c0-1 .4-1.5 1.4-1.5Z"
          fill="currentColor"
          stroke="none"
        />
      );
    case "square":
      return <rect x="7" y="7" width="10" height="10" rx="1.2" />;
    case "x-circle":
      return (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m9 9 6 6M15 9l-6 6" />
        </>
      );
    case "credit-card":
      return (
        <>
          <rect x="3.8" y="6.5" width="16.4" height="11" rx="1.4" />
          <path d="M3.8 10h16.4M7 14.2h4.2" />
        </>
      );
    case "shield":
      return (
        <>
          <path d="M12 3.8 19 6.4v5.2c0 4.4-2.8 7.4-7 8.6-4.2-1.2-7-4.2-7-8.6V6.4Z" />
          <path d="m9.5 12 1.7 1.7 3.5-3.8" />
        </>
      );
    case "arrow-right":
      return (
        <>
          <path d="M5 12h13" />
          <path d="m13 6 6 6-6 6" />
        </>
      );
  }
}
