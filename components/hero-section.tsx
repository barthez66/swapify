import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/90 to-teal-700/90" />
      <div className="relative container flex flex-col items-center justify-center text-center py-20 px-4 md:py-32">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Achetez et vendez avec Bitcoin</h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Rejoignez la première marketplace de vêtements d'occasion utilisant exclusivement le Bitcoin. Sécurité,
          confidentialité et économies garanties.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-teal-700 hover:bg-white/90">
            <Link href="/sell">Vendre maintenant</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/browse">Explorer les articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

