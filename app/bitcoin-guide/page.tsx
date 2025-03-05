import Link from "next/link"
import { ArrowLeft, Bitcoin, Shield, Zap, Globe, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BitcoinGuidePage() {
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
          <h1 className="ml-4 text-lg font-medium">Guide Bitcoin</h1>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
              <div className="bg-yellow-400 p-6 rounded-full">
                <Bitcoin className="h-16 w-16 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">Paiement en Bitcoin</h1>
                <p className="text-xl text-muted-foreground">
                  Tout ce que vous devez savoir pour acheter et vendre sur Swapify avec Bitcoin
                </p>
              </div>
            </div>

            <Tabs defaultValue="getting-started" className="mb-10">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="getting-started">Démarrer</TabsTrigger>
                <TabsTrigger value="buying">Acheter</TabsTrigger>
                <TabsTrigger value="selling">Vendre</TabsTrigger>
              </TabsList>
              <TabsContent value="getting-started" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Qu'est-ce que le Bitcoin?</h2>
                    <p className="text-muted-foreground mb-4">
                      Le Bitcoin est une monnaie numérique décentralisée qui permet des paiements directs entre
                      utilisateurs sans intermédiaire comme une banque. Sur Swapify, nous utilisons exclusivement le
                      Bitcoin pour toutes les transactions.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <Shield className="h-6 w-6 text-teal-500 mb-2" />
                        <CardTitle>Sécurisé</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Les transactions Bitcoin sont sécurisées par cryptographie et enregistrées sur la blockchain.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <Zap className="h-6 w-6 text-teal-500 mb-2" />
                        <CardTitle>Rapide</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Les paiements sont traités rapidement, sans attente de validation bancaire.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <Globe className="h-6 w-6 text-teal-500 mb-2" />
                        <CardTitle>Global</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Achetez et vendez partout dans le monde sans frais de change ou restrictions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Comment démarrer</h2>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">Créez un portefeuille Bitcoin</span> - Nous
                        recommandons des applications comme Blue Wallet, Muun ou Electrum.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Achetez du Bitcoin</span> - Utilisez un échange
                        comme Binance, Coinbase ou Kraken pour acheter vos premiers bitcoins.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Transférez vos bitcoins</span> - Envoyez vos
                        bitcoins de l'échange vers votre portefeuille personnel.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Connectez votre portefeuille</span> - Lors de
                        l'achat sur Swapify, vous pourrez scanner un QR code avec votre application de portefeuille.
                      </li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-yellow-500" />
                      Besoin d'aide?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Notre équipe est disponible pour vous aider à configurer votre portefeuille Bitcoin et répondre à
                      toutes vos questions.
                    </p>
                    <Button variant="outline">Contacter le support</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="buying" className="pt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-4">Comment acheter avec Bitcoin</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
                      <h3 className="font-medium">Trouvez votre article</h3>
                      <p className="text-sm text-muted-foreground">
                        Parcourez notre marketplace et trouvez l'article que vous souhaitez acheter.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
                      <h3 className="font-medium">Cliquez sur "Acheter avec Bitcoin"</h3>
                      <p className="text-sm text-muted-foreground">
                        Sur la page produit, cliquez sur le bouton d'achat pour initier la transaction.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
                      <h3 className="font-medium">Scannez le QR code</h3>
                      <p className="text-sm text-muted-foreground">
                        Un QR code apparaîtra avec le montant exact à payer. Scannez-le avec votre portefeuille Bitcoin.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center font-bold">4</div>
                      <h3 className="font-medium">Confirmez la transaction</h3>
                      <p className="text-sm text-muted-foreground">
                        Confirmez le paiement dans votre application de portefeuille. La transaction sera vérifiée
                        automatiquement.
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted p-6 rounded-lg mt-6">
                    <h3 className="text-lg font-medium mb-4">Taux de conversion</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Les prix sur Swapify sont affichés en Bitcoin et en euros pour référence. Le taux de conversion
                      est mis à jour toutes les 15 minutes.
                    </p>
                    <div className="flex items-center justify-between p-3 bg-background rounded-md">
                      <div className="flex items-center">
                        <Bitcoin className="h-5 w-5 mr-2 text-yellow-500" />
                        <span className="font-medium">1 BTC</span>
                      </div>
                      <span className="font-medium">≈ 52,000 €</span>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Combien de temps faut-il pour confirmer un paiement?</AccordionTrigger>
                      <AccordionContent>
                        Les paiements Bitcoin sont généralement confirmés en 10-30 minutes. Pour les petits montants,
                        nous acceptons les transactions avec 0 confirmation pour une expérience plus rapide.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Que se passe-t-il si le prix du Bitcoin change pendant ma transaction?
                      </AccordionTrigger>
                      <AccordionContent>
                        Le montant en Bitcoin est fixé au moment où vous initiez l'achat et reste valable pendant 15
                        minutes. Si vous ne complétez pas le paiement dans ce délai, le montant sera recalculé.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Puis-je obtenir un remboursement en Bitcoin?</AccordionTrigger>
                      <AccordionContent>
                        Oui, tous les remboursements sont effectués en Bitcoin à l'adresse d'origine du paiement. Le
                        montant du remboursement est basé sur la valeur en euros au moment de l'achat.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
              <TabsContent value="selling" className="pt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-4">Comment vendre et recevoir des paiements en Bitcoin</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
                      <h3 className="font-medium">Configurez votre portefeuille Bitcoin</h3>
                      <p className="text-sm text-muted-foreground">
                        Ajoutez l'adresse de votre portefeuille Bitcoin dans les paramètres de votre compte Swapify.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
                      <h3 className="font-medium">Mettez en vente votre article</h3>
                      <p className="text-sm text-muted-foreground">
                        Créez votre annonce en indiquant le prix en Bitcoin (nous affichons aussi l'équivalent en
                        euros).
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
                      <h3 className="font-medium">Recevez une notification de vente</h3>
                      <p className="text-sm text-muted-foreground">
                        Lorsqu'un acheteur paie avec Bitcoin, vous recevrez une notification de vente.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center font-bold">4</div>
                      <h3 className="font-medium">Expédiez l'article et recevez votre paiement</h3>
                      <p className="text-sm text-muted-foreground">
                        Après confirmation de l'expédition, le paiement en Bitcoin sera envoyé à votre portefeuille.
                      </p>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-6 rounded-lg mt-6">
                    <h3 className="text-lg font-medium mb-4">Avantages pour les vendeurs</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="bg-teal-100 text-teal-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Frais de transaction réduits (5% au lieu de 10% avec les méthodes traditionnelles)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-teal-100 text-teal-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Paiements reçus directement dans votre portefeuille sans intermédiaire bancaire</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-teal-100 text-teal-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Possibilité de conserver vos gains en Bitcoin comme investissement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-teal-100 text-teal-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Accès à un marché mondial sans restrictions géographiques</span>
                      </li>
                    </ul>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Comment définir le bon prix en Bitcoin?</AccordionTrigger>
                      <AccordionContent>
                        Notre système convertit automatiquement le prix que vous définissez en euros vers son équivalent
                        en Bitcoin au taux actuel. Vous pouvez également saisir directement le montant en Bitcoin si
                        vous préférez.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Quand vais-je recevoir mon paiement?</AccordionTrigger>
                      <AccordionContent>
                        Les paiements sont libérés et envoyés à votre portefeuille Bitcoin 24 heures après confirmation
                        de la livraison par l'acheteur, ou automatiquement après 7 jours si l'acheteur ne signale aucun
                        problème.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Puis-je convertir mes bitcoins en euros?</AccordionTrigger>
                      <AccordionContent>
                        Oui, vous pouvez utiliser n'importe quel échange de cryptomonnaies pour convertir vos bitcoins
                        en euros. Nous proposons également un service de conversion intégré avec un partenaire pour les
                        vendeurs réguliers (frais de 1%).
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>

            <div className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-semibold mb-6">Portefeuilles Bitcoin recommandés</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Blue Wallet</CardTitle>
                    <CardDescription>Simple et intuitif</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Parfait pour les débutants, disponible sur iOS et Android.
                    </p>
                    <Button variant="outline" className="w-full">
                      Télécharger
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Muun Wallet</CardTitle>
                    <CardDescription>Sécurisé et non-custodial</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Excellent équilibre entre sécurité et facilité d'utilisation.
                    </p>
                    <Button variant="outline" className="w-full">
                      Télécharger
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Electrum</CardTitle>
                    <CardDescription>Pour utilisateurs avancés</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Fonctionnalités avancées, disponible sur desktop et mobile.
                    </p>
                    <Button variant="outline" className="w-full">
                      Télécharger
                    </Button>
                  </CardContent>
                </Card>
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

