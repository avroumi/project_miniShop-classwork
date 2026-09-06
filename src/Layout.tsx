import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeContext } from "./context/TheProvider";
import { useContext } from "react";
const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={theme}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
