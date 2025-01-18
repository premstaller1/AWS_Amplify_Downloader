import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Layout } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Layout className="h-6 w-6" />
          <span className="text-xl font-bold">Your Logo</span>
        </Link>
        <ul className="flex items-center space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        <Button size="sm">Sign In</Button>
      </div>
    </nav>
  )
}

