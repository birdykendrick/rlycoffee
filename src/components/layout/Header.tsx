"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";
import clsx from "clsx";
import { useCart } from "@/lib/cart";

// ── data ─────────────────────────────────────────────────────────────────────
const LEFT_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
];

const RIGHT_LINKS = [
  { href: "/brew-guide", label: "Brew Guide" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// ── component ─────────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { dispatch, count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const linkClass = (href: string) =>
    clsx(
      "relative text-[11px] uppercase tracking-[0.18em] font-medium transition-colors duration-200",
      "text-espresso/70 hover:text-espresso",
      "after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0",
      "after:bg-espresso after:transition-[width] after:duration-300 hover:after:w-full"
    );

  const CartButton = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
    <button
      onClick={() => dispatch({ type: "OPEN" })}
      className={clsx(
        "relative text-espresso/70 hover:text-espresso transition-colors duration-200",
        className
      )}
      aria-label={`Open cart, ${count} items`}
    >
      <ShoppingBag size={size} strokeWidth={1.5} />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-caramel text-cream text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
          {count}
        </span>
      )}
    </button>
  );

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-40",
          "transition-[background-color,box-shadow] duration-500 ease-in-out",
          scrolled
            ? "bg-[#f3efe7]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(62,44,30,0.08)]"
            : "bg-[#f3efe7]"
        )}
      >
        {/* ── Desktop ───────────────────────────────────────────────────── */}
        <div
          className={clsx(
            "hidden md:block relative w-full",
            "transition-[height] duration-500 ease-in-out",
            scrolled ? "h-[88px]" : "h-[160px]"
          )}
        >
          {/* Logo — absolutely centered, never affected by nav widths */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Link href="/" aria-label="RLY Coffee home" className="pointer-events-auto block">
              <Image
                src="/rly_logo.png"
                alt="RLY Coffee"
                width={760}
                height={300}
                priority
                className={clsx(
                  "w-auto transition-[height] duration-500 ease-in-out",
                  scrolled ? "h-[64px]" : "h-[124px]"
                )}
              />
            </Link>
          </div>

          {/* Left + right navs in a justify-between row — logo floats above independently */}
          <div className="flex h-full items-center justify-between px-12">
            {/* LEFT */}
            <nav className="flex items-center gap-8" aria-label="Primary left">
              {LEFT_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* RIGHT */}
            <nav className="flex items-center gap-8" aria-label="Primary right">
              {RIGHT_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                  {l.label}
                </Link>
              ))}
              <span className="h-3.5 w-px bg-espresso/20" aria-hidden />
              <CartButton size={18} />
            </nav>
          </div>
        </div>

        {/* ── Mobile ────────────────────────────────────────────────────── */}
        <div
          className={clsx(
            "flex md:hidden relative items-center justify-between px-5",
            "transition-[height] duration-500 ease-in-out",
            scrolled ? "h-[64px]" : "h-[80px]"
          )}
        >
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="text-espresso/70 hover:text-espresso transition-colors"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          {/* Logo — absolutely centered on mobile too */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Link href="/" aria-label="RLY Coffee home" className="pointer-events-auto block">
              <Image
                src="/rly_logo.png"
                alt="RLY Coffee"
                width={520}
                height={220}
                priority
                className={clsx(
                  "w-auto transition-[height] duration-500 ease-in-out",
                  scrolled ? "h-[40px]" : "h-[52px]"
                )}
              />
            </Link>
          </div>

          <CartButton size={20} />
        </div>

        {/* Bottom border */}
        <div
          className={clsx(
            "h-px w-full bg-espresso/10 transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-40"
          )}
        />
      </header>

      {/* ── Mobile Drawer ─────────────────────────────────────────────────── */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-espresso/20 backdrop-blur-sm md:hidden",
          "transition-opacity duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      <div
        className={clsx(
          "fixed top-0 left-0 z-50 h-full w-[280px] bg-[#f3efe7] md:hidden",
          "flex flex-col pt-8 pb-10 px-8",
          "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="self-end text-espresso/60 hover:text-espresso transition-colors mb-10"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <Link href="/" onClick={() => setMenuOpen(false)} className="mb-10 block">
          <Image
            src="/rly_logo.png"
            alt="RLY Coffee"
            width={520}
            height={220}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
          {[...LEFT_LINKS, ...RIGHT_LINKS].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[12px] uppercase tracking-[0.18em] font-medium text-espresso/70 hover:text-espresso transition-colors py-3 border-b border-espresso/10"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => { dispatch({ type: "OPEN" }); setMenuOpen(false); }}
          className="mt-8 flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-medium text-espresso/70 hover:text-espresso transition-colors"
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
          Bag {count > 0 && `(${count})`}
        </button>
      </div>
    </>
  );
}