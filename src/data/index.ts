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
};

export const products: Product[] = [
  {
    id: "1",
    slug: "ethiopia-yirgacheffe",
    name: "Ethiopia Yirgacheffe",
    shortName: "Yirgacheffe",
    category: "single-origin",
    price: 24,
    origin: "Ethiopia",
    roastLevel: "light",
    tastingNotes: ["Jasmine", "Bergamot", "Peach"],
    process: "Natural",
    altitude: "1,700–2,200m",
    description:
      "A stunning natural-processed Ethiopian with a floral, tea-like clarity that punches through every brew method. This is the cup that converts people to specialty coffee.",
    weights: [200, 500, 1000],
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
    featured: true,
    badge: "Fan Favourite",
  },
  {
    id: "2",
    slug: "colombia-huila",
    name: "Colombia Huila",
    shortName: "Huila",
    category: "single-origin",
    price: 22,
    origin: "Colombia",
    roastLevel: "medium",
    tastingNotes: ["Milk Chocolate", "Red Apple", "Caramel"],
    process: "Washed",
    altitude: "1,500–1,900m",
    description:
      "Classic, approachable, and endlessly drinkable. Huila delivers the balanced sweetness that works beautifully as both a daily pour-over and a solid espresso.",
    weights: [200, 500, 1000],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    featured: true,
  },
  {
    id: "3",
    slug: "rly-house-blend",
    name: "RLY House Blend",
    shortName: "House Blend",
    category: "blend",
    price: 20,
    origin: "Multi-Origin",
    roastLevel: "medium",
    tastingNotes: ["Dark Chocolate", "Walnut", "Brown Sugar"],
    process: "Blend",
    description:
      "Our everyday anchor. A rotating seasonal blend dialed to be forgiving, consistent, and damn satisfying whether you pull it as espresso or brew it long.",
    weights: [200, 500, 1000],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    featured: true,
    badge: "Best Seller",
  },
  {
    id: "4",
    slug: "kenya-aa-nyeri",
    name: "Kenya AA Nyeri",
    shortName: "Nyeri",
    category: "single-origin",
    price: 28,
    origin: "Kenya",
    roastLevel: "light",
    tastingNotes: ["Blackcurrant", "Tomato", "Grapefruit"],
    process: "Washed",
    altitude: "1,800–2,100m",
    description:
      "Bold, winey, and unapologetically complex. Nyeri is for those who want their coffee to be an experience, not just a morning habit.",
    weights: [200, 500],
    image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80",
    featured: true,
  },
  {
    id: "5",
    slug: "panama-gesha-seasonal",
    name: "Panama Gesha",
    shortName: "Gesha",
    category: "seasonal",
    price: 48,
    salePrice: 40,
    origin: "Panama",
    roastLevel: "light",
    tastingNotes: ["Elderflower", "Mango", "Earl Grey"],
    process: "Natural",
    altitude: "1,600–1,800m",
    description:
      "The crown jewel of specialty coffee. Rare, fragrant, and impossibly delicate — this Gesha natural is a once-a-season treat that sells out fast.",
    weights: [100, 200],
    image: "https://images.unsplash.com/photo-1532374281531-66e059bdfd7e?w=800&q=80",
    badge: "Limited",
  },
  {
    id: "6",
    slug: "sumatra-mandheling",
    name: "Sumatra Mandheling",
    shortName: "Mandheling",
    category: "single-origin",
    price: 22,
    origin: "Indonesia",
    roastLevel: "dark",
    tastingNotes: ["Cedar", "Dark Chocolate", "Earthy"],
    process: "Wet-hulled",
    altitude: "1,000–1,500m",
    description:
      "Bold and brooding with a velvety body that holds up beautifully with milk. For those who like their coffee to taste like it means it.",
    weights: [200, 500, 1000],
    image: "https://images.unsplash.com/photo-1501747315-124a0eaca060?w=800&q=80",
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
