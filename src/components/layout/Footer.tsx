import Link from "next/link";
import { Instagram, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80 font-sans">
      <div className="container-rly py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-serif text-3xl font-light tracking-[0.25em] uppercase text-cream mb-4">RLY</p>
            <p className="text-sm text-cream/50 leading-relaxed">
              Specialty coffee, roasted fresh in Singapore. No fluff, just great beans.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-cream/40 mb-5 font-semibold">Explore</p>
            <ul className="space-y-3">
              {[["Shop", "/shop"], ["Brew Guide", "/brew-guide"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-cream/60 hover:text-cream transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-cream/40 mb-5 font-semibold">Info</p>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>Shipping within Singapore</li>
              <li>Roasted to order</li>
              <li>3–5 day delivery</li>
              <li>Free shipping over $60</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-cream/40 mb-5 font-semibold">Connect</p>
            <div className="flex flex-col gap-4">
              <a
                href="https://instagram.com/rlycoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-cream/60 hover:text-cream transition-colors"
              >
                <Instagram size={16} /> @rlycoffee
              </a>
              <a
                href="https://wa.me/6512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-cream/60 hover:text-cream transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp us
              </a>
              <a
                href="mailto:hello@rlycoffee.com"
                className="flex items-center gap-3 text-sm text-cream/60 hover:text-cream transition-colors"
              >
                <Mail size={16} /> hello@rlycoffee.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-cream/30 tracking-wide">
          <p>© {new Date().getFullYear()} RLY Coffee. All rights reserved.</p>
          <p>Roasted with care in Singapore 🇸🇬</p>
        </div>
      </div>
    </footer>
  );
}
