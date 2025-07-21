"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaArrowLeft, FaPhone, FaSearchPlus, FaSearchMinus } from "react-icons/fa"
import { allProducts } from "@/components/productData"

interface ProductProps {
  id: string
}

const Product = ({ id }: ProductProps) => {
  const [mainImage, setMainImage] = useState("")
  const [product, setProduct] = useState(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isImageLoading, setIsImageLoading] = useState(false)

  useEffect(() => {
    if (id) {
      const foundProduct = allProducts.find((p) => p.id === Number.parseInt(id))
      if (foundProduct) {
        setProduct(foundProduct)
        setMainImage(foundProduct.images[0])
        // Предварително зареждане на всички изображения
        foundProduct.images.forEach((img) => {
          const link = document.createElement("link")
          link.rel = "preload"
          link.as = "image"
          link.href = img
          document.head.appendChild(link)
        })
      }
    }
  }, [id])

  const handleImageChange = (img) => {
    setIsImageLoading(true)
    setMainImage(img)
    setIsZoomed(false)
    setZoomLevel(1)
  }

  const handleImageLoad = () => {
    setIsImageLoading(false)
  }

  const handleMouseMove = (e) => {
    if (!isZoomed) return

    const container = e.currentTarget
    const { left, top, width, height } = container.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    // Ограничаваме позицията между 0% и 100%
    const clampedX = Math.max(0, Math.min(100, x))
    const clampedY = Math.max(0, Math.min(100, y))

    container.style.backgroundPosition = `${clampedX}% ${clampedY}%`
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
    setZoomLevel(isZoomed ? 1 : 2)
  }

  const zoomIn = (e) => {
    e.stopPropagation()
    setZoomLevel((prev) => Math.min(prev + 0.5, 3))
    if (!isZoomed) setIsZoomed(true)
  }

  const zoomOut = (e) => {
    e.stopPropagation()
    if (zoomLevel <= 1) {
      setIsZoomed(false)
      setZoomLevel(1)
      return
    }
    setZoomLevel((prev) => Math.max(prev - 0.5, 1))
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-12">Зареждане...</div>
  }

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link
            href="/catalog"
            className="inline-flex items-center text-[#FB5FAB] hover:text-pink-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" aria-hidden="true" />
            Назад към каталога
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Галерия със снимки */}
            <div>
              <div
                className="relative h-[600px] w-full rounded-lg overflow-hidden mb-4 bg-gray-100 cursor-crosshair"
                onMouseMove={handleMouseMove}
                onClick={toggleZoom}
                role="button"
                aria-label={isZoomed ? "Намали изображението" : "Увеличи изображението"}
                tabIndex={0}
                style={
                  isZoomed
                    ? {
                        backgroundImage: `url(${mainImage})`,
                        backgroundSize: `${zoomLevel * 100}%`,
                        backgroundPosition: "50% 50%",
                        backgroundRepeat: "no-repeat",
                        cursor: "move",
                      }
                    : {}
                }
              >
                {/* Показваме Image компонента само когато НЕ е в zoom режим */}
                {!isZoomed && (
                  <Image
                    src={mainImage || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={600}
                    className={`w-full h-full object-contain transition-opacity duration-300 ${
                      isImageLoading ? "opacity-50" : "opacity-100"
                    }`}
                    onLoad={handleImageLoad}
                    onError={(e) => {
                      e.target.src = "/images/placeholder-product.jpg"
                      setIsImageLoading(false)
                    }}
                    priority
                  />
                )}

                {/* Zoom контроли */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button
                    onClick={zoomOut}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Намали изображението"
                    disabled={!isZoomed && zoomLevel <= 1}
                  >
                    <FaSearchMinus className="text-gray-700" aria-hidden="true" />
                  </button>
                  <button
                    onClick={zoomIn}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Увеличи изображението"
                  >
                    <FaSearchPlus className="text-gray-700" aria-hidden="true" />
                  </button>
                </div>

                {/* Индикатор за zoom */}
                {isZoomed && (
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    Zoom: {Math.round(zoomLevel * 100)}%
                  </div>
                )}
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`h-20 cursor-pointer border-2 rounded hover:border-[#FB5FAB] transition-colors ${
                      mainImage === img ? "border-[#FB5FAB]" : "border-gray-200"
                    }`}
                    onClick={() => handleImageChange(img)}
                    role="button"
                    aria-label={`Изображение ${index + 1} от ${product.name}`}
                    tabIndex={0}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} - вариант ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded"
                      onError={(e) => {
                        e.target.src = "/images/placeholder-product.jpg"
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Детайли за продукта */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

              <div className="mb-6">
                <p className="text-gray-700 text-lg">{product.description}</p>
                <p className="text-gray-600 mt-2">{product.fullDescription}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Цвят</h3>
                  <p className="text-gray-800">{product.color}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Рамка</h3>
                  <p className="text-gray-800">{product.frame}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Размери</h3>
                  <p className="text-gray-800">{product.size}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Материал</h3>
                  <p className="text-gray-800">{product.material}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Особености:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacts"
                  className="flex-1 flex justify-center items-center bg-[#FB5FAB] text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-700 transition-colors"
                >
                  Запитване за цена
                </Link>
                <a
                  href="tel:+3595907441"
                  className="flex items-center justify-center flex-1 bg-white text-[#FB5FAB] py-3 px-6 rounded-lg font-medium border border-[#FB5FAB] hover:bg-pink-50 transition-colors"
                >
                  <FaPhone className="mr-2" aria-hidden="true" />
                  Обадете се
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Допълнителна информация</h2>
          <div className="prose text-gray-600">
            <p>
              Всички наши плисе комарници се изработват по поръчка според вашите размери. Срокът на изработка е между 3
              и 7 работни дни.
            </p>
          </div>
        </div>
      </div>

      {/* Structured Data for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: product.name,
            image: product.images,
            description: product.description,
            brand: {
              "@type": "Brand",
              name: "Garanti Plise",
            },
            offers: {
              "@type": "Offer",
              url: `https://garantiplise.com/product/${product.id}`,
              priceCurrency: "BGN",
              priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                .toISOString()
                .split("T")[0],
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
            },
          }),
        }}
      />
    </main>
  )
}

export default Product
