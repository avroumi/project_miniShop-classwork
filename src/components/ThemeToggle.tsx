import { useContext } from "react";
import { ThemeContext } from "../context/TheProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={theme === "light" ? "light" : "dark"}
    >
      Mode {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default ThemeToggle;
