import { ProductGrid } from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">All Graphics</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of premium FiveM graphics, HUD packs, and UI elements
          </p>
        </div>
        <ProductGrid />
      </div>
    </div>
  )
}
