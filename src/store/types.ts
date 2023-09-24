import { Product } from "@/app/page";
import { StaticImageData } from "next/image";

export type CartItem = {
  id: number;
  added_at: Date;
  img: string;
  title: string;
  price: number;
  amount: number;
  color?: string;
  size?: string;
};

export interface IUseCartState {
  items: CartItem[];
  addItemToCart: (item: CartItem) => void;
}

export type ProductCartToast = {
  id: number;
  title: string;
  img: string;
  price: number;
};

export interface IUseToaster {
  toasts: ProductCartToast[];
  addToast: (t: ProductCartToast) => void;
}

export interface IUseProducts {
  products: Product[];
  setProducts: (p: Product[]) => void;
}
