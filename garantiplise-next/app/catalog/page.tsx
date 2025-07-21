import type { Metadata } from "next"
import Catalog from "@/components/Catalog"
import { Suspense } from "react" // Import Suspense

export const metadata: Metadata = {
  title: "Каталог",
  description:
    "Разгледайте нашия каталог с висококачествени плисе комарници за прозорци и врати. Различни цветове и размери, изработени по поръчка.",
  alternates: {
    canonical: "https://garantiplise.com/catalog",
  },
  openGraph: {
    title: "Каталог | Garanti Plise",
    description:
      "Разгледайте нашия каталог с висококачествени плисе комарници за прозорци и врати. Различни цветове и размери, изработени по поръчка.",
    url: "https://garantiplise.com/catalog",
  },
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div>Зареждане на каталог...</div>}>
      <Catalog />
    </Suspense>
  )
}
