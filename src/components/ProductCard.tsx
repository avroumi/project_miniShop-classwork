import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product";
import FavoriteButton from "./ProductDetails";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  return (
    <>
      <article className="productCard">
        <img src={product.image} alt={product.title} />
        <p>Title : {product.title}</p>
        <p>Price : {product.price}</p>
        <button onClick={() => navigate(`/products/${product.id}`)}>
          View ...
        </button>
        <FavoriteButton product={product} />
      </article>
    </>
  );
};

export default ProductCard;
