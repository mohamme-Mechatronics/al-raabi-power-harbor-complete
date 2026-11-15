import { describe, it, expect } from "vitest";
import { normalizeAppUrl } from "@/lib/app-url";
describe("app url", () => {
  it("accepts https", () => expect(normalizeAppUrl("https://x.lovable.app/")).toBe("https://x.lovable.app"));
  it("rejects http", () => expect(normalizeAppUrl("http://x.com")).toBeNull());
  it("rejects junk", () => expect(normalizeAppUrl("abc")).toBeNull());
});
