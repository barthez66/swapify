import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function CategorySection() {
  const categories = [
    { name: "Femmes", image: "/placeholder.svg?height=120&width=120&text=Femmes", href: "/women" },
    { name: "Hommes", image: "/placeholder.svg?height=120&width=120&text=Hommes", href: "/men" },
    { name: "Enfants", image: "/placeholder.svg?height=120&width=120&text=Enfants", href: "/kids" },
    { name: "Maison", image: "/placeholder.svg?height=120&width=120&text=Maison", href: "/home" },
    { name: "Beauté", image: "/placeholder.svg?height=120&width=120&text=Beauté", href: "/beauty" },
    { name: "Sport", image: "/placeholder.svg?height=120&width=120&text=Sport", href: "/sport" },
  ]

  return (
    <section className="py-8 px-4 md:px-6 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Catégories populaires</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center p-4">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="rounded-full h-16 w-16 md:h-24 md:w-24 mb-2"
                    />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

