export const DEFAULT_APP_URL = "https://al-power-harbor.lovable.app";

/** Only https web addresses may become the Android app's reference link. */
export function normalizeAppUrl(input: string): string | null {
  try {
    const url = new URL(String(input ?? "").trim());
    if (url.protocol !== "https:" || !url.hostname.includes(".")) return null;
    return url.origin + (url.pathname === "/" ? "" : url.pathname.replace(/\/$/, ""));
  } catch {
    return null;
  }
}
