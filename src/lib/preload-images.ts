// تحميل مسبق فوري للصور الخفيفة المستخدمة في الشاشات الأولى،
// حتى تظهر بطاقات نوع المشروع وبطاقات الخدمات بصورها بلا أي انتظار.
import { BRANDS } from "@/lib/products-data";
import residentialImageAsset from "@/assets/brand/alraebi-system-residential.webp.asset.json";
const residentialImage = residentialImageAsset.url;
import commercialImageAsset from "@/assets/brand/alraebi-system-commercial.webp.asset.json";
const commercialImage = commercialImageAsset.url;
import industrialImageAsset from "@/assets/brand/alraebi-system-industrial.webp.asset.json";
const industrialImage = industrialImageAsset.url;
import agricultureImageAsset from "@/assets/brand/alraebi-system-agriculture.webp.asset.json";
const agricultureImage = agricultureImageAsset.url;
import cardQuoteAsset from "@/assets/brand/alraebi-card-quote.webp.asset.json";
const cardQuote = cardQuoteAsset.url;
import cardEnergyAsset from "@/assets/brand/alraebi-card-energy.webp.asset.json";
const cardEnergy = cardEnergyAsset.url;
import cardSupportAsset from "@/assets/brand/alraebi-card-support.webp.asset.json";
const cardSupport = cardSupportAsset.url;
import cardProductsAsset from "@/assets/brand/alraebi-card-products.webp.asset.json";
const cardProducts = cardProductsAsset.url;
import actesLogoAsset from "@/assets/brand/alraebi-logo-full.png.asset.json";
const actesLogo = actesLogoAsset.url;
import homeHeroAsset from "@/assets/brand/alraebi-home-hero.webp.asset.json";
const homeHero = homeHeroAsset.url;
import startBgDesktopAsset from "@/assets/imported/src/assets/start-bg-desktop.webp.asset.json";
const startBgDesktop = startBgDesktopAsset.url;
import startBgMobileAsset from "@/assets/imported/src/assets/start-bg-mobile.webp.asset.json";
const startBgMobile = startBgMobileAsset.url;

// Only first-screen imagery is warmed. Product images load when their screen opens.
const IMAGES = [homeHero, startBgDesktop, startBgMobile, residentialImage,
  commercialImage, industrialImage, agricultureImage, cardQuote, cardEnergy,
  cardSupport, cardProducts, actesLogo, ...BRANDS.map((brand) => brand.logo)];
let done = false;

/** A failed optional image must never interrupt app startup. */
export function preloadAppImages() {
  if (done || typeof window === "undefined") return;
  done = true;
  for (const src of IMAGES) {
    const img = new Image();
    img.decoding = "async";
    img.onerror = () => {};
    img.src = src;
    void img.decode?.().catch(() => {});
  }
}
