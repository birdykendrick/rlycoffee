export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: "single-origin" | "blend" | "seasonal";
  price: number;
  salePrice?: number;
  soldOut?: boolean;
  badge?: string;
  origin: string;
  roastLevel: "light" | "medium" | "medium-dark" | "dark";
  tastingNotes: string[];
  process: string;
  altitude?: string;
  description: string;
  weights: number[];
  image: string;
  featured?: boolean;
  bg?: { from: string; via: string; to: string };
};

// add this to your Product type if needed:
// bg?: string;

// src/data/index.ts
// (Only the 6 products part — paste/replace your products array with this if you want)

export const products: Product[] = [
  {
    id: "1",
    slug: "yunnan-baoshan",
    name: "Rly Coffee - Yunnan Baoshan Coffee Beans [200g]",
    shortName: "Yunnan Baoshan",
    category: "single-origin",
    price: 16.99,
    salePrice: 16.0,
    origin: "China · Yunnan",
    roastLevel: "medium",
    tastingNotes: ["Rum", "Whiskey", "Candied Fruit"],
    process: "Washed",
    altitude: "1,200–1,600m",
    description:
      "Sweet, clean, and super approachable — a crowd-pleasing daily driver with cocoa sweetness and a soft fruit finish.",
    weights: [200],
    image: "/yunnan.png",
    bg: { from: "#3b1417", via: "#7b3a45", to: "#f3eee7" },
    featured: true,
    badge: "Sale",
  },
  {
    id: "2",
    slug: "really-gesha",
    name: "Rly Coffee - Really Gesha Blend Coffee Beans [200g]",
    shortName: "Really Gesha",
    category: "blend",
    price: 19.99,
    salePrice: 17.0,
    origin: "Blend",
    roastLevel: "light",
    tastingNotes: ["Candied Fruit", "Floral Notes", "Brown Sugar"],
    process: "Blend",
    altitude: "Seasonal components",
    description:
      "A bright, aromatic blend built for clarity — floral lift, citrus sparkle, and a clean tea-like finish.",
    weights: [200],
    image: "/reallygesha.png",
    bg: { from: "#3a0b3f", via: "#8a1f93", to: "#f3eee7" },
    featured: true,
    badge: "Sale",
  },
  {
    id: "3",
    slug: "really-hearty",
    name: "Rly Coffee - Really Hearty Blend Coffee Beans [200g]",
    shortName: "Really Hearty",
    category: "blend",
    price: 16.99,
    salePrice: 12.5,
    origin: "Blend",
    roastLevel: "medium",
    tastingNotes: ["Chocolate", "Jammy", "Smooth"],
    process: "Blend",
    altitude: "Seasonal components",
    description:
      "Comforting and rich — chocolate depth with a jammy sweetness. Great black, even better with milk.",
    weights: [200],
    image: "/reallyhearty.png",
    bg: { from: "#8a2b63", via: "#f18abf", to: "#f3eee7" },
    featured: true,
    badge: "Sale",
  },
  {
    id: "4",
    slug: "berry-peachy",
    name: "Rly Coffee - Berry Peachy Blend Coffee Beans [100g]",
    shortName: "Berry Peachy",
    category: "blend",
    price: 17.99,
    origin: "Blend",
    roastLevel: "light",
    tastingNotes: ["Berry", "Peach", "Candy-like"],
    process: "Blend",
    altitude: "Seasonal components",
    description:
      "Fruity and playful — ripe berry sweetness with a peachy finish. A fun, bright cup that pops.",
    weights: [100],
    image: "/berrypeachy.png",
    bg: { from: "#8b4b3b", via: "#e6b19b", to: "#f3eee7" },
    featured: true,
  },
  {
    id: "5",
    slug: "heza-badass",
    name: "Rly Coffee - Heza Badass Blend Coffee Beans [200g]",
    shortName: "Heza Badass",
    category: "blend",
    price: 16.50,
    origin: "Blend",
    roastLevel: "medium",
    tastingNotes: ["Dark Chocolate", "Caramel", "Bold"],
    process: "Blend",
    altitude: "Seasonal components",
    description:
      "Big and bold — syrupy chocolate, caramel sweetness, and a punchy finish. Built to shine in milk drinks.",
    weights: [200],
    image: "/heza%20badass.png",
    bg: { from: "#1e1a16", via: "#6b4a3a", to: "#f3eee7" },
    featured: true,
  },
  {
    id: "6",
    slug: "summer-pop",
    name: "Rly Coffee - Summer Pop Blend Coffee Beans [200g]",
    shortName: "Summer Pop",
    category: "blend",
    price: 18.99,
    origin: "Blend",
    roastLevel: "light",
    tastingNotes: ["Tropical", "Peach", "Juicy"],
    process: "Blend",
    altitude: "Seasonal components",
    description:
      "Juicy and bright — tropical fruit vibes with a clean peachy finish. Made for iced brews and sunny days.",
    weights: [200],
    image: "/summerpop.png",
    bg: { from: "#c84a2a", via: "#ffb347", to: "#f3eee7" },
    featured: true,
  },
];

