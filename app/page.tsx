import { ProductGrid } from "@/components/product-grid"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturedProducts />
      <ProductGrid />
    </div>
  )
}
