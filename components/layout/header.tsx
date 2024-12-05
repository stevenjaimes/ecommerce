"use client";

import { Menu, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartSheet } from "../cart/cart-sheet";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Link href="#" className="text-lg">
                  Categories
                </Link>
                <Link href="#" className="text-lg">
                  New Arrivals
                </Link>
                <Link href="#" className="text-lg">
                  Sale
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            ModernHome
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium">
              Categories
            </Link>
            <Link href="#" className="text-sm font-medium">
              New Arrivals
            </Link>
            <Link href="#" className="text-sm font-medium">
              Sale
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px]"
              />
              <Button size="icon" variant="ghost">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <CartSheet />
          </div>
        </div>
      </div>
    </header>
  );
}