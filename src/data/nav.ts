import type { NavLink } from "@/types";

export const publicNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
];

export const footerLinks: NavLink[] = [
  ...publicNavLinks,
  { label: "FAQ / Policies", href: "/faq-policies" },
];
