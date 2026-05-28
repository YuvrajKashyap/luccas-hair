import type { NavLink } from "@/types";

export const publicNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Book", href: "/book" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavLink[] = [
  ...publicNavLinks,
  { label: "FAQ / Policies", href: "/faq-policies" },
];
