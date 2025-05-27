"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ShoppingCart, Eye } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

const products = [
  {
    id: 1,
    name: "Realistic HUD Pack",
    price: 39.99,
    category: "hud",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    sales: 456,
    description: "Complete realistic HUD interface",
  },
  {
    id: 2,
    name: "Police MDT System",
    price: 59.99,
    category: "ui",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    sales: 234,
    description: "Professional police MDT interface",
  },
  {
    id: 3,
    name: "Custom Server Logos",
    price: 24.99,
    category: "logos",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    sales: 189,
    description: "Professional server branding pack",
  },
  {
    id: 4,
    name: "Racing HUD Bundle",
    price: 44.99,
    category: "hud",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    sales: 567,
    description: "Complete racing interface pack",
  },
  {
    id: 5,
    name: "Banking UI System",
    price: 49.99,
    category: "ui",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    sales: 123,
    description: "Modern banking interface design",
  },
  {
    id: 6,
    name: "Gang Territory UI",
    price: 34.99,
    category: "ui",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    sales: 789,
    description: "Gang management interface pack",
  },
]

export function ProductGrid() {
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const { addItem } = useCart()

  const filteredProducts = products.filter((product) => filter === "all" || product.category === filter)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return b.sales - a.sales
    }
  })

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">All Products</h2>
            <p className="text-muted-foreground">Browse our complete collection of FiveM graphics and UI elements</p>
          </div>

          <div className="flex gap-4">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="hud">HUD Packs</SelectItem>
                <SelectItem value="ui">UI Elements</SelectItem>
                <SelectItem value="logos">Server Logos</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                  </div>
                  <Badge className="absolute top-3 left-3 capitalize">{product.category}</Badge>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.sales} sales)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${product.price}</span>
                    <Button
                      size="sm"
                      onClick={() => addItem(product)}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
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
