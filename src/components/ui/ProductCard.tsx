"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus, ShoppingBag } from "lucide-react";
import { Product } from "@/data";
import { useCart } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();

  return (
    <article className="group relative flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500">
      <Link href={`/shop/${product.slug}`} className="flex flex-col flex-1">

        {/* Image area */}
        <div className="relative aspect-[4/4] overflow-hidden bg-espresso">
          <Image
            src={product.image}
            alt={product.name}
            fill
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out select-none"
          />

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {(product.badge || product.soldOut || product.salePrice) && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[9px] font-sans font-bold tracking-[0.15em] uppercase bg-espresso text-cream shadow-sm">
                {product.soldOut ? "Sold Out" : product.badge || "Sale"}
              </span>
            </div>
          )}

          {!product.soldOut && (
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "ADD", product, weight: product.weights[0] });
              }}
              className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-cream/95 backdrop-blur-sm text-espresso flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-espresso hover:text-cream shadow-lg active:scale-95"
              aria-label={`Quick add ${product.shortName} to cart`}
            >
              <Plus size={16} strokeWidth={2.5} />
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="bg-espresso px-4 pt-4 pb-5 flex-1 flex flex-col gap-2.5">

          {/* Product name — sans-serif to match screenshot */}
          <h3 className="font-sans text-cream text-base font-normal leading-snug group-hover:text-caramel transition-colors duration-300">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mt-auto pt-1.5 border-t border-cream/10">
            <div className="flex items-baseline gap-2">
              {product.salePrice ? (
                <>
                  <span className="font-sans text-xs text-cream/40 line-through">
                    ${product.price.toFixed(2)} SGD
                  </span>
                  <span className="font-sans text-base font-bold text-cream">
                    ${product.salePrice.toFixed(2)} SGD
                  </span>
                </>
              ) : (
                <span className="font-sans text-base font-bold text-cream">
                  ${product.price.toFixed(2)} SGD
                </span>
              )}
            </div>

            {!product.soldOut && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "ADD", product, weight: product.weights[0] });
                }}
                className="flex items-center gap-1.5 font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-cream/40 hover:text-caramel transition-colors duration-200 md:opacity-0 md:group-hover:opacity-100 active:scale-95"
                aria-label={`Add ${product.shortName} to cart`}
              >
                <ShoppingBag size={13} strokeWidth={1.5} />
                Add
              </button>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
