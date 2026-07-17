"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { Navbar } from "@/components/layout/navbar";

export function PublicShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPrivateRoute = pathname.startsWith("/admin") || pathname.startsWith("/auth");

  if (isPrivateRoute) {
    return <main className="admin-shell">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
