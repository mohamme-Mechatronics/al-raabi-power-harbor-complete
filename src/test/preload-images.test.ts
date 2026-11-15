import { afterEach, expect, it, vi } from "vitest";

afterEach(() => vi.unstubAllGlobals());
it("warms only current first-screen media and tolerates an image failure", async () => {
  vi.resetModules();
  const requested: string[] = [];
  vi.stubGlobal("Image", class {
    decoding = "";
    onerror = null;
    set src(value: string) { requested.push(value); }
    decode() { return Promise.reject(new Error("image unavailable")); }
  });
  const { preloadAppImages } = await import("@/lib/preload-images");
  expect(() => preloadAppImages()).not.toThrow();
  await Promise.resolve();
  expect(requested.some((src) => src.endsWith("alraebi-home-hero.webp"))).toBe(true);
  expect(requested.some((src) => src.includes("/media/items/") || src.includes("/videos/"))).toBe(false);
  const count = requested.length;
  preloadAppImages();
  expect(requested).toHaveLength(count);
});
