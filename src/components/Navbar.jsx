import React from "react";
import { ShoppingCart, LogOut } from "lucide-react";
import { NavLink, Outlet } from "react-router";
const Navbar = () => {
  return (
    <div>
    <nav className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Shop<span className="text-gray-800">Ease</span>
        </h1>

        {/* Navigation Items */}
        <div className="flex items-center gap-8">
         <NavLink to={"/main"}>Home</NavLink>
          <NavLink to={"/main/card"}>Cart</NavLink>

          
        </div>

        {/* Logout Button */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </nav>
      <Outlet/>
    </div>
  );
};

export default Navbar;

