import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse our full selection of specialty single origins, blends, and seasonal coffees.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
