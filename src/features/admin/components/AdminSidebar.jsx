import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiUsers, FiBox, FiShoppingBag, FiHome } from "react-icons/fi";
import { Button } from "@mui/material";
import { useAuth } from "../../../context/AuthContext";
import ThemeToggleButton from "../../../components/theme/ThemeToggleButton";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  return (
    <>
      {isOpen && (
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          id="aside-backdrop"
          className="bg-black opacity-20 absolute w-full h-full z-20"
        ></div>
      )}
      <div id="placeholder" className="w-16"></div>
      <aside
        className={`${
          isOpen ? "w-64" : "w-16"
        } absolute h-full top-0 left-0  bg-white dark:bg-[#303030] text-gray-800 dark:text-gray-100 shadow-r transition-all duration-300 p-4 z-20`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            !isOpen ? "justify-center" : "justify-between"
          } flex items-center  w-full mb-6`}
        >
          <FiMenu className="text-xl cursor-pointer" />
          {isOpen && <span className="font-bold">Admin</span>}
        </button>

        <nav className="flex flex-col gap-4">
          <Link
            to="/admin"
            className={`${
              !isOpen ? "justify-center" : "justify-start"
            } flex items-center gap-3 hover:text-secondary dark:hover:text-primary`}
          >
            <FiHome />
            {isOpen && <span>Home</span>}
          </Link>
          <Link
            to="users"
            className={`${
              !isOpen ? "justify-center" : "justify-start"
            } flex items-center gap-3 hover:text-secondary dark:hover:text-primary`}
          >
            <FiUsers />
            {isOpen && <span>Users</span>}
          </Link>

          <Link
            to="products"
            className={`${
              !isOpen ? "justify-center" : "justify-start"
            } flex items-center gap-3 hover:text-secondary dark:hover:text-primary`}
          >
            <FiBox />
            {isOpen && <span>Products</span>}
          </Link>

          <Link
            to="orders"
            className={`${
              !isOpen ? "justify-center" : "justify-start"
            } flex items-center gap-3 hover:text-secondary dark:hover:text-primary`}
          >
            <FiShoppingBag />
            {isOpen && <span>Orders</span>}
          </Link>
        </nav>
        {isOpen && (
          <div>
            <Button variant="text" sx={{ marginTop: "40px" }} onClick={logout}>
              Logout
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}
