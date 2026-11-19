import { describe, expect, it } from "vitest";
import { PRODUCTS, BRANDS, productsByCategory, findProduct } from "@/lib/products-data";

describe("Al-Raebi product lineup", () => {
  it("offers the requested six manufacturers without previous brands", () => {
    expect([...new Set(PRODUCTS.map((p) => p.brand))].sort()).toEqual(["ATESS", "Dyness", "GRASEN", "Luxpower", "Sungrow", "Trina Solar"]);
    expect(BRANDS).toHaveLength(6);
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
  it("lists exactly the twelve Trina Vertex panels from the uploaded datasheets", () => {
    expect(productsByCategory("panels").map((p) => p.power)).toEqual([
      "595 W", "600 W", "605 W", "610 W", "615 W", "620 W", "695 W", "700 W", "710 W", "720 W", "705 W", "715 W",
    ]);
    expect(productsByCategory("panels").every((p) => p.brand === "Trina Solar")).toBe(true);
    expect(findProduct("trina-vertex-n-700-725w")).toBeUndefined();
    expect(findProduct("huasun-n-type")).toBeUndefined();
  });
  it("includes all nine Dyness storage products from the official datasheets", () => {
    expect(productsByCategory("batteries").map((p) => p.id).sort()).toEqual([
      "dyness-dh200f", "dyness-dl50", "dyness-dl50c", "dyness-dl50x", "dyness-powerbox-g2", "dyness-powerbox-pro", "dyness-powerbrick", "dyness-powerrack-hv4f", "dyness-stack100",
    ]);
  });
  it("lists Dyness capacities as printed on the datasheets", () => {
    expect(findProduct("dyness-powerbrick")?.power).toBe("14.336 kWh");
    expect(findProduct("dyness-powerbox-g2")?.power).toBe("10.24 kWh");
    expect(findProduct("dyness-dh200f")?.power).toBe("215 kWh / 100 kW");
  });
  it("lists exactly the eleven Luxpower and ATESS hybrid products from the uploaded datasheets", () => {
    expect(productsByCategory("inverters").map((p) => p.model)).toEqual([
      "SNA 3K / SNA 4K / SNA 5K / SNA 6K", "SNA 12K", "GEN-LB-EU 7K / GEN-LB-EU 8K / GEN-LB-EU 10K", "GEN2-LB-EU 3K / 3.6K / 4K / 4.6K / 5K / 6K", "LXP-LB-EU 12K",
      "HPS30000TL", "HPS50000TL", "HPS150", "PCS1200HV / PCS1500HV", "RTF600 / RTF600A / RTF1200AHV", "EnerLog",
    ]);
    expect(productsByCategory("inverters").every((p) => p.brand === "Luxpower" || p.brand === "ATESS")).toBe(true);
  });
  it("lists hybrid power ratings as printed on the datasheets", () => {
    expect(findProduct("luxpower-gen-lb-eu-7-10k")?.power).toBe("7–10 kW");
    expect(findProduct("luxpower-lxp-lb-eu-12k")?.power).toBe("12 kW");
    expect(findProduct("atess-hps30000tl")?.power).toBe("30 kW");
    expect(findProduct("atess-hps50000tl")?.power).toBe("50 kW");
    expect(findProduct("atess-hps150")?.power).toBe("150 kW");
    expect(findProduct("luxpower-gen2-lb-eu-3-6k")?.power).toBe("3–6 kW");
    expect(findProduct("atess-hps30-50k")).toBeUndefined();
    expect(findProduct("atess-pcs1200-1500hv")?.power).toBe("1200–1500 kW");
  });
  it("lists exactly the nine Sungrow grid-tied products from the uploaded datasheets", () => {
    expect(productsByCategory("grid-inverters").map((p) => p.model)).toEqual(["SG25CX-P2", "SG30CX-P2", "SG33CX-P2", "SG36CX-P2", "SG40CX-P2", "SG50CX-P2", "SG125CX-P2", "SG150CX", "COM100E"]);
    expect(productsByCategory("grid-inverters").every((p) => p.brand === "Sungrow")).toBe(true);
  });
});
