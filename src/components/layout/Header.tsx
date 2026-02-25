"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCart } from "@/lib/cart";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/brew-guide", label: "Brew Guide" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { count, dispatch } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-sm py-3"
            : "bg-cream py-5"
        )}
      >
        <div className="container-rly flex items-center justify-between">
          {/* Left nav — desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.slice(0, 2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx("nav-link", pathname === l.href && "nav-link-active")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-light tracking-[0.2em] uppercase text-espresso select-none">
            RLY
          </Link>

          {/* Right nav — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx("nav-link", pathname === l.href && "nav-link-active")}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => dispatch({ type: "OPEN" })}
              className="relative text-espresso hover:text-caramel transition-colors"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-caramel text-cream text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>

          {/* Mobile right */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => dispatch({ type: "OPEN" })}
              className="relative text-espresso"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-caramel text-cream text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="text-espresso"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col">
          <div className="flex items-center justify-between px-5 py-5">
            <Link href="/" className="font-serif text-2xl font-light tracking-[0.2em] uppercase text-espresso">
              RLY
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={22} strokeWidth={1.5} className="text-espresso" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8" aria-label="Mobile navigation">
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "font-serif text-4xl font-light tracking-wide text-espresso transition-colors hover:text-caramel",
                  pathname === l.href && "text-caramel"
                )}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="px-5 py-8 flex items-center gap-6 justify-center text-xs tracking-widest uppercase text-espresso/50 font-sans">
            <a href="https://instagram.com/rlycoffee" target="_blank" rel="noopener noreferrer" className="hover:text-espresso transition-colors">Instagram</a>
            <span>·</span>
            <a href="https://wa.me/6512345678" target="_blank" rel="noopener noreferrer" className="hover:text-espresso transition-colors">WhatsApp</a>
          </div>
        </div>
      )}
    </>
  );
}
