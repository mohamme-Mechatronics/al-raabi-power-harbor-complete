import { createFileRoute, Link } from "@tanstack/react-router";
import logoWhiteAsset from "@/assets/brand/alraebi-logo-white.png.asset.json";
import appIconAsset from "@/assets/brand/icon-512.png.asset.json";
import androidApkAsset from "@/assets/brand/alraebi-android.apk.asset.json";

const logoWhite = logoWhiteAsset.url;
const appIcon = appIconAsset.url;
const androidApk = androidApkAsset.url;

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "تحميل تطبيق الراعبي — ويندوز وأندرويد" },
      {
        name: "description",
        content:
          "حمّل تطبيق الراعبي للتجارة: نسخة ويندوز خفيفة بدون تثبيت، ونسخة أندرويد تفتح الرابط المعتمد من الإدارة.",
      },
      { property: "og:title", content: "تحميل تطبيق الراعبي — ويندوز وأندرويد" },
      {
        property: "og:description",
        content:
          "تطبيق سطح مكتب لويندوز 10 و11 بحجم أقل من 2 ميغابايت، وتطبيق أندرويد يفتح رابط الراعبي المعتمد.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DownloadsPage,
});

const FEATURES = [
  "حجم خفيف جداً — لا يحتاج تثبيت ولا صلاحيات نظام.",
  "يعمل على ويندوز 10 و11، ويتحدّث تلقائياً بآخر نسخة.",
  "الفيديوهات والكتالوجات تُفتح عبر الإنترنت عند الحاجة.",
];

function DownloadsPage() {
  return (
    <div dir="rtl" className="flex min-h-screen flex-col bg-background text-foreground">
      {/* شريط علوي بهوية الشركة */}
      <header className="bg-navy px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4">
          <img
            src={logoWhite}
            alt="الراعبي للتجارة — Al-Raebi For Trading"
            className="h-12 w-auto object-contain sm:h-14"
          />
          <Link
            to="/"
            className="rounded-full border border-skyline-foreground/30 px-4 py-2 text-xs font-bold text-skyline-foreground transition hover:bg-skyline-foreground/10 sm:text-sm"
          >
            فتح التطبيق
          </Link>
        </div>
      </header>

      {/* المحتوى: تعريف ثم بطاقتا تحميل */}
      <main className="flex flex-1 flex-col justify-center px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-5xl">
          <section className="text-center">
            <h1 className="text-2xl font-black leading-tight text-navy sm:text-3xl lg:text-4xl">
              تطبيقات الراعبي
            </h1>
            <p className="mt-2 text-sm font-semibold text-muted-foreground sm:text-base">
              نسخة لويندوز ونسخة للأندرويد — كلتاهما من الراعبي للتجارة
            </p>
            <ul className="mx-auto mt-5 grid max-w-3xl gap-2 text-sm leading-6 text-muted-foreground sm:text-base lg:grid-cols-3 lg:gap-4">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start justify-center gap-2 lg:justify-start">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-energy" />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {/* ويندوز */}
            <section className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-7">
              <div className="flex items-center gap-4">
                <img
                  src={appIcon}
                  alt="أيقونة تطبيق الراعبي"
                  className="size-14 rounded-2xl object-contain sm:size-16"
                />
                <div className="min-w-0">
                  <p className="text-sm font-black text-navy sm:text-base">Al-Raebi Desktop</p>
                  <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                    ويندوز 10 و11 — 64 بت
                  </p>
                </div>
              </div>

              <a
                href="/downloads/ACTES-windows-x64.zip"
                download
                className="mt-6 block w-full rounded-xl bg-energy py-4 text-center text-base font-black text-primary-foreground transition hover:opacity-90 sm:text-lg"
              >
                تحميل لويندوز
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
                فُكّ ضغط الملف ثم شغّل <span className="font-mono">Al-Raebi.exe</span>
              </p>
            </section>

            {/* أندرويد */}
            <section className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-7">
              <div className="flex items-center gap-4">
                <img
                  src={appIcon}
                  alt="أيقونة تطبيق الراعبي للأندرويد"
                  className="size-14 rounded-2xl object-contain sm:size-16"
                />
                <div className="min-w-0">
                  <p className="text-sm font-black text-navy sm:text-base">Al-Raebi Android</p>
                  <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                    أندرويد 5.0 وما فوق
                  </p>
                </div>
              </div>

              <a
                href={androidApk}
                download
                className="mt-6 block w-full rounded-xl bg-energy py-4 text-center text-base font-black text-primary-foreground transition hover:opacity-90 sm:text-lg"
              >
                تحميل للأندرويد
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
                بعد التحميل افتح الملف واسمح بالتثبيت من هذا المصدر. التطبيق يفتح الرابط الذي
                تعتمده الإدارة.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-5 py-4 text-center text-[11px] font-bold text-muted-foreground sm:px-8">
        معاً نحو طاقة مستدامة — جميع الحقوق محفوظة © 2026 الراعبي للتجارة
      </footer>
    </div>
  );
}
