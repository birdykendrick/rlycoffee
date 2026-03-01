"use client";
import { useState, useMemo } from "react";
import { products } from "@/data";
import ProductCard from "@/components/ui/ProductCard";
import FadeIn from "@/components/ui/FadeIn";
import { ChevronDown } from "lucide-react";

type Sort = "featured" | "price-asc" | "price-desc" | "name";

const sorts: { label: string; value: Sort }[] = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low–High", value: "price-asc" },
  { label: "Price: High–Low", value: "price-desc" },
  { label: "Name", value: "name" },
];

export default function ShopPage() {
  const [sort, setSort] = useState<Sort>("featured");

  const sorted = useMemo(() => {
    let list = [...products];
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
      case "price-desc":
        return list.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
      case "name":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [sort]);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[280px] md:h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=2400&q=80"
          alt="Coffee beans"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-espresso/50" />
        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <FadeIn>
            <p className="text-xs font-sans tracking-widest uppercase text-cream/80 mb-3">Our Selection</p>
            <h1 className="font-serif text-display-lg text-cream mb-3">The Coffees</h1>
            <p className="font-sans text-cream/70 max-w-md mx-auto leading-relaxed text-sm">
              Sourced, roasted, and packed with care. All specialty-grade, all under your budget.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sort bar */}
      <section className="sticky top-[var(--nav-height)] z-30 bg-cream border-b border-oat-dark">
        <div className="container-rly py-4 flex items-center justify-end gap-4">
          <div className="relative flex-shrink-0">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="appearance-none bg-transparent border border-oat-dark text-xs font-sans tracking-wide text-espresso pl-3 pr-8 py-2 focus:outline-none focus:border-caramel cursor-pointer"
            >
              {sorts.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-mist" />
          </div>
        </div>
      </section>

      {/* Grid — pt-4 to reduce the gap */}
      <section className="bg-cream pt-4 pb-16 md:pb-24">
        <div className="container-rly">
          <p className="text-xs font-sans text-mist mb-6">{sorted.length} Coffee Flavours</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}