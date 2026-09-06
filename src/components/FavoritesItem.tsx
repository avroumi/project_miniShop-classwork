import type { Product } from "../types/product";
import FavoriteButton from "./ProductDetails";

interface FavoriteProps {
  product: Product;
}

const FavoritesItem = ({ product }: FavoriteProps) => {
  return (
    <div className="favoriteItem">
      <img src={product.image} alt={product.title} />
      <p>Title : {product.title}</p>
      <p>Price : {product.price}</p>
      <p>Description : {product.description}</p>
      <p>Category : {product.category}</p>
      <FavoriteButton product={product} />
    </div>
  );
};

export default FavoritesItem;
