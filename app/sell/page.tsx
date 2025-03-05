import Link from "next/link"
import { ArrowLeft, Upload, Info, Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SellPage() {
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
          <h1 className="ml-4 text-lg font-medium">Vendre un article</h1>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Photos</h2>
                <div className="grid grid-cols-3 gap-4">
                  <Card className="aspect-square flex items-center justify-center border-dashed cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground text-center">Ajouter une photo</p>
                    </CardContent>
                  </Card>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <Card
                      key={index}
                      className="aspect-square relative overflow-hidden opacity-40 hover:opacity-100 transition-opacity"
                    >
                      <img
                        src="/placeholder.svg?height=200&width=200&text=Photo"
                        alt={`Photo ${index}`}
                        className="object-cover w-full h-full"
                      />
                    </Card>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Info className="h-4 w-4" />
                  Ajoutez jusqu'à 20 photos. La première photo sera votre photo principale.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Titre et description</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Titre</Label>
                    <Input id="title" placeholder="Ex: T-shirt Zara noir taille M" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Décrivez votre article (matière, couleur, état...)"
                      className="min-h-[120px]"
                    />
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Détails</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Catégorie</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="women">Femmes</SelectItem>
                        <SelectItem value="men">Hommes</SelectItem>
                        <SelectItem value="kids">Enfants</SelectItem>
                        <SelectItem value="home">Maison</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand">Marque</Label>
                    <Select>
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Sélectionner une marque" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zara">Zara</SelectItem>
                        <SelectItem value="hm">H&M</SelectItem>
                        <SelectItem value="nike">Nike</SelectItem>
                        <SelectItem value="adidas">Adidas</SelectItem>
                        <SelectItem value="mango">Mango</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Taille</Label>
                    <Select>
                      <SelectTrigger id="size">
                        <SelectValue placeholder="Sélectionner une taille" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xs">XS</SelectItem>
                        <SelectItem value="s">S</SelectItem>
                        <SelectItem value="m">M</SelectItem>
                        <SelectItem value="l">L</SelectItem>
                        <SelectItem value="xl">XL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="color">Couleur</Label>
                    <Select>
                      <SelectTrigger id="color">
                        <SelectValue placeholder="Sélectionner une couleur" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="black">Noir</SelectItem>
                        <SelectItem value="white">Blanc</SelectItem>
                        <SelectItem value="blue">Bleu</SelectItem>
                        <SelectItem value="red">Rouge</SelectItem>
                        <SelectItem value="green">Vert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">État</h2>
                <RadioGroup defaultValue="very-good">
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new" id="new" />
                      <Label htmlFor="new">Neuf avec étiquette</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="like-new" id="like-new" />
                      <Label htmlFor="like-new">Neuf sans étiquette</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very-good" id="very-good" />
                      <Label htmlFor="very-good">Très bon état</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="good" id="good" />
                      <Label htmlFor="good">Bon état</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="satisfactory" id="satisfactory" />
                      <Label htmlFor="satisfactory">Satisfaisant</Label>
                    </div>
                  </div>
                </RadioGroup>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Prix (en Bitcoin)</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Prix (BTC)</Label>
                    <div className="relative">
                      <Input id="price" type="number" placeholder="0.00" />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <Bitcoin className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Équivalent approximatif: 0.00 €</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span>Prix de l'article</span>
                      <span>0.00 BTC</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span>Frais de service (5%)</span>
                      <span>0.00 BTC</span>
                    </div>
                    <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                      <span>Vous recevrez</span>
                      <span>0.00 BTC</span>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-yellow-50 rounded-lg text-sm">
                    <Info className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                    <p>
                      Les paiements sont effectués exclusivement en Bitcoin. Assurez-vous d'avoir un portefeuille
                      Bitcoin configuré.
                    </p>
                  </div>
                </div>
              </section>

              <div className="pt-4 border-t">
                <Button size="lg" className="w-full bg-teal-500 hover:bg-teal-600">
                  Publier l'article
                </Button>
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

