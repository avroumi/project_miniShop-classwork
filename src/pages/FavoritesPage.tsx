import FavoritesItem from "../components/FavoritesItem";
import useFavoriteStore from "../store/FavoritesStore";

const FavoritesPage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  if (favorites.length === 0) {
    return <p className="favorites">Not favorites yet</p>;
  }

  return (
    <div className="favorites">
      {favorites.map((product) => (
        <FavoritesItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FavoritesPage;
