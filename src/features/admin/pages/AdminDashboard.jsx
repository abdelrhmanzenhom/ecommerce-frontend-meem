// src/routes/admin/pages/AdminDashboard.jsx
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import ThemeToggleButton from "../../../components/theme/ThemeToggleButton";

export default function AdminDashboard() {
  return (
    <>
      <title>Admin | meem</title>
      <div className="absolute right-0 top-0 p-2 z-10">
        <ThemeToggleButton />
      </div>
      <div className="flex min-h-screen relative  dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-100">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
}
