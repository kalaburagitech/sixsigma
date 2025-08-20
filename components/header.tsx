import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Top colored bars */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-green-600"></div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="6sigma Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-teal-600">6sigma</h1>
              <p className="text-sm text-gray-600">Metal Supply Corporation</p>
            </div>
          </Link>

          {/* Search */}
          <div className="relative w-full max-w-md">
            <Input
              type="search"
              placeholder="Search products..."
              className="pr-10"
              aria-label="Search products"
            />
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </header>
  );
}
