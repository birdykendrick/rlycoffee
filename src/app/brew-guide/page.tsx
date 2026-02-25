"use client";
import { useState } from "react";
import Image from "next/image";
import { brewGuides } from "@/data";
import FadeIn from "@/components/ui/FadeIn";
import { Clock, Droplets, BarChart2, ChevronRight } from "lucide-react";
import clsx from "clsx";
import type { Metadata } from "next";

export default function BrewGuidePage() {
  const [activeGuide, setActiveGuide] = useState(brewGuides[0].id);
  const guide = brewGuides.find((g) => g.id === activeGuide)!;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-espresso">
        <Image
          src={guide.image}
          alt={guide.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 to-espresso/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-cream text-center px-5">
          <FadeIn>
            <p className="text-xs font-sans tracking-widest uppercase text-caramel mb-4">Brew Guides</p>
            <h1 className="font-serif text-display-lg text-cream">Brew Better at Home</h1>
          </FadeIn>
        </div>
      </section>

      {/* Tab switcher */}
      <section className="bg-oat border-b border-oat-dark sticky top-[var(--nav-height)] z-30">
        <div className="container-rly">
          <div className="flex">
            {brewGuides.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGuide(g.id)}
                className={clsx(
                  "px-8 py-5 text-xs font-sans tracking-widest uppercase border-b-2 transition-all duration-200",
                  activeGuide === g.id
                    ? "border-caramel text-espresso font-semibold"
                    : "border-transparent text-espresso/50 hover:text-espresso"
                )}
              >
                {g.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guide content */}
      <div className="section-pad bg-cream">
        <div className="container-rly">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="mb-10">
                <h2 className="font-serif text-display-md text-espresso mb-3">{guide.name}</h2>
                <p className="font-sans text-espresso/60 text-lg leading-relaxed">{guide.subtitle}</p>

                {/* Meta chips */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm font-sans text-espresso/70">
                    <Clock size={15} className="text-caramel" />
                    <span>{guide.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-sans text-espresso/70">
                    <Droplets size={15} className="text-caramel" />
                    <span>{guide.yield}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-sans text-espresso/70">
                    <BarChart2 size={15} className="text-caramel" />
                    <span>{guide.difficulty}</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Two columns: equipment + ingredients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <FadeIn delay={0.1}>
                <div className="bg-oat p-6">
                  <h3 className="font-serif text-xl text-espresso mb-4">Equipment</h3>
                  <ul className="space-y-2">
                    {guide.equipment.map((eq) => (
                      <li key={eq} className="flex items-center gap-2 text-sm font-sans text-espresso/70">
                        <div className="w-1 h-1 bg-caramel rounded-full" />
                        {eq}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="bg-oat p-6">
                  <h3 className="font-serif text-xl text-espresso mb-4">Recipe</h3>
                  <ul className="space-y-3">
                    {guide.ingredients.map((ing) => (
                      <li key={ing.label} className="flex justify-between text-sm font-sans">
                        <span className="text-espresso/60">{ing.label}</span>
                        <span className="font-medium text-espresso">{ing.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Steps */}
            <FadeIn delay={0.2}>
              <h3 className="font-serif text-2xl text-espresso mb-6">Steps</h3>
              <div className="space-y-0">
                {guide.steps.map((step, i) => (
                  <div key={step.title} className="flex gap-6 pb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-espresso text-cream flex items-center justify-center text-xs font-sans font-medium flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < guide.steps.length - 1 && <div className="w-px flex-1 bg-oat-dark mt-2" />}
                    </div>
                    <div className="flex-1 pb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-serif text-lg text-espresso">{step.title}</h4>
                        {step.duration && (
                          <span className="text-xs font-sans text-caramel bg-caramel/10 px-2 py-0.5">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-sm text-espresso/65 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Tips */}
            <FadeIn delay={0.3}>
              <div className="bg-espresso text-cream p-8 mt-4">
                <h3 className="font-serif text-xl text-cream mb-4">Pro Tips</h3>
                <ul className="space-y-3">
                  {guide.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-sans text-cream/70">
                      <ChevronRight size={14} className="text-caramel flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
}
