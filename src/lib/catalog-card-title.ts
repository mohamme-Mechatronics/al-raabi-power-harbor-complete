// عنوان بطاقة «كاتلوج الموديل» بصيغة مبسطة للعميل:
// كاتلوج الموديل (لوح سنتك 720W) — النوع + الماركة بالعربية + القدرة أو السعة فقط،
// بدل رموز الموديل الطويلة كما هي في الكتالوج الرسمي.

type TitleProduct = { brand: string; name: string; power: string; category: string };

const BRAND_AR: Array<[RegExp, string]> = [
  [/grasen/i, "جراسين"],
  [/trina/i, "ترينا سولار"],
  [/huasun/i, "هواسن"],
  [/dyness/i, "داينس"],
  [/lux\s*power/i, "لاكس باور"],
  [/sungrow/i, "سنجرو"],
  [/atess/i, "أتيس"],
];

const BRAND_EN: Array<[RegExp, string]> = [
  [/grasen/i, "GRASEN"],
  [/trina/i, "Trina Solar"],
  [/huasun/i, "Huasun"],
  [/dyness/i, "Dyness"],
  [/lux\s*power/i, "Luxpower"],
  [/sungrow/i, "Sungrow"],
  [/atess/i, "ATESS"],
];

const KIND_AR: Record<string, string> = { "ev-chargers": "شاحن", panels: "لوح", inverters: "إنفرتر هجين", "grid-inverters": "إنفرتر شبكة", batteries: "بطارية" };
const KIND_EN: Record<string, string> = { "ev-chargers": "EV Charger", panels: "Panel", inverters: "Hybrid Inverter", "grid-inverters": "On-Grid Inverter", batteries: "Battery" };

function brandAr(brand: string) {
  return BRAND_AR.find(([re]) => re.test(brand))?.[1] ?? brand;
}

function brandEn(brand: string) {
  return BRAND_EN.find(([re]) => re.test(brand))?.[1] ?? brand;
}

/** القدرة أو السعة بصيغة قصيرة: 720W، 3–6kW، 100Ah. */
function shortRating(p: TitleProduct) {
  if (p.category === "storage") {
    const kwh = p.power.match(/([\d.]+\s*kWh)/i);
    if (kwh?.[1]) return kwh[1].replace(/\s+/g, "");
  }
  if (p.category === "batteries") {
    const ah = p.name.match(/([\d.]+\s*Ah)/i);
    if (ah?.[1]) return ah[1].replace(/\s+/g, "");
  }
  return p.power.replace(/\s+/g, "").replace(/[-–—]/g, "–");
}

/** عنوان البطاقة العربية: كاتلوج الموديل (لوح سنتك 720W) */
export function catalogCardTitleAr(p: TitleProduct) {
  const kind = KIND_AR[p.category] ?? "";
  return `كاتلوج الموديل (${[kind, brandAr(p.brand), shortRating(p)].filter(Boolean).join(" ")})`;
}

/** عنوان البطاقة الإنجليزية: Model Datasheet (Suntech Panel 720W) */
export function catalogCardTitleEn(p: TitleProduct) {
  const kind = KIND_EN[p.category] ?? "";
  return `Model Datasheet (${[brandEn(p.brand), kind, shortRating(p)].filter(Boolean).join(" ")})`;
}
