import type { Metadata } from "next"
import Product from "@/components/Product"
import { allProducts } from "@/components/productData"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = allProducts.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return {
      title: "Продукт не е намерен",
      description: "Съжаляваме, но търсеният от вас продукт не е намерен.",
    }
  }

  return {
    title: product.name,
    description: `${product.description} ${product.fullDescription.substring(0, 100)}...`,
    alternates: {
      canonical: `https://garantiplise.com/product/${id}`,
    },
    openGraph: {
      title: `${product.name} | Garanti Plise`,
      description: `${product.description} ${product.fullDescription.substring(0, 100)}...`,
      url: `https://garantiplise.com/product/${id}`,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  return <Product id={id} />
}
