import type { Metadata } from "next"
import Contact from "@/components/Contact"

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Свържете се с Garanti Plise за безплатна консултация и оферта за плисе комарници и щори. Телефон: +359 590 7441, адрес: гр. Разград, Южна промишлена зона.",
  alternates: {
    canonical: "https://garantiplise.com/contacts",
  },
  openGraph: {
    title: "Контакти | Garanti Plise",
    description:
      "Свържете се с Garanti Plise за безплатна консултация и оферта за плисе комарници и щори. Телефон: +359 590 7441, адрес: гр. Разград, Южна промишлена зона.",
    url: "https://garantiplise.com/contacts",
  },
}

export default function ContactPage() {
  return <Contact />
}
