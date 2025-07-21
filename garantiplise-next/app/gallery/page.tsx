import type { Metadata } from "next"
import Gallery from "@/components/Gallery"

export const metadata: Metadata = {
  title: "Галерия",
  description:
    "Разгледайте нашата галерия с реализирани проекти на плисе комарници и щори. Вижте как нашите продукти могат да трансформират вашия дом.",
  alternates: {
    canonical: "https://garantiplise.com/gallery",
  },
  openGraph: {
    title: "Галерия | Garanti Plise",
    description:
      "Разгледайте нашата галерия с реализирани проекти на плисе комарници и щори. Вижте как нашите продукти могат да трансформират вашия дом.",
    url: "https://garantiplise.com/gallery",
  },
}

export default function GalleryPage() {
  return <Gallery />
}
