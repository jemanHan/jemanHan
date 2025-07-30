// src/contexts/CartContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "../data/products";

type CartItem = Product & { quantity: number };

type CartState = CartItem[];

type Action =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "INCREASE_QUANTITY"; payload: string }
  | { type: "DECREASE_QUANTITY"; payload: string };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
}>({ state: [], dispatch: () => null });

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        return state.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((i) => i.id !== action.payload);
    case "INCREASE_QUANTITY":
      return state.map((i) =>
        i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
      );
    case "DECREASE_QUANTITY":
      return state.map((i) =>
        i.id === action.payload
          ? { ...i, quantity: Math.max(1, i.quantity - 1) }
          : i
      );
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
