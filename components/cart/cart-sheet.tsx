"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useCartStore } from "@/lib/cart-store";
import { CartItem } from "./cart-item";
import { ScrollArea } from "../ui/scroll-area";
import { useState } from "react";

export function CartSheet() {
  const { items, clearCart } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-6">
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-4 pr-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </ScrollArea>
        {items.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="space-y-2">
              <Button className="w-full">Checkout</Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  clearCart();
                  setIsOpen(false);
                }}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}