import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brew Guide",
  description: "Step-by-step brew guides for V60 and Espresso. Brew café-level coffee at home.",
};

export default function BrewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
