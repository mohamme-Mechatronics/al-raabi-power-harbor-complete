import { describe, expect, it } from "vitest";
import { PRODUCTS, BRANDS, productsByCategory, findProduct } from "@/lib/products-data";

describe("Al-Raebi product lineup", () => {
  it("offers the requested seven manufacturers without previous brands", () => {
    expect([...new Set(PRODUCTS.map((p) => p.brand))].sort()).toEqual(["ATESS", "Dyness", "GRASEN", "Huasun", "Luxpower", "Sungrow", "Trina Solar"]);
    expect(BRANDS).toHaveLength(7);
  });
  it("lists exactly the nine GRASEN chargers from the official datasheets", () => {
    expect(productsByCategory("ev-chargers").map((p) => p.id).sort()).toEqual([
      "grasen-3in1-combo", "grasen-ac-charger", "grasen-ccs2-gbt-80-200kw", "grasen-charging-module", "grasen-dc-240-420kw", "grasen-dc-60-200kw", "grasen-dcfc-30-60kw", "grasen-r-40-240kw", "grasen-r-80-200kw",
    ]);
  });
  it("lists GRASEN charger power ranges as printed on the datasheets", () => {
    expect(findProduct("grasen-ac-charger")?.power).toBe("7–22 kW");
    expect(findProduct("grasen-dc-240-420kw")?.power).toBe("240–420 kW");
    expect(findProduct("grasen-charging-module")?.power).toBe("15 / 20 / 30 kW");
  });
  it("includes Vertex N panels at 720W and 715W", () => {
    expect(findProduct("trina-vertex-n-720w")?.power).toBe("720 W");
    expect(findProduct("trina-vertex-n-715w")?.power).toBe("715 W");
  });
  it("includes all nine Dyness storage products from the official datasheets", () => {
    expect(productsByCategory("batteries").filter((p) => p.brand === "Dyness").map((p) => p.id).sort()).toEqual([
      "dyness-dh200f", "dyness-dl50", "dyness-dl50c", "dyness-dl50x", "dyness-powerbox-g2", "dyness-powerbox-pro", "dyness-powerbrick", "dyness-powerrack", "dyness-powerrack-hv4f", "dyness-stack100",
    ]);
  });
  it("lists Dyness capacities as printed on the datasheets", () => {
    expect(findProduct("dyness-powerbrick")?.power).toBe("14.336 kWh");
    expect(findProduct("dyness-powerbox-g2")?.power).toBe("10.24 kWh");
    expect(findProduct("dyness-dh200f")?.power).toBe("215 kWh / 100 kW");
  });
  it("includes Luxpower's requested SNA hybrid lines", () => {
    expect(productsByCategory("inverters").map((p) => p.id).sort()).toEqual(["luxpower-sna-12kw", "luxpower-sna3-6kw"]);
  });
  it("includes both requested Sungrow grid-tied models", () => {
    expect(productsByCategory("grid-inverters").filter((p) => p.brand === "Sungrow").map((p) => p.model).sort()).toEqual(["SG40CX-P2", "SG50CX-P2"]);
  });
});
