import { Outlet } from "react-router-dom";
import Footer from "../../Shop/Layout/Footer";
import CardHeader from "../components/CardHeader";
import ThemeToggleButton from "../../../components/theme/ThemeToggleButton";

export default function AuthLayout() {
  return (
    <>
      <header className="px-4 py-2 flex justify-between items-center">
        <CardHeader />
        <ThemeToggleButton />
      </header>
      <div className="flex justify-center my-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
