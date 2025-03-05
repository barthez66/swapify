import Link from "next/link"
import { ArrowLeft, Filter, Check, X, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { WalletConnect } from "@/components/wallet-connect"

export default function OffersPage() {
  // Données simulées pour les offres
  const offers = [
    {
      id: 1,
      user: {
        name: "Sophie Martin",
        avatar: "/placeholder.svg?height=40&width=40&text=SM",
        rating: 4.8,
      },
      product: {
        id: 101,
        name: "Robe d'été fleurie",
        price: 19.99,
        image: "/placeholder.svg?height=80&width=80&text=Robe",
      },
      offerPrice: 15.0,
      originalPrice: 19.99,
      discount: 25,
      status: "pending",
      date: "Aujourd'hui, 14:32",
    },
    {
      id: 2,
      user: {
        name: "Thomas Dubois",
        avatar: "/placeholder.svg?height=40&width=40&text=TD",
        rating: 4.5,
      },
      product: {
        id: 102,
        name: "Veste en jean vintage",
        price: 34.5,
        image: "/placeholder.svg?height=80&width=80&text=Veste",
      },
      offerPrice: 28.0,
      originalPrice: 34.5,
      discount: 19,
      status: "accepted",
      date: "Hier, 18:15",
    },
    {
      id: 3,
      user: {
        name: "Emma Petit",
        avatar: "/placeholder.svg?height=40&width=40&text=EP",
        rating: 4.9,
      },
      product: {
        id: 103,
        name: "Baskets Nike Air",
        price: 65.0,
        image: "/placeholder.svg?height=80&width=80&text=Nike",
      },
      offerPrice: 50.0,
      originalPrice: 65.0,
      discount: 23,
      status: "declined",
      date: "Lundi, 10:22",
    },
    {
      id: 4,
      user: {
        name: "Lucas Bernard",
        avatar: "/placeholder.svg?height=40&width=40&text=LB",
        rating: 4.2,
      },
      product: {
        id: 104,
        name: "T-shirt graphique",
        price: 15.99,
        image: "/placeholder.svg?height=80&width=80&text=Tshirt",
      },
      offerPrice: 12.0,
      originalPrice: 15.99,
      discount: 25,
      status: "expired",
      date: "15 mai, 09:45",
    },
  ]

  // Données simulées pour les offres reçues
  const receivedOffers = [
    {
      id: 5,
      user: {
        name: "Julien Moreau",
        avatar: "/placeholder.svg?height=40&width=40&text=JM",
        rating: 4.7,
      },
      product: {
        id: 105,
        name: "Chemise à carreaux",
        price: 25.99,
        image: "/placeholder.svg?height=80&width=80&text=Chemise",
      },
      offerPrice: 20.0,
      originalPrice: 25.99,
      discount: 23,
      status: "pending",
      date: "Aujourd'hui, 11:05",
    },
    {
      id: 6,
      user: {
        name: "Marie Leroy",
        avatar: "/placeholder.svg?height=40&width=40&text=ML",
        rating: 4.6,
      },
      product: {
        id: 106,
        name: "Pantalon chino",
        price: 29.99,
        image: "/placeholder.svg?height=80&width=80&text=Pantalon",
      },
      offerPrice: 22.0,
      originalPrice: 29.99,
      discount: 27,
      status: "pending",
      date: "Hier, 16:30",
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            En attente
          </Badge>
        )
      case "accepted":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Acceptée
          </Badge>
        )
      case "declined":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            Refusée
          </Badge>
        )
      case "expired":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Expirée
          </Badge>
        )
      default:
        return null
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "accepted":
        return <Check className="h-5 w-5 text-green-500" />
      case "declined":
        return <X className="h-5 w-5 text-red-500" />
      case "expired":
        return <Clock className="h-5 w-5 text-gray-500" />
      default:
        return null
    }
  }

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
          <h1 className="ml-4 text-lg font-medium">Offres</h1>
          <div className="ml-auto flex items-center gap-2">
            <WalletConnect />
          </div>
        </div>
      </header>
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Vos offres</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrer
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Toutes les offres</DropdownMenuItem>
                <DropdownMenuItem>En attente</DropdownMenuItem>
                <DropdownMenuItem>Acceptées</DropdownMenuItem>
                <DropdownMenuItem>Refusées</DropdownMenuItem>
                <DropdownMenuItem>Expirées</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Tabs defaultValue="sent">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="sent">Offres envoyées</TabsTrigger>
              <TabsTrigger value="received">Offres reçues</TabsTrigger>
            </TabsList>
            <TabsContent value="sent" className="space-y-6">
              {offers.length > 0 ? (
                offers.map((offer) => (
                  <Card key={offer.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="flex items-center gap-4 p-4 md:w-2/3">
                          <img
                            src={offer.product.image || "/placeholder.svg"}
                            alt={offer.product.name}
                            className="h-20 w-20 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <Link href={`/product/${offer.product.id}`} className="font-medium hover:underline">
                              {offer.product.name}
                            </Link>
                            <div className="flex items-baseline gap-2 mt-1">
                              <span className="text-lg font-bold">{offer.offerPrice.toFixed(2)} €</span>
                              <span className="text-sm text-muted-foreground line-through">
                                {offer.originalPrice.toFixed(2)} €
                              </span>
                              <Badge variant="outline" className="bg-teal-100 text-teal-800 hover:bg-teal-100">
                                -{offer.discount}%
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={offer.user.avatar} alt={offer.user.name} />
                                <AvatarFallback>
                                  {offer.user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-muted-foreground">{offer.user.name}</span>
                            </div>
                          </div>
                        </div>
                        <Separator className="md:hidden" />
                        <div className="flex flex-col justify-between p-4 bg-muted/30 md:w-1/3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(offer.status)}
                              {getStatusBadge(offer.status)}
                            </div>
                            <span className="text-xs text-muted-foreground">{offer.date}</span>
                          </div>
                          <div className="mt-4 space-y-2">
                            {offer.status === "pending" && (
                              <>
                                <p className="text-sm text-muted-foreground">En attente de réponse du vendeur</p>
                                <Button variant="outline" size="sm" className="w-full">
                                  Annuler l'offre
                                </Button>
                              </>
                            )}
                            {offer.status === "accepted" && (
                              <>
                                <p className="text-sm text-muted-foreground">
                                  Offre acceptée ! Vous pouvez maintenant procéder au paiement.
                                </p>
                                <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Payer avec Bitcoin</Button>
                              </>
                            )}
                            {offer.status === "declined" && (
                              <>
                                <p className="text-sm text-muted-foreground">Le vendeur a refusé votre offre.</p>
                                <Button variant="outline" size="sm" className="w-full">
                                  Faire une nouvelle offre
                                </Button>
                              </>
                            )}
                            {offer.status === "expired" && (
                              <>
                                <p className="text-sm text-muted-foreground">Cette offre a expiré.</p>
                                <Button variant="outline" size="sm" className="w-full">
                                  Faire une nouvelle offre
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Vous n'avez pas encore fait d'offres.</p>
                  <Button className="mt-4 bg-teal-500 hover:bg-teal-600">
                    <Link href="/">Explorer les articles</Link>
                  </Button>
                </div>
              )}
            </TabsContent>
            <TabsContent value="received" className="space-y-6">
              {receivedOffers.length > 0 ? (
                receivedOffers.map((offer) => (
                  <Card key={offer.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="flex items-center gap-4 p-4 md:w-2/3">
                          <img
                            src={offer.product.image || "/placeholder.svg"}
                            alt={offer.product.name}
                            className="h-20 w-20 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <Link href={`/product/${offer.product.id}`} className="font-medium hover:underline">
                              {offer.product.name}
                            </Link>
                            <div className="flex items-baseline gap-2 mt-1">
                              <span className="text-lg font-bold">{offer.offerPrice.toFixed(2)} €</span>
                              <span className="text-sm text-muted-foreground line-through">
                                {offer.originalPrice.toFixed(2)} €
                              </span>
                              <Badge variant="outline" className="bg-teal-100 text-teal-800 hover:bg-teal-100">
                                -{offer.discount}%
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={offer.user.avatar} alt={offer.user.name} />
                                <AvatarFallback>
                                  {offer.user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-muted-foreground">{offer.user.name}</span>
                            </div>
                          </div>
                        </div>
                        <Separator className="md:hidden" />
                        <div className="flex flex-col justify-between p-4 bg-muted/30 md:w-1/3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(offer.status)}
                              {getStatusBadge(offer.status)}
                            </div>
                            <span className="text-xs text-muted-foreground">{offer.date}</span>
                          </div>
                          <div className="mt-4 space-y-2">
                            {offer.status === "pending" && (
                              <>
                                <p className="text-sm text-muted-foreground">
                                  Vous avez reçu une offre pour cet article.
                                </p>
                                <div className="flex gap-2">
                                  <Button className="flex-1 bg-teal-500 hover:bg-teal-600">Accepter</Button>
                                  <Button variant="outline" className="flex-1">
                                    Refuser
                                  </Button>
                                </div>
                                <Button variant="ghost" size="sm" className="w-full">
                                  Faire une contre-offre
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Vous n'avez pas encore reçu d'offres.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
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

