import { createFileRoute, notFound } from "@tanstack/react-router";
import { findBrand } from "@/lib/products-data";
import { ManufacturerPage } from "@/components/manufacturer-page";

export const Route = createFileRoute("/brands/$brand")({
  loader: ({ params }) => {
    const brand = findBrand(params.brand);
    if (!brand) throw notFound();
    return brand;
  },
  head: ({ loaderData }) => {
    const title = `${loaderData?.brand ?? "العلامات التجارية"} | الراعبي للتجارة`;
    const description = loaderData?.tagline ?? "منتجات الطاقة وشواحن السيارات الكهربائية لدى الراعبي للتجارة.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] };
  },
  component: () => <ManufacturerPage brand={Route.useLoaderData()} />,
});
