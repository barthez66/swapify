import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  id: number
}

export function ProductCard({ id }: ProductCardProps) {
  // Simuler des données de produit différentes basées sur l'ID
  const sizes = ["XS", "S", "M", "L", "XL"]
  const brands = ["Zara", "H&M", "Nike", "Adidas", "Mango"]
  const prices = [12.99, 15.5, 24.99, 9.99, 19.99]
  const conditions = ["Neuf", "Très bon état", "Bon état", "Satisfaisant"]

  const index = (id - 1) % 5
  const price = prices[index]
  const brand = brands[index]
  const size = sizes[index]
  const condition = conditions[id % 4]
  const isNew = id % 7 === 0
  const discount = id % 5 === 0 ? 20 : 0

  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <Link href={`/product/${id}`}>
          <img
            src={`/placeholder.svg?height=300&width=250&text=Article+${id}`}
            alt={`Article ${id}`}
            className="object-cover w-full aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Ajouter aux favoris</span>
        </Button>
        {isNew && <Badge className="absolute top-2 left-2 bg-teal-500">Nouveau</Badge>}
        {discount > 0 && <Badge className="absolute bottom-2 left-2 bg-red-500">-{discount}%</Badge>}
      </div>
      <CardContent className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-sm truncate">{brand}</h3>
            <p className="text-xs text-muted-foreground truncate">
              Taille {size} • {condition}
            </p>
          </div>
          <p className="font-bold text-sm">{price.toFixed(2)} €</p>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <img
            src="/placeholder.svg?height=20&width=20&text=U"
            alt="Avatar utilisateur"
            className="h-5 w-5 rounded-full"
          />
          <span>Utilisateur{id}</span>
          <span className="ml-auto">⭐ 4.{id % 10}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

