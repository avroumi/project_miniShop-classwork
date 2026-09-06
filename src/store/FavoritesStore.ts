import { create } from "zustand";
import type { Product } from "../types/product";

import { persist } from "zustand/middleware";

interface ZustangStore {
  favorites: Product[];
  add: (product: Product) => void;
  remove: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const useFavoriteStore = create<ZustangStore>()(
  persist<ZustangStore>(
    (set, get) => ({
      favorites: [],
      add: (product) =>
        set((state) => ({
          favorites: state.favorites.some((f) => f.id === product.id)
            ? state.favorites
            : [...state.favorites, product],
        })),
      remove: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((product) => product.id !== id),
        })),
      isFavorite: (id) => get().favorites.some((f) => f.id === id),
    }),
    { name: "product-favorites" },
  ),
);
export default useFavoriteStore;
