"use client";
import { useState } from "react";
import { Instagram, MessageCircle, Mail, ChevronDown, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const faqs = [
  { q: "How long does shipping take?", a: "We roast and dispatch within 1–2 business days. Delivery in Singapore takes 1–3 business days after dispatch." },
  { q: "Do you ship internationally?", a: "Currently Singapore only. We&apos;re working on international shipping — follow our Instagram for updates." },
  { q: "How fresh are the beans?", a: "All coffee is roasted to order. Your beans will be 1–7 days off-roast when they arrive. Optimal brewing window is days 5–21." },
  { q: "What is your return policy?", a: "If you&apos;re not happy with your order for any reason, get in touch. We&apos;ll replace it or refund it, no questions asked." },
  { q: "Can I visit your roastery?", a: "We&apos;re a small operation — we don&apos;t have a retail front, but drop us a WhatsApp and we can sometimes arrange a visit." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit() {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-oat py-20 md:py-28 border-b border-oat-dark">
        <div className="container-rly text-center">
          <FadeIn>
            <p className="text-xs font-sans tracking-widest uppercase text-caramel mb-4">Get in Touch</p>
            <h1 className="font-serif text-display-lg text-espresso mb-4">Let&apos;s talk coffee.</h1>
            <p className="font-sans text-espresso/60 max-w-md mx-auto leading-relaxed">
              Questions, wholesale enquiries, or just want to say hi — we&apos;re real people and we read every message.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-cream">
        <div className="container-rly">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <FadeIn direction="left">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 size={48} className="text-caramel mb-4" strokeWidth={1} />
                  <h2 className="font-serif text-2xl text-espresso mb-2">Message sent!</h2>
                  <p className="font-sans text-espresso/60 text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <h2 className="font-serif text-2xl text-espresso mb-6">Send a message</h2>

                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-mist mb-2" htmlFor="name">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={clsx("w-full bg-oat border px-4 py-3 text-sm font-sans text-espresso focus:outline-none focus:border-caramel transition-colors", errors.name ? "border-rose" : "border-oat-dark")}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-xs text-rose mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-mist mb-2" htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={clsx("w-full bg-oat border px-4 py-3 text-sm font-sans text-espresso focus:outline-none focus:border-caramel transition-colors", errors.email ? "border-rose" : "border-oat-dark")}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-xs text-rose mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-mist mb-2" htmlFor="phone">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-oat border border-oat-dark px-4 py-3 text-sm font-sans text-espresso focus:outline-none focus:border-caramel transition-colors"
                      placeholder="+65 9123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-mist mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={clsx("w-full bg-oat border px-4 py-3 text-sm font-sans text-espresso focus:outline-none focus:border-caramel transition-colors resize-none", errors.message ? "border-rose" : "border-oat-dark")}
                      placeholder="Tell us what&apos;s on your mind..."
                    />
                    {errors.message && <p className="text-xs text-rose mt-1">{errors.message}</p>}
                  </div>

                  <button onClick={handleSubmit} className="btn-primary w-full justify-center">
                    Send Message
                  </button>
                </div>
              )}
            </FadeIn>

            {/* Right: Contact info + FAQ */}
            <FadeIn direction="right" delay={0.1}>
              <div>
                <h2 className="font-serif text-2xl text-espresso mb-8">Other ways to reach us</h2>
                <div className="space-y-5 mb-12">
                  <a
                    href="https://instagram.com/rlycoffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-oat hover:bg-oat-dark transition-colors group"
                  >
                    <div className="w-10 h-10 bg-espresso text-cream flex items-center justify-center flex-shrink-0">
                      <Instagram size={16} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-espresso group-hover:text-caramel transition-colors">Instagram</p>
                      <p className="text-xs text-mist">@rlycoffee</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/6512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-oat hover:bg-oat-dark transition-colors group"
                  >
                    <div className="w-10 h-10 bg-espresso text-cream flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={16} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-espresso group-hover:text-caramel transition-colors">WhatsApp</p>
                      <p className="text-xs text-mist">+65 1234 5678 · Usually replies same day</p>
                    </div>
                  </a>
                  <a
                    href="mailto:hello@rlycoffee.com"
                    className="flex items-center gap-4 p-5 bg-oat hover:bg-oat-dark transition-colors group"
                  >
                    <div className="w-10 h-10 bg-espresso text-cream flex items-center justify-center flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-espresso group-hover:text-caramel transition-colors">Email</p>
                      <p className="text-xs text-mist">hello@rlycoffee.com</p>
                    </div>
                  </a>
                </div>

                {/* FAQ */}
                <h3 className="font-serif text-xl text-espresso mb-4">FAQ</h3>
                <div className="border-t border-oat-dark">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="border-b border-oat-dark">
                      <button
                        onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
                        className="w-full flex items-center justify-between py-4 text-left text-sm font-sans text-espresso hover:text-caramel transition-colors"
                      >
                        {faq.q}
                        <ChevronDown
                          size={15}
                          className={clsx("flex-shrink-0 transition-transform duration-200 text-mist", openFaq === faq.q && "rotate-180")}
                        />
                      </button>
                      <AnimatePresence>
                        {openFaq === faq.q && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-espresso/60 pb-4 leading-relaxed font-sans">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
