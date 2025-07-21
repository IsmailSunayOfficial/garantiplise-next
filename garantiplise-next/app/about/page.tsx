import type { Metadata } from "next"
import About from "@/components/About"

export const metadata: Metadata = {
  title: "За нас",
  description:
    "Garanti Plise е основана с ясната цел да внесе иновация и стил в ежедневието на българските домакинства чрез висококачествени плисе комарници и щори.",
  alternates: {
    canonical: "https://garantiplise.com/about",
  },
  openGraph: {
    title: "За нас | Garanti Plise",
    description:
      "Garanti Plise е основана с ясната цел да внесе иновация и стил в ежедневието на българските домакинства чрез висококачествени плисе комарници и щори.",
    url: "https://garantiplise.com/about",
  },
}

export default function AboutPage() {
  return <About />
}
