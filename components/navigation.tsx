"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const productCategories = [
  "High component capacitors",
  "DC capacitors",
  "High voltage DC capacitors",
  "Tantalum rods",
  "Tantalum sheets",
  "Titanium sheets",
  "Titanium rods",
  "Copper",
  "Stainless steel",
];

const technicalCategories = [
  "Stainless Steel Pipes",
  "Carbon Steel Pipes",
  "Alloy Steel Pipes",
  "Chemical Composition of Nickel Alloys",
  "Aluminium",
  "Titanium",
  "Pipe Data",
  "Mild Steel921",
  "Buttweld Fittings",
  "Socketweld Fittings",
  "Flanges Dimensions",
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-t">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="hidden lg:flex">
            <Link
              href="/"
              className="px-6 py-3 bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
            >
              HOME
            </Link>

            <Link
              href="/about"
              className="px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors border-r border-gray-300"
            >
              ABOUT US
            </Link>

            <Link
              href="/quality"
              className="px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors border-r border-gray-300"
            >
              QUALITY
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors border-r border-gray-300 flex items-center gap-1">
                PRODUCTS
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {productCategories.map((category) => (
                  <DropdownMenuItem key={category} asChild>
                    <Link
                      href={`/products/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {category}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors border-r border-gray-300 flex items-center gap-1">
                TECHNICAL-INFO
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {technicalCategories.map((category) => (
                  <DropdownMenuItem key={category} asChild>
                    <Link
                      href={`/technical/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {category}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/enquiry"
              className="px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors border-r border-gray-300"
            >
              ENQUIRY
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              CONTACT US
            </Link>
          </div>

          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="text-lg font-semibold text-gray-800">Menu</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-2 bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>

              <Link
                href="/about"
                className="px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>

              <Link
                href="/quality"
                className="px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                QUALITY
              </Link>

              <Link
                href="/products"
                className="px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PRODUCTS
              </Link>

              <Link
                href="/technical"
                className="px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                TECHNICAL-INFO
              </Link>

              <Link
                href="/enquiry"
                className="px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ENQUIRY
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
