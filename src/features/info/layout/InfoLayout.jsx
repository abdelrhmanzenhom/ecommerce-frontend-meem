import { Outlet } from "react-router-dom";
import Footer from "../../Shop/Layout/Footer";
import CardHeader from "../../auth/components/CardHeader";
import ThemeToggleButton from "../../../components/theme/ThemeToggleButton";

export default function InfoLayout() {
  return (
    <>
      <header className="flex items-center justify-between p-2">
        <CardHeader />
        <ThemeToggleButton />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
