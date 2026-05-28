import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const baseButtonClasses =
  "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent text-background hover:bg-[#d4ad6d] focus-visible:outline-accent",
  secondary:
    "border border-border bg-card text-foreground hover:border-accent hover:text-accent focus-visible:outline-accent",
  ghost:
    "border border-transparent text-muted hover:text-foreground focus-visible:outline-accent",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function buttonClassName({
  variant = "primary",
  className,
}: {
  variant?: ButtonVariant;
  className?: string;
} = {}): string {
  return cn(baseButtonClasses, variantClasses[variant], className);
}

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonClassName({ variant, className })} {...props} />
  );
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href} className={buttonClassName({ variant, className })} {...props}>
      {children}
    </Link>
  );
}
