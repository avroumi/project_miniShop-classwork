import useFavoriteStore from "../store/FavoritesStore";
import type { Product } from "../types/product";
interface ProductFavoritesProps {
  product: Product;
}

export const FavoriteButton = ({ product }: ProductFavoritesProps) => {
  const isFavorite = useFavoriteStore((state) => state.isFavorite);
  const add = useFavoriteStore((state) => state.add);
  const remove = useFavoriteStore((state) => state.remove);
  return (
    <div>
      {!isFavorite(product.id) ? (
        <button onClick={() => add(product)}>add </button>
      ) : (
        <button onClick={() => remove(product.id)}>remove </button>
      )}
    </div>
  );
};

export default FavoriteButton;
