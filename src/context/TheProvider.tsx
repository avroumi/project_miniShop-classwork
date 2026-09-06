import { createContext, useState, type ReactNode } from "react";

export type ThemeProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

interface Provider {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeProps>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: Provider) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
