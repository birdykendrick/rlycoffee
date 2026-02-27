"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-espresso text-cream text-center py-2.5 px-4 text-[11px] tracking-widest uppercase font-sans relative z-50">
      <span>Exclusive website-only free shipping on orders above SGD$25.</span>
    </div>
  );
}
