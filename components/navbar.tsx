import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Layout } from 'lucide-react'
 
import { cn } from "@/lib/utils"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Layout className="h-6 w-6" />
          <span className="text-xl font-bold">Your Logo</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


        <Button size="sm">Sign In</Button>
      </div>
    </nav>
  )
}

