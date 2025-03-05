"use client"

import { useState } from "react"
import { Bitcoin, Check, Copy, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PaymentModalProps {
  price: number
}

export function PaymentModal({ price }: PaymentModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "processing" | "completed" | null>(null)

  // Convertir le prix en BTC (simulation)
  const btcPrice = (price * 0.000019).toFixed(6)
  const btcAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(btcAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const simulatePayment = () => {
    setPaymentStatus("pending")
    setTimeout(() => {
      setPaymentStatus("processing")
      setTimeout(() => {
        setPaymentStatus("completed")
      }, 2000)
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
          <Bitcoin className="mr-2 h-4 w-4" />
          Acheter avec Bitcoin
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Paiement Bitcoin</DialogTitle>
          <DialogDescription>Envoyez exactement {btcPrice} BTC à l'adresse ci-dessous.</DialogDescription>
        </DialogHeader>

        {paymentStatus === null ? (
          <>
            <Tabs defaultValue="qr" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="qr">Code QR</TabsTrigger>
                <TabsTrigger value="address">Adresse</TabsTrigger>
              </TabsList>
              <TabsContent value="qr" className="flex justify-center py-4">
                <div className="flex flex-col items-center">
                  <div className="border p-4 rounded-lg mb-2">
                    <QrCode className="h-48 w-48" />
                  </div>
                  <p className="text-sm text-muted-foreground">Scannez avec votre portefeuille Bitcoin</p>
                </div>
              </TabsContent>
              <TabsContent value="address" className="py-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Adresse Bitcoin</div>
                    <div className="flex">
                      <div className="bg-muted p-3 rounded-l-md font-mono text-xs flex-1 overflow-hidden text-ellipsis">
                        {btcAddress}
                      </div>
                      <Button variant="outline" size="icon" className="rounded-l-none" onClick={copyToClipboard}>
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Montant</div>
                    <div className="bg-muted p-3 rounded-md font-mono text-xs flex items-center justify-between">
                      <span>{btcPrice} BTC</span>
                      <span className="text-muted-foreground">(≈ {price.toFixed(2)} €)</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <Alert className="bg-yellow-50 border-yellow-200">
              <AlertTitle className="flex items-center text-yellow-800">
                <Bitcoin className="h-4 w-4 mr-2" />
                Important
              </AlertTitle>
              <AlertDescription className="text-yellow-700 text-sm">
                Envoyez exactement le montant indiqué. Le paiement sera automatiquement détecté. N'actualisez pas cette
                page.
              </AlertDescription>
            </Alert>

            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Annuler
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600" onClick={simulatePayment}>
                J'ai effectué le paiement
              </Button>
            </DialogFooter>
          </>
        ) : (
          <div className="py-6">
            {paymentStatus === "pending" && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
                <h3 className="text-lg font-medium">Recherche du paiement...</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Nous vérifions la blockchain pour confirmer votre transaction. Cela peut prendre quelques minutes.
                </p>
              </div>
            )}

            {paymentStatus === "processing" && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="animate-pulse bg-yellow-100 text-yellow-800 p-3 rounded-full">
                  <Bitcoin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium">Paiement détecté!</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Nous attendons les confirmations de la blockchain. Cela ne prendra que quelques instants.
                </p>
              </div>
            )}

            {paymentStatus === "completed" && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="bg-green-100 text-green-800 p-3 rounded-full">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium">Paiement confirmé!</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Votre paiement a été confirmé. Le vendeur sera notifié et préparera votre commande.
                </p>
                <Button className="bg-teal-500 hover:bg-teal-600 mt-2" onClick={() => setIsOpen(false)}>
                  Continuer
                </Button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

