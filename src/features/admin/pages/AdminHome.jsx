// src/pages/admin/AdminHome.jsx
import { ChartBar, Package, ShoppingBag, UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../api/productsApi";
import { getAllUsers } from "../../../api/usersApi";
import { getAllOrders } from "../../../api/ordersApi";

const AdminHome = () => {
  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
    isSuccess: productsSuccess,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 1000 * 3, // 3 seconds
  });

  const {
    data: usersData,
    isError: usersError,
    isSuccess: usersSuccess,
    isLoading: usersLoading,
  } = useQuery({
    queryKey: ["users"],
    staleTime: 1000 * 60 * 30,
    queryFn: getAllUsers,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 1000 * 3, // 3 seconds
  });

  const {
    data: ordersData,
    isError: ordersError,
    isSuccess: ordersSuccess,
    isLoading: ordersLoading,
  } = useQuery({
    queryKey: ["orders"],
    staleTime: 1000 * 60 * 30,
    queryFn: getAllOrders,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 1000 * 3, // 3 seconds
  });

  const users = usersData || [];
  const products = productsData || [];
  const orders = ordersData || [];

  const totalRevenue = orders.reduce((acc, order) => {
    return acc + order?.totalPrice;
  }, 0);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="min-h-screen  py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* === HEADER === */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-primary mb-4">
            Welcome, Admin 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Welcome to your <strong>meem</strong> admin dashboard — your command
            center for managing products, orders, users, and analytics.
          </p>
        </section>

        {/* === DASHBOARD STATS === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-[#222] rounded-2xl shadow p-6 text-center">
            <ShoppingBag className="h-10 w-10 text-secondary dark:text-primary mx-auto mb-2" />

            {ordersLoading ? (
              "loading..."
            ) : (
              <h3 className="text-2xl font-semibold">{orders.length}</h3>
            )}
            <p className="text-gray-500 dark:text-gray-400">Total Orders</p>
          </div>

          <div className="bg-white dark:bg-[#222] rounded-2xl shadow p-6 text-center">
            <UsersIcon className="h-10 w-10 text-secondary dark:text-primary mx-auto mb-2" />
            {usersLoading ? (
              "loading..."
            ) : (
              <h3 className="text-2xl font-semibold">{users.length}</h3>
            )}
            <p className="text-gray-500 dark:text-gray-400">Registered Users</p>
          </div>

          <div className="bg-white dark:bg-[#222] rounded-2xl shadow p-6 text-center">
            <Package className="h-10 w-10 text-secondary dark:text-primary mx-auto mb-2" />
            {productsLoading ? (
              "loading..."
            ) : (
              <h3 className="text-2xl font-semibold">{products.length}</h3>
            )}
            <p className="text-gray-500 dark:text-gray-400">Products Listed</p>
          </div>

          <div className="bg-white dark:bg-[#222] rounded-2xl shadow p-6 text-center">
            <ChartBar className="h-10 w-10 text-secondary dark:text-primary mx-auto mb-2" />
            {ordersLoading ? (
              "loading..."
            ) : (
              <h3 className="text-2xl font-semibold wrap-break-word">
                {formatter.format(totalRevenue)}
              </h3>
            )}
            <p className="text-gray-500 dark:text-gray-400">Total Revenue</p>
          </div>
        </div>

        {/* === QUICK ACTIONS === */}
        <h2 className="text-2xl font-semibold text-secondary dark:text-primary mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col justify-between bg-white dark:bg-[#222] rounded-2xl shadow hover:shadow-lg transition-shadow p-6 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Manage Products</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Add, edit, or remove items in your store.
              </p>
            </div>
            <Link className="block bg-secondary dark:bg-primary  hover:bg-primary dark:hover:bg-secondary text-white dark:text-black cursor-pointer px-5 py-2 rounded-lg font-medium transition-colors">
              Go to Products
            </Link>
          </div>

          <div className="flex flex-col justify-between bg-white dark:bg-[#222] rounded-2xl shadow hover:shadow-lg transition-shadow p-6 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">View Orders</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Track and manage recent orders.
              </p>
            </div>
            <Link className=" block bg-secondary dark:bg-primary  hover:bg-primary dark:hover:bg-secondary text-white dark:text-black cursor-pointer px-5 py-2 rounded-lg font-medium transition-colors">
              Go to Orders
            </Link>
          </div>

          <div className="flex flex-col justify-between bg-white dark:bg-[#222] rounded-2xl shadow hover:shadow-lg transition-shadow p-6 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Manage Users</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                View registered users and manage roles.
              </p>
            </div>
            <Link className="block bg-secondary dark:bg-primary  hover:bg-primary dark:hover:bg-secondary text-white dark:text-black cursor-pointer px-5 py-2 rounded-lg font-medium transition-colors">
              Go to Users
            </Link>
          </div>

          <div className="flex flex-col justify-between bg-white dark:bg-[#222] rounded-2xl shadow hover:shadow-lg transition-shadow p-6 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Review key performance metrics and insights.
              </p>
            </div>
            <Link className="block bg-secondary dark:bg-primary  hover:bg-primary dark:hover:bg-secondary text-white dark:text-black cursor-pointer px-5 py-2 rounded-lg font-medium transition-colors">
              View Analytics
            </Link>
          </div>
        </div>

        {/* === FOOTER === */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Admin Dashboard • meem © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
