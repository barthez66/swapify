"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Bitcoin } from "lucide-react"
import { WalletConnect } from "@/components/wallet-connect"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden absolute top-4 left-4 z-50">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-bold">Menu</span>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Fermer</span>
            </Button>
          </div>
          <div className="p-4 border-b">
            <WalletConnect />
          </div>
          <nav className="flex-1 overflow-auto">
            <div className="flex flex-col p-4 gap-1">
              <Link
                href="/login"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Se connecter
              </Link>
              <Link
                href="/register"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                S'inscrire
              </Link>
              <div className="my-2 border-t" />
              <Link
                href="/women"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Femmes
              </Link>
              <Link
                href="/men"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Hommes
              </Link>
              <Link
                href="/kids"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Enfants
              </Link>
              <Link
                href="/home"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Maison
              </Link>
              <Link
                href="/beauty"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Beauté
              </Link>
              <Link
                href="/sport"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Sport
              </Link>
              <div className="my-2 border-t" />
              <Link
                href="/bitcoin-guide"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent text-yellow-700"
                onClick={() => setOpen(false)}
              >
                <Bitcoin className="h-4 w-4 mr-2" />
                Guide Bitcoin
              </Link>
              <Link
                href="/about"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/help"
                className="flex items-center h-10 px-4 rounded-md hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Aide
              </Link>
            </div>
          </nav>
          <div className="p-4 border-t">
            <Button className="w-full bg-teal-500 hover:bg-teal-600" onClick={() => setOpen(false)}>
              <Link href="/sell" className="w-full">
                Vendre un article
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

