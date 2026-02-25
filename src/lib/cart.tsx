"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "@/data";

export type CartItem = {
  product: Product;
  weight: number;
  quantity: number;
};

type CartState = { items: CartItem[]; open: boolean };

type CartAction =
  | { type: "ADD"; product: Product; weight: number }
  | { type: "REMOVE"; id: string; weight: number }
  | { type: "INCREMENT"; id: string; weight: number }
  | { type: "DECREMENT"; id: string; weight: number }
  | { type: "OPEN" }
  | { type: "CLOSE" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.findIndex(
        (i) => i.product.id === action.product.id && i.weight === action.weight
      );
      if (existing >= 0) {
        const items = [...state.items];
        items[existing] = { ...items[existing], quantity: items[existing].quantity + 1 };
        return { ...state, items, open: true };
      }
      return {
        ...state,
        items: [...state.items, { product: action.product, weight: action.weight, quantity: 1 }],
        open: true,
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => !(i.product.id === action.id && i.weight === action.weight)) };
    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.id && i.weight === action.weight ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.product.id === action.id && i.weight === action.weight ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0),
      };
    case "OPEN":
      return { ...state, open: true };
    case "CLOSE":
      return { ...state, open: false };
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  total: number;
  count: number;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], open: false });
  const total = state.items.reduce((sum, i) => {
    const price = i.product.salePrice ?? i.product.price;
    return sum + price * i.quantity;
  }, 0);
  const count = state.items.reduce((sum, i) => sum + i.quantity, 0);
  return <CartContext.Provider value={{ state, dispatch, total, count }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
