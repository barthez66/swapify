import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
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
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Bienvenue sur Swapify</h1>
            <p className="text-muted-foreground mt-2">Connectez-vous ou créez un compte</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="register">Inscription</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="space-y-6 pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Link href="/forgot-password" className="text-sm text-teal-500 hover:underline">
                      Mot de passe oublié?
                    </Link>
                  </div>
                  <Input id="password" type="password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Se souvenir de moi
                  </Label>
                </div>
              </div>
              <Button className="w-full bg-teal-500 hover:bg-teal-600">Se connecter</Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">Google</Button>
                <Button variant="outline">Facebook</Button>
              </div>
            </TabsContent>
            <TabsContent value="register" className="space-y-6 pt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Prénom</Label>
                    <Input id="first-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Nom</Label>
                    <Input id="last-name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-register">Email</Label>
                  <Input id="email-register" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-register">Mot de passe</Label>
                  <Input id="password-register" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    J'accepte les{" "}
                    <Link href="/terms" className="text-teal-500 hover:underline">
                      conditions d'utilisation
                    </Link>
                  </Label>
                </div>
              </div>
              <Button className="w-full bg-teal-500 hover:bg-teal-600">S'inscrire</Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">Google</Button>
                <Button variant="outline">Facebook</Button>
              </div>
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

