"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { WalletConnect } from "@/components/wallet-connect"

interface MakeOfferPageProps {
  params: {
    id: string
  }
}

export default function MakeOfferPage({ params }: MakeOfferPageProps) {
  const id = Number.parseInt(params.id)

  // Données simulées du produit
  const product = {
    id,
    name: "Veste en jean vintage",
    price: 34.5,
    image: "/placeholder.svg?height=200&width=200&text=Veste",
    seller: {
      name: "Thomas Dubois",
      avatar: "/placeholder.svg?height=40&width=40&text=TD",
      rating: 4.5,
    },
  }

  const [offerPrice, setOfferPrice] = useState(Math.round(product.price * 0.8 * 100) / 100)
  const [message, setMessage] = useState("")

  const discount = Math.round((1 - offerPrice / product.price) * 100)
  const btcPrice = (offerPrice * 0.000019).toFixed(6)

  const decreasePrice = () => {
    if (offerPrice > 1) {
      setOfferPrice(Math.round((offerPrice - 1) * 100) / 100)
    }
  }

  const increasePrice = () => {
    if (offerPrice < product.price) {
      setOfferPrice(Math.round((offerPrice + 1) * 100) / 100)
    }
  }

  const handleSliderChange = (value: number[]) => {
    const newPrice = Math.round(((product.price * value[0]) / 100) * 100) / 100
    setOfferPrice(newPrice)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex items-center h-16 px-4 md:px-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/product/${id}`}>
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Retour</span>
            </Link>
          </Button>
          <h1 className="ml-4 text-lg font-medium">Faire une offre</h1>
          <div className="ml-auto flex items-center gap-2">
            <WalletConnect />
          </div>
        </div>
      </header>
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-20 w-20 object-cover rounded-md"
              />
              <div>
                <h2 className="font-medium">{product.name}</h2>
                <p className="text-lg font-bold">{product.price.toFixed(2)} €</p>
                <div className="flex items-center gap-2 mt-1">
                  <img
                    src={product.seller.avatar || "/placeholder.svg"}
                    alt={product.seller.name}
                    className="h-5 w-5 rounded-full"
                  />
                  <span className="text-sm text-muted-foreground">{product.seller.name}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Votre offre</h3>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" onClick={decreasePrice} disabled={offerPrice <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex-1">
                    <div className="relative">
                      <Input
                        type="number"
                        value={offerPrice}
                        onChange={(e) => {
                          const value = Number.parseFloat(e.target.value)
                          if (!isNaN(value) && value >= 0 && value <= product.price) {
                            setOfferPrice(value)
                          }
                        }}
                        className="text-center text-lg font-bold"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">€</div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>≈ {btcPrice} BTC</span>
                      <span>-{discount}%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="icon" onClick={increasePrice} disabled={offerPrice >= product.price}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Slider
                  defaultValue={[80]}
                  max={100}
                  min={50}
                  step={1}
                  value={[Math.round((offerPrice / product.price) * 100)]}
                  onValueChange={handleSliderChange}
                  className="mt-6"
                />
                <div className="flex justify-between text-sm">
                  <span>50%</span>
                  <span>Prix original</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Message (optionnel)</h3>
                <Textarea
                  placeholder="Ajoutez un message pour le vendeur..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="bg-muted p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span>Prix original</span>
                  <span>{product.price.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Votre offre</span>
                  <span>{offerPrice.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Économie</span>
                  <span>
                    {(product.price - offerPrice).toFixed(2)} € ({discount}%)
                  </span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t mt-2">
                  <span>Paiement en Bitcoin</span>
                  <div className="flex items-center">
                    <Bitcoin className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>{btcPrice} BTC</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-teal-500 hover:bg-teal-600">Envoyer l'offre</Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Le vendeur aura 24 heures pour accepter ou refuser votre offre.
                </p>
              </div>
            </div>
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

