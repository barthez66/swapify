import Link from "next/link"
import { Search, ShoppingBag, Heart, Menu, Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { CategorySection } from "@/components/category-section"
import { HeroSection } from "@/components/hero-section"
import { MobileMenu } from "@/components/mobile-menu"
import { WalletConnect } from "@/components/wallet-connect"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-teal-500" />
              <span className="text-xl font-bold">Swapify</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/women" className="font-medium">
              Femmes
            </Link>
            <Link href="/men" className="font-medium">
              Hommes
            </Link>
            <Link href="/kids" className="font-medium">
              Enfants
            </Link>
            <Link href="/home" className="font-medium">
              Maison
            </Link>
            <Link href="/about" className="font-medium">
              À propos
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex relative w-60">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher des articles" className="pl-8" />
            </form>
            <WalletConnect />
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favoris</span>
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-teal-500 text-[10px] font-medium text-white flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Panier</span>
            </Button>
            <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
              <Link href="/login">Se connecter</Link>
            </Button>
            <Button size="sm" className="hidden md:inline-flex bg-teal-500 hover:bg-teal-600">
              <Link href="/sell">Vendre</Link>
            </Button>
          </div>
        </div>
        <div className="md:hidden border-t py-2 px-4">
          <form className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Rechercher des articles" className="pl-8 w-full" />
          </form>
        </div>
      </header>
      <MobileMenu />
      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        <section className="py-8 px-4 md:px-6 bg-yellow-50">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-yellow-400 p-4 rounded-full">
                <Bitcoin className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Paiement en Bitcoin</h2>
                <p className="text-muted-foreground">
                  Swapify utilise exclusivement le Bitcoin comme moyen de paiement. Profitez d'une sécurité maximale et
                  de frais réduits pour vos transactions.
                </p>
              </div>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                <Link href="/bitcoin-guide">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 md:px-6">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Articles populaires</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <ProductCard key={item} id={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-10">
        <div className="container grid gap-8 px-4 md:px-6 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">À propos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Presse
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Développement durable
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Aide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Règles de la communauté
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Sécurité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Télécharger l'application</h3>
            <div className="flex gap-2">
              <Link href="#" className="block">
                <img src="/placeholder.svg?height=40&width=120" alt="App Store" className="h-10" />
              </Link>
              <Link href="#" className="block">
                <img src="/placeholder.svg?height=40&width=120" alt="Google Play" className="h-10" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container mt-8 border-t pt-6 px-4 md:px-6">
          <p className="text-sm text-center text-muted-foreground">© 2025 Swapify. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

