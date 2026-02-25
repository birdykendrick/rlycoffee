"use client";
import { useState, useMemo } from "react";
import { products } from "@/data";
import ProductCard from "@/components/ui/ProductCard";
import FadeIn from "@/components/ui/FadeIn";
import { ChevronDown } from "lucide-react";

type Filter = "all" | "single-origin" | "blend" | "seasonal";
type Sort = "featured" | "price-asc" | "price-desc" | "name";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Single Origin", value: "single-origin" },
  { label: "Blends", value: "blend" },
  { label: "Seasonal", value: "seasonal" },
];

const sorts: { label: string; value: Sort }[] = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low–High", value: "price-asc" },
  { label: "Price: High–Low", value: "price-desc" },
  { label: "Name", value: "name" },
];

export default function ShopPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("featured");

  const filtered = useMemo(() => {
    let list = filter === "all" ? products : products.filter((p) => p.category === filter);
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
        break;
      case "price-desc":
        list = [...list].sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
        break;
      case "name":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [filter, sort]);

  return (
    <>
      {/* Hero */}
      <section className="bg-oat py-20 md:py-28 border-b border-oat-dark">
        <div className="container-rly text-center">
          <FadeIn>
            <p className="text-xs font-sans tracking-widest uppercase text-caramel mb-4">Our Selection</p>
            <h1 className="font-serif text-display-lg text-espresso mb-4">The Coffees</h1>
            <p className="font-sans text-espresso/60 max-w-md mx-auto leading-relaxed">
              Sourced, roasted, and packed with care. All specialty-grade, all under your budget.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[var(--nav-height)] z-30 bg-cream border-b border-oat-dark">
        <div className="container-rly py-4 flex items-center justify-between gap-4">
          {/* Category filters */}
          <div className="flex items-center gap-1 overflow-x-auto pb-0 scrollbar-none">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 text-xs font-sans tracking-widest uppercase whitespace-nowrap transition-all duration-200 ${
                  filter === f.value
                    ? "bg-espresso text-cream"
                    : "text-espresso/60 hover:text-espresso"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Sort */}
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

      {/* Grid */}
      <section className="section-pad bg-cream">
        <div className="container-rly">
          <p className="text-xs font-sans text-mist mb-8">{filtered.length} coffees</p>
          {filtered.length === 0 ? (
            <p className="text-center py-20 font-serif text-2xl text-espresso/30">No coffees in this category</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
