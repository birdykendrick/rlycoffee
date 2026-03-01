import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { products } from "@/data";
import ProductCard from "@/components/ui/ProductCard";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "RLY Coffee — Specialty Coffee, Roasted Fresh in Singapore",
  description: "Specialty beans without the specialty markup. Roasted fresh in Singapore, delivered to your door.",
};

const featured = products.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden bg-espresso">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=85"
          alt="Freshly brewed coffee"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 scale-[1.02]"
        />

        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/10 to-espresso/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/20 via-transparent to-espresso/20" />

        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <div className="relative h-full flex flex-col items-center justify-center text-center text-cream px-5">

          {/* Eyebrow — small caps, spaced, with decorative flanking lines */}
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4 mb-7">
              <span className="block w-8 h-px bg-cream/30" />
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-cream/60">
                Roasted Fresh in Singapore
              </p>
              <span className="block w-8 h-px bg-cream/30" />
            </div>
          </FadeIn>

          {/* Hero headline — massive, editorial, slightly italic serif */}
          <FadeIn delay={0.2}>
            <h1
              className="font-serif font-light italic text-cream leading-[0.88] tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(4rem, 13vw, 11rem)" }}
            >
              The Real Deal.
            </h1>
          </FadeIn>

          {/* Thin rule under headline */}
          <FadeIn delay={0.3}>
            <div className="w-12 h-px bg-caramel/70 mb-8" />
          </FadeIn>

          {/* Body copy */}
          <FadeIn delay={0.4}>
            <p className="font-sans text-sm md:text-base text-cream/70 max-w-sm md:max-w-md mb-10 leading-[1.8] tracking-wide">
              At Rly Coffee, we&apos;re all about bringing great coffee to everyone.{" "}
              <span className="text-cream/90 font-medium">
                Real, Roasted, Right To Your Doorstep.
              </span>
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.55}>
            <Link
              href="/shop"
              className="btn-caramel group flex items-center gap-2"
            >
              Shop Coffee
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </FadeIn>
        </div>

        {/* Scroll cue — animated line drop */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream/30 mb-1">
            Scroll
          </span>
          <div className="relative w-px h-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-cream/40 animate-scroll-line" style={{ height: "100%" }} />
          </div>
        </div>

        {/* Scroll line animation — add to your globals.css */}
        {/* 
    @keyframes scroll-line {
      0%   { transform: translateY(-100%); opacity: 1; }
      80%  { opacity: 1; }
      100% { transform: translateY(100%); opacity: 0; }
    }
    .animate-scroll-line {
      animation: scroll-line 1.8s ease-in-out infinite;
    }
  */}
      </section>

      {/* Trust bar */}
      <section className="bg-oat border-y border-oat-dark">
        <div className="container-rly py-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ["Roasted to Order", "Fresh every time"],
              ["Single Origins", "Direct trade beans"],
              ["Next-Day Delivery", "Singapore only"],
              ["100% Specialty", "Scored 80+ SCA"],
            ].map(([title, sub]) => (
              <li key={title}>
                <p className="font-serif text-base text-espresso">{title}</p>
                <p className="text-xs font-sans text-mist mt-0.5">{sub}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container-rly">

          <FadeIn>
            <div className="flex items-end justify-between mb-3">
              <div>
                <h2
                  className="font-serif text-espresso leading-none"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  Our Bestsellers
                </h2>
              </div>
              <Link
                href="/shop"
                className="hidden md:flex items-center gap-2 font-sans text-[11px] tracking-[0.18em] uppercase text-caramel hover:text-espresso transition-colors duration-200 group"
              >
                View All
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="w-full h-px bg-espresso/8 mt-6 mb-10" />
          </FadeIn>

          {/* Only first 4 featured products */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {featured.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Mobile view all */}
          <div className="mt-10 text-center md:hidden">
            <Link href="/shop" className="btn-outline text-xs">
              View All Coffees <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-oat overflow-hidden">
        <div className="container-rly">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-[4/5] bg-espresso overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=900&q=80"
                  alt="Coffee roasting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  draggable={false}
                  className="object-cover opacity-90 select-none pointer-events-none"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div className="max-w-lg">
                <div className="flex items-center gap-2 mb-6">
                  <MapPin size={14} className="text-caramel" />
                  <p className="text-xs font-sans tracking-widest uppercase text-caramel">
                    Roasted in Singapore
                  </p>
                </div>
                <h2 className="font-serif text-display-md text-espresso mb-6">
                  Coffee without<br />the compromise.
                </h2>
                <p className="font-sans text-espresso/70 leading-relaxed mb-4">
                  We started RLY to prove exceptional coffee can be affordable without sacrificing flavour. So we built relationships with growers who care, and we roast their beans fresh, every single week.
                </p>
                <p className="font-sans text-espresso/70 leading-relaxed mb-10">
                  No middlemen. No warehouse stock. Just honest, traceable specialty coffee, roasted to order and delivered to your door.
                </p>
                <Link href="/about" className="btn-outline">
                  Our Story <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Brew Better */}
      <section className="relative section-pad bg-espresso text-cream overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=1600&q=80"
          alt="Espresso being pulled"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />

        {/* Vignette overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-transparent to-espresso/60" />

        <div className="relative container-rly flex flex-col items-center text-center">
          <FadeIn>
            {/* Label */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="block w-6 h-px bg-caramel" />
              <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-caramel font-semibold">
                Brew Guides
              </p>
              <span className="block w-6 h-px bg-caramel" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-display-lg text-cream mb-6 leading-[1.1]">
              Brew café-level<br />coffee at home.
            </h2>

            {/* Body */}
            <p className="font-sans text-cream/60 max-w-sm mx-auto mb-10 leading-relaxed text-sm">
              Step-by-step guides for V60 pour-over and espresso
              written for everyone, not just baristas.
            </p>

            <Link href="/brew-guide" className="btn-caramel">
              Explore Brew Guides <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="section-pad bg-cream">
        <div className="container-rly text-center">
          <FadeIn>
            <h2 className="font-serif text-display-md text-espresso mb-4">Follow the roast.</h2>
            <p className="font-sans text-espresso/60 mb-8 max-w-sm mx-auto">
              Behind-the-scenes, brew tips, and new coffees — all on Instagram.
            </p>
            <a
              href="https://instagram.com/rlycoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              @rlycoffee <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
