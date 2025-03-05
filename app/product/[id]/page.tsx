import Link from "next/link"
import { ArrowLeft, Heart, Share2, ShieldCheck, Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { WalletConnect } from "@/components/wallet-connect"
import { PaymentModal } from "@/components/payment-modal"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const id = Number.parseInt(params.id)

  // Simuler des données de produit différentes basées sur l'ID
  const sizes = ["XS", "S", "M", "L", "XL"]
  const brands = ["Zara", "H&M", "Nike", "Adidas", "Mango"]
  const prices = [12.99, 15.5, 24.99, 9.99, 19.99]
  const conditions = ["Neuf", "Très bon état", "Bon état", "Satisfaisant"]
  const colors = ["Noir", "Blanc", "Bleu", "Rouge", "Vert"]

  const index = (id - 1) % 5
  const price = prices[index]
  const brand = brands[index]
  const size = sizes[index]
  const condition = conditions[id % 4]
  const color = colors[id % 5]
  const isNew = id % 7 === 0

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex items-center h-16 px-4 md:px-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Retour</span>
            </Link>
          </Button>
          <div className="ml-auto flex items-center gap-2">
            <WalletConnect />
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Partager</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Ajouter aux favoris</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-8 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={`/placeholder.svg?height=600&width=600&text=Article+${id}`}
                  alt={`Article ${id}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((img) => (
                  <div key={img} className="aspect-square overflow-hidden rounded-md">
                    <img
                      src={`/placeholder.svg?height=150&width=150&text=Vue+${img}`}
                      alt={`Vue ${img}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">
                    {brand} - T-shirt {color}
                  </h1>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold">{price.toFixed(2)} €</span>
                    <span className="text-sm text-muted-foreground">≈ 0.000{Math.floor(price * 19)} BTC</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline">{size}</Badge>
                  <Badge variant="outline">{color}</Badge>
                  <Badge variant={isNew ? "default" : "outline"} className={isNew ? "bg-teal-500" : ""}>
                    {condition}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=50&width=50&text=U"
                    alt="Avatar utilisateur"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">Utilisateur{id}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>⭐ 4.{id % 10} • 42 ventes</span>
                    </div>
                  </div>
                  <Button variant="outline" className="ml-auto">
                    Voir profil
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Description</h3>
                  <p className="text-sm text-muted-foreground">
                    T-shirt {brand} en {color.toLowerCase()}, taille {size}. {condition}. Porté seulement quelques fois,
                    en parfait état. Matière 100% coton, très confortable. N'hésitez pas à me contacter pour plus
                    d'informations.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Détails</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Marque: {brand}</li>
                    <li>• Taille: {size}</li>
                    <li>• Couleur: {color}</li>
                    <li>• État: {condition}</li>
                    <li>• Matière: Coton</li>
                    <li>• Ajouté le: {new Date().toLocaleDateString()}</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Paiement</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bitcoin className="h-4 w-4" />
                    <span>Paiement en Bitcoin uniquement</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Protection acheteur</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Remboursement si l'article ne correspond pas à la description</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <PaymentModal price={price} />
                <Button size="lg" variant="outline" asChild>
                  <Link href={`/make-offer/${id}`}>Faire une offre</Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link href={`/messages`}>Contacter le vendeur</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="similar">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="similar">Articles similaires</TabsTrigger>
                <TabsTrigger value="seller">Autres articles du vendeur</TabsTrigger>
              </TabsList>
              <TabsContent value="similar" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[11, 12, 13, 14, 15].map((item) => (
                    <ProductCard key={item} id={item} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="seller" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[21, 22, 23, 24, 25].map((item) => (
                    <ProductCard key={item} id={item} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container px-4 md:px-6">
          <p className="text-sm text-center text-muted-foreground">© 2025 Swapify. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

