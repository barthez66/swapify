import Link from "next/link"
import { ArrowLeft, Search, Send, MoreVertical, Phone, Video, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { WalletConnect } from "@/components/wallet-connect"

export default function MessagesPage() {
  // Données simulées pour les conversations
  const conversations = [
    {
      id: 1,
      user: "Sophie Martin",
      avatar: "/placeholder.svg?height=40&width=40&text=SM",
      lastMessage: "Bonjour, est-ce que l'article est toujours disponible ?",
      time: "14:32",
      unread: true,
      online: true,
      product: {
        name: "Robe d'été fleurie",
        price: 19.99,
        image: "/placeholder.svg?height=60&width=60&text=Robe",
      },
    },
    {
      id: 2,
      user: "Thomas Dubois",
      avatar: "/placeholder.svg?height=40&width=40&text=TD",
      lastMessage: "Merci pour votre réponse. Je suis intéressé.",
      time: "Hier",
      unread: false,
      online: false,
      product: {
        name: "Veste en jean vintage",
        price: 34.5,
        image: "/placeholder.svg?height=60&width=60&text=Veste",
      },
    },
    {
      id: 3,
      user: "Emma Petit",
      avatar: "/placeholder.svg?height=40&width=40&text=EP",
      lastMessage: "Pourriez-vous faire une réduction ?",
      time: "Lun",
      unread: false,
      online: true,
      product: {
        name: "Baskets Nike Air",
        price: 65.0,
        image: "/placeholder.svg?height=60&width=60&text=Nike",
      },
    },
    {
      id: 4,
      user: "Lucas Bernard",
      avatar: "/placeholder.svg?height=40&width=40&text=LB",
      lastMessage: "Je vous ai envoyé une offre.",
      time: "Dim",
      unread: false,
      online: false,
      product: {
        name: "T-shirt graphique",
        price: 15.99,
        image: "/placeholder.svg?height=60&width=60&text=Tshirt",
      },
    },
    {
      id: 5,
      user: "Chloé Dupont",
      avatar: "/placeholder.svg?height=40&width=40&text=CD",
      lastMessage: "Quand pouvez-vous l'envoyer ?",
      time: "28 mai",
      unread: false,
      online: true,
      product: {
        name: "Sac à main cuir",
        price: 89.0,
        image: "/placeholder.svg?height=60&width=60&text=Sac",
      },
    },
  ]

  // Messages simulés pour la conversation active
  const messages = [
    {
      id: 1,
      sender: "Sophie Martin",
      content: "Bonjour, est-ce que l'article est toujours disponible ?",
      time: "14:32",
      isMe: false,
    },
    {
      id: 2,
      sender: "Moi",
      content: "Bonjour ! Oui, il est toujours disponible.",
      time: "14:35",
      isMe: true,
    },
    {
      id: 3,
      sender: "Sophie Martin",
      content: "Super ! Est-ce que vous accepteriez 15€ au lieu de 19,99€ ?",
      time: "14:40",
      isMe: false,
    },
    {
      id: 4,
      sender: "Moi",
      content: "Je peux vous le faire à 17€, c'est mon dernier prix.",
      time: "14:42",
      isMe: true,
    },
    {
      id: 5,
      sender: "Sophie Martin",
      content: "D'accord, ça me va ! Comment procède-t-on pour le paiement en Bitcoin ?",
      time: "14:45",
      isMe: false,
    },
    {
      id: 6,
      sender: "Moi",
      content:
        "Vous pouvez cliquer sur le bouton 'Acheter avec Bitcoin' sur la page du produit, ou je peux vous envoyer une demande de paiement directement ici.",
      time: "14:47",
      isMe: true,
    },
    {
      id: 7,
      sender: "Sophie Martin",
      content: "Je préfère que vous m'envoyiez une demande de paiement ici, ce sera plus simple pour moi.",
      time: "14:50",
      isMe: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex items-center h-16 px-4 md:px-6">
          <Button variant="ghost" size="icon" asChild className="md:hidden">
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Retour</span>
            </Link>
          </Button>
          <h1 className="text-lg font-medium md:hidden">Messages</h1>
          <Link href="/" className="hidden md:flex items-center gap-2">
            <span className="text-xl font-bold">Swapify</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <WalletConnect />
          </div>
        </div>
      </header>
      <main className="flex-1 flex">
        <div className="flex flex-col md:flex-row w-full">
          {/* Liste des conversations (visible sur desktop, caché sur mobile si conversation ouverte) */}
          <div className="w-full md:w-1/3 border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Rechercher dans les messages" className="pl-8" />
              </div>
            </div>
            <Tabs defaultValue="all">
              <TabsList className="w-full justify-start px-4 pt-2">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="unread">Non lus</TabsTrigger>
                <TabsTrigger value="offers">Offres</TabsTrigger>
              </TabsList>
              <ScrollArea className="h-[calc(100vh-12rem)]">
                <TabsContent value="all" className="m-0">
                  {conversations.map((conversation) => (
                    <Link href={`/messages/${conversation.id}`} key={conversation.id}>
                      <div
                        className={`flex items-start gap-3 p-4 hover:bg-muted/50 ${conversation.id === 1 ? "bg-muted/50" : ""}`}
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={conversation.avatar} alt={conversation.user} />
                            <AvatarFallback>
                              {conversation.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium truncate">{conversation.user}</h3>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{conversation.time}</span>
                          </div>
                          <p
                            className={`text-sm truncate ${conversation.unread ? "font-medium" : "text-muted-foreground"}`}
                          >
                            {conversation.lastMessage}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <img
                              src={conversation.product.image || "/placeholder.svg"}
                              alt={conversation.product.name}
                              className="h-6 w-6 rounded object-cover"
                            />
                            <span className="text-xs text-muted-foreground truncate">{conversation.product.name}</span>
                          </div>
                        </div>
                        {conversation.unread && <Badge className="bg-teal-500 h-2 w-2 rounded-full p-0 ml-1" />}
                      </div>
                      <Separator />
                    </Link>
                  ))}
                </TabsContent>
                <TabsContent value="unread" className="m-0">
                  {conversations
                    .filter((c) => c.unread)
                    .map((conversation) => (
                      <Link href={`/messages/${conversation.id}`} key={conversation.id}>
                        <div className="flex items-start gap-3 p-4 hover:bg-muted/50">
                          <Avatar>
                            <AvatarImage src={conversation.avatar} alt={conversation.user} />
                            <AvatarFallback>
                              {conversation.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium truncate">{conversation.user}</h3>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {conversation.time}
                              </span>
                            </div>
                            <p className="text-sm font-medium truncate">{conversation.lastMessage}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <img
                                src={conversation.product.image || "/placeholder.svg"}
                                alt={conversation.product.name}
                                className="h-6 w-6 rounded object-cover"
                              />
                              <span className="text-xs text-muted-foreground truncate">
                                {conversation.product.name}
                              </span>
                            </div>
                          </div>
                          <Badge className="bg-teal-500 h-2 w-2 rounded-full p-0 ml-1" />
                        </div>
                        <Separator />
                      </Link>
                    ))}
                </TabsContent>
                <TabsContent value="offers" className="m-0">
                  <div className="p-8 text-center text-muted-foreground">
                    <p>Aucune offre en cours</p>
                  </div>
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>

          {/* Conversation active */}
          <div className="hidden md:flex flex-col w-full md:w-2/3">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=SM" alt="Sophie Martin" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-medium">Sophie Martin</h2>
                  <p className="text-xs text-muted-foreground">En ligne</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Info className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex items-center p-4 border-b bg-muted/30">
              <div className="flex items-center gap-3">
                <img
                  src="/placeholder.svg?height=60&width=60&text=Robe"
                  alt="Robe d'été fleurie"
                  className="h-12 w-12 rounded object-cover"
                />
                <div>
                  <h3 className="font-medium">Robe d'été fleurie</h3>
                  <p className="text-sm">19,99 €</p>
                </div>
              </div>
              <div className="ml-auto">
                <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600">
                  Envoyer demande de paiement
                </Button>
              </div>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                    <div className={`flex gap-2 max-w-[80%] ${message.isMe ? "flex-row-reverse" : ""}`}>
                      {!message.isMe && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=40&width=40&text=SM" alt="Sophie Martin" />
                          <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <div className={`rounded-lg p-3 ${message.isMe ? "bg-teal-500 text-white" : "bg-muted"}`}>
                          <p className="text-sm">{message.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Input placeholder="Écrivez un message..." className="flex-1" />
                <Button size="icon" className="bg-teal-500 hover:bg-teal-600">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

