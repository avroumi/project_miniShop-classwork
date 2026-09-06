import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { Product } from "../types/product";
import NotFound from "../components/NotFound";
import { FavoriteButton } from "../components/ProductDetails";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    error,
    loading,
  } = useFetch<Product>(`https://fakestoreapi.com/products/${id}`);
  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <button onClick={() => navigate(-1)}>Back home </button>
      <article className="productPage">
        <img src={product.image} alt={product.title} />
        <p>Title : {product.title}</p>
        <p>Price : {product.price}</p>
        <p>Description : {product.description}</p>
        <p>Category : {product.category}</p>
        <FavoriteButton product={product} />
      </article>
    </>
  );
};

export default ProductPage;
