"use client"

import { useState } from "react"
import { Bitcoin, Check, ChevronDown, Wallet, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletType, setWalletType] = useState("")
  const [walletAddress, setWalletAddress] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)

  const connectWallet = (type: string) => {
    // Simuler une connexion de portefeuille
    setWalletType(type)
    // Générer une adresse Bitcoin aléatoire pour la démonstration
    const randomAddress =
      "bc1q" +
      Array(38)
        .fill(0)
        .map(() => "0123456789abcdef"[Math.floor(Math.random() * 16)])
        .join("")
    setWalletAddress(randomAddress)
    setIsConnected(true)
    setDialogOpen(false)
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletType("")
    setWalletAddress("")
  }

  return (
    <>
      {!isConnected ? (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <Wallet className="mr-2 h-4 w-4" />
              Connecter un portefeuille
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Connecter un portefeuille</DialogTitle>
              <DialogDescription>
                Choisissez votre portefeuille Bitcoin pour effectuer des transactions sur Swapify.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button
                variant="outline"
                className="justify-start h-auto py-3"
                onClick={() => connectWallet("Blue Wallet")}
              >
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <Bitcoin className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Blue Wallet</div>
                  <div className="text-xs text-muted-foreground">Portefeuille simple et intuitif</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="justify-start h-auto py-3"
                onClick={() => connectWallet("Muun Wallet")}
              >
                <div className="bg-purple-500 rounded-full p-2 mr-3">
                  <Bitcoin className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Muun Wallet</div>
                  <div className="text-xs text-muted-foreground">Sécurisé et non-custodial</div>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-3" onClick={() => connectWallet("Electrum")}>
                <div className="bg-yellow-600 rounded-full p-2 mr-3">
                  <Bitcoin className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Electrum</div>
                  <div className="text-xs text-muted-foreground">Pour utilisateurs avancés</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="justify-start h-auto py-3"
                onClick={() => connectWallet("Autre portefeuille")}
              >
                <div className="bg-gray-500 rounded-full p-2 mr-3">
                  <Wallet className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Autre portefeuille</div>
                  <div className="text-xs text-muted-foreground">Connecter un autre portefeuille Bitcoin</div>
                </div>
              </Button>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Besoin d'aide?</span>
              <a href="/bitcoin-guide" className="text-teal-500 hover:underline">
                Voir notre guide Bitcoin
              </a>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-50">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              <span className="mr-1">Portefeuille connecté</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px]">
            <DropdownMenuLabel>Votre portefeuille</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="px-2 py-2">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  {walletType}
                </Badge>
                <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                  Connecté
                </Badge>
              </div>
              <div className="text-xs font-mono bg-muted p-2 rounded-md overflow-hidden text-ellipsis">
                {walletAddress}
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 focus:text-red-500 cursor-pointer" onClick={disconnectWallet}>
              <X className="mr-2 h-4 w-4" />
              Déconnecter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  )
}

