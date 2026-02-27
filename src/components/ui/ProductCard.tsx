"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus, ShoppingBag } from "lucide-react";
import { Product } from "@/data";
import { useCart } from "@/lib/cart";
import { motion } from "framer-motion";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { dispatch } = useCart();

  const bg = product.bg ?? { from: "#2c1810", via: "#6b3a2a", to: "#f3eee7" };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      <Link href={`/shop/${product.slug}`} className="flex flex-col flex-1">

        {/* ── Gradient image area ───────────────────────────────────── */}
        <div
          className="relative aspect-[4/4] overflow-hidden"
          style={{
            background: `linear-gradient(160deg, ${bg.from} 0%, ${bg.via} 55%, ${bg.to} 100%)`,
          }}
        >
          {/* Product image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            className="object-contain transition-transform duration-700 group-hover:scale-[1.06] drop-shadow-2xl p-4"
          />

          {/* Sale / badge pill */}
          {(product.badge || product.soldOut || product.salePrice) && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-sans font-semibold tracking-widest uppercase bg-espresso text-cream">
                {product.soldOut ? "Sold Out" : product.badge || "Sale"}
              </span>
            </div>
          )}

          {/* Quick-add button — appears on hover */}
          {!product.soldOut && (
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "ADD", product, weight: product.weights[0] });
              }}
              className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-cream/90 backdrop-blur-sm text-espresso flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-espresso hover:text-cream shadow-md"
              aria-label={`Quick add ${product.shortName} to cart`}
            >
              <Plus size={15} strokeWidth={2} />
            </button>
          )}
        </div>

        {/* ── Dark info footer ──────────────────────────────────────── */}
        <div className="bg-espresso px-4 pt-4 pb-5 flex-1 flex flex-col gap-3">

          {/* Name */}
          <h3 className="font-serif text-cream text-base leading-snug group-hover:text-caramel transition-colors duration-200">
            {product.name}
          </h3>

          {/* Tasting notes */}
          <p className="font-sans text-[11px] tracking-wide text-cream/40 uppercase">
            {product.tastingNotes.join(" · ")}
          </p>

          {/* Price row */}
          <div className="flex items-center justify-between mt-auto pt-1">
            <div className="flex items-baseline gap-2">
              {product.salePrice ? (
                <>
                  <span className="font-sans text-sm font-semibold text-cream">
                    ${product.salePrice.toFixed(2)} SGD
                  </span>
                  <span className="font-sans text-xs text-cream/35 line-through">
                    ${product.price.toFixed(2)} SGD
                  </span>
                </>
              ) : (
                <span className="font-sans text-sm font-semibold text-cream">
                  ${product.price.toFixed(2)} SGD
                </span>
              )}
            </div>

            {/* Add to cart — always visible on mobile, hover on desktop */}
            {!product.soldOut && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "ADD", product, weight: product.weights[0] });
                }}
                className="flex items-center gap-1.5 font-sans text-[10px] tracking-widest uppercase text-cream/50 hover:text-cream transition-colors duration-200 md:opacity-0 md:group-hover:opacity-100"
                aria-label={`Add ${product.shortName} to cart`}
              >
                <ShoppingBag size={12} strokeWidth={1.5} />
                Add
              </button>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}