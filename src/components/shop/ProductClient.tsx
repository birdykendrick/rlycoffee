"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data";
import { useCart } from "@/lib/cart";
import RoastIndicator from "@/components/ui/RoastIndicator";
import { ArrowLeft, Plus, Minus, ShoppingBag, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// If you already export a Product type from your data file, use that instead.
// e.g. import type { Product } from "@/data";
type Product = (typeof products)[number];

export default function ProductClient({ product }: { product: Product }) {
  const { dispatch } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
  const [qty, setQty] = useState(1);
  const [faqOpen, setFaqOpen] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const price = (product.salePrice ?? product.price) * (selectedWeight / 200);

  function addToCart() {
    dispatch({ type: "ADD", product, weight: selectedWeight });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const faqs = [
    {
      q: "When will my order ship?",
      a: "We roast and ship within 1–2 business days. Singapore delivery takes 1–3 days after dispatch.",
    },
    {
      q: "How fresh is the coffee?",
      a: "Roasted to order — we roast the week you order, so your beans are always fresh off the drum.",
    },
    {
      q: "What grind size should I choose?",
      a: "We recommend whole beans for maximum freshness. Grind right before brewing for the best cup.",
    },
    {
      q: "Do you offer returns?",
      a: "We stand by our coffee. If you&apos;re not happy, reach out — we&apos;ll make it right.",
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      <div className="container-rly py-10">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-mist hover:text-espresso transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-square bg-oat overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <p className="text-xs font-sans tracking-widest uppercase text-caramel mb-3 capitalize">
              {product.category.replace("-", " ")}
            </p>

            <h1 className="font-serif text-display-md text-espresso mb-2">
              {product.name}
            </h1>
            <p className="font-sans text-mist text-sm mb-6">
              {product.origin} · {product.process}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.tastingNotes.map((note) => (
                <span
                  key={note}
                  className="text-xs font-sans border border-oat-dark text-espresso/70 px-3 py-1"
                >
                  {note}
                </span>
              ))}
            </div>

            <div className="mb-6">
              <p className="text-xs font-sans tracking-widest uppercase text-mist mb-2">
                Roast Level
              </p>
              <RoastIndicator level={product.roastLevel} />
            </div>

            {product.altitude && (
              <div className="grid grid-cols-2 gap-4 border-y border-oat-dark py-5 mb-6">
                <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-mist mb-1">
                    Altitude
                  </p>
                  <p className="font-sans text-sm text-espresso">
                    {product.altitude}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-mist mb-1">
                    Process
                  </p>
                  <p className="font-sans text-sm text-espresso">
                    {product.process}
                  </p>
                </div>
              </div>
            )}

            <p className="font-sans text-espresso/70 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-6">
              <p className="text-xs font-sans tracking-widest uppercase text-mist mb-3">
                Weight
              </p>
              <div className="flex gap-3">
                {product.weights.map((w) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className={clsx(
                      "px-4 py-2 text-sm font-sans border transition-all duration-200",
                      selectedWeight === w
                        ? "border-espresso bg-espresso text-cream"
                        : "border-oat-dark text-espresso hover:border-espresso"
                    )}
                  >
                    {w}g
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center border border-oat-dark">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="p-3 hover:bg-oat transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 text-sm font-sans">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="p-3 hover:bg-oat transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>

              <div className="text-right">
                {product.salePrice && (
                  <p className="text-xs text-mist line-through">
                    ${(product.price * (selectedWeight / 200)).toFixed(2)}
                  </p>
                )}
                <p className="font-serif text-2xl text-espresso">
                  ${price.toFixed(2)}
                </p>
              </div>
            </div>

            {product.soldOut ? (
              <button
                disabled
                className="btn-primary w-full justify-center opacity-50 cursor-not-allowed"
              >
                Sold Out
              </button>
            ) : (
              <button
                onClick={addToCart}
                className={clsx(
                  "btn-primary w-full justify-center transition-all",
                  added && "bg-caramel"
                )}
              >
                <ShoppingBag size={16} strokeWidth={1.5} />
                {added ? "Added!" : "Add to Cart"}
              </button>
            )}

            <p className="text-xs text-center text-mist mt-4 font-sans">
              Free shipping over $60 · Roasted fresh within 48 hours
            </p>

            <div className="mt-10 border-t border-oat-dark">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-oat-dark">
                  <button
                    onClick={() => setFaqOpen(faqOpen === faq.q ? null : faq.q)}
                    className="w-full flex items-center justify-between py-4 text-left text-sm font-sans text-espresso hover:text-caramel transition-colors"
                  >
                    {faq.q}
                    <ChevronDown
                      size={16}
                      className={clsx(
                        "flex-shrink-0 transition-transform duration-200",
                        faqOpen === faq.q && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {faqOpen === faq.q && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-espresso/60 font-sans pb-4 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-20 pt-16 border-t border-oat-dark">
          <h2 className="font-serif text-2xl text-espresso mb-8">
            You might also like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <div key={p.id}>
                  <Link href={`/shop/${p.slug}`} className="group block">
                    <div className="relative aspect-square bg-oat overflow-hidden mb-3">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="font-serif text-base text-espresso group-hover:text-caramel transition-colors">
                      {p.name}
                    </p>
                    <p className="text-xs font-sans text-mist mt-0.5">
                      ${p.salePrice ?? p.price}
                    </p>
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}