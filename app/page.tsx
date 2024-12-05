import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";
import { HeroSlider } from "@/components/hero-slider";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <ProductGrid products={products} />
        </section>
      </div>
    </div>
  );
}