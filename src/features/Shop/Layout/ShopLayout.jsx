import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CategoriesBar from "../components/CategoriesBar";

function ShopLayout() {
  return (
    <div>
      <Navbar />
      <CategoriesBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default ShopLayout;
