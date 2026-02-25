"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-espresso text-cream text-center py-2.5 px-4 text-[11px] tracking-widest uppercase font-sans relative z-50">
      <span>Free shipping on orders over $60 — Singapore only</span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors"
      >
        <X size={13} />
      </button>
    </div>
  );
}
