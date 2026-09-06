import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import type { Product } from "../types/product";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [search, setSearch] = useState<string>("");

  const {
    data: products,
    loading,
    error,
  } = useFetch<Product[]>("https://fakestoreapi.com/products");
  if (loading === true) {
    return <p>Loading ... </p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (!products) {
    return <p>No product</p>;
  }
  const filteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="products-grid">
      <SearchBar search={search} setSearch={setSearch} />
      {filteredProduct.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