export type BrewGuide = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  time: string;
  yield: string;
  difficulty: "Easy" | "Intermediate" | "Advanced";
  equipment: string[];
  ingredients: { label: string; value: string }[];
  steps: { title: string; duration?: string; description: string }[];
  tips: string[];
};

export const brewGuides: BrewGuide[] = [
  {
    id: "v60",
    slug: "v60",
    name: "V60 Pour-over",
    subtitle: "Clean, bright, and expressive. The best way to let great beans speak.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    time: "4–5 min",
    yield: "300ml",
    difficulty: "Intermediate",
    equipment: ["V60 dripper (size 02)", "Paper filter", "Gooseneck kettle", "Grinder", "Scale", "Timer"],
    ingredients: [
      { label: "Coffee", value: "18g (medium-fine grind)" },
      { label: "Water", value: "300ml at 93–96°C" },
      { label: "Ratio", value: "1:16.5" },
    ],
    steps: [
      {
        title: "Rinse & preheat",
        duration: "0:00",
        description:
          "Place filter in V60 and rinse with hot water to remove papery taste and preheat your dripper and cup. Discard rinse water.",
      },
      {
        title: "Grind & dose",
        duration: "0:30",
        description: "Grind 18g of coffee to a medium-fine consistency (similar to table salt). Add to rinsed filter.",
      },
      {
        title: "Bloom",
        duration: "1:00",
        description:
          "Pour 36ml (2× coffee weight) of water in slow circles to saturate all grounds. Wait 30–45 seconds. A good bloom means fresh coffee.",
      },
      {
        title: "First pour",
        duration: "1:45",
        description: "Pour slowly from centre outward in spiral motions to reach 150ml total. Maintain a steady flow rate.",
      },
      {
        title: "Second pour",
        duration: "2:30",
        description: "Continue pouring to 250ml. Keep water level consistent — don't let it drain completely before pouring.",
      },
      {
        title: "Final pour",
        duration: "3:15",
        description: "Pour to 300ml total. Aim for draw-down to finish between 3:30 and 4:00.",
      },
    ],
    tips: [
      "Use a gooseneck kettle for pour control — it makes a real difference.",
      "Grind fresh, just before brewing. Pre-ground coffee loses aromatics fast.",
      "If brew is too slow, grind coarser. Too fast, grind finer.",
      "Light roasts shine here — try our Ethiopia Yirgacheffe.",
    ],
  },
  {
    id: "espresso",
    slug: "espresso",
    name: "Espresso",
    subtitle: "Concentrated, sweet, and intense. The foundation of café culture.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=1200&q=80",
    time: "25–30 sec",
    yield: "36ml",
    difficulty: "Advanced",
    equipment: ["Espresso machine", "Portafilter + basket", "Tamper", "Grinder", "Scale", "Timer"],
    ingredients: [
      { label: "Coffee (dose)", value: "18g (fine grind)" },
      { label: "Yield (output)", value: "36ml" },
      { label: "Ratio", value: "1:2" },
      { label: "Water temp", value: "92–94°C" },
    ],
    steps: [
      {
        title: "Preheat machine",
        description: "Run a shot of water through the grouphead to stabilise temperature. Wipe dry.",
      },
      {
        title: "Grind & dose",
        description: "Grind 18g into your portafilter basket. Distribute evenly across the puck with a finger sweep.",
      },
      {
        title: "Tamp",
        description: "Apply firm, level pressure (~15kg) with your tamper. Consistency here is everything.",
      },
      {
        title: "Lock & pull",
        duration: "0:00",
        description:
          "Lock in the portafilter, start your timer, and begin extraction immediately. You should see a slow, honey-like stream emerge after 5–8 seconds.",
      },
      {
        title: "Dial in your shot",
        duration: "0:25",
        description:
          "Target 36ml yield in 25–30 seconds. If too fast (under 20s), grind finer. If too slow (over 35s), grind coarser.",
      },
    ],
    tips: [
      "Dial in one variable at a time — grind size is the most powerful lever.",
      "Fresh beans (3–14 days post-roast) pull the best shots.",
      "Bitterness = over-extracted. Sourness = under-extracted. Aim for sweet.",
      "Our House Blend is dialled for espresso. Try it first.",
    ],
  },
];
