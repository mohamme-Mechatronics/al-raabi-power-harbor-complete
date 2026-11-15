import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRANDS, productsByBrand, type Brand } from "@/lib/products-data";
import { BrandProductDetail } from "@/components/brand-product-detail";
import companyLogo from "@/assets/brand/alraebi-logo-full.png.asset.json";

export function ManufacturerPage({ brand }: { brand: Brand }) {
  const products = productsByBrand(brand.brand);
  const [selected, setSelected] = useState<string | null>(null);
  const product = products.find((p) => p.id === selected);
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link to="/"><img src={companyLogo.url} alt="الراعبي للتجارة" className="h-12 w-auto max-w-48 object-contain" /></Link>
          <Button variant="outline" asChild><Link to="/"><ArrowRight className="size-4" />الرئيسية</Link></Button>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <img src={brand.logo} alt={brand.brand} className="mb-7 h-12 max-w-64 object-contain" />
        <h1 className="text-4xl font-bold sm:text-5xl">{brand.brand} <span className="text-xl text-muted-foreground">{brand.nameAr}</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{brand.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild><a href="#products">المنتجات<ArrowRight className="size-4 rotate-180" /></a></Button>
          <Button variant="outline" asChild><a href={brand.website} target="_blank" rel="noopener noreferrer">موقع المصنّع<ArrowUpRight className="size-4" /></a></Button>
        </div>
      </section>
      <section id="products" className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="mb-6 text-2xl font-bold">منتجات {brand.nameAr}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.id} className="overflow-hidden rounded-lg border border-border bg-card">
                <Button variant="ghost" onClick={() => setSelected(p.id)} className="h-auto w-full rounded-none p-0" aria-label={p.name}>
                  <img src={p.image} alt={p.name} className="aspect-square w-full object-contain p-5" />
                </Button>
                <div className="border-t border-border p-5">
                  <p dir="ltr" className="text-right text-sm font-semibold text-primary">{p.power}</p>
                  <h3 className="mt-2 text-lg font-bold">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <Button onClick={() => setSelected(p.id)}>المواصفات<ArrowRight className="size-4 rotate-180" /></Button>
                    {p.files[0] && <Button variant="outline" size="icon" asChild><a href={p.files[0].url} target="_blank" rel="noopener noreferrer" title="الكتالوج الرسمي" aria-label="الكتالوج الرسمي"><Download className="size-4" /></a></Button>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">عن {brand.nameAr}</h2>
        <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{brand.about}</p>
        <dl className="mt-6 flex flex-wrap gap-10">
          {brand.founded && <div><dt className="text-sm text-muted-foreground">سنة التأسيس</dt><dd className="mt-1 font-bold">{brand.founded}</dd></div>}
          {brand.hq && <div><dt className="text-sm text-muted-foreground">المقر</dt><dd className="mt-1 font-bold">{brand.hq}</dd></div>}
        </dl>
      </section>
      <footer className="border-t border-border px-4 py-6">
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-4" aria-label="العلامات التجارية">{BRANDS.map((b) => <Link key={b.slug} to="/brands/$brand" params={{ brand: b.slug }} className="text-sm text-muted-foreground hover:text-primary">{b.brand}</Link>)}</nav>
        <p className="mx-auto mt-5 max-w-6xl text-sm text-muted-foreground">الراعبي للتجارة © 2026</p>
      </footer>
      {product && <BrandProductDetail product={product} accent={brand.accent} onClose={() => setSelected(null)} />}
    </main>
  );
}
