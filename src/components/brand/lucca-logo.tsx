import Link from "next/link";
import { cn } from "@/lib/utils";

type LuccaLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function LuccaLogo({ variant = "header", className }: LuccaLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Lucca's Hair home"
      className={cn("lucca-logo-link", className)}
    >
      <span className={cn("lucca-logo", `lucca-logo--${variant}`)}>
        <span className="lucca-logo__text">
          <span className="lucca-logo__name">Lucca&apos;s Hair</span>
        </span>
      </span>
    </Link>
  );
}
