"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Product } from "@/data";
import { useCart } from "@/lib/cart";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { dispatch } = useCart();

  const badgeClass = product.soldOut
    ? "badge-sold"
    : product.badge === "Limited"
    ? "badge-limited"
    : product.badge === "Fan Favourite"
    ? "badge-fav"
    : "badge-sale";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <Link href={`/shop/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden bg-oat aspect-[4/5] mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Badge */}
          {(product.badge || product.soldOut || product.salePrice) && (
            <div className="absolute top-3 left-3">
              <span className={badgeClass}>
                {product.soldOut ? "Sold Out" : product.badge || "Sale"}
              </span>
            </div>
          )}
          {/* Quick add */}
          {!product.soldOut && (
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "ADD", product, weight: product.weights[0] });
              }}
              className="absolute bottom-3 right-3 bg-cream text-espresso w-10 h-10 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-espresso hover:text-cream"
              aria-label={`Quick add ${product.name} to cart`}
            >
              <Plus size={16} strokeWidth={1.5} />
            </button>
          )}
        </div>

        {/* Info */}
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-lg text-espresso leading-tight group-hover:text-caramel transition-colors">
              {product.name}
            </h3>
            <div className="text-right flex-shrink-0">
              {product.salePrice ? (
                <>
                  <span className="font-sans text-sm font-medium text-rose">${product.salePrice}</span>
                  <span className="font-sans text-xs text-mist line-through ml-1">${product.price}</span>
                </>
              ) : (
                <span className="font-sans text-sm font-medium text-espresso">${product.price}</span>
              )}
            </div>
          </div>
          <p className="text-xs font-sans text-mist tracking-wide">{product.origin} · {product.process}</p>
          <p className="text-xs font-sans text-espresso/60">
            {product.tastingNotes.join(" · ")}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
