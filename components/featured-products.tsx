import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Modern HUD Pack",
    price: 35.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    sales: 234,
    featured: true,
  },
  {
    id: 2,
    name: "Police UI Bundle",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    sales: 156,
    featured: true,
  },
  {
    id: 3,
    name: "Server Logo Pack",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    sales: 89,
    featured: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular graphic packs trusted by FiveM server owners worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-cyan-500">Featured</Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.sales} sales)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Badge variant="secondary">{product.sales}+ sold</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
