"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingBag, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Mac", href: "/mac" },
  { name: "iPad", href: "/ipad" },
  { name: "iPhone", href: "/iphone" },
  { name: "Watch", href: "/watch" },
  { name: "AirPods", href: "/airpods" },
  { name: "TV & Home", href: "/tv-home" },
  { name: "Entertainment", href: "/entertainment" },
  { name: "Accessories", href: "/accessories" },
  { name: "Support", href: "/support" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md fixed w-full z-50 border-b ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Apple className="h-8 w-8 " />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex  md:justify-center md:items-center md:gap-4 w-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-900 hover:text-gray-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 " />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5 " />
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? (
                    <X className="h-6 w-6 " />
                  ) : (
                    <Menu className="h-6 w-6 " />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg  "
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex space-x-4 pt-4">
                    <Button variant="ghost" size="icon">
                      <Search className="h-5 w-5 " />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ShoppingBag className="h-5 w-5 " />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
