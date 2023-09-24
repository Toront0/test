import { create } from "zustand";
import { IUseCartState, IUseProducts, IUseToaster } from "./types";

export const useCartState = create<IUseCartState>((set, get) => ({
  items: [],
  addItemToCart(item) {
    set({ items: get().items.concat(item) });
  }
}));

export const useToaster = create<IUseToaster>((set, get) => ({
  toasts: [],
  addToast(t) {
    set({ toasts: get().toasts.concat(t) });
  }
}));

export const useProducts = create<IUseProducts>((set) => ({
  products: [],
  setProducts(p) {
    set({ products: p });
  }
}));
