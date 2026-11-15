import { describe, expect, it } from "vitest";
import { PRODUCTS, BRANDS, productsByCategory, findProduct } from "@/lib/products-data";

describe("Al-Raebi product lineup", () => {
  it("offers the requested seven manufacturers without previous brands", () => {
    expect([...new Set(PRODUCTS.map((p) => p.brand))].sort()).toEqual(["ATESS", "Dyness", "GRASEN", "Huasun", "Luxpower", "Sungrow", "Trina Solar"]);
    expect(BRANDS).toHaveLength(7);
  });
  it("includes a 7kW home AC charger and DC charging up to 240kW", () => {
    expect(findProduct("grasen-ac-7kw")?.power).toBe("7 kW");
    expect(productsByCategory("ev-chargers").some((p) => p.power.includes("240"))).toBe(true);
  });
  it("includes Vertex N panels at 720W and 715W", () => {
    expect(findProduct("trina-vertex-n-720w")?.power).toBe("720 W");
    expect(findProduct("trina-vertex-n-715w")?.power).toBe("715 W");
  });
  it("includes Dyness Stack100 and PowerRack storage", () => {
    expect(productsByCategory("batteries").filter((p) => p.brand === "Dyness").map((p) => p.id).sort()).toEqual(["dyness-powerrack", "dyness-stack100"]);
  });
  it("includes Luxpower's requested SNA hybrid lines", () => {
    expect(productsByCategory("inverters").map((p) => p.id).sort()).toEqual(["luxpower-sna-12kw", "luxpower-sna3-6kw"]);
  });
  it("includes both requested Sungrow grid-tied models", () => {
    expect(productsByCategory("grid-inverters").filter((p) => p.brand === "Sungrow").map((p) => p.model).sort()).toEqual(["SG40CX-P2", "SG50CX-P2"]);
  });
});
