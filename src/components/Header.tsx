import { Link } from "react-router-dom";
import useFavoriteStore from "../store/FavoritesStore";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  return (
    <>
      <header className="header">
        <h1>Mini Shop</h1>
        <ThemeToggle />
        <nav className="nav">
          <Link to={"/"}>Home Page</Link>

          <div className="favorites">
            <Link to={"/favorites"}>Favorites</Link>({favorites.length})
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
