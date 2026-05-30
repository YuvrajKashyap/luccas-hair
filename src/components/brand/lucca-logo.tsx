import Image from "next/image";
import Link from "next/link";
import logoSource from "../../../assets/mockups/home/luccas-logo-footer.png";
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
        {variant === "footer" ? (
          <Image
            src={logoSource}
            alt=""
            aria-hidden="true"
            className="lucca-logo__asset"
            loading="eager"
            sizes="(max-width: 680px) 172px, 216px"
            unoptimized
          />
        ) : (
          <span className="lucca-logo__text">
            <span className="lucca-logo__name">Lucca&apos;s Hair</span>
            <span className="lucca-logo__est">Est. 2024</span>
          </span>
        )}
      </span>
    </Link>
  );
}
