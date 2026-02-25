import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind RLY Coffee — specialty coffee roasted fresh in Singapore.",
};

const values = [
  {
    title: "Radical transparency",
    description: "We name the farm, the farmer, and the process. You deserve to know where your coffee comes from.",
  },
  {
    title: "Roasted to order",
    description: "No warehouse stock. We roast your beans the week you order, so every bag is as fresh as it gets.",
  },
  {
    title: "Specialty only",
    description: "Every bean we source scores 80+ on the SCA scale. If it doesn&apos;t cup well, it doesn&apos;t ship.",
  },
  {
    title: "Fair prices",
    description: "Great coffee doesn&apos;t have to be expensive. We cut the middlemen, not the quality.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden bg-espresso">
        <Image
          src="https://images.unsplash.com/photo-1532374281531-66e059bdfd7e?w=1600&q=80"
          alt="Coffee sourcing"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/20 to-espresso/70" />
        <div className="relative h-full flex flex-col items-end justify-end pb-16 px-5 md:px-16">
          <FadeIn direction="left">
            <h1 className="font-serif text-display-xl text-cream max-w-2xl text-right leading-none">
              Honest coffee.<br />Nothing more.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Origin story */}
      <section className="section-pad bg-cream">
        <div className="container-rly">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] bg-oat overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501747315-124a0eaca060?w=900&q=80"
                  alt="Roasting process"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div>
                <p className="text-xs font-sans tracking-widest uppercase text-caramel mb-6">Our Story</p>
                <h2 className="font-serif text-display-md text-espresso mb-6">
                  We started RLY because we were tired of paying too much for coffee that tasted average.
                </h2>
                <div className="space-y-4 font-sans text-espresso/65 leading-relaxed">
                  <p>
                    Singapore has an incredible coffee culture — but specialty coffee here can cost a fortune. We thought that was backwards. Great beans should be accessible. Freshness should be standard, not a premium.
                  </p>
                  <p>
                    So we built RLY: a small roastery focused on sourcing beautiful single origins and thoughtful blends, and roasting them fresh every single week. No gimmicks. No warehouse stock. Just coffee, done right.
                  </p>
                  <p>
                    We work directly with importers who share our values — traceability, fair prices for farmers, and quality above all. If we wouldn&apos;t drink it, we don&apos;t sell it.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad bg-espresso text-cream overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80"
          alt="Coffee beans"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="relative container-rly text-center">
          <FadeIn>
            <p className="text-xs font-sans tracking-widest uppercase text-caramel mb-6">Mission</p>
            <h2 className="font-serif text-display-lg text-cream max-w-3xl mx-auto mb-6 leading-tight">
              &ldquo;Specialty beans without the specialty markup.&rdquo;
            </h2>
            <p className="font-sans text-cream/60 max-w-xl mx-auto text-lg leading-relaxed">
              We believe transparency, freshness, and great taste should be the baseline — not the exception.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-oat">
        <div className="container-rly">
          <FadeIn>
            <p className="text-xs font-sans tracking-widest uppercase text-caramel mb-4 text-center">Why RLY</p>
            <h2 className="font-serif text-display-md text-espresso text-center mb-16">What we stand for</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="bg-cream p-8 h-full">
                  <div className="w-8 h-px bg-caramel mb-5" />
                  <h3 className="font-serif text-xl text-espresso mb-3">{v.title}</h3>
                  <p className="font-sans text-sm text-espresso/65 leading-relaxed">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="section-pad bg-cream">
        <div className="container-rly text-center">
          <FadeIn>
            <h2 className="font-serif text-display-md text-espresso mb-4">Come say hi.</h2>
            <p className="font-sans text-espresso/60 mb-10 max-w-sm mx-auto leading-relaxed">
              Follow us on Instagram or drop us a WhatsApp — we love hearing from coffee lovers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://instagram.com/rlycoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Instagram size={16} /> @rlycoffee
              </a>
              <a
                href="https://wa.me/6512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
