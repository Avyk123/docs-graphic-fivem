"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, Menu, User, Search } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500" />
          <span className="text-xl font-bold">Doc's Graphic FiveM</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/products" className="text-sm font-medium hover:text-primary">
            All Products
          </Link>
          <Link href="/categories/hud" className="text-sm font-medium hover:text-primary">
            HUD Packs
          </Link>
          <Link href="/categories/ui" className="text-sm font-medium hover:text-primary">
            UI Elements
          </Link>
          <Link href="/categories/logos" className="text-sm font-medium hover:text-primary">
            Server Logos
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs">{itemCount}</Badge>
            )}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="/products" onClick={() => setIsOpen(false)}>
                  All Products
                </Link>
                <Link href="/categories/hud" onClick={() => setIsOpen(false)}>
                  HUD Packs
                </Link>
                <Link href="/categories/ui" onClick={() => setIsOpen(false)}>
                  UI Elements
                </Link>
                <Link href="/categories/logos" onClick={() => setIsOpen(false)}>
                  Server Logos
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
