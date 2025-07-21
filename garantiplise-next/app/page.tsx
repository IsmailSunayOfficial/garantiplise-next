import type { Metadata } from "next"
import Home from "@/components/Home"

export const metadata: Metadata = {
  title: "Плисе комарници и щори | Garanti Plise",
  description:
    "Перфектна защита и комфорт за вашия дом с висококачествени плисе комарници и щори. Безплатна консултация и професионален монтаж.",
  alternates: {
    canonical: "https://garantiplise.com",
  },
}

export default function HomePage() {
  return <Home />
}
