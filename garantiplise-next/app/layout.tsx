import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import ScrollToTop from "@/components/ScrollToTop"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://garantiplise.com"),
  title: {
    default: "Garanti Plise | Плисе комарници и щори",
    template: "%s | Garanti Plise",
  },
  description:
    "Висококачествени плисе комарници и щори за прозорци и врати. Професионален монтаж и безплатна консултация в цяла България.",
  keywords: ["плисе комарници", "комарници", "щори", "плисе щори", "комарници за прозорци", "комарници за врати"],
  authors: [{ name: "Garanti Plise" }],
  creator: "Garanti Plise",
  publisher: "Garanti Plise",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://garantiplise.com",
    siteName: "Garanti Plise",
    title: "Garanti Plise | Плисе комарници и щори",
    description:
      "Висококачествени плисе комарници и щори за прозорци и врати. Професионален монтаж и безплатна консултация в цяла България.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Garanti Plise - Плисе комарници и щори",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: "https://garantiplise.com",
    languages: {
      "bg-BG": "https://garantiplise.com",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
