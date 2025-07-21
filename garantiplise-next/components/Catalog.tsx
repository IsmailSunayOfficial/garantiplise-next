"use client"

import Link from "next/link"
import Image from "next/image"
import { windowProducts, doorProducts } from "@/components/productData"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const Catalog = () => {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("windows")
  const shutterProducts = []

  const activeProducts =
    activeTab === "windows" ? windowProducts : activeTab === "doors" ? doorProducts : shutterProducts

  // Preload images за активните продукти
  useEffect(() => {
    activeProducts.slice(0, 6).forEach((product) => {
      if (product.images[0]) {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = product.images[0]
        document.head.appendChild(link)
      }
    })
  }, [activeProducts])

  useEffect(() => {
    const tabFromQuery = searchParams.get("tab")
    if (tabFromQuery) {
      const validTabs = ["windows", "doors", "shutters"]
      if (validTabs.includes(tabFromQuery)) {
        setActiveTab(tabFromQuery)
      }
    }
  }, [searchParams])

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Каталог плисе</h1>
          <div className="w-24 h-1 bg-[#FB5FAB] mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="tablist">
            <button
              onClick={() => setActiveTab("windows")}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg focus:outline-none ${
                activeTab === "windows" ? "bg-[#FB5FAB] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              role="tab"
              aria-selected={activeTab === "windows"}
              aria-controls="windows-panel"
              id="windows-tab"
            >
              Комарници за прозорци (18 мм)
            </button>
            <button
              onClick={() => setActiveTab("doors")}
              className={`px-6 py-3 text-sm font-medium focus:outline-none ${
                activeTab === "doors" ? "bg-[#FB5FAB] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              role="tab"
              aria-selected={activeTab === "doors"}
              aria-controls="doors-panel"
              id="doors-tab"
            >
              Комарници за врати (28 мм)
            </button>
            <button
              onClick={() => setActiveTab("shutters")}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg focus:outline-none ${
                activeTab === "shutters" ? "bg-[#FB5FAB] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              role="tab"
              aria-selected={activeTab === "shutters"}
              aria-controls="shutters-panel"
              id="shutters-tab"
            >
              Щори
            </button>
          </div>
        </div>

        <div
          role="tabpanel"
          id={`${activeTab}-panel`}
          aria-labelledby={`${activeTab}-tab`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeProducts.length > 0 ? (
            activeProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={500}
                    className="w-full h-[500px] object-cover"
                    priority={activeProducts.indexOf(product) < 6}
                    loading={activeProducts.indexOf(product) < 6 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </Link>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    <Link href={`/product/${product.id}`} className="hover:text-[#FB5FAB]">
                      {product.name}
                    </Link>
                  </h2>
                  <div className="mb-3">
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-500 mt-1">
                      <span className="font-medium">Цвят:</span> {product.color}
                    </p>
                    <p className="text-gray-500">
                      <span className="font-medium">Рамка:</span> {product.frame}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/product/${product.id}`}
                      className="px-6 py-2 bg-[#FB5FAB] text-white font-medium rounded-lg hover:bg-pink-700 transition-colors text-center flex-1"
                    >
                      Виж повече
                    </Link>
                    <a
                      href="tel:+3595907441"
                      className="px-6 py-2 bg-white text-[#FB5FAB] font-medium rounded-lg border border-[#FB5FAB] hover:bg-pink-50 transition-colors text-center flex-1"
                    >
                      Запитване
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : activeTab === "shutters" ? (
            <div className="col-span-full">
              <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-2xl text-center flex items-center justify-center min-h-[500px]">
                <div>
                  <p className="text-gray-800 text-lg mb-4 mx-auto max-w-lg">
                    В момента на сайта не разполагаме със снимки на щори, но сме тук, за да ви помогнем! Свържете се с
                    нас и ще ви подпомогнем с избора на плисирани щори, подходящи за вашия дом. Очаквайте скоро каталог
                    с нашите щори!
                  </p>
                  <Link
                    href="/contacts"
                    className="px-6 py-2 bg-[#FB5FAB] text-white font-medium rounded-lg hover:bg-pink-700 transition-colors inline-block"
                  >
                    Свържете се с нас
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Structured Data for Product List */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "ItemList",
            itemListElement: activeProducts.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: product.name,
                image: product.images[0],
                description: product.description,
                url: `https://garantiplise.com/product/${product.id}`,
                brand: {
                  "@type": "Brand",
                  name: "Garanti Plise",
                },
              },
            })),
          }),
        }}
      />
    </section>
  )
}

export default Catalog
