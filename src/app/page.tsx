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
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/10 via-transparent to-espresso/60" />

        <div className="relative h-full flex flex-col items-center justify-center text-center text-cream px-5">
          <FadeIn delay={0.1}>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/70 mb-6">
              Roasted fresh · Singapore
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-display-xl font-light mb-6 text-cream">
              The Real Deal.
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="font-sans text-base md:text-lg text-cream/80 max-w-md mb-10 leading-relaxed">
              Specialty beans without the specialty markup. Craft coffee, roasted to order.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <Link href="/shop" className="btn-caramel">
              Shop Coffee <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
          <div className="w-px h-10 bg-cream/30" />
        </div>
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
      <section className="section-pad bg-cream">
        <div className="container-rly">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-sans tracking-widest uppercase text-caramel mb-2">Our Coffees</p>
                <h2 className="font-serif text-display-md text-espresso">Bestsellers</h2>
              </div>
              <Link href="/shop" className="nav-link hidden md:block text-caramel after:bg-caramel">
                View all →
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

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
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
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
                  We started RLY because we believed great coffee shouldn&apos;t cost a small fortune — or taste like one. So we built relationships with growers who care, and we roast their beans fresh, every single week.
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
        <div className="relative container-rly text-center">
          <FadeIn>
            <p className="text-xs font-sans tracking-widest uppercase text-caramel mb-4">Free Guides</p>
            <h2 className="font-serif text-display-lg text-cream mb-6">
              Brew café-level<br />coffee at home.
            </h2>
            <p className="font-sans text-cream/60 max-w-md mx-auto mb-10 leading-relaxed">
              Step-by-step guides for V60 pour-over and espresso, written for real people — not baristas.
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
