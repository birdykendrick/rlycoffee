"use client";
import { useCart } from "@/lib/cart";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function CartDrawer() {
  const { state, dispatch, total, count } = useCart();
  const open = state.open;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-espresso/30 backdrop-blur-sm z-50"
            onClick={() => dispatch({ type: "CLOSE" })}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-oat-dark">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} strokeWidth={1.5} className="text-espresso" />
                <span className="font-sans text-sm font-medium tracking-widest uppercase text-espresso">
                  Cart ({count})
                </span>
              </div>
              <button onClick={() => dispatch({ type: "CLOSE" })} aria-label="Close cart">
                <X size={20} strokeWidth={1.5} className="text-espresso hover:text-caramel transition-colors" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={40} strokeWidth={1} className="text-oat-dark" />
                  <p className="font-serif text-2xl text-espresso/40">Your cart is empty</p>
                  <Link
                    href="/shop"
                    onClick={() => dispatch({ type: "CLOSE" })}
                    className="btn-outline text-xs py-2.5 px-6"
                  >
                    Shop Coffee
                  </Link>
                </div>
              ) : (
                <ul className="divide-y divide-oat-dark space-y-0">
                  {state.items.map((item) => (
                    <li key={`${item.product.id}-${item.weight}`} className="py-5 flex gap-4">
                      <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-oat">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-base text-espresso leading-tight">{item.product.name}</p>
                        <p className="text-xs text-mist mt-0.5">{item.weight}g</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 border border-oat-dark">
                            <button
                              onClick={() => dispatch({ type: "DECREMENT", id: item.product.id, weight: item.weight })}
                              className="p-1.5 hover:bg-oat transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-sm w-5 text-center">{item.quantity}</span>
                            <button
                              onClick={() => dispatch({ type: "INCREMENT", id: item.product.id, weight: item.weight })}
                              className="p-1.5 hover:bg-oat transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <p className="font-sans font-medium text-sm text-espresso">
                            ${((item.product.salePrice ?? item.product.price) * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => dispatch({ type: "REMOVE", id: item.product.id, weight: item.weight })}
                        className="text-mist hover:text-espresso transition-colors flex-shrink-0 mt-1"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-oat-dark px-6 py-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-sans text-espresso/70 tracking-wide">Subtotal</span>
                  <span className="font-serif text-xl text-espresso">${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-mist mb-5">Shipping calculated at checkout · Free over $60</p>
                <button className="btn-primary w-full justify-center text-xs">
                  Checkout <ArrowRight size={14} />
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
