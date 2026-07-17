const redirectBase = "https://luccas-hair.local";

export function getSafeInternalRedirect(
  value: string | null,
  fallback = "/admin",
): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return fallback;
  }

  try {
    const url = new URL(value, redirectBase);

    if (url.origin !== redirectBase) {
      return fallback;
    }

    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return fallback;
  }
}
