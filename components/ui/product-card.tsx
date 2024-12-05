"use client";

import { Product } from "@/lib/products";
import { Button } from "./button";
import { useCartStore } from "@/lib/cart-store";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="group relative rounded-lg border p-4 hover:shadow-lg transition-shadow">
      <div className="aspect-square relative mb-4 overflow-hidden rounded-md">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}