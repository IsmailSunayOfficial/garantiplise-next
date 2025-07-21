import type { MetadataRoute } from "next"
import { allProducts } from "@/components/productData"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://garantiplise.com"

  // Base pages
  const routes = ["", "/about", "/catalog", "/contacts", "/gallery"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }))

  // Product pages
  const productRoutes = allProducts.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  return [...routes, ...productRoutes]
}
